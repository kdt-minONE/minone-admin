import { Button } from "../ui/button";
import { useAuthStore } from "../../store/authStore";
import { LogOut, User } from "lucide-react";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  // Zustand store
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    alert("로그아웃되었습니다.");
  };

  return (
    <header className="minone-header px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold" style={{ color: "#3366cc" }}>
            민ONE
          </h1>
          <span className="text-gray-500 ml-1.5 flex items-center">
            AI와 함께하는 스마트 민원
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <>
            <div className="flex items-center space-x-2 mr-4">
              <User className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700">{user?.name}님</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="flex items-center space-x-1"
            >
              <LogOut className="w-4 h-4" />
              <span>로그아웃</span>
            </Button>
          </>
        </div>
      </div>
    </header>
  );
};
