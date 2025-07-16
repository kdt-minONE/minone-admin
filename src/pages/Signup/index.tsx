import React, { useEffect, useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/dropdown";
import { useSignup } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export interface SignupFormData {
  email: string;
  password: string;
  name: string;
  phone: string;
  departmentId: number;
}

const Signup = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    email: "",
    password: "",
    name: "",
    phone: "",
    departmentId: 0,
  });
  const [req, res] = useSignup();
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
    req(formData);
  };

  const handleDepartmentChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      departmentId: parseInt(value, 10),
    }));
  };

  useEffect(() => {
    if (res.data && res.called) {
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    }
  }, [res, navigate]);

  return (
    <div className="min-h-screen bg-minone-bg flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header Section */}
          <div className="bg-minone-header px-8 py-6 border-b border-gray-200">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">
                관리자 회원가입
              </h1>
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
                  placeholder="8자 이상 입력하세요"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-700"
                >
                  이름
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="h-11 border-gray-300 focus:border-primary-500 focus:ring-primary-500/20"
                  placeholder="홍길동"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-sm font-semibold text-gray-700"
                >
                  전화번호
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="h-11 border-gray-300 focus:border-primary-500 focus:ring-primary-500/20"
                  placeholder="010-0000-0000"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="department"
                  className="text-sm font-semibold text-gray-700"
                >
                  부서
                </Label>
                <Select onValueChange={handleDepartmentChange}>
                  <SelectTrigger className="h-11 border-gray-300 focus:border-primary-500 focus:ring-primary-500/20">
                    <SelectValue placeholder="부서를 선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">환경부</SelectItem>
                    <SelectItem value="2">도로교통부</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full h-12 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  관리자 계정 생성
                </Button>
              </div>
            </form>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500">
                이미 계정이 있으신가요?{" "}
                <a
                  href="/login"
                  className="text-primary-500 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  로그인하기
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
