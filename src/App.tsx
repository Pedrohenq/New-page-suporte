import { useState, useCallback } from "react";
import { Hero } from "./components/Hero";
import { QuickAnswers } from "./components/QuickAnswers";
import { CategoryGrid } from "./components/CategoryGrid";
import { FAQSection } from "./components/FAQSection";
import { SupportInfo } from "./components/SupportInfo";
import { Footer } from "./components/Footer";
import { faqCategories, quickAnswers } from "./data/faqData";

export function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setSelectedCategory(null);
    if (query.trim()) {
      setTimeout(() => {
        document.getElementById("faq")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  const handleSelectCategory = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchQuery("");
    setTimeout(() => {
      document.getElementById("faq")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

  const handleClearCategory = useCallback(() => {
    setSelectedCategory(null);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <Hero onSearch={handleSearch} />
      <QuickAnswers answers={quickAnswers} />
      <CategoryGrid
        categories={faqCategories}
        onSelectCategory={handleSelectCategory}
      />
      <FAQSection
        categories={faqCategories}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        onClearCategory={handleClearCategory}
      />
      <SupportInfo />
      <Footer />
    </div>
  );
}
