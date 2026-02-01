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
  Plus,
  Award,
} from "lucide-react";

export default function SettingsPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);

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

  // ניהול מוצרים
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "אקו פרויקט 370",
      power: "370W",
      price: 249,
      warranty: "20 שנה",
      efficiency: "19.8%",
      category: "premium",
      imageUrl: "",
      voltage: "37.2V",
      current: "9.95A",
      weight: "21 ק״ג",
      dimensions: "1755×1038×35",
      features: [
        "יעילות גבוהה",
        "עמידות מעולה",
        "אחריות מורחבת",
        "תקן בינלאומי",
      ],
      isHighlighted: true,
    },
    {
      id: 2,
      name: "סולאר פלוס 330",
      power: "330W",
      price: 219,
      warranty: "15 שנה",
      efficiency: "18.5%",
      category: "standard",
      imageUrl: "",
      voltage: "35.8V",
      current: "9.22A",
      weight: "19 ק״ג",
      dimensions: "1650×992×35",
      features: ["מחיר אטרקטיבי", "התקנה קלה", "תחזוקה נמוכה"],
      isHighlighted: false,
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    power: "",
    price: "",
    warranty: "",
    efficiency: "",
    category: "",
    imageUrl: "",
    voltage: "",
    current: "",
    weight: "",
    dimensions: "",
    features: ["", "", "", ""],
    isHighlighted: false,
  });

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.power || !newProduct.price) {
      alert("נא למלא את כל השדות החובה");
      return;
    }

    const productToAdd = {
      ...newProduct,
      id: Date.now(),
      features: newProduct.features.filter((f) => f.trim() !== ""),
    };

    setProducts([...products, productToAdd]);
    setNewProduct({
      name: "",
      power: "",
      price: "",
      warranty: "",
      efficiency: "",
      category: "",
      imageUrl: "",
      voltage: "",
      current: "",
      weight: "",
      dimensions: "",
      features: ["", "", "", ""],
      isHighlighted: false,
    });
    handleSave();
  };

  const handleEditProduct = (product) => {
    setEditingProductId(product.id);
    setNewProduct({
      ...product,
      features: [...product.features, "", "", "", ""].slice(0, 4),
    });
  };

  const handleUpdateProduct = () => {
    setProducts(
      products.map((p) =>
        p.id === editingProductId
          ? {
              ...newProduct,
              id: editingProductId,
              features: newProduct.features.filter((f) => f.trim() !== ""),
            }
          : p,
      ),
    );
    setEditingProductId(null);
    setNewProduct({
      name: "",
      power: "",
      price: "",
      warranty: "",
      efficiency: "",
      category: "",
      imageUrl: "",
      voltage: "",
      current: "",
      weight: "",
      dimensions: "",
      features: ["", "", "", ""],
      isHighlighted: false,
    });
    handleSave();
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm("האם אתה בטוח שברצונך למחוק מוצר זה?")) {
      setProducts(products.filter((p) => p.id !== id));
      handleSave();
    }
  };

  const handleCancelEdit = () => {
    setEditingProductId(null);
    setNewProduct({
      name: "",
      power: "",
      price: "",
      warranty: "",
      efficiency: "",
      category: "",
      imageUrl: "",
      voltage: "",
      current: "",
      weight: "",
      dimensions: "",
      features: ["", "", "", ""],
      isHighlighted: false,
    });
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
    { id: "products", label: "ניהול מוצרים", icon: Package },
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

              {/* Products Management Section */}
              {activeSection === "products" && (
                <div className="space-y-6">
                  {/* Existing Products List */}
                  <div className="bg-white rounded-2xl shadow-sm p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        מוצרים קיימים
                      </h3>
                      <p className="text-gray-600">ערוך או מחק מוצרים קיימים</p>
                    </div>

                    <div className="space-y-4">
                      {products.map((product) => (
                        <div
                          key={product.id}
                          className={`border-2 rounded-xl p-6 transition-all ${
                            product.isHighlighted
                              ? "border-amber-300 bg-amber-50"
                              : "border-gray-200 bg-white"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="text-xl font-bold text-gray-900">
                                  {product.name}
                                </h4>
                                {product.isHighlighted && (
                                  <span className="bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                    <Award className="w-3 h-3" />
                                    מומלץ
                                  </span>
                                )}
                              </div>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div>
                                  <span className="text-gray-500">הספק:</span>
                                  <span className="font-medium text-gray-900 mr-2">
                                    {product.power}
                                  </span>
                                </div>
                                <div>
                                  <span className="text-gray-500">מחיר:</span>
                                  <span className="font-medium text-gray-900 mr-2">
                                    ₪{product.price}
                                  </span>
                                </div>
                                <div>
                                  <span className="text-gray-500">יעילות:</span>
                                  <span className="font-medium text-gray-900 mr-2">
                                    {product.efficiency}
                                  </span>
                                </div>
                                <div>
                                  <span className="text-gray-500">אחריות:</span>
                                  <span className="font-medium text-gray-900 mr-2">
                                    {product.warranty}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleEditProduct(product)}
                                className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition-all"
                                title="ערוך מוצר"
                              >
                                <Edit className="w-5 h-5" />
                              </button>
                              <button
                                onClick={() => handleDeleteProduct(product.id)}
                                className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-all"
                                title="מחק מוצר"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Add/Edit Product Form */}
                  <div className="bg-white rounded-2xl shadow-sm p-8">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {editingProductId ? "ערוך מוצר" : "הוסף מוצר חדש"}
                        </h3>
                        <p className="text-gray-600">
                          {editingProductId
                            ? "עדכן את פרטי המוצר"
                            : "הוסף מוצר חדש לקטלוג"}
                        </p>
                      </div>
                      {editingProductId && (
                        <button
                          onClick={handleCancelEdit}
                          className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                        >
                          ביטול עריכה
                        </button>
                      )}
                    </div>

                    <div className="space-y-6">
                      {/* Basic Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            שם המוצר *
                          </label>
                          <input
                            type="text"
                            placeholder="לדוגמה: אקו פרויקט 370"
                            value={newProduct.name}
                            onChange={(e) =>
                              setNewProduct({
                                ...newProduct,
                                name: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            הספק (W) *
                          </label>
                          <input
                            type="text"
                            placeholder="לדוגמה: 370W"
                            value={newProduct.power}
                            onChange={(e) =>
                              setNewProduct({
                                ...newProduct,
                                power: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            מחיר (₪) *
                          </label>
                          <input
                            type="number"
                            placeholder="לדוגמה: 249"
                            value={newProduct.price}
                            onChange={(e) =>
                              setNewProduct({
                                ...newProduct,
                                price: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            אחריות *
                          </label>
                          <input
                            type="text"
                            placeholder="לדוגמה: 20 שנה"
                            value={newProduct.warranty}
                            onChange={(e) =>
                              setNewProduct({
                                ...newProduct,
                                warranty: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            יעילות (%) *
                          </label>
                          <input
                            type="text"
                            placeholder="לדוגמה: 19.8%"
                            value={newProduct.efficiency}
                            onChange={(e) =>
                              setNewProduct({
                                ...newProduct,
                                efficiency: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            קטגוריה *
                          </label>
                          <select
                            value={newProduct.category}
                            onChange={(e) =>
                              setNewProduct({
                                ...newProduct,
                                category: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                          >
                            <option value="">בחר קטגוריה</option>
                            <option value="standard">סטנדרט</option>
                            <option value="premium">פרמיום</option>
                            <option value="compact">קומפקטי</option>
                            <option value="commercial">מסחרי</option>
                          </select>
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            תמונת המוצר (URL)
                          </label>
                          <input
                            type="text"
                            placeholder="https://example.com/image.jpg"
                            value={newProduct.imageUrl}
                            onChange={(e) =>
                              setNewProduct({
                                ...newProduct,
                                imageUrl: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Technical Specs */}
                      <div className="pt-6 border-t border-gray-200">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">
                          מפרט טכני
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              מתח (V)
                            </label>
                            <input
                              type="text"
                              placeholder="לדוגמה: 37.2V"
                              value={newProduct.voltage}
                              onChange={(e) =>
                                setNewProduct({
                                  ...newProduct,
                                  voltage: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              זרם (A)
                            </label>
                            <input
                              type="text"
                              placeholder="לדוגמה: 9.95A"
                              value={newProduct.current}
                              onChange={(e) =>
                                setNewProduct({
                                  ...newProduct,
                                  current: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              משקל
                            </label>
                            <input
                              type="text"
                              placeholder="לדוגמה: 21 ק״ג"
                              value={newProduct.weight}
                              onChange={(e) =>
                                setNewProduct({
                                  ...newProduct,
                                  weight: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              מידות (מ״מ)
                            </label>
                            <input
                              type="text"
                              placeholder="לדוגמה: 1755×1038×35"
                              value={newProduct.dimensions}
                              onChange={(e) =>
                                setNewProduct({
                                  ...newProduct,
                                  dimensions: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="pt-6 border-t border-gray-200">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">
                          תכונות המוצר
                        </h4>
                        <div className="space-y-3">
                          {newProduct.features.map((feature, index) => (
                            <input
                              key={index}
                              type="text"
                              placeholder={`תכונה ${index + 1}`}
                              value={feature}
                              onChange={(e) => {
                                const updatedFeatures = [
                                  ...newProduct.features,
                                ];
                                updatedFeatures[index] = e.target.value;
                                setNewProduct({
                                  ...newProduct,
                                  features: updatedFeatures,
                                });
                              }}
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Highlighted Product Toggle */}
                      <div className="pt-6 border-t border-gray-200">
                        <label className="flex items-center justify-between p-4 bg-amber-50 border-2 border-amber-200 rounded-xl cursor-pointer hover:bg-amber-100 transition-all">
                          <div className="flex items-center gap-3">
                            <Award className="w-6 h-6 text-amber-600" />
                            <div>
                              <p className="font-medium text-gray-900">
                                מוצר מומלץ
                              </p>
                              <p className="text-sm text-gray-600">
                                סמן כמוצר מומלץ ביותר
                              </p>
                            </div>
                          </div>
                          <input
                            type="checkbox"
                            checked={newProduct.isHighlighted}
                            onChange={(e) =>
                              setNewProduct({
                                ...newProduct,
                                isHighlighted: e.target.checked,
                              })
                            }
                            className="w-6 h-6 text-emerald-600 rounded focus:ring-emerald-500"
                          />
                        </label>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-6">
                        {editingProductId ? (
                          <>
                            <button
                              onClick={handleUpdateProduct}
                              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                            >
                              <Save className="w-5 h-5" />
                              עדכן מוצר
                            </button>
                            <button
                              onClick={handleCancelEdit}
                              className="px-6 py-4 border-2 border-gray-200 hover:bg-gray-50 rounded-xl font-medium transition-all"
                            >
                              ביטול
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={handleAddProduct}
                              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                            >
                              <Plus className="w-5 h-5" />
                              הוסף מוצר
                            </button>
                            <button
                              onClick={() =>
                                setNewProduct({
                                  name: "",
                                  power: "",
                                  price: "",
                                  warranty: "",
                                  efficiency: "",
                                  category: "",
                                  imageUrl: "",
                                  voltage: "",
                                  current: "",
                                  weight: "",
                                  dimensions: "",
                                  features: ["", "", "", ""],
                                  isHighlighted: false,
                                })
                              }
                              className="px-6 py-4 border-2 border-gray-200 hover:bg-gray-50 rounded-xl font-medium transition-all"
                            >
                              נקה טופס
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
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
