export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "getting-started",
    title: "Primeiros Passos",
    icon: "rocket",
    description: "Tudo para começar sua jornada de saúde digital",
    color: "violet",
    items: [
      {
        question: "O que é este serviço de telemedicina?",
        answer: "Nossa plataforma de telemedicina é um serviço digital de saúde que conecta você a profissionais de saúde qualificados de forma rápida, segura e conveniente. Através do nosso aplicativo ou plataforma web, você pode realizar consultas médicas online por chat, chamada de voz ou videochamada, obter receitas digitais, atestados e muito mais — tudo sem sair de casa, no conforto do seu lar ou onde você estiver."
      },
      {
        question: "Como faço para me cadastrar na plataforma?",
        answer: "Para se cadastrar, basta baixar o aplicativo na App Store ou Google Play, ou acessar nosso site. Clique em 'Criar conta', preencha seus dados pessoais (nome completo, e-mail, CPF e telefone), crie uma senha segura e pronto! Você também pode se cadastrar utilizando sua conta Google ou Apple ID para maior praticidade. Todo o processo leva menos de 2 minutos."
      },
      {
        question: "O serviço é gratuito?",
        answer: "O download do aplicativo e o cadastro são totalmente gratuitos. Oferecemos diferentes planos e modalidades de acesso. Dependendo do seu convênio, empresa ou plano de saúde, você pode ter acesso já incluso ao serviço sem custos adicionais. Consultas avulsas também estão disponíveis com valores acessíveis para quem não possui plano. Verifique as opções disponíveis no aplicativo ou entre em contato com nosso suporte para mais detalhes sobre preços e planos."
      },
      {
        question: "Quais especialidades médicas estão disponíveis?",
        answer: "Oferecemos acesso a diversas especialidades médicas e profissionais de saúde!\n\n📋 **ESPECIALIDADES COM AGENDAMENTO PRÉVIO (AGENDAMENTO OBRIGATÓRIO):**\n• Ginecologia\n• Psicologia\n• Nutrição\n• Dermatologia\n• Treinadores / Educação Física\n\n⚡ **ESPECIALIDADES COM ATENDIMENTO LIVRE (não precisa agendar):**\n• Clínica Geral Adulto\n• Clínico Geral Infantil\n• Medicina de Família\n• Medicina Veterinária (Pet)\n• Canal de Receitas\n\n⚠️ **IMPORTANTE:** A Ginecologia agora funciona EXCLUSIVAMENTE por agendamento prévio para garantir melhor qualidade no atendimento.\n\nA disponibilidade pode variar conforme seu plano de acesso."
      },
      {
        question: "Preciso ter plano de saúde para usar?",
        answer: "Não! A plataforma está disponível para todos os brasileiros, com ou sem plano de saúde. Você pode usar o serviço de diferentes formas:\n\n• Acesso via empresa ou benefício corporativo\n• Acesso via convênio ou plano de saúde parceiro\n• Consultas avulsas pagas diretamente no app\n• Planos individuais ou familiares\n\nSe sua empresa ou convênio oferece o serviço como benefício, você terá acesso conforme as condições acordadas."
      },
      {
        question: "Em quais dispositivos posso usar o serviço?",
        answer: "Você pode acessar nossa plataforma de diversas formas:\n\n📱 Aplicativo para celular:\n• Android (versão 8.0 ou superior)\n• iPhone/iOS (versão 14 ou superior) \n\nPara videochamadas, recomendamos usar Wi-Fi ou 4G/5G com boa conexão para melhor experiência."
      },
      {
        question: "O serviço funciona em todo o Brasil?",
        answer: "Sim! Nossa plataforma está disponível em todos os estados brasileiros, 24 horas por dia, 7 dias por semana. Como as consultas são realizadas online, você pode ser atendido de qualquer lugar do país, seja em casa, no trabalho ou em viagem. Basta ter acesso à internet."
      }
    ]
  },
  {
    id: "consultations",
    title: "Consultas Online",
    icon: "video",
    description: "Como funcionam os atendimentos médicos virtuais",
    color: "purple",
    items: [
      {
        question: "Como funciona uma consulta online?",
        answer: "As consultas podem ser realizadas de três formas, dependendo da especialidade e sua preferência:\n\n💬 Chat: Converse por texto com o médico em tempo real\n📞 Chamada de voz: Ligação de áudio com o profissional\n📹 Videochamada: Consulta por vídeo, face a face virtual\n\nDurante a consulta, o médico poderá:\n• Avaliar seus sintomas detalhadamente\n• Fazer perguntas sobre seu histórico de saúde\n• Solicitar exames quando necessário\n• Emitir receitas digitais\n• Emitir atestados médicos\n• Orientar sobre tratamentos e próximos passos\n\nTudo isso de forma segura e dentro das normas do Conselho Federal de Medicina (CFM)."
      },
      {
        question: "Quanto tempo dura uma consulta?",
        answer: "O tempo varia conforme a especialidade, tipo de atendimento e complexidade do caso:\n\n• Consultas por chat: 15 a 30 minutos em média\n• Consultas por voz: 15 a 25 minutos em média\n• Consultas por vídeo: 15 a 30 minutos em média\n\nO profissional dedicará todo o tempo necessário para atender adequadamente sua demanda. Não há pressa — o importante é resolver sua questão de saúde com atenção e cuidado."
      },
      {
        question: "Posso consultar a qualquer hora do dia ou da noite?",
        answer: "Sim! Oferecemos atendimento 24 horas por dia, 7 dias por semana para consultas de clínica geral e pronto-atendimento (atendimento livre).\n\nPara especialidades com agendamento (como Ginecologia, Psicologia, etc.), os horários disponíveis variam conforme a agenda dos profissionais.\n\nAo selecionar uma especialidade no aplicativo, você verá:\n• Se é atendimento livre (disponível 24h)\n• Se requer agendamento (escolha data e horário)"
      },
      {
        question: "As consultas online são seguras e sigilosas?",
        answer: "Absolutamente! Levamos a segurança e privacidade muito a sério:\n\n🔒 Criptografia de ponta a ponta em todas as comunicações\n📋 Conformidade total com a LGPD (Lei Geral de Proteção de Dados)\n⚕️ Regulamentação pelo CFM (Conselho Federal de Medicina)\n🏥 Servidores seguros com certificação de segurança\n\nSeus dados médicos são tratados com total sigilo e confidencialidade, assim como em uma consulta presencial. Apenas você e seu médico têm acesso às informações da consulta."
      },
      {
        question: "Como faço para agendar uma consulta?",
        answer: "Agendar é muito simples! Existem duas formas:\n\n📱 **PARA CLIENTES ATIVADOS COM CÓDIGO:**\n1. Abra o aplicativo e faça login\n2. Acesse a opção de AGENDAMENTO no menu principal\n3. Selecione a especialidade desejada\n4. Escolha data e horário disponíveis\n5. Confirme o agendamento\n\n⚡ **PARA ATENDIMENTO LIVRE (sem agendamento):**\n1. Abra o aplicativo e faça login\n2. Selecione a especialidade (clínico geral, pediatria, etc.)\n3. Escolha o tipo de consulta (chat, voz ou vídeo)\n4. Inicie a consulta imediatamente\n\n⚠️ **IMPORTANTE:** Especialidades como Ginecologia agora funcionam APENAS por agendamento prévio."
      },
      {
        question: "Posso cancelar ou reagendar uma consulta?",
        answer: "Sim! Você pode cancelar ou reagendar sua consulta com até 2 horas de antecedência sem nenhum custo adicional:\n\n1. Acesse a seção 'Minhas Consultas' no aplicativo\n2. Selecione a consulta que deseja alterar\n3. Clique em 'Reagendar' ou 'Cancelar'\n4. Confirme a ação\n\n⚠️ Cancelamentos fora do prazo ou não comparecimentos sem aviso podem estar sujeitos a políticas específicas do seu plano."
      },
      {
        question: "O que acontece se eu perder a conexão durante a consulta?",
        answer: "Não se preocupe! Se houver queda de conexão:\n\n• O médico aguardará seu retorno por alguns minutos\n• Você pode tentar reconectar imediatamente pelo app\n• Se não conseguir retornar, entre em contato com nosso suporte\n• A consulta pode ser reagendada sem custos em caso de problemas técnicos\n\nDica: Use uma conexão Wi-Fi estável ou certifique-se de ter bom sinal 4G/5G para evitar interrupções."
      },
      {
        question: "Posso ter acompanhante durante a consulta?",
        answer: "Sim! Você pode ter acompanhante durante a consulta online, especialmente recomendado para:\n\n• Consultas pediátricas (pais/responsáveis devem estar presentes)\n• Pacientes idosos que precisam de apoio\n• Consultas que abordem temas complexos\n• Pessoas com dificuldade de uso de tecnologia\n\nBasta informar ao médico no início da consulta que há um acompanhante presente."
      },
      {
        question: "Como funciona o agendamento para Ginecologia?",
        answer: "A especialidade de **Ginecologia agora funciona EXCLUSIVAMENTE por agendamento prévio** (antes era atendimento livre).\n\n📅 **COMO AGENDAR:**\n1. Abra o aplicativo e faça login\n2. Acesse a opção 'AGENDAMENTO' no menu\n3. Selecione 'Ginecologia'\n4. Escolha a data e horário disponíveis\n5. Confirme seu agendamento\n\n⏰ **HORÁRIOS DISPONÍVEIS:**\nOs horários variam conforme a disponibilidade dos profissionais. Consulte no app os slots disponíveis.\n\n✅ **VANTAGENS DO AGENDAMENTO:**\n• Atendimento mais organizado\n• Tempo garantido com o profissional\n• Sem filas de espera\n• Lembretes automáticos\n\n⚠️ **IMPORTANTE:** Clientes ativados através de código têm acesso à opção de agendamento diretamente no aplicativo."
      }
    ]
  },
  {
    id: "scheduling",
    title: "Agendamento",
    icon: "calendar",
    description: "Tudo sobre agendamento de consultas e especialidades",
    color: "blue",
    items: [
      {
        question: "Como funciona o sistema de agendamento?",
        answer: "O sistema de agendamento permite que você marque consultas com antecedência para especialidades específicas.\n\n📱 **COMO ACESSAR O AGENDAMENTO:**\nPara clientes ativados através de código, a opção de AGENDAMENTO está disponível diretamente no menu principal do aplicativo.\n\n📋 **PASSO A PASSO:**\n1. Faça login no aplicativo\n2. Acesse 'AGENDAMENTO' no menu\n3. Selecione a especialidade desejada\n4. Visualize os horários disponíveis\n5. Escolha data e horário\n6. Confirme o agendamento\n\n✅ **CONFIRMAÇÃO:**\nVocê receberá confirmação por:\n• Notificação push no app\n• E-mail\n• SMS (se habilitado)"
      },
      {
        question: "Quais especialidades exigem agendamento?",
        answer: "Atualmente, as seguintes especialidades funcionam com **AGENDAMENTO OBRIGATÓRIO:**\n\n📅 **COM AGENDAMENTO:**\n• Ginecologia\n• Psicologia\n• Nutrição\n• Dermatologia\n• Treinadores / Educação Física\n\n⚡ **ATENDIMENTO LIVRE (24h, sem agendamento):**\n• Clínica Geral Adulto\n• Clínico Geral Infantil\n• Medicina de Família\n• Medicina Veterinária (Pet)\n• Canal de Receitas\n\n💡 **DICA:** Ao selecionar uma especialidade no app, você verá claramente se é agendamento ou atendimento livre."
      },
      {
        question: "Como ativo a opção de agendamento no meu app?",
        answer: "A opção de agendamento está disponível para **clientes ativados através de código**.\n\n🔑 **SE VOCÊ TEM UM CÓDIGO DE ATIVAÇÃO:**\n1. Abra o aplicativo\n2. Faça login na sua conta\n3. Vá em 'Configurações' ou 'Minha Conta'\n4. Procure 'Inserir código' ou 'Ativar benefício'\n5. Digite o código fornecido pela empresa/convênio\n6. Confirme a ativação\n\n✅ **APÓS ATIVAÇÃO:**\nA opção 'AGENDAMENTO' aparecerá no menu principal do aplicativo.\n\n❓ **NÃO TEM CÓDIGO?**\nEntre em contato com:\n• O RH da sua empresa\n• Seu convênio/plano de saúde\n• Nosso suporte para verificar elegibilidade"
      },
      {
        question: "Por que a Ginecologia agora é só agendamento?",
        answer: "A mudança da Ginecologia para **atendimento exclusivo por agendamento** foi implementada para:\n\n✅ **BENEFÍCIOS:**\n• Melhor qualidade de atendimento\n• Tempo adequado para cada paciente\n• Organização da agenda dos profissionais\n• Eliminação de filas de espera\n• Pontualidade nos atendimentos\n• Preparação adequada da paciente\n\n📅 **COMO ERA ANTES:**\nAtendimento livre (você entrava na fila e aguardava)\n\n📅 **COMO É AGORA:**\nAgendamento prévio (você escolhe data e horário)\n\n💡 **VANTAGEM:** Com o agendamento, você sabe exatamente quando será atendida, pode se preparar melhor e não precisa aguardar em fila."
      },
      {
        question: "Com quanta antecedência posso agendar?",
        answer: "O período de agendamento varia:\n\n📅 **ANTECEDÊNCIA MÍNIMA:**\n• A partir de 15 minutos antes do horário desejado\n\n📅 **ANTECEDÊNCIA MÁXIMA:**\n• Até 2 meses de antecedência (para Nutrição e Educação Física/Treinadores)\n• Outras especialidades podem variar\n\n💡 **DICA:** Para especialidades muito procuradas como Ginecologia, recomendamos agendar com alguns dias de antecedência para ter mais opções de horário.\n\n⏰ **HORÁRIOS DISPONÍVEIS:**\nOs slots de horário são atualizados em tempo real conforme a agenda dos profissionais."
      },
      {
        question: "Recebo lembrete antes da consulta agendada?",
        answer: "Sim! Enviamos lembretes automáticos para você não perder sua consulta:\n\n🔔 **LEMBRETES ENVIADOS:**\n• 24 horas antes"
      },
      {
        question: "O que fazer se não houver horário disponível?",
        answer: "Se não encontrar horário disponível para a especialidade desejada:\n\n📋 **OPÇÕES:**\n\n1️⃣ **Tente outros dias:**\nNavegue por datas diferentes, às vezes há mais disponibilidade no início ou final da semana.\n\n2️⃣ **Verifique outros horários:**\nHorários de manhã cedo ou final da tarde podem ter mais vagas.\n\n3️⃣ **Ative notificação de vaga:**\nAlguns apps permitem ser notificado quando surgir vaga.\n\n4️⃣ **Entre em contato com o suporte:**\nPodemos verificar disponibilidade ou sugerir alternativas.\n\n5️⃣ **Considere atendimento livre:**\nPara questões gerais, o clínico geral (24h) pode ajudar e encaminhar se necessário."
      }
    ]
  },
  {
    id: "prescriptions",
    title: "Receitas e Atestados",
    icon: "file-text",
    description: "Documentos médicos digitais válidos em todo Brasil",
    color: "fuchsia",
    items: [
      {
        question: "O médico pode emitir receitas pela plataforma?",
        answer: "Sim! Os médicos podem emitir receitas digitais válidas em todo o território nacional:\n\n✅ Assinatura digital com certificado ICP-Brasil\n✅ Conformidade com normas da ANVISA\n✅ Conformidade com regulamentações do CFM\n✅ QR Code para validação pela farmácia\n✅ Validade legal em todo o Brasil\n\nA receita é enviada diretamente para o aplicativo e também por e-mail, podendo ser apresentada em qualquer farmácia do país."
      },
      {
        question: "Como acesso minha receita digital?",
        answer: "Após a consulta, sua receita estará disponível em:\n\n📁 No app: Seção 'Meus Documentos' > 'Receitas'\n📧 No e-mail: Enviamos uma cópia para seu e-mail cadastrado\n\nPara usar na farmácia:\n• Apresente o QR Code da receita pelo celular\n• Ou mostre o PDF diretamente na tela\n• Ou imprima o documento se preferir\n\nA farmácia poderá validar a autenticidade da receita escaneando o QR Code."
      },
      {
        question: "O médico pode emitir atestado médico online?",
        answer: "Sim! Atestados médicos digitais podem ser emitidos quando clinicamente indicado:\n\n✅ Validade legal reconhecida\n✅ Assinatura digital do médico\n✅ CRM do profissional incluso\n✅ Data e CID quando aplicável\n\nO atestado fica disponível em 'Meus Documentos' > 'Atestados' e é enviado também por e-mail. Pode ser apresentado ao empregador de forma digital ou impressa."
      },
      {
        question: "Receitas de medicamentos controlados podem ser emitidas?",
        answer: "Receitas de medicamentos controlados seguem regulamentações específicas da ANVISA:\n\n✅ Receitas azuis (B1/B2): Podem ser emitidas digitalmente para alguns medicamentos conforme normas vigentes\n⚠️ Receitas especiais (A1/A2): Possuem restrições específicas\n\nO médico avaliará cada caso individualmente e:\n• Orientará sobre a melhor conduta\n• Informará se pode emitir digitalmente\n• Indicará alternativas quando necessário\n• Poderá solicitar acompanhamento presencial se indicado\n\nA decisão é sempre baseada em critérios médicos e regulatórios."
      },
      {
        question: "A receita digital é aceita em todas as farmácias?",
        answer: "Sim! As receitas digitais possuem validade legal em todo o Brasil e devem ser aceitas por todas as farmácias:\n\n• Farmácias de rede\n• Farmácias independentes\n• Drogarias\n• Farmácias de manipulação\n\n💡 Dica: Se encontrar dificuldade, peça ao farmacêutico validar o QR Code ou entre em contato com nosso suporte que ajudaremos a resolver."
      },
      {
        question: "Quanto tempo a receita digital é válida?",
        answer: "A validade da receita varia conforme o tipo de medicamento:\n\n📋 Receitas simples (tarja vermelha): 180 dias (6 meses)\n📋 Receitas de antimicrobianos: 10 dias\n📋 Receitas de controle especial: 30 a 60 dias (varia conforme medicamento)\n\nA data de validade estará sempre indicada na própria receita."
      },
      {
        question: "Posso solicitar uma segunda via de receita ou atestado?",
        answer: "Sim! Todos os seus documentos ficam salvos permanentemente no aplicativo:\n\n1. Acesse 'Meus Documentos'\n2. Selecione 'Receitas' ou 'Atestados'\n3. Encontre o documento desejado pelo histórico\n4. Visualize, baixe ou compartilhe novamente\n\nSe precisar de uma nova receita para o mesmo medicamento, será necessária nova consulta para avaliação médica atualizada."
      },
      {
        question: "O médico pode solicitar exames?",
        answer: "Sim! Durante a consulta, o médico pode solicitar exames quando necessário:\n\n🔬 Exames laboratoriais (sangue, urina, etc.)\n📸 Exames de imagem (raio-X, ultrassom, etc.)\n❤️ Exames cardiológicos\n🔍 Outros exames específicos\n\nA solicitação de exame é emitida digitalmente e você pode realizá-los em qualquer laboratório ou clínica de sua preferência. Após os resultados, você pode compartilhar com o médico em uma consulta de retorno."
      }
    ]
  },
  {
    id: "account",
    title: "Minha Conta",
    icon: "user",
    description: "Gerenciamento de perfil, dados e configurações",
    color: "indigo",
    items: [
      {
        question: "Como altero meus dados cadastrais?",
        answer: "Para atualizar suas informações:\n\n1. Abra o aplicativo e acesse 'Meu Perfil'\n2. Toque em 'Editar Perfil'\n3. Atualize os dados desejados:\n   • Nome\n   • Telefone\n   • Endereço\n   • Foto de perfil\n4. Salve as alterações\n\n⚠️ Alguns dados como CPF e data de nascimento podem requerer contato com o suporte para alteração, por questões de segurança e validação."
      },
      {
        question: "Esqueci minha senha, como recuperar?",
        answer: "Recuperar a senha é simples:\n\n1. Na tela de login, clique em 'Esqueci minha senha'\n2. Digite o e-mail cadastrado na plataforma\n3. Clique em 'Enviar link de recuperação'\n4. Acesse seu e-mail e clique no link recebido\n5. Crie uma nova senha segura\n\n⏰ O link é válido por 24 horas.\n\n📧 Não recebeu o e-mail?\n• Verifique a caixa de spam/lixo eletrônico\n• Confirme se digitou o e-mail correto\n• Entre em contato com nosso suporte se persistir"
      },
      {
        question: "Como excluo minha conta?",
        answer: "Para solicitar exclusão da conta:\n\nPelo aplicativo:\n1. Acesse 'Meu Perfil' > 'Configurações'\n2. Role até 'Excluir conta'\n3. Confirme sua decisão\n\nPelo suporte:\n• Entre em contato solicitando a exclusão\n\n⚠️ Importante: Conforme a LGPD, seus dados serão removidos respeitando prazos legais de guarda obrigatória de prontuários médicos (20 anos conforme CFM). Histórico de consultas e receitas serão anonimizados."
      },
      {
        question: "Como acesso meu histórico de consultas?",
        answer: "Todo seu histórico fica salvo e acessível:\n\n1. Acesse 'Minhas Consultas' no menu principal\n2. Selecione 'Histórico'\n3. Visualize todas as consultas realizadas:\n   • Data e horário\n   • Especialidade\n   • Nome do profissional\n   • Resumo/anotações\n   • Documentos gerados\n\nVocê também pode filtrar por período ou especialidade para encontrar consultas específicas."
      },
      {
        question: "É possível usar a plataforma em mais de um dispositivo?",
        answer: "Sim! Você pode acessar sua conta de múltiplos dispositivos:\n\n• Seu celular principal\n• Tablet\n• Computador via navegador\n• Celular secundário\n\nBasta fazer login com suas credenciais em cada dispositivo. Por segurança, sessões podem ser encerradas automaticamente após períodos de inatividade.\n\nEm 'Configurações' > 'Dispositivos conectados' você pode ver e gerenciar todos os dispositivos com acesso à sua conta."
      },
      {
        question: "Como ativo minha conta com código da empresa?",
        answer: "Se você recebeu um código de ativação da sua empresa ou convênio:\n\n🔑 **PASSO A PASSO:**\n1. Baixe o aplicativo e crie sua conta\n2. Faça login com seu e-mail e senha\n3. Acesse 'Meu Perfil' ou 'Configurações'\n4. Procure a opção 'Inserir código' ou 'Ativar benefício'\n5. Digite o código fornecido\n6. Confirme a ativação\n\n✅ **APÓS ATIVAÇÃO:**\n• Você terá acesso às coberturas do plano empresarial\n• A opção de AGENDAMENTO será liberada no menu\n• Especialidades adicionais podem ser desbloqueadas\n\n❓ **PROBLEMAS COM O CÓDIGO?**\nEntre em contato com o RH da sua empresa ou nosso suporte."
      }
    ]
  },
  {
    id: "technical",
    title: "Suporte Técnico",
    icon: "settings",
    description: "Soluções para problemas técnicos comuns",
    color: "amber",
    items: [
      {
        question: "O aplicativo não está funcionando, o que faço?",
        answer: "Tente os seguintes passos em ordem:\n\n1️⃣ Verifique sua conexão com a internet\n2️⃣ Feche completamente o app e reabra\n3️⃣ Verifique se há atualizações na App Store/Google Play\n4️⃣ Limpe o cache do aplicativo:\n   • Android: Configurações > Apps > [App] > Armazenamento > Limpar cache\n   • iPhone: Delete e reinstale o app\n5️⃣ Reinicie seu dispositivo\n6️⃣ Reinstale o aplicativo\n\nSe o problema persistir, entre em contato com nosso suporte técnico informando:\n• Modelo do celular\n• Versão do sistema operacional\n• Descrição do erro"
      },
      {
        question: "Quais são os requisitos mínimos do sistema?",
        answer: "📱 Smartphones:\n• Android: Versão 8.0 (Oreo) ou superior\n• iPhone: iOS 14 ou superior\n• Mínimo 100MB de espaço livre\n\n💻 Navegadores web:\n• Google Chrome 90+ (recomendado)\n• Mozilla Firefox 88+\n• Safari 14+\n• Microsoft Edge 90+\n\n🌐 Internet:\n• Mínimo: 3 Mbps para chat e voz\n• Recomendado: 5 Mbps ou mais para vídeo\n• Wi-Fi ou 4G/5G estável"
      },
      {
        question: "A videochamada está com problemas de áudio ou vídeo, o que fazer?",
        answer: "Siga este checklist:\n\n🎤 Problemas de áudio:\n• Verifique se o microfone tem permissão no app\n• Teste se o microfone funciona em outros apps\n• Se usar fones, verifique a conexão Bluetooth\n• Aumente o volume do dispositivo\n\n📹 Problemas de vídeo:\n• Verifique permissão de câmera no app\n• Feche outros apps usando a câmera\n• Verifique se a câmera funciona em outros apps\n• Tente alternar câmera frontal/traseira\n\n🌐 Problemas de conexão:\n• Use Wi-Fi ao invés de dados móveis\n• Aproxime-se do roteador\n• Feche outros apps consumindo internet\n• Reinicie o roteador se necessário"
      },
      {
        question: "Como ativo as notificações do aplicativo?",
        answer: "📱 No Android:\n1. Abra Configurações do celular\n2. Vá em 'Aplicativos' ou 'Apps'\n3. Encontre nosso aplicativo\n4. Toque em 'Notificações'\n5. Ative 'Permitir notificações'\n\n🍎 No iPhone:\n1. Abra 'Ajustes'\n2. Vá em 'Notificações'\n3. Encontre nosso aplicativo\n4. Ative 'Permitir Notificações'\n5. Personalize alertas, sons e badges\n\n📲 No aplicativo:\nAcesse 'Configurações' > 'Notificações' para personalizar quais tipos de alerta deseja receber."
      },
      {
        question: "Não consigo fazer login, o que fazer?",
        answer: "Verifique os seguintes pontos:\n\n✉️ E-mail correto?\n• Confirme se está usando o e-mail cadastrado\n• Verifique erros de digitação\n\n🔑 Senha correta?\n• Tente redefinir a senha\n• Verifique caps lock\n\n🔄 App atualizado?\n• Atualize para a versão mais recente\n\n👤 Login social?\n• Se usou Google/Apple ID no cadastro, use a mesma opção\n\n🌐 Problemas de conexão?\n• Teste sua internet\n• Tente em Wi-Fi diferente\n\nSe nada funcionar, contate o suporte informando seu e-mail cadastrado."
      },
      {
        question: "O aplicativo está muito lento, como melhorar?",
        answer: "Dicas para melhorar a performance:\n\n📱 No seu dispositivo:\n• Feche apps em segundo plano\n• Reinicie o celular\n• Libere espaço de armazenamento\n• Limpe o cache do app\n\n🌐 Na sua conexão:\n• Use Wi-Fi estável quando possível\n• Evite redes públicas congestionadas\n• Teste a velocidade da internet\n\n🔄 No aplicativo:\n• Atualize para a última versão\n• Faça logout e login novamente\n• Reinstale se necessário\n\nSe o problema persistir em conexão boa e dispositivo recente, contate nosso suporte técnico."
      },
      {
        question: "Como compartilho documentos ou exames com o médico?",
        answer: "Durante ou antes da consulta, você pode enviar:\n\n📎 Pelo chat da consulta:\n• Toque no ícone de anexo (📎)\n• Selecione 'Galeria' ou 'Documentos'\n• Escolha o arquivo desejado\n• Envie para o médico\n\n📁 Formatos aceitos:\n• Imagens: JPG, PNG, HEIC\n• Documentos: PDF\n• Tamanho máximo: 10MB por arquivo\n\n💡 Dica: Antes da consulta, já deixe separados os exames ou fotos que deseja mostrar ao médico para agilizar o atendimento."
      },
      {
        question: "Recebi uma mensagem de erro, o que significa?",
        answer: "Erros comuns e soluções:\n\n❌ 'Sessão expirada'\n→ Faça login novamente\n\n❌ 'Sem conexão com a internet'\n→ Verifique sua conexão e tente novamente\n\n❌ 'Serviço temporariamente indisponível'\n→ Aguarde alguns minutos e tente novamente\n\n❌ 'Erro ao carregar dados'\n→ Feche e reabra o app\n\n❌ 'Versão do app desatualizada'\n→ Atualize o aplicativo\n\nSe o erro persistir ou for diferente, tire um print da tela e envie ao suporte para análise detalhada."
      }
    ]
  },
  {
    id: "payments",
    title: "Pagamentos e Planos",
    icon: "credit-card",
    description: "Informações sobre cobranças, planos e reembolsos",
    color: "emerald",
    items: [
      {
        question: "Quais formas de pagamento são aceitas?",
        answer: "Aceitamos diversas formas de pagamento:\n\n💳 Cartões de crédito:\n• Visa\n• Mastercard\n• Elo\n• American Express\n• Hipercard\n\n💳 Cartões de débito:\n• Visa\n• Mastercard\n\n💰 Outras formas:\n• PIX (pagamento instantâneo)\n• Boleto bancário (para planos mensais)\n\nPara consultas avulsas, o pagamento é confirmado antes do atendimento. Para planos mensais, a cobrança é recorrente na data de aniversário do plano."
      },
      {
        question: "Como solicito reembolso?",
        answer: "Para solicitar reembolso:\n\n1. Entre em contato com nosso suporte via chat ou e-mail\n2. Informe o motivo da solicitação\n3. Forneça detalhes da consulta/cobrança\n4. Aguarde análise (até 5 dias úteis)\n5. Se aprovado, reembolso em até 10 dias úteis\n\n⚠️ Políticas de reembolso:\n• Consultas não realizadas: reembolso integral\n• Problemas técnicos comprovados: reembolso integral\n• Consultas realizadas integralmente: sem reembolso\n• Cancelamento de plano: proporcional ao período não utilizado"
      },
      {
        question: "Como funciona o plano empresarial?",
        answer: "O plano empresarial é um benefício de saúde digital oferecido por empresas aos colaboradores.\n\nGeralmente inclui:\n• Consultas ilimitadas com clínico geral\n• Acesso a especialidades selecionadas\n• Receitas e atestados digitais\n• Sem custo adicional para o colaborador\n• **Opção de AGENDAMENTO para especialidades específicas**\n\nAs coberturas específicas variam conforme o contrato entre a empresa e nossa plataforma. Algumas empresas oferecem extensão para dependentes.\n\nConsulte o RH da sua empresa para conhecer os detalhes do seu plano."
      }
    ]
  },
  {
    id: "health-info",
    title: "Informações de Saúde",
    icon: "heart",
    description: "Orientações gerais sobre telemedicina e saúde",
    color: "rose",
    items: [
      {
        question: "Em quais casos devo procurar atendimento presencial?",
        answer: "A telemedicina é excelente para muitas situações, mas procure atendimento presencial/emergência em casos de:\n\n🚨 Emergências:\n• Dor no peito ou dificuldade respiratória intensa\n• Sinais de AVC (fala arrastada, paralisia facial, fraqueza súbita)\n• Traumatismos graves ou fraturas\n• Sangramento intenso\n• Perda de consciência\n\n⚠️ Situações que requerem exame físico:\n• Dor abdominal intensa\n• Febre muito alta persistente\n• Lesões que precisam de sutura\n• Procedimentos que exigem toque/palpação\n\nNa dúvida, inicie uma consulta online e o médico orientará sobre a necessidade de atendimento presencial."
      },
      {
        question: "A telemedicina é regulamentada no Brasil?",
        answer: "Sim! A telemedicina é totalmente regulamentada:\n\n⚕️ Resolução CFM nº 2.314/2022:\n• Define e regulamenta a telemedicina no Brasil\n• Estabelece normas éticas e técnicas\n• Garante a mesma qualidade do atendimento presencial\n\n📋 O que a regulamentação garante:\n• Médicos devem ser registrados no CRM\n• Sigilo médico obrigatório\n• Prontuário eletrônico seguro\n• Receitas digitais válidas\n• Atestados com validade legal\n\nNossa plataforma segue 100% das regulamentações vigentes."
      },
      {
        question: "Os médicos são realmente qualificados?",
        answer: "Absolutamente! Todos os profissionais da nossa plataforma:\n\n✅ Possuem CRM ativo e regular\n✅ Passam por processo seletivo rigoroso\n✅ Têm formação em instituições reconhecidas pelo MEC\n✅ Possuem experiência comprovada\n✅ São treinados em atendimento virtual\n✅ Passam por avaliações periódicas de qualidade\n\nVocê pode verificar o CRM de qualquer médico no site do Conselho Federal de Medicina (portal.cfm.org.br)."
      },
      {
        question: "Meus dados de saúde estão seguros?",
        answer: "A segurança dos seus dados é nossa prioridade:\n\n🔒 Proteção de dados:\n• Criptografia de ponta a ponta\n• Servidores com certificação de segurança\n• Conformidade total com a LGPD\n\n📋 Sigilo médico:\n• Prontuário acessível apenas por você e seus médicos\n• Equipe de suporte não acessa dados clínicos\n• Não vendemos ou compartilhamos informações\n\n👤 Seus direitos (LGPD):\n• Acessar seus dados\n• Solicitar correção\n• Pedir exclusão (respeitando prazos legais)\n• Exportar seus dados"
      },
      {
        question: "Como funciona a prescrição de medicamentos contínuos?",
        answer: "Para medicamentos de uso contínuo:\n\n💊 Primeira prescrição:\n• O médico avaliará seu histórico\n• Poderá solicitar exames recentes\n• Emitirá receita se apropriado\n\n🔄 Renovação de receitas:\n• Agende consulta de acompanhamento\n• Leve exames atualizados se houver\n• Relate como está o tratamento\n• Médico avaliará e renovará se adequado\n\n⚠️ Importante:\n• Alguns medicamentos exigem exames periódicos\n• O médico pode solicitar avaliação presencial\n• Sempre informe todos os medicamentos em uso"
      }
    ]
  }
];

export const quickAnswers = [
  {
    question: "Como agendar uma consulta?",
    answer: "Para clientes ativados com código: acesse 'AGENDAMENTO' no menu do app, escolha a especialidade, data e horário. Para atendimento livre: selecione a especialidade e inicie imediatamente!"
  },
  {
    question: "Ginecologia agora é só agendamento?",
    answer: "Sim! A Ginecologia agora funciona EXCLUSIVAMENTE por agendamento prévio. Acesse 'Agendamento' no app, selecione Ginecologia e escolha data/horário disponível."
  },
  {
    question: "A receita digital vale em qualquer farmácia?",
    answer: "Sim! Nossas receitas têm validade legal em todo o Brasil e são aceitas em todas as farmácias."
  },
  {
    question: "Esqueci minha senha",
    answer: "Na tela de login, clique em 'Esqueci minha senha' e siga as instruções enviadas por e-mail."
  },
  {
    question: "Qual o horário de atendimento do suporte?",
    answer: "O suporte técnico funciona de segunda a sexta, das 08:00 às 18:00. Consultas médicas de atendimento livre estão disponíveis 24h."
  },
  {
    question: "Como ativo meu código de acesso?",
    answer: "Acesse 'Meu Perfil' > 'Inserir código' ou 'Ativar benefício', digite o código fornecido pela empresa e confirme. Após ativação, a opção de AGENDAMENTO será liberada!"
  }
];
