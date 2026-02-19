import { MessageCircle, Mail, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export function SupportInfo() {
  const openChat = () => {
    // Trigger Zoho SalesIQ chat
    if (window.$zoho && window.$zoho.salesiq) {
      window.$zoho.salesiq.floatwindow?.visible("show");
    }
  };

  const supportFeatures = [
    "Atendimento humanizado e personalizado",
    "Suporte técnico especializado",
    "Resolução rápida de problemas",
    "Acompanhamento do seu caso",
  ];

  return (
    <section id="suporte" className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-violet-900 to-fuchsia-900">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-6">
            <MessageCircle size={18} className="text-purple-300" />
            <span className="text-sm font-semibold text-white/90">
              Suporte ao Cliente
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
            Ainda com dúvidas?
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300">
              Estamos aqui para ajudar!
            </span>
          </h2>
          <p className="text-lg text-purple-100/70 max-w-2xl mx-auto">
            Nossa equipe de suporte está pronta para atender você. 
            Escolha a forma mais conveniente de entrar em contato.
          </p>
        </div>

        {/* Main Chat Card */}
        <div className="max-w-2xl mx-auto mb-10">
          <button
            onClick={openChat}
            className="group w-full relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 text-left shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 active:scale-[0.98] overflow-hidden"
          >
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-fuchsia-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-purple-200 to-fuchsia-200 rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-violet-200 to-purple-200 rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>

            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Icon */}
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center shadow-xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110">
                <MessageCircle size={36} className="text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-green-500 rounded-full uppercase">
                    Online Agora
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                  Fale com o Suporte
                </h3>
                <p className="text-gray-600 text-base mb-4 leading-relaxed">
                  Inicie uma conversa em tempo real com nossa equipe. 
                  Atendimento rápido e humanizado!
                </p>
                <div className="flex items-center gap-2 text-purple-600 font-bold">
                  <span>Iniciar conversa</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Secondary Contact Option */}
        <div className="flex justify-center max-w-md mx-auto mb-12">
          {/* Email */}
          <a
            href="mailto:suporte@telemedicina.com.br"
            className="group flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-left hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 w-full justify-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-600/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={26} className="text-blue-300" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">E-mail</h4>
              <p className="text-sm text-purple-200/70">Respondemos em até 24h</p>
            </div>
          </a>
        </div>

        {/* Support Hours & Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Hours */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/30 flex items-center justify-center">
                <Clock size={20} className="text-purple-300" />
              </div>
              <h4 className="text-lg font-bold text-white">Horário de Atendimento</h4>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-purple-100/70">Atendimento médico</span>
                <span className="font-bold text-emerald-400">24 horas</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-purple-100/70">Suporte técnico</span>
                <span className="font-bold text-white">08:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-purple-100/70">Dias de atendimento</span>
                <span className="font-bold text-white">Segunda a Sexta</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-fuchsia-500/30 flex items-center justify-center">
                <CheckCircle2 size={20} className="text-fuchsia-300" />
              </div>
              <h4 className="text-lg font-bold text-white">Nosso Compromisso</h4>
            </div>
            <div className="space-y-3">
              {supportFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} className="text-white" />
                  </div>
                  <span className="text-purple-100/90 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
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
