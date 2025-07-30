import { ReactNode, useEffect } from "react";
import { Header } from "../Header";
import { useAuthStore } from "../../store";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className = "" }: LayoutProps) => {
  const { user } = useAuthStore();

  useEffect(() => {
    if (!user) {
      alert("로그인이 필요합니다.");
      window.location.replace("/login");
    }
  }, [user]);

  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
};
