import { useEffect, useRef } from 'react';

declare global {
    interface Window {
        kakao: any;
    }
}

const KakaoMap = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<any>(null);

    useEffect(() => {
        if (document.getElementById('kakao-map-script')) {
            if (window.kakao && window.kakao.maps) {
                window.kakao.maps.load(() => initMap());
            }
            return;
        }

        const script = document.createElement('script');
        script.id = 'kakao-map-script';
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_API_KEY}&autoload=false&libraries=services`;
        script.async = true;

        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => initMap());
        };

        return () => {
            // Cleanup script tag if needed, but usually fine to leave it for SPA navigation
            // document.head.removeChild(script); 
            // Removing script might break re-navigation if not handled carefully with checking presence
        };
    }, []);

    const initMap = () => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        // 더 정확한 초기 좌표 (ADCT 오션타워 위치)
        const defaultCoords = new window.kakao.maps.LatLng(35.156826, 129.150821);

        const options = {
            center: defaultCoords,
            level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        mapRef.current = map;

        // ResizeObserver를 사용하여 컨테이너 크기 변경 감지 (모바일 반응형 대응)
        let resizeObserver: ResizeObserver | null = null;

        const handleResize = () => {
            if (mapRef.current) {
                // 지도 재조정
                mapRef.current.relayout();
                // 중심 재설정 (주소 검색 결과가 있으면 그 좌표로, 없으면 기본 좌표로)
                const currentCenter = mapRef.current.getCenter();
                mapRef.current.setCenter(currentCenter);
            }
        };

        // Window resize 이벤트 리스너
        window.addEventListener('resize', handleResize);

        // ResizeObserver로 컨테이너 크기 변경 감지
        if (typeof ResizeObserver !== 'undefined') {
            resizeObserver = new ResizeObserver(() => {
                handleResize();
            });
            resizeObserver.observe(container);
        }

        // Geocoder로 정확한 좌표 검색
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch('부산광역시 해운대구 해운대해변로 203', function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
                const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

                // 지도 재조정 후 중심 설정 (모바일에서 중요)
                map.relayout();
                map.setCenter(coords);

                // 마커 생성
                const marker = new window.kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                // 정보창
                const infowindow = new window.kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:6px 0;font-size:14px;color:#000;">ADCT</div>'
                });
                infowindow.open(map, marker);

                // 주소 검색 완료 후 약간의 지연을 두고 다시 중심 설정 (모바일 렌더링 타이밍 이슈 대응)
                setTimeout(() => {
                    map.relayout();
                    map.setCenter(coords);
                }, 100);
            }
        });

        // Cleanup 함수
        return () => {
            window.removeEventListener('resize', handleResize);
            if (resizeObserver) {
                resizeObserver.disconnect();
            }
        };
    };

    return (
        <div
            ref={containerRef}
            className="w-full h-full rounded-lg"
            style={{ minHeight: '300px' }}
        />
    );
};

export default KakaoMap;
