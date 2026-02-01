import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sun,
  ArrowRight,
  Zap,
  DollarSign,
  TrendingUp,
  Leaf,
  Calculator,
  CheckCircle,
  Home,
  Users,
  Building2,
  Calendar,
  Award,
  PiggyBank,
  Battery,
  Wind,
} from "lucide-react";

export default function SavingsCalculator() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);

  const [formData, setFormData] = useState({
    // Step 1 - Basic Info
    propertyType: "residential", // residential, commercial, industrial
    roofArea: "",

    // Step 2 - Current Consumption
    monthlyBill: "",
    averageConsumption: "", // kWh per month
    electricityPrice: "0.52", // ILS per kWh

    // Step 3 - System Preferences
    systemSize: "", // Will be calculated
    panelType: "standard", // standard, premium, advanced
    batteryBackup: false,

    // Contact Info
    name: "",
    phone: "",
    email: "",
  });

  const [results, setResults] = useState(null);

  const panelTypes = {
    standard: {
      name: "אקו פרויקט 370W",
      power: 370,
      price: 249,
      efficiency: 19.8,
      warranty: 20,
    },
    premium: {
      name: "סאן פרו 400W",
      power: 400,
      price: 349,
      efficiency: 21.5,
      warranty: 25,
    },
    advanced: {
      name: "סולאר מקס 450W",
      power: 450,
      price: 499,
      efficiency: 22.8,
      warranty: 30,
    },
  };

  const propertyTypes = [
    { value: "residential", label: "בית מגורים", icon: Home },
    { value: "commercial", label: "עסקי", icon: Building2 },
    { value: "industrial", label: "תעשייתי", icon: Building2 },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const calculateSavings = () => {
    const panel = panelTypes[formData.panelType];
    const roofArea = parseFloat(formData.roofArea) || 0;
    const monthlyBill = parseFloat(formData.monthlyBill) || 0;
    const consumption = parseFloat(formData.averageConsumption) || 0;
    const pricePerKwh = parseFloat(formData.electricityPrice);

    // Calculate system size
    const panelsNeeded = Math.floor(roofArea / 2); // Average 2 sqm per panel
    const systemSize = (panelsNeeded * panel.power) / 1000; // in kW
    const annualProduction = systemSize * 1400; // Average 1400 kWh per kW in Israel
    const monthlyProduction = annualProduction / 12;

    // Calculate savings
    const monthlySavings = Math.min(
      monthlyProduction * pricePerKwh,
      monthlyBill,
    );
    const annualSavings = monthlySavings * 12;
    const savingsPercentage = (monthlySavings / monthlyBill) * 100;

    // Calculate costs
    const panelsCost = panelsNeeded * panel.price;
    const installationCost = panelsCost * 0.3; // 30% installation
    const inverterCost = systemSize * 800; // 800 ILS per kW
    const batteryCost = formData.batteryBackup ? systemSize * 2500 : 0;
    const totalCost =
      panelsCost + installationCost + inverterCost + batteryCost;

    // Calculate ROI
    const paybackYears = totalCost / annualSavings;
    const totalSavings25Years = annualSavings * 25 - totalCost;

    // Calculate environmental impact
    const co2SavedAnnually = annualProduction * 0.7; // 0.7 kg CO2 per kWh
    const treesEquivalent = Math.floor(co2SavedAnnually / 21); // 21kg CO2 per tree per year

    setResults({
      panelsNeeded,
      systemSize: systemSize.toFixed(1),
      annualProduction: Math.floor(annualProduction),
      monthlyProduction: Math.floor(monthlyProduction),
      monthlySavings: Math.floor(monthlySavings),
      annualSavings: Math.floor(annualSavings),
      savingsPercentage: savingsPercentage.toFixed(1),
      panelsCost: Math.floor(panelsCost),
      installationCost: Math.floor(installationCost),
      inverterCost: Math.floor(inverterCost),
      batteryCost: Math.floor(batteryCost),
      totalCost: Math.floor(totalCost),
      paybackYears: paybackYears.toFixed(1),
      totalSavings25Years: Math.floor(totalSavings25Years),
      co2SavedAnnually: Math.floor(co2SavedAnnually),
      treesEquivalent,
      panelType: panel.name,
      warranty: panel.warranty,
    });

    setShowResults(true);
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      calculateSavings();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    if (step === 1) {
      return formData.propertyType && formData.roofArea;
    } else if (step === 2) {
      return formData.monthlyBill && formData.averageConsumption;
    } else if (step === 3) {
      return formData.name && formData.phone;
    }
    return false;
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100"
      dir="rtl"
    >
      {/* Header */}
      <header className="bg-gradient-to-l from-emerald-800 to-emerald-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/")}
                className="p-2 hover:bg-emerald-700 rounded-lg transition-colors"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-3">
                <div className="bg-amber-400 p-2 rounded-full">
                  <Sun className="w-6 h-6 text-emerald-900" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">סולאר פרו</h1>
                  <p className="text-xs text-emerald-200">מחשבון חיסכון</p>
                </div>
              </div>
            </div>

            {!showResults && (
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                <span className="text-sm">שלב {step} מתוך 3</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {!showResults ? (
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                        step >= num
                          ? "bg-emerald-600 text-white"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      {step > num ? <CheckCircle className="w-6 h-6" /> : num}
                    </div>
                    {num < 3 && (
                      <div
                        className={`w-24 md:w-32 h-1 mx-2 transition-all ${
                          step > num ? "bg-emerald-600" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-sm">
                <span
                  className={
                    step >= 1 ? "text-emerald-600 font-medium" : "text-gray-400"
                  }
                >
                  פרטי נכס
                </span>
                <span
                  className={
                    step >= 2 ? "text-emerald-600 font-medium" : "text-gray-400"
                  }
                >
                  צריכת חשמל
                </span>
                <span
                  className={
                    step >= 3 ? "text-emerald-600 font-medium" : "text-gray-400"
                  }
                >
                  העדפות ופרטים
                </span>
              </div>
            </div>

            {/* Step 1 - Property Info */}
            {step === 1 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    בואו נתחיל
                  </h2>
                  <p className="text-gray-600">ספרו לנו על הנכס שלכם</p>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-4">
                    סוג נכס
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {propertyTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <button
                          key={type.value}
                          onClick={() =>
                            handleInputChange("propertyType", type.value)
                          }
                          className={`p-6 rounded-xl border-2 transition-all ${
                            formData.propertyType === type.value
                              ? "border-emerald-600 bg-emerald-50"
                              : "border-gray-200 hover:border-emerald-300"
                          }`}
                        >
                          <Icon
                            className={`w-8 h-8 mx-auto mb-3 ${
                              formData.propertyType === type.value
                                ? "text-emerald-600"
                                : "text-gray-400"
                            }`}
                          />
                          <p className="font-medium text-gray-900">
                            {type.label}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    שטח גג זמין (מ"ר)
                  </label>
                  <div className="relative">
                    <Home className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={formData.roofArea}
                      onChange={(e) =>
                        handleInputChange("roofArea", e.target.value)
                      }
                      placeholder="לדוגמה: 50"
                      className="w-full pr-12 pl-4 py-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-lg"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    💡 טיפ: אם אינכם יודעים, הכפילו את אורך הגג ברוחבו
                  </p>
                </div>

                {formData.roofArea && (
                  <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4">
                    <p className="text-emerald-800">
                      ניתן להתקין כ-
                      <span className="font-bold text-xl">
                        {Math.floor(parseInt(formData.roofArea) / 2)}
                      </span>{" "}
                      פאנלים על גג בגודל זה
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Step 2 - Consumption */}
            {step === 2 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    צריכת החשמל שלכם
                  </h2>
                  <p className="text-gray-600">
                    המידע יעזור לנו לחשב את החיסכון המדויק
                  </p>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    חשבון חשמל חודשי ממוצע (₪)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={formData.monthlyBill}
                      onChange={(e) =>
                        handleInputChange("monthlyBill", e.target.value)
                      }
                      placeholder="לדוגמה: 800"
                      className="w-full pr-12 pl-4 py-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-lg"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    המידע מופיע בחשבון החשמל שלכם
                  </p>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    צריכה חודשית (קילוואט-שעה)
                  </label>
                  <div className="relative">
                    <Zap className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={formData.averageConsumption}
                      onChange={(e) =>
                        handleInputChange("averageConsumption", e.target.value)
                      }
                      placeholder="לדוגמה: 1500"
                      className="w-full pr-12 pl-4 py-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-lg"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    גם מידע זה מופיע בחשבון החשמל
                  </p>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    מחיר חשמל לקילוואט-שעה (₪)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.electricityPrice}
                    onChange={(e) =>
                      handleInputChange("electricityPrice", e.target.value)
                    }
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-lg"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    מחיר ממוצע בישראל: 0.52 ₪
                  </p>
                </div>
              </div>
            )}

            {/* Step 3 - Preferences */}
            {step === 3 && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    העדפות והשלמת פרטים
                  </h2>
                  <p className="text-gray-600">
                    כמעט סיימנו! עוד כמה פרטים אחרונים
                  </p>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-4">
                    סוג פאנלים
                  </label>
                  <div className="space-y-3">
                    {Object.entries(panelTypes).map(([key, panel]) => (
                      <button
                        key={key}
                        onClick={() => handleInputChange("panelType", key)}
                        className={`w-full p-4 rounded-xl border-2 transition-all text-right ${
                          formData.panelType === key
                            ? "border-emerald-600 bg-emerald-50"
                            : "border-gray-200 hover:border-emerald-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-bold text-gray-900">
                              {panel.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              {panel.power}W • יעילות {panel.efficiency}% •{" "}
                              {panel.warranty} שנות אחריות
                            </p>
                          </div>
                          <p className="text-xl font-bold text-emerald-600">
                            ₪{panel.price}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900">
                      מערכת אגירת אנרגיה (סוללה)
                    </p>
                    <p className="text-sm text-gray-600">לשימוש בשעות הלילה</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.batteryBackup}
                      onChange={(e) =>
                        handleInputChange("batteryBackup", e.target.checked)
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                  </label>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">פרטי קשר</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        שם מלא *
                      </label>
                      <div className="relative">
                        <Users className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          placeholder="שם מלא"
                          className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        טלפון *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="050-1234567"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        אימייל (אופציונלי)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-12">
              {step > 1 && (
                <button
                  onClick={prevStep}
                  className="flex-1 px-6 py-4 border-2 border-gray-200 hover:bg-gray-50 rounded-xl font-bold transition-all"
                >
                  חזור
                </button>
              )}
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 disabled:from-gray-300 disabled:to-gray-400 text-white rounded-xl font-bold transition-all disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {step === 3 ? (
                  <>
                    <Calculator className="w-5 h-5" />
                    חשב חיסכון
                  </>
                ) : (
                  "המשך"
                )}
              </button>
            </div>
          </div>
        ) : (
          // Results Display
          <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-3xl p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-400 rounded-full mb-6">
                <CheckCircle className="w-12 h-12 text-emerald-900" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                הנה התוצאות שלכם!
              </h2>
              <p className="text-emerald-100 text-lg">
                חישבנו עבורכם את החיסכון המדויק והפוטנציאל הכלכלי
              </p>
            </div>

            {/* Main Savings */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                החיסכון החודשי והשנתי שלכם
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
                  <p className="text-gray-600 mb-2">חיסכון חודשי</p>
                  <p className="text-4xl font-bold text-green-700 mb-2">
                    ₪{results.monthlySavings.toLocaleString()}
                  </p>
                  <p className="text-sm text-green-600">
                    {results.savingsPercentage}% מהחשבון
                  </p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border-2 border-emerald-200">
                  <p className="text-gray-600 mb-2">חיסכון שנתי</p>
                  <p className="text-4xl font-bold text-emerald-700 mb-2">
                    ₪{results.annualSavings.toLocaleString()}
                  </p>
                  <p className="text-sm text-emerald-600">
                    לאורך 25 שנה: ₪
                    {(results.annualSavings * 25).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* System Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                פרטי המערכת המומלצת
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <Sun className="w-12 h-12 text-amber-500 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-gray-900 mb-1">
                    {results.panelsNeeded}
                  </p>
                  <p className="text-gray-600">פאנלים</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {results.panelType}
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <Zap className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-gray-900 mb-1">
                    {results.systemSize} kW
                  </p>
                  <p className="text-gray-600">הספק מערכת</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {results.annualProduction.toLocaleString()} kWh/שנה
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <Award className="w-12 h-12 text-purple-500 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-gray-900 mb-1">
                    {results.warranty}
                  </p>
                  <p className="text-gray-600">שנות אחריות</p>
                  <p className="text-sm text-gray-500 mt-2">אחריות יצרן מלאה</p>
                </div>
              </div>
            </div>

            {/* Investment & ROI */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                השקעה והחזר
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-700">פאנלים סולאריים</span>
                  <span className="font-bold text-gray-900">
                    ₪{results.panelsCost.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-700">התקנה ועבודה</span>
                  <span className="font-bold text-gray-900">
                    ₪{results.installationCost.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-700">ממיר (אינוורטר)</span>
                  <span className="font-bold text-gray-900">
                    ₪{results.inverterCost.toLocaleString()}
                  </span>
                </div>
                {results.batteryCost > 0 && (
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700">מערכת אגירה</span>
                    <span className="font-bold text-gray-900">
                      ₪{results.batteryCost.toLocaleString()}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-xl border-2 border-emerald-200">
                  <span className="text-lg font-bold text-gray-900">
                    סה"כ השקעה
                  </span>
                  <span className="text-2xl font-bold text-emerald-700">
                    ₪{results.totalCost.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
                  <PiggyBank className="w-10 h-10 text-blue-600 mb-3" />
                  <p className="text-gray-700 mb-2">החזר השקעה</p>
                  <p className="text-3xl font-bold text-blue-700">
                    {results.paybackYears} שנים
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
                  <TrendingUp className="w-10 h-10 text-purple-600 mb-3" />
                  <p className="text-gray-700 mb-2">רווח ל-25 שנה</p>
                  <p className="text-3xl font-bold text-purple-700">
                    ₪{results.totalSavings25Years.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Environmental Impact */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Leaf className="w-8 h-8 text-green-600" />
                תרומה סביבתית
              </h3>
              <p className="text-gray-700 mb-6">
                המערכת הסולארית שלכם תורמת לכדור הארץ ומפחיתה את טביעת הרגל
                הפחמנית
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <Wind className="w-12 h-12 text-green-600 mb-3" />
                  <p className="text-gray-600 mb-2">הפחתת פליטות CO2 שנתית</p>
                  <p className="text-3xl font-bold text-green-700">
                    {results.co2SavedAnnually.toLocaleString()} ק"ג
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <Leaf className="w-12 h-12 text-green-600 mb-3" />
                  <p className="text-gray-600 mb-2">שווה ערך לנטיעת</p>
                  <p className="text-3xl font-bold text-green-700">
                    {results.treesEquivalent} עצים
                  </p>
                  <p className="text-sm text-gray-500 mt-2">בשנה</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                מה הלאה?
              </h3>
              <p className="text-gray-600 text-center mb-6">
                נציג שלנו ייצור איתך קשר בקרוב עם הצעת מחיר מפורטת
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setShowResults(false);
                    setStep(1);
                    setFormData({
                      propertyType: "residential",
                      roofArea: "",
                      monthlyBill: "",
                      averageConsumption: "",
                      electricityPrice: "0.52",
                      systemSize: "",
                      panelType: "standard",
                      batteryBackup: false,
                      name: "",
                      phone: "",
                      email: "",
                    });
                  }}
                  className="px-6 py-4 border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-xl font-bold transition-all"
                >
                  חישוב חדש
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="px-6 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-xl font-bold transition-all"
                >
                  חזור לדף הבית
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
