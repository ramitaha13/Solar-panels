import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sun,
  Home,
  Zap,
  Users,
  Calculator,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  User,
  TrendingUp,
  Leaf,
} from "lucide-react";

export default function QuoteCalculator() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roofArea: "",
    monthlyBill: "",
    propertyType: "",
    peopleInHome: "",
    panelType: "",
  });
  const [showQuote, setShowQuote] = useState(false);

  const propertyTypes = [
    { value: "apartment", label: "דירה", icon: Home },
    { value: "house", label: "בית פרטי", icon: Home },
    { value: "business", label: "עסק", icon: Home },
  ];

  const panelOptions = [
    {
      value: "eco",
      name: "אקו פרויקט 370",
      power: "370W",
      price: 249,
      efficiency: "19.8%",
    },
    {
      value: "sun",
      name: "סאן פרו 400",
      power: "400W",
      price: 349,
      efficiency: "21.5%",
      recommended: true,
    },
    {
      value: "max",
      name: "סולאר מקס 450",
      power: "450W",
      price: 499,
      efficiency: "22.8%",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateQuote = () => {
    const roofArea = parseInt(formData.roofArea) || 0;
    const numPanels = Math.floor(roofArea / 2);
    const selectedPanel =
      panelOptions.find((p) => p.value === formData.panelType) ||
      panelOptions[1];
    const totalCost = numPanels * selectedPanel.price;
    const monthlyBill = parseInt(formData.monthlyBill) || 0;
    const monthlySavings = monthlyBill * 0.7; // 70% savings
    const yearlySavings = monthlySavings * 12;
    const paybackYears = (totalCost / yearlySavings).toFixed(1);

    return {
      numPanels,
      selectedPanel,
      totalCost,
      monthlySavings: Math.round(monthlySavings),
      yearlySavings: Math.round(yearlySavings),
      paybackYears,
      co2Saved: Math.round(numPanels * 0.5 * 12), // טון CO2 לשנה
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setShowQuote(true);
    }
  };

  const canProceed = () => {
    if (step === 1) {
      return formData.name && formData.email && formData.phone;
    }
    if (step === 2) {
      return (
        formData.roofArea &&
        formData.monthlyBill &&
        formData.propertyType &&
        formData.peopleInHome
      );
    }
    if (step === 3) {
      return formData.panelType;
    }
    return false;
  };

  const quote = showQuote ? calculateQuote() : null;

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
                aria-label="חזור"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-3">
                <div className="bg-amber-400 p-2 rounded-full">
                  <Sun className="w-6 h-6 text-emerald-900" />
                </div>
                <h1 className="text-2xl font-bold">סולאר פרו</h1>
              </div>
            </div>
            <div className="text-sm text-emerald-200">
              <Calculator className="w-5 h-5 inline ml-2" />
              מחשבון הצעת מחיר
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {!showQuote ? (
          <>
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                        s <= step
                          ? "bg-emerald-600 text-white"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      {s}
                    </div>
                    {s < 3 && (
                      <div
                        className={`flex-1 h-1 mx-2 transition-all ${
                          s < step ? "bg-emerald-600" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>פרטים אישיים</span>
                <span>פרטי הנכס</span>
                <span>בחירת פאנלים</span>
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Details */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
                        <User className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-emerald-800 font-medium">
                          שלב 1 מתוך 3
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        בואו נכיר
                      </h2>
                      <p className="text-gray-600">
                        מלאו את הפרטים שלכם כדי שנוכל ליצור איתכם קשר
                      </p>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        שם מלא *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="הזינו את שמכם המלא"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        אימייל *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        טלפון *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="050-1234567"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Property Details */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
                        <Home className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-emerald-800 font-medium">
                          שלב 2 מתוך 3
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        פרטי הנכס
                      </h2>
                      <p className="text-gray-600">
                        ספרו לנו על הנכס שלכם כדי שנוכל לחשב את ההצעה המדויקת
                      </p>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-3">
                        סוג נכס *
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        {propertyTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                propertyType: type.value,
                              }))
                            }
                            className={`p-4 rounded-xl border-2 transition-all ${
                              formData.propertyType === type.value
                                ? "border-emerald-500 bg-emerald-50"
                                : "border-gray-200 hover:border-emerald-300"
                            }`}
                          >
                            <type.icon className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
                            <div className="text-sm font-medium">
                              {type.label}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        שטח הגג (מ"ר) *
                      </label>
                      <input
                        type="number"
                        name="roofArea"
                        value={formData.roofArea}
                        onChange={handleInputChange}
                        placeholder="לדוגמה: 50"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                        required
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        אורך × רוחב של הגג
                      </p>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        חשבון חשמל חודשי ממוצע (₪) *
                      </label>
                      <input
                        type="number"
                        name="monthlyBill"
                        value={formData.monthlyBill}
                        onChange={handleInputChange}
                        placeholder="לדוגמה: 500"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        מספר נפשות בבית *
                      </label>
                      <input
                        type="number"
                        name="peopleInHome"
                        value={formData.peopleInHome}
                        onChange={handleInputChange}
                        placeholder="לדוגמה: 4"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Panel Selection */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-4">
                        <Sun className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm text-emerald-800 font-medium">
                          שלב 3 מתוך 3
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        בחרו את סוג הפאנלים
                      </h2>
                      <p className="text-gray-600">
                        כל הפאנלים שלנו מגיעים עם אחריות מלאה והתקנה מקצועית
                      </p>
                    </div>

                    <div className="space-y-4">
                      {panelOptions.map((panel) => (
                        <button
                          key={panel.value}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              panelType: panel.value,
                            }))
                          }
                          className={`w-full p-6 rounded-2xl border-2 transition-all text-right ${
                            formData.panelType === panel.value
                              ? "border-emerald-500 bg-emerald-50 shadow-lg"
                              : "border-gray-200 hover:border-emerald-300"
                          } ${panel.recommended ? "ring-2 ring-amber-400" : ""}`}
                        >
                          {panel.recommended && (
                            <div className="inline-block bg-gradient-to-r from-amber-400 to-yellow-500 text-emerald-900 px-3 py-1 rounded-full text-xs font-bold mb-3">
                              מומלץ ביותר
                            </div>
                          )}
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {panel.name}
                              </h3>
                              <div className="flex gap-4 text-sm text-gray-600 mb-2">
                                <span>
                                  <Zap className="w-4 h-4 inline ml-1" />
                                  {panel.power}
                                </span>
                                <span>יעילות: {panel.efficiency}</span>
                              </div>
                            </div>
                            <div className="text-left">
                              <div className="text-3xl font-bold text-emerald-700">
                                {panel.price}₪
                              </div>
                              <div className="text-sm text-gray-500">לפאנל</div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-8">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-bold transition-all"
                    >
                      חזור
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={!canProceed()}
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 disabled:from-gray-300 disabled:to-gray-400 text-white py-4 rounded-xl font-bold transition-all disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {step === 3 ? "חשב הצעת מחיר" : "המשך"}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          /* Quote Results */
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  הצעת המחיר שלכם מוכנה!
                </h2>
                <p className="text-gray-600">
                  שלום {formData.name}, הנה חישוב מפורט עבור המערכת הסולארית
                  שלכם
                </p>
              </div>

              {/* Main Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl border-2 border-emerald-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Sun className="w-6 h-6 text-emerald-600" />
                    <h3 className="font-bold text-gray-700">מספר פאנלים</h3>
                  </div>
                  <div className="text-4xl font-bold text-emerald-700">
                    {quote.numPanels}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {quote.selectedPanel.name}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-2xl border-2 border-amber-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Calculator className="w-6 h-6 text-amber-600" />
                    <h3 className="font-bold text-gray-700">עלות כוללת</h3>
                  </div>
                  <div className="text-4xl font-bold text-amber-700">
                    ₪{quote.totalCost.toLocaleString()}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">כולל התקנה</p>
                </div>
              </div>

              {/* Savings */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-200 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  החיסכון שלכם
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">חודשי</div>
                    <div className="text-3xl font-bold text-blue-700">
                      ₪{quote.monthlySavings}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">שנתי</div>
                    <div className="text-3xl font-bold text-blue-700">
                      ₪{quote.yearlySavings.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">החזר השקעה</div>
                    <div className="text-3xl font-bold text-blue-700">
                      {quote.paybackYears} שנים
                    </div>
                  </div>
                </div>
              </div>

              {/* Environmental Impact */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border-2 border-green-200 mb-8">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  השפעה סביבתית
                </h3>
                <p className="text-gray-700">
                  המערכת שלכם תחסוך בערך{" "}
                  <span className="font-bold text-green-700">
                    {quote.co2Saved} טון CO₂
                  </span>{" "}
                  בשנה - זה כמו לשתול {Math.round(quote.co2Saved * 50)} עצים!
                </p>
              </div>

              {/* Summary */}
              <div className="bg-gray-50 p-6 rounded-2xl mb-8">
                <h3 className="font-bold text-gray-900 mb-4">סיכום ההצעה</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">שם:</span>
                    <span className="font-medium">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">סוג נכס:</span>
                    <span className="font-medium">
                      {
                        propertyTypes.find(
                          (t) => t.value === formData.propertyType,
                        )?.label
                      }
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">שטח גג:</span>
                    <span className="font-medium">{formData.roofArea} מ"ר</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">חשבון חשמל נוכחי:</span>
                    <span className="font-medium">₪{formData.monthlyBill}</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  צרו קשר לקביעת פגישה
                </button>
                <button
                  onClick={() => {
                    setShowQuote(false);
                    setStep(1);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      roofArea: "",
                      monthlyBill: "",
                      propertyType: "",
                      peopleInHome: "",
                      panelType: "",
                    });
                  }}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-xl font-bold transition-all"
                >
                  חישוב חדש
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-emerald-900 text-white rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                מוכנים לעשות את הצעד הבא?
              </h3>
              <p className="text-emerald-200 mb-6">
                הצוות שלנו זמין לענות על כל שאלה ולעזור לכם להתקדם
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                <a
                  href="tel:+9721800"
                  className="flex items-center gap-2 hover:text-amber-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  SOLAR-IL-1-800
                </a>
                <a
                  href="mailto:info@solarpro.co.il"
                  className="flex items-center gap-2 hover:text-amber-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@solarpro.co.il
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
