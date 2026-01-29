import React, { useState } from "react";
import {
  Sun,
  Leaf,
  Shield,
  TrendingUp,
  Wrench,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function SolarProWebsite() {
  const [roofArea, setRoofArea] = useState("");
  const [showCalculation, setShowCalculation] = useState(false);

  const solarPanels = [
    {
      name: "אקו פרויקט 370",
      power: "370W",
      price: "249",
      warranty: "20 שנה",
      efficiency: "19.8%",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
      features: [
        "טכנולוגיות פוליקריסטלית",
        "מגרש עמידה בפני מזג אוויר",
        "ביצועים סטנדרטיים",
        "מושלם להתקנה מגובל",
      ],
    },
    {
      name: "סאן פרו 400",
      power: "400W",
      price: "349",
      warranty: "25 שנה",
      efficiency: "21.5%",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800",
      features: [
        "תאים מונוקריסטליים PERC",
        "ציפוי אנטי-רפלקטיבי",
        "ביצועים משופרים באור נמוך",
        "הערך הטוב ביותר לבתים",
      ],
      highlighted: true,
    },
    {
      name: "סולאר מקס 450",
      power: "450W",
      price: "499",
      warranty: "30 שנה",
      efficiency: "22.8%",
      image:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800",
      features: [
        "טכנולוגיות N-Type TOPCon",
        "עיצוב דו-צדדי",
        "ביצועים פרימיום",
        "יעור אנרגיה מקסימלי",
      ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "אחריות 25 שנה",
      description:
        "אחריות מובילה בתעשייה שמבטיחה שהחשקעה שלכם מוגנת לעשרות שנים.",
    },
    {
      icon: Leaf,
      title: "ידידותי לסביבה",
      description:
        "הפחיתו את טביעת הרגל הפחמנית שלכם ותרמו לכדור ארץ נקי וירוק יותר.",
    },
    {
      icon: TrendingUp,
      title: "הפחיתו חשבונות חשמל",
      description:
        "חסכו עד 70% מעלויות החשמל החודשיות שלכם עם הפתרונות הסולאריים היעילים שלנו.",
    },
    {
      icon: TrendingUp,
      title: "העלאת ערך הנכס",
      description: "התקנת סולאריות יכולות להעלות את ערך הנכס שלכם עד 4%.",
    },
    {
      icon: Sun,
      title: "יעילות גבוהה",
      description: "פאנלים פרימיום עם יעילות של עד 22.8% ליצור אנרגיה מקסימלי.",
    },
    {
      icon: Wrench,
      title: "התקנה מקצועית",
      description: "הטכנאים המומחים שלנו מבטיחים התקנה מושלמת בכל פעם.",
    },
  ];

  const handleCalculate = () => {
    setShowCalculation(true);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100"
      dir="rtl"
    >
      {/* Header */}
      <header className="bg-gradient-to-l from-emerald-800 to-emerald-900 text-white shadow-lg sticky top-0 z-50 w-full">
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="bg-amber-400 p-2 rounded-full">
                <Sun className="w-6 h-6 text-emerald-900" />
              </div>
              <h1 className="text-2xl font-bold">סולאר פרו</h1>
            </div>
            <nav className="hidden md:flex gap-8 text-sm">
              <a
                href="#products"
                className="hover:text-amber-300 transition-colors"
              >
                מוצרים
              </a>
              <a
                href="#calculator"
                className="hover:text-amber-300 transition-colors"
              >
                מחשבון
              </a>
              <a
                href="#contact"
                className="hover:text-amber-300 transition-colors"
              >
                צור קשר
              </a>
            </nav>
            <button className="bg-emerald-700 hover:bg-emerald-600 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg">
              קבל הצעת מחיר
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-bl from-emerald-700 via-emerald-800 to-emerald-900 text-white overflow-hidden w-full min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full px-6 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-600/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-amber-400/30">
              <Sun className="w-5 h-5 text-amber-300" />
              <span className="text-sm">פתרונות אנרגיה בת-קיימא</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              הפעילו את <span className="text-amber-300">הבית שלכם בכוח</span>{" "}
              השמש
            </h2>

            <p className="text-xl md:text-2xl text-emerald-100 mb-12 leading-relaxed">
              פאנלים סולאריים יעילים שמפחיתים את חשבונות החשמל ואת טביעת הרגל
              הפחמנית שלכם. הצטרפו למהפכת האנרגיה והמתחדשת היום.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-400 hover:bg-amber-300 text-emerald-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                <Sun className="w-5 h-5" />
                חשבו את החיסכון שלכם
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
                למד עוד
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-300 mb-2">+10k</div>
              <div className="text-emerald-200">לקוחות מרוצים</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-300 mb-2">98%</div>
              <div className="text-emerald-200">אחוז יעילות</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-300 mb-2">+25</div>
              <div className="text-emerald-200">שנות אחריות</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 w-full">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#fafaf9"
            />
          </svg>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="py-20 bg-gradient-to-b from-stone-50 to-white w-full"
      >
        <div className="w-full px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
              <Sun className="w-4 h-4 text-amber-600" />
              <span className="text-sm text-amber-800 font-medium">
                המוצרים שלנו
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              פאנלים סולאריים לכל צורך
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              בחרו מתוך מגוון הפאנלים הסולאריים האיכותיים שלנו, המתאימים באחריות
              המובילה בתעשייה.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {solarPanels.map((panel, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                  panel.highlighted
                    ? "ring-4 ring-amber-400 scale-105 shadow-xl"
                    : "shadow-lg hover:scale-105"
                }`}
              >
                {panel.highlighted && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-emerald-900 px-4 py-1 rounded-full text-sm font-bold z-10 shadow-lg">
                    מומלץ ביותר
                  </div>
                )}

                <div className="relative h-56 overflow-hidden">
                  <img
                    src={panel.image}
                    alt={panel.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-emerald-900/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {panel.name}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-5xl font-bold text-emerald-900">
                      {panel.price}₪
                    </span>
                    <span className="text-gray-500">/פאנל</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-emerald-700 mb-1">
                        {panel.warranty}
                      </div>
                      <div className="text-xs text-gray-500">אחריות</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-700 mb-1">
                        {panel.efficiency}
                      </div>
                      <div className="text-xs text-gray-500">יעילות</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-700 mb-1">
                        {panel.power}
                      </div>
                      <div className="text-xs text-gray-500">הספק</div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {panel.features.map((feature, idx) => (
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

                  <button
                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                      panel.highlighted
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
        </div>
      </section>

      {/* Calculator Section */}
      <section
        id="calculator"
        className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50 w-full"
      >
        <div className="w-full px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4 shadow-sm">
                <Sun className="w-4 h-4 text-emerald-600" />
                <span className="text-sm text-gray-700 font-medium">
                  מחשבון סולארי
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                כמה פאנלים אתם צריכים?
              </h2>
              <p className="text-xl text-gray-600">
                הזינו את שטח הגג שלכם ונחשב עבורכם את מספר הפאנלים האופטימלי
                לבית.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Sun className="w-6 h-6 text-emerald-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    מחשבון שטח גג
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  קבלו הערכה מידית לתכנונת הסולארית שלכם
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-3">
                    שטח הגג (מ"ר)
                  </label>
                  <input
                    type="number"
                    value={roofArea}
                    onChange={(e) => setRoofArea(e.target.value)}
                    placeholder="הזינו את שטח הגג..."
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl text-lg focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    טיפ: הכפילו אורך x רוחב של הגג שלכם
                  </p>
                </div>

                <button
                  onClick={handleCalculate}
                  disabled={!roofArea}
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 disabled:from-gray-300 disabled:to-gray-400 text-white py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Sun className="w-5 h-5" />
                  חשב פאנלים
                </button>

                {showCalculation && roofArea && (
                  <div className="mt-8 p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border-2 border-emerald-200 animate-fadeIn">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-emerald-600 p-2 rounded-full">
                        <Sun className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-emerald-900">
                        התוצאה שלכם
                      </h4>
                    </div>
                    <p className="text-gray-700 mb-4">בהתבסס על שטח הגג שלכם</p>
                    <div className="bg-white p-6 rounded-xl">
                      <div className="text-4xl font-bold text-emerald-700 mb-2">
                        ~{Math.floor(parseInt(roofArea) / 2)} פאנלים
                      </div>
                      <p className="text-gray-600">מומלץ לגג שלכם</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white w-full">
        <div className="w-full px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              למה לבחור באנרגיה סולארית?
            </h2>
            <p className="text-xl text-gray-600">
              גלו את היתרונות הרבים של המעבר לאנרגיה סולארית נקייה ומתחדשת.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100"
                >
                  <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-emerald-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white py-16 w-full"
      >
        <div className="w-full px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 max-w-7xl mx-auto">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-400 p-3 rounded-full">
                  <Sun className="w-8 h-8 text-emerald-900" />
                </div>
                <h3 className="text-3xl font-bold">סולאר פרו</h3>
              </div>
              <p className="text-emerald-200 text-lg leading-relaxed mb-6">
                הפכנו מובילה של פתרונות פאנלים סולאריים פרימיים. אנחנו עוזרים
                לבתים ועסקים לעבור לאנרגיה נקייה ומתחדשת.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">צור קשר</h4>
              <div className="space-y-4">
                <a
                  href="mailto:info@solarpro.co.il"
                  className="flex items-center gap-3 text-emerald-200 hover:text-amber-300 transition-colors group"
                >
                  <div className="bg-emerald-800 p-2 rounded-lg group-hover:bg-emerald-700 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>info@solarpro.co.il</span>
                </a>
                <a
                  href="tel:+9721800"
                  className="flex items-center gap-3 text-emerald-200 hover:text-amber-300 transition-colors group"
                >
                  <div className="bg-emerald-800 p-2 rounded-lg group-hover:bg-emerald-700 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>SOLAR-IL-1-800</span>
                </a>
                <div className="flex items-center gap-3 text-emerald-200">
                  <div className="bg-emerald-800 p-2 rounded-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>רחוב האנרגיה 123, תל אביב</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-emerald-800 pt-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex gap-6 text-sm">
                <a
                  href="#products"
                  className="text-emerald-300 hover:text-amber-300 transition-colors"
                >
                  מוצרים
                </a>
                <a
                  href="#calculator"
                  className="text-emerald-300 hover:text-amber-300 transition-colors"
                >
                  מחשבון
                </a>
                <a
                  href="#"
                  className="text-emerald-300 hover:text-amber-300 transition-colors"
                >
                  אודותינו
                </a>
                <a
                  href="#"
                  className="text-emerald-300 hover:text-amber-300 transition-colors"
                >
                  שאלות נפוצות
                </a>
              </div>
              <div className="flex items-center gap-2 text-emerald-300 text-sm">
                <Sun className="w-4 h-4 text-amber-400" />
                <span>
                  © 2024 סולאר פרו. כל הזכויות שמורות. מופעל בכוח השמש
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `,
        }}
      />
    </div>
  );
}
