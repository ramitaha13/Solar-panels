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
  Send,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowUpDown,
  MoreVertical,
  FileDown,
  Copy,
  Printer,
  XCircle,
} from "lucide-react";

export default function QuotesPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [showNewQuoteModal, setShowNewQuoteModal] = useState(false);

  const quotes = [
    {
      id: "Q-2026-001",
      client: "דוד מזרחי",
      email: "david@email.com",
      phone: "050-1234567",
      address: "רחוב הרצל 25, תל אביב",
      roofArea: 24,
      panels: 12,
      panelType: "סאן פרו 400",
      systemSize: "4.8kW",
      estimatedValue: 32000,
      discount: 2000,
      finalValue: 30000,
      status: "חדש",
      createdDate: "30/01/2026",
      validUntil: "15/02/2026",
      estimatedSavings: 420,
      paybackYears: 5.2,
      notes: "הלקוח מעוניין בהתקנה מהירה",
    },
    {
      id: "Q-2026-002",
      client: "שרה אברהם",
      email: "sara@email.com",
      phone: "052-9876543",
      address: "שדרות בן גוריון 88, חיפה",
      roofArea: 32,
      panels: 16,
      panelType: "סאן פרו 400",
      systemSize: "6.4kW",
      estimatedValue: 42000,
      discount: 3000,
      finalValue: 39000,
      status: "נשלח",
      createdDate: "29/01/2026",
      validUntil: "14/02/2026",
      sentDate: "29/01/2026",
      estimatedSavings: 560,
      paybackYears: 4.9,
      notes: "ההצעה נשלחה באימייל",
    },
    {
      id: "Q-2026-003",
      client: "מיכאל ברקוביץ'",
      email: "michael@email.com",
      phone: "053-5555555",
      address: "רחוב הנשיא 12, ירושלים",
      roofArea: 40,
      panels: 20,
      panelType: "סולאר מקס 450",
      systemSize: "9kW",
      estimatedValue: 58000,
      discount: 5000,
      finalValue: 53000,
      status: "בטיפול",
      createdDate: "28/01/2026",
      validUntil: "13/02/2026",
      followUpDate: "02/02/2026",
      estimatedSavings: 750,
      paybackYears: 4.7,
      notes: "הלקוח שאל שאלות נוספות, ממתין לתשובה",
    },
    {
      id: "Q-2026-004",
      client: "רחל כהן",
      email: "rachel@email.com",
      phone: "054-7777777",
      address: "רחוב הזית 45, נתניה",
      roofArea: 28,
      panels: 14,
      panelType: "סאן פרו 400",
      systemSize: "5.6kW",
      estimatedValue: 38000,
      discount: 2500,
      finalValue: 35500,
      status: "אושר",
      createdDate: "25/01/2026",
      validUntil: "10/02/2026",
      approvedDate: "30/01/2026",
      estimatedSavings: 490,
      paybackYears: 5.1,
      notes: "הלקוח אישר את ההצעה! להעביר למחלקת ביצוע",
    },
    {
      id: "Q-2026-005",
      client: "יוסי לוי",
      email: "yossi@email.com",
      phone: "055-1111111",
      address: "רחוב הגפן 8, רעננה",
      roofArea: 36,
      panels: 18,
      panelType: "סאן פרו 400",
      systemSize: "7.2kW",
      estimatedValue: 48000,
      discount: 4000,
      finalValue: 44000,
      status: "נדחה",
      createdDate: "22/01/2026",
      validUntil: "07/02/2026",
      rejectedDate: "28/01/2026",
      estimatedSavings: 630,
      paybackYears: 4.9,
      notes: "הלקוח מצא הצעה זולה יותר",
      rejectionReason: "מחיר גבוה מדי",
    },
    {
      id: "Q-2026-006",
      client: "אביגיל מזרחי",
      email: "avigail@email.com",
      phone: "050-9999999",
      address: "שכונת רמות 34, באר שבע",
      roofArea: 48,
      panels: 24,
      panelType: "סולאר מקס 450",
      systemSize: "10.8kW",
      estimatedValue: 68000,
      discount: 6000,
      finalValue: 62000,
      status: "פג תוקף",
      createdDate: "10/01/2026",
      validUntil: "25/01/2026",
      estimatedSavings: 900,
      paybackYears: 4.6,
      notes: "ההצעה פגה, הלקוח לא חזר",
    },
    {
      id: "Q-2026-007",
      client: 'חברת הי-טק בע"מ',
      email: "contact@hitech.com",
      phone: "03-6666666",
      address: "פארק מדע, רחובות",
      roofArea: 120,
      panels: 60,
      panelType: "סולאר מקס 450",
      systemSize: "27kW",
      estimatedValue: 180000,
      discount: 15000,
      finalValue: 165000,
      status: "במשא ומתן",
      createdDate: "26/01/2026",
      validUntil: "26/02/2026",
      estimatedSavings: 2200,
      paybackYears: 5.0,
      notes: "פרויקט גדול - מנהל הפרויקטים מטפל באופן אישי",
    },
    {
      id: "Q-2026-008",
      client: "משפחת אבוטבול",
      email: "avutbol@email.com",
      phone: "052-3333333",
      address: "רחוב הדקל 67, אשדוד",
      roofArea: 20,
      panels: 10,
      panelType: "אקו פרויקט 370",
      systemSize: "3.7kW",
      estimatedValue: 26000,
      discount: 1500,
      finalValue: 24500,
      status: "חדש",
      createdDate: "31/01/2026",
      validUntil: "16/02/2026",
      estimatedSavings: 320,
      paybackYears: 5.4,
      notes: "לקוח חדש מהאתר",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "אושר":
        return "bg-green-100 text-green-800 border-green-200";
      case "נשלח":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "בטיפול":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "חדש":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "במשא ומתן":
        return "bg-indigo-100 text-indigo-800 border-indigo-200";
      case "נדחה":
        return "bg-red-100 text-red-800 border-red-200";
      case "פג תוקף":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "אושר":
        return <CheckCircle className="w-4 h-4" />;
      case "נשלח":
        return <Send className="w-4 h-4" />;
      case "בטיפול":
        return <Clock className="w-4 h-4" />;
      case "חדש":
        return <AlertCircle className="w-4 h-4" />;
      case "במשא ומתן":
        return <Users className="w-4 h-4" />;
      case "נדחה":
        return <XCircle className="w-4 h-4" />;
      case "פג תוקף":
        return <Clock className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const filteredQuotes = quotes.filter((quote) => {
    const matchesSearch =
      quote.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quote.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quote.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filterStatus === "all" || quote.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  const sidebarItems = [
    { id: "overview", label: "סקירה כללית", icon: Home, path: "/dashboard" },
    { id: "projects", label: "פרויקטים", icon: Package, path: "/projects" },
    { id: "quotes", label: "הצעות מחיר", icon: FileText, path: "/quotes" },
    { id: "clients", label: "לקוחות", icon: Users, path: "/dashboard" },
    { id: "settings", label: "הגדרות", icon: Settings, path: "/dashboard" },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  const statusOptions = [
    { value: "all", label: "הכל" },
    { value: "חדש", label: "חדש" },
    { value: "נשלח", label: "נשלח" },
    { value: "בטיפול", label: "בטיפול" },
    { value: "במשא ומתן", label: "במשא ומתן" },
    { value: "אושר", label: "אושר" },
    { value: "נדחה", label: "נדחה" },
    { value: "פג תוקף", label: "פג תוקף" },
  ];

  const stats = {
    total: quotes.length,
    new: quotes.filter((q) => q.status === "חדש").length,
    approved: quotes.filter((q) => q.status === "אושר").length,
    totalValue: quotes.reduce((sum, q) => sum + q.finalValue, 0),
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
              const isActive = item.id === "quotes";
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
                <h2 className="text-2xl font-bold text-gray-900">הצעות מחיר</h2>
                <p className="text-sm text-gray-500">
                  ניהול כל הצעות המחיר והמשא ומתן
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
                    placeholder="חפש לפי לקוח, אימייל או מספר הצעה..."
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

                {/* New Quote */}
                <button
                  onClick={() => navigate("/quoteCalculator")}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
                >
                  <Plus className="w-5 h-5" />
                  הצעת מחיר חדשה
                </button>
              </div>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">
                  {stats.total}
                </p>
                <p className="text-sm text-gray-500">סה"כ הצעות</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">
                  {stats.new}
                </p>
                <p className="text-sm text-gray-500">חדשות</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">
                  {stats.approved}
                </p>
                <p className="text-sm text-gray-500">אושרו</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-600">
                  ₪{stats.totalValue.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">ערך כולל</p>
              </div>
            </div>
          </div>

          {/* Quotes Table */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase">
                      מספר הצעה
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase">
                      לקוח
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase">
                      מערכת
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase">
                      ערך
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase">
                      סטטוס
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase">
                      תאריך יצירה
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase">
                      תוקף עד
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase">
                      פעולות
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredQuotes.map((quote) => (
                    <tr
                      key={quote.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-emerald-700">
                          {quote.id}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-medium text-gray-900">
                            {quote.client}
                          </div>
                          <div className="text-sm text-gray-500">
                            {quote.email}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <div className="font-medium text-gray-900">
                            {quote.systemSize}
                          </div>
                          <div className="text-gray-500">
                            {quote.panels} פאנלים
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm">
                          <div className="font-medium text-gray-900">
                            ₪{quote.finalValue.toLocaleString()}
                          </div>
                          {quote.discount > 0 && (
                            <div className="text-green-600 text-xs">
                              הנחה: ₪{quote.discount.toLocaleString()}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                            quote.status,
                          )}`}
                        >
                          {getStatusIcon(quote.status)}
                          {quote.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600">
                          {quote.createdDate}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600">
                          {quote.validUntil}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setSelectedQuote(quote)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-all"
                            title="צפה בפרטים"
                          >
                            <Eye className="w-4 h-4 text-gray-600" />
                          </button>
                          <button
                            className="p-2 hover:bg-gray-100 rounded-lg transition-all"
                            title="ערוך"
                          >
                            <Edit className="w-4 h-4 text-gray-600" />
                          </button>
                          <button
                            className="p-2 hover:bg-gray-100 rounded-lg transition-all"
                            title="הורד PDF"
                          >
                            <Download className="w-4 h-4 text-gray-600" />
                          </button>
                          <button
                            className="p-2 hover:bg-gray-100 rounded-lg transition-all"
                            title="שלח ללקוח"
                          >
                            <Send className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Empty State */}
          {filteredQuotes.length === 0 && (
            <div className="bg-white rounded-2xl shadow-sm p-12 text-center mt-6">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                לא נמצאו הצעות מחיר
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

      {/* Quote Details Modal */}
      {selectedQuote && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  הצעת מחיר - {selectedQuote.id}
                </h3>
                <p className="text-gray-600">{selectedQuote.client}</p>
              </div>
              <button
                onClick={() => setSelectedQuote(null)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 space-y-6">
              {/* Status */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(
                  selectedQuote.status,
                )}`}
              >
                {getStatusIcon(selectedQuote.status)}
                {selectedQuote.status}
              </div>

              {/* Client Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900">פרטי לקוח</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">שם</p>
                        <p className="font-medium">{selectedQuote.client}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">אימייל</p>
                        <p className="font-medium">{selectedQuote.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">טלפון</p>
                        <p className="font-medium">{selectedQuote.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">כתובת</p>
                        <p className="font-medium">{selectedQuote.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900">פרטי המערכת</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Sun className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">גודל מערכת</p>
                        <p className="font-medium">
                          {selectedQuote.systemSize}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Package className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">פאנלים</p>
                        <p className="font-medium">
                          {selectedQuote.panels} יחידות -{" "}
                          {selectedQuote.panelType}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Home className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">שטח גג</p>
                        <p className="font-medium">
                          {selectedQuote.roofArea} מ"ר
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border-2 border-emerald-200">
                <h4 className="font-bold text-gray-900 mb-4">פירוט מחירים</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-700">
                    <span>מחיר מקורי:</span>
                    <span>
                      ₪{selectedQuote.estimatedValue.toLocaleString()}
                    </span>
                  </div>
                  {selectedQuote.discount > 0 && (
                    <div className="flex justify-between text-green-600 font-medium">
                      <span>הנחה:</span>
                      <span>-₪{selectedQuote.discount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="pt-3 border-t-2 border-emerald-300 flex justify-between text-xl font-bold text-emerald-700">
                    <span>מחיר סופי:</span>
                    <span>₪{selectedQuote.finalValue.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Savings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <p className="text-sm text-gray-600 mb-1">
                    חיסכון חודשי משוער
                  </p>
                  <p className="text-2xl font-bold text-blue-700">
                    ₪{selectedQuote.estimatedSavings}
                  </p>
                </div>
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                  <p className="text-sm text-gray-600 mb-1">החזר השקעה</p>
                  <p className="text-2xl font-bold text-purple-700">
                    {selectedQuote.paybackYears} שנים
                  </p>
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">תאריך יצירה</p>
                  <p className="font-medium">{selectedQuote.createdDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">תוקף עד</p>
                  <p className="font-medium">{selectedQuote.validUntil}</p>
                </div>
              </div>

              {/* Notes */}
              {selectedQuote.notes && (
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">הערות</h4>
                  <p className="text-gray-700 bg-gray-50 p-4 rounded-xl">
                    {selectedQuote.notes}
                  </p>
                </div>
              )}

              {/* Actions */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-all">
                  <Send className="w-4 h-4" />
                  שלח
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 hover:bg-gray-50 rounded-xl font-medium transition-all">
                  <Download className="w-4 h-4" />
                  PDF
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 hover:bg-gray-50 rounded-xl font-medium transition-all">
                  <Copy className="w-4 h-4" />
                  שכפל
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 hover:bg-gray-50 rounded-xl font-medium transition-all">
                  <Edit className="w-4 h-4" />
                  ערוך
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
