import { Zap, ChevronRight } from "lucide-react";

interface QuickAnswer {
  question: string;
  answer: string;
}

interface QuickAnswersProps {
  answers: QuickAnswer[];
}

export function QuickAnswers({ answers }: QuickAnswersProps) {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/25">
            <Zap size={20} className="text-white" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Respostas Rápidas
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {answers.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-5 border border-purple-100 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-fuchsia-100 rounded-full -translate-y-12 translate-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-sm font-bold text-gray-900 leading-snug pr-2">
                    {item.question}
                  </h3>
                  <ChevronRight size={16} className="text-purple-400 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
