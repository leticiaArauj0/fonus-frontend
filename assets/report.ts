type FaixaEtaria = "2-3" | "4-5" | "6-7";

export const relatorios: Record<FaixaEtaria, {
  faixa: string;
  resumo: string;
  audicao: string;
  fala: string;
  expressaoVerbal: string;
  expressaoNaoVerbal: string;
}> = {
    "2-3": {
      faixa: "Relatório – Desenvolvimento de 2 a 3 anos",
      resumo: "A criança apresenta características compatíveis com o desenvolvimento esperado para crianças entre 2 e 3 anos de idade.",
      audicao: `Nesta fase, a criança já é capaz de perceber quando é chamada pelo nome e identifica sons do ambiente familiar, como vozes conhecidas e sons de brinquedos ou objetos do cotidiano. Ela pode se mostrar atenta a ruídos e reagir com curiosidade, mas ainda está em processo de amadurecimento da escuta ativa e da compreensão de comandos verbais simples. Em algumas situações, pode necessitar de reforços visuais ou gestuais para compreender uma solicitação.`,
      fala: `A fala nesta etapa está em desenvolvimento inicial. A criança já utiliza algumas palavras isoladas para se comunicar e, aos poucos, começa a formar pequenas frases de duas ou três palavras. É comum ainda observar trocas de sons, omissões ou articulação imprecisa, o que é típico dessa idade. A aquisição de vocabulário ocorre rapidamente, e a criança tende a repetir palavras novas que escuta com frequência.`,
      expressaoVerbal: `A criança demonstra intenção de se comunicar verbalmente, mesmo que com limitações de vocabulário. Ela pode repetir palavras ou frases que ouve de adultos, desenhos ou músicas, às vezes sem total compreensão do conteúdo. O contato visual durante as interações verbais é presente, embora ainda possa ser instável. As respostas verbais tendem a ser curtas, mas indicam que há construção de linguagem em curso.`,
      expressaoNaoVerbal: `A comunicação não verbal tem papel essencial nessa faixa etária. A criança utiliza gestos amplamente para complementar ou substituir a fala, como apontar para o que deseja, acenar para cumprimentar ou negar balançando a cabeça. Também demonstra sentimentos por meio de expressões faciais, posturas e movimentos corporais simples. Essa habilidade é esperada e importante para a etapa de transição entre a comunicação gestual e verbal.`
    },
  
    "4-5": {
      faixa: "Relatório – Desenvolvimento de 4 a 5 anos",
      resumo: "A criança apresenta comportamentos compatíveis com o desenvolvimento de crianças na faixa etária de 4 a 5 anos.",
      audicao: `Nessa idade, a criança escuta com mais atenção, responde prontamente quando é chamada e consegue compreender instruções simples, mesmo que envolvam duas etapas. A percepção auditiva está mais refinada, e a criança é capaz de acompanhar histórias curtas, reagir a músicas e identificar sons mais específicos do cotidiano.`,
      fala: `A fala está em franco desenvolvimento. A criança possui vocabulário ampliado, utiliza frases completas e começa a demonstrar domínio sobre estruturas gramaticais mais complexas. Embora ainda possam ocorrer pequenas trocas de fonemas, sua fala geralmente é compreendida por adultos que não fazem parte do convívio diário. Ela mostra criatividade na linguagem, inventando palavras ou adaptando termos difíceis de pronunciar.`,
      expressaoVerbal: `A criança já constrói frases com sentido mais claro e coeso. Durante conversas, mantém contato visual com maior constância, responde perguntas com frases mais elaboradas e é capaz de expressar desejos, sentimentos e pequenas opiniões. Também repete expressões ou falas ouvidas em músicas, desenhos ou adultos, mas agora com maior compreensão do seu significado.`,
      expressaoNaoVerbal: `Embora o uso de gestos ainda esteja presente, ele passa a ter um papel complementar à fala, e não mais substitutivo. A criança usa expressões faciais para demonstrar emoções, gesticula ao falar e compreende com mais facilidade os gestos e expressões dos outros. Essa capacidade de “ler” a linguagem corporal melhora a comunicação social e fortalece os vínculos com os colegas e adultos.`
    },
  
    "6-7": {
      faixa: "Relatório – Desenvolvimento de 6 a 7 anos",
      resumo: "A criança demonstra habilidades compatíveis com o desenvolvimento esperado para crianças entre 6 e 7 anos.",
      audicao: `A escuta está mais apurada e seletiva. A criança entende comandos verbais com mais de duas etapas, presta atenção prolongada durante histórias e atividades, e demonstra capacidade de interpretação do que escuta. Ela já consegue distinguir entonações que indicam sentimentos ou intenções, como alegria, tristeza ou repreensão, e responde de forma adequada.`,
      fala: `A criança apresenta uma fala fluente, com boa articulação e ritmo. As trocas de fonemas são raras e quando ocorrem, geralmente não comprometem a compreensão. Ela utiliza novas palavras com facilidade, expande constantemente seu vocabulário e é capaz de adaptar sua fala ao contexto, ajustando o tom e o conteúdo de acordo com o interlocutor.`,
      expressaoVerbal: `A linguagem expressiva está bem estruturada. A criança narra fatos com sequência lógica, conta histórias com começo, meio e fim, e expressa com clareza suas ideias e sentimentos. Já é possível perceber argumentação simples, especialmente para defender seus pontos de vista ou fazer pedidos mais elaborados. O contato visual durante a fala é natural e constante.`,
      expressaoNaoVerbal: `A criança utiliza a comunicação não verbal de forma integrada à linguagem verbal. Expressões faciais, gestos e postura são utilizados com intencionalidade, reforçando o que está sendo dito. Além disso, demonstra maior sensibilidade para interpretar emoções e reações dos outros, o que contribui para a empatia e para o desenvolvimento de habilidades sociais mais complexas.`
    }
  };
  