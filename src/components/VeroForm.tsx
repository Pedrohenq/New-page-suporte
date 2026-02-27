import React, { useState } from 'react';
import { ArrowLeft, Send, ShoppingCart, CheckCircle } from 'lucide-react';

interface VeroFormProps {
  onBack: () => void;
}

const VeroForm: React.FC<VeroFormProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    quantidade: '',
    dataCompra: '',
    valor: '',
    descricao: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`[VERO] Suporte Consultas Compradas - ${formData.nome}`);
    const body = encodeURIComponent(
      `FORMULÁRIO DE SUPORTE - CONSULTAS COMPRADAS VERO\n` +
      `${'='.repeat(50)}\n\n` +
      `DADOS DO CLIENTE:\n` +
      `• Nome: ${formData.nome}\n` +
      `• E-mail: ${formData.email}\n` +
      `• Telefone: ${formData.telefone}\n` +
      `• CPF: ${formData.cpf}\n\n` +
      `INFORMAÇÕES DA COMPRA:\n` +
      `• Quantidade de consultas: ${formData.quantidade}\n` +
      `• Data da compra: ${formData.dataCompra}\n` +
      `• Valor pago: R$ ${formData.valor}\n\n` +
      `DESCRIÇÃO DO PROBLEMA:\n` +
      `${formData.descricao}\n\n` +
      `${'='.repeat(50)}\n` +
      `Enviado via Central de Suporte - Formulário Vero`
    );

    window.location.href = `mailto:suporte@mediquo.com.br?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full text-center border border-white/20">
          <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Chamado Enviado!</h2>
          <p className="text-white/70 mb-6">
            Seu aplicativo de e-mail foi aberto com os dados do chamado. 
            Envie o e-mail para finalizar a abertura do chamado.
          </p>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            Voltar para Formulários
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar para Formulários</span>
          </button>
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 mb-8 text-white">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <ShoppingCart className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">PARCEIRO VERO</span>
              <h1 className="text-2xl font-bold mt-2">Consultas Compradas</h1>
              <p className="text-white/80">Suporte para compras realizadas na Vero</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Dados Pessoais */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-sm">1</span>
              Seus Dados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/70 text-sm mb-2">Nome completo *</label>
                <input
                  type="text"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">E-mail *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Telefone / WhatsApp *</label>
                <input
                  type="tel"
                  name="telefone"
                  required
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">CPF *</label>
                <input
                  type="text"
                  name="cpf"
                  required
                  value={formData.cpf}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="000.000.000-00"
                />
              </div>
            </div>
          </div>

          {/* Dados da Compra */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-sm">2</span>
              Informações da Compra
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-white/70 text-sm mb-2">Qtd. de consultas *</label>
                <input
                  type="number"
                  name="quantidade"
                  required
                  value={formData.quantidade}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Ex: 5"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Data da compra *</label>
                <input
                  type="date"
                  name="dataCompra"
                  required
                  value={formData.dataCompra}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Valor pago (R$) *</label>
                <input
                  type="text"
                  name="valor"
                  required
                  value={formData.valor}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Ex: 99,90"
                />
              </div>
            </div>
          </div>

          {/* Descrição */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center text-sm">3</span>
              Descreva o Problema
            </h2>
            <div>
              <label className="block text-white/70 text-sm mb-2">O que aconteceu? *</label>
              <textarea
                name="descricao"
                required
                rows={5}
                value={formData.descricao}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                placeholder="Descreva detalhadamente o problema com suas consultas compradas na Vero..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:scale-[1.02]"
          >
            <Send className="w-5 h-5" />
            Enviar Chamado
          </button>

          <p className="text-center text-white/50 text-sm">
            Ao enviar, seu aplicativo de e-mail será aberto com os dados preenchidos.
          </p>
        </form>
      </div>
    </div>
  );
};

export default VeroForm;
