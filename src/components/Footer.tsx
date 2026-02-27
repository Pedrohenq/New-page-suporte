import { Heart, Shield, Lock, Award } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 overflow-hidden">
      {/* Trust badges */}
      <div className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Shield size={20} className="text-purple-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Regulamentado</p>
                <p className="text-xs text-gray-500">CFM nº 2.314/2022</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <Lock size={20} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Dados Seguros</p>
                <p className="text-xs text-gray-500">LGPD Compliant</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Award size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Médicos CRM</p>
                <p className="text-xs text-gray-500">Profissionais verificados</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center">
                <Heart size={20} className="text-pink-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Suporte</p>
                <p className="text-xs text-gray-500">Seg-Sex, 08-18h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center shadow-lg">
              <Heart size={20} className="text-white" />
            </div>
            <div>
              <span className="text-lg font-bold text-white">Central de Suporte</span>
              <p className="text-xs text-gray-500">Telemedicina</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#categorias" className="hover:text-purple-400 transition-colors">
              Categorias
            </a>
            <a href="#faq" className="hover:text-purple-400 transition-colors">
              FAQ
            </a>
            <a href="#suporte" className="hover:text-purple-400 transition-colors">
              Contato
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-1.5 flex-wrap">
            © {currentYear} Todos os direitos reservados. Feito com
            <Heart size={14} className="text-red-500 fill-red-500" />
            para cuidar da sua saúde.
          </p>
          <p className="text-xs text-gray-600 mt-3">
            Telemedicina regulamentada conforme Resolução CFM nº 2.314/2022
          </p>
        </div>
      </div>
    </footer>
  );
}
