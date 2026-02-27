import { useState, useRef, useEffect } from "react";
import { ChevronDown, Rocket, Video, FileText, User, Settings, CreditCard, Heart, ArrowLeft, Search, HelpCircle } from "lucide-react";
import type { FAQCategory, FAQItem } from "../data/faqData";

const iconComponentMap: Record<string, React.ReactNode> = {
  rocket: <Rocket size={22} />,
  video: <Video size={22} />,
  "file-text": <FileText size={22} />,
  user: <User size={22} />,
  settings: <Settings size={22} />,
  "credit-card": <CreditCard size={22} />,
  heart: <Heart size={22} />,
};

const colorMap: Record<string, { iconBg: string; accentBg: string; accentBorder: string; accentText: string }> = {
  violet: { iconBg: "bg-gradient-to-br from-violet-500 to-violet-600", accentBg: "bg-violet-50", accentBorder: "border-violet-200", accentText: "text-violet-600" },
  purple: { iconBg: "bg-gradient-to-br from-purple-500 to-purple-600", accentBg: "bg-purple-50", accentBorder: "border-purple-200", accentText: "text-purple-600" },
  fuchsia: { iconBg: "bg-gradient-to-br from-fuchsia-500 to-fuchsia-600", accentBg: "bg-fuchsia-50", accentBorder: "border-fuchsia-200", accentText: "text-fuchsia-600" },
  indigo: { iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600", accentBg: "bg-indigo-50", accentBorder: "border-indigo-200", accentText: "text-indigo-600" },
  amber: { iconBg: "bg-gradient-to-br from-amber-500 to-orange-500", accentBg: "bg-amber-50", accentBorder: "border-amber-200", accentText: "text-amber-600" },
  emerald: { iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600", accentBg: "bg-emerald-50", accentBorder: "border-emerald-200", accentText: "text-emerald-600" },
  rose: { iconBg: "bg-gradient-to-br from-rose-500 to-rose-600", accentBg: "bg-rose-50", accentBorder: "border-rose-200", accentText: "text-rose-600" },
};

function AccordionItem({ item, isOpen, onClick, color }: { item: FAQItem; isOpen: boolean; onClick: () => void; color: string }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const colors = colorMap[color] || colorMap.purple;

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div 
      className={`border-2 rounded-2xl transition-all duration-300 overflow-hidden ${
        isOpen 
          ? `${colors.accentBorder} ${colors.accentBg} shadow-lg` 
          : "border-gray-100 bg-white hover:border-purple-100 hover:shadow-md"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-start gap-4 p-5 sm:p-6 text-left"
        aria-expanded={isOpen}
      >
        <div className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center mt-0.5 transition-all duration-300 ${
          isOpen 
            ? `${colors.iconBg} text-white shadow-md` 
            : "bg-purple-100 text-purple-500"
        }`}>
          <HelpCircle size={16} />
        </div>
        <span className={`flex-1 text-base sm:text-lg font-semibold leading-relaxed transition-colors ${
          isOpen ? "text-gray-900" : "text-gray-700"
        }`}>
          {item.question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? `${colors.iconBg} text-white rotate-180` 
            : "bg-gray-100 text-gray-400"
        }`}>
          <ChevronDown size={18} />
        </div>
      </button>
      <div
        className="transition-all duration-300 ease-in-out"
        style={{ maxHeight: height, opacity: isOpen ? 1 : 0 }}
      >
        <div ref={contentRef} className="px-5 sm:px-6 pb-6 pl-[68px] sm:pl-[76px]">
          <div className="text-base text-gray-600 leading-relaxed whitespace-pre-line">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

interface FAQSectionProps {
  categories: FAQCategory[];
  searchQuery: string;
  selectedCategory: string | null;
  onClearCategory: () => void;
}

export function FAQSection({ categories, searchQuery, selectedCategory, onClearCategory }: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  // Filter logic
  const filteredCategories = categories
    .filter((cat) => !selectedCategory || cat.id === selectedCategory)
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const query = searchQuery.toLowerCase();
      const filteredItems = cat.items.filter(
        (item) =>
          item.question.toLowerCase().includes(query) ||
          item.answer.toLowerCase().includes(query)
      );
      return { ...cat, items: filteredItems };
    })
    .filter((cat) => cat.items.length > 0);

  const totalResults = filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <section id="faq" className="bg-gradient-to-b from-white to-purple-50 py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back button when category is selected */}
        {selectedCategory && (
          <button
            onClick={onClearCategory}
            className="flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 mb-8 group bg-purple-100 px-4 py-2 rounded-full transition-all hover:bg-purple-200"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Voltar para todas as categorias
          </button>
        )}

        {/* Section header */}
        {!selectedCategory && !searchQuery && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
              <span className="text-sm font-semibold text-purple-700 uppercase tracking-wider">
                FAQ
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Encontre rapidamente as respostas para as dúvidas mais comuns dos nossos usuários
            </p>
          </div>
        )}

        {/* Search results info */}
        {searchQuery.trim() && (
          <div className="mb-8 p-5 bg-white rounded-2xl border-2 border-purple-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
              <Search size={24} className="text-purple-600" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">
                {totalResults} resultado{totalResults !== 1 ? "s" : ""} encontrado{totalResults !== 1 ? "s" : ""}
              </p>
              <p className="text-sm text-gray-500">
                Buscando por: <span className="font-semibold text-purple-600">"{searchQuery}"</span>
              </p>
            </div>
          </div>
        )}

        {/* No results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-purple-100 flex items-center justify-center">
              <Search size={36} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Nenhum resultado encontrado
            </h3>
            <p className="text-gray-500 mb-6 max-w-sm mx-auto">
              Tente buscar com outras palavras-chave ou navegue pelas categorias disponíveis
            </p>
            <button
              onClick={onClearCategory}
              className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors"
            >
              Ver todas as categorias
            </button>
          </div>
        )}

        {/* FAQ Categories */}
        <div className="space-y-12">
          {filteredCategories.map((category) => {
            const colors = colorMap[category.color] || colorMap.purple;
            return (
              <div key={category.id} className="animate-fade-in">
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${colors.iconBg} text-white flex items-center justify-center shadow-lg`}>
                    {iconComponentMap[category.icon]}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-sm text-gray-500">{category.items.length} pergunta{category.items.length !== 1 ? "s" : ""}</p>
                  </div>
                </div>

                {/* FAQ Items */}
                <div className="space-y-3">
                  {category.items.map((item, idx) => {
                    const key = `${category.id}-${idx}`;
                    return (
                      <AccordionItem
                        key={key}
                        item={item}
                        isOpen={openItems.has(key)}
                        onClick={() => toggleItem(key)}
                        color={category.color}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
