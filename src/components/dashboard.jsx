import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sun,
  Home,
  Users,
  FileText,
  Settings,
  LogOut,
  Search,
  Bell,
  Plus,
  TrendingUp,
  DollarSign,
  Package,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  Menu,
  X,
  ChevronDown,
  Download,
  Eye,
  Edit,
  Trash2,
  Filter,
  User,
  Mail,
  Phone,
  MapPin,
  Camera,
  Save,
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [searchQuery, setSearchQuery] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Profile data
  const [profileData, setProfileData] = useState({
    name: "אדמין ראשי",
    email: "admin@solarpro.co.il",
    phone: "050-1234567",
    address: "רחוב האנרגיה 123, תל אביב",
    role: "מנהל מערכת",
    joinDate: "01/01/2024",
    department: "ניהול",
    bio: "מנהל מערכת ראשי לחברת סולאר פרו. אחראי על כל היבטי הניהול והתפעול של המערכת.",
  });

  const handleLogout = () => {
    navigate("/login");
  };

  const sidebarItems = [
    { id: "profile", label: "פרטים אישיים", icon: User },
    { id: "projects", label: "פרויקטים", icon: Package },
    { id: "quotes", label: "הצעות מחיר", icon: FileText },
    { id: "clients", label: "לקוחות", icon: Users },
    { id: "settings", label: "הגדרות", icon: Settings },
  ];

  const handleNavigation = (itemId) => {
    if (itemId === "projects") {
      navigate("/projects");
    } else if (itemId === "quotes") {
      navigate("/quotes");
    } else if (itemId === "clients") {
      navigate("/clients");
    } else if (itemId === "settings") {
      navigate("/settings");
    } else {
      setActiveTab(itemId);
    }
    setSidebarOpen(false);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    // כאן תוכל להוסיף לוגיקה לשמירת הנתונים
    alert("הפרטים נשמרו בהצלחה!");
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
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === item.id
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
              <h2 className="text-2xl font-bold text-gray-900">
                {sidebarItems.find((item) => item.id === activeTab)?.label}
              </h2>
            </div>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="hidden md:flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="חפש..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent outline-none text-sm w-64"
                />
              </div>

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
                    {profileData.name}
                  </p>
                  <p className="text-xs text-gray-500">{profileData.email}</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6">
          {activeTab === "profile" && (
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Profile Header */}
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-emerald-600 to-emerald-700"></div>
                <div className="px-8 pb-8">
                  <div className="flex items-end justify-between -mt-16 mb-6">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full border-4 border-white flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                        א
                      </div>
                      <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                        <Camera className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                    <div className="mb-4">
                      {isEditing ? (
                        <button
                          onClick={handleSaveProfile}
                          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl font-medium transition-colors"
                        >
                          <Save className="w-5 h-5" />
                          שמור שינויים
                        </button>
                      ) : (
                        <button
                          onClick={() => setIsEditing(true)}
                          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-xl font-medium transition-colors"
                        >
                          <Edit className="w-5 h-5" />
                          ערוך פרטים
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {profileData.name}
                    </h1>
                    <p className="text-gray-600 flex items-center gap-2">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                        {profileData.role}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm">
                        הצטרף ב-{profileData.joinDate}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  מידע אישי
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      שם מלא
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    ) : (
                      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
                        <User className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-900">
                          {profileData.name}
                        </span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      אימייל
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    ) : (
                      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-900">
                          {profileData.email}
                        </span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      טלפון
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            phone: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    ) : (
                      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-900">
                          {profileData.phone}
                        </span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      כתובת
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.address}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            address: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    ) : (
                      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
                        <MapPin className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-900">
                          {profileData.address}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      אודות
                    </label>
                    {isEditing ? (
                      <textarea
                        value={profileData.bio}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            bio: e.target.value,
                          })
                        }
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    ) : (
                      <div className="px-4 py-3 bg-gray-50 rounded-xl">
                        <p className="text-gray-900">{profileData.bio}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Work Information */}
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  פרטי עבודה
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      תפקיד
                    </label>
                    <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
                      <span className="text-gray-900">{profileData.role}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      מחלקה
                    </label>
                    <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
                      <span className="text-gray-900">
                        {profileData.department}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      תאריך הצטרפות
                    </label>
                    <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-900">
                        {profileData.joinDate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs content */}
          {activeTab !== "profile" && (
            <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {sidebarItems.find((item) => item.id === activeTab)?.label}
              </h3>
              <p className="text-gray-600">תוכן עמוד זה יפותח בהמשך...</p>
            </div>
          )}
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
