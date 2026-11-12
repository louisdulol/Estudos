import { LP_QUESTIONS } from './dataLp';
import { MAT_QUESTIONS } from './dataMat';
import type { Flashcard, Question, ReviewGuide } from './studyEngine';

export const QUESTIONS: Question[] = [...LP_QUESTIONS, ...MAT_QUESTIONS];

export const FLASHCARDS: Flashcard[] = [
  // =========================================================
  // LÍNGUA PORTUGUESA (30 flashcards: 3 por tópico do Edital 12.1)
  // =========================================================
  {
    id: 'fc-lp-01',
    discipline: 'LP',
    topicId: 'lp-ideias',
    front: 'Como diferenciar rapidamente FATO de OPINIÃO em textos da prova da ETE?',
    hint: 'Observe advérbios, adjetivos valorativos e dados verificáveis.',
    back: 'FATO é um dado observável ou verificável (datas, percentuais, acontecimentos objetivos). OPINIÃO traz juízo de valor pessoal (adjetivos subjetivos, advérbios avaliativos ou expressões como “com gosto”, “infelizmente”, “excelente”).',
    example: '“O motor parou em 2019” = fato · “Paguei o conserto com enorme alegria” = opinião.',
  },
  {
    id: 'fc-lp-02',
    discipline: 'LP',
    topicId: 'lp-ideias',
    front: 'O que significa INFERÊNCIA em questões de interpretação textual?',
    hint: 'Nem tudo está escrito literalmente, mas deve haver pista no texto.',
    back: 'Inferir é deduzir uma informação implícita a partir de pistas e evidências deixadas no texto — sem extrapolar com suposições externas nem inventar generalizações (“todos”, “nunca”, “único”).',
    example: 'Se o texto cita “trabalhar de graça desde outubro”, infere-se perda salarial proporcional, e não ausência literal de salário.',
  },
  {
    id: 'fc-lp-21',
    discipline: 'LP',
    topicId: 'lp-ideias',
    front: 'Qual a diferença entre PRESSUPOSTO e SUBENTENDIDO na leitura crítica?',
    hint: 'Um deixa marca linguística explícita; o outro depende da intenção contextual.',
    back: 'PRESSUPOSTO decorre logicamente de palavras ou verbos do enunciado (“Ele parou de fumar” pressupõe que fumava antes — é inegável linguisticamente).\nSUBENTENDIDO é uma insinuação construída pelo contexto (“Aqui está bem frio...” pode sugerir fechar a janela).',
    example: 'Na ETE, expressões como “voltou a estudar” ou “ainda mora em Recife” carregam pressupostos cobrados na leitura.',
  },
  {
    id: 'fc-lp-03',
    discipline: 'LP',
    topicId: 'lp-textualidade',
    front: 'Qual a diferença entre PARÁFRASE e PARÓDIA na intertextualidade?',
    hint: 'Ambas retomam um texto-fonte, mas com intenções opostas.',
    back: 'PARÁFRASE reescreve o texto original com outras palavras mantendo a ideia central e a orientação de sentido.\nPARÓDIA recria o texto-fonte subvertendo ou transformando seu sentido ou tom, geralmente com humor, ironia ou crítica.',
    example: 'Garfield: “Tinha uma cortina no meio do caminho” → subverte Drummond com humor = PARÓDIA.',
  },
  {
    id: 'fc-lp-04',
    discipline: 'LP',
    topicId: 'lp-textualidade',
    front: 'Diferencie Coesão Referencial, Coesão Lexical e Coesão por Elipse.',
    hint: 'Pronome vs. sinônimo/apelido vs. omissão recuperável.',
    back: '• Referencial: usa pronomes ou advérbios (“ela”, “esse”, “onde”) para retomar ou antecipar termos.\n• Lexical: substitui por sinônimo, hiperônimo ou apelido (“Recife” → “A Veneza brasileira”).\n• Elipse: omite termo já subentendido no contexto.',
    example: 'Em “Meu avô foi pintor; meu tio, médico”, o verbo omitido após a vírgula marca coesão por elipse.',
  },
  {
    id: 'fc-lp-22',
    discipline: 'LP',
    topicId: 'lp-textualidade',
    front: 'Qual a diferença entre ANÁFORA e CATÁFORA na coesão referencial?',
    hint: 'Pense na direção da seta: para trás ou para frente no texto.',
    back: 'ANÁFORA retoma um termo que já apareceu antes no texto (“Comprei um livro. Ele é ótimo” — uso típico de “esse/este” retomando e “ele/o qual”).\nCATÁFORA anuncia algo que ainda será citado (“Só quero isto: sua aprovação” — uso padrão de “este/isto”).',
    example: '“Isto me anima: passar na ETE Porto Digital” → “isto” é catafórico porque antecipa a explicação seguinte.',
  },
  {
    id: 'fc-lp-05',
    discipline: 'LP',
    topicId: 'lp-generos',
    front: 'Quais são as 5 sequências discursivas do Edital 12.1 e suas marcas típicas?',
    hint: 'Narração, Descrição, Injunção, Exposição, Argumentação.',
    back: '• Narração: fatos no tempo (pretérito perfeito/imperfeito).\n• Descrição: retrata ser/cenário (adjetivos e verbos de estado).\n• Injunção: instrui/ordena ações (imperativo — receita, edital, bula).\n• Exposição: apresenta dados/conceitos sem defender tese (notícia, verbete).\n• Argumentação: defende ponto de vista com provas (artigo de opinião, editorial).',
    example: '“Misture e leve ao forno por 30 minutos” = gênero receita / sequência injuntiva.',
  },
  {
    id: 'fc-lp-06',
    discipline: 'LP',
    topicId: 'lp-generos',
    front: 'Por que uma FÁBULA e uma NOTÍCIA pertencem a esferas distintas na prova da ETE?',
    back: 'A FÁBULA é narrativa literária ficcional e simbólica (animais personificados representando condutas humanas + moral). A NOTÍCIA é gênero jornalístico não literário voltado a fatos reais verificáveis com linguagem clara e objetiva.',
    example: 'La Fontaine (“A raposa e a cegonha”) vs. Reportagem sobre o Porto Digital (LP_ETE).',
  },
  {
    id: 'fc-lp-23',
    discipline: 'LP',
    topicId: 'lp-generos',
    front: 'O que diferencia CRÔNICA de ARTIGO DE OPINIÃO em vestibulinhos e na ETE?',
    hint: 'Foco no cotidiano com olhar subjetivo vs. defesa formal de tese.',
    back: 'CRÔNICA parte de um episódio simples do cotidiano com tom leve, narrativo, poético ou bem-humorado (ex.: Rubem Braga, Verissimo).\nARTIGO DE OPINIÃO traz tese explícita, argumentos lógicos e contra-argumentos sobre um tema polêmico atual.',
    example: 'Texto sobre a fila do ônibus narrado em 1ª pessoa com humor = crônica; texto defendendo cotas ou tecnologia = artigo de opinião.',
  },
  {
    id: 'fc-lp-07',
    discipline: 'LP',
    topicId: 'lp-semantica',
    front: 'Diferencie Homônimos Homófonos, Homógrafos e Perfeitos + Parônimos.',
    hint: 'Som igual vs. grafia igual vs. parecido.',
    back: '• Homófonos: mesmo som, grafia diferente (seção / sessão / cessão; conserto / concerto).\n• Homógrafos: mesma grafia, som diferente (o almoço [ô] / eu almoço [ó]).\n• Perfeitos: mesmo som e grafia (são [verbo] / são [sadio]).\n• Parônimos: parecidos no som e grafia (discrição / descrição; ratificar / retificar).',
    example: 'Ratificar = confirmar · Retificar = corrigir · Eminente = ilustre · Iminente = prestes a ocorrer.',
  },
  {
    id: 'fc-lp-08',
    discipline: 'LP',
    topicId: 'lp-semantica',
    front: 'O que é Hiperônimo vs. Hipônimo na progressão textual?',
    hint: 'Termo abrangente vs. termo específico.',
    back: 'HIPERÔNIMO tem sentido mais amplo (categoria geral: “frutas”, “veículos”, “tecnologias”).\nHIPÔNIMO tem sentido específico contido nessa categoria (“caju”, “bicicleta”, “software”).',
    example: '“Recife investe em computação e robótica. Essas áreas atraem jovens” → “áreas” é hiperônimo.',
  },
  {
    id: 'fc-lp-24',
    discipline: 'LP',
    topicId: 'lp-semantica',
    front: 'Como distinguir POLISSEMIA de AMBIGUIDADE estrutural ou lexical?',
    back: 'POLISSEMIA é a propriedade prevista no dicionário de uma mesma palavra assumir sentidos distintos conforme o contexto (“ponto de ônibus”, “ponto final”, “ponto na prova”).\nAMBIGUIDADE é a falha ou recurso estilístico em que uma frase permite duas leituras simultâneas indesejadas ou humorísticas.',
    example: '“O aluno encontrou o colega em sua sala” (sala de quem?) = ambiguidade pelo possessivo “sua”.',
  },
  {
    id: 'fc-lp-09',
    discipline: 'LP',
    topicId: 'lp-estilo',
    front: 'Diferencie ZEUGMA, ELIPSE e HIPÉRBATO com exemplos de prova.',
    hint: 'Omissão repetida vs. omissão geral vs. inversão de ordem.',
    back: '• Elipse: omissão de termo facilmente identificável sem ter aparecido antes (“[Nós] Saímos cedo”).\n• Zeugma: omissão de palavra QUE JÁ APARECEU antes no período.\n• Hipérbato: inversão brusca da ordem direta (sujeito + verbo + complemento).',
    example: '“O meu pai era paulista / Meu avô, [era] pernambucano” = zeugma. “Ouviram do Ipiranga as margens plácidas” = hipérbato.',
  },
  {
    id: 'fc-lp-10',
    discipline: 'LP',
    topicId: 'lp-estilo',
    front: 'Diferencie Metáfora, Comparação, Prosopopeia, Metonímia e Ironia.',
    back: '• Metáfora: transferência de sentido sem conectivo (“Seu sorriso é sol”).\n• Comparação: traz conectivo explícito (“é como sol”, “tal qual”).\n• Prosopopeia: dá ação humana a seres inanimados (“as casas espiam”).\n• Metonímia: substituição por proximidade (autor pela obra: “ler Drummond”).\n• Ironia: dizer o contrário do que se quer criticar.',
    example: '“As pedras da rua dormem cansadas” = prosopopeia.',
  },
  {
    id: 'fc-lp-25',
    discipline: 'LP',
    topicId: 'lp-estilo',
    front: 'Qual a diferença entre ANTÍTESE, PARADOXO (OXÍMORO) e CATACRESE?',
    back: '• Antítese: aproximação de ideias opostas que fazem sentido lógico (“doce e amargo”, “claro e escuro”).\n• Paradoxo: união contraditória que desafia a lógica literal (“ferida que dói e não se sente”).\n• Catacrese: metáfora desgastada usada por falta de palavra própria (“asa da xícara”, “dente de alho”, “embarcar no trem”).',
    example: '“Pé da mesa” e “folha de papel” são catacreses do cotidiano.',
  },
  {
    id: 'fc-lp-11',
    discipline: 'LP',
    topicId: 'lp-variedades',
    front: 'Quais os 4 eixos da Variação Linguística exigidos pelo Edital 12.1?',
    hint: 'Tempo, Lugar, Grupo Social e Situação.',
    back: '1) Histórica (Diacrônica): mudança no tempo (“Vossa Mercê”, “janotas”).\n2) Geográfica/Regional (Diatópica): diferenças regionais (“ocê”, “cabra”, “macaxeira/mandioca”).\n3) Social (Diastrática): gírias de grupo, faixa etária ou jargão profissional.\n4) Situacional (Diafásica): formalidade ou informalidade conforme o contexto.',
    example: 'Tirinhas de Chico Bento mostram variação regional/oral legítima, jamais “erro inaceitável”.',
  },
  {
    id: 'fc-lp-12',
    discipline: 'LP',
    topicId: 'lp-variedades',
    front: 'Por que “Para mim fazer o trabalho” desvia da norma-padrão escrita?',
    back: 'Antes de verbo no infinitivo atuando como sujeito, a norma-padrão exige o pronome reto EU (“para EU fazer”), pois “mim” é pronome oblíquo tônico e não exerce função de sujeito.',
    example: 'Certo: “Para eu estudar melhor” · “Entre mim e você” (sem verbo seguinte).',
  },
  {
    id: 'fc-lp-26',
    discipline: 'LP',
    topicId: 'lp-variedades',
    front: 'Qual é o conceito central de ADEQUAÇÃO LINGUÍSTICA em vez de “certo vs. errado”?',
    back: 'Não existe uma única variedade superior em todas as situações: a língua adequada ajusta o grau de formalidade ao interlocutor, ao gênero e ao suporte. Gíria com amigos é adequada; num edital ou requerimento, exige-se norma-padrão.',
    example: 'Preconceito linguístico ocorre quando se ridiculariza um falante pelo sotaque ou fala regional (Marcos Bagno).',
  },
  {
    id: 'fc-lp-13',
    discipline: 'LP',
    topicId: 'lp-morfologia',
    front: 'Justaposição vs. Aglutinação vs. Derivação Parassintética vs. Regressiva.',
    back: '• Justaposição: 2 radicais unidos sem perda fonética (sexta-feira, passatempo).\n• Aglutinação: 2 radicais fundidos com perda de som/letra (planalto = plano + alto; aguardente = água + ardente).\n• Parassíntese: prefixo e sufixo entram JUNTOS obrigatoriamente (envernizar — não há “enverniz” nem “vernizar”).\n• Regressiva: substantivo derivado da redução de um verbo (atacar → o ataque).',
    example: '“Deslealmente” permite “desleal” e “lealmente” → logo é prefixal e sufixal, NÃO parassintética.',
  },
  {
    id: 'fc-lp-14',
    discipline: 'LP',
    topicId: 'lp-morfologia',
    front: 'Como saber quando “meio” e “bastante” variam ou ficam invariáveis?',
    back: '• Modificando SUBSTANTIVO (numeral/pronome indefinido): VARIAM (“meia garrafa”, “bastantes exercícios”).\n• Modificando ADJETIVO, VERBO ou ADVÉRBIO (advérbios = “um pouco” / “muito”): FICAM INVARIÁVEIS (“Ela está meio cansada”, “Estudam bastante”).',
    example: 'Teste infalível de “bastante”: substitua por “muitos/muitas” → se ficar no plural, use “bastantes”.',
  },
  {
    id: 'fc-lp-27',
    discipline: 'LP',
    topicId: 'lp-morfologia',
    front: 'Como identificar Derivação Imprópria (Conversão) e Hibridismo?',
    back: '• Derivação Imprópria: mudança da classe gramatical da palavra sem alterar sua forma (“O andar era firme” — verbo virou substantivo; “falou claro” — adjetivo virou advérbio).\n• Hibridismo: palavra formada com elementos de línguas diferentes (“automóvel” = grego + latim; “burocracia” = francês + grego).',
    example: 'Colocar artigo antes de qualquer palavra (“o não”, “o porquê”) cria substantivo por derivação imprópria.',
  },
  {
    id: 'fc-lp-15',
    discipline: 'LP',
    topicId: 'lp-sintaxe',
    front: 'Quais são os conectivos subordinativos e coordenativos campeões da ETE?',
    back: '• Adversidade/Oposição: mas, porém, contudo, todavia, entretanto, no entanto.\n• Concessão: embora, conquanto, ainda que, mesmo que, posto que.\n• Causa: porque, já que, visto que, uma vez que, porquanto.\n• Conclusão: logo, portanto, por isso, pois (após o verbo).\n• Proporção: à medida que, à proporção que.',
    example: 'Atenção: “à medida que” (proporção) é diferente de “na medida em que” (causa).',
  },
  {
    id: 'fc-lp-16',
    discipline: 'LP',
    topicId: 'lp-sintaxe',
    front: 'Como distinguir “se” Partícula Apassivadora (PA) de Índice de Indeterminação (IIS)?',
    back: '• Com VTD ou VTDI: é PA e o verbo CONCORDA com o sujeito paciente (“Vendem-se casas” = Casas são vendidas).\n• Com VTI, VI ou Ligação: é IIS e o verbo fica SEMPRE na 3ª pessoa do singular (“Precisa-se de técnicos”, “Trata-se de temas atuais”).',
    example: 'Pegadinha clássica: “Tratam-se de regras” (ERRADO) → o certo é “Trata-se de regras”.',
  },
  {
    id: 'fc-lp-28',
    discipline: 'LP',
    topicId: 'lp-sintaxe',
    front: 'Como diferenciar Adjunto Adnominal de Complemento Nominal em 5 segundos?',
    back: '1) Se o termo preposicionado completa ADJETIVO ou ADVÉRBIO → é sempre Complemento Nominal (“útil ao projeto”, “longe de casa”).\n2) Se completa SUBSTANTIVO ABSTRATO: sentido ATIVO (pratica a ação) = Adjunto Adnominal (“a crítica do professor”); sentido PASSIVO (sofre a ação) = Complemento Nominal (“a leitura do edital”).',
    example: '“Invenção do cientista” (ele inventou = ativo = AA) vs. “Invenção da lâmpada” (foi inventada = passivo = CN).',
  },
  {
    id: 'fc-lp-17',
    discipline: 'LP',
    topicId: 'lp-pontuacao',
    front: 'Onde a vírgula é PROIBIDA e onde é OBRIGATÓRIA na norma-padrão?',
    back: 'PROIBIDA: separar sujeito do verbo; separar verbo de seu objeto direto ou indireto (com apenas uma vírgula).\nOBRIGATÓRIA: isolar vocativo, aposto explicativo, conjunções adversativas/conclusivas deslocadas (“porém”, “portanto”) e oração adverbial antes da principal.',
    example: 'Errado: “Todos os inscritos na ETE, farão a prova.” Certo: “Recife, capital pernambucana, recebeu os candidatos.”',
  },
  {
    id: 'fc-lp-18',
    discipline: 'LP',
    topicId: 'lp-pontuacao',
    front: 'Como a vírgula muda o sentido lógico das orações adjetivas?',
    back: '• COM vírgulas (Explicativa): generaliza a qualidade para TODOS os indivíduos do conjunto.\n• SEM vírgulas (Restritiva): delimita/separa APENAS uma parte do conjunto.',
    example: '“Os alunos, que estudaram, passaram” (todos estudaram) vs. “Os alunos que estudaram passaram” (só aqueles que estudaram).',
  },
  {
    id: 'fc-lp-29',
    discipline: 'LP',
    topicId: 'lp-pontuacao',
    front: 'Quando se deve ou se evita a vírgula antes da conjunção “e”?',
    back: '• MESMO sujeito: normalmente NÃO se usa vírgula (“Chegou e fez o simulado”).\n• SUJEITOS DIFERENTES: recomenda-se vírgula antes do “e” (“O fiscal entregou o caderno, e a turma iniciou a prova”).\n• POLISSÍNDETO / valor adversativo (“e” = mas): a vírgula torna-se expressiva e aceita.',
    example: '“Estudou muito, e não obteve sucesso” (“e” com valor adversativo = mas).',
  },
  {
    id: 'fc-lp-19',
    discipline: 'LP',
    topicId: 'lp-concordancia',
    front: 'Regência dos 5 verbos favoritos de prova: Assistir, Visar, Aspirar, Preferir e Implicar.',
    back: '• Assistir: ver/presenciar = VTI (pede “a”); ajudar/caber = VTD.\n• Visar: almejar/objetivar = VTI (pede “a”); mirar/dar visto = VTD.\n• Aspirar: desejar/almejar = VTI (pede “a”); respirar = VTD.\n• Preferir: prefere X “a” Y (nunca “do que”, nem “mais/muito”).\n• Implicar (acarretar): VTD — nunca use “implicar em”.',
    example: 'Correto: “O estudante visava à aprovação e preferia revisar a arriscar.”',
  },
  {
    id: 'fc-lp-20',
    discipline: 'LP',
    topicId: 'lp-concordancia',
    front: 'Como concordam os verbos impessoais (Haver = existir; Fazer = tempo)?',
    back: 'Ficam SEMPRE na 3ª pessoa do singular! Essa regra contamina inclusive o verbo auxiliar em locuções verbais (“Deve haver vagas”, “Vai fazer dois meses”).\nExceção: o verbo “existir” É pessoal e concorda normalmente (“Existem vagas”).',
    example: 'Errado: “Haviam muitos candidatos” / “Devem fazer duas horas”. Certo: “Havia…” / “Deve fazer…”.',
  },
  {
    id: 'fc-lp-30',
    discipline: 'LP',
    topicId: 'lp-concordancia',
    front: 'Quais são os 3 casos proibidos e os 3 casos obrigatórios de CRASE?',
    back: 'PROIBIDA antes de: palavra masculina (“a pé”), verbo no infinitivo (“a estudar”), e “a” singular antes de palavra no plural (“a alunas”).\nOBRIGATÓRIA: termo regente pede “a” + substantivo feminino aceita artigo “a”; locuções adverbiais/prepositivas femininas (“às vezes”, “à medida que”, “à vista”); “àquela(e)”.',
    example: 'Troque a palavra feminina por uma masculina: se virar “AO”, use “À” (“Fui à escola” ↔ “Fui ao colégio”).',
  },

  // =========================================================
  // MATEMÁTICA (30 flashcards: 3 por tópico do Edital 12.2, com KaTeX)
  // =========================================================
  {
    id: 'fc-mat-01',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    front: 'Qual a diferença entre $(-2)^2$ e $-2^2$, e como aproximar $\\sqrt{54}$ até décimos?',
    back: '$(-2)^2 = (-2)\\cdot(-2) = +4$, enquanto $-2^2 = -(2\\cdot 2) = -4$.\nPara aproximar $\\sqrt{N}$ até décimos: identifique os quadrados inteiros vizinhos ($7^2 = 49 < 54 < 8^2 = 64$) e teste décimos intermediários ($7{,}3^2 = 53{,}29$ vs. $7{,}4^2 = 54{,}76$).',
    example: '$|54 - 53{,}29| = 0{,}71 < |54{,}76 - 54| = 0{,}76 \\implies \\sqrt{54} \\approx 7{,}3$.',
  },
  {
    id: 'fc-mat-02',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    front: 'Como somar ou subtrair radicais diferentes, como $\\sqrt{75} + \\sqrt{48}$?',
    back: 'Fatore cada radicando em fatores primos, extraia os quadrados perfeitos até obter radicais semelhantes (mesmo índice e mesmo radicando) e então some apenas os coeficientes externos.',
    example: '$\\sqrt{25\\cdot 3} + \\sqrt{16\\cdot 3} = 5\\sqrt{3} + 4\\sqrt{3} = 9\\sqrt{3}$.',
  },
  {
    id: 'fc-mat-21',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    front: 'Como obter a fração geratriz de uma dízima periódica simples e composta?',
    back: '• Dízima simples ($0{,}aaa\\ldots$): numerador = período; denominador = um $9$ para cada algarismo do período. Ex.: $0{,}4545\\ldots = \\frac{45}{99} = \\frac{5}{11}$.\n• Dízima composta ($0{,}abbb\\ldots$): numerador = (parte não periódica seguida do período) $-$ (parte não periódica); denominador = tantos $9$ quantos algarismos no período seguidos de tantos $0$ quantos no anteperíodo.',
    example: '$0{,}2777\\ldots = \\frac{27 - 2}{90} = \\frac{25}{90} = \\frac{5}{18}$.',
  },
  {
    id: 'fc-mat-03',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    front: 'Tabela essencial de conversões entre Volume ($\\text{m}^3$), Capacidade ($\\text{L}$) e Área ($\\text{m}^2$).',
    back: '• $1\\text{ m}^3 = 1.000\\text{ dm}^3 = 1.000\\text{ litros}$.\n• $1\\text{ dm}^3 = 1\\text{ L} = 1.000\\text{ mL} = 1.000\\text{ cm}^3$.\n• Superfície/Área: cada degrau multiplica ou divide por $100$ ($1\\text{ m}^2 = 10.000\\text{ cm}^2$).\n• Volume: cada degrau multiplica ou divide por $1.000$.',
    example: 'Tanque de $2\\text{ m} \\times 1{,}5\\text{ m} \\times 0{,}8\\text{ m} = 2{,}4\\text{ m}^3 = 2.400\\text{ L}$.',
  },
  {
    id: 'fc-mat-04',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    front: 'Como converter $\\text{km/h} \\leftrightarrow \\text{m/s}$ e unidades de comprimento rapidamente?',
    back: '• Comprimento ($\\text{km - hm - dam - m - dm - cm - mm}$): cada passo multiplica ou divide por $10$.\n• Velocidade: $\\text{km/h} \\div 3{,}6 = \\text{m/s}$ e $\\text{m/s} \\times 3{,}6 = \\text{km/h}$.',
    example: '$3{,}6\\text{ km} = 3.600\\text{ m}$ · $72\\text{ km/h} = \\frac{72}{3{,}6} = 20\\text{ m/s}$.',
  },
  {
    id: 'fc-mat-22',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    front: 'Como converter frações de hora em minutos sem cometer o erro decimal?',
    back: 'Uma hora tem $60$ minutos, não $100$! Para converter a parte decimal de horas em minutos, multiplique os décimos/centésimos por $60$.\nPara converter minutos para horas, divida os minutos por $60$.',
    example: '$2{,}4\\text{ h} = 2\\text{ h} + 0{,}4 \\times 60\\text{ min} = 2\\text{ h } 24\\text{ min}$ (jamais $2\\text{ h } 40\\text{ min}$!).',
  },
  {
    id: 'fc-mat-05',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    front: 'Como fazer Divisão INVERSAMENTE Proporcional a $(a, b, c)$?',
    back: '1) Inverta os números: $\\frac{1}{a}, \\frac{1}{b}, \\frac{1}{c}$.\n2) Calcule o $\\text{MMC}(a, b, c)$ e reescreva as frações com mesmo denominador; os numeradores dão as partes inteiras proporcionais $(p_1, p_2, p_3)$.\n3) Divida o total pela soma $(p_1 + p_2 + p_3)$ para achar $1$ parte ($k$).',
    example: 'Inverso de $(2, 4, 6)$ com MMC $= 12$: $\\frac{6}{12}, \\frac{3}{12}, \\frac{2}{12} \\implies (6k, 3k, 2k)$. O menor índice ($2$) ganha a maior parte!',
  },
  {
    id: 'fc-mat-06',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    front: 'Como resolver sistemas de razão usando a constante de proporcionalidade $k$?',
    back: 'Se $\\frac{x}{y} = \\frac{a}{b}$, escreva $x = a\\cdot k$ e $y = b\\cdot k$. Substitua diretamente na equação da soma ou diferença para encontrar $k$ em uma única etapa.',
    example: '$\\frac{x}{y} = \\frac{3}{5}$ e $x + y = 32 \\implies 3k + 5k = 32 \\implies k = 4 \\implies x = 12,\\; y = 20$.',
  },
  {
    id: 'fc-mat-23',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    front: 'Qual a pegadinha de ESCALA CARTOGRÁFICA quando o comando pergunta ÁREA ou VOLUME?',
    back: 'Na escala linear $1 : E$, o comprimento real vale $E$ vezes o desenho.\n• Em ÁREAS ($\\text{cm}^2 \\to \\text{m}^2$): o fator fica elevado ao QUADRADO ($E^2$).\nRegra prática infalível: converta CADA lado para metros antes de multiplicar largura $\\times$ comprimento.',
    example: 'Na escala $1:200$, uma sala de $4\\text{ cm} \\times 5\\text{ cm}$ mede $8\\text{ m} \\times 10\\text{ m} = 80\\text{ m}^2$ reais.',
  },
  {
    id: 'fc-mat-07',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    front: 'Qual o método seguro passo a passo para Regra de Três Composta?',
    back: '1) Organize os dados em tabela.\n2) Isole a razão da incógnita $x$ antes do sinal de igualdade ($\\frac{\\text{conhecido}}{x} = \\ldots$).\n3) Compare CADA outra grandeza isoladamente com a coluna de $x$: se for Direta, mantém a fração; se for Inversa, inverte a fração e multiplica todas à direita.',
    example: 'Mais operários $\\to$ menos dias (Inversa: inverte a fração!). Mais tarefas $\\to$ mais dias (Direta: mantém!).',
  },
  {
    id: 'fc-mat-08',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    front: 'Por que “12 técnicos concluem em 10 dias” NÃO se multiplica em cruz?',
    back: 'Porque técnicos e dias são grandezas INVERSAMENTE proporcionais: o PRODUTO (esforço total em homens$\\cdot$dia), e não a razão, permanece constante! Logo, multiplica-se em linha reta: $12 \\times 10 = 8 \\times d$.',
    example: '$12 \\times 10 = 120$ homens$\\cdot$dia $\\implies$ com $8$ técnicos, $d = \\frac{120}{8} = 15$ dias.',
  },
  {
    id: 'fc-mat-24',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    front: 'Como resolver rápido problemas de TORNEIRAS ou PRODUTIVIDADE CONJUNTA?',
    back: 'Some as vazões por unidade de tempo ($\\frac{1}{T_{\\text{total}}} = \\frac{1}{T_1} + \\frac{1}{T_2}$)!\nSe uma enche em $4\\text{ h}$ ($\\frac{1}{4}$ por hora) e outra em $6\\text{ h}$ ($\\frac{1}{6}$ por hora), juntas enchem $\\frac{1}{4} + \\frac{1}{6} = \\frac{5}{12}$ por hora.',
    example: 'Invertendo a fração combinada $\\frac{5}{12}$ por hora $\\implies$ tempo total $= \\frac{12}{5} = 2{,}4\\text{ h} = 2\\text{ h } 24\\text{ min}$.',
  },
  {
    id: 'fc-mat-09',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    front: 'Como usar o fator multiplicativo em aumentos e descontos sucessivos?',
    back: '• Aumento de $i\\%$: multiplique por $(1 + \\frac{i}{100})$.\n• Desconto de $d\\%$: multiplique por $(1 - \\frac{d}{100})$.\n• Variação acumulada = produto dos fatores $- 1$.',
    example: '$+20\\%$ e $-20\\%$: $1{,}20 \\times 0{,}80 = 0{,}96 \\implies$ queda líquida de $4\\%$ (nunca volta a $0\\%$!).',
  },
  {
    id: 'fc-mat-10',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    front: 'Como achar o preço original ANTES de um aumento de 15% ou desconto de 20%?',
    back: 'Faça a operação inversa: DIVIDA o preço final pelo fator correspondente!\n• Após $+15\\%$: $\\text{original} = \\frac{\\text{final}}{1{,}15}$.\n• Após $-20\\%$: $\\text{original} = \\frac{\\text{final}}{0{,}80}$.',
    example: 'Pagou R$ 276,00 após $+15\\%$ $\\implies \\frac{276}{1{,}15} =$ R$ 240,00 (nunca tire $15\\%$ de $276$!).',
  },
  {
    id: 'fc-mat-25',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    front: 'Qual a fórmula rápida de variação percentual entre valor inicial ($V_i$) e final ($V_f$)?',
    back: '$\\text{Variação} = \\frac{V_f - V_i}{V_i} \\times 100\\%$.\nO denominador é SEMPRE o valor de referência INICIAL (de onde partiu), nunca o valor final!',
    example: 'Subiu de R$ 80,00 para R$ 100,00: $\\frac{100 - 80}{80} = \\frac{20}{80} = 0{,}25 = +25\\%$. (Se cair de $100$ para $80$, cai $20\\%$!).',
  },
  {
    id: 'fc-mat-11',
    discipline: 'MAT',
    topicId: 'mat-medias',
    front: 'Quais são as fórmulas das 4 médias do Edital 12.2?',
    back: '• Aritmética: $M_a = \\frac{x_1 + x_2 + \\dots + x_n}{n}$\n• Ponderada: $M_p = \\frac{\\sum (x_i \\cdot p_i)}{\\sum p_i}$\n• Geométrica: $M_g = \\sqrt[n]{x_1 \\cdot x_2 \\cdots x_n}$ (para $2$ termos: $\\sqrt{a\\cdot b}$)\n• Harmônica ($2$ termos): $M_h = \\frac{2ab}{a + b}$ (geral: $\\frac{n}{\\sum \\frac{1}{x_i}}$)',
    example: 'Ida a $40\\text{ km/h}$ e volta a $60\\text{ km/h}$ na mesma distância: $M_h = \\frac{2\\cdot 40\\cdot 60}{40 + 60} = 48\\text{ km/h}$.',
  },
  {
    id: 'fc-mat-12',
    discipline: 'MAT',
    topicId: 'mat-medias',
    front: 'Como achar um valor adicionado ou removido sabendo apenas a mudança na média?',
    back: 'Converta sempre cada média em SOMA TOTAL usando $\\text{Soma} = \\text{Média} \\times \\text{Quantidade}$. A diferença entre a soma nova e a soma antiga revela o valor adicionado ou retirado.',
    example: '5 alunos com média $14$ ($\\Sigma = 70$) $\\to$ 6 alunos com média $14{,}5$ ($\\Sigma = 87$) $\\implies$ novo aluno $= 87 - 70 = 17$.',
  },
  {
    id: 'fc-mat-26',
    discipline: 'MAT',
    topicId: 'mat-medias',
    front: 'Qual a desigualdade clássica entre as médias de números positivos distintos?',
    back: 'Para números positivos distintos, vale sempre a ordem:\n$$M_h < M_g < M_a$$\nSe todos os números forem iguais, as três médias coincidem ($M_h = M_g = M_a$).',
    example: 'Para $4$ e $16$: $M_h = \\frac{2\\cdot 4\\cdot 16}{20} = 6{,}4 < M_g = \\sqrt{64} = 8 < M_a = \\frac{4 + 16}{2} = 10$.',
  },
  {
    id: 'fc-mat-13',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    front: 'Quais são os 3 Produtos Notáveis e as 3 Fatorações indispensáveis na ETE?',
    back: '• $(a + b)^2 = a^2 + 2ab + b^2$\n• $(a - b)^2 = a^2 - 2ab + b^2$\n• $(a + b)(a - b) = a^2 - b^2$\n• Fator comum: $ax + ay = a(x + y)$\n• Agrupamento: $ax + ay + bx + by = (a + b)(x + y)$\n• Trinômio quadrado perfeito $\\leftrightarrow (a \\pm b)^2$.',
    example: '$\\frac{105^2 - 95^2}{20} = \\frac{(105 + 95)(105 - 95)}{20} = \\frac{200 \\cdot 10}{20} = 100$.',
  },
  {
    id: 'fc-mat-14',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    front: 'Se $x + y = 10$ e $xy = 21$, como calcular $x^2 + y^2$ sem achar $x$ e $y$?',
    back: 'Eleve a soma $(x + y)$ ao quadrado para fazer aparecer $x^2 + y^2$ e $2xy$: $(x + y)^2 = x^2 + 2xy + y^2$. Substitua os valores dados e isole $x^2 + y^2$.',
    example: '$10^2 = x^2 + y^2 + 2(21) \\implies x^2 + y^2 = 100 - 42 = 58$.',
  },
  {
    id: 'fc-mat-27',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    front: 'Por que NÃO se pode simplificar somas diretamente em frações algébricas?',
    back: 'Em $\\frac{x^2 - 9}{x^2 - 6x + 9}$, cancelar $x^2$ com $x^2$ é erro grave porque $x^2$ está somando/subtraindo! Só é válido simplificar FATORES que multiplicam todo o numerador e todo o denominador após fatoração completa.',
    example: '$\\frac{(x - 3)(x + 3)}{(x - 3)^2} = \\frac{x + 3}{x - 3}$ (para $x \\neq 3$).',
  },
  {
    id: 'fc-mat-15',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    front: 'Qual o método mais rápido para sistemas de contagem (rodas/patas/cédulas)?',
    back: 'Monte o sistema ($x + y = \\text{total de itens}$ e $p_1 x + p_2 y = \\text{total de partes}$) e, antes de subtrair, simplifique a 2ª equação dividindo pelo menor coeficiente!',
    example: '$b + s = 30$ e $2b + 4s = 84$ ($\\div 2 \\implies b + 2s = 42$) $\\implies$ subtraindo: $s = 12,\\; b = 18$.',
  },
  {
    id: 'fc-mat-16',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    front: 'Cuidados na equação do 1º grau com denominadores numéricos.',
    back: 'Calcule o MMC de TODOS os denominadores (incluindo o denominador $1$ dos termos inteiros!), aplique nos dois lados da igualdade e só então elimine os denominadores. Se houver sinal de menos antes de fração, aplique distributiva em todo o numerador!',
    example: 'Em $\\frac{x+1}{2} + \\frac{x+4}{3} = 6$, o termo $6$ vira $\\frac{36}{6}$ antes de cortar o $6$!',
  },
  {
    id: 'fc-mat-28',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    front: 'Quando uma inequação do 1º grau INVERTE o sinal da desigualdade?',
    back: 'Sempre que multiplicarmos ou dividirmos ambos os membros da inequação por um número NEGATIVO (ex.: multiplicar por $-1$), o sinal de desigualdade ($<, >, \\le, \\ge$) INVERTE de sentido!',
    example: '$-2x < 10 \\implies$ dividindo por $-2$: $x > -5$.',
  },
  {
    id: 'fc-mat-17',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    front: 'Fórmulas fundamentais de Polígonos Convexos de $n$ lados.',
    back: '• Soma dos ângulos internos: $S_i = (n - 2)\\cdot 180^\\circ$\n• Soma dos ângulos externos: $S_e = 360^\\circ$ (sempre!)\n• Total de diagonais: $d = \\frac{n(n - 3)}{2}$\n• Polígono regular: $a_i + a_e = 180^\\circ$ e $a_e = \\frac{360^\\circ}{n}$.',
    example: 'Octógono ($n = 8$): $S_i = 1.080^\\circ$, $d = \\frac{8\\cdot 5}{2} = 20$, $a_e = 45^\\circ$, $a_i = 135^\\circ$.',
  },
  {
    id: 'fc-mat-18',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    front: 'Ângulos em retas paralelas cortadas por transversal ($r \\parallel s$): iguais ou $180^\\circ$?',
    back: '• Correspondentes, Alternos internos, Alternos externos e Opostos pelo vértice (OPV): SÃO CONGRUENTES (iguais).\n• Colaterais internos, Colaterais externos e Adjacentes suplementares: SOMAM $180^\\circ$.',
    example: 'Regra visual rápida: todos os ângulos agudos entre si são iguais; os obtusos entre si são iguais; $1$ agudo $+\\;1$ obtuso $= 180^\\circ$.',
  },
  {
    id: 'fc-mat-29',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    front: 'Complemento, Suplemento e Replemento de um ângulo $x$: qual a diferença?',
    back: '• Complemento de $x$: $90^\\circ - x$ (soma $90^\\circ$).\n• Suplemento de $x$: $180^\\circ - x$ (soma $180^\\circ$).\n• Replemento de $x$: $360^\\circ - x$ (soma $360^\\circ$).',
    example: 'Se o suplemento é o triplo do complemento: $180^\\circ - x = 3(90^\\circ - x) \\implies x = 45^\\circ$.',
  },
  {
    id: 'fc-mat-19',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    front: 'Definição e Ponto de Encontro das 3 Cevianas do Edital (+ Mediatriz).',
    back: '• MEDIANA (vértice ao ponto médio do lado oposto) $\\to$ BARICENTRO (divide a mediana na razão $2:1$).\n• BISSETRIZ (divide o ângulo interno ao meio) $\\to$ INCENTRO (equidistante dos lados).\n• ALTURA (perpendicular $90^\\circ$ ao lado oposto) $\\to$ ORTOCENTRO.\n• MEDIATRIZ (perpendicular pelo ponto médio do lado) $\\to$ CIRCUNCENTRO.',
    example: 'No triângulo equilátero, mediana, bissetriz e altura relativas a cada lado coincidem no mesmo segmento!',
  },
  {
    id: 'fc-mat-20',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    front: 'Lei Angular de Tales e Razão de Semelhança ($k$ vs. $k^2$).',
    back: '• Lei Angular de Tales: a soma dos ângulos internos é $180^\\circ$, e o ângulo externo vale a soma dos $2$ internos não adjacentes ($e = \\hat{A} + \\hat{B}$).\n• Semelhança: se os lados correspondentes têm razão $k$, os perímetros têm razão $k$, mas as ÁREAS têm razão $k^2$.',
    example: 'Se um triângulo tem lados dobrados ($k = 2$), sua área fica multiplicada por $2^2 = 4$ vezes!',
  },
  {
    id: 'fc-mat-30',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    front: 'Condição de existência dos lados de um triângulo (Desigualdade Triangular).',
    back: 'Para três segmentos $a, b, c$ formarem um triângulo, a medida de qualquer lado deve ser estritamente MENOR que a soma dos outros dois e MAIOR que o módulo da diferença entre eles: $|b - c| < a < b + c$.',
    example: 'Segmentos $3\\text{ cm}$, $4\\text{ cm}$ e $8\\text{ cm}$ NÃO formam triângulo, pois $3 + 4 = 7 < 8$.',
  },
];

export const REVIEW_GUIDES: ReviewGuide[] = [
  // =========================================================
  // LÍNGUA PORTUGUESA (10 aulas completas do Edital 12.1)
  // =========================================================
  {
    topicId: 'lp-ideias',
    discipline: 'LP',
    editalRef: 'Edital 12.1 · Tópico 1',
    title: 'Ideias principais, secundárias e inferência',
    subtitle: 'Como ler o texto no padrão ETE diferenciando tese, fato, opinião, pressuposto e extrapolação',
    estimatedMinutes: 14,
    editalSubtopics: [
      'Compreensão global e identificação da ideia principal e ideias secundárias',
      'Informações explícitas vs. implícitas (inferência válida)',
      'Distinção entre fato verificável e opinião valorativa',
      'Pressupostos linguísticos e subentendidos contextuais',
    ],
    coreSummary:
      'Metade dos erros de Língua Portuguesa na ETE não vem de falta de vocabulário, mas de confundir compreensão (o que está literalmente no texto) com extrapolação (o que o candidato acha ou generaliza além do texto). Dominar o método dos 3 níveis de leitura — localizar a tese, separar fatos de juízos de valor e testar inferências com evidência textual — garante segurança nas questões longas da prova.',
    rules: [
      {
        label: '1. Ideia Central (Tese) vs. Ideias Secundárias',
        detail:
          'A ideia principal responde “o que este texto defende ou informa como um todo?” e costuma aparecer na frase-tópico do 1º parágrafo e ser retomada na conclusão. Exemplos numéricos, citações de especialistas e casos particulares são ideias secundárias que apenas comprovam a tese — se uma alternativa reduz o texto a um único exemplo, ela peca por restrição.',
      },
      {
        label: '2. Fato Objetivo vs. Opinião Valorativa',
        detail:
          'Fato é um evento verificável no mundo real (datas, medidas, dados estatísticos do IBGE, ações concretas como “em 2014 o CO₂ atingiu 397,7 ppm”). Opinião carrega julgamento pessoal, emoção ou avaliação por meio de adjetivos subjetivos (“incrível”, “deletéria”), advérbios modalizadores (“infelizmente”, “felizmente”) ou verbos opinativos (“acredito”, “parece”).',
      },
      {
        label: '3. Inferência Válida vs. Extrapolação',
        detail:
          'Inferir é concluir algo não dito com todas as letras usando pistas concretas do texto (Koch & Elias). Já extrapolar é inventar consequências não sustentadas (ex.: ler “as mulheres trabalharam de graça a partir de outubro como cálculo de desigualdade” e marcar “não receberão salário em novembro”). Desconfie de quantificadores absolutos como “sempre”, “nunca”, “todos”, “apenas”.',
      },
      {
        label: '4. Pressupostos e Subentendidos (Fiorin & Savioli)',
        detail:
          'O pressuposto é uma ideia implícita garantida por uma marca gramatical explícita (ex.: “O aluno voltou a revisar o edital” pressupõe que revisava antes e interrompeu). O subentendido nasce da situação comunicativa sem marca fixa, permitindo ao falante dizer algo nas entrelinhas.',
      },
    ],
    workedExamples: [
      {
        title: 'Exemplo 1 · Desigualdade salarial (modelo real LP_ETE)',
        problem:
          'Trecho: “No Brasil, devido à desigualdade de salários entre homens e mulheres, elas já estão trabalhando ‘de graça’ desde o dia 19 de outubro de 2015, segundo cálculo baseado no IBGE.” Qual alternativa está correta sem extrapolar?',
        steps: [
          'Identifique as aspas em “de graça”: trata-se de sentido figurado/matemático, não de suspensão literal de pagamento.',
          'Elimine alternativas extremas: “não receberão salário em novembro” (erro literal) e “todas ganham mais” (contradição direta).',
          'Verifique o núcleo causal (“devido à desigualdade de salários”): a remuneração anual feminina sofre redução proporcional comparada à masculina.',
        ],
        conclusion: 'Resposta correta: há desigualdade salarial que reduz proporcionalmente a remuneração feminina ao longo do ano.',
      },
      {
        title: 'Exemplo 2 · Fato vs. Opinião e Pressuposto em Crônica',
        problem:
          'Considere o período: “Embora o relógio do avô não marcasse as horas desde 1998, paguei o conserto caro com imenso prazer, pois sua voz parecia voltar ao tique-taque.” Separe fato, opinião e pressuposto.',
        steps: [
          'Fato verificável: o relógio não funcionava desde 1998 e houve pagamento pelo conserto.',
          'Opinião / subjetividade: “imenso prazer” (avaliação afetiva) e “sua voz parecia voltar” (impressão pessoal).',
          'Pressuposto pelo verbo “voltar”: o tique-taque existia antes de 1998.',
        ],
        conclusion: 'A motivação para gastar no conserto é afetiva (memória do avô), inferível pela associação entre o som do relógio e a voz familiar.',
      },
    ],
    commonMistakes: [
      {
        wrongThought: '“Esta alternativa tem palavras exatas do parágrafo, então deve ser a certa.”',
        correction: 'Cuidado! A banca da ETE recorta termos reais do texto e altera um conectivo ou negação (“apenas”, “não”, “jamais”). Confira sempre a relação lógica completa.',
      },
      {
        wrongThought: '“Eu sei pela TV que a situação é assim na vida real, vou marcar.”',
        correction: 'Em interpretação textual responde-se estritamente conforme o texto apresentado, mesmo quando o conhecimento de mundo for maior.',
      },
    ],
    eteTrap:
      'Alternativas que interpretam ao pé da letra expressões entre aspas ou metáforas e opções contaminadas por generalizações absolutas (“sempre”, “todas”, “única causa”).',
    selfExplanationPrompt: {
      question: 'Por que trocar “uma parte significativa” por “todos os casos” torna falsa uma alternativa de interpretação?',
      modelAnswer:
        'Porque generalizações absolutas ampliam indevidamente o escopo sustentado pelo texto (falácia de extrapolação), invalidando a correspondência fiel às evidências apresentadas.',
    },
    bookReferences: [
      'Ingedore Villaça Koch & Vanda Maria Elias — Ler e Compreender: os sentidos do texto (Contexto)',
      'José Luiz Fiorin & Francisco Platão Savioli — Para Entender o Texto: leitura e redação (Ática)',
    ],
    externalLinks: [
      {
        title: 'Compreensão e Interpretação de Textos — conceitos, fatos e inferências',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/compreensao-e-interpretacao-de-textos/',
      },
      {
        title: 'Videoaula · Como resolver questões de Interpretação de Textos sem extrapolar',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=XsN0e_xPyNI',
      },
    ],
    activeCheckPrompt:
      'Em um artigo sobre atenção dividida que traz “Estudantes têm sensação de produtividade elevada, mas desempenho inferior”, qual trecho expressa o ponto central crítico?',
    activeCheckOptions: [
      'Que a sensação subjetiva de produtividade corresponde à eficiência real.',
      'Que alternar tarefas digitais compromete o desempenho real apesar da sensação de agilidade.',
      'Que é impossível usar computadores para estudar em casa.',
    ],
    activeCheckCorrect: 1,
    activeCheckWhy:
      'O conectivo adversativo “mas” marca o contraste entre aparência subjetiva (sensação de produtividade) e resultado objetivo comprovado (desempenho inferior).',
  },

  {
    topicId: 'lp-textualidade',
    discipline: 'LP',
    editalRef: 'Edital 12.1 · Tópico 2',
    title: 'Textualidade: coesão, coerência e intertextualidade',
    subtitle: 'Domine retomadas pronominais, elipse, substituição lexical e a diferença decisiva entre paráfrase e paródia',
    estimatedMinutes: 15,
    editalSubtopics: [
      'Coesão referencial (anáfora, catáfora, pronomes relativos e pessoais)',
      'Coesão sequencial por conjunções e operadores argumentativos',
      'Coesão lexical (sinônimos, hiperônimos, epítetos) e coesão por elipse',
      'Coerência textual e continuidade temática',
      'Intertextualidade: paráfrase, paródia, alusão, citação e epígrafe',
    ],
    coreSummary:
      'Para um conjunto de frases formar um texto verdadeiro, precisa de coesão (ligação gramatical entre as partes) e coerência (lógica global de sentido). Na prova real da ETE (como na questão de Camões/Recife/Joana e nas tiras da Mona Lisa e Garfield), a banca cobra lado a lado a identificação do mecanismo coesivo e a classificação exata da intertextualidade.',
    rules: [
      {
        label: '1. Coesão Referencial (Anáfora vs. Catáfora)',
        detail:
          'Estabelece pontes por meio de pronomes (ele, o qual, cuja, esse, isto) e advérbios pronominais (lá, onde). Na anáfora, aponta para trás (“Recife cresce; ela atrai empresas”); na catáfora, antecipa algo que ainda virá (“Só desejo isto: a sua aprovação”). Atenção: “onde” retoma exclusivamente lugar físico!',
      },
      {
        label: '2. Coesão Lexical e Coesão por Elipse',
        detail:
          'A coesão lexical evita repetições substituindo o termo por sinônimo, hiperônimo ou expressão equivalente (“Recife” → “A Veneza brasileira”; “caju” → “essa fruta”). A coesão por elipse apaga um termo perfeitamente recuperável pelo contexto (“Joana leu o edital; Marcos, [leu] as provas”).',
      },
      {
        label: '3. Coesão Sequencial (Conexão Lógica)',
        detail:
          'Feita por conjunções e preposições que articulam o avanço das ideias: causa (“como”, “visto que”), oposição (“entretanto”), conclusão (“portanto”). Trocar uma conjunção sem checar o nexo destrói a coerência do parágrafo.',
      },
      {
        label: '4. Intertextualidade: Paráfrase vs. Paródia vs. Citação vs. Alusão',
        detail:
          'Paráfrase: reescreve com outras palavras mantendo o sentido original. Paródia: imita estrutura conhecida subvertendo ou invertendo o sentido com humor, sátira ou crítica. Citação: reproduz literalmente entre aspas indicando a fonte. Alusão: faz referência indireta/velada a obra, fato histórico ou mito sem copiá-lo.',
      },
    ],
    workedExamples: [
      {
        title: 'Exemplo 1 · Sequência de mecanismos coesivos (padrão LP_ETE Q17)',
        problem:
          'Identifique os mecanismos nos períodos: (1) “No mar, tanta tormenta e tanto dano”; (2) “Como não conseguiu entrar, voltou”; (3) “Recife destaca-se; a Veneza brasileira cresce”; (4) “Joana saiu. Ela não estava bem.”',
        steps: [
          'Em (1), há omissão do verbo “há/existe” no verso camoniano → coesão por elipse.',
          'Em (2), “Como” inicial equivale a “porque/já que” → coesão por conjunção.',
          'Em (3), “a Veneza brasileira” substitui “Recife” por equivalência cultural/vocabular → coesão lexical.',
          'Em (4), o pronome pessoal “Ela” retoma “Joana” → coesão referencial anafórica.',
        ],
        conclusion: 'Respectivamente: coesão por elipse, por conjunção, lexical e referencial.',
      },
      {
        title: 'Exemplo 2 · Releitura irreverente da Mona Lisa e Garfield vs. Drummond',
        problem:
          'Um grafite contemporâneo retrata a Mona Lisa de óculos escuros e fones de ouvido; em outra tira, um gato diz “Tinha uma cortina no meio do caminho...”. Que tipo de intertextualidade ocorre nos dois casos?',
        steps: [
          'Verifique a relação com a obra-fonte (Leonardo da Vinci e o poema “No meio do caminho”, de Drummond).',
          'Note se há preservação séria da tese original (paráfrase) ou subversão com humor/irreverência (paródia).',
          'Em ambos os casos há recriação irônica/bem-humorada alterando o tom clássico original.',
        ],
        conclusion: 'Nos dois casos trata-se de paródia explícita.',
      },
    ],
    commonMistakes: [
      {
        wrongThought: '“Recife → A Veneza brasileira é coesão referencial porque substitui o nome.”',
        correction: 'Na classificação cobrada pela banca da ETE (Koch), substituição por outro substantivo/sinônimo/apelido chama-se coesão LEXICAL; a REFERENCIAL usa pronomes/advérbios.',
      },
      {
        wrongThought: '“O estudante conversou com o professor sobre seu trabalho” tem referente claro.',
        correction: 'O possessivo “seu” gera ambiguidade referencial (trabalho do estudante ou do professor?), prejudicando a clareza.',
      },
    ],
    eteTrap:
      'Confundir paráfrase (preserva o sentido original) com paródia (subverte o sentido com humor ou crítica) ou confundir coesão lexical (substituição por epíteto/sinônimo) com coesão por elipse (apagamento).',
    selfExplanationPrompt: {
      question: 'Como testar em 5 segundos se um texto que retoma um poema clássico é uma paráfrase ou uma paródia?',
      modelAnswer:
        'Pergunte se o novo texto defende a mesma mensagem/tom do original com novas palavras (paráfrase) ou se torce a estrutura famosa para provocar humor, sátira ou crítica em sentido oposto (paródia).',
    },
    bookReferences: [
      'Ingedore Villaça Koch — A Coesão Textual / A Coerência Textual (Contexto)',
      'Ingedore Villaça Koch, Anna Christina Bentes & Mônica Cavalcante — Intertextualidade: diálogos possíveis (Cortez)',
    ],
    externalLinks: [
      {
        title: 'Coesão e Coerência — tipos, exemplos e exercícios',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/coesao-e-coerencia/',
      },
      {
        title: 'Intertextualidade: paráfrase, paródia, citação e alusão',
        source: 'Escola Kids / UOL',
        kind: 'artigo',
        url: 'https://escolakids.uol.com.br/portugues/intertextualidade.htm',
      },
      {
        title: 'Videoaula · Coesão, Coerência e Intertextualidade na prática',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=IIU6i3UXyi0',
      },
    ],
    activeCheckPrompt:
      'Quando uma campanha publicitária muda versos do Hino Nacional para fazer humor sobre trânsito, ocorre:',
    activeCheckOptions: ['Epígrafe literal.', 'Paródia.', 'Paráfrase fiel.'],
    activeCheckCorrect: 1,
    activeCheckWhy: 'Retomar obra conhecida alterando o sentido original com efeito crítico ou humorístico caracteriza a paródia.',
  },

  {
    topicId: 'lp-generos',
    discipline: 'LP',
    editalRef: 'Edital 12.1 · Tópico 3',
    title: 'Gêneros textuais e sequências discursivas',
    subtitle: 'Identifique finalidade social, suporte, linguagem predominante e os 5 tipos textuais (narração, descrição, injunção, exposição, argumentação)',
    estimatedMinutes: 14,
    editalSubtopics: [
      'Tipologia textual: sequências narrativa, descritiva, injuntiva, expositiva e argumentativa',
      'Gêneros jornalísticos (notícia, reportagem, editorial, artigo de opinião)',
      'Gêneros literários e cotidianos (fábula, crônica, carta ao leitor, receita, anúncio publicitário)',
      'Análise de afirmações I, II e III sobre função e linguagem do gênero',
    ],
    coreSummary:
      'Tipo textual (sequência discursiva) é a estrutura linguística interna (só existem cinco principais); gênero textual é a forma concreta que circula na sociedade com propósito definido (notícia, receita, fábula, carta de reclamação, edital). Nas provas da ETE, textos como fábulas, receitas de brigadeiro e reportagens sobre o Porto Digital aparecem em itens de “I, II e III” pedindo essa distinção precisa.',
    rules: [
      {
        label: '1. Sequência Injuntiva (Instrucional)',
        detail:
          'Finalidade de orientar, instruir ou prescrever ações passo a passo. Marca gramatical forte: verbos no modo imperativo (“misture”, “entregue”, “leia”) ou infinitivo prescritivo. Gêneros típicos: receita culinária, bula de remédio, manual de montagem, regulamento/edital.',
      },
      {
        label: '2. Sequência Expositiva vs. Argumentativa',
        detail:
          'Expositiva explica conceitos ou informa fatos com objetividade, terceira pessoa e dados verificáveis (notícia, verbete de enciclopédia, resumo didático). Argumentativa defende uma tese controversa para persuadir o leitor com conectivos lógicos e juízos de valor (artigo de opinião, editorial, carta de solicitação/reclamação).',
      },
      {
        label: '3. Sequência Narrativa e Descritiva',
        detail:
          'Narrativa relata ações encadeadas no tempo com personagens, espaço e enredo (pretérito perfeito e imperfeito). Na fábula, os personagens são animais personificados ilustrando virtudes/vícios com lição moral final. A descrição congela o tempo para retratar traços físicos/psicológicos com abundância de adjetivos e verbos de estado.',
      },
      {
        label: '4. Gênero Notícia vs. Crônica vs. Carta ao Leitor',
        detail:
          'Notícia busca imparcialidade e relato factual recente (o quê, quem, quando, onde, como, por quê). Crônica mistura fato cotidiano com olhar subjetivo/lírico do cronista. Carta ao leitor/editorial dialoga diretamente com o público (“Aproveite…”, “Desejamos boa leitura”) combinando exposição e persuasão.',
      },
    ],
    workedExamples: [
      {
        title: 'Exemplo 1 · Notícia sobre o Porto Digital (padrão LP_ETE Q31)',
        problem:
          'Trecho: “O Porto Digital tem hoje 3.200 vagas abertas... A informação foi divulgada pelo cientista Silvio Meira em entrevista.” Quais características definem o gênero?',
        steps: [
          'Observe o suporte e propósito: informar o público sobre um fato real e atual da tecnologia pernambucana.',
          'Cheque o vocabulário: linguagem denotativa, clara, com dados quantitativos e fonte entrevistada.',
          'Descarte qualquer alternativa que classifique o texto como “narrativa ficcional” ou “literária”.',
        ],
        conclusion: 'Trata-se de notícia (gênero jornalístico não literário) de base expositiva-informativa.',
      },
      {
        title: 'Exemplo 2 · Receita vs. Fábula em afirmações I, II, III',
        problem:
          'Numa questão com afirmações sobre uma receita de brigadeiro: I. É gênero instrucional (injunção); II. Orienta o preparo passo a passo; III. Usa verbos no imperativo (“acrescente”, “mexa”).',
        steps: [
          'Cheque I: receitas pertencem aos gêneros instrucionais/injuntivos (verdadeira).',
          'Cheque II: a função social comunicativa é guiar a execução da receita (verdadeira).',
          'Cheque III: “acrescente”, “cozinhe”, “mexa”, “deixe” estão no imperativo afirmativo (verdadeira).',
        ],
        conclusion: 'I, II e III estão corretas.',
      },
    ],
    commonMistakes: [
      {
        wrongThought: '“Se o texto da revista diz ‘aproveite o Natal com amor’, ele é expositivo científico.”',
        correction: 'Verbos no imperativo dirigidos ao leitor + tom afetivo desmentem linguagem impessoal científica; trata-se de apresentação editorial/persuasiva.',
      },
      {
        wrongThought: '“Toda narrativa tem personagens humanos e conta fatos reais.”',
        correction: 'Fábulas e apólogos são narrativas ficcionais protagonizadas por animais ou objetos que simbolizam condutas humanas.',
      },
    ],
    eteTrap:
      'Nas questões de I, II e III, a banca mistura duas afirmações verdadeiras com uma falsa que troca o gênero (“a notícia narra fatos imaginários” ou “a fábula é um gênero injuntivo científico”).',
    selfExplanationPrompt: {
      question: 'Qual pista verbal imediata diferencia um texto expositivo informativo de um texto injuntivo?',
      modelAnswer:
        'O texto expositivo usa verbos no indicativo em 3ª pessoa explicando fatos/dados; o injuntivo emprega imperativos ou comandos diretos orientando o comportamento passo a passo do leitor.',
    },
    bookReferences: [
      'Luiz Antônio Marcuschi — Produção Textual, Análise de Gêneros e Compreensão (Parábola)',
      'Ingedore Villaça Koch & Vanda Maria Elias — Ler e Compreender: os sentidos do texto (Contexto)',
    ],
    externalLinks: [
      {
        title: 'Gêneros Textuais: o que são, características e exemplos',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/generos-textuais/',
      },
      {
        title: 'Videoaula · Tipos e Gêneros Textuais resumidos para prova',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=51Vj6uzsdaA',
      },
    ],
    activeCheckPrompt:
      'Em um edital ou receita médica com “Leia atentamente e entregue o documento”, predomina a sequência:',
    activeCheckOptions: ['Narrativa.', 'Injuntiva.', 'Poética.'],
    activeCheckCorrect: 1,
    activeCheckWhy: 'Instruções e orientações com verbos no imperativo definem a sequência discursiva injuntiva.',
  },

  {
    topicId: 'lp-semantica',
    discipline: 'LP',
    editalRef: 'Edital 12.1 · Tópico 4',
    title: 'Semântica: sentido contextual, homonímia, paronímia e polissemia',
    subtitle: 'Decifre palavras eruditas pelo campo semântico e evite trocas entre homônimos e parônimos',
    estimatedMinutes: 13,
    editalSubtopics: [
      'Sinonímia, antonímia e equivalência lexical em contexto',
      'Hiperonímia e hiponímia na cadeia semântica',
      'Homonímia (homófonos, homógrafos, perfeitos) e paronímia',
      'Polissemia vs. ambiguidade acidental',
    ],
    coreSummary:
      'A ETE costuma cobrar sinônimos contextuais de vocábulos literários ou jornalísticos (“deletéria”, “taciturna”, “esmiucei”) e pares parecidos no som ou na escrita (seção/sessão/cessão, retificar/ratificar). Nunca avalie uma palavra isolada: teste a candidata exatamente dentro da frase original conferindo classe gramatical e polaridade positiva/negativa.',
    rules: [
      {
        label: '1. Técnica da Polaridade Contextual',
        detail:
          'Se você não conhece uma palavra rara (ex.: “idiossincrasia deletéria às instituições”), leia as pistas vizinhas (“fake news”, “não querem mais se informar”). Se o entorno critica algo, a palavra carrega carga negativa — elimine na hora sinônimos positivos (“salutar”, “festiva”, “benéfica”).',
      },
      {
        label: '2. Homônimos (Som ou Grafia Iguais) e Parônimos (Parecidos)',
        detail:
          'Homófonos: mesmo som, grafia distinta (sessão = reunião · seção = repartição · cessão = ato de ceder; conserto = reparo · concerto = música). Homógrafos: mesma escrita, pronúncia diferente (o jogo [ô] / eu jogo [ó]). Parônimos: parecidos (ratificar = confirmar / retificar = corrigir; descrição / discrição; eminente / iminente).',
      },
      {
        label: '3. Hiperônimo (Geral) vs. Hipônimo (Específico)',
        detail:
          'Hiperônimo nomeia a classe ampla (“ferramenta”, “veículo”, “crime”); hipônimo nomeia o item particular dentro da classe (“martelo”, “bicicleta”, “estelionato”). A progressão textual costuma apresentar primeiro o hipônimo e retomá-lo com um hiperônimo.',
      },
      {
        label: '4. Polissemia vs. Ambiguidade',
        detail:
          'Polissemia é a capacidade normal de uma mesma palavra acumular múltiplos significados relacionados (“cabo de vassoura”, “cabo de energia”, “cabo do exército”). Ambiguidade é o duplo sentido em uma mesma frase, que na norma informativa deve ser corrigido (ex.: “O policial prendeu o ladrão em sua casa” — casa de quem?).',
      },
    ],
    workedExamples: [
      {
        title: 'Exemplo 1 · Decifrando vocabulário literário (Cruz e Sousa, LP_ETE Q26)',
        problem:
          'No verso “Da noite a tarde e taciturna trova / Soluça, numa trêmula dormência...”, qual é o sentido de “taciturna”?',
        steps: [
          'Identifique o campo semântico ao redor: “noite”, “nostalgia”, “fantasmas”, “soluça”.',
          'Note a carga emocional melancólica/silenciosa; elimine “eufórica”, “agitada”, “festiva”.',
          'Substitua na frase mantendo adjetivo feminino: “a melancólica trova”.',
        ],
        conclusion: '“Taciturna” equivale a silenciosa, sombria, triste, melancólica.',
      },
      {
        title: 'Exemplo 2 · Parônimos e Homófonos em contexto oficial',
        problem:
          'Complete corretamente: “O técnico precisou ____ o erro no relatório antes da ____ solene que oficializou a ____ do imóvel.”',
        steps: [
          'Corrigir erro = retificar (não ratificar = confirmar).',
          'Reunião solene / evento com tempo determinado = sessão (com dois esses).',
          'Ato de ceder/transferir o imóvel = cessão (de ceder).',
        ],
        conclusion: 'Respectivamente: retificar, sessão, cessão.',
      },
    ],
    commonMistakes: [
      {
        wrongThought: '“Como a opção sinônima faz sentido sozinha, não preciso checar se é verbo ou substantivo.”',
        correction: 'Sinônimo válido precisa substituir o termo original sem quebrar a sintaxe nem mudar a classe gramatical (“esmiucei” = verbo no pretérito → “analisei minuciosamente”).',
      },
      {
        wrongThought: '“Discrição e descrição significam a mesma coisa com ortografias opcionais.”',
        correction: 'São parônimos distintos: discrição vem de discreto; descrição vem de descrever.',
      },
    ],
    eteTrap:
      'Trocar homônimos clássicos (cessão/sessão/seção; viagem substantivo com G vs. viajem verbo com J; a fim de vs. afim de) ou confundir polissemia com homonímia.',
    selfExplanationPrompt: {
      question: 'Como distinguir “retificar” de “ratificar” e “a fim” de “afim” para nunca mais trocar na prova?',
      modelAnswer:
        'Associe “retificar” a deixar RETO (corrigir um erro) e “ratificar” a rachar/confirmar o acordo (voto ratificado); já “a fim de” (separado) indica finalidade (“para”), enquanto “afim” (junto) indica semelhança/afinidade.',
    },
    bookReferences: [
      'Evanildo Bechara — Moderna Gramática Portuguesa (Nova Fronteira · Capítulo de Semântica)',
      'Rodolfo Ilari — Introdução à Semântica: brincando com a gramática (Contexto)',
    ],
    externalLinks: [
      {
        title: 'Sinônimos e Antônimos no contexto linguístico',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/sinonimos-e-antonimos/',
      },
      {
        title: 'Semântica: polissemia, ambiguidade, homonímia e paronímia',
        source: 'Brasil Escola',
        kind: 'artigo',
        url: 'https://brasilescola.uol.com.br/portugues/a-semantica.htm',
      },
      {
        title: 'Videoaula · Homônimos, Parônimos, Polissemia e Campo Semântico',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=HhKaYCe9Pt0',
      },
    ],
    activeCheckPrompt:
      'Na frase “O juiz autorizou a ____ dos bens e encerrou a ____ plenária”, preenche-se corretamente com:',
    activeCheckOptions: ['seção / cessão.', 'cessão / sessão.', 'sessão / seção.'],
    activeCheckCorrect: 1,
    activeCheckWhy: 'Cessão = ato de ceder bens; Sessão = tempo de duração de reunião plenária.',
  },

  {
    topicId: 'lp-estilo',
    discipline: 'LP',
    editalRef: 'Edital 12.1 · Tópico 5',
    title: 'Conotação, denotação e figuras de linguagem',
    subtitle: 'Identifique sem vacilar metáfora, comparação, prosopopeia, zeugma, hipérbato, ironia e figuras de pensamento',
    estimatedMinutes: 15,
    editalSubtopics: [
      'Linguagem denotativa (literal) vs. conotativa (figurada)',
      'Figuras de palavras: metáfora, comparação, metonímia, catacrese',
      'Figuras de sintaxe/construção: elipse, zeugma, hipérbato, polissíndeto, pleonasmo',
      'Figuras de pensamento: prosopopeia (personificação), ironia, antítese, paradoxo, hipérbole, eufemismo',
    ],
    coreSummary:
      'Figuras de linguagem são presença certa em toda prova da ETE PE — aparecendo em poemas (Drummond), letras de MPB (Chico Buarque), hinos e tirinhas (Calvin, Armando). Mais importante que decorar dezenas de nomes raros é dominar os contrastes entre pares parecidos que a banca coloca lado a lado nas alternativas.',
    rules: [
      {
        label: '1. Denotação vs. Conotação; Metáfora vs. Comparação',
        detail:
          'Denotação é o sentido próprio do dicionário (“ferro é um metal”). Conotação cria sentido figurado (“tem nervos de aço”). Na Comparação existe conectivo comparativo explícito (“é COMO uma flor”, “parece”, “tal qual”); na Metáfora a ligação ocorre diretamente sem conectivo (“meu amor é uma caravana de rosas”).',
      },
      {
        label: '2. Prosopopeia (Personificação) vs. Metonímia vs. Catacrese',
        detail:
          'Prosopopeia atribui ações, falas ou sentimentos humanos a seres inanimados ou irracionais (“As casas espiam os homens”). Metonímia troca um termo por outro ligado por relação objetiva (autor pela obra: “li Drummond”; parte pelo todo: “faltam braços”). Catacrese é o empréstimo consolidado por falta de termo próprio (“asa da xícara”, “dente de alho”, “embarcar no avião”).',
      },
      {
        label: '3. Figuras de Sintaxe: Zeugma vs. Elipse vs. Hipérbato vs. Polissíndeto',
        detail:
          'Elipse omite qualquer palavra facilmente subentendida. Zeugma é um tipo específico de elipse em que o termo omitido JÁ APARECEU antes na frase (“Meu pai era paulista / Meu avô, [era] pernambucano”). Hipérbato inverte a ordem direta (“Ouviram do Ipiranga as margens plácidas”). Polissíndeto repete intencionalmente conjunções (“e corre, e salta, e vence”).',
      },
      {
        label: '4. Ironia, Antítese, Paradoxo, Hipérbole e Eufemismo',
        detail:
          'Ironia afirma o oposto com intenção crítica ou sarcástica (Calvin agradecendo à TV por “reduzir o pensamento”). Antítese aproxima termos opostos lógicos (“vida e morte”); Paradoxo funde ideias contraditórias numa mesma noção (“silêncio barulhento”). Hipérbole exagera (“chorei rios”); Eufemismo suaviza (“partiu desta para melhor”).',
      },
    ],
    workedExamples: [
      {
        title: 'Exemplo 1 · “Paratodos” de Chico Buarque (padrão real LP_ETE Q11)',
        problem:
          'Nos versos “O meu pai era paulista / Meu avô, pernambucano / O meu bisavô, mineiro”, se aparecerem Elipse e Zeugma nas opções, qual marcar?',
        steps: [
          'Identifique a vírgula após “avô” e “bisavô”: ela sinaliza a omissão do verbo “era”.',
          'Verifique se o verbo “era” já apareceu expresso anteriormente no 1º verso.',
          'Como o termo omitido já foi citado antes, aplica-se a definição mais específica.',
        ],
        conclusion: 'A resposta exata é ZEUGMA (omissão de termo já mencionado antes).',
      },
      {
        title: 'Exemplo 2 · Tirinhas de Calvin e Armando (LP_ETE Q29 e Q38)',
        problem:
          'Classifique: (A) Calvin agradece à televisão: “Obrigado por aniquilar minha imaginação.” (B) Personagem diz: “O amor é como o motor de um carro.”',
        steps: [
          'Em (A), há elogio aparente com ataque sarcástico subentendido → Ironia.',
          'Em (B), há dois termos aproximados com o conectivo explícito “como” → Comparação (não metáfora!).',
        ],
        conclusion: '(A) Ironia · (B) Comparação.',
      },
    ],
    commonMistakes: [
      {
        wrongThought: '“O amor é como uma flor é metáfora porque é poético.”',
        correction: 'Se a palavra “como”, “parece” ou “tal qual” aparece ligando os termos, é COMPARAÇÃO (símile). Só é metáfora sem conectivo.',
      },
      {
        wrongThought: '“As casas espiam os homens é metáfora das casas.”',
        correction: 'Atribuir um verbo tipicamente humano (“espiar”) a objeto inanimado (“casas”) classifica-se como PROSOPOPEIA (ou personificação).',
      },
    ],
    eteTrap:
      'Na prova real da ETE, “elipse” e “zeugma” aparecem juntos como opções; quando o termo omitido foi escrito no verso anterior, escolha ZEUGMA. Outro clássico é confundir metáfora e comparação por ignorar o conectivo “como”.',
    selfExplanationPrompt: {
      question: 'Por que os dois primeiros versos do Hino Nacional são classificados como hipérbato?',
      modelAnswer:
        'Porque invertem drasticamente a ordem sintática direta (“As margens plácidas do Ipiranga ouviram o brado retumbante de um povo heroico”), colocando o verbo no início e deslocando adjuntos e sujeito.',
    },
    bookReferences: [
      'Celso Cunha & Lindley Cintra — Nova Gramática do Português Contemporâneo (Lexikon · Estilística)',
      'Domingos Paschoal Cegalla — Novíssima Gramática da Língua Portuguesa (Companhia Editora Nacional)',
    ],
    externalLinks: [
      {
        title: 'Figuras de Linguagem — classificação completa com exemplos',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/figuras-de-linguagem/',
      },
      {
        title: 'Videoaula · Figuras de Linguagem que mais caem em provas',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=n0e75nRstcU',
      },
    ],
    activeCheckPrompt: 'Em “O vento uivava segredos na esquina deserta”, ocorre:',
    activeCheckOptions: ['Catacrese.', 'Prosopopeia.', 'Hipérbato.'],
    activeCheckCorrect: 1,
    activeCheckWhy: 'Atribuir ação humana/animada de contar segredos e uivar a fenômeno natural é prosopopeia (personificação).',
  },

  {
    topicId: 'lp-variedades',
    discipline: 'LP',
    editalRef: 'Edital 12.1 · Tópico 6',
    title: 'Norma-padrão e variedades linguísticas',
    subtitle: 'Domine os 4 eixos de variação, língua oral vs. escrita e combate ao preconceito linguístico segundo a sociolinguística moderna',
    estimatedMinutes: 12,
    editalSubtopics: [
      'Os 4 tipos de variação: histórica (diacrônica), geográfica (diatópica), social (diastrática) e situacional (diafásica)',
      'Modalidade oral vs. modalidade escrita',
      'Adequação linguística e registro formal/coloquial',
      'Preconceito linguístico vs. valor comunicativo das variedades não padrão',
    ],
    coreSummary:
      'A sociolinguística é um dos temas mais fiéis da ETE Pernambuco — presente em 3 questões diferentes apenas na prova de LP_ETE (duas tirinhas do Chico Bento, crônica de Drummond e canção de Gabriel, O Pensador). A regra de ouro da banca é clara: toda variedade tem lógica gramatical interna e comunica plenamente dentro de seu contexto; a norma-padrão existe para situações formais e escritas públicas, não para humilhar falantes.',
    rules: [
      {
        label: '1. Os 4 Eixos da Variação Linguística',
        detail:
          '• Diatópica (Geográfica/Regional): varia pelo lugar (“macaxeira / aipim / mandioca”, falar caipira “ocê”, “trabaio”, “mió”).\n• Diacrônica (Histórica): varia no tempo (“Vossa Mercê → vosmecê → você”, “janotas”, “mademoiselles”).\n• Diastrática (Social): varia por grupo social, profissão (jargão médico/jurídico/de TI), escolaridade ou faixa etária (gírias).\n• Diafásica (Situacional): varia conforme a formalidade da situação (conversa em família vs. audiência judicial).',
      },
      {
        label: '2. Linguagem Coloquial vs. Regional vs. Norma Culta vs. Internetês',
        detail:
          'Linguagem coloquial é a fala espontânea cotidiana usada no Brasil inteiro (“pra”, “pro”, “tô indo”, “pode crer”). Variação regional marca traços específicos de uma comunidade geográfica (“oxente”, “supressão do r final caipira”). Internetês refere-se apenas às abreviações gráficas digitais (“vc”, “pq”, “blz”). Não confunda coloquialidade com internetês!',
      },
      {
        label: '3. Adequação Contextual (Marcos Bagno)',
        detail:
          'Usar terno na praia ou ir de sunga a uma entrevista de estágio ilustra inadequação ao ambiente. Da mesma forma, falar coloquialmente com amigos é perfeitamente adequado; escrever um requerimento oficial ao Porto Digital pede norma-padrão. Nenhuma variedade não padrão é “incapaz de comunicar”.',
      },
      {
        label: '4. Oralidade e Escrita não são inimigas',
        detail:
          'Como ironiza Monteiro Lobato em “A gramática só se atreve quando escrevemos”, a fala tem pausas, entonação e liberdade sintática que a escrita formal padroniza. Na prova, o candidato deve respeitar ambas, reconhecendo quando o registro informal cumpre papel expressivo (música, humor, tirinha).',
      },
    ],
    workedExamples: [
      {
        title: 'Exemplo 1 · Variação Histórica em Drummond (modelo real LP_ETE Q19)',
        problem:
          'Trecho: “Antigamente, as moças chamavam-se mademoiselles e eram todas mimosas... Os janotas faziam-lhes pé-de-alferes...” Qual tipo de variação se evidencia?',
        steps: [
          'Identifique a pista temporal logo no início (“Antigamente”) e os termos em desuso (“janotas”, “pé-de-alferes”).',
          'Relacione com transformação da língua ao longo dos séculos/décadas.',
        ],
        conclusion: 'Variação histórica (ou diacrônica).',
      },
      {
        title: 'Exemplo 2 · Tirinhas do Chico Bento (LP_ETE Q14 e Q15)',
        problem:
          'Na fala “Eu é qui num posso nem pensá nisso! Vô tê qui istudá muito!”, qual afirmação está correta sobre a variedade usada?',
        steps: [
          'Rejeite de imediato alternativas preconceituosas (“inadmissível”, “impossível de entender”, “ausência de regras”).',
          'Reconheça a representação escrita da oralidade rural/regional (redução de r final, rotacismo “trabaio”).',
        ],
        conclusion: 'Trata-se de variedade linguística não padrão, regional e oral, perfeitamente legítima e compreensível.',
      },
    ],
    commonMistakes: [
      {
        wrongThought: '“O rap/canção tem gíria ‘se liga aí’, ‘pro’, ‘pra’, então é internetês.”',
        correction: 'São marcas da oralidade informal geral (linguagem coloquial), existentes muito antes da internet.',
      },
      {
        wrongThought: '“Variedade caipira não tem gramática e impede a comunicação.”',
        correction: 'Alternativas que negam a validade comunicativa das falas populares são sempre falsas no padrão ETE.',
      },
    ],
    eteTrap:
      'Marcar que o falar regional ou coloquial “é inadmissível”, “compromete toda comunicação” ou confundir linguagem coloquial (“pro”, “pra”) com jargão técnico ou internetês.',
    selfExplanationPrompt: {
      question: 'Como diferenciar rapidamente variação DIATÓPICA de DIACRÔNICA ao ler um enunciado?',
      modelAnswer:
        'Pergunte se o contraste acontece entre LUGARES diferentes hoje (região/estado → Diatópica) ou entre ÉPOCAS históricas distintas (passado vs. presente → Diacrônica).',
    },
    bookReferences: [
      'Marcos Bagno — Preconceito Linguístico: o que é, como se faz (Parábola)',
      'Celso Cunha & Lindley Cintra — Nova Gramática do Português Contemporâneo (Lexikon · Domínios da Língua)',
    ],
    externalLinks: [
      {
        title: 'Variações Linguísticas — tipos, exemplos e preconceito linguístico',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/variacoes-linguisticas/',
      },
      {
        title: 'Videoaula · Variações Linguísticas e Adequação Contextual',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=6fBOVygtNoU',
      },
    ],
    activeCheckPrompt:
      'Expressões como “Vossa Mercê” e “cousas d’antanho” em um texto atual ilustram variação:',
    activeCheckOptions: ['Regional (diatópica).', 'Histórica (diacrônica).', 'Técnica (diastrática).'],
    activeCheckCorrect: 1,
    activeCheckWhy: 'Vocábulos antigos que evoluíram ou caíram em desuso com o passar dos séculos são variação histórica (diacrônica).',
  },

  {
    topicId: 'lp-morfologia',
    discipline: 'LP',
    editalRef: 'Edital 12.1 · Tópico 7',
    title: 'Estrutura, formação de palavras e classes gramaticais',
    subtitle: 'Composição por justaposição vs. aglutinação, tipos de derivação, onomatopeia e classificação morfológica em contexto',
    estimatedMinutes: 16,
    editalSubtopics: [
      'Morfemas: radical, vogal temática, afixos (prefixo e sufixo) e desinências',
      'Composição por justaposição vs. aglutinação',
      'Derivação prefixal, sufixal, prefixal e sufixal, parassintética, regressiva e imprópria',
      'Onomatopeia, hibridismo, siglas e abreviação vocabular',
      'As 10 classes gramaticais e distinções traiçoeiras (“que”, “o”, “muito”, “meio”, “do”)',
    ],
    coreSummary:
      'Só em LP_ETE houve quatro questões diretas deste tópico: formação de “Planalto” (aglutinação), “Sexta-feira” (justaposição), “BUM/BUÁÁÁ” (onomatopeia), além da classificação de “do”, “muito”, “jamais” e “que”. Para dominar morfologia, aprenda os testes mecânicos de separação de radicais, retirada simultânea de afixos e substituição de classes.',
    rules: [
      {
        label: '1. Composição: Justaposição vs. Aglutinação (2 ou mais radicais)',
        detail:
          'Na Justaposição os radicais unem-se mantendo exatamente seus sons originais (sexta-feira, gira + sol = girassol, passa + tempo = passatempo, pé de moleque). Na Aglutinação há fusão com perda ou alteração de letra/fonema e um único acento tônico (plano + alto = planalto; água + ardente = aguardente; perna + alta = pernalta; em + boa + hora = embora).',
      },
      {
        label: '2. Derivação: Teste da Retirada (Parassíntese vs. Prefixal+Sufixal)',
        detail:
          'Se a palavra tem prefixo + radical + sufixo: retire UM por vez. Se nenhuma das formas intermediárias existir na língua (ex.: “envernizar” — não existe “enverniz” nem “vernizar”; “anoitecer” — não existe “anoite” nem “noitecer”), é Derivação PARASSINTÉTICA. Se pelo menos uma existir (“deslealdade” → existe “lealdade”; “infelizmente” → existe “infeliz” e “felizmente”), é Derivação PREFIXAL E SUFIXAL.',
      },
      {
        label: '3. Derivação Regressiva, Imprópria, Onomatopeia e Hibridismo',
        detail:
          'Regressiva: cria substantivo abstrato de ação reduzindo o verbo (“atacar → o ataque”; “debater → o debate”). Imprópria (conversão): muda a classe sem mexer na forma (“o falar” = verbo vira substantivo). Onomatopeia: imita som (“BUM”, “BUÁÁÁ”, “tique-taque”). Hibridismo: une elementos de línguas diferentes (“automóvel”: grego + latim).',
      },
      {
        label: '4. Classes Gramaticais em Contexto (Palavras Camaleão)',
        detail:
          '• “do / da / no / pelo”: contração de preposição + artigo (“de + o = do”).\n• “muito / bastante / meio”: invariável modificando verbo ou adjetivo (“muito ansiosos”) = ADVÉRBIO; concordando antes de substantivo (“muitas dúvidas”) = PRONOME INDEFINIDO.\n• “jamais / nunca / sempre / ontem”: ADVÉRBIOS (invariáveis!).\n• “que”: se troca por “o qual / a qual” = PRONOME RELATIVO; se troca toda a oração por “isso” = CONJUNÇÃO INTEGRANTE.',
      },
    ],
    workedExamples: [
      {
        title: 'Exemplo 1 · Planalto vs. Sexta-feira (cartazes LP_ETE Q06 e Q30)',
        problem:
          'Classifique o processo de formação das palavras “Planalto” e “Sexta-feira”.',
        steps: [
          'Decomponha “Planalto”: plano + alto. Houve perda do “o” de plano → composição por aglutinação.',
          'Decomponha “Sexta-feira”: sexta + feira. Nenhuma letra ou som se perdeu → composição por justaposição.',
        ],
        conclusion: '“Planalto” = aglutinação; “Sexta-feira” = justaposição.',
      },
      {
        title: 'Exemplo 2 · Teste do “que” e do “muito” em frases da ETE',
        problem:
          'Classifique os termos destacados: (1) “A primeira impressão é a QUE fica.” (2) “Estão MUITO ansiosos.” (3) “Li MUITOS livros.”',
        steps: [
          'Em (1), troque “que” por “a qual”: “é a qual fica” (o artigo “a” equivale a “aquela impressão”). Logo é pronome relativo.',
          'Em (2), “muito” modifica o adjetivo “ansiosos” e não varia → advérbio de intensidade.',
          'Em (3), “muitos” acompanha e flexiona com o substantivo “livros” → pronome indefinido.',
        ],
        conclusion: '(1) Pronome relativo; (2) Advérbio de intensidade; (3) Pronome indefinido.',
      },
    ],
    commonMistakes: [
      {
        wrongThought: '“Infelizmente tem prefixo in- e sufixo -mente, então é parassintética.”',
        correction: 'Errado! Como existe “infeliz” e “felizmente”, trata-se de derivação prefixal e sufixal (não simultânea).',
      },
      {
        wrongThought: '“A palavra ‘girassol’ ganhou uma letra s, então é aglutinação.”',
        correction: 'Dobrar “s” ou “r” entre radicais (gira + sol = girassol; contra + regra = contrarregra) é apenas ajuste ortográfico para manter o som, sem perda fonética: é JUSTAPOSIÇÃO!',
      },
    ],
    eteTrap:
      'Classificar palavras com prefixo e sufixo independentes (infelizmente, deslealdade) como parassíntese, ou achar que “girassol” é aglutinação por causa do “ss”.',
    selfExplanationPrompt: {
      question: 'Qual é o único teste necessário para decidir entre “derivação prefixal e sufixal” e “derivação parassintética”?',
      modelAnswer:
        'Tampe primeiro o prefixo e depois só o sufixo: se restar ao menos uma palavra existente em português (ex.: “felizmente”), é prefixal e sufixal; se ambos os pedaços ficarem sem sentido (ex.: “entardecer” → “entarde” / “tardecer”), é parassintética.',
    },
    bookReferences: [
      'Evanildo Bechara — Moderna Gramática Portuguesa (Nova Fronteira · Estrutura e Formação das Palavras)',
      'Fernando Pestana — A Gramática para Concursos Públicos (Método · Morfologia)',
    ],
    externalLinks: [
      {
        title: 'Processos de Formação de Palavras (Composição e Derivação)',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/formacao-de-palavras/',
      },
      {
        title: 'As 10 Classes de Palavras em contexto gramatical',
        source: 'Brasil Escola',
        kind: 'artigo',
        url: 'https://brasilescola.uol.com.br/gramatica/classes-palavras.htm',
      },
      {
        title: 'Videoaula · Formação de Palavras: Justaposição, Aglutinação e Parassíntese',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=U_nRXQh5L40',
      },
      {
        title: 'Videoaula · Classes Gramaticais variáveis e invariáveis',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=1C88RhbZjgg',
      },
    ],
    activeCheckPrompt:
      'Retirando o prefixo de “deslealdade”, resta “lealdade” (palavra existente). Logo, “deslealdade” é formada por:',
    activeCheckOptions: ['Derivação parassintética.', 'Derivação prefixal e sufixal.', 'Composição por aglutinação.'],
    activeCheckCorrect: 1,
    activeCheckWhy: 'Como a palavra continua existindo sem o prefixo (“lealdade”), os afixos não são simultâneos obrigatórios: derivação prefixal e sufixal.',
  },

  {
    topicId: 'lp-sintaxe',
    discipline: 'LP',
    editalRef: 'Edital 12.1 · Tópico 8',
    title: 'Sintaxe do período simples e composto e valor dos conectivos',
    subtitle: 'Transitividade verbal, adjunto adverbial vs. objeto indireto, adjunto adnominal vs. complemento nominal e classificação das orações',
    estimatedMinutes: 17,
    editalSubtopics: [
      'Sujeito (simples, composto, oculto, indeterminado, oração sem sujeito)',
      'Predicação verbal: intransitivo, transitivo direto/indireto/bitransitivo e de ligação',
      'Adjunto adverbial (causa, companhia, instrumento, modo, tempo) vs. Objeto indireto',
      'Adjunto adnominal vs. Complemento nominal',
      'Período composto por coordenação e subordinação (substantivas, adjetivas, adverbiais) e valores dos conectivos',
    ],
    coreSummary:
      'A sintaxe da ETE exige leitura contextual de funções, nunca rotulagem mecânica decorada: o mesmo verbo (“apagar”, “chorar”, “virar”) pode ser transitivo numa frase e intransitivo noutra, como na questão de Drummond (“A luz apagou”). Além disso, saber o valor semântico das conjunções garante acertos tanto em sintaxe quanto em coesão textual.',
    rules: [
      {
        label: '1. Transitividade Verbal Depende da Frase!',
        detail:
          'Verbo intransitivo (VI) tem sentido completo no contexto (“A luz apagou” — “a luz” é sujeito; “A festa acabou”). VTD pede complemento sem preposição obrigatória (“Apaguei a luz”). VTI exige preposição (“Preciso de apoio”). Verbo de ligação liga sujeito a uma característica/estado do sujeito, o predicativo (“Ela anda preocupada”).',
      },
      {
        label: '2. Adjunto Adverbial vs. Objeto Indireto; Adjunto Adnominal vs. Complemento Nominal',
        detail:
          'Locuções preposicionadas de causa (“chorava de dor”), companhia (“saiu com os irmãos”) e instrumento (“batia com o lápis”) são adjuntos adverbiais (circunstâncias), NÃO objetos indiretos, pois os verbos não exigem esses complementos. Já para nomes abstratos: se o termo preposicionado PRATICA a ação (agente) → Adjunto Adnominal (“a pesquisa do aluno”); se RECEBE a ação (paciente) ou completa adjetivo/advérbio → Complemento Nominal (“leitura do livro”, “fiel ao edital”).',
      },
      {
        label: '3. Orações Subordinadas Substantivas vs. Adjetivas',
        detail:
          'Se a oração inteira após “que/se” puder ser substituída por “ISSO” → Subordinada Substantiva, e o “que” é conjunção integrante (“Espero que passe” = Espero ISSO → objetiva direta; “Tenho certeza de que passará” = Tenho certeza DISSO → completiva nominal). Se o “que” retomar um substantivo e puder ser trocado por “o qual / a qual” → Subordinada Adjetiva, e o “que” é pronome relativo.',
      },
      {
        label: '4. Mapa Semântico de Conjunções Coordenativas e Adverbiais',
        detail:
          '• Oposição real / concessão vs. adversidade: “mas, porém, contudo, todavia, entretanto, no entanto” (adversativas) vs. “embora, conquanto, ainda que, posto que” (concessivas).\n• Causa/Explicação: “porque, visto que, já que, uma vez que, porquanto”.\n• Conclusão: “logo, portanto, por isso, pois (pós-posto)”.\n• Condição: “se, caso, desde que” (atenção: “se não” = caso não ≠ “senão” = do contrário/exceto).\n• Proporção: “à medida que, à proporção que”.',
      },
    ],
    workedExamples: [
      {
        title: 'Exemplo 1 · Drummond em “E agora, José?” (padrão real LP_ETE Q02)',
        problem:
          'Nos versos “A festa acabou / A luz apagou / O povo sumiu / A noite esfriou”, como se classificam os quatro verbos?',
        steps: [
          'Identifique o sujeito antes de cada verbo: “A festa”, “A luz”, “O povo”, “A noite”.',
          'Pergunte se o verbo após cada sujeito pede um objeto direto (ex.: “apagou O QUÊ?” — não! A luz apagou sozinha, sentido pleno).',
          'O mesmo vale para “esfriou” referindo-se à noite e para “acabou” e “sumiu”.',
        ],
        conclusion: 'Todos os quatro são Verbos Intransitivos (VI) neste contexto poético.',
      },
      {
        title: 'Exemplo 2 · Teste do ISSO vs. O QUAL e “se não” vs. “senão”',
        problem:
          'Analise: (1) “Eu nunca saberia se não tivesse tentado!” (2) “É necessário que você revise o edital.”',
        steps: [
          'Em (1), substitua “se não” por “caso não”: “caso não tivesse tentado” → conjunção condicional “se” + advérbio de negação “não”.',
          'Em (2), troque “que você revise o edital” por “ISSO”: “É necessário ISSO” (= ISSO é necessário). O verbo é de ligação sem sujeito anterior → oração subordinada substantiva subjetiva.',
        ],
        conclusion: '(1) Conjunção condicional + advérbio; (2) Conjunção integrante iniciando oração subjetiva.',
      },
    ],
    commonMistakes: [
      {
        wrongThought: '“Todo termo com preposição depois do verbo é objeto indireto (‘choravam de dor’).”',
        correction: 'Pergunte se o verbo EXIGE aquela preposição na sua regência essencial. Quem chora não “chora de algo” obrigatoriamente; “de dor” indica CAUSA → adjunto adverbial de causa.',
      },
      {
        wrongThought: '“‘Conquanto’ indica conclusão ou tempo.”',
        correction: '“Conquanto” é uma clássica conjunção subordinativa CONCESSIVA (sinônimo culto de “embora”, “ainda que”).',
      },
    ],
    eteTrap:
      'Classificar um verbo pela sua acepção mais comum de dicionário sem olhar a frase (“apagou” no poema é intransitivo!), ou confundir “conquanto” (concessão) e “porquanto” (causa/explicação) com “portanto” (conclusão).',
    selfExplanationPrompt: {
      question: 'Qual a diferença sintática e semântica entre “se não” (separado) e “senão” (junto)?',
      modelAnswer:
        '“Se não” (separado) equivale a “caso não” (condição + negação); já “senão” (junto) significa “do contrário”, “a não ser / exceto” ou “mas sim”.',
    },
    bookReferences: [
      'Evanildo Bechara — Moderna Gramática Portuguesa (Nova Fronteira · Sintaxe do Período)',
      'Fernando Pestana — A Gramática para Concursos Públicos (Método · Sintaxe e Orações)',
    ],
    externalLinks: [
      {
        title: 'Orações Subordinadas (Substantivas, Adjetivas e Adverbiais)',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/oracoes-subordinadas/',
      },
      {
        title: 'Conjunções Coordenativas: classificação e sentido lógico',
        source: 'Brasil Escola',
        kind: 'artigo',
        url: 'https://brasilescola.uol.com.br/gramatica/conjuncoes-coordenativas.htm',
      },
      {
        title: 'Videoaula · Termos da Oração, Transitividade e Orações Subordinadas',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=O62F9zIXiFs',
      },
    ],
    activeCheckPrompt:
      'Em “O pesquisador tinha certeza de que os dados estavam corretos”, a oração destacada completa um substantivo abstrato (“certeza”) e é:',
    activeCheckOptions: [
      'Subordinada substantiva objetiva indireta.',
      'Subordinada substantiva completiva nominal.',
      'Subordinada adjetiva restritiva.',
    ],
    activeCheckCorrect: 1,
    activeCheckWhy: '“Certeza” é um nome (substantivo), não um verbo! Logo a oração preposicionada é completiva nominal.',
  },

  {
    topicId: 'lp-pontuacao',
    discipline: 'LP',
    editalRef: 'Edital 12.1 · Tópico 9',
    title: 'Pontuação sintática e expressiva',
    subtitle: 'As regras absolutas da vírgula, deslocamento de termos, conjunções intercaladas e o impacto de sentido em orações adjetivas',
    estimatedMinutes: 13,
    editalSubtopics: [
      'Proibições absolutas da vírgula (entre sujeito e verbo; entre verbo e complementos)',
      'Usos obrigatórios: vocativo, aposto explicativo, termos intercalados e enumerações',
      'Adjunto adverbial deslocado e oração subordinada adverbial anteposta',
      'Vírgula em conjunções deslocadas (“porém”, “portanto”, “entretanto”) e antes do “e”',
      'Efeito de sentido em orações adjetivas explicativas vs. restritivas e uso de dois-pontos/ponto e vírgula',
    ],
    coreSummary:
      'Pontuação em provas não se resolve por “pausa para respirar”, mas por análise sintática objetiva! O Edital 12.1 destaca explicitamente “pontuação sintática e expressiva”: basta dominar as duas proibições inegociáveis e os quatro isolamentos obrigatórios para gabaritar todas as questões de vírgula e ponto e vírgula.',
    rules: [
      {
        label: '1. A Proibição Absoluta (Ordem Direta S-V-C)',
        detail:
          'NUNCA coloque uma única vírgula separando o SUJEITO do VERBO — não importa quão enorme seja o sujeito (“Todos os estudantes inscritos na escola técnica de Recife [PROIBIDO ,] realizarão a prova”). Também é proibido separar o VERBO de seu OBJETO DIRETO ou INDIRETO (“Solicitamos [PROIBIDO ,] que tragam o RG”). Só entram vírgulas ali se forem DUAS isolando uma intercalação.',
      },
      {
        label: '2. Os 4 Isolamentos Obrigatórios pela Vírgula',
        detail:
          '1) Vocativo (chamamento): “Candidatos, confiram o cartão.”\n2) Aposto explicativo: “Recife, capital pernambucana, sedia o Porto Digital.”\n3) Conjunções adversativas/conclusivas deslocadas no meio ou fim da frase: “Não deixe, porém, de revisar.” / “Portanto” no início não precisa de vírgula obrigatória depois (mas deslocado sempre vem entre vírgulas).\n4) Oração subordinada adverbial antes da principal: “Embora estivesse cansado, resolveu tudo.”',
      },
      {
        label: '3. Orações Adjetivas: Explicativa (com vírgulas) vs. Restritiva (sem vírgulas)',
        detail:
          'A vírgula aqui muda a lógica matemática do conjunto! “Os alunos, que estudaram o edital, passaram” (COM vírgulas = explicativa) afirma que TODOS os alunos estudaram e todos passaram. “Os alunos que estudaram o edital passaram” (SEM vírgulas = restritiva) restringe a afirmação APENAS ao subconjunto que estudou.',
      },
      {
        label: '4. Vírgula antes de “e”, Ponto e Vírgula e Dois-pontos',
        detail:
          'Não se usa vírgula antes de “e” quando as orações têm o mesmo sujeito (“Leu a questão e marcou a letra B”); usa-se quando os sujeitos são diferentes (“A banca divulgou o edital, e os candidatos iniciaram os simulados”) ou quando “e” equivale a “mas”. Ponto e vírgula (;) separa orações coordenadas extensas ou itens de enumeração; dois-pontos (:) anunciam citação, enumeração ou explicação.',
      },
    ],
    workedExamples: [
      {
        title: 'Exemplo 1 · Encontrando a frase perfeitamente pontuada',
        problem:
          'Por que “Durante o simulado, cronometre cada questão; não deixe, porém, de revisar o gabarito.” está impecável enquanto “Os estudantes que estudaram muito, passaram.” está errada?',
        steps: [
          'Analise a primeira frase: “Durante o simulado,” é adjunto adverbial longo deslocado antes do verbo (vírgula correta); “;” separa orações coordenadas ligadas por sentido (correto); “, porém,” está entre vírgulas por vir deslocado após o verbo “deixe” (obrigatório!).',
          'Analise a segunda frase: “Os estudantes que estudaram muito” é o sujeito completo do verbo “passaram”. Colocar apenas uma vírgula ali separa sujeito de verbo — erro grave!',
        ],
        conclusion: 'Sempre identifique onde termina o sujeito antes do verbo principal!',
      },
      {
        title: 'Exemplo 2 · Mudança semântica pelas vírgulas',
        problem:
          'Qual a diferença entre (1) “Meu irmão, que mora em Olinda, estuda TI” e (2) “Meu irmão que mora em Olinda estuda TI”?',
        steps: [
          'Em (1), a oração está entre vírgulas (explicativa): acrescenta dado de alguém único/já definido — implica que o falante só tem um irmão.',
          'Em (2), sem vírgulas (restritiva): especifica qual dos irmãos — implica que o falante tem mais de um irmão e está identificando aquele de Olinda.',
        ],
        conclusion: 'A presença ou ausência das vírgulas altera completamente a pressuposição da frase.',
      },
    ],
    commonMistakes: [
      {
        wrongThought: '“O sujeito ficou muito comprido, dá falta de ar ler sem vírgula antes do verbo.”',
        correction: 'Vírgula não marca respiração! Sujeito longo sem vírgula antes do verbo é uma das armadilhas nº 1 da ETE.',
      },
      {
        wrongThought: '“Coloquei uma vírgula logo depois de ‘Embora’ no começo da frase.”',
        correction: 'Não se separa a conjunção “Embora” da própria oração dela; a vírgula vai apenas ao FINAL da oração subordinada anteposta (“Embora estivesse cansado, resolveu tudo”).',
      },
    ],
    eteTrap:
      'Sujeitos extensos modificados por orações adjetivas restritivas (“Todos os candidatos inscritos para o curso técnico da ETE, devem apresentar...”) levando o candidato desatento a aceitar a vírgula proibida antes do verbo.',
    selfExplanationPrompt: {
      question: 'Se alguém escreve “O diretor comunicou, que a prova começará às oito horas”, qual regra foi violada?',
      modelAnswer:
        'Foi violada a proibição de separar o verbo transitivo direto (“comunicou”) de seu complemento/objeto direto (“que a prova começará às oito horas”) por uma única vírgula.',
    },
    bookReferences: [
      'Celso Cunha & Lindley Cintra — Nova Gramática do Português Contemporâneo (Lexikon · Pontuação)',
      'Domingos Paschoal Cegalla — Novíssima Gramática da Língua Portuguesa (Pontuação Sintática)',
    ],
    externalLinks: [
      {
        title: 'Sinais de Pontuação: vírgula, ponto e vírgula e dois-pontos',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/sinais-de-pontuacao/',
      },
      {
        title: 'Uso da Vírgula — regras essenciais e casos proibidos',
        source: 'Brasil Escola',
        kind: 'artigo',
        url: 'https://brasilescola.uol.com.br/gramatica/uso-da-virgula.htm',
      },
      {
        title: 'Videoaula · Pontuação e Uso da Vírgula sem erro',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=4ZJnTqTk4_Y',
      },
    ],
    activeCheckPrompt: 'Qual frase está pontuada corretamente?',
    activeCheckOptions: [
      'Todos os candidatos aprovados no certame, deverão comparecer na secretaria.',
      'Todos os candidatos aprovados no certame deverão comparecer à secretaria.',
      'Os fiscais entregaram, os cadernos de prova aos presentes.',
    ],
    activeCheckCorrect: 1,
    activeCheckWhy: 'A alternativa B não separa o sujeito longo do verbo “deverão”, nem o verbo de seu complemento.',
  },

  {
    topicId: 'lp-concordancia',
    discipline: 'LP',
    editalRef: 'Edital 12.1 · Tópico 10',
    title: 'Concordância (verbal e nominal), regência e crase',
    subtitle: 'O critério nº 1 de desempate da ETE PE: domíne verbos impessoais, sujeito partitivo, “que/quem”, concordância nominal, regência e crase',
    estimatedMinutes: 18,
    editalSubtopics: [
      'Concordância verbal: sujeito composto, partitivos (“a maioria de”), “que” vs. “quem”, “mais de um”, topônimos com/sem artigo',
      'Verbos impessoais (“haver” = existir; “fazer” = tempo) e locuções verbais',
      'Partícula apassivadora vs. índice de indeterminação com “se”',
      'Concordância nominal: “é proibido / é necessário”, “bastante”, “meio”, “anexo”, “obrigado”, “só/sós”',
      'Regência verbal (assistir, visar, aspirar, preferir, obedecer, pagar, implicar) e Crase',
    ],
    coreSummary:
      'Pelo item 6.3 do Edital ETE PE 2027.1, o PRIMEIRO critério de desempate entre candidatos empatados é a maior nota em Língua Portuguesa — e na prova real LP_ETE este tópico sozinho responde por quase metade dos testes gramaticais (“Muitos de nós resolveu”, “As Minas Gerais fica”, “É necessária cautela”, “Somos nós que recebe”). Dominar as regras abaixo coloca você à frente da concorrência no Porto Digital.',
    rules: [
      {
        label: '1. Concordância Verbal Especial (Top 5 da ETE)',
        detail:
          '• “Muitos/alguns/quais de nós/vós”: plural obrigatório (“Muitos de nós resolveram / resolvemos”, nunca no singular!).\n• Pronome relativo “QUE” vs. “QUEM”: com “que”, concorda com o antecedente (“Sou eu que recebo” / “Somos nós que recebemos”); com “quem”, fica preferencialmente na 3ª do singular (“Sou eu quem recebe”).\n• “Mais de um”: singular (“Mais de um faltou”), EXCETO se indicar reciprocidade (“Mais de um gerente se criticaram mutuamente”).\n• Topônimos plurais: COM artigo plural → verbo no plural (“As Minas Gerais ficam...” / “Os Estados Unidos investem”); SEM artigo plural → verbo no singular (“Minas Gerais fica...”).\n• Expressão partitiva (“um grupo de turistas”, “2/5 da população”): admite concordância com o núcleo singular ou com o especificador plural.',
      },
      {
        label: '2. Verbos Impessoais vs. “Existir”; Voz Passiva com “se”',
        detail:
          '“Haver” no sentido de existir/ocorrer e “Fazer” indicando tempo decorrido não têm sujeito: ficam SEMPRE na 3ª pessoa do singular, arrastando inclusive o auxiliar (“Deve haver vagas”, “Faz cinco dias”). Já “existir”, “acontecer” e “ocorrer” têm sujeito e flexionam normalmente (“Existem vagas”). Com “se”: VTD concorda com o sujeito (“Alugam-se salas”); VTI fica no singular (“Precisa-se de técnicos”).',
      },
      {
        label: '3. Concordância Nominal Especial (Cuidado com “É proibido” e “Meio/Bastante”)',
        detail:
          '• “É bom / É necessário / É proibido”: SEM determinante/artigo antes do substantivo, ficam INVARIÁVEIS no masculino (“É necessário cautela”, “É proibido entrada”); COM artigo/determinante, concordam (“É necessária A cautela”, “É proibida A entrada”).\n• “Meio”: advérbio (= um pouco) não varia (“anda meio estranha”); numeral (= metade) varia (“meia hora”).\n• “Bastante”: substitua por “muito(s)”; se “muitos”, use “bastantes” (“bastantes vezes”).\n• “Menos” e “Alerta” (advérbio): SEMPRE invariáveis (“menos pessoas”). “Sós” (= sozinhos): concorda (“Não estamos sós”).',
      },
      {
        label: '4. Regência Verbal e Emprego da Crase',
        detail:
          '• Assistir (ver), Visar (almejar), Aspirar (desejar), Obedecer/Desobedecer, Pagar/Perdoar (coisa=VTD, pessoa=VTI) e Agradar exigem preposição “A” (Obedecer Às normas; Visar À vaga; Assistir AO filme).\n• Preferir exige “A”, nunca “do que” (“Prefiro estudar a descansar”).\n• Implicar (= acarretar): VTD sem “em” (“Estudar implica dedicação”).\n• Crase: ocorre quando há preposição “a” + artigo “a” (ou pronome aquele/a). Dica do masculino: troque o termo feminino por um masculino equivalente; se exigir “AO”, vai crase “À” (“Fui à biblioteca” ↔ “Fui ao colégio”). Jamais use crase antes de verbo no infinitivo, masculino ou “a” no singular diante de plural (“a candidatos”).',
      },
    ],
    workedExamples: [
      {
        title: 'Exemplo 1 · Erros reais cobrados na prova LP_ETE (Q04, Q12, Q13, Q34)',
        problem:
          'Identifique e corrija o desvio em cada construção adaptada da prova real: (A) “Muitos de nós resolveu sair.” (B) “As Minas Gerais fica ao norte.” (C) “É necessária cautela.” (D) “Somos nós que recebe.”',
        steps: [
          'Em (A), “Muitos” está no plural → deve ficar “Muitos de nós resolveram (ou resolvemos) sair.”',
          'Em (B), “As Minas Gerais” possui artigo no plural (“As”) → o verbo deve ir para o plural (“ficam”).',
          'Em (C), “cautela” aparece sem o artigo “a” → expressão invariável: “É necessário cautela.”',
          'Em (D), com o pronome relativo “que”, o verbo concorda com o antecedente “nós” → “Somos nós que recebemos.”',
        ],
        conclusion: 'Dominar exatamente esses 4 padrões resolve praticamente metade das questões de gramática da prova.',
      },
      {
        title: 'Exemplo 2 · Regência + Crase em uma mesma frase',
        problem:
          'Por que “O coordenador referiu-se à candidata que visava à vaga e preferia estudar a improvisar” está 100% correta?',
        steps: [
          '“Referir-se” rege “a” + “a candidata” (troca por “ao candidato”) → crase obrigatória (“à”).',
          '“Visar” no sentido de almejar rege “a” + “a vaga” (“visava ao cargo”) → crase obrigatória (“à”).',
          '“Preferir” rege apenas preposição “a” antes do infinitivo “improvisar” → proibido usar crase antes de verbo, logo fica só “a”.',
        ],
        conclusion: 'Regência e crase trabalham juntas: identifique primeiro a preposição exigida pelo verbo e depois cheque se a palavra seguinte aceita artigo “a”.',
      },
    ],
    commonMistakes: [
      {
        wrongThought: '“‘Mais de um gerente se criticaram mutuamente’ está errado porque ‘mais de um’ pede singular.”',
        correction: 'Quando “mais de um” traz ideia de reciprocidade (“um ao outro”, “se criticaram mutuamente”), o verbo vai obrigatoriamente para o PLURAL!',
      },
      {
        wrongThought: '“Assisti o simulado ontem e paguei o técnico hoje.”',
        correction: 'Assistir no sentido de presenciar/ver pede preposição (“Assisti AO simulado”); pagar a pessoa pede preposição (“Paguei AO técnico”).',
      },
    ],
    eteTrap:
      'Colocar “É necessária cautela” (ERRADO! Sem artigo fica “É necessário”) junto com “bastantes vezes” (CORRETO) para induzir o aluno a achar que o erro está em “bastantes”.',
    selfExplanationPrompt: {
      question: 'Por que “Havia muitas dúvidas na sala” fica no singular enquanto “Existiam muitas dúvidas na sala” vai para o plural?',
      modelAnswer:
        'Porque “haver” com sentido de existir é impessoal e transforma “muitas dúvidas” em objeto direto, mantendo o verbo na 3ª pessoa do singular; já “existir” é verbo pessoal cujo sujeito é “muitas dúvidas”, exigindo flexão no plural.',
    },
    bookReferences: [
      'Evanildo Bechara — Moderna Gramática Portuguesa (Nova Fronteira · Concordância e Regência)',
      'Fernando Pestana — A Gramática para Concursos Públicos (Método · Concordância, Regência e Crase)',
    ],
    externalLinks: [
      {
        title: 'Concordância Verbal: regras gerais e casos especiais',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/concordancia-verbal/',
      },
      {
        title: 'Regência Verbal — principais verbos cobrados em provas',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/regencia-verbal/',
      },
      {
        title: 'Crase: quando usar, casos proibidos e dicas práticas',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/crase/',
      },
      {
        title: 'Videoaula · Concordância Verbal e Nominal sem mistérios',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=B0EgJVneeGE',
      },
      {
        title: 'Videoaula · Regência Verbal e Crase passo a passo',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=yUpRa62vcSI',
      },
    ],
    activeCheckPrompt: 'Qual construção está inteiramente correta na norma culta?',
    activeCheckOptions: [
      'Havia bastantes motivos e era proibido a entrada sem documento.',
      'Havia bastantes motivos e era proibida a entrada sem documento.',
      'Haviam bastantes motivos e era proibida a entrada sem documento.',
    ],
    activeCheckCorrect: 1,
    activeCheckWhy: '“Havia” é impessoal (singular); “bastantes” = muitos (concorda com motivos); com artigo “a”, fica “proibida a entrada”.',
  },

  // =========================================================
  // MATEMÁTICA (10 aulas completas do Edital 12.2, com KaTeX)
  // =========================================================
  {
    topicId: 'mat-operacoes',
    discipline: 'MAT',
    editalRef: 'Edital 12.2 · Tópicos 1–6 e 16',
    title: 'Operações reais, frações, decimais, potenciação, radiciação e raiz aproximada',
    subtitle: 'Conjuntos numéricos, fração geratriz de dízimas, propriedades de potências/radicais e estimativa decimal de raízes não exatas',
    estimatedMinutes: 17,
    editalSubtopics: [
      'Conjuntos numéricos (Naturais, Inteiros, Racionais, Irracionais e Reais)',
      'Operações fundamentais com números decimais exatos e dízimas periódicas (fração geratriz)',
      'Frações acumuladas (“fração do restante”) e resolução com MMC/MDC',
      'Potenciação: expoentes negativos, expoentes fracionários e regras de sinal',
      'Radiciação: simplificação de radicais, operações e racionalização simples',
      'Cálculo da raiz quadrada aproximada até décimos sem calculadora',
    ],
    coreSummary:
      'Quase toda questão de Matemática da ETE começa ou termina em uma conta com frações, potências, decimais ou radicais. Dominar a hierarquia de sinais — especialmente $(-a)^2 \\neq -a^2$ e $(a/b)^{-1} = b/a$ —, converter dízimas periódicas em frações exatas antes de calcular e aproximar raízes como $\\sqrt{54}$ até a casa decimal elimina erros bobos que custam a vaga.',
    rules: [
      {
        label: '1. Conjuntos Numéricos e Fração Geratriz de Dízimas Periódicas',
        detail:
          'Racionais ($\\mathbb{Q}$) são todo número representável por fração $\\frac{p}{q}$ ($q \\neq 0$): inteiros, decimais finitos e dízimas periódicas. Irracionais ($\\mathbb{I}$) têm infinitas casas sem repetição periódica ($\\pi, \\sqrt{2}, \\sqrt{3}, \\sqrt{5}$). Para converter dízima simples $0{,}abab\\ldots$, ponha o período sobre tantos $9$ quantos algarismos ele tiver ($0{,}444\\ldots = \\frac{4}{9}$). Na dízima composta $0{,}abbb\\ldots$, faça $\\frac{ab - a}{90}$ ($0{,}2777\\ldots = \\frac{27 - 2}{90} = \\frac{5}{18}$).',
      },
      {
        label: '2. Frações Sucessivas ("do Restante") vs. "do Total"',
        detail:
          'Se João gasta $\\frac{2}{7}$ do salário e depois $\\frac{3}{5}$ do RESTANTE, trabalhe com as SOBRAS multiplicadas: sobrou $1 - \\frac{2}{7} = \\frac{5}{7}$; depois gastou $\\frac{3}{5}$ disso e ficou com $\\frac{2}{5}$ da sobra. Fração final restante $= \\frac{2}{5} \\cdot \\frac{5}{7} = \\frac{2}{7}$. Nunca some frações com referências diferentes!',
      },
      {
        label: '3. Potenciação: Parênteses, Expoente Zero e Expoente Negativo',
        detail:
          '• Atenção ao sinal: $(-3)^2 = (-3)(-3) = +9$, mas $-3^2 = -(3^2) = -9$.\n• Expoente zero: $a^0 = 1$ (para $a \\neq 0$).\n• Expoente negativo INVERTE a base sem trocar o sinal do número: $a^{-n} = \\frac{1}{a^n}$ e $\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$. Ex.: $(0{,}2)^{-1} = \\left(\\frac{1}{5}\\right)^{-1} = 5$.\n• Propriedades: $a^m \\cdot a^n = a^{m+n}$, $\\frac{a^m}{a^n} = a^{m-n}$ e $(a^m)^n = a^{m\\cdot n}$.',
      },
      {
        label: '4. Radiciação, Racionalização e Raiz Quadrada Aproximada',
        detail:
          'Só é permitido somar ou subtrair radicais após fatorar e torná-los semelhantes: $\\sqrt{75} + \\sqrt{48} = 5\\sqrt{3} + 4\\sqrt{3} = 9\\sqrt{3}$. Expoente fracionário: $a^{m/n} = \\sqrt[n]{a^m}$. Racionalizar $\\frac{k}{\\sqrt{a}}$ consiste em multiplicar numerador e denominador por $\\sqrt{a}$. Para aproximar $\\sqrt{N}$ (item explícito 12.2.16 do Edital), cerque $N$ entre dois quadrados perfeitos inteiros e teste décimos intermediários.',
      },
    ],
    workedExamples: [
      {
        title: 'Exemplo 1 · Raiz quadrada aproximada até décimos ($\\sqrt{54}$)',
        problem: 'Qual é a melhor aproximação com uma casa decimal para $\\sqrt{54}$?',
        steps: [
          'Enquadre $54$ entre dois quadrados perfeitos consecutivos: $7^2 = 49 < 54 < 8^2 = 64$, logo $\\sqrt{54}$ está entre $7$ e $8$.',
          'Como $54$ está um pouco abaixo do ponto médio entre $49$ e $64$ ($56{,}5$), teste $7{,}3^2$ e $7{,}4^2$.',
          'Calcule: $7{,}3^2 = 53{,}29$ (distância $0{,}71$) e $7{,}4^2 = 54{,}76$ (distância $0{,}76$).',
        ],
        conclusion: 'Como $53{,}29$ está mais perto de $54$ do que $54{,}76$, $\\sqrt{54} \\approx 7{,}3$.',
      },
      {
        title: 'Exemplo 2 · Expressão mista com dízima, raiz cúbica e expoente negativo',
        problem: 'Calcule o valor exato de $E = 0{,}444\\ldots + \\sqrt{1{,}44} - (0{,}2)^{-1} + \\sqrt[3]{125}$.',
        steps: [
          'Converta cada parcela sem pressa: $0{,}444\\ldots = \\frac{4}{9}$ e $\\sqrt{1{,}44} = \\frac{12}{10} = \\frac{6}{5} = 1{,}2$.',
          'Trate o expoente negativo: $0{,}2 = \\frac{1}{5} \\implies (0{,}2)^{-1} = \\left(\\frac{1}{5}\\right)^{-1} = 5$.',
          'Extraia a raiz cúbica: $\\sqrt[3]{125} = 5$.',
          'Some tudo: $E = \\frac{4}{9} + 1{,}2 - 5 + 5 = \\frac{4}{9} + \\frac{6}{5} = \\frac{20 + 54}{45} = \\frac{74}{45}$.',
        ],
        conclusion: '$E = \\frac{74}{45}$ (note como os termos $-5 + 5$ se cancelam limpamente!).',
      },
    ],
    commonMistakes: [
      {
        wrongThought: '“$\\sqrt{0{,}16} = 0{,}04$ porque a metade de $16$ é $8$ e $\\sqrt{16} = 4$ com dois zeros.”',
        correction: 'Confira elevando ao quadrado: $0{,}04^2 = 0{,}0016$ (4 casas!). A resposta certa é $\\sqrt{0{,}16} = \\sqrt{\\frac{16}{100}} = \\frac{4}{10} = 0{,}4$.',
      },
      {
        wrongThought: '“$(-2)^{-2} = -4$ porque o expoente tem sinal negativo.”',
        correction: 'Expoente negativo inverte a base e mantém o expoente positivo: $(-2)^{-2} = \\frac{1}{(-2)^2} = \\frac{1}{4}$.',
      },
    ],
    eteTrap:
      'Misturar $(-a)^2$ com $-a^2$, esquecer de transformar dízima periódica em fração antes de somar e usar $(0{,}2)^{-1} = -0{,}2$ em vez de inverter para $5$.',
    selfExplanationPrompt: {
      question: 'Por que $\\sqrt{25 + 144}$ NÃO é igual a $\\sqrt{25} + \\sqrt{144}$?',
      modelAnswer:
        'Porque a radiciação não é distributiva sobre a adição nem sobre a subtração: deve-se primeiro efetuar a soma no radicando ($\\sqrt{169} = 13$), diferente de $5 + 12 = 17$.',
    },
    bookReferences: [
      'Gelson Iezzi, Osvaldo Dolce & Antônio Machado — Matemática e Realidade (Atual · Radicais e Reais)',
      'Luiz Roberto Dante — Matemática: Contexto & Aplicações, Vol. 1 (Ática · Conjuntos e Potências)',
    ],
    externalLinks: [
      {
        title: 'Potenciação e Radiciação — propriedades completas e exemplos',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/potenciacao-e-radiciacao/',
      },
      {
        title: 'Frações e Operações com Decimais passo a passo',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/o-que-e-fracao/',
      },
      {
        title: 'Videoaula · Potenciação e Radiciação para provas',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=WNG0UkUSoWY',
      },
      {
        title: 'Videoaula · Frações, Decimais e Dízimas Periódicas',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=HobKaKHvCtY',
      },
    ],
    activeCheckPrompt: 'Qual é o valor de $(-3)^2 - 3^2$ ?',
    activeCheckOptions: ['$0$.', '$-18$.', '$18$.'],
    activeCheckCorrect: 0,
    activeCheckWhy: '$(-3)^2 = +9$ e $3^2 = 9$; logo $9 - 9 = 0$! (Cuidado: se fosse $-3^2$ sem parênteses, valeria $-9$).',
  },

  {
    topicId: 'mat-medidas',
    discipline: 'MAT',
    editalRef: 'Edital 12.2 · Tópico 7',
    title: 'Sistemas de medidas (comprimento, área, capacidade e volume)',
    subtitle: 'Escalas métricas decimais ($\\times 10$, $\\times 100$, $\\times 1.000$), pontes Volume $\\leftrightarrow$ Litro, tempo sexagesimal e $\\text{km/h} \\leftrightarrow \\text{m/s}$',
    estimatedMinutes: 14,
    editalSubtopics: [
      'Medidas de comprimento ($\\text{km}, \\text{m}, \\text{cm}, \\text{mm}$) e massa ($\\text{kg}, \\text{g}, \\text{mg}$)',
      'Medidas de superfície/área ($\\text{km}^2, \\text{ha}, \\text{m}^2, \\text{cm}^2$) — salto de $100$ por casa',
      'Medidas de volume ($\\text{m}^3, \\text{dm}^3, \\text{cm}^3$) e relação com capacidade ($\\text{L}, \\text{mL}$)',
      'Conversão de tempo (horas decimais em minutos/segundos) e velocidade ($\\text{km/h} \\leftrightarrow \\text{m/s}$)',
    ],
    coreSummary:
      'Nunca faça uma conta multiplicando metros por centímetros ou somando litros com metros cúbicos antes de padronizar as unidades! A maioria dos erros nesse tópico do Edital acontece por usar o fator errado na área ($100$ por degrau, nunca $10$) e no volume ($1.000$ por degrau), além da ponte sagrada de reservatórios: $1\\text{ dm}^3 = 1\\text{ litro}$ e $1\\text{ m}^3 = 1.000\\text{ litros}$.',
    rules: [
      {
        label: '1. Escada Métrica: Linear ($10$), Área ($100$) e Volume ($1.000$)',
        detail:
          'Sequência padrão: $\\text{km — hm — dam — m — dm — cm — mm}$.\n• Comprimento ($1$ dimensão): cada degrau para a direita multiplica por $10$ ($1\\text{ m} = 100\\text{ cm}$).\n• Área ($2$ dimensões, quadrado): cada degrau multiplica por $10^2 = 100$ ($1\\text{ m}^2 = 10.000\\text{ cm}^2$; $1\\text{ hectare} = 1\\text{ hm}^2 = 10.000\\text{ m}^2$).\n• Volume ($3$ dimensões, cubo): cada degrau multiplica por $10^3 = 1.000$ ($1\\text{ m}^3 = 1.000\\text{ dm}^3 = 1.000.000\\text{ cm}^3$).',
      },
      {
        label: '2. Pontes Obrigatórias: Volume $\\leftrightarrow$ Capacidade',
        detail:
          '• $1\\text{ m}^3 = 1.000\\text{ litros}$\n• $1\\text{ dm}^3 = 1\\text{ litro} = 1.000\\text{ mL}$\n• $1\\text{ cm}^3 = 1\\text{ mL}$\nRegra prática: calcule o volume do tanque em $\\text{m}^3$ e multiplique direto por $1.000$ para obter litros (ou passe todas as arestas para $\\text{dm}$ antes de multiplicar).',
      },
      {
        label: '3. Sistema de Tempo (Base 60)',
        detail:
          '$1\\text{ hora} = 60\\text{ minutos} = 3.600\\text{ segundos}$. Se uma conta resultar em $1{,}75\\text{ h}$, a parte decimal ($0{,}75$) NÃO vale $75\\text{ min}$! Multiplique por $60$: $0{,}75 \\times 60 = 45\\text{ min} \\implies 1\\text{ h } 45\\text{ min}$.',
      },
      {
        label: '4. Conversão Rápida de Velocidade',
        detail:
          'Como $1\\text{ km} = 1.000\\text{ m}$ e $1\\text{ h} = 3.600\\text{ s}$, a razão simplifica para $3{,}6$:\n• De $\\text{km/h}$ para $\\text{m/s}$: divida por $3{,}6$. Ex.: $72\\text{ km/h} \\div 3{,}6 = 20\\text{ m/s}$.\n• De $\\text{m/s}$ para $\\text{km/h}$: multiplique por $3{,}6$. Ex.: $15\\text{ m/s} \\times 3{,}6 = 54\\text{ km/h}$.',
      },
    ],
    workedExamples: [
      {
        title: 'Exemplo 1 · Reservatório escolar com dimensões mistas',
        problem:
          'Um reservatório paralelepípedo mede $2\\text{ m}$ de comprimento, $150\\text{ cm}$ de largura e $80\\text{ cm}$ de altura. Quantos litros cabem em $75\\%$ de sua capacidade?',
        steps: [
          'Padronize todas as arestas para metros: $C = 2\\text{ m}$, $L = 1{,}5\\text{ m}$ e $H = 0{,}8\\text{ m}$.',
          'Calcule o volume total em $\\text{m}^3$: $V = 2 \\times 1{,}5 \\times 0{,}8 = 2{,}4\\text{ m}^3$.',
          'Converta para litros multiplicando por $1.000$: $2{,}4 \\times 1.000 = 2.400\\text{ L}$.',
          'Calcule $75\\%$ ($\\frac{3}{4}$) de $2.400\\text{ L}$: $\\frac{3}{4} \\times 2.400 = 1.800\\text{ L}$.',
        ],
        conclusion: 'Cabem $1.800$ litros.',
      },
      {
        title: 'Exemplo 2 · Azulejos no piso (conversão de área)',
        problem:
          'Quantas lajotas quadradas de $20\\text{ cm}$ de lado são necessárias para revestir um piso de $12\\text{ m}^2$?',
        steps: [
          'Converta a área da sala para $\\text{cm}^2$: $12\\text{ m}^2 = 12 \\times 10.000\\text{ cm}^2 = 120.000\\text{ cm}^2$.',
          'Calcule a área de uma lajota: $20\\text{ cm} \\times 20\\text{ cm} = 400\\text{ cm}^2$.',
          'Divida a área total pela área de cada peça: $\\frac{120.000}{400} = 300$ lajotas.',
        ],
        conclusion: 'São necessárias exatamente $300$ lajotas.',
      },
    ],
    commonMistakes: [
      {
        wrongThought: '“$1\\text{ m} = 100\\text{ cm}$, então $1\\text{ m}^2 = 100\\text{ cm}^2$ e $1\\text{ m}^3 = 100\\text{ L}$.”',
        correction: 'Na área o fator vai ao quadrado ($100^2 = 10.000\\text{ cm}^2$); no volume $1\\text{ m}^3 = (10\\text{ dm})^3 = 1.000\\text{ dm}^3 = 1.000\\text{ L}$.',
      },
      {
        wrongThought: '“$2{,}3\\text{ horas}$ equivale a $2\\text{ horas e } 30\\text{ minutos}$.”',
        correction: '$0{,}3$ de $60\\text{ min} = 0{,}3 \\times 60 = 18\\text{ minutos}$, logo $2\\text{ h } 18\\text{ min}$!',
      },
    ],
    eteTrap:
      'Enunciados dão uma medida em metros e outra em centímetros na mesma figura e colocam nas alternativas exatamente o resultado obtido por quem usou $1\\text{ m}^2 = 100\\text{ cm}^2$ ou $2{,}3\\text{ h} = 2\\text{ h } 30\\text{ min}$.',
    selfExplanationPrompt: {
      question: 'Por que cada degrau na tabela de áreas multiplica por $100$ em vez de $10$?',
      modelAnswer:
        'Porque área é o produto de duas dimensões (comprimento $\\times$ largura): ao converter cada uma de $\\text{m}$ para $\\text{cm}$ ($\\times 10$ e $\\times 10$), o produto total fica multiplicado por $10 \\times 10 = 100$ (por degrau, ou $10.000$ em dois degraus).',
    },
    bookReferences: [
      'Gelson Iezzi, Osvaldo Dolce & Antônio Machado — Matemática e Realidade (Atual · Grandezas e Medidas)',
      'Luiz Roberto Dante — Projeto Teláris / Contexto & Aplicações (Ática · Sistema Métrico)',
    ],
    externalLinks: [
      {
        title: 'Unidades de Medida — comprimento, área, volume, massa e capacidade',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/unidades-de-medida/',
      },
      {
        title: 'Videoaula · Conversão de Unidades de Medida e Litros',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=Kf_YzZ0CnIs',
      },
    ],
    activeCheckPrompt: 'Um aquário com volume interno de $0{,}08\\text{ m}^3$ comporta quantos litros de água?',
    activeCheckOptions: ['$8$ litros.', '$80$ litros.', '$800$ litros.'],
    activeCheckCorrect: 1,
    activeCheckWhy: '$1\\text{ m}^3 = 1.000\\text{ L} \\implies 0{,}08 \\times 1.000 = 80$ litros.',
  },

  {
    topicId: 'mat-proporcao',
    discipline: 'MAT',
    editalRef: 'Edital 12.2 · Tópicos 8–9',
    title: 'Razão, proporção e divisão direta/inversamente proporcional',
    subtitle: 'Método da constante $k$, escalas lineares e de área, e o algoritmo exato via MMC para divisão inversamente proporcional',
    estimatedMinutes: 15,
    editalSubtopics: [
      'Razão entre grandezas (escala cartográfica, densidade demográfica, consumo e vazão)',
      'Propriedade fundamental das proporções e sistemas de razões ($x = ak,\\; y = bk$)',
      'Divisão em partes diretamente proporcionais',
      'Divisão em partes inversamente proporcionais com uso de MMC',
    ],
    coreSummary:
      'Divisão proporcional é clássica em concursos técnicos de Pernambuco. Sempre que encontrar razões como $\\frac{a}{b} = \\frac{3}{5}$, reduza tudo a uma única incógnita usando $a = 3k$ e $b = 5k$. E atenção dobrada à divisão INVERSAMENTE proporcional: inverta os índices ($\\frac{1}{p_i}$), equalize denominadores pelo MMC e use os numeradores como pesos diretos — quem tem menos faltas ou menor tempo deve ganhar a maior parcela!',
    rules: [
      {
        label: '1. Técnica da Constante de Proporcionalidade ($k$)',
        detail:
          'Se três números $a, b, c$ são diretamente proporcionais a $3, 4, 5$, escreva $a = 3k$, $b = 4k$, $c = 5k$. Substitua em qualquer condição do problema (soma, diferença ou equação linear como $2a + b - c = 25$) para descobrir $k$ em uma linha.',
      },
      {
        label: '2. Divisão Diretamente Proporcional vs. Divisão Igualitária',
        detail:
          'Para dividir uma quantia $T$ proporcionalmente a $(p_1, p_2, p_3)$, some os índices ($S = p_1 + p_2 + p_3$), calcule o valor de uma parte ($k = \\frac{T}{S}$) e multiplique cada índice por $k$. Nunca divida pela quantidade de pessoas quando o consumo/esforço foi proporcional!',
      },
      {
        label: '3. Divisão INVERSAMENTE Proporcional (Passo a Passo infalível)',
        detail:
          'Para dividir $T$ em partes inversamente proporcionais a $(a, b, c)$:\n1) Converta para os inversos $\\frac{1}{a}, \\frac{1}{b}, \\frac{1}{c}$.\n2) Tire o MMC de $(a, b, c)$ e transforme as frações para o mesmo denominador.\n3) Os novos NUMERADORES viram partes diretamente proporcionais $p_1, p_2, p_3$!\n4) Faça $k = \\frac{T}{p_1 + p_2 + p_3}$ e confira que o menor índice recebe a maior parte.',
      },
      {
        label: '4. Escalas e Razão de Áreas',
        detail:
          'Escala $E = \\frac{\\text{medida no desenho}}{\\text{medida real}}$ (ambas na mesma unidade!). Na escala $1:200$, $1\\text{ cm}$ na planta representa $200\\text{ cm} = 2\\text{ m}$ reais. Se pedir ÁREA real, converta largura e comprimento individualmente para metros ANTES de multiplicar!',
      },
    ],
    workedExamples: [
      {
        title: 'Exemplo 1 · Prêmio inversamente proporcional às faltas',
        problem:
          'Uma empresa dividirá R$ 4.400,00 de bônus entre três estagiários em partes inversamente proporcionais ao número de faltas no semestre: Ana teve $2$ faltas, Bruno teve $3$ e Carla teve $6$. Quanto receberá Ana?',
        steps: [
          'Monte os inversos das faltas: Ana $\\to \\frac{1}{2}$, Bruno $\\to \\frac{1}{3}$, Carla $\\to \\frac{1}{6}$.',
          'Tire o $\\text{MMC}(2, 3, 6) = 6$ para igualar denominadores: Ana $\\to \\frac{3}{6}$, Bruno $\\to \\frac{2}{6}$, Carla $\\to \\frac{1}{6}$.',
          'Use os numeradores $(3, 2, 1)$ como pesos diretos: $3k + 2k + 1k = 4.400$... (se total fosse R$ 4.200,00: $6k = 4.200 \\implies k = 700$; para R$ 4.400,00: $k = \\frac{4.400}{6}$ não dá inteiro — ajustando no teste para R$ 4.200,00 ou fazendo fração exata: para R$ 4.400,00 é $\\frac{3}{6}$ de $4.400 = 2.200$!).',
          'Note: a parcela de Ana vale $\\frac{3}{3 + 2 + 1} = \\frac{3}{6} = \\frac{1}{2}$ do total $\\implies \\frac{1}{2} \\times 4.400 =$ R$ 2.200,00!',
        ],
        conclusion: 'Ana (quem faltou menos, apenas $2$ vezes) recebe metade do bônus total: R$ 2.200,00!',
      },
      {
        title: 'Exemplo 2 · Área na planta baixa com escala $1:200$',
        problem:
          'Na planta baixa de um laboratório desenhada na escala $1:200$, uma sala mede $4\\text{ cm}$ por $5\\text{ cm}$. Qual é sua área real em $\\text{m}^2$?',
        steps: [
          'Largura real: $4\\text{ cm} \\times 200 = 800\\text{ cm} = 8\\text{ m}$.',
          'Comprimento real: $5\\text{ cm} \\times 200 = 1.000\\text{ cm} = 10\\text{ m}$.',
          'Área real: $8\\text{ m} \\times 10\\text{ m} = 80\\text{ m}^2$.',
        ],
        conclusion: 'Área real $= 80\\text{ m}^2$ (quem faz $20\\text{ cm}^2 \\times 200$ erra feio!).',
      },
    ],
    commonMistakes: [
      {
        wrongThought: '“Na divisão inversamente proporcional a $(2, 4)$, quem tem $4$ recebe o dobro de quem tem $2$.”',
        correction: 'É exatamente o oposto! Inversamente proporcional significa que o produto $p \\cdot \\text{valor}$ é constante, logo o maior índice recebe a MENOR parcela.',
      },
      {
        wrongThought: '“A razão entre $30\\text{ cm}$ e $1{,}2\\text{ m}$ é $\\frac{30}{1{,}2} = 25$.”',
        correction: 'Razão exige mesma unidade! Passe $1{,}2\\text{ m} = 120\\text{ cm} \\implies \\frac{30}{120} = \\frac{1}{4}$.',
      },
    ],
    eteTrap:
      'Em divisão inversa, deixar de tirar o MMC e somar $(2 + 3 + 6)$ diretamente; ou em escalas de plantas baixas multiplicar $\\text{cm}^2$ pelo fator linear ($200$) em vez do fator quadrático ($200^2$).',
    selfExplanationPrompt: {
      question: 'Por que somar os numeradores após igualar os denominadores dos inversos $\\frac{1}{a}, \\frac{1}{b}, \\frac{1}{c}$ funciona na divisão inversamente proporcional?',
      modelAnswer:
        'Porque dividir um total proporcionalmente a $\\left(\\frac{3}{6}, \\frac{2}{6}, \\frac{1}{6}\\right)$ mantém exatamente a mesma razão que $(3, 2, 1)$, já que todas as frações compartilham o mesmo denominador positivo ($6$).',
    },
    bookReferences: [
      'Gelson Iezzi, Osvaldo Dolce & Antônio Machado — Matemática e Realidade (Atual · Razões e Proporções)',
      'Luiz Roberto Dante — Matemática: Contexto & Aplicações (Ática · Proporcionalidade)',
    ],
    externalLinks: [
      {
        title: 'Razão e Proporção — propriedades, escalas e divisão proporcional',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/razao-e-proporcao/',
      },
      {
        title: 'Videoaula · Razão, Proporção e Divisão Direta/Inversa',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=JhhHa2lF9ws',
      },
    ],
    activeCheckPrompt:
      'Dividindo $150$ em partes inversamente proporcionais a $2$ e $3$, a maior parte vale:',
    activeCheckOptions: ['$60$.', '$90$.', '$100$.'],
    activeCheckCorrect: 1,
    activeCheckWhy: 'Inversos: $\\frac{1}{2}$ e $\\frac{1}{3} \\to$ com MMC $6$ viram $\\frac{3}{6}$ e $\\frac{2}{6}$ (partes $3$ e $2$, soma $5$). $150/5 = 30$. Maior parte $= 3 \\times 30 = 90$.',
  },

  {
    topicId: 'mat-regra3',
    discipline: 'MAT',
    editalRef: 'Edital 12.2 · Tópico 10',
    title: 'Regra de três simples e composta',
    subtitle: 'Identifique relações diretas vs. inversas sem setinhas confusas, resolva problemas com $3$ ou $4$ grandezas e domine produtividade conjunta',
    estimatedMinutes: 15,
    editalSubtopics: [
      'Grandezas diretamente proporcionais (razão constante) vs. inversamente proporcionais (produto constante)',
      'Regra de três simples aplicada a velocidade, consumo, escala e rendimento',
      'Regra de três composta pelo método do isolamento da coluna incógnita',
      'Problemas de trabalho conjunto (torneiras / máquinas / equipes com eficiências diferentes)',
    ],
    coreSummary:
      'Regra de três composta derruba candidatos quando eles multiplicam tudo direto em cruz sem verificar se cada grandeza é direta ou inversa em relação ao que se quer descobrir. Com o método de comparação individual coluna por coluna — segurando mentalmente todas as demais constantes — e o conceito de taxa horária em problemas de torneiras, não há como errar a montagem.',
    rules: [
      {
        label: '1. Regra de Três Simples: Cruzado vs. Linha Reta',
        detail:
          'Antes de fazer conta, pergunte: se A dobra, B dobra (Direta → multiplique cruzado) ou B cai pela metade (Inversa → multiplique em linha reta)? Velocidade e tempo (na mesma distância), operários e dias (na mesma obra) e vazão e tempo (no mesmo tanque) são sempre INVERSAS.',
      },
      {
        label: '2. Regra de Três Composta em 3 Passos Seguros',
        detail:
          '1) Monte a tabela alinhando cada grandeza na mesma unidade.\n2) Escreva à esquerda a razão que contém $x$: $\\frac{\\text{valor antigo de } x}{x} = \\ldots$\n3) Compare CADA outra coluna ISOLADAMENTE com a coluna de $x$ (fingindo que o resto não mudou): se for Direta, copie a fração na mesma ordem ($\\frac{\\text{cima}}{\\text{baixo}}$); se for Inversa, INVERTA a fração ($\\frac{\\text{baixo}}{\\text{cima}}$) e multiplique todas à direita!',
      },
      {
        label: '3. Cuidado com “Mais Rápido / Mais Eficiente” ou “Restante da Obra”',
        detail:
          'Se $8$ máquinas concluíram metade da obra em $6$ dias e entram mais $4$ máquinas, a nova linha compara apenas o RESTANTE da obra ($\\frac{1}{2}$) com $8 + 4 = 12$ máquinas! Leia sempre o que já foi produzido vs. o que falta produzir.',
      },
      {
        label: '4. Taxa Unitária (Torneiras e Equipes Simultâneas)',
        detail:
          'Nunca some tempos! Some frações de trabalho por hora: se $A$ enche em $t_A$ horas e $B$ em $t_B$ horas, em $1$ hora juntas enchem $\\frac{1}{t_A} + \\frac{1}{t_B}$. Se houver ralo esvaziando em $t_R$, subtraia $- \\frac{1}{t_R}$. Ao final, inverta o resultado para achar o tempo total.',
      },
    ],
    workedExamples: [
      {
        title: 'Exemplo 1 · Regra de três composta clássica ($4$ grandezas)',
        problem:
          'Em uma gráfica, $6$ impressoras trabalhando $5\\text{ h/dia}$ durante $4$ dias imprimem $12.000$ apostilas. Quantos dias levarão $8$ impressoras trabalhando $6\\text{ h/dia}$ para imprimir $24.000$ apostilas?',
        steps: [
          'Monte a coluna da incógnita $x$ (dias): $\\frac{4}{x} = \\text{(produto das outras razões)}$.',
          'Compare Impressoras com Dias: MAIS impressoras precisam de MENOS dias $\\to$ INVERSA $\\implies$ inverte para $\\frac{8}{6}$.',
          'Compare Horas/dia com Dias: MAIS horas por dia precisam de MENOS dias $\\to$ INVERSA $\\implies$ inverte para $\\frac{6}{5}$.',
          'Compare Apostilas com Dias: MAIS apostilas exigem MAIS dias $\\to$ DIRETA $\\implies$ mantém $\\frac{12.000}{24.000} = \\frac{1}{2}$.',
          'Multiplique tudo: $\\frac{4}{x} = \\frac{8}{6} \\cdot \\frac{6}{5} \\cdot \\frac{1}{2} = \\frac{4}{5} \\implies x = 5$ dias!',
        ],
        conclusion: 'Serão necessários $5$ dias (observe como cortar $6$ com $6$ e $8/2=4$ evita contas gigantes!).',
      },
      {
        title: 'Exemplo 2 · Duas torneiras e um ralo',
        problem:
          'A torneira A enche um tanque em $3\\text{ h}$, a torneira B em $6\\text{ h}$, e um ralo esvazia o tanque cheio em $12\\text{ h}$. Abrindo os três juntos, em quantas horas o tanque encherá?',
        steps: [
          'Fração do tanque alterada em $1$ hora: $+\\frac{1}{3} + \\frac{1}{6} - \\frac{1}{12}$.',
          'Com $\\text{MMC}(3, 6, 12) = 12$: $\\frac{4 + 2 - 1}{12} = \\frac{5}{12}$ do tanque por hora.',
          'Tempo para completar $\\frac{12}{12}$ (tanque cheio): inverta a taxa $\\implies \\frac{12}{5} = 2{,}4\\text{ h} = 2\\text{ h } 24\\text{ min}$.',
        ],
        conclusion: 'O tanque encherá em $2\\text{ horas e } 24\\text{ minutos}$.',
      },
    ],
    commonMistakes: [
      {
        wrongThought: '“Para saber quando $8$ operários substituem $12$, multiplico em cruz $\\frac{12}{8} = \\frac{10}{x}$.”',
        correction: 'Se $12$ levam $10$ dias, $8$ (menos pessoas) devem levar MAIS dias! Montagem certa: $\\frac{10}{x} = \\frac{8}{12} \\implies x = 15$ dias.',
      },
      {
        wrongThought: '“Se A enche em $4\\text{ h}$ e B em $6\\text{ h}$, juntas levam a média $(4+6)/2 = 5\\text{ h}$.”',
        correction: 'Abertas juntas têm que terminar MAIS RÁPIDO do que a torneira mais veloz ($< 4\\text{ h}$)! Usa-se soma dos inversos ($\\frac{1}{4}+\\frac{1}{6} \\implies 2\\text{ h }24\\text{ min}$).',
      },
    ],
    eteTrap:
      'Multiplicar inversamente sem inverter a fração ou misturar grandezas com nomes parecidos (horas/dia vs. total de dias) na comparação de uma regra de três composta.',
    selfExplanationPrompt: {
      question: 'Por que na regra de três composta devemos comparar cada coluna sempre com a coluna da incógnita $x$, e não entre colunas vizinhas?',
      modelAnswer:
        'Porque o método testa o efeito parcial de cada variável mantendo todas as outras constantes, garantindo a proporcionalidade direta ou inversa exatamente em relação ao resultado procurado ($x$).',
    },
    bookReferences: [
      'Gelson Iezzi, Osvaldo Dolce & Antônio Machado — Matemática e Realidade (Atual · Regra de Três)',
      'Portal da OBMEP / IMPA — Aritmética: Proporcionalidade e Regra de Três Composta',
    ],
    externalLinks: [
      {
        title: 'Regra de Três Simples e Composta — método passo a passo',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/regra-de-tres-simples-e-composta/',
      },
      {
        title: 'Videoaula · Regra de Três Simples e Composta sem errar inversas',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=IPnIBS9h49M',
      },
    ],
    activeCheckPrompt:
      'Se $5$ máquinas produzem um lote em $12$ horas, $10$ máquinas iguais produzem o mesmo lote em:',
    activeCheckOptions: ['$24$ horas.', '$6$ horas.', '$10$ horas.'],
    activeCheckCorrect: 1,
    activeCheckWhy: 'O dobro de máquinas realiza o mesmo trabalho na metade do tempo (inversamente proporcional): $\\frac{5\\cdot 12}{10} = 6$ horas.',
  },

  {
    topicId: 'mat-porcentagem',
    discipline: 'MAT',
    editalRef: 'Edital 12.2 · Tópico 11',
    title: 'Porcentagem, variações sucessivas e problemas comerciais',
    subtitle: 'Domine fatores multiplicativos ($1 + i$ e $1 - d$), descontos/acréscimos sucessivos, valor original (reversa) e margem de lucro',
    estimatedMinutes: 14,
    editalSubtopics: [
      'Razão centesimal ($p\\% = \\frac{p}{100}$) e variação percentual ($\\frac{\\Delta}{V_{\\text{inicial}}}$)',
      'Fator de atualização para acréscimos ($1 + i$) e descontos ($1 - d$)',
      'Aumentos e descontos sucessivos (produto de fatores)',
      'Porcentagem reversa: descobrir o preço original antes do reajuste',
      'Lucro sobre custo vs. desconto sobre tabela',
    ],
    coreSummary:
      'Porcentagem é disparadamente o assunto mais aplicado em problemas do dia a dia na ETE. Abandonar contas demoradas de “regra de três para tudo” e adotar o método dos FATORES MULTIPLICATIVOS transforma problemas de três etapas — aumentos sucessivos, queda seguida de alta e cálculo do valor inicial — em multiplicações ou divisões de 10 segundos.',
    rules: [
      {
        label: '1. Fatores Multiplicativos de Acréscimo e Desconto',
        detail:
          '• Aumento de $p\\%$: multiplique por $(1 + \\frac{p}{100})$. Ex.: $+15\\% \\to \\times 1{,}15$; $+8\\% \\to \\times 1{,}08$; $+100\\% \\to \\times 2$ (dobra!).\n• Desconto de $d\\%$: multiplique por $(1 - \\frac{d}{100})$. Ex.: $-20\\% \\to \\times 0{,}80$; $-5\\% \\to \\times 0{,}95$; $-12\\% \\to \\times 0{,}88$.',
      },
      {
        label: '2. Aumentos e Descontos Sucessivos NUNCA se Somam!',
        detail:
          'Cada novo percentual incide sobre o valor atualizado da etapa anterior, nunca sobre o inicial. Multiplique os fatores entre si:\n• Dois aumentos de $10\\%$: $1{,}10 \\times 1{,}10 = 1{,}21 \\implies +21\\%$ (não $+20\\%$!).\n• Aumento de $20\\%$ seguido de desconto de $20\\%$: $1{,}20 \\times 0{,}80 = 0{,}96 \\implies -4\\%$ líquido (sempre cai!).',
      },
      {
        label: '3. Porcentagem Reversa (Voltar ao Valor Original)',
        detail:
          'Se um produto custa R$ 276,00 DEPOIS de subir $15\\%$, JAMAIS tire $15\\%$ de R$ 276,00! A base do aumento foi o preço antigo $V_0$: $V_0 \\times 1{,}15 = 276 \\implies V_0 = \\frac{276}{1{,}15} =$ R$ 240,00. Após desconto de $20\\%$, divida por $0{,}80$.',
      },
      {
        label: '4. Variação Percentual e Cálculo Mental Rápido',
        detail:
          'De $V_i$ para $V_f$, a taxa é $\\frac{V_f - V_i}{V_i} \\times 100\\%$ — note que o denominador é SEMPRE de onde partiu ($V_i$). Para mentalizar na prova: $10\\%$ divide por $10$, $1\\%$ divide por $100$, $50\\%$ é metade, $25\\%$ é um quarto ($\\div 4$) e $20\\%$ é um quinto ($\\div 5$).',
      },
    ],
    workedExamples: [
      {
        title: 'Exemplo 1 · Desconto e aumento sucessivos para retornar ao valor inicial',
        problem:
          'Um notebook sofreu redução de $20\\%$ na Black Friday. De quantos por cento precisa ser o aumento sobre o preço promocional para voltar ao valor original?',
        steps: [
          'Suponha valor inicial $V_0 = 100$. Após desconto de $20\\%$, cai para $100 \\times 0{,}80 = 80$.',
          'Para ir de $80$ de volta a $100$, precisa subir $\\Delta = +20$.',
          'Calcule a taxa em relação à nova base ($80$): $\\frac{20}{80} = \\frac{1}{4} = 0{,}25 = 25\\%$.',
        ],
        conclusion: 'É preciso aumentar $25\\%$ (e não $20\\%$!) sobre o preço promocional.',
      },
      {
        title: 'Exemplo 2 · Preço original após dois descontos sucessivos',
        problem:
          'Após dois descontos sucessivos de $10\\%$ e $20\\%$, um curso preparatório passou a custar R$ 360,00. Qual era o preço cheio antes dos descontos?',
        steps: [
          'Monte os fatores dos descontos: $-10\\% \\to 0{,}90$ e $-20\\% \\to 0{,}80$.',
          'Fator combinado: $0{,}90 \\times 0{,}80 = 0{,}72$ (desconto único de $28\\%$, não $30\\%$!).',
          'Iguale ao preço pago: $V_0 \\times 0{,}72 = 360 \\implies V_0 = \\frac{360}{0{,}72} = 500$.',
        ],
        conclusion: 'O preço original cheio era R$ 500,00.',
      },
    ],
    commonMistakes: [
      {
        wrongThought: '“Subiu $20\\%$ e depois caiu $20\\%$, então ficou igual ao início ($0\\%$).”',
        correction: 'Os $20\\%$ de queda incidem sobre $120\\%$, que é maior do que $100\\%$ — portanto tira mais do que pôs: $1{,}2 \\times 0{,}8 = 0{,}96$ ($-4\\%$).',
      },
      {
        wrongThought: '“Para descobrir quanto custava antes de aumentar $25\\%$, subtraio $25\\%$ do preço novo.”',
        correction: 'O caminho inverso de multiplicar por $1{,}25$ é DIVIDIR por $1{,}25$ (equivale a tirar $20\\%$ do valor final, não $25\\%$).',
      },
    ],
    eteTrap:
      'Somar percentuais em descontos/acréscimos sucessivos ($10\\% + 20\\% = 30\\%$, errado!), trocar a base de comparação no retorno de preço e esquecer que cada questão da prova da ETE ($20$ itens) vale $5\\%$ do total.',
    selfExplanationPrompt: {
      question: 'Por que um aumento de $x\\%$ seguido de um desconto de $x\\%$ (com $x > 0$) resulta SEMPRE em perda líquida?',
      modelAnswer:
        'Porque o produto dos fatores $(1 + i)(1 - i) = 1 - i^2$ é sempre estritamente menor que $1$ para qualquer $i > 0$ (ex.: $1 - 0{,}2^2 = 0{,}96$), provocando queda de $i^2$.',
    },
    bookReferences: [
      'Gelson Iezzi, Osvaldo Dolce & Antônio Machado — Matemática e Realidade (Atual · Porcentagem)',
      'Luiz Roberto Dante — Matemática: Contexto & Aplicações (Ática · Matemática Comercial)',
    ],
    externalLinks: [
      {
        title: 'Porcentagem: cálculo rápido, acréscimos e descontos sucessivos',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/porcentagem/',
      },
      {
        title: 'Videoaula · Porcentagem, Fator Multiplicativo e Porcentagem Reversa',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=_kYc4oJAp8Y',
      },
    ],
    activeCheckPrompt:
      'Um produto sofre dois descontos sucessivos de $10\\%$. O desconto único equivalente é de:',
    activeCheckOptions: ['$20\\%$.', '$19\\%$.', '$21\\%$.'],
    activeCheckCorrect: 1,
    activeCheckWhy: '$0{,}90 \\times 0{,}90 = 0{,}81 \\implies$ pagou $81\\%$, logo o desconto total foi $100\\% - 81\\% = 19\\%$.',
  },

  {
    topicId: 'mat-medias',
    discipline: 'MAT',
    editalRef: 'Edital 12.2 · Tópico 12',
    title: 'As 4 médias: aritmética, ponderada, geométrica e harmônica',
    subtitle: 'Diferencial obrigatório do Edital ETE: fórmulas, propriedades da soma total, crescimento percentual ($M_g$) e velocidade média em trechos iguais ($M_h$)',
    estimatedMinutes: 16,
    editalSubtopics: [
      'Média Aritmética Simples ($M_a$) e variação da soma com entrada/saída de elementos',
      'Média Aritmética Ponderada ($M_p$) em notas com pesos e tabelas de frequência',
      'Média Geométrica ($M_g$) aplicada a números, retângulos/quadrados e taxas de crescimento',
      'Média Harmônica ($M_h$) aplicada a velocidades iguais em ida e volta e torneiras',
      'Relação fundamental $M_h \\le M_g \\le M_a$',
    ],
    coreSummary:
      'Ao contrário de provas comuns do Ensino Fundamental que cobram apenas médias simples e ponderadas, o Item 12.2.12 do Edital da ETE PE exige explicitamente TODAS as quatro médias: Aritmética, Ponderada, Geométrica e Harmônica. Entender QUANDO cada uma aparece — e lembrar sempre da transformação $\\text{Soma} = \\text{Média} \\times \\text{Quantidade}$ — resolve 100% dessas questões.',
    rules: [
      {
        label: '1. Média Aritmética Simples ($M_a$) e Técnica da Soma Total',
        detail:
          '$$M_a = \\frac{x_1 + x_2 + \\dots + x_n}{n}$$\nTruque mestre para problemas de turma/simulado: converta média em SOMA multiplicando por $n$ ($\\text{Soma} = M_a \\cdot n$). Se entra um 6º aluno e a média sobe de $14$ para $14{,}5$, a nota dele é a diferença entre a soma nova ($6 \\times 14{,}5 = 87$) e a soma antiga ($5 \\times 14 = 70$), ou seja, $17$.',
      },
      {
        label: '2. Média Aritmética Ponderada ($M_p$)',
        detail:
          '$$M_p = \\frac{x_1 p_1 + x_2 p_2 + \\dots + x_k p_k}{p_1 + p_2 + \\dots + p_k}$$\nMultiplica cada valor pelo seu peso (ou frequência na tabela) e divide pela SOMA DOS PESOS — nunca pela quantidade de linhas da tabela! E lembre: você NÃO pode fazer a média aritmética das médias de duas turmas de tamanhos diferentes; some todas as notas e divida pelo total de alunos.',
      },
      {
        label: '3. Média Geométrica ($M_g$)',
        detail:
          '$$M_g = \\sqrt[n]{x_1 \\cdot x_2 \\cdots x_n} \\qquad \\text{(para dois termos: } M_g = \\sqrt{a \\cdot b}\\text{)}$$\nRepresenta o lado de um quadrado de mesma área que um retângulo $a \\times b$ ou o fator médio de crescimento composto (ex.: inflação/rendimento de $+20\\%$ e $+80\\%$ $\\to \\sqrt{1{,}2 \\times 1{,}8}$).',
      },
      {
        label: '4. Média Harmônica ($M_h$) e Desigualdade das Médias',
        detail:
          '$$M_h = \\frac{n}{\\frac{1}{x_1} + \\frac{1}{x_2} + \\dots + \\frac{1}{x_n}} \\qquad \\text{(para dois termos: } M_h = \\frac{2ab}{a + b}\\text{)}$$\nAplicação nº 1: velocidade média ao percorrer a MESMA DISTÂNCIA na ida a $v_1$ e na volta a $v_2$! E memorize a ordem sempre válida para positivos distintos: $M_h < M_g < M_a$.',
      },
    ],
    workedExamples: [
      {
        title: 'Exemplo 1 · Velocidade média na ida e volta (Média Harmônica)',
        problem:
          'Um ônibus faz o percurso Recife–Olinda a $40\\text{ km/h}$ e retorna pelo mesmo trajeto a $60\\text{ km/h}$. Qual foi a velocidade média na viagem completa?',
        steps: [
          'Como as distâncias de ida e volta são IGUAIS ($d$), o tempo de ida ($d/40$) foi maior que o de volta ($d/60$). Logo, NÃO é média aritmética!',
          'Aplique a Média Harmônica para $2$ velocidades: $M_h = \\frac{2 \\cdot 40 \\cdot 60}{40 + 60}$.',
          'Calcule: $M_h = \\frac{4.800}{100} = 48\\text{ km/h}$.',
        ],
        conclusion: 'Velocidade média $= 48\\text{ km/h}$ (repare que $48 < 50 = M_a$, coerente porque ficou mais tempo na ida lenta!).',
      },
      {
        title: 'Exemplo 2 · Média Geométrica de três números e nota mínima na Ponderada',
        problem:
          '(A) Calcule a média geométrica de $2, 4$ e $27$. (B) Um processo seletivo usa pesos $2$ (LP) e $3$ (Mat). Se Pedro tirou $8{,}0$ em LP, quanto precisa em Mat para ficar com média ponderada $7{,}4$?',
        steps: [
          'Em (A), há $3$ valores $\\implies$ raiz CÚBICA: $M_g = \\sqrt[3]{2 \\cdot 4 \\cdot 27} = \\sqrt[3]{8 \\cdot 27} = 2 \\cdot 3 = 6$ (não tente multiplicar $216$ se já vê os cubos!).',
          'Em (B), monte a equação usando soma dos pesos ($2 + 3 = 5$): $\\frac{8{,}0 \\cdot 2 + x \\cdot 3}{5} = 7{,}4 \\implies 16 + 3x = 37 \\implies 3x = 21 \\implies x = 7{,}0$.',
        ],
        conclusion: '(A) $M_g = 6$; (B) Pedro precisa de $7{,}0$ em Matemática.',
      },
    ],
    commonMistakes: [
      {
        wrongThought: '“Ida a $40\\text{ km/h}$ e volta a $60\\text{ km/h}$ dá média $(40 + 60)/2 = 50\\text{ km/h}$.”',
        correction: 'Média aritmética só vale se os TEMPOS fossem iguais. Para DISTÂNCIAS iguais, vale a Média Harmônica ($48\\text{ km/h}$).',
      },
      {
        wrongThought: '“Para calcular $M_g$ de três números, sempre tiro raiz quadrada.”',
        correction: 'O índice da raiz na Média Geométrica é sempre a QUANTIDADE DE TERMOS ($n$): $2$ termos $\\to$ raiz quadrada; $3$ termos $\\to$ raiz cúbica; $4$ termos $\\to$ raiz quarta.',
      },
    ],
    eteTrap:
      'Colocar a média aritmética ($50\\text{ km/h}$) como letra A num problema de ida e volta na mesma distância, ou dividir a média ponderada pela quantidade de provas ($3$) em vez da soma dos pesos ($1 + 2 + 3 = 6$).',
    selfExplanationPrompt: {
      question: 'Por que a velocidade média de ida e volta numa mesma estrada é sempre menor que a média aritmética das duas velocidades?',
      modelAnswer:
        'Porque o veículo passa MAIS TEMPO rodando na velocidade mais baixa (já que $t = d/v$) e menos tempo na velocidade mais alta, puxando a velocidade média global para baixo — exatamente o que a média harmônica mede.',
    },
    bookReferences: [
      'Gelson Iezzi & Samuel Hazzan — Fundamentos de Matemática Elementar, Vol. 1 (Atual · Médias)',
      'Luiz Roberto Dante — Matemática: Contexto & Aplicações (Ática · Estatística Básica e Médias)',
    ],
    externalLinks: [
      {
        title: 'Média Aritmética, Geométrica e Harmônica — fórmulas e exemplos',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/media/',
      },
      {
        title: 'Média Ponderada — cálculo com pesos e frequências',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/media-ponderada/',
      },
      {
        title: 'Média Harmônica: conceito e aplicações em velocidade e razão',
        source: 'Brasil Escola',
        kind: 'artigo',
        url: 'https://brasilescola.uol.com.br/matematica/media-harmonica.htm',
      },
      {
        title: 'Exercícios comentados sobre Média Harmônica',
        source: 'Mundo Educação',
        kind: 'artigo',
        url: 'https://exercicios.mundoeducacao.uol.com.br/exercicios-matematica/exercicios-sobre-media-harmonica.htm',
      },
      {
        title: 'Videoaula · As 4 Médias: Aritmética, Ponderada, Geométrica e Harmônica',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=40N4K899xAE',
      },
    ],
    activeCheckPrompt: 'A média geométrica entre $4$ e $25$ é:',
    activeCheckOptions: ['$14{,}5$.', '$10$.', '$20$.'],
    activeCheckCorrect: 1,
    activeCheckWhy: '$M_g = \\sqrt{4 \\times 25} = \\sqrt{100} = 10$.',
  },

  {
    topicId: 'mat-algebra',
    discipline: 'MAT',
    editalRef: 'Edital 12.2 · Tópicos 13–15',
    title: 'Polinômios, produtos notáveis e fatoração algébrica',
    subtitle: 'Identidades essenciais, truques de cálculo numérico com diferença de quadrados e simplificação segura de frações algébricas',
    estimatedMinutes: 16,
    editalSubtopics: [
      'Monômios e polinômios: grau, redução de termos semelhantes, adição, multiplicação e valor numérico $P(a)$',
      'Produtos notáveis: quadrado da soma $(a+b)^2$, quadrado da diferença $(a-b)^2$ e produto da soma pela diferença $(a+b)(a-b)$',
      'Cubo da soma/diferença $(a\\pm b)^3$ e produto de Stevin $(x+a)(x+b)$',
      'Fatoração: fator comum em evidência, agrupamento, diferença de quadrados e trinômio quadrado perfeito',
      'Simplificação e domínio de frações algébricas',
    ],
    coreSummary:
      'Produtos notáveis e fatoração são ferramentas de velocidade: transformam expressões aparentemente monstruosas — como $\\frac{105^2 - 95^2}{20}$ ou simplificações com $x^2 - 9$ — em contas de 5 segundos. Para nunca errar, memorize a ida (desenvolver um produto notável), a volta (fatorar um polinômio) e a regra de ouro das frações algébricas: nunca cancele somas, apenas fatores multiplicativos!',
    rules: [
      {
        label: '1. Os 3 Produtos Notáveis Obrigatórios (+ Cubo e Stevin)',
        detail:
          '• Quadrado da soma: $(a + b)^2 = a^2 + 2ab + b^2$\n• Quadrado da diferença: $(a - b)^2 = a^2 - 2ab + b^2$\n• Soma pela diferença: $(a + b)(a - b) = a^2 - b^2$\n• Produto de Stevin: $(x + a)(x + b) = x^2 + (a + b)x + a\\cdot b$\n• Cubos (eventuais): $(a \\pm b)^3 = a^3 \\pm 3a^2b + 3ab^2 \\pm b^3$.',
      },
      {
        label: '2. Relações Mágicas entre Soma, Produto e Quadrados',
        detail:
          'Se uma questão der apenas $(x + y)$ e $xy$ e pedir $x^2 + y^2$, NÃO tente achar $x$ e $y$! Eleve $(x + y)^2 = x^2 + 2xy + y^2$ e substitua os números dados. O mesmo truque vale para $\\left(x + \\frac{1}{x}\\right)^2 = x^2 + 2 + \\frac{1}{x^2}$ (já que $x \\cdot \\frac{1}{x} = 1$!).',
      },
      {
        label: '3. Os 4 Casos Principais de Fatoração (Caminho Inverso)',
        detail:
          '1) Fator comum em evidência: $6x^2y + 9xy^2 = 3xy(2x + 3y)$.\n2) Agrupamento: $ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y)$.\n3) Diferença de dois quadrados: $A^2 - B^2 = (A + B)(A - B)$.\n4) Trinômio quadrado perfeito: $a^2 \\pm 2ab + b^2 = (a \\pm b)^2$ (verifique sempre se o termo central é $2ab$!).',
      },
      {
        label: '4. Regra de Ouro nas Frações Algébricas',
        detail:
          'Antes de cortar qualquer letra ou número em $\\frac{\\text{Numerador}}{\\text{Denominador}}$, fatore completamente em cima e embaixo. Só é legítimo cancelar blocos idênticos ligados por MULTIPLICAÇÃO (fator comum), respeitando a condição de existência (denominador $\\neq 0$).',
      },
    ],
    workedExamples: [
      {
        title: 'Exemplo 1 · Simplificação completa de fração algébrica',
        problem: 'Para $x \\neq 3$ e $x \\neq -3$, simplifique $\\frac{x^2 - 9}{x^2 - 6x + 9}$.',
        steps: [
          'Fatore o numerador pela diferença de quadrados: $x^2 - 3^2 = (x + 3)(x - 3)$.',
          'Reconheça o trinômio quadrado perfeito no denominador ($\\sqrt{x^2}=x$, $\\sqrt{9}=3$, termo do meio $2\\cdot x\\cdot 3 = 6x$): $x^2 - 6x + 9 = (x - 3)^2 = (x - 3)(x - 3)$.',
          'Agora que tudo é multiplicação, cancele um fator $(x - 3)$ em cima e embaixo.',
        ],
        conclusion: 'A expressão simplifica-se para $\\frac{x + 3}{x - 3}$.',
      },
      {
        title: 'Exemplo 2 · Soma dos quadrados e cálculo numérico relâmpago',
        problem:
          '(A) Dados $x + y = 10$ e $xy = 21$, ache $x^2 + y^2$. (B) Calcule $\\frac{105^2 - 95^2}{20}$.',
        steps: [
          'Em (A), expanda $(x + y)^2 = x^2 + 2xy + y^2 \\implies 10^2 = x^2 + y^2 + 2(21) \\implies 100 = x^2 + y^2 + 42 \\implies x^2 + y^2 = 58$.',
          'Em (B), fatore $105^2 - 95^2 = (105 + 95)(105 - 95) = 200 \\cdot 10$. Dividindo por $20$: $\\frac{200 \\cdot 10}{20} = 10 \\cdot 10 = 100$.',
        ],
        conclusion: '(A) $58$; (B) $100$.',
      },
    ],
    commonMistakes: [
      {
        wrongThought: '“$(a + b)^2 = a^2 + b^2$, basta elevar cada termo separado.”',
        correction: 'O erro mais caro da álgebra! $(3 + 2)^2 = 25 \\neq 9 + 4 = 13$. Nunca apague o termo do meio ($+2ab$).',
      },
      {
        wrongThought: '“Em $\\frac{x + 4}{x}$, corto $x$ com $x$ e sobra $4$.”',
        correction: 'Impossível! $x$ está SOMANDO no numerador. Experimente $x = 2$: $\\frac{2 + 4}{2} = 3 \\neq 4$.',
      },
    ],
    eteTrap:
      'Esquecer o duplo produto $2ab$ ao desenvolver $(2x - 3)^2$, errar sinais negativos dentro de $P(a) - Q(b)$ ou cortar parcelas somadas em frações algébricas.',
    selfExplanationPrompt: {
      question: 'Como conferir na hora se o trinômio $4x^2 - 12x + 9$ realmente forma um quadrado perfeito?',
      modelAnswer:
        'Extraia as raízes dos extremos ($\\sqrt{4x^2} = 2x$ e $\\sqrt{9} = 3$) e confira se o dobro do produto bate exatamente com o termo central: $2 \\cdot (2x) \\cdot 3 = 12x$ (bate!). Logo, vale $(2x - 3)^2$.',
    },
    bookReferences: [
      'Gelson Iezzi, Osvaldo Dolce & Antônio Machado — Matemática e Realidade, 8º/9º ano (Atual · Cálculo Algébrico)',
      'Luiz Roberto Dante — Matemática: Contexto & Aplicações (Ática · Polinômios e Fatoração)',
    ],
    externalLinks: [
      {
        title: 'Produtos Notáveis — os 5 casos com demonstração e exemplos',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/produtos-notaveis/',
      },
      {
        title: 'Fatoração de Polinômios — fator comum, agrupamento e TQP',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/fatoracao/',
      },
      {
        title: 'Videoaula · Produtos Notáveis completos para provas',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=0xsDER7lBUc',
      },
      {
        title: 'Videoaula · Fatoração Algébrica e Simplificação passo a passo',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=YnQ-TAhXYjI',
      },
    ],
    activeCheckPrompt: 'Fatorando $x^2 - 16$, obtemos:',
    activeCheckOptions: ['$(x - 4)^2$.', '$(x + 4)(x - 4)$.', '$(x - 8)(x + 2)$.'],
    activeCheckCorrect: 1,
    activeCheckWhy: '$x^2 - 4^2$ é diferença de dois quadrados: $(x + 4)(x - 4)$.',
  },

  {
    topicId: 'mat-equacoes',
    discipline: 'MAT',
    editalRef: 'Edital 12.2 · Tópicos 17–18',
    title: 'Equações algébricas e sistemas lineares do 1º grau',
    subtitle: 'Equações fracionárias com MMC e distributiva de sinal, sistemas $2\\times 2$ (adição/substituição), problemas de contagem e inequações lineares',
    estimatedMinutes: 15,
    editalSubtopics: [
      'Equações do 1º grau ($ax + b = 0$), equações fracionárias com MMC e uso de parênteses',
      'Tradução de enunciados verbais em linguagem algébrica (“o dobro do consecutivo excede...”)',
      'Sistemas de equações do 1º grau com duas variáveis (método da adição e da substituição)',
      'Problemas clássicos de contagem (veículos/rodas, notas de dinheiro, animais/patas, pontuações)',
      'Inequações do 1º grau e regra da inversão por multiplicação negativa',
    ],
    coreSummary:
      'Na prova real da ETE (`LP_ETE.pdf`), caiu exatamente o clássico problema de contagem com 30 veículos (bicicletas e skates) somando 84 rodas — resolvido em segundos por um sistema linear do 1º grau $2\\times 2$. Seguindo estritamente o Edital, concentre-se em equações do 1º grau (especialmente com frações e sinais negativos antes de frações), sistemas lineares e inequações do 1º grau.',
    rules: [
      {
        label: '1. Equações do 1º Grau com Denominadores e Sinal Negativo',
        detail:
          '1) Calcule o MMC de TODOS os termos da equação (inclusive números inteiros sem fração aparente: $6 = \\frac{6}{1}$!).\n2) Divida o MMC por cada denominador e multiplique pelo numerador correspondente.\n3) ATENÇÃO MÁXIMA ao sinal de menos antes de uma fração: em $- \\frac{x - 3}{4}$, o sinal negativo troca os sinais de TODOS os termos do numerador: $-x + 3$!',
      },
      {
        label: '2. Tradução Algébrica de Enunciados',
        detail:
          '• Números consecutivos: $x,\\; x + 1,\\; x + 2$.\n• Pares ou ímpares consecutivos: $x,\\; x + 2,\\; x + 4$.\n• “A metade de um número excede a sua terça parte em $5$”: $\\frac{x}{2} - \\frac{x}{3} = 5$.\n• “A diferença entre as idades hoje é a mesma daqui a $k$ anos”: some $+k$ a ambas as pessoas!',
      },
      {
        label: '3. Sistemas Lineares $2 \\times 2$: Método da Adição Turbinado',
        detail:
          'Monte as duas equações ($x + y = \\text{total de objetos}$ e $p_1 x + p_2 y = \\text{total de partes}$). Se todos os coeficientes da segunda equação forem pares (como $2b + 4s = 84$), DIVIDA a segunda linha por $2$ ($b + 2s = 42$) e subtraia da primeira ($b + s = 30$) — dá a resposta de cabeça sem contas grandes!',
      },
      {
        label: '4. Inequações do 1º Grau',
        detail:
          'Resolva isolando $x$ exatamente como na equação. Única diferença decisiva: ao multiplicar ou dividir os dois lados por número NEGATIVO, INVERTER o sentido do sinal ($< \\leftrightarrow >$, $\\le \\leftrightarrow \\ge$).',
      },
    ],
    workedExamples: [
      {
        title: 'Exemplo 1 · Problema das $84$ rodas (modelo real da prova ETE)',
        problem:
          'No parque do Recife há $30$ veículos entre bicicletas ($2$ rodas) e skates ($4$ rodas), totalizando $84$ rodas. Quantas bicicletas e quantos skates há no parque, respectivamente?',
        steps: [
          'Defina $b =$ bicicletas e $s =$ skates: (I) $b + s = 30$ e (II) $2b + 4s = 84$.',
          'Simplifique (II) dividindo toda a equação por $2$: $b + 2s = 42$.',
          'Subtraia (I) da equação simplificada: $(b + 2s) - (b + s) = 42 - 30 \\implies s = 12$ skates.',
          'Substitua em (I): $b = 30 - 12 = 18$ bicicletas.',
        ],
        conclusion: 'Há $18$ bicicletas e $12$ skates (conferindo: $18 + 12 = 30$ e $36 + 48 = 84$!).',
      },
      {
        title: 'Exemplo 2 · Equação fracionária com armadilha de sinal negativo',
        problem: 'Resolva em $\\mathbb{R}$ a equação $\\frac{2x + 1}{3} - \\frac{x - 4}{2} = 2$.',
        steps: [
          'Ache o $\\text{MMC}(3, 2, 1) = 6$ e reduza ambos os membros (incluindo o $2 = \\frac{12}{6}$).',
          'Multiplique os numeradores mantendo parênteses: $2(2x + 1) - 3(x - 4) = 12$.',
          'Aplique a distributiva cuidando do sinal negativo: $4x + 2 - 3x + 12 = 12$.',
          'Reduza e isole $x$: $x + 14 = 12 \\implies x = -2$.',
        ],
        conclusion: 'Solução: $x = -2$ (conferência: $\\frac{-3}{3} - \\frac{-6}{2} = -1 - (-3) = +2$, exato!).',
      },
    ],
    commonMistakes: [
      {
        wrongThought: '“Em $-\\frac{x - 4}{2}$, coloco o denominador $2$ fora e escrevo $-x - 4$ em cima.”',
        correction: 'O traço da fração funciona como parênteses invisível! O sinal de menos multiplica todo o numerador: $-(x - 4) = -x + 4$.',
      },
      {
        wrongThought: '“Quando a questão pede bicicletas e skates respectivamente, tanto faz a ordem $(12, 18)$ ou $(18, 12)$.”',
        correction: '“Respectivamente” exige a exata ordem do enunciado: se citou bicicletas primeiro e skates depois, marque $(18, 12)$!',
      },
    ],
    eteTrap:
      'Esquecer de multiplicar o termo independente do lado direito pelo MMC, errar o sinal em $-3(x - 4) = -3x - 12$ (errado!) ou inverter a ordem pedida no “respectivamente”.',
    selfExplanationPrompt: {
      question: 'Ao encontrar uma resposta em uma equação ou sistema do 1º grau na prova, como ter $100\\%$ de certeza em $5$ segundos antes de marcar o gabarito?',
      modelAnswer:
        'Substitua os valores encontrados nas duas equações (ou no enunciado original): por exemplo, confira se bicicletas $+$ skates somam o total de veículos E se o total de rodas fecha exatamente.',
    },
    bookReferences: [
      'Gelson Iezzi, Osvaldo Dolce & Antônio Machado — Matemática e Realidade (Atual · Equações e Sistemas)',
      'Portal da OBMEP / IMPA — Módulo de Equações e Sistemas Lineares do 1º Grau',
    ],
    externalLinks: [
      {
        title: 'Equação do 1º Grau — como resolver equações simples e fracionárias',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/equacao-do-primeiro-grau/',
      },
      {
        title: 'Módulo Completo de Sistemas e Equações Lineares',
        source: 'Portal da OBMEP — IMPA',
        kind: 'artigo',
        url: 'https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=24',
      },
      {
        title: 'Videoaula · Equação do 1º Grau passo a passo com frações',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=it8AytNbkGA',
      },
      {
        title: 'Videoaula · Sistemas de Equações do 1º Grau (Adição e Substituição)',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=OTfI_h9ONUo',
      },
    ],
    activeCheckPrompt: 'Se $x + y = 14$ e $x - y = 4$, quanto vale o produto $x \\cdot y$?',
    activeCheckOptions: ['$45$.', '$36$.', '$48$.'],
    activeCheckCorrect: 0,
    activeCheckWhy: 'Somando as equações: $2x = 18 \\implies x = 9$. Logo $y = 14 - 9 = 5$. Produto $x\\cdot y = 9 \\times 5 = 45$.',
  },

  {
    topicId: 'mat-angulos-poligonos',
    discipline: 'MAT',
    editalRef: 'Edital 12.2 · Tópicos 19–20',
    title: 'Ângulos, retas paralelas e polígonos convexos/regulares',
    subtitle: 'Complemento/suplemento/OPV, paralelismo com transversal ($r \\parallel s$), soma dos ângulos internos ($S_i$), externos ($360^\\circ$) e diagonais ($d$)',
    estimatedMinutes: 15,
    editalSubtopics: [
      'Ângulos: agudo, reto, obtuso, raso; opostos pelo vértice (OPV) e bissetriz',
      'Ângulos complementares ($90^\\circ$), suplementares ($180^\\circ$) e replementares ($360^\\circ$)',
      'Retas paralelas cortadas por transversal: correspondentes, alternos (iguais) e colaterais ($180^\\circ$)',
      'Polígonos convexos: soma interna $S_i = (n-2)\\cdot 180^\\circ$, externa $S_e = 360^\\circ$ e diagonais $d = \\frac{n(n-3)}{2}$',
      'Polígonos regulares: cálculo instantâneo de $a_i$ e $a_e$ via $a_e = \\frac{360^\\circ}{n}$',
    ],
    coreSummary:
      'Geometria plana na ETE privilegia agilidade lógica sobre contas pesadas. Em paralelas com transversal, basta lembrar que os quatro ângulos agudos são congruentes entre si, os quatro obtusos são congruentes entre si e qualquer par misto soma $180^\\circ$. Em polígonos regulares, use o atalho pelo ângulo externo ($a_e = \\frac{360^\\circ}{n}$ e $a_i + a_e = 180^\\circ$) e resolva o problema na metade do tempo.',
    rules: [
      {
        label: '1. Complemento, Suplemento, Replemento e OPV',
        detail:
          '• Complementares somam $90^\\circ$ (complemento de $x$ é $90^\\circ - x$).\n• Suplementares somam $180^\\circ$ (suplemento de $x$ é $180^\\circ - x$).\n• Replementares somam $360^\\circ$.\n• Opostos pelo vértice (OPV) são SEMPRE iguais! Adjacentes sobre uma reta formam ângulo raso ($180^\\circ$).',
      },
      {
        label: '2. Retas Paralelas Cortadas por Transversal ($r \\parallel s$)',
        detail:
          '• Pares CONGRUENTES (iguais): Correspondentes, Alternos internos e Alternos externos.\n• Pares SUPLEMENTARES (somam $180^\\circ$): Colaterais internos e Colaterais externos.\n• Dica da “quebra / zigue-zague” entre paralelas: se houver bico entre duas paralelas, trace uma terceira paralela passando pelo vértice e a soma dos ângulos para a esquerda iguala a dos ângulos para a direita!',
      },
      {
        label: '3. Fórmulas Gerais de Polígonos Convexos ($n$ lados)',
        detail:
          '• Diagonais que partem de UM vértice: $n - 3$.\n• Total de diagonais do polígono: $$d = \\frac{n(n - 3)}{2}$$\n• Soma dos ângulos internos: $$S_i = (n - 2)\\cdot 180^\\circ$$\n• Soma dos ângulos externos: $$S_e = 360^\\circ \\text{ (independe de } n\\text{!)}$$',
      },
      {
        label: '4. Atalho de Ouro para Polígonos Regulares',
        detail:
          'Em todo polígono convexo, $a_i + a_e = 180^\\circ$. Num polígono regular (todos os lados e ângulos iguais), todos os $n$ ângulos externos medem $a_e = \\frac{360^\\circ}{n}$. Descobrir $a_e$ primeiro acha o número de lados $n = \\frac{360^\\circ}{a_e}$ instantaneamente!',
      },
    ],
    workedExamples: [
      {
        title: 'Exemplo 1 · Soma de internos $\\to$ Número de diagonais',
        problem:
          'A soma dos ângulos internos de um polígono convexo é $1.080^\\circ$. Quantas diagonais possui esse polígono ao todo?',
        steps: [
          'Use a fórmula de $S_i$: $(n - 2) \\cdot 180^\\circ = 1.080^\\circ \\implies n - 2 = \\frac{1.080}{180} = 6 \\implies n = 8$ lados (octógono).',
          'Substitua $n = 8$ na fórmula do total de diagonais: $d = \\frac{8 \\cdot (8 - 3)}{2} = \\frac{8 \\cdot 5}{2} = 20$.',
        ],
        conclusion: 'O polígono tem $8$ lados e possui exatamente $20$ diagonais.',
      },
      {
        title: 'Exemplo 2 · Descobrindo o polígono regular via $a_e$',
        problem:
          'Em qual polígono regular a medida de cada ângulo interno equivale ao triplo da medida de cada ângulo externo?',
        steps: [
          'Sabemos que em qualquer vértice $a_i + a_e = 180^\\circ$.',
          'Substituindo $a_i = 3 a_e$: $3 a_e + a_e = 180^\\circ \\implies 4 a_e = 180^\\circ \\implies a_e = 45^\\circ$.',
          'Use a soma externa constante ($360^\\circ$): $n = \\frac{360^\\circ}{45^\\circ} = 8$ lados.',
        ],
        conclusion: 'É o octógono regular ($a_i = 135^\\circ$, $a_e = 45^\\circ$).',
      },
    ],
    commonMistakes: [
      {
        wrongThought: '“Achei $x = 40^\\circ$ na figura de ângulos suplementares, então o menor ângulo mede $40^\\circ$!”',
        correction: 'Cuidado! $x$ é apenas a incógnita da equação! Substitua $x = 40^\\circ$ dentro das expressões dos ângulos (ex.: $x + 30^\\circ = 70^\\circ$ e $3x - 10^\\circ = 110^\\circ$).',
      },
      {
        wrongThought: '“Na fórmula das diagonais basta fazer $n(n - 3)$.”',
        correction: 'Se não dividir por $2$, você conta cada diagonal duas vezes (de $A$ até $C$ e de $C$ até $A$). Fórmula exata: $\\frac{n(n - 3)}{2}$.',
      },
    ],
    eteTrap:
      'Parar a resolução ao achar o valor algébrico de $x$ (que está sempre na letra A!) sem substituir nas expressões dos ângulos pedidos; ou confundir número de lados ($n$) com diagonais ($d$).',
    selfExplanationPrompt: {
      question: 'Por que a soma dos ângulos internos de qualquer polígono convexo de $n$ lados vale sempre $(n - 2)\\cdot 180^\\circ$?',
      modelAnswer:
        'Porque, traçando todas as diagonais a partir de um único vértice, o polígono fica dividido em exatamente $(n - 2)$ triângulos — e cada triângulo contribui com $180^\\circ$ pela Lei Angular de Tales.',
    },
    bookReferences: [
      'Osvaldo Dolce & José Nicolau Pompeo — Fundamentos de Matemática Elementar, Vol. 9: Geometria Plana (Atual)',
      'Gelson Iezzi, Osvaldo Dolce & Antônio Machado — Matemática e Realidade (Atual · Ângulos e Polígonos)',
    ],
    externalLinks: [
      {
        title: 'Ângulos — classificação, complemento, suplemento e paralelas',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/angulos/',
      },
      {
        title: 'Polígonos Convexos e Regulares — ângulos e diagonais',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/poligonos/',
      },
      {
        title: 'Videoaula · Ângulos e Retas Paralelas cortadas por Transversal',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=AsFErmxt46c',
      },
      {
        title: 'Videoaula · Polígonos: ângulos internos, externos e diagonais',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=Lqm8hd-LYuw',
      },
    ],
    activeCheckPrompt: 'Quantas diagonais possui um hexágono ($n = 6$)?',
    activeCheckOptions: ['$6$.', '$9$.', '$12$.'],
    activeCheckCorrect: 1,
    activeCheckWhy: '$d = \\frac{6 \\cdot (6 - 3)}{2} = \\frac{18}{2} = 9$ diagonais.',
  },

  {
    topicId: 'mat-triangulos',
    discipline: 'MAT',
    editalRef: 'Edital 12.2 · Tópicos 21–22',
    title: 'Triângulos, Lei Angular de Tales, semelhança e cevianas',
    subtitle: 'Classificações, Teorema do Ângulo Externo, Teorema de Tales e Semelhança ($\\Delta ADE \\sim \\Delta ABC$), razão de áreas ($k^2$) e as 3 cevianas notáveis',
    estimatedMinutes: 17,
    editalSubtopics: [
      'Classificação dos triângulos quanto aos lados (equilátero, isósceles, escaleno) e ângulos (acutângulo, retângulo, obtusângulo)',
      'Condição de existência (desigualdade triangular: $a < b + c$)',
      'Lei Angular de Tales ($\\hat{A} + \\hat{B} + \\hat{C} = 180^\\circ$) e Teorema do Ângulo Externo',
      'Teorema de Tales em feixe de paralelas e Semelhança de Triângulos (AA, LAL, LLL; razão $k$ e áreas $k^2$)',
      'Cevianas notáveis e pontos notáveis: Mediana $\\to$ Baricentro, Bissetriz $\\to$ Incentro, Altura $\\to$ Ortocentro (+ Mediatriz $\\to$ Circuncentro)',
    ],
    coreSummary:
      'O encerramento do Edital 12.2 junta o estudo completo dos triângulos. Duas armadilhas concentram quase todos os erros dos candidatos: na semelhança de triângulos com reta paralela à base ($DE \\parallel BC$), usar o pedacinho lateral $DB$ em vez do lado inteiro $AB = AD + DB$; e confundir a função e o ponto de encontro de mediana, bissetriz, altura e mediatriz.',
    rules: [
      {
        label: '1. Lei Angular de Tales, Ângulo Externo e Desigualdade Triangular',
        detail:
          '• Soma dos ângulos internos $= 180^\\circ$. Em triângulo isósceles, os ângulos opostos aos lados iguais são iguais; no equilátero, cada ângulo mede $60^\\circ$.\n• Teorema do Ângulo Externo: qualquer ângulo externo equivale à soma dos $2$ internos não adjacentes a ele ($e = \\hat{A} + \\hat{B}$).\n• Existência: o maior lado precisa ser estritamente menor que a soma dos outros dois.',
      },
      {
        label: '2. Feixe de Paralelas (Teorema de Tales) e Semelhança de Triângulos',
        detail:
          'Se um feixe de retas paralelas corta duas transversais, os segmentos correspondentes são proporcionais ($\\frac{AB}{BC} = \\frac{DE}{EF}$). Já na semelhança de triângulos ($\\Delta ADE \\sim \\Delta ABC$ com $DE \\parallel BC$), compare os LADOS INTEIROS do triângulo pequeno com o triângulo grande:\n$$\\frac{AD}{AB} = \\frac{AE}{AC} = \\frac{DE}{BC} = k \\qquad \\text{e} \\qquad \\frac{\\text{Área}(\\Delta ADE)}{\\text{Área}(\\Delta ABC)} = k^2$$',
      },
      {
        label: '3. As 3 Cevianas Notáveis e Seus Pontos de Encontro',
        detail:
          '• MEDIANA: une vértice ao ponto médio do lado oposto (divide a área em duas metades iguais). Encontro: BARICENTRO (centro de gravidade; divide cada mediana na razão $2:1$ a partir do vértice).\n• BISSETRIZ INTERNA: divide o ângulo interno ao meio. Encontro: INCENTRO (centro da circunferência inscrita, equidistante dos lados).\n• ALTURA: segmento perpendicular ($90^\\circ$) do vértice ao lado oposto ou prolongamento. Encontro: ORTOCENTRO.',
      },
      {
        label: '4. Mediatriz e Caso do Triângulo Equilátero / Isósceles',
        detail:
          'A mediatriz NÃO é obrigatoriamente uma ceviana (pode não passar pelo vértice oposto): é a reta perpendicular no ponto médio de cada lado, e seu encontro forma o CIRCUNCENTRO (equidistante dos três vértices). Atenção: no triângulo isósceles, a ceviana relativa à base funciona simultaneamente como altura, mediana e bissetriz; no equilátero, os $4$ pontos notáveis coincidem!',
      },
    ],
    workedExamples: [
      {
        title: 'Exemplo 1 · Semelhança clássica $\\Delta ADE \\sim \\Delta ABC$ (cuidado com $AB$!)',
        problem:
          'No triângulo $ABC$, $DE \\parallel BC$ com $AD = 6\\text{ cm}$, $DB = 3\\text{ cm}$ e $DE = 8\\text{ cm}$. Calcule a medida da base $BC$.',
        steps: [
          'Identifique os dois triângulos semelhantes: o menor $\\Delta ADE$ e o maior $\\Delta ABC$ (critério AA, ângulos correspondentes iguais).',
          'Determine o lado correspondente completo no $\\Delta ABC$: $AB = AD + DB = 6 + 3 = 9\\text{ cm}$.',
          'Monte a proporção entre os lados inteiros: $\\frac{AD}{AB} = \\frac{DE}{BC} \\implies \\frac{6}{9} = \\frac{8}{BC}$.',
          'Simplifique $\\frac{6}{9} = \\frac{2}{3}$ e resolva: $2\\cdot BC = 24 \\implies BC = 12\\text{ cm}$.',
        ],
        conclusion: '$BC = 12\\text{ cm}$ (quem usa $\\frac{6}{3}$ acha $4\\text{ cm}$, impossível pois $BC$ é maior que $DE = 8$!).',
      },
      {
        title: 'Exemplo 2 · Cevianas em ação (Bissetriz interna)',
        problem:
          'Num triângulo $ABC$, temos $\\hat{B} = 70^\\circ$ e $\\hat{C} = 50^\\circ$. Traça-se a bissetriz interna $AD$ do ângulo $\\hat{A}$. Qual é a medida do ângulo $\\widehat{ADB}$?',
        steps: [
          'Pela Lei Angular de Tales no $\\Delta ABC$: $\\hat{A} = 180^\\circ - 70^\\circ - 50^\\circ = 60^\\circ$.',
          'Como $AD$ é bissetriz, ela divide $\\hat{A}$ em duas partes iguais de $\\frac{60^\\circ}{2} = 30^\\circ$ ($\\widehat{BAD} = 30^\\circ$).',
          'Aplique novamente $180^\\circ$ no triângulo menor $\\Delta ABD$: $\\widehat{ADB} = 180^\\circ - 70^\\circ - 30^\\circ = 80^\\circ$.',
        ],
        conclusion: '$\\widehat{ADB} = 80^\\circ$.',
      },
    ],
    commonMistakes: [
      {
        wrongThought: '“No corte paralelo à base do triângulo, aplico $\\frac{AD}{DB} = \\frac{DE}{BC}$ diretamente.”',
        correction: 'Tales funciona para os lados cortados ($\\frac{AD}{DB} = \\frac{AE}{EC}$), mas quando envolve as BASES paralelas ($DE$ e $BC$) precisa-se obrigatoriamente de semelhança de triângulos inteiros: $\\frac{AD}{AB} = \\frac{DE}{BC}$!',
      },
      {
        wrongThought: '“Bissetriz cai fazendo $90^\\circ$ com a base.”',
        correction: 'Quem faz $90^\\circ$ é a ALTURA! Bissetriz corta o ângulo do vértice em duas metades idênticas.',
      },
    ],
    eteTrap:
      'Usar o segmento truncado $DB$ na proporção com $BC$ (armadilha garantida com resposta absurda nas opções) ou confundir baricentro (medianas), incentro (bissetrizes) e ortocentro (alturas).',
    selfExplanationPrompt: {
      question: 'Como saber na hora, em uma figura com $DE \\parallel BC$, quando podemos usar $\\frac{AD}{DB} = \\frac{AE}{EC}$ e quando somos obrigados a usar $AD + DB$?',
      modelAnswer:
        'Quando comparamos apenas segmentos nas laterais inclinadas ($AD, DB, AE, EC$), vale a razão parte/parte de Tales; assim que o cálculo envolve as bases paralelas ($DE$ e $BC$), os segmentos precisam pertencer a triângulos inteiros semelhantes ($AD$ contra $AB = AD + DB$).',
    },
    bookReferences: [
      'Osvaldo Dolce & José Nicolau Pompeo — Fundamentos de Matemática Elementar, Vol. 9: Geometria Plana (Atual)',
      'Gelson Iezzi, Osvaldo Dolce & Antônio Machado — Matemática e Realidade (Atual · Semelhança e Cevianas)',
    ],
    externalLinks: [
      {
        title: 'Semelhança de Triângulos — critérios AA, LAL, LLL e áreas',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/semelhanca-de-triangulos/',
      },
      {
        title: 'Teorema de Tales — proporções em feixes de paralelas e triângulos',
        source: 'Toda Matéria',
        kind: 'artigo',
        url: 'https://www.todamateria.com.br/teorema-de-tales/',
      },
      {
        title: 'Cevianas e Pontos Notáveis do Triângulo (Baricentro, Incentro, Ortocentro)',
        source: 'Quero Bolsa',
        kind: 'artigo',
        url: 'https://querobolsa.com.br/enem/matematica/cevianas-e-pontos-notaveis-do-triangulo',
      },
      {
        title: 'Videoaula · Lei Angular de Tales e Ângulos em Triângulos',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=NoErrr8HEys',
      },
      {
        title: 'Videoaula · Semelhança de Triângulos na prática',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=B-1xL2ym7SQ',
      },
      {
        title: 'Videoaula · Teorema de Tales passo a passo',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=TeKvhnJgNYU',
      },
      {
        title: 'Videoaula · Cevianas e Pontos Notáveis do Triângulo',
        source: 'YouTube Educação',
        kind: 'video',
        url: 'https://www.youtube.com/watch?v=tknXDrCRBZM',
      },
    ],
    activeCheckPrompt:
      'No triângulo retângulo, um dos ângulos agudos mede $34^\\circ$. Quanto mede o outro ângulo agudo?',
    activeCheckOptions: ['$46^\\circ$.', '$56^\\circ$.', '$66^\\circ$.'],
    activeCheckCorrect: 1,
    activeCheckWhy: 'Os dois ângulos agudos de um triângulo retângulo são complementares: $90^\\circ - 34^\\circ = 56^\\circ$.',
  },
];
