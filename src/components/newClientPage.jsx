import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sun,
  Users,
  FileText,
  Settings,
  LogOut,
  Bell,
  Menu,
  X,
  ChevronDown,
  Package,
  User,
  Mail,
  Phone,
  MapPin,
  Building2,
  Star,
  Save,
  ArrowRight,
  Calendar,
  FileCheck,
  Briefcase,
  Hash,
} from "lucide-react";

export default function NewClientPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    // שלב 1 - פרטים בסיסיים
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",

    // שלב 2 - סיווג ומידע נוסף
    type: "פרטי",
    status: "פעיל",
    rating: 5,
    source: "",
    notes: "",

    // שלב 3 - איש קשר נוסף (אופציונלי)
    additionalContact: {
      name: "",
      phone: "",
      email: "",
      role: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdditionalContactChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      additionalContact: {
        ...prev.additionalContact,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // כאן תוסיף את הלוגיקה לשמירת הלקוח
    console.log("Form Data:", formData);
    // חזרה לדף הלקוחות
    navigate("/clients");
  };

  const sidebarItems = [
    { id: "profile", label: "פרטים אישיים", icon: User, path: "/dashboard" },
    { id: "projects", label: "פרויקטים", icon: Package, path: "/projects" },
    { id: "quotes", label: "הצעות מחיר", icon: FileText, path: "/quotes" },
    { id: "clients", label: "לקוחות", icon: Users, path: "/clients" },
    { id: "settings", label: "הגדרות", icon: Settings, path: "/settings" },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  const steps = [
    { number: 1, title: "פרטים בסיסיים", icon: User },
    { number: 2, title: "סיווג ומידע", icon: FileCheck },
    { number: 3, title: "איש קשר נוסף", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-emerald-800 to-emerald-900 text-white transform transition-transform duration-300 ease-in-out z-50 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-emerald-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-amber-400 p-2 rounded-full">
                  <Sun className="w-6 h-6 text-emerald-900" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">סולאר פרו</h1>
                  <p className="text-xs text-emerald-200">לוח ניהול</p>
                </div>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="md:hidden text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === "clients";
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    navigate(item.path);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-emerald-700 shadow-lg"
                      : "hover:bg-emerald-700/50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-emerald-700">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-emerald-700 transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">התנתק</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="md:mr-64">
        {/* Top Bar */}
        <header className="bg-white shadow-sm sticky top-0 z-40">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">לקוח חדש</h2>
                <p className="text-sm text-gray-500">הוסף לקוח חדש למערכת</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* User Menu */}
              <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-xl cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold">
                  א
                </div>
                <div className="hidden md:block text-right">
                  <p className="text-sm font-medium text-gray-900">
                    אדמין ראשי
                  </p>
                  <p className="text-xs text-gray-500">admin@solarpro.co.il</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6 max-w-5xl mx-auto">
          {/* Progress Steps */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = currentStep === step.number;
                const isCompleted = currentStep > step.number;

                return (
                  <React.Fragment key={step.number}>
                    <div className="flex flex-col items-center gap-2 flex-1">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                          isCompleted
                            ? "bg-green-500 text-white"
                            : isActive
                              ? "bg-emerald-600 text-white"
                              : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        <StepIcon className="w-6 h-6" />
                      </div>
                      <div className="text-center">
                        <p
                          className={`text-sm font-medium ${
                            isActive || isCompleted
                              ? "text-gray-900"
                              : "text-gray-500"
                          }`}
                        >
                          {step.title}
                        </p>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flex-1 h-0.5 bg-gray-200 mx-4 mt-[-2rem]">
                        <div
                          className={`h-full transition-all ${
                            currentStep > step.number
                              ? "bg-green-500"
                              : "bg-gray-200"
                          }`}
                        ></div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-2xl shadow-sm p-8">
              {/* Step 1: Basic Info */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      פרטים בסיסיים
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          שם מלא / שם החברה *
                        </label>
                        <div className="relative">
                          <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                            placeholder="לדוגמה: דוד כהן או חברת טק בע״מ"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          אימייל *
                        </label>
                        <div className="relative">
                          <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                            placeholder="example@email.com"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          טלפון *
                        </label>
                        <div className="relative">
                          <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                            placeholder="050-1234567"
                          />
                        </div>
                      </div>

                      {/* Address */}
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          כתובת *
                        </label>
                        <div className="relative">
                          <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                            className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                            placeholder="רחוב הרצל 25"
                          />
                        </div>
                      </div>

                      {/* City */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          עיר *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                          placeholder="תל אביב"
                        />
                      </div>

                      {/* Zip Code */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          מיקוד
                        </label>
                        <div className="relative">
                          <Hash className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                            placeholder="1234567"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Classification & Info */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      סיווג ומידע נוסף
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Type */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          סוג לקוח *
                        </label>
                        <div className="relative">
                          <Building2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                          <select
                            name="type"
                            value={formData.type}
                            onChange={handleInputChange}
                            className="appearance-none w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all bg-white cursor-pointer"
                          >
                            <option value="פרטי">פרטי</option>
                            <option value="עסקי">עסקי</option>
                            <option value="ציבורי">ציבורי</option>
                          </select>
                        </div>
                      </div>

                      {/* Status */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          סטטוס
                        </label>
                        <select
                          name="status"
                          value={formData.status}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all bg-white cursor-pointer"
                        >
                          <option value="פעיל">פעיל</option>
                          <option value="VIP">VIP</option>
                          <option value="לא פעיל">לא פעיל</option>
                        </select>
                      </div>

                      {/* Source */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          מקור הפניה
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                          <select
                            name="source"
                            value={formData.source}
                            onChange={handleInputChange}
                            className="appearance-none w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all bg-white cursor-pointer"
                          >
                            <option value="">בחר מקור</option>
                            <option value="המלצה">המלצה</option>
                            <option value="אתר אינטרנט">אתר אינטרנט</option>
                            <option value="פרסום">פרסום</option>
                            <option value="רשתות חברתיות">רשתות חברתיות</option>
                            <option value="אחר">אחר</option>
                          </select>
                        </div>
                      </div>

                      {/* Rating */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          דירוג
                        </label>
                        <div className="flex items-center gap-2 pt-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() =>
                                setFormData((prev) => ({
                                  ...prev,
                                  rating: star,
                                }))
                              }
                              className="focus:outline-none transition-transform hover:scale-110"
                            >
                              <Star
                                className={`w-8 h-8 transition-all ${
                                  star <= formData.rating
                                    ? "fill-amber-400 text-amber-400"
                                    : "text-gray-300 hover:text-amber-200"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Notes */}
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          הערות
                        </label>
                        <textarea
                          name="notes"
                          value={formData.notes}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all resize-none"
                          placeholder="הוסף הערות או מידע נוסף על הלקוח..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Additional Contact */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      איש קשר נוסף
                    </h3>
                    <p className="text-gray-600 mb-6">
                      (אופציונלי) הוסף איש קשר נוסף עבור לקוח זה
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Additional Contact Name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          שם
                        </label>
                        <div className="relative">
                          <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.additionalContact.name}
                            onChange={handleAdditionalContactChange}
                            className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                            placeholder="שם איש הקשר"
                          />
                        </div>
                      </div>

                      {/* Additional Contact Role */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          תפקיד
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="role"
                            value={formData.additionalContact.role}
                            onChange={handleAdditionalContactChange}
                            className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                            placeholder="לדוגמה: מנהל רכש"
                          />
                        </div>
                      </div>

                      {/* Additional Contact Phone */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          טלפון
                        </label>
                        <div className="relative">
                          <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.additionalContact.phone}
                            onChange={handleAdditionalContactChange}
                            className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                            placeholder="050-1234567"
                          />
                        </div>
                      </div>

                      {/* Additional Contact Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          אימייל
                        </label>
                        <div className="relative">
                          <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.additionalContact.email}
                            onChange={handleAdditionalContactChange}
                            className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                            placeholder="example@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Summary Card */}
                    <div className="mt-8 p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border-2 border-emerald-200">
                      <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                        <FileCheck className="w-5 h-5" />
                        סיכום פרטי הלקוח
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-emerald-700 font-medium">שם:</p>
                          <p className="text-gray-900">
                            {formData.name || "לא הוזן"}
                          </p>
                        </div>
                        <div>
                          <p className="text-emerald-700 font-medium">טלפון:</p>
                          <p className="text-gray-900">
                            {formData.phone || "לא הוזן"}
                          </p>
                        </div>
                        <div>
                          <p className="text-emerald-700 font-medium">
                            אימייל:
                          </p>
                          <p className="text-gray-900">
                            {formData.email || "לא הוזן"}
                          </p>
                        </div>
                        <div>
                          <p className="text-emerald-700 font-medium">סוג:</p>
                          <p className="text-gray-900">{formData.type}</p>
                        </div>
                        <div>
                          <p className="text-emerald-700 font-medium">כתובת:</p>
                          <p className="text-gray-900">
                            {formData.address && formData.city
                              ? `${formData.address}, ${formData.city}`
                              : "לא הוזנה"}
                          </p>
                        </div>
                        <div>
                          <p className="text-emerald-700 font-medium">סטטוס:</p>
                          <p className="text-gray-900">{formData.status}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-8 border-t border-gray-200 mt-8">
                <div className="flex gap-3">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="flex items-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 font-medium transition-all"
                    >
                      <ArrowRight className="w-5 h-5" />
                      קודם
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => navigate("/clients")}
                    className="px-6 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 font-medium transition-all"
                  >
                    ביטול
                  </button>
                </div>

                <div>
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(currentStep + 1)}
                      className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
                    >
                      הבא
                      <ArrowRight className="w-5 h-5 rotate-180" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
                    >
                      <Save className="w-5 h-5" />
                      שמור לקוח
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
