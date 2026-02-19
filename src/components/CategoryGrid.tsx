import { Rocket, Video, FileText, User, Settings, CreditCard, Heart, ChevronRight, Calendar } from "lucide-react";
import type { FAQCategory } from "../data/faqData";

const iconMap: Record<string, React.ReactNode> = {
  rocket: <Rocket size={26} />,
  video: <Video size={26} />,
  "file-text": <FileText size={26} />,
  user: <User size={26} />,
  settings: <Settings size={26} />,
  "credit-card": <CreditCard size={26} />,
  heart: <Heart size={26} />,
  calendar: <Calendar size={26} />,
};

const colorStyles: Record<string, { gradient: string; bg: string; shadow: string; border: string; iconBg: string }> = {
  violet: {
    gradient: "from-violet-500 to-violet-600",
    bg: "bg-violet-50",
    shadow: "shadow-violet-500/20 hover:shadow-violet-500/30",
    border: "border-violet-100 hover:border-violet-200",
    iconBg: "bg-gradient-to-br from-violet-500 to-violet-600",
  },
  blue: {
    gradient: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    shadow: "shadow-blue-500/20 hover:shadow-blue-500/30",
    border: "border-blue-100 hover:border-blue-200",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  purple: {
    gradient: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
    shadow: "shadow-purple-500/20 hover:shadow-purple-500/30",
    border: "border-purple-100 hover:border-purple-200",
    iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
  },
  fuchsia: {
    gradient: "from-fuchsia-500 to-fuchsia-600",
    bg: "bg-fuchsia-50",
    shadow: "shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30",
    border: "border-fuchsia-100 hover:border-fuchsia-200",
    iconBg: "bg-gradient-to-br from-fuchsia-500 to-fuchsia-600",
  },
  indigo: {
    gradient: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-50",
    shadow: "shadow-indigo-500/20 hover:shadow-indigo-500/30",
    border: "border-indigo-100 hover:border-indigo-200",
    iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
  },
  amber: {
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    shadow: "shadow-amber-500/20 hover:shadow-amber-500/30",
    border: "border-amber-100 hover:border-amber-200",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-500",
  },
  emerald: {
    gradient: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
    shadow: "shadow-emerald-500/20 hover:shadow-emerald-500/30",
    border: "border-emerald-100 hover:border-emerald-200",
    iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
  },
  rose: {
    gradient: "from-rose-500 to-rose-600",
    bg: "bg-rose-50",
    shadow: "shadow-rose-500/20 hover:shadow-rose-500/30",
    border: "border-rose-100 hover:border-rose-200",
    iconBg: "bg-gradient-to-br from-rose-500 to-rose-600",
  },
};

interface CategoryGridProps {
  categories: FAQCategory[];
  onSelectCategory: (categoryId: string) => void;
}

export function CategoryGrid({ categories, onSelectCategory }: CategoryGridProps) {
  return (
    <section id="categorias" className="bg-white py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            <span className="text-sm font-semibold text-purple-700 uppercase tracking-wider">
              Categorias
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Navegue por Tema
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            Escolha uma categoria para encontrar as respostas que você precisa de forma rápida e organizada
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {categories.map((category) => {
            const styles = colorStyles[category.color] || colorStyles.purple;
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`group relative ${styles.bg} rounded-2xl p-6 text-left transition-all duration-300 border ${styles.border} hover:shadow-xl ${styles.shadow} hover:-translate-y-2 active:scale-[0.98] overflow-hidden`}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${styles.iconBg} text-white flex items-center justify-center mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  {iconMap[category.icon]}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800">
                  {category.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                  {category.description}
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400 bg-white/80 px-3 py-1 rounded-full">
                    {category.items.length} artigos
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${styles.gradient} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0`}>
                    <ChevronRight size={16} className="text-white" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
