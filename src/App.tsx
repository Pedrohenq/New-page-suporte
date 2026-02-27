import { useState, useEffect } from 'react';
import { 
  Search, 
  MessageCircle, 
  Calendar, 
  FileText, 
  CreditCard,
  ChevronDown,
  ChevronRight,
  Clock,
  Shield,
  Rocket,
  Video,
  User,
  Settings,
  Heart,
  HelpCircle,
  Send,
  ArrowLeft,
  Home,
  Sparkles,
  Zap,
  CheckCircle2,
  Mail,
  Menu,
  X,
  Stethoscope,
  ShoppingBag
} from 'lucide-react';
import { faqCategories, quickAnswers } from './data/faqData';

// Declare Zoho types
declare global {
  interface Window {
    $zoho?: {
      salesiq?: {
        ready?: () => void;
        floatwindow?: {
          visible: (state: string) => void;
        };
        floatbutton?: {
          visible: (state: string) => void;
        };
        chat?: {
          start: () => void;
        };
      };
    };
  }
}

// Icon mapping
const iconMap: { [key: string]: React.ReactNode } = {
  'rocket': <Rocket className="w-6 h-6" />,
  'video': <Video className="w-6 h-6" />,
  'calendar': <Calendar className="w-6 h-6" />,
  'file-text': <FileText className="w-6 h-6" />,
  'user': <User className="w-6 h-6" />,
  'settings': <Settings className="w-6 h-6" />,
  'credit-card': <CreditCard className="w-6 h-6" />,
  'heart': <Heart className="w-6 h-6" />,
};

// Color mapping
const colorMap: { [key: string]: string } = {
  'violet': 'from-violet-500 to-purple-600',
  'purple': 'from-purple-500 to-indigo-600',
  'blue': 'from-blue-500 to-cyan-600',
  'fuchsia': 'from-fuchsia-500 to-pink-600',
  'indigo': 'from-indigo-500 to-blue-600',
  'amber': 'from-amber-500 to-orange-600',
  'emerald': 'from-emerald-500 to-teal-600',
  'rose': 'from-rose-500 to-red-600',
};

const bgColorMap: { [key: string]: string } = {
  'violet': 'bg-violet-100 text-violet-600',
  'purple': 'bg-purple-100 text-purple-600',
  'blue': 'bg-blue-100 text-blue-600',
  'fuchsia': 'bg-fuchsia-100 text-fuchsia-600',
  'indigo': 'bg-indigo-100 text-indigo-600',
  'amber': 'bg-amber-100 text-amber-600',
  'emerald': 'bg-emerald-100 text-emerald-600',
  'rose': 'bg-rose-100 text-rose-600',
};

// Ticket form types
const ticketTypes = [
  { id: 'agendamento', title: 'Problema com Agendamento', icon: <Calendar className="w-6 h-6" />, color: 'from-blue-500 to-cyan-600', description: 'Dificuldades para agendar consultas' },
  { id: 'consulta', title: 'Problema com Consulta', icon: <Video className="w-6 h-6" />, color: 'from-purple-500 to-indigo-600', description: 'Problemas durante atendimento' },
  { id: 'receita', title: 'Receitas e Atestados', icon: <FileText className="w-6 h-6" />, color: 'from-fuchsia-500 to-pink-600', description: 'Documentos médicos digitais' },
  { id: 'tecnico', title: 'Problema Técnico', icon: <Settings className="w-6 h-6" />, color: 'from-amber-500 to-orange-600', description: 'App, login e conexão' },
  { id: 'pagamento', title: 'Problema com Pagamento', icon: <CreditCard className="w-6 h-6" />, color: 'from-emerald-500 to-teal-600', description: 'Cobranças e reembolsos' },
  { id: 'ativacao', title: 'Ativação de Conta/Código', icon: <Rocket className="w-6 h-6" />, color: 'from-violet-500 to-purple-600', description: 'Ativar código de empresa' },
  { id: 'consultas-compradas', title: 'Consultas Compradas', icon: <ShoppingBag className="w-6 h-6" />, color: 'from-rose-500 to-pink-600', description: 'Problemas com pacotes adquiridos' },
  { id: 'outros', title: 'Outros Assuntos', icon: <HelpCircle className="w-6 h-6" />, color: 'from-gray-500 to-slate-600', description: 'Dúvidas gerais e sugestões' },
];

const especialidadesAgendamento = [
  'Ginecologia',
  'Psicologia',
  'Nutrição',
  'Dermatologia',
  'Treinadores / Educação Física'
];

const especialidadesLivre = [
  'Clínica Geral Adulto',
  'Clínico Geral Infantil',
  'Medicina de Família',
  'Medicina Veterinária (Pet)',
  'Canal de Receitas'
];

const todasEspecialidades = [...especialidadesAgendamento, ...especialidadesLivre];

function App() {
  const [currentPage, setCurrentPage] = useState<'faq' | 'formularios' | 'formulario-detalhe' | 'vero'>('faq');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTicketType, setSelectedTicketType] = useState<string | null>(null);

  // Routing
  useEffect(() => {
    const handleRoute = () => {
      const path = window.location.pathname;
      if (path === '/formularios/vero') {
        setCurrentPage('vero');
      } else if (path === '/formularios') {
        setCurrentPage('formularios');
      } else {
        setCurrentPage('faq');
      }
    };

    handleRoute();
    window.addEventListener('popstate', handleRoute);
    return () => window.removeEventListener('popstate', handleRoute);
  }, []);

  const navigate = (page: 'faq' | 'formularios' | 'vero') => {
    if (page === 'faq') {
      window.history.pushState({}, '', '/');
    } else if (page === 'formularios') {
      window.history.pushState({}, '', '/formularios');
    } else if (page === 'vero') {
      window.history.pushState({}, '', '/formularios/vero');
    }
    setCurrentPage(page);
    setSelectedTicketType(null);
    window.scrollTo(0, 0);
  };

  const openZohoChat = () => {
    if (window.$zoho?.salesiq?.floatwindow) {
      window.$zoho.salesiq.floatwindow.visible('show');
    }
    if (window.$zoho?.salesiq?.chat) {
      window.$zoho.salesiq.chat.start();
    }
  };

  const toggleItem = (categoryId: string, index: number) => {
    const key = `${categoryId}-${index}`;
    setExpandedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => 
    selectedCategory ? category.id === selectedCategory : category.items.length > 0
  );

  const generateMailto = (type: string, formData: any) => {
    const subject = encodeURIComponent(`[Chamado] ${type}`);
    let body = '';
    
    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        body += `${key}: ${value}\n`;
      }
    });
    
    return `mailto:suporte@mediquo.com.br?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  // Breadcrumb Component
  const Breadcrumb = () => {
    if (currentPage === 'faq') return null;

    const getBreadcrumbs = () => {
      switch (currentPage) {
        case 'formularios':
          return [
            { label: 'Início', onClick: () => navigate('faq') },
            { label: 'Formulários', onClick: null }
          ];
        case 'vero':
          return [
            { label: 'Início', onClick: () => navigate('faq') },
            { label: 'Formulários', onClick: () => navigate('formularios') },
            { label: 'Consultas Compradas - Vero', onClick: null }
          ];
        case 'formulario-detalhe':
          const ticketType = ticketTypes.find(t => t.id === selectedTicketType);
          return [
            { label: 'Início', onClick: () => navigate('faq') },
            { label: 'Formulários', onClick: () => { setSelectedTicketType(null); setCurrentPage('formularios'); } },
            { label: ticketType?.title || 'Formulário', onClick: null }
          ];
        default:
          return [];
      }
    };

    const breadcrumbs = getBreadcrumbs();

    return (
      <div className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Home className="w-4 h-4 text-purple-500" />
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
                {crumb.onClick ? (
                  <button
                    onClick={crumb.onClick}
                    className="text-purple-600 hover:text-purple-800 hover:underline transition-colors"
                  >
                    {crumb.label}
                  </button>
                ) : (
                  <span className="text-gray-600 font-medium">{crumb.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Header Component
  const Header = () => (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-purple-100">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-gray-800 text-lg">Central de Suporte</h1>
              <p className="text-xs text-gray-500 hidden sm:block">Estamos aqui para ajudar</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <button
              onClick={() => navigate('faq')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentPage === 'faq'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => navigate('formularios')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentPage === 'formularios' || currentPage === 'formulario-detalhe' || currentPage === 'vero'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Formulários
            </button>
            <button
              onClick={openZohoChat}
              className="ml-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Chat
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => { navigate('faq'); setMobileMenuOpen(false); }}
                className={`px-4 py-3 rounded-lg font-medium text-left ${
                  currentPage === 'faq' ? 'bg-purple-100 text-purple-700' : 'text-gray-600'
                }`}
              >
                FAQ
              </button>
              <button
                onClick={() => { navigate('formularios'); setMobileMenuOpen(false); }}
                className={`px-4 py-3 rounded-lg font-medium text-left ${
                  currentPage === 'formularios' || currentPage === 'formulario-detalhe' || currentPage === 'vero'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600'
                }`}
              >
                Formulários
              </button>
              <button
                onClick={() => { openZohoChat(); setMobileMenuOpen(false); }}
                className="px-4 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg font-medium flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Fale com o Suporte
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );

  // Hero Section
  const Hero = () => (
    <section className="bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700 text-white py-12 md:py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Central de Suporte e Ajuda</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Olá! Como podemos<br />
            <span className="text-purple-200">te ajudar hoje?</span>
          </h1>
          <p className="text-purple-100 text-lg max-w-2xl mx-auto">
            Encontre respostas rápidas, tire dúvidas sobre consultas, receitas, planos e muito mais. Estamos aqui para você!
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Digite sua dúvida aqui..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-32 py-4 rounded-2xl text-gray-800 placeholder-gray-400 shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300 text-lg"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg transition-all">
              Buscar
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['Agendar consulta', 'Receita digital', 'Problemas de login', 'Formas de pagamento'].map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm transition-all"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-3xl font-bold">24h</div>
            <div className="text-purple-200 text-sm">Consultas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">08-18h</div>
            <div className="text-purple-200 text-sm">Suporte</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">100%</div>
            <div className="text-purple-200 text-sm">Seguro</div>
          </div>
        </div>
      </div>
    </section>
  );

  // Support CTA
  const SupportCTA = () => (
    <section className="max-w-6xl mx-auto px-4 -mt-8 relative z-20 mb-12">
      <div className="bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-semibold">Online agora</span>
              </div>
              <p className="text-gray-600 text-sm">Chat em tempo real · Seg a Sex, 08h às 18h</p>
            </div>
          </div>
          <button
            onClick={openZohoChat}
            className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Fale com o Suporte
          </button>
        </div>
      </div>
    </section>
  );

  // Quick Answers Section
  const QuickAnswers = () => (
    <section className="max-w-6xl mx-auto px-4 mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Zap className="w-6 h-6 text-purple-600" />
        Respostas Rápidas
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {quickAnswers.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all border border-gray-100 cursor-pointer group"
          >
            <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
              {item.question}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );

  // Categories Section
  const Categories = () => (
    <section className="max-w-6xl mx-auto px-4 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Categorias</h2>
        <p className="text-gray-500">Navegue por Tema</p>
        <p className="text-gray-400 text-sm mt-1">Escolha uma categoria para encontrar as respostas que você precisa de forma rápida e organizada</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {faqCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
            className={`p-5 rounded-2xl text-left transition-all hover:scale-105 ${
              selectedCategory === category.id
                ? 'bg-gradient-to-br ' + colorMap[category.color] + ' text-white shadow-lg'
                : 'bg-white hover:shadow-lg border border-gray-100'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
              selectedCategory === category.id
                ? 'bg-white/20'
                : bgColorMap[category.color]
            }`}>
              {iconMap[category.icon]}
            </div>
            <h3 className={`font-semibold mb-1 ${selectedCategory === category.id ? 'text-white' : 'text-gray-800'}`}>
              {category.title}
            </h3>
            <p className={`text-xs ${selectedCategory === category.id ? 'text-white/80' : 'text-gray-500'}`}>
              {category.description}
            </p>
            <p className={`text-xs mt-2 font-medium ${selectedCategory === category.id ? 'text-white/90' : 'text-purple-600'}`}>
              {category.items.length} artigos
            </p>
          </button>
        ))}
      </div>
    </section>
  );

  // FAQ Section
  const FAQSection = () => (
    <section className="max-w-6xl mx-auto px-4 mb-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm mb-4">
          <HelpCircle className="w-4 h-4" />
          FAQ
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Perguntas Frequentes</h2>
        <p className="text-gray-500">Encontre rapidamente as respostas para as dúvidas mais comuns dos nossos usuários</p>
      </div>

      {filteredCategories.map((category) => (
        <div key={category.id} className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${colorMap[category.color]} text-white`}>
              {iconMap[category.icon]}
            </div>
            <div>
              <h3 className="font-bold text-gray-800">{category.title}</h3>
              <p className="text-sm text-gray-500">{category.items.length} perguntas</p>
            </div>
          </div>

          <div className="space-y-3">
            {category.items.map((item, index) => {
              const key = `${category.id}-${index}`;
              const isExpanded = expandedItems[key];

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all"
                >
                  <button
                    onClick={() => toggleItem(category.id, index)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-medium text-gray-800 pr-4">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isExpanded && (
                    <div className="px-5 pb-4 pt-0">
                      <div className="text-gray-600 leading-relaxed whitespace-pre-line border-t border-gray-100 pt-4">
                        {item.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Nenhum resultado encontrado</h3>
          <p className="text-gray-500">Tente buscar por outros termos ou navegue pelas categorias</p>
        </div>
      )}
    </section>
  );

  // CTA to Forms
  const CTAForms = () => (
    <section className="max-w-6xl mx-auto px-4 mb-12">
      <div className="bg-gradient-to-br from-purple-600 to-violet-700 rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Não encontrou o que procurava?</h2>
        <p className="text-purple-100 mb-6">Abra um chamado e nossa equipe entrará em contato</p>
        <button
          onClick={() => navigate('formularios')}
          className="bg-white text-purple-700 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all inline-flex items-center gap-2"
        >
          <Send className="w-5 h-5" />
          Abrir Chamado
        </button>
      </div>
    </section>
  );

  // Ticket Form Component
  const TicketForm = ({ type }: { type: string }) => {
    const [formData, setFormData] = useState<any>({});
    const ticketType = ticketTypes.find(t => t.id === type);

    const handleSubmit = () => {
      const mailto = generateMailto(ticketType?.title || 'Chamado', formData);
      window.location.href = mailto;
    };

    const updateField = (field: string, value: string) => {
      setFormData((prev: any) => ({ ...prev, [field]: value }));
    };

    const renderFields = () => {
      switch (type) {
        case 'agendamento':
          return (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Especialidade</label>
                <select
                  onChange={(e) => updateField('Especialidade', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Selecione a especialidade</option>
                  {todasEspecialidades.map(esp => (
                    <option key={esp} value={esp}>{esp}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Problema</label>
                <select
                  onChange={(e) => updateField('Tipo de Problema', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Selecione o problema</option>
                  <option value="Não consigo agendar">Não consigo agendar</option>
                  <option value="Não aparecem horários">Não aparecem horários disponíveis</option>
                  <option value="Erro ao confirmar">Erro ao confirmar agendamento</option>
                  <option value="Cancelamento não funcionou">Cancelamento não funcionou</option>
                  <option value="Reagendamento">Preciso reagendar</option>
                  <option value="Outro">Outro problema</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Data do agendamento</label>
                <input
                  type="date"
                  onChange={(e) => updateField('Data', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </>
          );

        case 'consulta':
          return (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Consulta</label>
                <select
                  onChange={(e) => updateField('Tipo de Consulta', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Selecione o tipo</option>
                  <option value="Chat">Chat</option>
                  <option value="Chamada de voz">Chamada de voz</option>
                  <option value="Videochamada">Videochamada</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Especialidade</label>
                <select
                  onChange={(e) => updateField('Especialidade', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Selecione a especialidade</option>
                  {todasEspecialidades.map(esp => (
                    <option key={esp} value={esp}>{esp}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Problema</label>
                <select
                  onChange={(e) => updateField('Problema', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Selecione o problema</option>
                  <option value="Consulta caiu/desconectou">Consulta caiu/desconectou</option>
                  <option value="Médico não atendeu">Médico não atendeu</option>
                  <option value="Problema com áudio">Problema com áudio</option>
                  <option value="Problema com vídeo">Problema com vídeo</option>
                  <option value="Fui cobrado indevidamente">Fui cobrado indevidamente</option>
                  <option value="Outro">Outro problema</option>
                </select>
              </div>
            </>
          );

        case 'receita':
          return (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Documento</label>
                <select
                  onChange={(e) => updateField('Tipo de Documento', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Selecione o tipo</option>
                  <option value="Receita médica">Receita médica</option>
                  <option value="Atestado médico">Atestado médico</option>
                  <option value="Solicitação de exame">Solicitação de exame</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Problema</label>
                <select
                  onChange={(e) => updateField('Problema', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Selecione o problema</option>
                  <option value="Não recebi o documento">Não recebi o documento</option>
                  <option value="Documento com erro">Documento com erro</option>
                  <option value="Farmácia não aceitou">Farmácia não aceitou</option>
                  <option value="Preciso de 2ª via">Preciso de 2ª via</option>
                  <option value="Outro">Outro problema</option>
                </select>
              </div>
            </>
          );

        case 'tecnico':
          return (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Dispositivo</label>
                <select
                  onChange={(e) => updateField('Dispositivo', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Selecione o dispositivo</option>
                  <option value="Android">Celular Android</option>
                  <option value="iPhone">iPhone</option>
                  <option value="Computador">Computador</option>
                  <option value="Tablet">Tablet</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Erro</label>
                <select
                  onChange={(e) => updateField('Tipo de Erro', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Selecione o erro</option>
                  <option value="App não abre">App não abre</option>
                  <option value="Erro de login">Erro de login</option>
                  <option value="App travando">App travando</option>
                  <option value="Notificações não chegam">Notificações não chegam</option>
                  <option value="Erro ao carregar">Erro ao carregar</option>
                  <option value="Outro">Outro erro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Modelo do Celular</label>
                <input
                  type="text"
                  placeholder="Ex: Samsung Galaxy S21, iPhone 13"
                  onChange={(e) => updateField('Modelo do Celular', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </>
          );

        case 'pagamento':
          return (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Problema</label>
                <select
                  onChange={(e) => updateField('Tipo de Problema', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Selecione o problema</option>
                  <option value="Cobrança indevida">Cobrança indevida</option>
                  <option value="Pagamento não confirmado">Pagamento não confirmado</option>
                  <option value="Solicitar reembolso">Solicitar reembolso</option>
                  <option value="Erro no cartão">Erro no cartão</option>
                  <option value="Outro">Outro problema</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Valor</label>
                <input
                  type="text"
                  placeholder="R$ 0,00"
                  onChange={(e) => updateField('Valor', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Data da Cobrança</label>
                <input
                  type="date"
                  onChange={(e) => updateField('Data da Cobrança', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </>
          );

        case 'ativacao':
          return (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome da Empresa/Convênio</label>
                <input
                  type="text"
                  placeholder="Nome da sua empresa ou convênio"
                  onChange={(e) => updateField('Empresa/Convênio', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Código de Ativação</label>
                <input
                  type="text"
                  placeholder="Digite o código recebido"
                  onChange={(e) => updateField('Código', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Problema</label>
                <select
                  onChange={(e) => updateField('Tipo de Problema', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Selecione o problema</option>
                  <option value="Código não funciona">Código não funciona</option>
                  <option value="Código expirado">Código expirado</option>
                  <option value="Não tenho código">Não tenho código</option>
                  <option value="Empresa não encontrada">Empresa não encontrada</option>
                  <option value="Outro">Outro problema</option>
                </select>
              </div>
            </>
          );

        case 'consultas-compradas':
          return (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Parceiro</label>
                <select
                  onChange={(e) => updateField('Parceiro', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Selecione o parceiro</option>
                  <option value="Araujo">Araujo</option>
                  <option value="Emagreçer">Emagreçer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantidade de Consultas</label>
                <input
                  type="number"
                  placeholder="Ex: 5"
                  onChange={(e) => updateField('Quantidade de Consultas', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Data da Compra</label>
                <input
                  type="date"
                  onChange={(e) => updateField('Data da Compra', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Valor Pago</label>
                <input
                  type="text"
                  placeholder="R$ 0,00"
                  onChange={(e) => updateField('Valor Pago', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </>
          );

        case 'outros':
          return (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                <select
                  onChange={(e) => updateField('Assunto', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Selecione o assunto</option>
                  <option value="Dúvida geral">Dúvida geral</option>
                  <option value="Sugestão">Sugestão</option>
                  <option value="Elogio">Elogio</option>
                  <option value="Reclamação">Reclamação</option>
                  <option value="Parceria">Parceria comercial</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </>
          );

        default:
          return null;
      }
    };

    return (
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => { setSelectedTicketType(null); setCurrentPage('formularios'); }}
          className="flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para Formulários
        </button>

        <div className={`bg-gradient-to-br ${ticketType?.color} p-6 rounded-t-2xl text-white`}>
          <div className="flex items-center gap-3">
            {ticketType?.icon}
            <div>
              <h2 className="text-2xl font-bold">{ticketType?.title}</h2>
              <p className="text-white/80">{ticketType?.description}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-b-2xl shadow-xl p-6 border border-t-0 border-gray-100">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
              <input
                type="text"
                placeholder="Seu nome completo"
                onChange={(e) => updateField('Nome', e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
              <input
                type="email"
                placeholder="seu@email.com"
                onChange={(e) => updateField('E-mail', e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Telefone / WhatsApp</label>
              <input
                type="tel"
                placeholder="(00) 00000-0000"
                onChange={(e) => updateField('Telefone', e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">CPF do Titular</label>
              <input
                type="text"
                placeholder="000.000.000-00"
                onChange={(e) => updateField('CPF', e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {renderFields()}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Descrição Detalhada *</label>
              <textarea
                placeholder="Descreva seu problema ou dúvida com o máximo de detalhes possível..."
                rows={4}
                onChange={(e) => updateField('Descrição', e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                required
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Enviar Chamado
            </button>

            <p className="text-xs text-gray-500 text-center">
              Ao enviar, seu aplicativo de e-mail será aberto com as informações preenchidas.
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Vero Form Page
  const VeroFormPage = () => {
    const [formData, setFormData] = useState<any>({});

    const handleSubmit = () => {
      const mailto = generateMailto('Consultas Compradas - Vero', formData);
      window.location.href = mailto;
    };

    const updateField = (field: string, value: string) => {
      setFormData((prev: any) => ({ ...prev, [field]: value }));
    };

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-t-2xl text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
              PARCEIRO VERO
            </span>
          </div>
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-8 h-8" />
            <div>
              <h2 className="text-2xl font-bold">Consultas Compradas - Vero</h2>
              <p className="text-white/80">Suporte para consultas adquiridas via Vero</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-b-2xl shadow-xl p-6 border border-t-0 border-gray-100">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
              <input
                type="text"
                placeholder="Seu nome completo"
                onChange={(e) => updateField('Nome', e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
              <input
                type="email"
                placeholder="seu@email.com"
                onChange={(e) => updateField('E-mail', e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Telefone / WhatsApp</label>
              <input
                type="tel"
                placeholder="(00) 00000-0000"
                onChange={(e) => updateField('Telefone', e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">CPF do Titular *</label>
              <input
                type="text"
                placeholder="000.000.000-00"
                onChange={(e) => updateField('CPF', e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantidade de Consultas Compradas</label>
              <input
                type="number"
                placeholder="Ex: 5"
                onChange={(e) => updateField('Quantidade de Consultas', e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Data da Compra</label>
              <input
                type="date"
                onChange={(e) => updateField('Data da Compra', e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Valor Pago</label>
              <input
                type="text"
                placeholder="R$ 0,00"
                onChange={(e) => updateField('Valor Pago', e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Descrição Detalhada *</label>
              <textarea
                placeholder="Descreva seu problema ou dúvida com o máximo de detalhes possível..."
                rows={4}
                onChange={(e) => updateField('Descrição', e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                required
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Enviar Chamado
            </button>

            <p className="text-xs text-gray-500 text-center">
              Ao enviar, seu aplicativo de e-mail será aberto com as informações preenchidas.
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Ticket Selection Page
  const TicketSelection = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm mb-4">
          <Send className="w-4 h-4" />
          Formulários
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Abrir Chamado</h1>
        <p className="text-gray-500">Selecione o tipo de problema para abrirmos um chamado</p>
      </div>

      {/* Vero Special Card */}
      <div className="mb-8">
        <button
          onClick={() => navigate('vero')}
          className="w-full bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-2xl text-white text-left hover:shadow-xl transition-all group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs font-medium">
                    PARCEIRO VERO
                  </span>
                </div>
                <h3 className="text-xl font-bold">Consultas Compradas - Vero</h3>
                <p className="text-white/80 text-sm">Suporte para consultas adquiridas via Vero</p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>

      {/* Other Ticket Types */}
      <div className="grid md:grid-cols-2 gap-4">
        {ticketTypes.map((ticket) => (
          <button
            key={ticket.id}
            onClick={() => { setSelectedTicketType(ticket.id); setCurrentPage('formulario-detalhe'); }}
            className="bg-white p-5 rounded-xl border border-gray-100 hover:shadow-lg transition-all text-left group"
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${ticket.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                {ticket.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                  {ticket.title}
                </h3>
                <p className="text-gray-500 text-sm">{ticket.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
            </div>
          </button>
        ))}
      </div>

      {/* CTA to FAQ */}
      <div className="mt-12 text-center">
        <p className="text-gray-500 mb-3">Prefere buscar sozinho?</p>
        <button
          onClick={() => navigate('faq')}
          className="text-purple-600 font-semibold hover:text-purple-800 inline-flex items-center gap-2"
        >
          <Search className="w-5 h-5" />
          Ver Perguntas Frequentes
        </button>
      </div>
    </div>
  );

  // Footer
  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-lg">Central de Suporte</span>
            </div>
            <p className="text-gray-400 text-sm">
              Estamos aqui para ajudar você em sua jornada de saúde digital.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => navigate('faq')} className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </button>
              </li>
              <li>
                <button onClick={() => navigate('formularios')} className="hover:text-white transition-colors">
                  Abrir Chamado
                </button>
              </li>
              <li>
                <button onClick={openZohoChat} className="hover:text-white transition-colors">
                  Chat ao Vivo
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>suporte@mediquo.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Seg a Sex, 08h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Telemedicina. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <Shield className="w-4 h-4" />
              LGPD Compliant
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <CheckCircle2 className="w-4 h-4" />
              CFM Regulamentado
            </span>
          </div>
        </div>
      </div>
    </footer>
  );

  // Main Render
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50/30">
      <Header />
      <Breadcrumb />

      {currentPage === 'faq' && (
        <>
          <Hero />
          <SupportCTA />
          <QuickAnswers />
          <Categories />
          <FAQSection />
          <CTAForms />
        </>
      )}

      {currentPage === 'formularios' && (
        <main className="py-12 px-4">
          <TicketSelection />
        </main>
      )}

      {currentPage === 'formulario-detalhe' && selectedTicketType && (
        <main className="py-12 px-4">
          <TicketForm type={selectedTicketType} />
        </main>
      )}

      {currentPage === 'vero' && (
        <main className="py-12 px-4">
          <VeroFormPage />
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;
