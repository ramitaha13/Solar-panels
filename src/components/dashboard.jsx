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
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data
  const stats = [
    {
      title: "סך הכנסות חודשי",
      value: "₪245,680",
      change: "+12.5%",
      icon: DollarSign,
      color: "emerald",
    },
    {
      title: "פרויקטים פעילים",
      value: "24",
      change: "+3",
      icon: Package,
      color: "blue",
    },
    {
      title: "לקוחות חדשים",
      value: "18",
      change: "+8.2%",
      icon: Users,
      color: "amber",
    },
    {
      title: "הצעות ממתינות",
      value: "12",
      change: "-2",
      icon: FileText,
      color: "purple",
    },
  ];

  const recentProjects = [
    {
      id: 1,
      client: "משפחת כהן",
      type: "התקנת מערכת 6kW",
      status: "בתהליך",
      date: "15/01/2026",
      value: "₪45,000",
      progress: 65,
    },
    {
      id: 2,
      client: 'חברת טק בע"מ',
      type: "מערכת מסחרית 50kW",
      status: "ממתין לאישור",
      date: "20/01/2026",
      value: "₪280,000",
      progress: 20,
    },
    {
      id: 3,
      client: "משפחת לוי",
      type: "התקנת מערכת 8kW",
      status: "הושלם",
      date: "10/01/2026",
      value: "₪52,000",
      progress: 100,
    },
    {
      id: 4,
      client: "בית ספר יסודי",
      type: "מערכת 30kW",
      status: "בתהליך",
      date: "25/01/2026",
      value: "₪165,000",
      progress: 45,
    },
  ];

  const recentQuotes = [
    {
      id: 1,
      client: "דוד מזרחי",
      email: "david@email.com",
      panels: 12,
      area: '24 מ"ר',
      status: "חדש",
      date: "30/01/2026",
    },
    {
      id: 2,
      client: "שרה אברהם",
      email: "sara@email.com",
      panels: 16,
      area: '32 מ"ר',
      status: "נשלח",
      date: "29/01/2026",
    },
    {
      id: 3,
      client: "מיכאל ברקוביץ'",
      email: "michael@email.com",
      panels: 20,
      area: '40 מ"ר',
      status: "בטיפול",
      date: "28/01/2026",
    },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "הושלם":
        return "bg-green-100 text-green-800";
      case "בתהליך":
        return "bg-blue-100 text-blue-800";
      case "ממתין לאישור":
        return "bg-amber-100 text-amber-800";
      case "חדש":
        return "bg-purple-100 text-purple-800";
      case "נשלח":
        return "bg-emerald-100 text-emerald-800";
      case "בטיפול":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const sidebarItems = [
    { id: "overview", label: "סקירה כללית", icon: Home },
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
    setMobileMenuOpen(false);
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
                    אדמין ראשי
                  </p>
                  <p className="text-xs text-gray-500">admin@solarpro.co.il</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-${stat.color}-100`}>
                          <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                        </div>
                        <span
                          className={`text-sm font-medium ${
                            stat.change.startsWith("+")
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {stat.change}
                        </span>
                      </div>
                      <h3 className="text-gray-600 text-sm mb-1">
                        {stat.title}
                      </h3>
                      <p className="text-3xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Recent Projects */}
              <div className="bg-white rounded-2xl shadow-sm">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">
                      פרויקטים אחרונים
                    </h3>
                    <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium">
                      <Plus className="w-5 h-5" />
                      פרויקט חדש
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          לקוח
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          סוג פרויקט
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          סטטוס
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          תאריך
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          ערך
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          התקדמות
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          פעולות
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {recentProjects.map((project) => (
                        <tr
                          key={project.id}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <div className="font-medium text-gray-900">
                              {project.client}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-600">
                              {project.type}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                project.status,
                              )}`}
                            >
                              {project.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-600">
                              {project.date}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="font-medium text-gray-900">
                              {project.value}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-emerald-600 h-2 rounded-full"
                                  style={{ width: `${project.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-600">
                                {project.progress}%
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button className="p-2 hover:bg-gray-100 rounded-lg">
                                <Eye className="w-4 h-4 text-gray-600" />
                              </button>
                              <button className="p-2 hover:bg-gray-100 rounded-lg">
                                <Edit className="w-4 h-4 text-gray-600" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recent Quotes */}
              <div className="bg-white rounded-2xl shadow-sm">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">
                      הצעות מחיר אחרונות
                    </h3>
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                      הצג הכל
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentQuotes.map((quote) => (
                      <div
                        key={quote.id}
                        className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center">
                            <FileText className="w-6 h-6 text-emerald-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {quote.client}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {quote.email}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-8">
                          <div className="text-right">
                            <p className="text-sm text-gray-600">
                              {quote.panels} פאנלים
                            </p>
                            <p className="text-xs text-gray-500">
                              {quote.area}
                            </p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              quote.status,
                            )}`}
                          >
                            {quote.status}
                          </span>
                          <p className="text-sm text-gray-500 w-24">
                            {quote.date}
                          </p>
                          <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-gray-100 rounded-lg">
                              <Eye className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg">
                              <Download className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs content */}
          {activeTab !== "overview" && (
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
