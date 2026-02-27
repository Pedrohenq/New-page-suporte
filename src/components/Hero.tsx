import { useState } from "react";
import { Search, Sparkles, Headphones, Clock, Shield } from "lucide-react";

interface HeroProps {
  onSearch: (query: string) => void;
}

export function Hero({ onSearch }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-violet-900 to-fuchsia-900">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-fuchsia-500/20 rounded-full blur-3xl animate-float delay-200"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-40 right-10 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl animate-float delay-300"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8 animate-fade-in-up">
          <div className="relative">
            <Sparkles size={16} className="text-yellow-300" />
            <div className="absolute inset-0 animate-ping">
              <Sparkles size={16} className="text-yellow-300 opacity-50" />
            </div>
          </div>
          <span className="text-sm font-medium text-white/90">
            Central de Suporte e Ajuda
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 animate-fade-in-up delay-100">
          Olá! Como podemos
          <br />
          <span className="relative inline-block mt-2">
            <span className="gradient-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
              te ajudar hoje?
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 rounded-full opacity-60"></div>
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-purple-100/80 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200 leading-relaxed">
          Encontre respostas rápidas, tire dúvidas sobre consultas, receitas, 
          planos e muito mais. Estamos aqui para você!
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-8 animate-fade-in-up delay-300">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 group-focus-within:opacity-70 transition-all duration-500"></div>
            
            <div className="relative flex items-center bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="pl-5 pr-3">
                <Search size={22} className="text-purple-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value.length > 2) {
                    onSearch(e.target.value);
                  }
                }}
                placeholder="Digite sua dúvida aqui..."
                className="flex-1 py-5 sm:py-6 text-base sm:text-lg text-gray-800 placeholder-gray-400 bg-transparent outline-none"
              />
              <button
                type="submit"
                className="mr-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-xl hover:from-purple-700 hover:to-fuchsia-700 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 active:scale-95 flex-shrink-0"
              >
                Buscar
              </button>
            </div>
          </div>
        </form>

        {/* Quick Search Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up delay-400">
          {["Agendar consulta", "Receita digital", "Problemas de login", "Formas de pagamento"].map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSearchQuery(tag);
                onSearch(tag);
              }}
              className="px-4 py-2 text-sm font-medium text-white/80 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 active:scale-95"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto animate-fade-in-up delay-500">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/30 to-purple-600/30 backdrop-blur-xl flex items-center justify-center mb-3 border border-white/10">
              <Headphones size={24} className="text-purple-200" />
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-white">24h</span>
            <span className="text-xs sm:text-sm text-purple-200/60">Consultas</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500/30 to-fuchsia-600/30 backdrop-blur-xl flex items-center justify-center mb-3 border border-white/10">
              <Clock size={24} className="text-fuchsia-200" />
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-white">08-18h</span>
            <span className="text-xs sm:text-sm text-purple-200/60">Suporte</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/30 to-pink-600/30 backdrop-blur-xl flex items-center justify-center mb-3 border border-white/10">
              <Shield size={24} className="text-pink-200" />
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-white">100%</span>
            <span className="text-xs sm:text-sm text-purple-200/60">Seguro</span>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" 
            className="fill-purple-50"
          />
        </svg>
      </div>
    </section>
  );
}
