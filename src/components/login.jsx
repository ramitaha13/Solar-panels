import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sun,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  CheckCircle,
} from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // כאן תוכל להוסיף לוגיקת התחברות
    console.log("Login attempt:", formData);
    // ניתוב לדף הדשבורד אחרי התחברות מוצלחת
    navigate("/dashboard");
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 flex items-center justify-center p-6"
      dir="rtl"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {/* Right Side - Branding */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-amber-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-yellow-300 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-amber-400 p-3 rounded-full">
                <Sun className="w-8 h-8 text-emerald-900" />
              </div>
              <h1 className="text-3xl font-bold">סולאר פרו</h1>
            </div>

            <h2 className="text-4xl font-bold mb-6 leading-tight">
              ברוכים הבאים למערכת
              <br />
              <span className="text-amber-300">ניהול הלקוחות</span>
            </h2>

            <p className="text-emerald-100 text-lg mb-12 leading-relaxed">
              גישה מהירה לכל הנתונים שלכם, מעקב אחר הזמנות, וניהול פרויקטים
              סולאריים בקלות.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {[
                "מעקב אחר פרויקטים בזמן אמת",
                "ניהול הצעות מחיר וחשבוניות",
                "גישה למסמכים ודוחות",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-emerald-600 p-1 rounded-full">
                    <CheckCircle className="w-5 h-5 text-amber-300" />
                  </div>
                  <span className="text-emerald-100">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Left Side - Login Form */}
        <div className="flex flex-col justify-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
              <div className="bg-amber-400 p-2 rounded-full">
                <Sun className="w-6 h-6 text-emerald-900" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">סולאר פרו</h1>
            </div>

            {/* Back Button */}
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-gray-600 hover:text-emerald-700 transition-colors mb-6"
            >
              <ArrowRight className="w-5 h-5" />
              <span>חזור לדף הבית</span>
            </button>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                כניסה למערכת
              </h2>
              <p className="text-gray-600">
                הזן את פרטי ההתחברות שלך כדי להמשיך
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  אימייל
                </label>
                <div className="relative">
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  סיסמה
                </label>
                <div className="relative">
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="w-full pr-12 pl-12 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                  />
                  <span className="text-sm text-gray-600">זכור אותי</span>
                </label>
                <button
                  type="button"
                  className="text-sm text-emerald-700 hover:text-emerald-600 font-medium"
                >
                  שכחת סיסמה?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Shield className="w-5 h-5" />
                התחבר למערכת
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-sm text-gray-500">או</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-gray-600">
                עדיין אין לך חשבון?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/quote-calculator")}
                  className="text-emerald-700 hover:text-emerald-600 font-bold"
                >
                  קבל הצעת מחיר
                </button>
              </p>
            </div>

            {/* Security Notice */}
            <div className="mt-8 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-700">
                  <span className="font-medium text-emerald-700">
                    חיבור מאובטח:
                  </span>{" "}
                  הנתונים שלך מוגנים בהצפנה ברמה בנקאית
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
