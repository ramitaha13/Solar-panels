import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sun,
  Home,
  Users,
  FileText,
  Settings,
  LogOut,
  Bell,
  Menu,
  X,
  ChevronDown,
  User,
  Lock,
  Mail,
  Phone,
  MapPin,
  Building2,
  Palette,
  Globe,
  Shield,
  CreditCard,
  Zap,
  Database,
  Download,
  Upload,
  Trash2,
  Save,
  Eye,
  EyeOff,
  Check,
  AlertCircle,
  Package,
  FileDown,
  Camera,
  Edit,
} from "lucide-react";

export default function SettingsPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [profileData, setProfileData] = useState({
    fullName: "אדמין ראשי",
    email: "admin@solarpro.co.il",
    phone: "050-1234567",
    role: "מנהל מערכת",
    avatar: null,
  });

  const [companyData, setCompanyData] = useState({
    name: 'סולאר פרו בע"מ',
    businessNumber: "514567890",
    address: "רחוב האנרגיה 123, תל אביב",
    phone: "03-5555555",
    email: "info@solarpro.co.il",
    website: "www.solarpro.co.il",
  });

  const [securityData, setSecurityData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactor: true,
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    newQuote: true,
    projectUpdate: true,
    paymentReceived: true,
    systemAlerts: true,
  });

  const [systemSettings, setSystemSettings] = useState({
    language: "he",
    timezone: "Asia/Jerusalem",
    currency: "ILS",
    dateFormat: "DD/MM/YYYY",
    autoBackup: true,
    darkMode: false,
  });

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const sidebarItems = [
    { id: "profile", label: "פרטים אישיים", icon: User, path: "/dashboard" },
    { id: "projects", label: "פרויקטים", icon: Package, path: "/projects" },
    { id: "quotes", label: "הצעות מחיר", icon: FileText, path: "/quotes" },
    { id: "clients", label: "לקוחות", icon: Users, path: "/clients" },
    { id: "settings", label: "הגדרות", icon: Settings, path: "/settings" },
  ];

  const settingsSections = [
    { id: "profile", label: "פרופיל אישי", icon: User },
    { id: "company", label: "פרטי החברה", icon: Building2 },
    { id: "security", label: "אבטחה וסיסמה", icon: Shield },
    { id: "notifications", label: "התראות", icon: Bell },
    { id: "appearance", label: "מראה ותצוגה", icon: Palette },
    { id: "system", label: "הגדרות מערכת", icon: Settings },
    { id: "billing", label: "חיוב ותשלומים", icon: CreditCard },
    { id: "backup", label: "גיבוי ושחזור", icon: Database },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

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
              const isActive = item.id === "settings";
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
                <h2 className="text-2xl font-bold text-gray-900">הגדרות</h2>
                <p className="text-sm text-gray-500">
                  נהל את הגדרות המערכת והחשבון שלך
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* User Menu */}
              <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-xl cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center text-white font-bold">
                  א
                </div>
                <div className="hidden md:block text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {profileData.fullName}
                  </p>
                  <p className="text-xs text-gray-500">{profileData.email}</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Settings Menu */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm p-4 sticky top-24">
                <h3 className="text-sm font-bold text-gray-500 uppercase mb-4 px-2">
                  קטגוריות
                </h3>
                <nav className="space-y-1">
                  {settingsSections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                          activeSection === section.id
                            ? "bg-emerald-50 text-emerald-700 font-medium"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{section.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Settings Content */}
            <div className="lg:col-span-3">
              {/* Profile Section */}
              {activeSection === "profile" && (
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      פרופיל אישי
                    </h3>
                    <p className="text-gray-600">
                      עדכן את פרטי החשבון האישי שלך
                    </p>
                  </div>

                  {/* Avatar */}
                  <div className="mb-8 flex items-center gap-6">
                    <div className="relative">
                      <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                        {profileData.fullName.charAt(0)}
                      </div>
                      <button className="absolute bottom-0 left-0 bg-white p-2 rounded-full shadow-lg border-2 border-gray-100 hover:bg-gray-50 transition-all">
                        <Camera className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">
                        תמונת פרופיל
                      </h4>
                      <p className="text-sm text-gray-500 mb-3">
                        JPG, PNG. מקסימום 2MB
                      </p>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-all">
                          העלה תמונה
                        </button>
                        <button className="px-4 py-2 border-2 border-gray-200 hover:bg-gray-50 rounded-lg text-sm font-medium transition-all">
                          הסר
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          שם מלא
                        </label>
                        <input
                          type="text"
                          value={profileData.fullName}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              fullName: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          תפקיד
                        </label>
                        <input
                          type="text"
                          value={profileData.role}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              role: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        אימייל
                      </label>
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        טלפון
                      </label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            phone: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={handleSave}
                        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-all flex items-center gap-2"
                      >
                        <Save className="w-5 h-5" />
                        שמור שינויים
                      </button>
                      <button className="px-6 py-3 border-2 border-gray-200 hover:bg-gray-50 rounded-xl font-medium transition-all">
                        ביטול
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Company Section */}
              {activeSection === "company" && (
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      פרטי החברה
                    </h3>
                    <p className="text-gray-600">
                      נהל את פרטי החברה ומידע העסק
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        שם החברה
                      </label>
                      <input
                        type="text"
                        value={companyData.name}
                        onChange={(e) =>
                          setCompanyData({
                            ...companyData,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          ח.פ / ע.מ
                        </label>
                        <input
                          type="text"
                          value={companyData.businessNumber}
                          onChange={(e) =>
                            setCompanyData({
                              ...companyData,
                              businessNumber: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          טלפון
                        </label>
                        <input
                          type="tel"
                          value={companyData.phone}
                          onChange={(e) =>
                            setCompanyData({
                              ...companyData,
                              phone: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        כתובת
                      </label>
                      <input
                        type="text"
                        value={companyData.address}
                        onChange={(e) =>
                          setCompanyData({
                            ...companyData,
                            address: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          אימייל
                        </label>
                        <input
                          type="email"
                          value={companyData.email}
                          onChange={(e) =>
                            setCompanyData({
                              ...companyData,
                              email: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          אתר אינטרנט
                        </label>
                        <input
                          type="text"
                          value={companyData.website}
                          onChange={(e) =>
                            setCompanyData({
                              ...companyData,
                              website: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={handleSave}
                        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-all flex items-center gap-2"
                      >
                        <Save className="w-5 h-5" />
                        שמור שינויים
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Section */}
              {activeSection === "security" && (
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      אבטחה וסיסמה
                    </h3>
                    <p className="text-gray-600">
                      עדכן את הסיסמה והגדרות האבטחה
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        סיסמה נוכחית
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={securityData.currentPassword}
                          onChange={(e) =>
                            setSecurityData({
                              ...securityData,
                              currentPassword: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all pl-12"
                        />
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        סיסמה חדשה
                      </label>
                      <input
                        type="password"
                        value={securityData.newPassword}
                        onChange={(e) =>
                          setSecurityData({
                            ...securityData,
                            newPassword: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        אישור סיסמה
                      </label>
                      <input
                        type="password"
                        value={securityData.confirmPassword}
                        onChange={(e) =>
                          setSecurityData({
                            ...securityData,
                            confirmPassword: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                      />
                    </div>

                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div className="text-sm text-blue-800">
                          <p className="font-medium mb-1">דרישות סיסמה:</p>
                          <ul className="list-disc list-inside space-y-1">
                            <li>לפחות 8 תווים</li>
                            <li>אות גדולה אחת לפחות</li>
                            <li>מספר אחד לפחות</li>
                            <li>תו מיוחד אחד לפחות</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Two-Factor Authentication */}
                    <div className="pt-6 border-t border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">
                            אימות דו-שלבי
                          </h4>
                          <p className="text-sm text-gray-600">
                            הוסף שכבת אבטחה נוספת לחשבון שלך
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={securityData.twoFactor}
                            onChange={(e) =>
                              setSecurityData({
                                ...securityData,
                                twoFactor: e.target.checked,
                              })
                            }
                            className="sr-only peer"
                          />
                          <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:right-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-emerald-600"></div>
                        </label>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={handleSave}
                        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-all flex items-center gap-2"
                      >
                        <Save className="w-5 h-5" />
                        עדכן סיסמה
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Section */}
              {activeSection === "notifications" && (
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      התראות
                    </h3>
                    <p className="text-gray-600">נהל את העדפות ההתראות שלך</p>
                  </div>

                  <div className="space-y-6">
                    {/* Email Notifications */}
                    <div className="flex items-center justify-between py-4 border-b border-gray-100">
                      <div className="flex items-center gap-4">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            התראות באימייל
                          </h4>
                          <p className="text-sm text-gray-500">
                            קבל עדכונים באימייל
                          </p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notificationSettings.emailNotifications}
                          onChange={(e) =>
                            setNotificationSettings({
                              ...notificationSettings,
                              emailNotifications: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:right-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-emerald-600"></div>
                      </label>
                    </div>

                    {/* SMS Notifications */}
                    <div className="flex items-center justify-between py-4 border-b border-gray-100">
                      <div className="flex items-center gap-4">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            התראות SMS
                          </h4>
                          <p className="text-sm text-gray-500">
                            קבל עדכונים בהודעות טקסט
                          </p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notificationSettings.smsNotifications}
                          onChange={(e) =>
                            setNotificationSettings({
                              ...notificationSettings,
                              smsNotifications: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:right-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-emerald-600"></div>
                      </label>
                    </div>

                    {/* Specific Notifications */}
                    <div className="pt-4">
                      <h4 className="font-bold text-gray-900 mb-4">
                        התראות ספציפיות
                      </h4>
                      <div className="space-y-4">
                        {[
                          { key: "newQuote", label: "הצעת מחיר חדשה" },
                          { key: "projectUpdate", label: "עדכון פרויקט" },
                          { key: "paymentReceived", label: "תשלום התקבל" },
                          { key: "systemAlerts", label: "התראות מערכת" },
                        ].map((item) => (
                          <div
                            key={item.key}
                            className="flex items-center justify-between"
                          >
                            <span className="text-gray-700">{item.label}</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={notificationSettings[item.key]}
                                onChange={(e) =>
                                  setNotificationSettings({
                                    ...notificationSettings,
                                    [item.key]: e.target.checked,
                                  })
                                }
                                className="sr-only peer"
                              />
                              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:right-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-emerald-600"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={handleSave}
                        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-all flex items-center gap-2"
                      >
                        <Save className="w-5 h-5" />
                        שמור הגדרות
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* System Settings */}
              {activeSection === "system" && (
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      הגדרות מערכת
                    </h3>
                    <p className="text-gray-600">
                      התאם את הגדרות המערכת הכלליות
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          שפה
                        </label>
                        <select
                          value={systemSettings.language}
                          onChange={(e) =>
                            setSystemSettings({
                              ...systemSettings,
                              language: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                        >
                          <option value="he">עברית</option>
                          <option value="en">English</option>
                          <option value="ar">العربية</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          אזור זמן
                        </label>
                        <select
                          value={systemSettings.timezone}
                          onChange={(e) =>
                            setSystemSettings({
                              ...systemSettings,
                              timezone: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                        >
                          <option value="Asia/Jerusalem">
                            ירושלים (GMT+2)
                          </option>
                          <option value="Europe/London">לונדון (GMT)</option>
                          <option value="America/New_York">
                            ניו יורק (GMT-5)
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          מטבע
                        </label>
                        <select
                          value={systemSettings.currency}
                          onChange={(e) =>
                            setSystemSettings({
                              ...systemSettings,
                              currency: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                        >
                          <option value="ILS">שקל (₪)</option>
                          <option value="USD">דולר ($)</option>
                          <option value="EUR">יורו (€)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          פורמט תאריך
                        </label>
                        <select
                          value={systemSettings.dateFormat}
                          onChange={(e) =>
                            setSystemSettings({
                              ...systemSettings,
                              dateFormat: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                        >
                          <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                          <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                          <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                        </select>
                      </div>
                    </div>

                    {/* Auto Backup */}
                    <div className="flex items-center justify-between py-4 border-t border-gray-100">
                      <div>
                        <h4 className="font-medium text-gray-900">
                          גיבוי אוטומטי
                        </h4>
                        <p className="text-sm text-gray-500">
                          גבה את המערכת באופן יומי
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={systemSettings.autoBackup}
                          onChange={(e) =>
                            setSystemSettings({
                              ...systemSettings,
                              autoBackup: e.target.checked,
                            })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:right-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-emerald-600"></div>
                      </label>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        onClick={handleSave}
                        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-all flex items-center gap-2"
                      >
                        <Save className="w-5 h-5" />
                        שמור הגדרות
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Backup Section */}
              {activeSection === "backup" && (
                <div className="bg-white rounded-2xl shadow-sm p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      גיבוי ושחזור
                    </h3>
                    <p className="text-gray-600">
                      גבה ושחזר את נתוני המערכת שלך
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Backup Now */}
                    <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <Database className="w-6 h-6 text-emerald-600 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-2">
                            גיבוי מיידי
                          </h4>
                          <p className="text-sm text-gray-600 mb-4">
                            צור גיבוי של כל נתוני המערכת כולל פרויקטים, לקוחות
                            והצעות מחיר
                          </p>
                          <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-all flex items-center gap-2">
                            <Download className="w-5 h-5" />
                            צור גיבוי עכשיו
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Restore */}
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <Upload className="w-6 h-6 text-blue-600 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-2">
                            שחזור מגיבוי
                          </h4>
                          <p className="text-sm text-gray-600 mb-4">
                            שחזר את המערכת מקובץ גיבוי קודם
                          </p>
                          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all flex items-center gap-2">
                            <Upload className="w-5 h-5" />
                            העלה קובץ גיבוי
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Last Backup Info */}
                    <div className="border-2 border-gray-200 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 mb-4">
                        היסטוריית גיבויים
                      </h4>
                      <div className="space-y-3">
                        {[
                          {
                            date: "31/01/2026 10:30",
                            size: "245 MB",
                            status: "הצליח",
                          },
                          {
                            date: "30/01/2026 10:30",
                            size: "243 MB",
                            status: "הצליח",
                          },
                          {
                            date: "29/01/2026 10:30",
                            size: "240 MB",
                            status: "הצליח",
                          },
                        ].map((backup, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                          >
                            <div className="flex items-center gap-3">
                              <Check className="w-5 h-5 text-green-600" />
                              <div>
                                <p className="font-medium text-gray-900">
                                  {backup.date}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {backup.size}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button className="p-2 hover:bg-gray-200 rounded-lg">
                                <Download className="w-4 h-4 text-gray-600" />
                              </button>
                              <button className="p-2 hover:bg-gray-200 rounded-lg">
                                <Trash2 className="w-4 h-4 text-gray-600" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Other Sections Placeholder */}
              {["appearance", "billing"].includes(activeSection) && (
                <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
                  <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {
                      settingsSections.find((s) => s.id === activeSection)
                        ?.label
                    }
                  </h3>
                  <p className="text-gray-600">תוכן עמוד זה יפותח בהמשך...</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Success Toast */}
      {saveSuccess && (
        <div className="fixed bottom-6 left-6 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in z-50">
          <Check className="w-5 h-5" />
          <span className="font-medium">השינויים נשמרו בהצלחה!</span>
        </div>
      )}
    </div>
  );
}
