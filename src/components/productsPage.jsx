import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sun,
  Leaf,
  Shield,
  TrendingUp,
  Wrench,
  Zap,
  Battery,
  Award,
  ArrowRight,
  Filter,
  Search,
  X,
  Menu,
} from "lucide-react";

export default function ProductsPage() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const allProducts = [
    {
      name: "אקו פרויקט 370",
      power: "370W",
      price: "249",
      warranty: "20 שנה",
      efficiency: "19.8%",
      category: "standard",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
      features: [
        "טכנולוגיית פוליקריסטלית",
        "עמידות גבוהה בפני מזג אוויר",
        "ביצועים סטנדרטיים",
        "מושלם להתקנה ביתית",
      ],
      specs: {
        voltage: "37.2V",
        current: "9.95A",
        weight: "21 ק״ג",
        dimensions: "1755×1038×35 מ״מ",
      },
    },
    {
      name: "סאן פרו 400",
      power: "400W",
      price: "349",
      warranty: "25 שנה",
      efficiency: "21.5%",
      category: "premium",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800",
      features: [
        "תאים מונוקריסטליים PERC",
        "ציפוי אנטי-רפלקטיבי",
        "ביצועים משופרים באור נמוך",
        "הערך הטוב ביותר לבתים",
      ],
      highlighted: true,
      specs: {
        voltage: "40.5V",
        current: "9.88A",
        weight: "22 ק״ג",
        dimensions: "1765×1048×35 מ״מ",
      },
    },
    {
      name: "סולאר מקס 450",
      power: "450W",
      price: "499",
      warranty: "30 שנה",
      efficiency: "22.8%",
      category: "premium",
      image:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800",
      features: [
        "טכנולוגיית N-Type TOPCon",
        "עיצוב דו-צדדי",
        "ביצועים פרימיום",
        "יעילות אנרגטית מקסימלית",
      ],
      specs: {
        voltage: "41.7V",
        current: "10.79A",
        weight: "23.5 ק״ג",
        dimensions: "1909×1134×35 מ״מ",
      },
    },
    {
      name: "גרין פאואר 330",
      power: "330W",
      price: "199",
      warranty: "15 שנה",
      efficiency: "18.5%",
      category: "standard",
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800",
      features: [
        "פתרון חסכוני",
        "התקנה קלה",
        "אמינות גבוהה",
        "מתאים למערכות קטנות",
      ],
      specs: {
        voltage: "36.8V",
        current: "8.97A",
        weight: "20 ק״ג",
        dimensions: "1640×992×35 מ״מ",
      },
    },
    {
      name: "אולטרה 480",
      power: "480W",
      price: "599",
      warranty: "30 שנה",
      efficiency: "23.2%",
      category: "premium",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
      features: [
        "טכנולוגיה מתקדמת ביותר",
        "תפוקה מקסימלית",
        "עמידות יוצאת דופן",
        "לפרויקטים מסחריים",
      ],
      specs: {
        voltage: "42.1V",
        current: "11.4A",
        weight: "24 ק״ג",
        dimensions: "2094×1134×35 מ״מ",
      },
    },
    {
      name: "קומפקט 350",
      power: "350W",
      price: "279",
      warranty: "20 שנה",
      efficiency: "20.1%",
      category: "compact",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
      features: [
        "עיצוב קומפקטי",
        "מושלם לגגות קטנים",
        "התקנה גמישה",
        "יחס מחיר-ביצועים מעולה",
      ],
      specs: {
        voltage: "38.5V",
        current: "9.09A",
        weight: "19.5 ק״ג",
        dimensions: "1650×990×30 מ״מ",
      },
    },
    {
      name: "ביזנס פרו 420",
      power: "420W",
      price: "429",
      warranty: "25 שנה",
      efficiency: "21.8%",
      category: "commercial",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800",
      features: ["מיועד לעסקים", "תפוקה גבוהה", "אחריות מורחבת", "התקנה מהירה"],
      specs: {
        voltage: "41.2V",
        current: "10.19A",
        weight: "22.5 ק״ג",
        dimensions: "1820×1098×35 מ״מ",
      },
    },
    {
      name: "פלקס 390",
      power: "390W",
      price: "319",
      warranty: "22 שנה",
      efficiency: "20.5%",
      category: "standard",
      image:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800",
      features: [
        "גמישות התקנה",
        "ביצועים יציבים",
        "עמידות מוכחת",
        "תחזוקה מינימלית",
      ],
      specs: {
        voltage: "39.3V",
        current: "9.92A",
        weight: "21.5 ק״ג",
        dimensions: "1722×1045×35 מ״מ",
      },
    },
    {
      name: "מגה פאואר 500",
      power: "500W",
      price: "699",
      warranty: "30 שנה",
      efficiency: "23.5%",
      category: "premium",
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800",
      features: [
        "הספק מקסימלי",
        "טכנולוגיית דור חדש",
        "אופטימיזציה חכמה",
        "לפרויקטים גדולים",
      ],
      specs: {
        voltage: "43.2V",
        current: "11.57A",
        weight: "25 ק״ג",
        dimensions: "2108×1134×40 מ״מ",
      },
    },
  ];

  const categories = [
    { id: "all", name: "הכל", icon: Sun },
    { id: "standard", name: "סטנדרט", icon: Zap },
    { id: "premium", name: "פרמיום", icon: Award },
    { id: "compact", name: "קומפקטי", icon: Battery },
    { id: "commercial", name: "מסחרי", icon: TrendingUp },
  ];

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      selectedFilter === "all" || product.category === selectedFilter;
    const matchesSearch =
      product.name.includes(searchTerm) ||
      product.power.includes(searchTerm) ||
      product.features.some((feature) => feature.includes(searchTerm));
    return matchesCategory && matchesSearch;
  });

  const handleGetQuote = () => {
    navigate("/quoteCalculator");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow-x: hidden;
        }
        #root {
          width: 100%;
          height: 100%;
        }
      `,
        }}
      />
      <div
        className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 w-screen overflow-x-hidden"
        dir="rtl"
      >
        {/* Header */}
        <header className="bg-gradient-to-l from-emerald-800 to-emerald-900 text-white shadow-lg sticky top-0 z-50 w-screen">
          <div className="w-full px-6 py-4">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-emerald-700 rounded-lg transition-colors"
                aria-label="תפריט"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>

              {/* Logo */}
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => navigate("/")}
              >
                <div className="bg-amber-400 p-2 rounded-full">
                  <Sun className="w-6 h-6 text-emerald-900" />
                </div>
                <h1 className="text-2xl font-bold">סולאר פרו</h1>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex gap-8 text-sm">
                <button
                  onClick={() => navigate("/")}
                  className="hover:text-amber-300 transition-colors"
                >
                  דף הבית
                </button>
                <button
                  onClick={() => navigate("/products")}
                  className="text-amber-300 font-bold"
                >
                  מוצרים
                </button>
              </nav>

              {/* CTA Button */}
              <button
                onClick={handleLogin}
                className="hidden md:block bg-emerald-700 hover:bg-emerald-600 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg"
              >
                כניסה
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
              mobileMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          />

          <div
            className={`md:hidden fixed top-0 right-0 h-full w-80 bg-slate-100 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 bg-emerald-800">
                <div className="flex items-center gap-3 text-white">
                  <div className="bg-amber-400 p-2 rounded-full">
                    <Sun className="w-6 h-6 text-emerald-900" />
                  </div>
                  <h2 className="text-xl font-bold">סולאר פרו</h2>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white p-2 hover:bg-emerald-700 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col p-6 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/");
                  }}
                  className="text-xl text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 px-4 py-3 rounded-lg transition-all text-right"
                >
                  דף הבית
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate("/products");
                  }}
                  className="text-xl text-emerald-700 bg-emerald-50 px-4 py-3 rounded-lg font-bold text-right"
                >
                  מוצרים
                </button>
              </nav>

              <div className="mt-auto p-6">
                <button
                  onClick={handleLogin}
                  className="w-full bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-4 rounded-full font-bold transition-all duration-300 shadow-lg"
                >
                  כניסה
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-bl from-emerald-700 via-emerald-800 to-emerald-900 text-white py-20 w-screen">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-20 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-20 w-72 h-72 bg-yellow-300 rounded-full blur-3xl"></div>
          </div>

          <div className="w-full px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-emerald-600/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-amber-400/30">
                <Sun className="w-5 h-5 text-amber-300" />
                <span className="text-sm">כל המוצרים שלנו</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                קטלוג <span className="text-amber-300">פאנלים סולאריים</span>
              </h1>

              <p className="text-lg md:text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
                גלו את מגוון הפאנלים הסולאריים המתקדמים שלנו. מסטנדרט ועד פרמיום
                - יש לנו את הפתרון המושלם לכל בית ועסק.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="חפש לפי שם, הספק או תכונה..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pr-12 pl-6 py-4 rounded-2xl bg-white/90 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-amber-400/50 transition-all"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white border-b border-gray-200 sticky top-[72px] z-40 w-screen">
          <div className="w-full px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700 flex-shrink-0 ml-4">
                  סינון:
                </span>
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedFilter(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all whitespace-nowrap ${
                        selectedFilter === category.id
                          ? "bg-emerald-700 text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-gradient-to-b from-white to-stone-50 w-screen">
          <div className="w-full px-6">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredProducts.length} מוצרים נמצאו
                </h2>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <Sun className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-600 mb-2">
                    לא נמצאו מוצרים
                  </h3>
                  <p className="text-gray-500">נסה לשנות את הסינון או החיפוש</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={index}
                      className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                        product.highlighted
                          ? "ring-4 ring-amber-400 shadow-xl"
                          : "shadow-lg hover:scale-105"
                      }`}
                    >
                      {product.highlighted && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-emerald-900 px-4 py-1 rounded-full text-sm font-bold z-10 shadow-lg">
                          מומלץ ביותר
                        </div>
                      )}

                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 right-4 bg-emerald-900/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                          {product.name}
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="flex items-baseline gap-2 mb-6">
                          <span className="text-4xl md:text-5xl font-bold text-emerald-900">
                            {product.price}₪
                          </span>
                          <span className="text-gray-500">/פאנל</span>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                          <div>
                            <div className="text-xl md:text-2xl font-bold text-emerald-700 mb-1">
                              {product.warranty}
                            </div>
                            <div className="text-xs text-gray-500">אחריות</div>
                          </div>
                          <div>
                            <div className="text-xl md:text-2xl font-bold text-emerald-700 mb-1">
                              {product.efficiency}
                            </div>
                            <div className="text-xs text-gray-500">יעילות</div>
                          </div>
                          <div>
                            <div className="text-xl md:text-2xl font-bold text-emerald-700 mb-1">
                              {product.power}
                            </div>
                            <div className="text-xs text-gray-500">הספק</div>
                          </div>
                        </div>

                        <ul className="space-y-3 mb-6">
                          {product.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-gray-700"
                            >
                              <svg
                                className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Technical Specs */}
                        <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                          <h4 className="font-bold text-gray-900 mb-3 text-sm">
                            מפרט טכני:
                          </h4>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex justify-between">
                              <span className="text-gray-600">מתח:</span>
                              <span className="font-medium text-gray-900">
                                {product.specs.voltage}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">זרם:</span>
                              <span className="font-medium text-gray-900">
                                {product.specs.current}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">משקל:</span>
                              <span className="font-medium text-gray-900">
                                {product.specs.weight}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">מידות:</span>
                              <span className="font-medium text-gray-900 text-[10px]">
                                {product.specs.dimensions}
                              </span>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={handleGetQuote}
                          className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                            product.highlighted
                              ? "bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-emerald-900 shadow-lg hover:shadow-xl"
                              : "bg-emerald-700 hover:bg-emerald-600 text-white"
                          }`}
                        >
                          קבל הצעת מחיר
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white py-16 w-screen">
          <div className="w-full px-6">
            <div className="max-w-7xl mx-auto text-center">
              <div
                className="flex items-center gap-3 mb-6 justify-center cursor-pointer"
                onClick={() => navigate("/")}
              >
                <div className="bg-amber-400 p-3 rounded-full">
                  <Sun className="w-8 h-8 text-emerald-900" />
                </div>
                <h3 className="text-3xl font-bold">סולאר פרו</h3>
              </div>
              <p className="text-emerald-200 text-lg leading-relaxed mb-6">
                החברה המובילה לפתרונות פאנלים סולאריים פרמיום בישראל
              </p>
              <div className="flex items-center justify-center gap-2 text-emerald-300 text-sm">
                <Sun className="w-4 h-4 text-amber-400" />
                <span>© 2024 סולאר פרו. כל הזכויות שמורות.</span>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `,
        }}
      />
    </>
  );
}
