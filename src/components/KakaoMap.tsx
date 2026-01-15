import { useEffect, useRef } from 'react';

declare global {
    interface Window {
        kakao: any;
    }
}

const KakaoMap = () => {
    const containerRef = useRef<HTMLDivElement>(null);

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
        const options = {
            center: new window.kakao.maps.LatLng(35.1586, 129.1536), // Default fallback: approximate Ocean Tower
            level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        // Resize observer to handle container size changes
        // checking if ResizeObserver is supported or just simple resize event
        const handleResize = () => {
            map.relayout();
            map.setCenter(new window.kakao.maps.LatLng(35.156826, 129.150821)); // Re-center on resize
        };
        window.addEventListener('resize', handleResize);


        // Geocoder to get exact coords
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch('부산광역시 해운대구 해운대해변로 203', function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
                const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

                // Update center 
                map.setCenter(coords);

                // Marker
                const marker = new window.kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                // Window with info
                const infowindow = new window.kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:6px 0;font-size:14px;color:#000;">ADCT</div>'
                });
                infowindow.open(map, marker);
            }
        });

        // Return cleanup function for this specific map instance
        return () => {
            window.removeEventListener('resize', handleResize);
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
