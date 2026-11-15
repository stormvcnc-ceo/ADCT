import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
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
        <div className="space-y-6 p-10 rounded-xl bg-white border border-zinc-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] max-w-md w-full">
          <div className="text-5xl font-semibold font-mono text-zinc-400">404</div>
          <div className="space-y-2">
            <h1 className="text-xl font-semibold text-zinc-950">페이지를 찾을 수 없습니다</h1>
            <p className="text-sm text-zinc-600 leading-relaxed">
              요청하신 주소가 변경되었거나 삭제되어 찾을 수 없습니다. 올바른 경로인지 확인해 주세요.
            </p>
          </div>
          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-zinc-950 hover:bg-zinc-800 text-zinc-50 text-xs font-medium transition-all active:scale-[0.98]"
            >
              메인 홈으로 이동하기
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
