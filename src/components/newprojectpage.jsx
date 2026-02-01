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
  Package,
  ArrowRight,
  Save,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Briefcase,
  DollarSign,
  Zap,
  UserCheck,
  ClipboardList,
  AlertCircle,
  CheckCircle,
  Building2,
} from "lucide-react";

export default function NewProjectPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const [projectData, setProjectData] = useState({
    // פרטי לקוח
    client: "",
    contactPerson: "",
    phone: "",
    email: "",
    address: "",
    city: "",

    // פרטי פרויקט
    type: "",
    panels: "",
    panelType: "",
    systemPower: "",
    description: "",

    // לוחות זמנים
    startDate: "",
    estimatedEnd: "",
    status: "בתכנון",

    // כספים
    value: "",
    advancePayment: "",
    paymentTerms: "30 יום",

    // צוות והערות
    team: [],
    notes: "",
    projectManager: "",
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

  const handleInputChange = (field, value) => {
    setProjectData({ ...projectData, [field]: value });
  };

  const handleSubmit = () => {
    // בדיקת תקינות
    if (
      !projectData.client ||
      !projectData.contactPerson ||
      !projectData.phone
    ) {
      alert("נא למלא את כל השדות החובה");
      return;
    }

    // שמירת הפרויקט (כאן תוסיף את הלוגיקה לשמירה במערכת)
    console.log("Project Data:", projectData);

    setShowSuccess(true);
    setTimeout(() => {
      navigate("/projects");
    }, 2000);
  };

  const steps = [
    { id: 1, name: "פרטי לקוח", icon: Users },
    { id: 2, name: "פרטי פרויקט", icon: Package },
    { id: 3, name: "תאריכים וכספים", icon: Calendar },
    { id: 4, name: "צוות והערות", icon: UserCheck },
  ];

  const projectTypes = [
    "מערכת ביתית 4kW",
    "מערכת ביתית 6kW",
    "מערכת ביתית 8kW",
    "מערכת ביתית 10kW",
    "מערכת מסחרית 20kW",
    "מערכת מסחרית 30kW",
    "מערכת מסחרית 50kW",
    "מערכת מסחרית 100kW",
    "מערכת ציבורית",
    "אחר",
  ];

  const panelTypes = [
    "סאן פרו 400",
    "סאן פרו 370",
    "סולאר מקס 450",
    "סולאר מקס 400",
    "אקו פרויקט 370",
    "אקו פרויקט 350",
  ];

  const teamMembers = [
    "מנהל פרויקט",
    "טכנאי א'",
    "טכנאי ב'",
    "טכנאי ג'",
    "טכנאי ד'",
    "טכנאי ה'",
  ];

  const statusOptions = [
    { value: "בתכנון", label: "בתכנון", color: "purple" },
    { value: "ממתין לאישור", label: "ממתין לאישור", color: "amber" },
    { value: "בתהליך", label: "בתהליך", color: "blue" },
    { value: "הושלם", label: "הושלם", color: "green" },
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
              <button
                onClick={() => navigate("/projects")}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">פרויקט חדש</h2>
                <p className="text-sm text-gray-500">הוסף פרויקט חדש למערכת</p>
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
          {/* Progress Steps */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;

                return (
                  <React.Fragment key={step.id}>
                    <div className="flex flex-col items-center flex-1">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${
                          isCompleted
                            ? "bg-green-500 text-white"
                            : isActive
                              ? "bg-emerald-600 text-white ring-4 ring-emerald-100"
                              : "bg-gray-200 text-gray-400"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : (
                          <Icon className="w-6 h-6" />
                        )}
                      </div>
                      <p
                        className={`text-sm font-medium ${
                          isActive
                            ? "text-emerald-600"
                            : isCompleted
                              ? "text-green-600"
                              : "text-gray-400"
                        }`}
                      >
                        {step.name}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`h-1 flex-1 mx-4 rounded transition-all ${
                          currentStep > step.id ? "bg-green-500" : "bg-gray-200"
                        }`}
                      ></div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            {/* Step 1: פרטי לקוח */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    פרטי לקוח
                  </h3>
                  <p className="text-gray-600">הזן את פרטי הלקוח והאיש קשר</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      שם הלקוח / החברה *
                    </label>
                    <input
                      type="text"
                      value={projectData.client}
                      onChange={(e) =>
                        handleInputChange("client", e.target.value)
                      }
                      placeholder="לדוגמה: משפחת כהן"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      איש קשר *
                    </label>
                    <input
                      type="text"
                      value={projectData.contactPerson}
                      onChange={(e) =>
                        handleInputChange("contactPerson", e.target.value)
                      }
                      placeholder="לדוגמה: יוסי כהן"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      טלפון *
                    </label>
                    <div className="relative">
                      <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        value={projectData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="050-1234567"
                        className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      אימייל
                    </label>
                    <div className="relative">
                      <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={projectData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="example@email.com"
                        className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      כתובת *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={projectData.address}
                        onChange={(e) =>
                          handleInputChange("address", e.target.value)
                        }
                        placeholder="רחוב הרצל 45"
                        className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      עיר *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={projectData.city}
                        onChange={(e) =>
                          handleInputChange("city", e.target.value)
                        }
                        placeholder="תל אביב"
                        className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: פרטי פרויקט */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    פרטי פרויקט
                  </h3>
                  <p className="text-gray-600">הגדר את מפרט הפרויקט</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      סוג פרויקט *
                    </label>
                    <select
                      value={projectData.type}
                      onChange={(e) =>
                        handleInputChange("type", e.target.value)
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                    >
                      <option value="">בחר סוג פרויקט</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      הספק מערכת (kW) *
                    </label>
                    <div className="relative">
                      <Zap className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={projectData.systemPower}
                        onChange={(e) =>
                          handleInputChange("systemPower", e.target.value)
                        }
                        placeholder="לדוגמה: 6kW"
                        className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      מספר פאנלים *
                    </label>
                    <input
                      type="number"
                      value={projectData.panels}
                      onChange={(e) =>
                        handleInputChange("panels", e.target.value)
                      }
                      placeholder="16"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      סוג פאנל *
                    </label>
                    <select
                      value={projectData.panelType}
                      onChange={(e) =>
                        handleInputChange("panelType", e.target.value)
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                    >
                      <option value="">בחר סוג פאנל</option>
                      {panelTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      תיאור הפרויקט
                    </label>
                    <textarea
                      value={projectData.description}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      placeholder="תאר את הפרויקט, דרישות מיוחדות וכו'..."
                      rows="4"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: תאריכים וכספים */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    תאריכים וכספים
                  </h3>
                  <p className="text-gray-600">הגדר לוחות זמנים ופרטי תשלום</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      תאריך התחלה *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        value={projectData.startDate}
                        onChange={(e) =>
                          handleInputChange("startDate", e.target.value)
                        }
                        className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      תאריך סיום משוער *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        value={projectData.estimatedEnd}
                        onChange={(e) =>
                          handleInputChange("estimatedEnd", e.target.value)
                        }
                        className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      סטטוס פרויקט *
                    </label>
                    <select
                      value={projectData.status}
                      onChange={(e) =>
                        handleInputChange("status", e.target.value)
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                    >
                      {statusOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ערך הפרויקט (₪) *
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        value={projectData.value}
                        onChange={(e) =>
                          handleInputChange("value", e.target.value)
                        }
                        placeholder="45000"
                        className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      מקדמה ששולמה (₪)
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        value={projectData.advancePayment}
                        onChange={(e) =>
                          handleInputChange("advancePayment", e.target.value)
                        }
                        placeholder="0"
                        className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      תנאי תשלום
                    </label>
                    <select
                      value={projectData.paymentTerms}
                      onChange={(e) =>
                        handleInputChange("paymentTerms", e.target.value)
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                    >
                      <option value="מיידי">מיידי</option>
                      <option value="7 ימים">7 ימים</option>
                      <option value="14 יום">14 יום</option>
                      <option value="30 יום">30 יום</option>
                      <option value="60 יום">60 יום</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: צוות והערות */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    צוות והערות
                  </h3>
                  <p className="text-gray-600">הגדר את הצוות והוסף הערות</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      מנהל פרויקט
                    </label>
                    <select
                      value={projectData.projectManager}
                      onChange={(e) =>
                        handleInputChange("projectManager", e.target.value)
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                    >
                      <option value="">בחר מנהל פרויקט</option>
                      {teamMembers.map((member) => (
                        <option key={member} value={member}>
                          {member}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      חברי צוות
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {teamMembers.map((member) => (
                        <label
                          key={member}
                          className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-all"
                        >
                          <input
                            type="checkbox"
                            checked={projectData.team.includes(member)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                handleInputChange("team", [
                                  ...projectData.team,
                                  member,
                                ]);
                              } else {
                                handleInputChange(
                                  "team",
                                  projectData.team.filter((m) => m !== member),
                                );
                              }
                            }}
                            className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500"
                          />
                          <span className="text-sm font-medium text-gray-700">
                            {member}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      הערות נוספות
                    </label>
                    <textarea
                      value={projectData.notes}
                      onChange={(e) =>
                        handleInputChange("notes", e.target.value)
                      }
                      placeholder="הערות, דרישות מיוחדות, הנחיות לצוות..."
                      rows="6"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* סיכום */}
                  <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
                    <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                      <ClipboardList className="w-5 h-5" />
                      סיכום הפרויקט
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-emerald-700">לקוח:</span>
                        <span className="font-medium text-gray-900 mr-2">
                          {projectData.client || "לא הוזן"}
                        </span>
                      </div>
                      <div>
                        <span className="text-emerald-700">סוג פרויקט:</span>
                        <span className="font-medium text-gray-900 mr-2">
                          {projectData.type || "לא נבחר"}
                        </span>
                      </div>
                      <div>
                        <span className="text-emerald-700">פאנלים:</span>
                        <span className="font-medium text-gray-900 mr-2">
                          {projectData.panels || "0"} יחידות
                        </span>
                      </div>
                      <div>
                        <span className="text-emerald-700">ערך:</span>
                        <span className="font-medium text-gray-900 mr-2">
                          ₪{projectData.value || "0"}
                        </span>
                      </div>
                      <div>
                        <span className="text-emerald-700">תאריכים:</span>
                        <span className="font-medium text-gray-900 mr-2">
                          {projectData.startDate || "לא נקבע"} -{" "}
                          {projectData.estimatedEnd || "לא נקבע"}
                        </span>
                      </div>
                      <div>
                        <span className="text-emerald-700">צוות:</span>
                        <span className="font-medium text-gray-900 mr-2">
                          {projectData.team.length} חברים
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 border-t border-gray-200 mt-8">
              <button
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  currentStep === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              >
                <ArrowRight className="w-5 h-5" />
                הקודם
              </button>

              <div className="flex gap-2">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentStep === step.id
                        ? "w-8 bg-emerald-600"
                        : currentStep > step.id
                          ? "bg-green-500"
                          : "bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>

              {currentStep < 4 ? (
                <button
                  onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                  className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-all"
                >
                  הבא
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
                >
                  <Save className="w-5 h-5" />
                  שמור פרויקט
                </button>
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

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              הפרויקט נשמר בהצלחה!
            </h3>
            <p className="text-gray-600">מעביר אותך לדף הפרויקטים...</p>
          </div>
        </div>
      )}
    </div>
  );
}
