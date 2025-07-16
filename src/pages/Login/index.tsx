import React, { useEffect, useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useLogin } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [req, res] = useLogin();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    req(formData.email, formData.password);
  };

  useEffect(() => {
    if (res.data && res.called) {
      alert("로그인 되었습니다.");
      navigate("/");
    }
  }, [res, navigate]);

  return (
    <div className="min-h-screen bg-minone-bg flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header Section */}
          <div className="bg-minone-header px-8 py-6 border-b border-gray-200">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                관리자 로그인
              </h1>
              <p className="text-sm text-gray-600">
                민원 관리 시스템에 로그인하세요
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="px-8 py-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-700"
                >
                  이메일 주소
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-11 border-gray-300 focus:border-primary-500 focus:ring-primary-500/20"
                  placeholder="admin@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-700"
                >
                  비밀번호
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="h-11 border-gray-300 focus:border-primary-500 focus:ring-primary-500/20"
                  placeholder="비밀번호를 입력하세요"
                  required
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full h-12 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  로그인
                </Button>
              </div>
            </form>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500">
                계정이 없으신가요?{" "}
                <a
                  href="/signup"
                  className="text-primary-500 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  회원가입하기
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
