import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center space-y-6 p-10 rounded-3xl bg-white/[0.02] border border-white/10 max-w-md shadow-2xl backdrop-blur-xl">
          <div className="text-7xl font-black font-mono text-cyan-400">404</div>
          <h1 className="text-2xl font-bold text-white">페이지를 찾을 수 없습니다</h1>
          <p className="text-sm text-slate-400 font-light leading-relaxed">
            요청하신 주소가 변경되었거나 삭제되어 찾을 수 없습니다. 올바른 경로인지 확인해 주세요.
          </p>
          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold hover:scale-105 transition-all shadow-lg shadow-cyan-500/20"
            >
              메인 홈으로 이동하기 →
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
