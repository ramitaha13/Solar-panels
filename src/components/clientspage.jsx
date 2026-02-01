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
  MapPin,
  Phone,
  Mail,
  Package,
  Calendar,
  DollarSign,
  Star,
  Building2,
  UserCheck,
  UserX,
  TrendingUp,
  Award,
  MessageSquare,
  History,
  FileDown,
  UserPlus,
  MoreVertical,
  User,
} from "lucide-react";

export default function ClientsPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedClient, setSelectedClient] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // grid or table

  const clients = [
    {
      id: 1,
      name: "דוד מזרחי",
      email: "david@email.com",
      phone: "050-1234567",
      address: "רחוב הרצל 25, תל אביב",
      type: "פרטי",
      status: "פעיל",
      joinDate: "15/12/2025",
      lastContact: "30/01/2026",
      totalProjects: 2,
      completedProjects: 1,
      totalSpent: 62000,
      rating: 5,
      notes: "לקוח מצוין, תמיד משלם בזמן",
      projects: [
        { name: "מערכת 4.8kW", status: "הושלם", value: 32000 },
        { name: "מערכת 6kW", status: "בתהליך", value: 30000 },
      ],
      quotes: 3,
      payments: "תקין",
    },
    {
      id: 2,
      name: "שרה אברהם",
      email: "sara@email.com",
      phone: "052-9876543",
      address: "שדרות בן גוריון 88, חיפה",
      type: "פרטי",
      status: "פעיל",
      joinDate: "20/01/2026",
      lastContact: "29/01/2026",
      totalProjects: 1,
      completedProjects: 0,
      totalSpent: 39000,
      rating: 4,
      notes: "מעוניינת בהרחבת המערכת בעתיד",
      projects: [{ name: "מערכת 6.4kW", status: "בתכנון", value: 39000 }],
      quotes: 1,
      payments: "תקין",
    },
    {
      id: 3,
      name: 'חברת טק בע"מ',
      email: "contact@techcompany.com",
      phone: "03-5555555",
      address: "פארק תעשייה, נתניה",
      type: "עסקי",
      status: "VIP",
      joinDate: "10/11/2025",
      lastContact: "28/01/2026",
      totalProjects: 3,
      completedProjects: 2,
      totalSpent: 450000,
      rating: 5,
      notes: "לקוח VIP - פרויקטים גדולים",
      projects: [
        { name: "מערכת 50kW", status: "בתהליך", value: 280000 },
        { name: "מערכת 30kW", status: "הושלם", value: 165000 },
        { name: "מערכת 20kW", status: "הושלם", value: 120000 },
      ],
      quotes: 5,
      payments: "תקין",
    },
    {
      id: 4,
      name: "משפחת כהן",
      email: "cohen@email.com",
      phone: "054-7777777",
      address: "רחוב הזית 45, ירושלים",
      type: "פרטי",
      status: "פעיל",
      joinDate: "05/01/2026",
      lastContact: "15/01/2026",
      totalProjects: 1,
      completedProjects: 0,
      totalSpent: 45000,
      rating: 5,
      notes: "המליצו על החברה לחברים",
      projects: [{ name: "מערכת 6kW", status: "בתהליך", value: 45000 }],
      quotes: 2,
      payments: "תקין",
    },
    {
      id: 5,
      name: "בית ספר יסודי",
      email: "school@edu.il",
      phone: "04-6666666",
      address: "רחוב החינוך 88, חיפה",
      type: "ציבורי",
      status: "פעיל",
      joinDate: "15/12/2025",
      lastContact: "25/01/2026",
      totalProjects: 1,
      completedProjects: 0,
      totalSpent: 165000,
      rating: 4,
      notes: "פרויקט ממומן על ידי עיריית חיפה",
      projects: [{ name: "מערכת 30kW", status: "בתהליך", value: 165000 }],
      quotes: 1,
      payments: "תקין",
    },
    {
      id: 6,
      name: "רחל לוי",
      email: "rachel@email.com",
      phone: "055-1111111",
      address: "שכונת נווה שאנן 12, ירושלים",
      type: "פרטי",
      status: "פעיל",
      joinDate: "08/01/2026",
      lastContact: "10/01/2026",
      totalProjects: 1,
      completedProjects: 1,
      totalSpent: 52000,
      rating: 5,
      notes: "הפרויקט הושלם בהצלחה",
      projects: [{ name: "מערכת 8kW", status: "הושלם", value: 52000 }],
      quotes: 1,
      payments: "תקין",
    },
    {
      id: 7,
      name: "מיכאל ברקוביץ'",
      email: "michael@email.com",
      phone: "053-5555555",
      address: "רחוב הנשיא 12, ירושלים",
      type: "פרטי",
      status: "לא פעיל",
      joinDate: "20/12/2025",
      lastContact: "28/01/2026",
      totalProjects: 0,
      completedProjects: 0,
      totalSpent: 0,
      rating: 3,
      notes: "קיבל הצעת מחיר אך לא אישר",
      projects: [],
      quotes: 1,
      payments: "ממתין",
    },
    {
      id: 8,
      name: "מרכז קניות עזריאלי",
      email: "azrieli@mall.com",
      phone: "03-7777777",
      address: "מגדלי עזריאלי, תל אביב",
      type: "עסקי",
      status: "VIP",
      joinDate: "01/10/2025",
      lastContact: "26/01/2026",
      totalProjects: 2,
      completedProjects: 1,
      totalSpent: 680000,
      rating: 5,
      notes: "לקוח VIP - פרויקטים מאוד גדולים",
      projects: [
        { name: "מערכת 100kW", status: "הוקפא", value: 520000 },
        { name: "מערכת 40kW", status: "הושלם", value: 280000 },
      ],
      quotes: 3,
      payments: "תקין",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "VIP":
        return "bg-amber-100 text-amber-800 border-amber-300";
      case "פעיל":
        return "bg-green-100 text-green-800 border-green-300";
      case "לא פעיל":
        return "bg-gray-100 text-gray-800 border-gray-300";
      default:
        return "bg-blue-100 text-blue-800 border-blue-300";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "VIP":
        return <Star className="w-4 h-4" />;
      case "פעיל":
        return <UserCheck className="w-4 h-4" />;
      case "לא פעיל":
        return <UserX className="w-4 h-4" />;
      default:
        return <Users className="w-4 h-4" />;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "עסקי":
        return <Building2 className="w-4 h-4" />;
      case "ציבורי":
        return <Award className="w-4 h-4" />;
      default:
        return <Users className="w-4 h-4" />;
    }
  };

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.phone.includes(searchQuery);

    const matchesFilter =
      filterType === "all" ||
      (filterType === "vip" && client.status === "VIP") ||
      (filterType === "active" && client.status === "פעיל") ||
      (filterType === "inactive" && client.status === "לא פעיל") ||
      (filterType === "private" && client.type === "פרטי") ||
      (filterType === "business" && client.type === "עסקי");

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

  const filterOptions = [
    { value: "all", label: "הכל" },
    { value: "vip", label: "VIP" },
    { value: "active", label: "פעילים" },
    { value: "inactive", label: "לא פעילים" },
    { value: "private", label: "פרטיים" },
    { value: "business", label: "עסקיים" },
  ];

  const stats = {
    total: clients.length,
    vip: clients.filter((c) => c.status === "VIP").length,
    active: clients.filter((c) => c.status === "פעיל").length,
    totalRevenue: clients.reduce((sum, c) => sum + c.totalSpent, 0),
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
                <h2 className="text-2xl font-bold text-gray-900">לקוחות</h2>
                <p className="text-sm text-gray-500">
                  ניהול מאגר הלקוחות והקשרים
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
                    placeholder="חפש לפי שם, אימייל או טלפון..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Filters and Actions */}
              <div className="flex flex-wrap gap-3">
                {/* Filter */}
                <div className="relative">
                  <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="appearance-none pr-10 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all bg-white cursor-pointer"
                  >
                    {filterOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="flex border-2 border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`px-4 py-3 transition-all ${
                      viewMode === "grid"
                        ? "bg-emerald-600 text-white"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <Package className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("table")}
                    className={`px-4 py-3 transition-all border-r-2 border-gray-200 ${
                      viewMode === "table"
                        ? "bg-emerald-600 text-white"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <FileText className="w-5 h-5" />
                  </button>
                </div>

                {/* Export */}
                <button className="flex items-center gap-2 px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all">
                  <FileDown className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium">ייצא</span>
                </button>

                {/* New Client */}
                <button
                  onClick={() => navigate("/newclientpage")}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
                >
                  <UserPlus className="w-5 h-5" />
                  לקוח חדש
                </button>
              </div>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {stats.total}
                </p>
                <p className="text-sm text-gray-500">סה"כ לקוחות</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-600">{stats.vip}</p>
                <p className="text-sm text-gray-500">לקוחות VIP</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">
                  {stats.active}
                </p>
                <p className="text-sm text-gray-500">פעילים</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-600">
                  ₪{stats.totalRevenue.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">סך הכנסות</p>
              </div>
            </div>
          </div>

          {/* Grid View */}
          {viewMode === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClients.map((client) => (
                <div
                  key={client.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Card Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center">
                          <span className="text-lg font-bold text-emerald-700">
                            {client.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">
                            {client.name}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            {getTypeIcon(client.type)}
                            <span>{client.type}</span>
                          </div>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>

                    {/* Status and Rating */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          client.status,
                        )}`}
                      >
                        {getStatusIcon(client.status)}
                        {client.status}
                      </span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < client.rating
                                ? "fill-amber-400 text-amber-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3">
                    {/* Contact Info */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="truncate">{client.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span>{client.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="line-clamp-1">{client.address}</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100">
                      <div className="text-center">
                        <p className="text-lg font-bold text-emerald-600">
                          {client.totalProjects}
                        </p>
                        <p className="text-xs text-gray-500">פרויקטים</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-blue-600">
                          {client.quotes}
                        </p>
                        <p className="text-xs text-gray-500">הצעות</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-bold text-purple-600">
                          ₪{(client.totalSpent / 1000).toFixed(0)}K
                        </p>
                        <p className="text-xs text-gray-500">סה"כ</p>
                      </div>
                    </div>

                    {/* Last Contact */}
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
                      <span>קשר אחרון:</span>
                      <span>{client.lastContact}</span>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedClient(client)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-all"
                      >
                        <Eye className="w-4 h-4" />
                        פרטים
                      </button>
                      <button className="p-2 hover:bg-gray-200 rounded-xl transition-all">
                        <MessageSquare className="w-5 h-5 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-200 rounded-xl transition-all">
                        <Edit className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Table View */}
          {viewMode === "table" && (
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase">
                        לקוח
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase">
                        טלפון
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase">
                        סוג
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase">
                        סטטוס
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase">
                        פרויקטים
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase">
                        סך הוצאות
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase">
                        דירוג
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase">
                        פעולות
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredClients.map((client) => (
                      <tr
                        key={client.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center">
                              <span className="font-bold text-emerald-700">
                                {client.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">
                                {client.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {client.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {client.phone}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            {getTypeIcon(client.type)}
                            <span>{client.type}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                              client.status,
                            )}`}
                          >
                            {getStatusIcon(client.status)}
                            {client.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <div className="font-medium text-gray-900">
                            {client.totalProjects}
                          </div>
                          <div className="text-xs text-gray-500">
                            {client.completedProjects} הושלמו
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-medium text-gray-900">
                            ₪{client.totalSpent.toLocaleString()}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < client.rating
                                    ? "fill-amber-400 text-amber-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setSelectedClient(client)}
                              className="p-2 hover:bg-gray-100 rounded-lg"
                            >
                              <Eye className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg">
                              <Edit className="w-4 h-4 text-gray-600" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-lg">
                              <MessageSquare className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Empty State */}
          {filteredClients.length === 0 && (
            <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                לא נמצאו לקוחות
              </h3>
              <p className="text-gray-600 mb-6">
                נסה לשנות את הסינון או החיפוש
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilterType("all");
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

      {/* Client Details Modal */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-700">
                    {selectedClient.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedClient.name}
                  </h3>
                  <p className="text-gray-600">{selectedClient.type}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedClient(null)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 space-y-6">
              {/* Status and Rating */}
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(
                    selectedClient.status,
                  )}`}
                >
                  {getStatusIcon(selectedClient.status)}
                  {selectedClient.status}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < selectedClient.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900">פרטי קשר</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">אימייל</p>
                        <p className="font-medium">{selectedClient.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">טלפון</p>
                        <p className="font-medium">{selectedClient.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">כתובת</p>
                        <p className="font-medium">{selectedClient.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900">מידע נוסף</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">תאריך הצטרפות</p>
                        <p className="font-medium">{selectedClient.joinDate}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <History className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">קשר אחרון</p>
                        <p className="font-medium">
                          {selectedClient.lastContact}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">סטטוס תשלום</p>
                        <p className="font-medium">{selectedClient.payments}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                  <p className="text-sm text-gray-600 mb-1">פרויקטים</p>
                  <p className="text-2xl font-bold text-emerald-700">
                    {selectedClient.totalProjects}
                  </p>
                  <p className="text-xs text-gray-500">
                    {selectedClient.completedProjects} הושלמו
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <p className="text-sm text-gray-600 mb-1">הצעות מחיר</p>
                  <p className="text-2xl font-bold text-blue-700">
                    {selectedClient.quotes}
                  </p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                  <p className="text-sm text-gray-600 mb-1">סה"כ הוצאות</p>
                  <p className="text-2xl font-bold text-purple-700">
                    ₪{selectedClient.totalSpent.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Projects List */}
              {selectedClient.projects.length > 0 && (
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">פרויקטים</h4>
                  <div className="space-y-2">
                    {selectedClient.projects.map((project, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                      >
                        <div className="flex items-center gap-3">
                          <Package className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="font-medium text-gray-900">
                              {project.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {project.status}
                            </p>
                          </div>
                        </div>
                        <p className="font-medium text-gray-900">
                          ₪{project.value.toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes */}
              <div>
                <h4 className="font-bold text-gray-900 mb-2">הערות</h4>
                <p className="text-gray-700 bg-gray-50 p-4 rounded-xl">
                  {selectedClient.notes}
                </p>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-all">
                  <MessageSquare className="w-4 h-4" />
                  שלח הודעה
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 hover:bg-gray-50 rounded-xl font-medium transition-all">
                  <Edit className="w-4 h-4" />
                  ערוך
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 hover:bg-gray-50 rounded-xl font-medium transition-all">
                  <FileText className="w-4 h-4" />
                  הצעה חדשה
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 hover:bg-gray-50 rounded-xl font-medium transition-all">
                  <Download className="w-4 h-4" />
                  ייצא
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
