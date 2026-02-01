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
  Menu,
  X,
  ChevronDown,
  Download,
  Eye,
  Edit,
  Trash2,
  Filter,
  Calendar,
  DollarSign,
  MapPin,
  Phone,
  Mail,
  Package,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowUpDown,
  MoreVertical,
  FileDown,
  Share2,
  Archive,
  User,
} from "lucide-react";

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      client: "משפחת כהן",
      contactPerson: "יוסי כהן",
      phone: "050-1234567",
      email: "yossi@email.com",
      address: "רחוב הרצל 45, תל אביב",
      type: "מערכת ביתית 6kW",
      panels: 16,
      panelType: "סאן פרו 400",
      status: "בתהליך",
      startDate: "15/01/2026",
      estimatedEnd: "30/01/2026",
      value: 45000,
      paid: 22500,
      progress: 65,
      description: "התקנת מערכת סולארית ביתית על גג רעפים",
      team: ["טכנאי א'", "טכנאי ב'"],
      notes: "הלקוח מבקש להשלים את ההתקנה לפני סוף החודש",
    },
    {
      id: 2,
      client: 'חברת טק בע"מ',
      contactPerson: "שרה לוי",
      phone: "052-9876543",
      email: "sara@techcompany.com",
      address: "פארק תעשייה, נתניה",
      type: "מערכת מסחרית 50kW",
      panels: 125,
      panelType: "סולאר מקס 450",
      status: "ממתין לאישור",
      startDate: "20/01/2026",
      estimatedEnd: "15/03/2026",
      value: 280000,
      paid: 84000,
      progress: 20,
      description: "מערכת סולארית גדולה למפעל תעשייתי",
      team: ["מנהל פרויקט", "3 טכנאים"],
      notes: "ממתין לאישור מהנדס חשמל",
    },
    {
      id: 3,
      client: "משפחת לוי",
      contactPerson: "דוד לוי",
      phone: "054-5555555",
      email: "david@email.com",
      address: "שכונת נווה שאנן 12, ירושלים",
      type: "מערכת ביתית 8kW",
      panels: 20,
      panelType: "סאן פרו 400",
      status: "הושלם",
      startDate: "10/01/2026",
      estimatedEnd: "25/01/2026",
      value: 52000,
      paid: 52000,
      progress: 100,
      description: "מערכת סולארית ביתית מלאה כולל מערכת אגירה",
      team: ["טכנאי א'", "טכנאי ג'"],
      notes: "הפרויקט הושלם בהצלחה. הלקוח מרוצה מאוד",
    },
    {
      id: 4,
      client: "בית ספר יסודי",
      contactPerson: "רחל אברהם",
      phone: "053-7777777",
      email: "rachel@school.edu",
      address: "רחוב החינוך 88, חיפה",
      type: "מערכת ציבורית 30kW",
      panels: 75,
      panelType: "סולאר מקס 450",
      status: "בתהליך",
      startDate: "25/01/2026",
      estimatedEnd: "20/02/2026",
      value: 165000,
      paid: 49500,
      progress: 45,
      description: "התקנת מערכת סולארית על גג בית הספר",
      team: ["מנהל פרויקט", "טכנאי ד'", "טכנאי ה'"],
      notes: "העבודות מתבצעות בשעות אחר הצהריים",
    },
    {
      id: 5,
      client: "משפחת מזרחי",
      contactPerson: "אבי מזרחי",
      phone: "055-1111111",
      email: "avi@email.com",
      address: "רחוב הגפן 23, רעננה",
      type: "מערכת ביתית 10kW",
      panels: 25,
      panelType: "סאן פרו 400",
      status: "בתכנון",
      startDate: "05/02/2026",
      estimatedEnd: "25/02/2026",
      value: 58000,
      paid: 17400,
      progress: 10,
      description: "מערכת סולארית מתקדמת עם מערכת ניטור",
      team: ["טכנאי ב'"],
      notes: "ממתין לאישורים מעיריית רעננה",
    },
    {
      id: 6,
      client: "מרכז קניות",
      contactPerson: "משה כהן",
      phone: "050-9999999",
      email: "moshe@mall.com",
      address: "כביש 4, נתניה",
      type: "מערכת מסחרית 100kW",
      panels: 250,
      panelType: "סולאר מקס 450",
      status: "הוקפא",
      startDate: "01/02/2026",
      estimatedEnd: "01/05/2026",
      value: 520000,
      paid: 0,
      progress: 5,
      description: "פרויקט סולארי ענק על גגות המרכז המסחרי",
      team: [],
      notes: "הפרויקט הוקפא עד להחלטה נוספת מההנהלה",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "הושלם":
        return "bg-green-100 text-green-800 border-green-200";
      case "בתהליך":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "ממתין לאישור":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "בתכנון":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "הוקפא":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "הושלם":
        return <CheckCircle className="w-4 h-4" />;
      case "בתהליך":
        return <Clock className="w-4 h-4" />;
      case "ממתין לאישור":
        return <AlertCircle className="w-4 h-4" />;
      case "בתכנון":
        return <FileText className="w-4 h-4" />;
      case "הוקפא":
        return <Archive className="w-4 h-4" />;
      default:
        return <Package className="w-4 h-4" />;
    }
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.contactPerson.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.type.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filterStatus === "all" || project.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

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

  const statusOptions = [
    { value: "all", label: "הכל" },
    { value: "בתכנון", label: "בתכנון" },
    { value: "ממתין לאישור", label: "ממתין לאישור" },
    { value: "בתהליך", label: "בתהליך" },
    { value: "הושלם", label: "הושלם" },
    { value: "הוקפא", label: "הוקפא" },
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
              const isActive = item.id === "projects";
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
                <h2 className="text-2xl font-bold text-gray-900">פרויקטים</h2>
                <p className="text-sm text-gray-500">
                  ניהול כל הפרויקטים הפעילים
                </p>
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
        <main className="p-6">
          {/* Filters and Actions Bar */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="חפש לפי לקוח, איש קשר או סוג פרויקט..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Filters and Actions */}
              <div className="flex flex-wrap gap-3">
                {/* Status Filter */}
                <div className="relative">
                  <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="appearance-none pr-10 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all bg-white cursor-pointer"
                  >
                    {statusOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <button className="flex items-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all">
                  <ArrowUpDown className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium">מיין</span>
                </button>

                {/* Export */}
                <button className="flex items-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all">
                  <FileDown className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium">ייצא</span>
                </button>

                {/* New Project */}
                <button
                  onClick={() => navigate("/newprojectpage")}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
                >
                  <Plus className="w-5 h-5" />
                  פרויקט חדש
                </button>
              </div>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {projects.length}
                </p>
                <p className="text-sm text-gray-500">סה"כ פרויקטים</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">
                  {projects.filter((p) => p.status === "בתהליך").length}
                </p>
                <p className="text-sm text-gray-500">בתהליך</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">
                  {projects.filter((p) => p.status === "הושלם").length}
                </p>
                <p className="text-sm text-gray-500">הושלם</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-600">
                  ₪
                  {projects
                    .reduce((sum, p) => sum + p.value, 0)
                    .toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">ערך כולל</p>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Card Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {project.client}
                      </h3>
                      <p className="text-sm text-gray-500">{project.type}</p>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  {/* Status Badge */}
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                      project.status,
                    )}`}
                  >
                    {getStatusIcon(project.status)}
                    {project.status}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  {/* Contact Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span>{project.contactPerson}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span>{project.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="line-clamp-1">{project.address}</span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">פאנלים</p>
                      <p className="text-sm font-medium text-gray-900">
                        {project.panels} יח'
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">ערך</p>
                      <p className="text-sm font-medium text-gray-900">
                        ₪{project.value.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">תחילה</p>
                      <p className="text-sm font-medium text-gray-900">
                        {project.startDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">סיום משוער</p>
                      <p className="text-sm font-medium text-gray-900">
                        {project.estimatedEnd}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-gray-600">
                        התקדמות
                      </span>
                      <span className="text-xs font-bold text-emerald-600">
                        {project.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Payment Status */}
                  <div className="flex items-center justify-between text-sm pt-2">
                    <span className="text-gray-600">שולם:</span>
                    <span className="font-medium text-gray-900">
                      ₪{project.paid.toLocaleString()} / ₪
                      {project.value.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      פרטים
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded-xl transition-all">
                      <Edit className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded-xl transition-all">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                לא נמצאו פרויקטים
              </h3>
              <p className="text-gray-600 mb-6">
                נסה לשנות את הסינון או החיפוש
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilterStatus("all");
                }}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-all"
              >
                נקה סינונים
              </button>
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

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">
                פרטי פרויקט - {selectedProject.client}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 space-y-6">
              {/* Status and Type */}
              <div className="flex items-center gap-4">
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(
                    selectedProject.status,
                  )}`}
                >
                  {getStatusIcon(selectedProject.status)}
                  {selectedProject.status}
                </div>
                <div className="text-lg font-medium text-gray-900">
                  {selectedProject.type}
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900">פרטי לקוח</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">איש קשר</p>
                        <p className="font-medium">
                          {selectedProject.contactPerson}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">טלפון</p>
                        <p className="font-medium">{selectedProject.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">אימייל</p>
                        <p className="font-medium">{selectedProject.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">כתובת</p>
                        <p className="font-medium">{selectedProject.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900">פרטי פרויקט</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Package className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">פאנלים</p>
                        <p className="font-medium">
                          {selectedProject.panels} יחידות -{" "}
                          {selectedProject.panelType}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">תאריכים</p>
                        <p className="font-medium">
                          {selectedProject.startDate} -{" "}
                          {selectedProject.estimatedEnd}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">ערך / שולם</p>
                        <p className="font-medium">
                          ₪{selectedProject.value.toLocaleString()} / ₪
                          {selectedProject.paid.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">צוות</p>
                        <p className="font-medium">
                          {selectedProject.team.join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="font-bold text-gray-900 mb-2">תיאור</h4>
                <p className="text-gray-700">{selectedProject.description}</p>
              </div>

              {/* Notes */}
              <div>
                <h4 className="font-bold text-gray-900 mb-2">הערות</h4>
                <p className="text-gray-700">{selectedProject.notes}</p>
              </div>

              {/* Progress */}
              <div>
                <h4 className="font-bold text-gray-900 mb-3">התקדמות</h4>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-4 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ width: `${selectedProject.progress}%` }}
                  >
                    {selectedProject.progress}%
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <button className="flex-1 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-all">
                  ערוך פרויקט
                </button>
                <button className="px-6 py-3 border-2 border-gray-200 hover:bg-gray-50 rounded-xl font-medium transition-all">
                  ייצא PDF
                </button>
                <button className="px-6 py-3 border-2 border-red-200 text-red-600 hover:bg-red-50 rounded-xl font-medium transition-all">
                  מחק
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
