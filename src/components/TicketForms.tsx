import { useState } from "react";
import {
  CalendarX,
  Video,
  FileText,
  Smartphone,
  CreditCard,
  KeyRound,
  HelpCircle,
  ArrowLeft,
  Send,
  AlertCircle,
  CheckCircle2,
  ClipboardList,
  ChevronRight,
  Mail,
} from "lucide-react";

// ==================== TYPES ====================

interface TicketCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  bgLight: string;
  fields: FormField[];
  subjectPrefix: string;
}

interface FormField {
  id: string;
  label: string;
  type: "text" | "email" | "textarea" | "select" | "tel" | "date";
  placeholder: string;
  required: boolean;
  options?: string[];
  helpText?: string;
}

// ==================== FORM DATA ====================

const commonFields: FormField[] = [
  {
    id: "nome",
    label: "Nome completo",
    type: "text",
    placeholder: "Seu nome completo",
    required: true,
  },
  {
    id: "email",
    label: "E-mail",
    type: "email",
    placeholder: "seu@email.com",
    required: true,
    helpText: "O chamado será enviado a partir deste e-mail",
  },
  {
    id: "telefone",
    label: "Telefone / WhatsApp",
    type: "tel",
    placeholder: "(00) 00000-0000",
    required: false,
  },
  {
    id: "cpf",
    label: "CPF do titular",
    type: "text",
    placeholder: "000.000.000-00",
    required: true,
    helpText: "Necessário para localizar sua conta",
  },
];

const ticketCategories: TicketCategory[] = [
  {
    id: "agendamento",
    title: "Problema com Agendamento",
    description: "Dificuldade para agendar, reagendar ou cancelar consultas",
    icon: <CalendarX size={28} />,
    color: "violet",
    gradient: "from-violet-500 to-violet-600",
    bgLight: "bg-violet-50 border-violet-100 hover:border-violet-300",
    subjectPrefix: "[AGENDAMENTO]",
    fields: [
      ...commonFields,
      {
        id: "especialidade",
        label: "Especialidade da consulta",
        type: "select",
        placeholder: "Selecione a especialidade",
        required: true,
        options: [
          "Clínica Geral Adulto",
          "Clínico Geral Infantil",
          "Medicina de Família",
          "Medicina Veterinária (Pet)",
          "Canal de Receitas",
          "Ginecologia",
          "Psicologia",
          "Nutrição",
          "Dermatologia",
          "Treinadores / Educação Física",
        ],
      },
      {
        id: "tipo_problema",
        label: "Tipo de problema",
        type: "select",
        placeholder: "Selecione o tipo",
        required: true,
        options: [
          "Não consigo agendar consulta",
          "Não aparece opção de agendamento",
          "Horários indisponíveis",
          "Erro ao confirmar agendamento",
          "Preciso reagendar consulta",
          "Preciso cancelar consulta",
          "Não recebi confirmação do agendamento",
          "Não recebi lembrete da consulta",
          "Outro problema com agendamento",
        ],
      },
      {
        id: "data_consulta",
        label: "Data da consulta (se aplicável)",
        type: "date",
        placeholder: "",
        required: false,
      },
      {
        id: "descricao",
        label: "Descreva o problema detalhadamente",
        type: "textarea",
        placeholder:
          "Explique com detalhes o que aconteceu. Inclua informações como: o que tentou fazer, mensagens de erro que apareceram, quando o problema começou, etc.",
        required: true,
      },
    ],
  },
  {
    id: "consulta",
    title: "Problema com Consulta",
    description: "Problemas durante ou após uma consulta médica online",
    icon: <Video size={28} />,
    color: "purple",
    gradient: "from-purple-500 to-purple-600",
    bgLight: "bg-purple-50 border-purple-100 hover:border-purple-300",
    subjectPrefix: "[CONSULTA]",
    fields: [
      ...commonFields,
      {
        id: "tipo_consulta",
        label: "Tipo de consulta",
        type: "select",
        placeholder: "Selecione o tipo",
        required: true,
        options: ["Chat", "Chamada de voz", "Videochamada"],
      },
      {
        id: "especialidade",
        label: "Especialidade",
        type: "select",
        placeholder: "Selecione a especialidade",
        required: true,
        options: [
          "Clínica Geral Adulto",
          "Clínico Geral Infantil",
          "Medicina de Família",
          "Medicina Veterinária (Pet)",
          "Canal de Receitas",
          "Ginecologia",
          "Psicologia",
          "Nutrição",
          "Dermatologia",
          "Treinadores / Educação Física",
        ],
      },
      {
        id: "tipo_problema",
        label: "Tipo de problema",
        type: "select",
        placeholder: "Selecione o tipo",
        required: true,
        options: [
          "Consulta encerrada antes do tempo",
          "Médico não compareceu",
          "Problemas de áudio/vídeo",
          "Queda de conexão durante consulta",
          "Insatisfação com atendimento",
          "Médico não emitiu receita/atestado",
          "Erro ao iniciar consulta",
          "Tempo de espera muito longo",
          "Outro problema",
        ],
      },
      {
        id: "data_consulta",
        label: "Data da consulta",
        type: "date",
        placeholder: "",
        required: true,
      },
      {
        id: "descricao",
        label: "Descreva o problema detalhadamente",
        type: "textarea",
        placeholder:
          "Explique com detalhes o que aconteceu durante a consulta. Inclua o nome do profissional (se souber), horário aproximado e qualquer informação relevante.",
        required: true,
      },
    ],
  },
  {
    id: "receitas",
    title: "Receitas e Atestados",
    description: "Segunda via, problemas com receitas digitais ou atestados",
    icon: <FileText size={28} />,
    color: "fuchsia",
    gradient: "from-fuchsia-500 to-fuchsia-600",
    bgLight: "bg-fuchsia-50 border-fuchsia-100 hover:border-fuchsia-300",
    subjectPrefix: "[RECEITA/ATESTADO]",
    fields: [
      ...commonFields,
      {
        id: "tipo_documento",
        label: "Tipo de documento",
        type: "select",
        placeholder: "Selecione o tipo",
        required: true,
        options: [
          "Receita médica",
          "Atestado médico",
          "Solicitação de exames",
          "Relatório médico",
          "Outro documento",
        ],
      },
      {
        id: "tipo_problema",
        label: "O que você precisa?",
        type: "select",
        placeholder: "Selecione",
        required: true,
        options: [
          "Segunda via de receita",
          "Segunda via de atestado",
          "Receita não aparece no app",
          "Atestado não aparece no app",
          "Erro no documento (dados incorretos)",
          "Farmácia não aceitou a receita digital",
          "Empresa não aceitou o atestado",
          "Não recebi o documento por e-mail",
          "Preciso de correção no documento",
          "Outro problema",
        ],
      },
      {
        id: "data_consulta",
        label: "Data da consulta que gerou o documento",
        type: "date",
        placeholder: "",
        required: false,
      },
      {
        id: "descricao",
        label: "Descreva sua solicitação",
        type: "textarea",
        placeholder:
          "Informe detalhes sobre o documento que precisa. Se for segunda via, indique a data da consulta original. Se for erro, descreva o que está incorreto.",
        required: true,
      },
    ],
  },
  {
    id: "tecnico",
    title: "Problema Técnico",
    description: "Erros no app, dificuldade de acesso ou bugs",
    icon: <Smartphone size={28} />,
    color: "amber",
    gradient: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50 border-amber-100 hover:border-amber-300",
    subjectPrefix: "[PROBLEMA TÉCNICO]",
    fields: [
      ...commonFields,
      {
        id: "dispositivo",
        label: "Dispositivo utilizado",
        type: "select",
        placeholder: "Selecione o dispositivo",
        required: true,
        options: [
          "Android (celular)",
          "iPhone / iOS",
          "Tablet Android",
          "iPad",
          "Computador (navegador)",
          "Outro",
        ],
      },
      {
        id: "tipo_problema",
        label: "Tipo de problema técnico",
        type: "select",
        placeholder: "Selecione o tipo",
        required: true,
        options: [
          "App não abre / trava",
          "Erro ao fazer login",
          "Tela branca / em branco",
          "Erro ao carregar dados",
          "Problema com áudio na consulta",
          "Problema com vídeo na consulta",
          "Problema com câmera",
          "App muito lento",
          "Notificações não chegam",
          "Não consigo atualizar o app",
          "Erro ao enviar documentos/fotos",
          "Mensagem de erro na tela",
          "Outro erro/bug",
        ],
      },
      {
        id: "modelo_celular",
        label: "Modelo do celular / navegador",
        type: "text",
        placeholder: "Ex: Samsung Galaxy S23, iPhone 14, Chrome...",
        required: false,
      },
      {
        id: "descricao",
        label: "Descreva o problema detalhadamente",
        type: "textarea",
        placeholder:
          "Descreva o erro com o máximo de detalhes: o que fez antes do erro, mensagens que apareceram, se o problema é constante ou intermitente. Se possível, tire um print da tela e nos envie depois pelo chat.",
        required: true,
      },
    ],
  },
  {
    id: "pagamento",
    title: "Problema com Pagamento",
    description: "Cobranças, reembolsos, planos ou faturas",
    icon: <CreditCard size={28} />,
    color: "emerald",
    gradient: "from-emerald-500 to-emerald-600",
    bgLight: "bg-emerald-50 border-emerald-100 hover:border-emerald-300",
    subjectPrefix: "[PAGAMENTO]",
    fields: [
      ...commonFields,
      {
        id: "tipo_problema",
        label: "Tipo de problema",
        type: "select",
        placeholder: "Selecione o tipo",
        required: true,
        options: [
          "Cobrança indevida",
          "Cobrança duplicada",
          "Solicitar reembolso",
          "Pagamento não confirmado",
          "Erro ao processar pagamento",
          "Não consigo alterar forma de pagamento",
          "Problemas com boleto",
          "Problemas com PIX",
          "Problemas com cartão de crédito",
          "Dúvida sobre cobrança na fatura",
          "Solicitar nota fiscal / recibo",
          "Outro problema financeiro",
        ],
      },
      {
        id: "valor",
        label: "Valor da cobrança (se aplicável)",
        type: "text",
        placeholder: "R$ 0,00",
        required: false,
      },
      {
        id: "data_cobranca",
        label: "Data da cobrança (se aplicável)",
        type: "date",
        placeholder: "",
        required: false,
      },
      {
        id: "descricao",
        label: "Descreva o problema detalhadamente",
        type: "textarea",
        placeholder:
          "Informe detalhes sobre a cobrança ou pagamento. Inclua: valor cobrado, data, últimos 4 dígitos do cartão (se aplicável), e o que você esperava que acontecesse.",
        required: true,
      },
    ],
  },
  {
    id: "ativacao",
    title: "Ativação de Conta / Código",
    description: "Problemas para ativar conta ou inserir código da empresa",
    icon: <KeyRound size={28} />,
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-50 border-blue-100 hover:border-blue-300",
    subjectPrefix: "[ATIVAÇÃO]",
    fields: [
      ...commonFields,
      {
        id: "tipo_problema",
        label: "Tipo de problema",
        type: "select",
        placeholder: "Selecione o tipo",
        required: true,
        options: [
          "Código de ativação não funciona",
          "Código expirado",
          "Não sei onde inserir o código",
          "Conta não ativou após inserir código",
          "Agendamento não apareceu após ativação",
          "Especialidades não liberaram após ativação",
          "Não recebi meu código de ativação",
          "Preciso de um novo código",
          "Erro ao inserir código",
          "Outro problema de ativação",
        ],
      },
      {
        id: "empresa",
        label: "Nome da empresa / convênio",
        type: "text",
        placeholder: "Nome da empresa que forneceu o código",
        required: false,
      },
      {
        id: "codigo",
        label: "Código de ativação (se tiver)",
        type: "text",
        placeholder: "Ex: ABC123",
        required: false,
        helpText: "Informe o código que recebeu (não se preocupe, é seguro)",
      },
      {
        id: "descricao",
        label: "Descreva o problema detalhadamente",
        type: "textarea",
        placeholder:
          "Informe o que aconteceu ao tentar ativar. Inclua: qual mensagem de erro apareceu, quando recebeu o código, se já tentou antes, etc.",
        required: true,
      },
    ],
  },
  {
    id: "consultas-compradas",
    title: "Consultas Compradas",
    description: "Problemas com consultas adquiridas, créditos ou pacotes",
    icon: <CreditCard size={28} />,
    color: "rose",
    gradient: "from-rose-500 to-pink-600",
    bgLight: "bg-rose-50 border-rose-100 hover:border-rose-300",
    subjectPrefix: "[CONSULTAS COMPRADAS]",
    fields: [
      ...commonFields,
      {
        id: "parceiro",
        label: "Parceiro",
        type: "select",
        placeholder: "Selecione o parceiro",
        required: true,
        options: [
          "Araujo",
          "Emagreçer",
        ],
      },
      {
        id: "quantidade_consultas",
        label: "Quantidade de consultas compradas",
        type: "text",
        placeholder: "Ex: 5 consultas",
        required: false,
      },
      {
        id: "data_compra",
        label: "Data da compra (aproximada)",
        type: "date",
        placeholder: "",
        required: false,
      },
      {
        id: "valor_pago",
        label: "Valor pago (se lembrar)",
        type: "text",
        placeholder: "R$ 0,00",
        required: false,
      },
      {
        id: "descricao",
        label: "Descreva o problema detalhadamente",
        type: "textarea",
        placeholder:
          "Informe detalhes sobre o problema com suas consultas compradas. Inclua: quantas consultas comprou, quantas usou, quantas deveriam estar disponíveis, etc.",
        required: true,
      },
    ],
  },
  {
    id: "outros",
    title: "Outros Assuntos",
    description: "Dúvidas gerais, sugestões, elogios ou reclamações",
    icon: <HelpCircle size={28} />,
    color: "indigo",
    gradient: "from-indigo-500 to-indigo-600",
    bgLight: "bg-indigo-50 border-indigo-100 hover:border-indigo-300",
    subjectPrefix: "[OUTROS]",
    fields: [
      ...commonFields,
      {
        id: "tipo_assunto",
        label: "Tipo de assunto",
        type: "select",
        placeholder: "Selecione",
        required: true,
        options: [
          "Dúvida geral",
          "Sugestão de melhoria",
          "Elogio",
          "Reclamação",
          "Parceria / comercial",
          "Solicitação de dados (LGPD)",
          "Outro assunto",
        ],
      },
      {
        id: "descricao",
        label: "Descreva seu assunto detalhadamente",
        type: "textarea",
        placeholder:
          "Escreva aqui sua dúvida, sugestão, elogio ou reclamação. Quanto mais detalhes, melhor poderemos ajudar!",
        required: true,
      },
    ],
  },
];

// ==================== COMPONENTS ====================

function CategorySelector({
  onSelect,
}: {
  onSelect: (cat: TicketCategory) => void;
}) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
          <ClipboardList size={16} className="text-purple-600" />
          <span className="text-sm font-semibold text-purple-700 uppercase tracking-wider">
            Abertura de Chamado
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Abrir um Chamado
        </h2>
        <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
          Selecione o tipo de problema para que possamos direcionar seu chamado
          corretamente e resolver o mais rápido possível.
        </p>
      </div>

      {/* Info banner */}
      <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-50 to-fuchsia-50 border-2 border-purple-200 rounded-2xl p-5 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
          <AlertCircle size={20} className="text-purple-600" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-1">Como funciona?</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Selecione o tipo de chamado, preencha o formulário com seus dados e
            a descrição do problema. O chamado será enviado diretamente para
            nossa equipe de suporte através do seu e-mail, e você receberá uma
            resposta em <strong>suporte@mediquo.com.br</strong>.
          </p>
        </div>
      </div>

      {/* Category Cards */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ticketCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat)}
            className={`group relative text-left p-5 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98] overflow-hidden ${cat.bgLight}`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
            ></div>

            <div className="relative flex items-start gap-4">
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0`}
              >
                {cat.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {cat.description}
                </p>
              </div>
              <ChevronRight
                size={20}
                className="text-gray-300 group-hover:text-gray-500 group-hover:translate-x-1 transition-all flex-shrink-0 mt-4"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function TicketForm({
  category,
  onBack,
}: {
  category: TicketCategory;
  onBack: () => void;
}) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: false }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, boolean> = {};
    let isValid = true;

    category.fields.forEach((field) => {
      if (field.required && !formData[field.id]?.trim()) {
        newErrors[field.id] = true;
        isValid = false;
      }
      // Basic email validation
      if (
        field.type === "email" &&
        formData[field.id] &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData[field.id])
      ) {
        newErrors[field.id] = true;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const buildEmailBody = (): string => {
    let body = `=== CHAMADO DE SUPORTE ===\n\n`;
    body += `📋 Tipo: ${category.title}\n`;
    body += `📅 Data: ${new Date().toLocaleDateString("pt-BR")} às ${new Date().toLocaleTimeString("pt-BR")}\n\n`;
    body += `--- DADOS DO SOLICITANTE ---\n\n`;

    category.fields.forEach((field) => {
      if (formData[field.id]?.trim()) {
        body += `${field.label}: ${formData[field.id]}\n`;
      }
    });

    body += `\n--- FIM DO CHAMADO ---\n`;
    body += `\nChamado gerado pela Central de Suporte.`;

    return body;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      // Scroll to first error
      const firstError = document.querySelector(".field-error");
      firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const subject = `${category.subjectPrefix} ${formData["tipo_problema"] || formData["tipo_solicitacao"] || formData["tipo_assunto"] || formData["tipo_documento"] || category.title}`;
    const body = buildEmailBody();

    // Open mailto - this sends FROM the user's email TO support
    const mailtoUrl = `mailto:suporte@mediquo.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/30">
          <CheckCircle2 size={48} className="text-white" />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Chamado Preparado! ✉️
        </h2>
        <p className="text-lg text-gray-600 mb-3 max-w-md mx-auto">
          Seu aplicativo de e-mail deve ter sido aberto com o chamado já
          preenchido.
        </p>
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 max-w-md mx-auto mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle
              size={20}
              className="text-amber-600 flex-shrink-0 mt-0.5"
            />
            <div className="text-left">
              <p className="text-sm font-bold text-amber-800 mb-1">
                Importante:
              </p>
              <p className="text-sm text-amber-700">
                Clique em <strong>"Enviar"</strong> no seu aplicativo de e-mail
                para concluir a abertura do chamado. Caso o e-mail não tenha
                aberto automaticamente, copie o conteúdo e envie manualmente
                para{" "}
                <strong className="text-purple-700">
                  suporte@mediquo.com.br
                </strong>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({});
            }}
            className="px-6 py-3 bg-purple-100 text-purple-700 font-bold rounded-xl hover:bg-purple-200 transition-colors"
          >
            Abrir outro chamado
          </button>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-fuchsia-700 transition-all shadow-lg shadow-purple-500/25"
          >
            Voltar ao início
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 mb-6 group bg-purple-100 px-4 py-2 rounded-full transition-all hover:bg-purple-200"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Voltar para categorias
      </button>

      {/* Form Header */}
      <div className="flex items-center gap-4 mb-8">
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} text-white flex items-center justify-center shadow-lg`}
        >
          {category.icon}
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">
            {category.title}
          </h2>
          <p className="text-sm text-gray-500">{category.description}</p>
        </div>
      </div>

      {/* E-mail info box */}
      <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-4 mb-8 flex items-start gap-3">
        <Mail size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-purple-800">
            Ao enviar, seu app de e-mail será aberto com o chamado pré-preenchido.
            O e-mail será enviado <strong>do seu e-mail</strong> para{" "}
            <strong>suporte@mediquo.com.br</strong>, garantindo que possamos te
            responder diretamente.
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {category.fields.map((field) => (
          <div key={field.id} className={errors[field.id] ? "field-error" : ""}>
            <label
              htmlFor={field.id}
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={field.id}
                value={formData[field.id] || ""}
                onChange={(e) => handleChange(field.id, e.target.value)}
                placeholder={field.placeholder}
                rows={5}
                className={`w-full px-4 py-3 rounded-xl border-2 text-base transition-all duration-200 resize-none focus:ring-4 focus:ring-purple-500/20 ${
                  errors[field.id]
                    ? "border-red-300 bg-red-50 focus:border-red-400"
                    : "border-gray-200 bg-white focus:border-purple-400 hover:border-gray-300"
                }`}
              />
            ) : field.type === "select" ? (
              <select
                id={field.id}
                value={formData[field.id] || ""}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border-2 text-base transition-all duration-200 focus:ring-4 focus:ring-purple-500/20 appearance-none bg-no-repeat bg-right ${
                  errors[field.id]
                    ? "border-red-300 bg-red-50 focus:border-red-400"
                    : "border-gray-200 bg-white focus:border-purple-400 hover:border-gray-300"
                } ${!formData[field.id] ? "text-gray-400" : "text-gray-900"}`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundPosition: "right 12px center",
                }}
              >
                <option value="" disabled>
                  {field.placeholder}
                </option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.id}
                type={field.type}
                value={formData[field.id] || ""}
                onChange={(e) => handleChange(field.id, e.target.value)}
                placeholder={field.placeholder}
                className={`w-full px-4 py-3 rounded-xl border-2 text-base transition-all duration-200 focus:ring-4 focus:ring-purple-500/20 ${
                  errors[field.id]
                    ? "border-red-300 bg-red-50 focus:border-red-400"
                    : "border-gray-200 bg-white focus:border-purple-400 hover:border-gray-300"
                }`}
              />
            )}

            {/* Help text */}
            {field.helpText && !errors[field.id] && (
              <p className="mt-1.5 text-xs text-gray-400 flex items-center gap-1">
                <AlertCircle size={12} />
                {field.helpText}
              </p>
            )}

            {/* Error message */}
            {errors[field.id] && (
              <p className="mt-1.5 text-xs text-red-500 font-semibold flex items-center gap-1">
                <AlertCircle size={12} />
                {field.type === "email"
                  ? "Informe um e-mail válido"
                  : "Este campo é obrigatório"}
              </p>
            )}
          </div>
        ))}

        {/* Submit button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl hover:from-purple-700 hover:to-fuchsia-700 transition-all duration-300 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 active:scale-[0.98]"
          >
            <Send size={22} />
            Enviar Chamado
          </button>
          <p className="text-xs text-center text-gray-400 mt-3">
            Campos marcados com <span className="text-red-500">*</span> são
            obrigatórios
          </p>
        </div>
      </form>
    </div>
  );
}

// ==================== MAIN COMPONENT ====================

export function TicketForms() {
  const [selectedCategory, setSelectedCategory] =
    useState<TicketCategory | null>(null);

  return (
    <section className="bg-gradient-to-b from-white to-purple-50 py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {selectedCategory ? (
          <TicketForm
            category={selectedCategory}
            onBack={() => setSelectedCategory(null)}
          />
        ) : (
          <CategorySelector onSelect={setSelectedCategory} />
        )}
      </div>
    </section>
  );
}
