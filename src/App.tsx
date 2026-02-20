import { useState, useCallback } from "react";
import { Hero } from "./components/Hero";
import { QuickAnswers } from "./components/QuickAnswers";
import { CategoryGrid } from "./components/CategoryGrid";
import { FAQSection } from "./components/FAQSection";
import { SupportInfo } from "./components/SupportInfo";
import { Footer } from "./components/Footer";
import { TicketForms } from "./components/TicketForms";
import { faqCategories, quickAnswers } from "./data/faqData";
import {
  HelpCircle,
  ClipboardList,
  MessageCircle,
} from "lucide-react";

type PageView = "faq" | "tickets";

export function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<PageView>("faq");

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setSelectedCategory(null);
    setCurrentView("faq");
    if (query.trim()) {
      setTimeout(() => {
        document
          .getElementById("faq")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  const handleSelectCategory = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchQuery("");
    setCurrentView("faq");
    setTimeout(() => {
      document
        .getElementById("faq")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

  const handleClearCategory = useCallback(() => {
    setSelectedCategory(null);
  }, []);

  const switchToView = useCallback((view: PageView) => {
    setCurrentView(view);
    setSearchQuery("");
    setSelectedCategory(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const openChat = () => {
    if (window.$zoho && window.$zoho.salesiq) {
      window.$zoho.salesiq.floatwindow?.visible("show");
    }
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Sticky Top Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-purple-100/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <button
              onClick={() => switchToView("faq")}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <HelpCircle size={18} className="text-white" />
              </div>
              <span className="text-sm sm:text-base font-bold text-gray-900 hidden sm:inline">
                Central de Suporte
              </span>
            </button>

            {/* Tab Navigation */}
            <div className="flex items-center bg-purple-50 rounded-xl p-1">
              <button
                onClick={() => switchToView("faq")}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  currentView === "faq"
                    ? "bg-white text-purple-700 shadow-md"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <HelpCircle size={14} />
                <span>FAQ</span>
              </button>
              <button
                onClick={() => switchToView("tickets")}
                className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  currentView === "tickets"
                    ? "bg-white text-purple-700 shadow-md"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <ClipboardList size={14} />
                <span>Chamados</span>
              </button>
            </div>

            {/* Chat button */}
            <button
              onClick={openChat}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs sm:text-sm font-bold rounded-xl hover:from-purple-700 hover:to-fuchsia-700 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <MessageCircle size={14} />
              <span className="hidden sm:inline">Chat</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {currentView === "faq" ? (
        <>
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

          {/* CTA to open ticket */}
          <section className="bg-white py-12 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-3xl border-2 border-purple-200 p-8 sm:p-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <ClipboardList size={30} className="text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
                  Não encontrou sua resposta?
                </h3>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                  Abra um chamado detalhado para nossa equipe de suporte.
                  Analisaremos seu caso e responderemos o mais breve possível.
                </p>
                <button
                  onClick={() => switchToView("tickets")}
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl hover:from-purple-700 hover:to-fuchsia-700 transition-all duration-300 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 active:scale-[0.98]"
                >
                  <ClipboardList size={20} />
                  Abrir um Chamado
                </button>
              </div>
            </div>
          </section>

          <SupportInfo />
        </>
      ) : (
        <>
          {/* Tickets Hero */}
          <section className="relative overflow-hidden py-16 sm:py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-violet-900 to-fuchsia-900">
              <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-fuchsia-500/20 rounded-full blur-3xl animate-float delay-200"></div>
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-6">
                <ClipboardList size={16} className="text-purple-300" />
                <span className="text-sm font-medium text-white/90">
                  Formulários de Suporte
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
                Abrir Chamado de
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300">
                  Suporte Técnico
                </span>
              </h1>
              <p className="text-lg text-purple-100/70 max-w-2xl mx-auto mb-6">
                Preencha o formulário abaixo com seus dados e detalhes do
                problema. Nossa equipe responderá pelo e-mail cadastrado.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="text-sm text-white/80">
                    Resposta em até 24h
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                  <span className="text-sm text-white/80">
                    Seg a Sex, 08h-18h
                  </span>
                </div>
              </div>
            </div>
            {/* Wave */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg
                viewBox="0 0 1440 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                <path
                  d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
                  className="fill-purple-50"
                />
              </svg>
            </div>
          </section>

          {/* Ticket Forms */}
          <TicketForms />

          {/* Back to FAQ CTA */}
          <section className="bg-gradient-to-b from-purple-50 to-white py-12 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-white rounded-3xl border-2 border-purple-100 p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Prefere buscar a resposta sozinho?
                </h3>
                <p className="text-gray-500 mb-5">
                  Nossa FAQ tem mais de 50 perguntas respondidas sobre todos os
                  temas.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => switchToView("faq")}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-purple-700 bg-purple-100 rounded-xl hover:bg-purple-200 transition-colors"
                  >
                    <HelpCircle size={18} />
                    Ver FAQ Completo
                  </button>
                  <button
                    onClick={openChat}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-xl hover:from-purple-700 hover:to-fuchsia-700 transition-all shadow-lg shadow-purple-500/25"
                  >
                    <MessageCircle size={18} />
                    Falar no Chat
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
}

// Type declaration for Zoho SalesIQ
declare global {
  interface Window {
    $zoho?: {
      salesiq?: {
        floatwindow?: {
          visible: (action: string) => void;
        };
        ready?: () => void;
      };
    };
  }
}
