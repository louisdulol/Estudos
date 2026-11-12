import type { Question } from './studyEngine';

export const MAT_QUESTIONS: Question[] = [
  // =========================================================================
  // TÓPICO 1: mat-operacoes (20 questões)
  // =========================================================================
  {
    id: 'mat-q05',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    source: 'Edital 12.2 · Decimais e Frações',
    prompt:
      'Na prova objetiva da ETE ($60\\text{ minutos}$), uma candidata gastou $0{,}25$ do tempo total na leitura inicial dos textos e $\\frac{2}{5}$ do tempo RESTANTE resolvendo cálculos de Matemática. Quantos minutos ainda restam para concluir e revisar o gabarito?',
    options: ['18 minutos.', '21 minutos.', '24 minutos.', '27 minutos.', '30 minutos.'],
    correctIndex: 3,
    explanation:
      'Primeiro calculamos $0{,}25 \\times 60 = 15\\text{ min}$ gastos na leitura inicial, restando $60 - 15 = 45\\text{ min}$. Em seguida, ela utiliza $\\frac{2}{5}$ de $45\\text{ min} = \\frac{2 \\times 45}{5} = 18\\text{ min}$. Subtraindo do restante: $45 - 18 = 27\\text{ minutos}$.',
    trapNote: 'Leia com atenção se a segunda fração incide sobre o TOTAL ($60$) ou sobre o RESTANTE ($45$). Calcular $\\frac{2}{5}$ de $60$ geraria o distrator $21$.',
    optionFeedback: [
      'Atenção: $18$ minutos foi o tempo gasto na segunda etapa ($\\frac{2}{5}$ de $45$), não o tempo que sobrou ao final.',
      'Você subtraiu $\\frac{2}{5}$ de $60$ ($24\\text{ min}$) em vez de calcular $\\frac{2}{5}$ do tempo RESTANTE ($45\\text{ min}$).',
      '$24$ minutos corresponde a $\\frac{2}{5}$ do tempo total ($60\\text{ min}$), desconsiderando os $15\\text{ min}$ já consumidos.',
      'Correto! $60 \\to -15 = 45 \\to -\\frac{2}{5}(45) = -18 \\to 27\\text{ minutos}$ livres para revisar.',
      '$30$ minutos equivaleria à metade da prova, mas $15 + 18 = 33\\text{ min}$ já foram usados.',
    ],
    stepByStep: [
      'Converta $0{,}25 = \\frac{1}{4}$ de $60\\text{ min} = 15\\text{ min}$ usados na leitura.',
      'Calcule o tempo restante: $60 - 15 = 45\\text{ min}$.',
      'Calcule $\\frac{2}{5}$ de $45$: $(45 \\div 5) \\times 2 = 9 \\times 2 = 18\\text{ min}$.',
      'Subtraia do saldo restante: $45 - 18 = 27\\text{ minutos}$.',
    ],
    memoryTakeaway: 'Frações sucessivas sobre “o restante”: subtraia sempre a primeira etapa antes de aplicar a segunda fração.',
  },
  {
    id: 'mat-q06',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    source: 'Edital 12.2 · Potenciação e Radiciação',
    prompt:
      'Calcule o valor exato da expressão numérica:\n$$E = \\frac{3^4 \\cdot 3^{-2} + \\sqrt{225}}{2^3 - (-2)^2}$$',
    options: ['2.', '4.', '6.', '8.', '12.'],
    correctIndex: 2,
    explanation:
      'No numerador: $3^4 \\cdot 3^{-2} = 3^{4-2} = 3^2 = 9$ e $\\sqrt{225} = 15$, resultando em $9 + 15 = 24$. No denominador: $2^3 = 8$ e $(-2)^2 = +4$, logo $8 - 4 = 4$. Portanto, $E = \\frac{24}{4} = 6$.',
    trapNote: 'Cuidado com os parênteses em potências de base negativa: $(-2)^2 = (-2)\\cdot(-2) = +4$, ao passo que $-2^2 = -(2\\cdot 2) = -4$.',
    optionFeedback: [
      'Você provavelmente somou $(-2)^2 = -4$ fazendo $8 - (-4) = 12$ e encontrou $\\frac{24}{12} = 2$. Erro clássico de sinal com parênteses!',
      'Confira o numerador: $3^4 \\cdot 3^{-2} = 3^2 = 9$ (e não $3^{-8}$), somado a $\\sqrt{225} = 15$ dá $24$.',
      'Correto! Numerador igual a $24$ e denominador igual a $4$ resultam em $\\frac{24}{4} = 6$.',
      'Se resultasse em $8$, o numerador seria $32$ ou o denominador $3$. Refaça $2^3 - (-2)^2 = 8 - 4$.',
      'Valor $12$ ocorre ao dividir $24$ por $2$ por confusão em $2^3 = 6$ (erro de multiplicar base pelo expoente!).',
    ],
    stepByStep: [
      'Aplique produto de potências de mesma base: $3^4 \\cdot 3^{-2} = 3^{4 + (-2)} = 3^2 = 9$.',
      'Extraia $\\sqrt{225} = 15$ e some no numerador: $9 + 15 = 24$.',
      'Resolva o denominador com atenção ao parêntese: $2^3 = 8$ e $(-2)^2 = +4$, então $8 - 4 = 4$.',
      'Divida: $\\frac{24}{4} = 6$.',
    ],
    memoryTakeaway: 'Parêntese protege o sinal negativo na potência par: $(-2)^2 = +4$, mas $-2^2 = -4$.',
  },
  {
    id: 'mat-q07',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    source: 'Edital 12.2 · Raiz Quadrada Aproximada',
    prompt:
      'Um projeto escolar prevê uma horta quadrada com área exata de $54\\text{ m}^2$. Utilizando a aproximação decimal até a casa dos décimos ($1$ casa após a vírgula), a medida mais próxima para o lado dessa horta ($\\sqrt{54}$) é:',
    options: ['7,1 m.', '7,2 m.', '7,3 m.', '7,4 m.', '7,6 m.'],
    correctIndex: 2,
    explanation:
      'Como $7^2 = 49 < 54 < 8^2 = 64$, a raiz está entre $7$ e $8$. Testando os décimos centrais: $7{,}3^2 = 53{,}29$ (distância $0{,}71$ até $54$) e $7{,}4^2 = 54{,}76$ (distância $0{,}76$ até $54$). Como $53{,}29$ fica mais próximo de $54$ ($\\sqrt{54} \\approx 7{,}348$), o arredondamento em décimos é $7{,}3\\text{ m}$.',
    trapNote: 'O Edital 12.2 cobra explicitamente raiz quadrada com aproximação decimal: teste os quadrados ao redor para decidir entre $7{,}3$ e $7{,}4$ sem chutar.',
    optionFeedback: [
      '$7{,}1^2 = 50{,}41$, ainda distante de $54$.',
      '$7{,}2^2 = 51{,}84$, mais distante do que $7{,}3^2 = 53{,}29$.',
      'Correto! $|54 - 53{,}29| = 0{,}71 < |54{,}76 - 54| = 0{,}76$, logo $\\sqrt{54} \\approx 7{,}3\\text{ m}$.',
      'Quase! $7{,}4^2 = 54{,}76$ passa $0{,}76$ de $54$, enquanto $7{,}3^2 = 53{,}29$ falta apenas $0{,}71$.',
      '$7{,}6^2 = 57{,}76$, bem acima da área dada ($54\\text{ m}^2$).',
    ],
    stepByStep: [
      'Enquadre entre inteiros: $7^2 = 49 < 54 < 64 = 8^2$.',
      'Como $54$ está um pouco abaixo do meio entre $49$ e $64$ ($56{,}5$), teste $7{,}3$ e $7{,}4$.',
      'Calcule $7{,}3^2 = 53{,}29$ (diferença $0{,}71$) e $7{,}4^2 = 54{,}76$ (diferença $0{,}76$).',
      'Escolha o quadrado mais próximo de $54$: $7{,}3\\text{ m}$.',
    ],
    memoryTakeaway: 'Para aproximar $\\sqrt{N}$ até décimos, enquadre nos inteiros e compare a distância de dois quadrados decimais seguidos até $N$.',
  },
  {
    id: 'mat-q08',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    source: 'Edital 12.2 · Radiciação',
    prompt: 'Simplificando ao máximo a expressão com radicais $\\sqrt{75} + \\sqrt{48} - \\sqrt{12}$, obtém-se:',
    options: ['$5\\sqrt{3}$.', '$7\\sqrt{3}$.', '$9\\sqrt{3}$.', '$11\\sqrt{3}$.', '$\\sqrt{111}$.'],
    correctIndex: 1,
    explanation:
      'Decompondo cada radicando em um quadrado perfeito vezes $3$: $\\sqrt{75} = \\sqrt{25 \\cdot 3} = 5\\sqrt{3}$, $\\sqrt{48} = \\sqrt{16 \\cdot 3} = 4\\sqrt{3}$ e $\\sqrt{12} = \\sqrt{4 \\cdot 3} = 2\\sqrt{3}$. Somando os coeficientes: $(5 + 4 - 2)\\sqrt{3} = 7\\sqrt{3}$.',
    trapNote: 'Jamais some ou subtraia os números de dentro das raízes diretamente ($\\sqrt{75} + \\sqrt{48} - \\sqrt{12} \\neq \\sqrt{111}$).',
    optionFeedback: [
      'Você provavelmente somou errado ou subtraiu duas vezes o termo $2\\sqrt{3}$. Confira: $5 + 4 - 2 = 7$.',
      'Correto! Após fatorar para o radical comum $\\sqrt{3}$, obtemos $(5 + 4 - 2)\\sqrt{3} = 7\\sqrt{3}$.',
      'Você encontrou $5 + 4 = 9\\sqrt{3}$, mas esqueceu de subtrair o $-\\sqrt{12} = -2\\sqrt{3}$.',
      'Você somou $+2\\sqrt{3}$ em vez de subtrair $-2\\sqrt{3}$: $5 + 4 + 2 = 11$.',
      'Erro proibitivo: não existe propriedade para somar/subtrair radicandos diretamente dentro de raízes distintas ($75 + 48 - 12 = 111$).',
    ],
    stepByStep: [
      'Fatore cada número buscando quadrados perfeitos: $75 = 25 \\cdot 3$; $48 = 16 \\cdot 3$; $12 = 4 \\cdot 3$.',
      'Extraia as raízes exatas: $5\\sqrt{3} + 4\\sqrt{3} - 2\\sqrt{3}$.',
      'Opere apenas os coeficientes externos mantendo $\\sqrt{3}$: $(5 + 4 - 2)\\sqrt{3} = 7\\sqrt{3}$.',
    ],
    memoryTakeaway: 'Soma e subtração de raízes só acontecem com radicais semelhantes (mesmo índice e mesmo radicando após simplificar).',
  },
  {
    id: 'mat-q39',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    source: 'Edital 12.2 · Expressões com Números Reais',
    prompt: 'Qual é o valor exato da expressão numérica $(0{,}5)^2 + \\frac{3}{4} - \\sqrt{0{,}16}$?',
    options: ['0,20.', '0,40.', '0,60.', '0,80.', '1,00.'],
    correctIndex: 2,
    explanation:
      'Calculando parcela por parcela: $(0{,}5)^2 = 0{,}25$, $\\frac{3}{4} = 0{,}75$ e $\\sqrt{0{,}16} = 0{,}40$ (pois $0{,}4 \\times 0{,}4 = 0{,}16$). Logo: $0{,}25 + 0{,}75 - 0{,}40 = 1{,}00 - 0{,}40 = 0{,}60$.',
    trapNote: 'Cuidado com raiz quadrada de decimal: $\\sqrt{0{,}16} = 0{,}4$, e NÃO $0{,}04$ (pois $0{,}04^2 = 0{,}0016$, com $4$ casas decimais!).',
    optionFeedback: [
      'Confira $(0{,}5)^2 = 0{,}25$ e $\\frac{3}{4} = 0{,}75$; juntos já somam $1{,}00$, e tirando $0{,}40$ sobra $0{,}60$.',
      'Você calculou $\\sqrt{0{,}16} = 0{,}40$ (que é o valor subtraído), mas esqueceu de concluir $1{,}00 - 0{,}40$.',
      'Correto! $0{,}25 + 0{,}75 - 0{,}40 = 0{,}60$.',
      'Possível erro de $(0{,}5)^2 = 0{,}5$ ou inversão de sinal na fração.',
      '$1{,}00$ é apenas a soma das duas primeiras parcelas ($0{,}25 + 0{,}75$) antes de subtrair $\\sqrt{0{,}16}$.',
    ],
    stepByStep: [
      'Converta tudo para decimal (ou fração com denominador $100$): $(0{,}5)^2 = 0{,}25$.',
      'Converta $\\frac{3}{4} = 0{,}75$.',
      'Extraia $\\sqrt{0{,}16} = \\sqrt{\\frac{16}{100}} = \\frac{4}{10} = 0{,}40$.',
      'Efetue: $0{,}25 + 0{,}75 - 0{,}40 = 0{,}60$.',
    ],
    memoryTakeaway: 'Para nunca errar raiz de decimal, transforme em fração ($0{,}16 = \\frac{16}{100} \\to \\frac{4}{10} = 0{,}4$).',
  },
  {
    id: 'mat-q41',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    source: 'Edital 12.2 · Comparação de Frações e Decimais',
    prompt:
      'Durante um treino na orla de Boa Viagem, Carlos percorreu $\\frac{3}{4}$ do trajeto, Beatriz percorreu $\\frac{5}{6}$ e Diego percorreu $\\frac{7}{8}$. A ordenação CRESCENTE das distâncias percorridas pelos três é:',
    options: [
      'Carlos, Beatriz e Diego.',
      'Diego, Beatriz e Carlos.',
      'Beatriz, Carlos e Diego.',
      'Carlos, Diego e Beatriz.',
      'Diego, Carlos e Beatriz.',
    ],
    correctIndex: 0,
    explanation:
      'Usando $\\text{MMC}(4, 6, 8) = 24$ ou dividindo para decimais: Carlos $= \\frac{18}{24} = 0{,}75$; Beatriz $= \\frac{20}{24} \\approx 0{,}833$; Diego $= \\frac{21}{24} = 0{,}875$. Em ordem crescente: Carlos $<$ Beatriz $<$ Diego.',
    trapNote: 'Não compare frações apenas olhando os numeradores ou denominadores isolados; iguale os denominadores pelo MMC ou veja quanto falta para o inteiro ($\\frac{1}{4} > \\frac{1}{6} > \\frac{1}{8}$)!',
    optionFeedback: [
      'Correto! $\\frac{18}{24} < \\frac{20}{24} < \\frac{21}{24}$, portanto Carlos < Beatriz < Diego.',
      'Esta é a ordem DECRESCENTE (do maior para o menor), e o enunciado pediu CRESCENTE.',
      '$\\frac{5}{6} \\approx 0{,}833$ é maior que $\\frac{3}{4} = 0{,}75$; logo Carlos vem primeiro.',
      'Diego ($0{,}875$) percorreu mais que Beatriz ($0{,}833$), não menos.',
      'Diego percorreu a maior fração do trajeto.',
    ],
    stepByStep: [
      'Encontre o MMC entre $4$, $6$ e $8$: $\\text{MMC}(4, 6, 8) = 24$.',
      'Converta para o mesmo denominador: Carlos $= \\frac{18}{24}$, Beatriz $= \\frac{20}{24}$, Diego $= \\frac{21}{24}$.',
      'Ordene do menor numerador ao maior (crescente): $18 < 20 < 21 \\implies$ Carlos, Beatriz e Diego.',
    ],
    memoryTakeaway: 'Faltando apenas $1$ pedaço para fechar o inteiro ($\\frac{3}{4}, \\frac{5}{6}, \\frac{7}{8}$), quanto maior o denominador, menor o pedaço que falta — logo MAIOR a fração!',
  },
  {
    id: 'mat-q42',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    source: 'Edital 12.2 · Propriedades das Potências',
    prompt: 'Determine o valor simplificado da expressão:\n$$\\frac{2^{10} \\cdot 2^{-4}}{2^3} + 5^0$$',
    options: ['6.', '8.', '9.', '11.', '13.'],
    correctIndex: 2,
    explanation:
      'Na fração de potências de base $2$: $2^{10 - 4} = 2^6$ no numerador, e $\\frac{2^6}{2^3} = 2^{6 - 3} = 2^3 = 8$. Além disso, todo número não nulo elevado a zero vale $1$ ($5^0 = 1$). Logo, $8 + 1 = 9$.',
    trapNote: 'Nunca se esqueça de que $5^0 = 1$ (e NÃO $0$ nem $5$)!',
    optionFeedback: [
      'Você calculou $2^3 = 6$ por engano (fez $2 \\times 3$) ou errou a soma de expoentes.',
      '$8$ é apenas o resultado da fração $\\frac{2^6}{2^3}$; faltou somar $5^0 = 1$!',
      'Correto! $\\frac{2^6}{2^3} + 1 = 2^3 + 1 = 8 + 1 = 9$.',
      'Soma incorreta nos expoentes ou ao avaliar $5^0 = 5$.',
      'Erro grave: $5^0 = 1$, jamais $5^0 = 5$ ($8 + 5 = 13$).',
    ],
    stepByStep: [
      'No numerador, conserve a base $2$ e some os expoentes: $10 + (-4) = 6 \\implies 2^6$.',
      'Na divisão de mesma base, subtraia os expoentes: $2^{6 - 3} = 2^3 = 8$.',
      'Calcule $5^0 = 1$ e some: $8 + 1 = 9$.',
    ],
    memoryTakeaway: 'Todo número diferente de zero elevado a $0$ vale $1$ ($a^0 = 1$), e $a^{-n} = \\frac{1}{a^n}$.',
  },
  {
    id: 'mat-q43',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    source: 'Edital 12.2 · Raiz Cúbica e Quadrada Exata',
    prompt: 'Qual é o valor numérico da expressão $\\sqrt[3]{27} + \\sqrt{169} - \\sqrt[3]{8}$?',
    options: ['12.', '14.', '16.', '18.', '20.'],
    correctIndex: 1,
    explanation:
      'Como $3^3 = 27$, $\\sqrt[3]{27} = 3$. Como $13^2 = 169$, $\\sqrt{169} = 13$. Como $2^3 = 8$, $\\sqrt[3]{8} = 2$. Assim: $3 + 13 - 2 = 14$.',
    trapNote: 'Preste atenção ao índice do radical ($\\sqrt[3]{27} = 3$, pois $3^3 = 27$, e não $9$!).',
    optionFeedback: [
      'Verifique a operação em $\\sqrt{169} = 13$ ou o sinal de $-\\sqrt[3]{8} = -2$.',
      'Correto! $3 + 13 - 2 = 14$.',
      '$16$ ocorre ao somar apenas $3 + 13$ e esquecer de subtrair $\\sqrt[3]{8} = 2$.',
      '$18$ ocorre ao somar $+2$ no lugar de subtrair $-2$ ($3 + 13 + 2 = 18$).',
      'Você provavelmente calculou $\\sqrt[3]{27} = 9$ dividindo $27$ por $3$ ($9 + 13 - 2 = 20$)!',
    ],
    stepByStep: [
      'Fatore e extraia cada raiz: $\\sqrt[3]{27} = 3$ ($3^3 = 27$).',
      '$\\sqrt{169} = 13$ ($13^2 = 169$) e $\\sqrt[3]{8} = 2$ ($2^3 = 8$).',
      'Efetue: $3 + 13 - 2 = 14$.',
    ],
    memoryTakeaway: 'Raiz cúbica pergunta “qual número multiplicado por ele mesmo 3 vezes dá o radicando?”, nunca divida por $3$!',
  },
  {
    id: 'mat-q44',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    source: 'Edital 12.2 · Raiz Quadrada com Aproximação Decimal',
    prompt:
      'Um painel quadrado de robótica possui área igual a $31\\text{ m}^2$. Com aproximação de uma casa decimal, o valor mais próximo do lado $\\sqrt{31}$ desse painel é:',
    options: ['5,3 m.', '5,4 m.', '5,5 m.', '5,6 m.', '5,8 m.'],
    correctIndex: 3,
    explanation:
      'Sabemos que $5^2 = 25$ e $6^2 = 36$. Calculando os quadrados decimais próximos: $5{,}5^2 = 30{,}25$ (erro de $0{,}75$ abaixo de $31$) e $5{,}6^2 = 31{,}36$ (erro de $0{,}36$ acima de $31$). Como $0{,}36 < 0{,}75$, a melhor aproximação é $5{,}6\\text{ m}$.',
    trapNote: 'Não arredonde sempre para baixo! Teste o próximo décimo para ver qual quadrado está mais perto de $31$.',
    optionFeedback: [
      '$5{,}3^2 = 28{,}09$, muito abaixo de $31$.',
      '$5{,}4^2 = 29{,}16$, ainda distante de $31$.',
      'Quase! $5{,}5^2 = 30{,}25$ (diferença $0{,}75$), enquanto $5{,}6^2 = 31{,}36$ fica a apenas $0{,}36$ de distância.',
      'Correto! $\\sqrt{31} \\approx 5{,}567\\ldots$, cujo arredondamento até décimos é $5{,}6\\text{ m}$.',
      '$5{,}8^2 = 33{,}64$, já muito acima de $31$.',
    ],
    stepByStep: [
      'Enquadre nos inteiros: $25 < 31 < 36$, portanto $5 < \\sqrt{31} < 6$.',
      'Como $31$ passa da metade entre $25$ e $36$ ($30{,}5$), teste $5{,}5^2 = 30{,}25$ e $5{,}6^2 = 31{,}36$.',
      'Compare as distâncias: $|31 - 31{,}36| = 0{,}36 < |31 - 30{,}25| = 0{,}75$. Logo, $5{,}6\\text{ m}$.',
    ],
    memoryTakeaway: 'Aproximação decimal exige testar os dois décimos vizinhos ao quadrado e escolher o de menor distância até $N$.',
  },
  {
    id: 'mat-q45',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    source: 'Edital 12.2 · Dízima Periódica e Frações',
    prompt: 'Determine o resultado exato da soma $0{,}444\\ldots + 0{,}5$ em forma de fração irredutível:',
    options: ['$\\frac{17}{18}$.', '$\\frac{9}{10}$.', '$\\frac{19}{20}$.', '$\\frac{8}{9}$.', '$\\frac{9}{18}$.'],
    correctIndex: 0,
    explanation:
      'A fração geratriz da dízima periódica simples $0{,}444\\ldots$ é $\\frac{4}{9}$, e $0{,}5 = \\frac{1}{2}$. Somando com $\\text{MMC}(9, 2) = 18$: $\\frac{4}{9} + \\frac{1}{2} = \\frac{8 + 9}{18} = \\frac{17}{18}$.',
    trapNote: 'Não trunque uma dízima periódica para $0{,}4$ quando as alternativas são frações exatas! Converta antes para fração geratriz ($0{,}444\\ldots = \\frac{4}{9}$).',
    optionFeedback: [
      'Correto! $\\frac{4}{9} + \\frac{1}{2} = \\frac{8}{18} + \\frac{9}{18} = \\frac{17}{18}$.',
      'Você arredondou $0{,}444\\ldots$ para $0{,}4$ e fez $0{,}4 + 0{,}5 = 0{,}9 = \\frac{9}{10}$ — perdeu a dízima infinita.',
      'Equivale a $0{,}95$, valor diferente de $0{,}9444\\ldots$.',
      '$\\frac{8}{9} = 0{,}888\\ldots$, correspondente a $0{,}444\\ldots + 0{,}444\\ldots$.',
      '$\\frac{9}{18} = 0{,}5$, o que ignoraria a primeira parcela.',
    ],
    stepByStep: [
      'Ache a fração geratriz de $0{,}444\\ldots$: $1$ algarismo no período $\\to$ denominador $9 \\to \\frac{4}{9}$.',
      'Converta $0{,}5 = \\frac{1}{2}$.',
      'Some as frações com $\\text{MMC}(9, 2) = 18$: $\\frac{8}{18} + \\frac{9}{18} = \\frac{17}{18}$.',
    ],
    memoryTakeaway: 'Dízima periódica simples $0{,}aaa\\ldots = \\frac{a}{9}$; nunca arredonde antes de operar com frações exatas.',
  },
  {
    id: 'mat-q46',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    source: 'Edital 12.2 · Operações com Frações Sucessivas',
    prompt:
      'Marcelo gastou $\\frac{2}{7}$ de seu salário no aluguel e $\\frac{3}{5}$ do RESTANTE com alimentação e transporte, sobrando exatamente R$ 800,00. Qual é o salário integral de Marcelo?',
    options: ['R$ 2.100,00.', 'R$ 2.400,00.', 'R$ 2.800,00.', 'R$ 3.500,00.', 'R$ 4.200,00.'],
    correctIndex: 2,
    explanation:
      'Após gastar $\\frac{2}{7}$ no aluguel, sobra $\\frac{5}{7}$ do salário. Em seguida, ele gasta $\\frac{3}{5}$ desses $\\frac{5}{7}$ (isto é, $\\frac{3}{7}$ do total) e fica com os $\\frac{2}{5}$ finais do restante: $\\frac{2}{5} \\cdot \\frac{5}{7} = \\frac{2}{7}$ do salário. Se $\\frac{2}{7} S = 800$, então $S = \\frac{800 \\times 7}{2} =$ R$ 2.800,00.',
    trapNote: 'Note a verificação rápida: $2/7$ de $2.800 = 800$ (sobram $2.000$); $3/5$ de $2.000 = 1.200$; $2.000 - 1.200 = 800$!',
    optionFeedback: [
      'Teste $2.100$: após $2/7 = 600$, sobram $1.500$, e $2/5$ de $1.500 = 600$ (diferente de $800$).',
      'Com $2.400$, os cálculos não fecham divisão exata por $7$.',
      'Correto! $\\frac{2}{7}$ do salário equivale a R$ 800,00 $\\implies$ salário total $= 7 \\times 400 =$ R$ 2.800,00.',
      'Você multiplicou $7$ por $500$ ou confundiu $\\frac{2}{7}$ com $\\frac{8}{35}$.',
      'Valor muito acima: sobrariam R$ 1.200,00 em vez de R$ 800,00.',
    ],
    stepByStep: [
      'Depois do aluguel ($\\frac{2}{7}$), resta $1 - \\frac{2}{7} = \\frac{5}{7}$ do salário.',
      'Como gasta $\\frac{3}{5}$ do restante, sobra $\\frac{2}{5}$ desse restante.',
      'Frações acumuladas que sobram: $\\frac{2}{5} \\times \\frac{5}{7} = \\frac{2}{7}$ do salário.',
      'Iguale $\\frac{2}{7} S = 800 \\implies \\frac{1}{7} S = 400 \\implies S =$ R$ 2.800,00.',
    ],
    memoryTakeaway: 'Trabalhe com o que SOBRA a cada passo: sobrou $\\frac{5}{7}$, depois sobrou $\\frac{2}{5}$ disso $\\implies$ multiplique as sobras!',
  },
  {
    id: 'mat-q47',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    source: 'Edital 12.2 · Decimais, Raízes e Expoente Negativo',
    prompt: 'Calcule o valor da expressão $\\sqrt{1{,}44} + \\sqrt[3]{125} - (0{,}2)^{-1}$:',
    options: ['0,8.', '1,2.', '2,2.', '6,0.', '11,0.'],
    correctIndex: 1,
    explanation:
      '$\\sqrt{1{,}44} = 1{,}2$ (pois $1{,}2^2 = 1{,}44$); $\\sqrt[3]{125} = 5$ ($5^3 = 125$); e $0{,}2 = \\frac{2}{10} = \\frac{1}{5}$, logo $(0{,}2)^{-1} = \\left(\\frac{1}{5}\\right)^{-1} = 5$. Portanto: $1{,}2 + 5 - 5 = 1{,}2$.',
    trapNote: 'Expoente $-1$ INVERTE a fração sem trocar o sinal do número! $0{,}2^{-1} = (\\frac{1}{5})^{-1} = 5$, e não $-0{,}2$!',
    optionFeedback: [
      'Confira o valor de $\\sqrt{1{,}44} = 1{,}2$: você somou $5 - 5$ certo, mas errou a primeira raiz.',
      'Correto! $1{,}2 + 5 - 5 = 1{,}2$.',
      'Possível erro de subtrair $4$ em lugar de $5$.',
      'Você calculou $(0{,}2)^{-1} = 0{,}2$ ou trocou o sinal para $+0{,}2$.',
      'Você somou $+5$ ao invés de subtrair: $1{,}2 + 5 + 5 = 11{,}2$ (aprox).',
    ],
    stepByStep: [
      'Transforme $1{,}44 = \\frac{144}{100}$, cuja raiz é $\\frac{12}{10} = 1{,}2$.',
      'Calcule $\\sqrt[3]{125} = 5$.',
      'Converta $0{,}2 = \\frac{1}{5}$ e inverta pelo expoente $-1$: $(\\frac{1}{5})^{-1} = 5$.',
      'Some: $1{,}2 + 5 - 5 = 1{,}2$.',
    ],
    memoryTakeaway: 'Expoente negativo $-1$ vira a fração de cabeça para baixo: $(0{,}2)^{-1} = (\\frac{1}{5})^{-1} = 5$.',
  },
  {
    id: 'mat-q48',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    source: 'Edital 12.2 · Potências de 10 e Notação Científica',
    prompt:
      'Um processador utilizado nos laboratórios de Informática da ETE realiza $4{,}5 \\times 10^6$ operações por segundo. Mantendo esse ritmo constante, quantas operações ele executará em $2 \\times 10^2$ segundos?',
    options: [
      '$6{,}5 \\times 10^8$.',
      '$9{,}0 \\times 10^{12}$.',
      '$9{,}0 \\times 10^4$.',
      '$4{,}5 \\times 10^8$.',
      '$9{,}0 \\times 10^8$.',
    ],
    correctIndex: 4,
    explanation:
      'Multiplicamos os coeficientes ($4{,}5 \\times 2 = 9{,}0$) e aplicamos produto de potências de base $10$ somando os expoentes ($10^6 \\cdot 10^2 = 10^{6+2} = 10^8$). Resultado: $9{,}0 \\times 10^8$ operações.',
    trapNote: 'Em $10^6 \\cdot 10^2$, SOMAMOS os expoentes ($6+2=8$), jamais multiplicamos ($6 \\times 2 = 12$)!',
    optionFeedback: [
      'Você somou $4{,}5 + 2 = 6{,}5$ em vez de multiplicar as mantissas.',
      'Armadilha clássica: multiplicou os expoentes $6 \\times 2 = 12$ no lugar de somá-los!',
      'Você subtraiu os expoentes ($6 - 2 = 4$) como se fosse divisão.',
      'Esqueceu de multiplicar $4{,}5$ por $2$.',
      'Correto! $(4{,}5 \\cdot 2) \\times 10^{6 + 2} = 9{,}0 \\times 10^8$.',
    ],
    stepByStep: [
      'Multiplique os números da frente: $4{,}5 \\times 2 = 9{,}0$.',
      'Multiplique as potências de $10$ somando os expoentes: $10^6 \\cdot 10^2 = 10^8$.',
      'Junte os termos em notação científica: $9{,}0 \\times 10^8$.',
    ],
    memoryTakeaway: 'Notação científica na multiplicação: multiplique as mantissas e SOME os expoentes de $10$.',
  },
  {
    id: 'mat-q49',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    source: 'Edital 12.2 · Radicais e Racionalização',
    prompt: 'Racionalizando e simplificando a expressão $\\frac{12}{\\sqrt{3}} + \\sqrt{27}$, encontra-se:',
    options: ['$4\\sqrt{3}$.', '$5\\sqrt{3}$.', '$6\\sqrt{3}$.', '$7\\sqrt{3}$.', '$15\\sqrt{3}$.'],
    correctIndex: 3,
    explanation:
      'Multiplicando numerador e denominador da fração por $\\sqrt{3}$: $\\frac{12\\sqrt{3}}{\\sqrt{3}\\cdot\\sqrt{3}} = \\frac{12\\sqrt{3}}{3} = 4\\sqrt{3}$. Fatorando $\\sqrt{27} = \\sqrt{9 \\cdot 3} = 3\\sqrt{3}$. Somando: $4\\sqrt{3} + 3\\sqrt{3} = 7\\sqrt{3}$.',
    trapNote: 'Não tente dividir $12$ por $3$ deixando a raiz sem racionalizar — lembre que multiplicar em cima e embaixo por $\\sqrt{3}$ elimina a raiz do denominador.',
    optionFeedback: [
      '$4\\sqrt{3}$ é apenas a primeira parcela racionalizada; faltou somar $\\sqrt{27} = 3\\sqrt{3}$.',
      'Confira $\\frac{12}{3} = 4$ e $\\sqrt{27} = 3\\sqrt{3}$; a soma resulta em $7\\sqrt{3}$.',
      'Erro na simplificação de $\\frac{12}{3}$ ou de $\\sqrt{27}$.',
      'Correto! $4\\sqrt{3} + 3\\sqrt{3} = 7\\sqrt{3}$.',
      'Esqueceu de dividir $12$ por $3$ após racionalizar o denominador ($12\\sqrt{3} + 3\\sqrt{3}$).',
    ],
    stepByStep: [
      'Racionalize $\\frac{12}{\\sqrt{3}} = \\frac{12\\sqrt{3}}{3} = 4\\sqrt{3}$.',
      'Simplifique $\\sqrt{27} = \\sqrt{9 \\cdot 3} = 3\\sqrt{3}$.',
      'Some os radicais semelhantes: $4\\sqrt{3} + 3\\sqrt{3} = 7\\sqrt{3}$.',
    ],
    memoryTakeaway: 'Para tirar $\\sqrt{a}$ do denominador, multiplique em cima e embaixo por $\\sqrt{a}$: embaixo vira $a$ sem raiz!',
  },
  {
    id: 'mat-q50',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    source: 'Edital 12.2 · Potências com Sinais Negativos',
    prompt: 'Avalie a expressão numérica com números inteiros e potências:\n$$\\frac{(-3)^2 - 3^2 + 12}{(-2)^3 + 10}$$',
    options: ['$-6$.', '$0$.', '$3$.', '$6$.', '$9$.'],
    correctIndex: 3,
    explanation:
      'Atenção rigorosa aos parênteses: $(-3)^2 = +9$, mas $-3^2 = -9$! Logo o numerador fica $9 - 9 + 12 = 12$. No denominador, expoente ímpar mantém o sinal: $(-2)^3 = -8$, logo $-8 + 10 = 2$. Assim: $\\frac{12}{2} = 6$.',
    trapNote: 'Se você achou $30/2 = 15$ ou $12/18$, errou a diferença vital entre $(-3)^2 = +9$ e $-3^2 = -9$!',
    optionFeedback: [
      'Erro de sinal no denominador: $-8 + 10 = +2$ (não $-2$).',
      'Você deve ter anulado o $+12$ ou feito $(+9) - (+9) - 12$.',
      'Erro ao dividir $12$ por $4$ no denominador.',
      'Correto! $\\frac{9 - 9 + 12}{-8 + 10} = \\frac{12}{2} = 6$.',
      'O termo $-3^2 = -9$ anula o $+9$ inicial.',
    ],
    stepByStep: [
      'Resolva as duas primeiras potências: $(-3)^2 = +9$ e $-3^2 = -(3^2) = -9$.',
      'Some no numerador: $9 - 9 + 12 = 12$.',
      'Calcule $(-2)^3 = (-2)(-2)(-2) = -8$ e faça $-8 + 10 = 2$.',
      'Divida: $\\frac{12}{2} = 6$.',
    ],
    memoryTakeaway: 'Sem parênteses, o sinal negativo NÃO está elevado: $-3^2 = -9$. Em expoente ímpar, sinal negativo continua: $(-2)^3 = -8$.',
  },
  {
    id: 'mat-q51',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    source: 'Edital 12.2 · Radicais Aninhados',
    prompt: 'Calcule, de dentro para fora, o valor exato de:\n$$\\sqrt{21 + \\sqrt{11 + \\sqrt{25}}}$$',
    options: ['4.', '5.', '6.', '7.', '9.'],
    correctIndex: 1,
    explanation:
      'Começando pela raiz mais interna: $\\sqrt{25} = 5$. Somando na intermediária: $\\sqrt{11 + 5} = \\sqrt{16} = 4$. Somando na externa: $\\sqrt{21 + 4} = \\sqrt{25} = 5$.',
    trapNote: 'Nunca comece pela raiz externa! Radicais encadeados resolvem-se sempre da camada mais interna para fora.',
    optionFeedback: [
      '$4$ é o resultado da raiz intermediária $\\sqrt{16}$, faltando somar $21$ e tirar a última raiz.',
      'Correto! $\\sqrt{25} = 5 \\to \\sqrt{16} = 4 \\to \\sqrt{25} = 5$.',
      'Erro de soma intermediária ($11 + 5 = 16$, cuja raiz é $4$).',
      'Soma incorreta dentro dos radicais.',
      '$21 + 4 = 25$, e $\\sqrt{25} = 5$, não $9$.',
    ],
    stepByStep: [
      'Resolva a raiz mais interna: $\\sqrt{25} = 5$.',
      'Substitua na segunda raiz: $\\sqrt{11 + 5} = \\sqrt{16} = 4$.',
      'Substitua na raiz externa: $\\sqrt{21 + 4} = \\sqrt{25} = 5$.',
    ],
    memoryTakeaway: 'Raízes uma dentro da outra: descasque da mais interna para a mais externa!',
  },
  {
    id: 'mat-q52',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    source: 'Edital 12.2 · Divisão com Decimais e Frações',
    prompt:
      'Um garrafão contém $4{,}5\\text{ litros}$ de suco de caju e todo esse líquido será distribuído integralmente em copos com capacidade exata de $\\frac{3}{10}$ de litro cada. Quantos copos ficarão completamente cheios?',
    options: ['12 copos.', '13 copos.', '15 copos.', '18 copos.', '20 copos.'],
    correctIndex: 2,
    explanation:
      'Sabemos que $\\frac{3}{10} = 0{,}3\\text{ L}$ e $4{,}5 = \\frac{9}{2}\\text{ L}$. Dividindo o total pela capacidade de cada copo: $4{,}5 \\div 0{,}3 = 45 \\div 3 = 15$ copos (ou $\\frac{9}{2} \\cdot \\frac{10}{3} = 15$).',
    trapNote: 'Na divisão de decimais ($4{,}5 \\div 0{,}3$), iguale as casas decimais e corte a vírgula ($45 \\div 3$): fica imediato!',
    optionFeedback: [
      'Confira: $12 \\times 0{,}3 = 3{,}6\\text{ L}$, ainda faltariam $0{,}9\\text{ L}$.',
      '$13 \\times 0{,}3 = 3{,}9\\text{ L}$, diferente de $4{,}5\\text{ L}$.',
      'Correto! $45 \\div 3 = 15$ copos cheios sem sobra.',
      '$18 \\times 0{,}3 = 5{,}4\\text{ L}$, passaria do volume do garrafão.',
      'Você calculou $4{,}5 \\times \\frac{3}{10}$ invertido ou errou a divisão por $3$.',
    ],
    stepByStep: [
      'Converta $\\frac{3}{10}$ de litro em decimal: $0{,}3\\text{ L}$.',
      'Arme a divisão $4{,}5 \\div 0{,}3$: multiplique ambos por $10 \\to 45 \\div 3$.',
      'Calcule $45 \\div 3 = 15$ copos.',
    ],
    memoryTakeaway: 'Divisão de frações = repete a primeira e multiplica pelo inverso da segunda; ou iguale as casas decimais e divida inteiros!',
  },
  {
    id: 'mat-q53',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    source: 'Edital 12.2 · Aproximação de Raiz Não Exata',
    prompt:
      'Um cabo de rede ligará em linha reta dois pontos separados por uma distância igual a $\\sqrt{115}\\text{ metros}$. Qual é a melhor aproximação decimal até décimos para $\\sqrt{115}$?',
    options: ['10,5 m.', '10,6 m.', '10,7 m.', '10,8 m.', '10,9 m.'],
    correctIndex: 2,
    explanation:
      'Como $10^2 = 100$ e $11^2 = 121$, temos $10 < \\sqrt{115} < 11$. Testando os décimos vizinhos: $10{,}7^2 = 114{,}49$ (distância $0{,}51$ até $115$) e $10{,}8^2 = 116{,}64$ (distância $1{,}64$). Portanto, $\\sqrt{115} \\approx 10{,}7\\text{ m}$.',
    trapNote: 'Entre $100$ e $121$ há $21$ unidades, e $115$ já percorreu $15$ delas — logo fica perto de $10{,}7$ ($\\frac{15}{21} \\approx 0{,}71$).',
    optionFeedback: [
      '$10{,}5^2 = 110{,}25$, bem abaixo de $115$.',
      '$10{,}6^2 = 112{,}36$, ainda distante de $115$.',
      'Correto! $10{,}7^2 = 114{,}49$ é o quadrado decimal mais próximo de $115$.',
      '$10{,}8^2 = 116{,}64$ dista $1{,}64$ de $115$, muito mais distante que $10{,}7^2$.',
      '$10{,}9^2 = 118{,}81$, muito próximo de $11^2 = 121$.',
    ],
    stepByStep: [
      'Enquadre entre quadrados perfeitos inteiros: $100 < 115 < 121$.',
      'Estime a fração do intervalo: $\\frac{115 - 100}{121 - 100} = \\frac{15}{21} \\approx 0{,}7$.',
      'Confirme calculando $10{,}7^2 = 114{,}49$ vs. $10{,}8^2 = 116{,}64 \\implies 10{,}7\\text{ m}$.',
    ],
    memoryTakeaway: 'Estimativa rápida de $\\sqrt{N}$: veja a fração percorrida entre $a^2$ e $(a+1)^2$, depois confira multiplicando!',
  },
  {
    id: 'mat-q54',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    source: 'Edital 12.2 · Redução à Mesma Base',
    prompt: 'Reduzindo à base $2$, determine o valor exato da expressão:\n$$\\frac{8^4 \\cdot 4^{-3}}{16^2}$$',
    options: ['$\\frac{1}{4}$.', '$\\frac{1}{8}$.', '$\\frac{1}{2}$.', '$2$.', '$4$.'],
    correctIndex: 0,
    explanation:
      'Escrevendo todas as potências na base $2$: $8 = 2^3$, $4 = 2^2$ e $16 = 2^4$. Substituindo: $\\frac{(2^3)^4 \\cdot (2^2)^{-3}}{(2^4)^2} = \\frac{2^{12} \\cdot 2^{-6}}{2^8} = \\frac{2^6}{2^8} = 2^{6-8} = 2^{-2} = \\frac{1}{2^2} = \\frac{1}{4}$.',
    trapNote: 'Em potência de potência $(2^3)^4$, MULTIPLICAM-SE os expoentes ($3 \\times 4 = 12$). Só se somam expoentes na multiplicação de duas bases ($2^{12} \\cdot 2^{-6}$)!',
    optionFeedback: [
      'Correto! $\\frac{2^{12} \\cdot 2^{-6}}{2^8} = 2^{6-8} = 2^{-2} = \\frac{1}{4}$.',
      'Você encontrou $2^{-3}$ no último passo em vez de $2^{-2}$.',
      'Erro ao calcular $(2^2)^{-3}$ ou ao subtrair os expoentes ($8$ vs $6$).',
      'Sinal invertido no expoente final ($2^{+2}$ vs $2^{-2}$ ou $2^1$).',
      'Você subtraiu ao contrário ($8 - 6 = +2$) obtendo $2^2 = 4$ em vez de $2^{-2} = \\frac{1}{4}$!',
    ],
    stepByStep: [
      'Fatore as bases para base $2$: $8^4 = (2^3)^4 = 2^{12}$; $4^{-3} = (2^2)^{-3} = 2^{-6}$; $16^2 = (2^4)^2 = 2^8$.',
      'Opere no numerador: $2^{12} \\cdot 2^{-6} = 2^6$.',
      'Divida pelo denominador: $\\frac{2^6}{2^8} = 2^{6-8} = 2^{-2} = \\frac{1}{4}$.',
    ],
    memoryTakeaway: 'Bases diferentes que são potências de um mesmo primo ($4, 8, 16, 32$): reescreva tudo na base $2$ antes de simplificar!',
  },
  {
    id: 'mat-q55',
    discipline: 'MAT',
    topicId: 'mat-operacoes',
    source: 'Edital 12.2 · Frações Complementares do Total',
    prompt:
      'Na biblioteca de uma ETE, $\\frac{1}{4}$ dos livros do acervo de exatas são de Física, $\\frac{2}{5}$ são de Matemática e os $28$ exemplares restantes são de Química. Quantos livros há no acervo completo de exatas?',
    options: ['60 livros.', '70 livros.', '80 livros.', '100 livros.', '120 livros.'],
    correctIndex: 2,
    explanation:
      'Somando as frações de Física e Matemática: $\\frac{1}{4} + \\frac{2}{5} = \\frac{5 + 8}{20} = \\frac{13}{20}$ do acervo. A fração restante (Química) corresponde a $1 - \\frac{13}{20} = \\frac{7}{20}$. Como $\\frac{7}{20} T = 28$, temos $T = \\frac{28 \\times 20}{7} = 4 \\times 20 = 80$ livros.',
    trapNote: 'Aqui ambas as frações referem-se ao acervo total (não ao restante), então somam-se diretamente antes de achar o complemento para $1$.',
    optionFeedback: [
      'Com $60$ livros, Química seria $60 - 15 - 24 = 21$ (diferente de $28$).',
      '$70$ não é múltiplo de $4$ nem de $20$.',
      'Correto! $\\frac{7}{20}$ do total vale $28 \\implies \\frac{1}{20} = 4 \\implies 20 \\times 4 = 80$ livros.',
      'Com $100$ livros, restariam $100 - 25 - 40 = 35$ livros.',
      'Com $120$ livros, restariam $120 - 30 - 48 = 42$ livros.',
    ],
    stepByStep: [
      'Some as frações já conhecidas: $\\frac{1}{4} + \\frac{2}{5} = \\frac{5}{20} + \\frac{8}{20} = \\frac{13}{20}$.',
      'Descubra a fração que falta para completar $\\frac{20}{20}$: $\\frac{20 - 13}{20} = \\frac{7}{20}$.',
      'Se $7$ partes de $20$ valem $28$, $1$ parte vale $28 \\div 7 = 4$, e o total ($20$ partes) vale $20 \\times 4 = 80$.',
    ],
    memoryTakeaway: 'Frações do mesmo todo? Some pelo MMC e associe o restante exato ($1 - \\text{soma}$) ao valor inteiro informado.',
  },

  // =========================================================================
  // TÓPICO 2: mat-medidas (20 questões)
  // =========================================================================
  {
    id: 'mat-q09',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    source: 'Edital 12.2 · Volume e Capacidade',
    prompt:
      'Um reservatório em forma de bloco retangular tem medidas internas de $2\\text{ m}$ de comprimento, $1{,}5\\text{ m}$ de largura e $80\\text{ cm}$ de altura. Quantos litros de água ele comporta quando totalmente cheio?',
    options: ['240 L.', '1.200 L.', '2.400 L.', '3.000 L.', '24.000 L.'],
    correctIndex: 2,
    explanation:
      'Convertendo todas as medidas para metros: $80\\text{ cm} = 0{,}8\\text{ m}$. O volume é $V = 2 \\times 1{,}5 \\times 0{,}8 = 2{,}4\\text{ m}^3$. Como $1\\text{ m}^3 = 1.000\\text{ litros}$, a capacidade é $2{,}4 \\times 1.000 = 2.400\\text{ litros}$.',
    trapNote: 'Nunca multiplique metros direto por centímetros! Padronize tudo para metros (e multiplique por $1.000$) ou para decímetros (já sai direto em litros, pois $1\\text{ dm}^3 = 1\\text{ L}$).',
    optionFeedback: [
      'Você esqueceu uma casa decimal ao multiplicar por $100$ no lugar de converter $\\text{m}^3$ para litros ($\\times 1.000$).',
      'Erro de cálculo em $2 \\times 1{,}5 \\times 0{,}8 = 2{,}4$ (metade do valor).',
      'Correto! $2\\text{ m} \\times 1{,}5\\text{ m} \\times 0{,}8\\text{ m} = 2{,}4\\text{ m}^3 = 2.400\\text{ L}$.',
      'Você provavelmente usou altura $1\\text{ m}$ em vez de $80\\text{ cm} = 0{,}8\\text{ m}$ ($2 \\times 1{,}5 \\times 1 = 3.000$).',
      'Erro de fator $10$ na conversão de centímetros para metros ($80\\text{ cm} = 0{,}8\\text{ m}$, não $8\\text{ m}$).',
    ],
    stepByStep: [
      'Padronize a altura em metros: $80\\text{ cm} \\div 100 = 0{,}8\\text{ m}$.',
      'Calcule o volume do bloco retangular: $V = 2 \\times 1{,}5 \\times 0{,}8 = 2{,}4\\text{ m}^3$.',
      'Converta para litros multiplicando por $1.000$: $2{,}4 \\times 1.000 = 2.400\\text{ L}$.',
    ],
    memoryTakeaway: 'Antes de calcular volume, coloque as $3$ dimensões na MESMA unidade! E memorize: $1\\text{ m}^3 = 1.000\\text{ L}$ e $1\\text{ dm}^3 = 1\\text{ L}$.',
  },
  {
    id: 'mat-q10',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    source: 'Edital 12.2 · Medidas de Superfície',
    stimulusId: 'geo-retangulo-escala',
    prompt:
      'O piso retangular de um laboratório de programação mede $b = 6\\text{ m}$ de comprimento por $h = 4{,}5\\text{ m}$ de largura e será coberto com placas quadradas de $30\\text{ cm}$ de lado, sem desperdício. Quantas placas serão necessárias?',
    options: ['90 placas.', '150 placas.', '240 placas.', '300 placas.', '450 placas.'],
    correctIndex: 3,
    explanation:
      'Convertendo para centímetros, o piso mede $600\\text{ cm} \\times 450\\text{ cm}$, com área total $270.000\\text{ cm}^2$. Cada placa tem área $30 \\times 30 = 900\\text{ cm}^2$. Dividindo: $\\frac{270.000}{900} = 300\\text{ placas}$ (ou $20$ fileiras $\\times 15$ colunas).',
    trapNote: 'Atenção na conversão de área: $1\\text{ m} = 100\\text{ cm}$, mas $1\\text{ m}^2 = 100 \\times 100 = 10.000\\text{ cm}^2$!',
    optionFeedback: [
      'Você provavelmente dividiu apenas $27\\text{ m}^2$ por $0{,}30$ ($90$) esquecendo que o quadrado mede $0{,}3 \\times 0{,}3 = 0{,}09\\text{ m}^2$!',
      'Metade do total necessário por erro ao calcular o número de placas por fileira.',
      'Contagem imprecisa nas dimensões em centímetros.',
      'Correto! $\\frac{600}{30} = 20$ placas no comprimento e $\\frac{450}{30} = 15$ na largura $\\implies 20 \\times 15 = 300$.',
      'Você multiplicou $15 \\times 30$ em lugar de $15 \\times 20$.',
    ],
    stepByStep: [
      'Converta comprimento e largura para centímetros: $6\\text{ m} = 600\\text{ cm}$ e $4{,}5\\text{ m} = 450\\text{ cm}$.',
      'Calcule quantas placas cabem em cada direção: $\\frac{600}{30} = 20$ e $\\frac{450}{30} = 15$.',
      'Multiplique as fileiras: $20 \\times 15 = 300$ placas.',
    ],
    memoryTakeaway: 'Em ladrilhamento exato, divida cada dimensão pelo lado do piso (na mesma unidade!) e multiplique os dois resultados.',
  },
  {
    id: 'mat-q11',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    source: 'Edital 12.2 · Capacidade e Tempo',
    prompt:
      'Uma torneira com vazão constante despeja $15\\text{ litros}$ de água por minuto em uma caixa cúbica de $1\\text{ m}$ de aresta, inicialmente vazia. Em quantos minutos a caixa atingirá $75\\%$ de sua capacidade total?',
    options: ['35 minutos.', '40 minutos.', '45 minutos.', '50 minutos.', '60 minutos.'],
    correctIndex: 3,
    explanation:
      'Uma caixa cúbica de $1\\text{ m}$ de aresta possui volume $1^3 = 1\\text{ m}^3 = 1.000\\text{ litros}$. A meta é $75\\%$ de $1.000\\text{ L} = 750\\text{ L}$. À vazão de $15\\text{ L/min}$, o tempo será $\\frac{750}{15} = 50\\text{ minutos}$.',
    trapNote: 'Não pare em $1.000\\text{ L}$ e nem ache que $1\\text{ m}^3 = 100\\text{ L}$!',
    optionFeedback: [
      'Com $35\\text{ min}$, entrariam apenas $35 \\times 15 = 525\\text{ L}$ ($52{,}5\\%$).',
      'Com $40\\text{ min}$, entrariam $600\\text{ L}$ ($60\\%$).',
      'Com $45\\text{ min}$, entrariam $675\\text{ L}$ ($67{,}5\\%$).',
      'Correto! $75\\%$ de $1.000\\text{ L} = 750\\text{ L}$, e $750 \\div 15 = 50\\text{ minutos}$.',
      '$60\\text{ min}$ encheria $900\\text{ L}$ ($90\\%$ da caixa).',
    ],
    stepByStep: [
      'Calcule a capacidade do cubo: $V = 1\\text{ m}^3 = 1.000\\text{ L}$.',
      'Calcule $75\\%$ da capacidade: $0{,}75 \\times 1.000 = 750\\text{ L}$.',
      'Divida o volume necessário pela vazão: $\\frac{750}{15} = 50\\text{ minutos}$.',
    ],
    memoryTakeaway: 'Cubo de $1\\text{ m}$ de aresta guarda sempre $1.000\\text{ litros}$ ($1\\text{ m}^3 = 1.000\\text{ L}$).',
  },
  {
    id: 'mat-q56',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    source: 'Edital 12.2 · Comprimento e Perímetro',
    stimulusId: 'geo-retangulo-escala',
    prompt:
      'Uma escola vai cercar uma horta retangular de comprimento $b = 24\\text{ m}$ e largura $h = 15\\text{ m}$ dando $4$ voltas completas de arame ao redor de todo o perímetro. Quantos metros de arame serão utilizados ao todo?',
    options: ['78 m.', '156 m.', '280 m.', '312 m.', '360 m.'],
    correctIndex: 3,
    explanation:
      'O perímetro do retângulo é $P = 2(b + h) = 2(24 + 15) = 2 \\times 39 = 78\\text{ m}$. Multiplicando pelas $4$ voltas completas de arame: $4 \\times 78 = 312\\text{ metros}$.',
    trapNote: 'Não multiplique $24 \\times 15$ (área $= 360$)! Cerca segue a borda externa, isto é, o PERÍMETRO ($2b + 2h$).',
    optionFeedback: [
      '$78\\text{ m}$ corresponde a apenas $1$ volta ao redor da horta; o problema pede $4$ voltas!',
      '$156\\text{ m}$ equivale a apenas $2$ voltas.',
      'Erro aritmético ao multiplicar $78$ por $4$.',
      'Correto! Perímetro $= 78\\text{ m}$; com $4$ voltas temos $78 \\times 4 = 312\\text{ m}$.',
      'Armadilha da área! $24 \\times 15 = 360\\text{ m}^2$ é a superfície interna, não a cerca do contorno.',
    ],
    stepByStep: [
      'Calcule o perímetro (soma dos $4$ lados): $24 + 24 + 15 + 15 = 78\\text{ m}$.',
      'Multiplique o perímetro pela quantidade de fios ($4$ voltas): $78 \\times 4 = 312\\text{ m}$.',
    ],
    memoryTakeaway: 'Cerca, muro e rodapé usam PERÍMETRO (soma dos lados em metros); piso, grama e pintura usam ÁREA ($\\text{m}^2$).',
  },
  {
    id: 'mat-q57',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    source: 'Edital 12.2 · Medidas de Massa',
    prompt:
      'Um pacote de insumos para o refeitório pesa $1{,}2\\text{ kg}$ e deve ser fracionado exatamente em porções individuais de $40\\text{ g}$. Quantas porções completas serão obtidas?',
    options: ['3 porções.', '24 porções.', '30 porções.', '40 porções.', '300 porções.'],
    correctIndex: 2,
    explanation:
      'Sabendo que $1\\text{ kg} = 1.000\\text{ g}$, temos $1{,}2\\text{ kg} = 1.200\\text{ g}$. Dividindo pela massa de cada porção: $\\frac{1.200}{40} = 30\\text{ porções}$.',
    trapNote: 'Unidades lineares de massa (kg $\\to$ g) multiplicam-se por $1.000$, não por $100$!',
    optionFeedback: [
      'Você dividiu $120$ por $40$ convertendo $\\text{kg}$ por $100$ em vez de $1.000$.',
      'Erro na divisão de $1.200$ por $40$.',
      'Correto! $1.200\\text{ g} \\div 40\\text{ g} = 30$ porções.',
      'Confusão entre a quantidade de gramas por porção ($40$) e o número de porções.',
      'Erro de um zero a mais ($12.000 \\div 40$).',
    ],
    stepByStep: [
      'Converta quilograma em grama ($\\times 1.000$): $1{,}2 \\times 1.000 = 1.200\\text{ g}$.',
      'Divida pela massa unitária: $\\frac{1.200}{40} = \\frac{120}{4} = 30$.',
    ],
    memoryTakeaway: '$1\\text{ quilograma (kg)} = 1.000\\text{ gramas (g)}$ e $1\\text{ tonelada (t)} = 1.000\\text{ kg}$.',
  },
  {
    id: 'mat-q58',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    source: 'Edital 12.2 · Tempo, Comprimento e Velocidade',
    prompt:
      'Um ônibus segue a velocidade constante de $72\\text{ km/h}$ ($= 20\\text{ m/s}$). Quantos metros ele percorre em $45\\text{ segundos}$?',
    options: ['324 m.', '600 m.', '3.240 m.', '1.200 m.', '900 m.'],
    correctIndex: 4,
    explanation:
      'Convertendo $72\\text{ km/h}$ para metros por segundo, dividimos por $3{,}6$: $\\frac{72}{3{,}6} = 20\\text{ m/s}$. Multiplicando pelo tempo em segundos: $\\Delta s = 20 \\times 45 = 900\\text{ metros}$.',
    trapNote: 'Nunca multiplique $\\text{km/h}$ diretamente por segundos! Converta antes usando $\\div 3{,}6$.',
    optionFeedback: [
      'Você multiplicou $7{,}2 \\times 45 = 324$ ignorando a conversão de hora para segundo.',
      'Valor corresponde a $30\\text{ segundos}$ a $20\\text{ m/s}$.',
      'Multiplicou $72 \\times 45$ diretamente misturando $\\text{km/h}$ com segundos.',
      'Corresponderia a $1\\text{ minuto}$ completo ($60\\text{ s}$) a $20\\text{ m/s}$.',
      'Correto! $20\\text{ m/s} \\times 45\\text{ s} = 900\\text{ metros}$.',
    ],
    stepByStep: [
      'Transforme $72\\text{ km/h}$ em $\\text{m/s}$ dividindo por $3{,}6$: $72 \\div 3{,}6 = 20\\text{ m/s}$.',
      'Multiplique velocidade pelo tempo em segundos: $20 \\times 45 = 900\\text{ m}$.',
    ],
    memoryTakeaway: 'Conversão mágica de velocidade: $\\text{km/h} \\xrightarrow{\\div 3{,}6} \\text{m/s}$ e $\\text{m/s} \\xrightarrow{\\times 3{,}6} \\text{km/h}$.',
  },
  {
    id: 'mat-q59',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    source: 'Edital 12.2 · Medidas Agrárias e Área',
    prompt:
      'Uma fazenda experimental de energia solar no Sertão possui formato retangular medindo $250\\text{ m}$ de frente por $160\\text{ m}$ de fundo. Sabendo que $1\\text{ hectare (ha)} = 1\\text{ hm}^2 = 10.000\\text{ m}^2$, qual é a área total dessa fazenda em hectares?',
    options: ['0,4 ha.', '4,0 ha.', '8,2 ha.', '40,0 ha.', '400,0 ha.'],
    correctIndex: 1,
    explanation:
      'Calculando a área em metros quadrados: $A = 250 \\times 160 = 40.000\\text{ m}^2$. Dividindo por $10.000\\text{ m}^2/\\text{ha}$, encontramos $\\frac{40.000}{10.000} = 4{,}0\\text{ hectares}$.',
    trapNote: 'Lembre a definição agrária oficial: $1\\text{ hectare (ha)}$ equivale a um quadrado de $100\\text{ m} \\times 100\\text{ m} = 10.000\\text{ m}^2$.',
    optionFeedback: [
      'Dividiu por $100.000$ no lugar de $10.000$.',
      'Correto! $40.000\\text{ m}^2 \\div 10.000 = 4{,}0\\text{ ha}$.',
      'Resultado obtido somando dimensões ou calculando perímetro em alguma etapa.',
      'Dividiu $40.000$ apenas por $1.000$, confundindo $\\text{m}^2$ com litros/metros.',
      'Dividiu apenas por $100$.',
    ],
    stepByStep: [
      'Calcule a área em $\\text{m}^2$: $250 \\times 160 = 40.000\\text{ m}^2$.',
      'Divida por $10.000$ (tamanho de $1\\text{ hectare}$): $\\frac{40.000}{10.000} = 4{,}0\\text{ ha}$.',
    ],
    memoryTakeaway: '$1\\text{ hectare (ha)} = 1\\text{ hm}^2 = 10.000\\text{ m}^2$ (aproximadamente um campo de futebol oficial).',
  },
  {
    id: 'mat-q60',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    source: 'Edital 12.2 · Medidas de Tempo (Sistema Sexagesimal)',
    prompt:
      'Na programação de uma competição de robótica, a primeira fase durou $2\\text{ h } 18\\text{ min } 40\\text{ s}$ e a segunda fase durou $1\\text{ h } 45\\text{ min } 35\\text{ s}$. Qual foi a duração total exata das duas fases somadas?',
    options: [
      '4 h 04 min 15 s.',
      '3 h 63 min 75 s.',
      '4 h 03 min 15 s.',
      '3 h 54 min 15 s.',
      '4 h 14 min 15 s.',
    ],
    correctIndex: 0,
    explanation:
      'Somando unidade com unidade: $2\\text{ h} + 1\\text{ h} = 3\\text{ h}$; $18\\text{ min} + 45\\text{ min} = 63\\text{ min}$; $40\\text{ s} + 35\\text{ s} = 75\\text{ s}$. Convertendo de trás para frente na base $60$: $75\\text{ s} = 1\\text{ min } 15\\text{ s}$ ($63 + 1 = 64\\text{ min}$); $64\\text{ min} = 1\\text{ h } 04\\text{ min}$ ($3 + 1 = 4\\text{ h}$). Total: $4\\text{ h } 04\\text{ min } 15\\text{ s}$.',
    trapNote: 'No relógio a base é $60$ (e não $100$)! Sempre que segundos ou minutos atingem $60$ ou mais, leve $1$ unidade para a coluna à esquerda.',
    optionFeedback: [
      'Correto! $75\\text{ s} = 1\\text{ min }15\\text{ s}$, depois $64\\text{ min} = 1\\text{ h }04\\text{ min}$, somando $4\\text{ h } 04\\text{ min } 15\\text{ s}$.',
      'Faltou converter os excedentes acima de $60$ segundos e $60$ minutos.',
      'Esqueceu de somar o $1\\text{ minuto}$ que veio dos $75\\text{ segundos}$ ($63 + 1 = 64$, não $63$)!',
      'Somou horas sem transferir os $60\\text{ min}$ convertidos para $1\\text{ hora}$.',
      'Erro ao somar os minutos ($18 + 45 = 63$, mais $1 = 64$, e $64 - 60 = 4$).',
    ],
    stepByStep: [
      'Some por colunas: $3\\text{ h}$, $63\\text{ min}$ e $75\\text{ s}$.',
      'Dos $75\\text{ s}$, tire $60\\text{ s} = 1\\text{ min}$ para os minutos: restam $15\\text{ s}$ e sobem para $64\\text{ min}$.',
      'Dos $64\\text{ min}$, tire $60\\text{ min} = 1\\text{ h}$ para as horas: restam $04\\text{ min}$ e sobem para $4\\text{ h}$.',
    ],
    memoryTakeaway: 'Sistema sexagesimal (tempo e ângulos): $1\\text{ h} = 60\\text{ min}$ e $1\\text{ min} = 60\\text{ s}$. Passou de $60$, “vai $1$” para a esquerda!',
  },
  {
    id: 'mat-q61',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    source: 'Edital 12.2 · Capacidade (Litros e Mililitros)',
    prompt:
      'Um galão contendo $2{,}4\\text{ litros}$ de solução antisséptica foi dividido igualmente em frascos de $150\\text{ mL}$ cada. Quantos frascos completos foram preenchidos?',
    options: ['12 frascos.', '14 frascos.', '16 frascos.', '18 frascos.', '24 frascos.'],
    correctIndex: 2,
    explanation:
      'Como $1\\text{ L} = 1.000\\text{ mL}$, temos $2{,}4\\text{ L} = 2.400\\text{ mL}$. Dividindo pela capacidade de cada frasco: $\\frac{2.400}{150} = \\frac{240}{15} = 16\\text{ frascos}$.',
    trapNote: 'Não multiplique $2{,}4$ por $100$: mili significa milésimo ($1\\text{ L} = 1.000\\text{ mL}$)!',
    optionFeedback: [
      '$12 \\times 150 = 1.800\\text{ mL} = 1{,}8\\text{ L}$.',
      '$14 \\times 150 = 2.100\\text{ mL} = 2{,}1\\text{ L}$.',
      'Correto! $2.400 \\div 150 = 16$ frascos exatos.',
      '$18 \\times 150 = 2.700\\text{ mL} = 2{,}7\\text{ L}$.',
      'Dividiu apenas por $100\\text{ mL}$ ($2.400 \\div 100$) em vez de $150\\text{ mL}$.',
    ],
    stepByStep: [
      'Converta litros em mililitros ($\\times 1.000$): $2{,}4 \\times 1.000 = 2.400\\text{ mL}$.',
      'Divida: $\\frac{2.400}{150} = \\frac{240}{15} = 16$.',
    ],
    memoryTakeaway: '$1\\text{ Litro} = 1.000\\text{ mL} = 1.000\\text{ cm}^3$ (ou seja, $1\\text{ mL} = 1\\text{ cm}^3$).',
  },
  {
    id: 'mat-q62',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    source: 'Edital 12.2 · Volume Parcial em Litros',
    prompt:
      'Um aquário em forma de bloco retangular tem base de $50\\text{ cm}$ por $40\\text{ cm}$ e altura total de $30\\text{ cm}$. Se a água colocada dentro dele atinge exatos $\\frac{4}{5}$ da altura total, quantos litros de água há nesse aquário?',
    options: ['36 L.', '40 L.', '48 L.', '60 L.', '72 L.'],
    correctIndex: 2,
    explanation:
      'O volume total do aquário é $50 \\times 40 \\times 30 = 60.000\\text{ cm}^3 = 60\\text{ litros}$ (já que $1.000\\text{ cm}^3 = 1\\text{ L}$). Como a água ocupa $\\frac{4}{5}$ da altura, ocupa $\\frac{4}{5}$ do volume: $\\frac{4}{5} \\times 60 = 48\\text{ litros}$.',
    trapNote: 'Lembre: $1\\text{ litro} = 1.000\\text{ cm}^3$. Basta cortar três zeros do volume em $\\text{cm}^3$ para obter direto em litros!',
    optionFeedback: [
      'Corresponderia a $\\frac{3}{5}$ da altura ($18\\text{ cm}$), não $\\frac{4}{5}$.',
      'Corresponderia a $\\frac{2}{3}$ da altura ($20\\text{ cm}$).',
      'Correto! $\\frac{4}{5}$ de $60.000\\text{ cm}^3 = 48.000\\text{ cm}^3 = 48\\text{ litros}$.',
      '$60\\text{ L}$ é a capacidade máxima do aquário cheio até a borda ($100\\%$).',
      'Volume maior que a própria capacidade máxima do aquário.',
    ],
    stepByStep: [
      'Calcule a altura da água: $\\frac{4}{5}$ de $30\\text{ cm} = 24\\text{ cm}$.',
      'Calcule o volume em $\\text{cm}^3$: $50 \\times 40 \\times 24 = 48.000\\text{ cm}^3$.',
      'Divida por $1.000$ para converter em litros: $48\\text{ L}$.',
    ],
    memoryTakeaway: 'Volume em $\\text{cm}^3 \\div 1.000 =$ Litros! E volume de água em altura parcial cresce na mesma proporção da altura.',
  },
  {
    id: 'mat-q63',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    source: 'Edital 12.2 · Submúltiplos e Múltiplos do Metro',
    prompt:
      'Um percurso de caminhada escolar foi dividido em três trechos: $1{,}45\\text{ km}$, $850\\text{ m}$ e $20.000\\text{ cm}$. Qual é a extensão total desse percurso em quilômetros?',
    options: ['2,32 km.', '2,50 km.', '3,30 km.', '4,30 km.', '25,0 km.'],
    correctIndex: 1,
    explanation:
      'Convertendo tudo para metros: $1{,}45\\text{ km} = 1.450\\text{ m}$; $850\\text{ m} = 850\\text{ m}$; $20.000\\text{ cm} = 200\\text{ m}$. Somando: $1.450 + 850 + 200 = 2.500\\text{ m}$. Convertendo para quilômetros ($\\div 1.000$): $2{,}50\\text{ km}$.',
    trapNote: 'Cuidado na conversão de $20.000\\text{ cm}$: divide-se por $100$ para ir a metros ($200\\text{ m}$), e depois por $1.000$ para $\\text{km}$ ($0{,}2\\text{ km}$).',
    optionFeedback: [
      'Você transformou $20.000\\text{ cm}$ em $20\\text{ m}$ ($0{,}02\\text{ km}$) em lugar de $200\\text{ m}$ ($0{,}20\\text{ km}$).',
      'Correto! $1{,}45 + 0{,}85 + 0{,}20 = 2{,}50\\text{ km}$.',
      'Você converteu $20.000\\text{ cm}$ em $1\\text{ km}$ ou errou na soma de $850 + 1450$.',
      'Você converteu $20.000\\text{ cm}$ para $2\\text{ km}$ ($\\times 10$).',
      'Erro de fator $10$ na casa decimal final ($2500 \\div 100$ em vez de $1000$).',
    ],
    stepByStep: [
      'Coloque tudo em metros: $1{,}45\\text{ km} = 1.450\\text{ m}$ e $20.000\\text{ cm} = 200\\text{ m}$.',
      'Some as medidas em metros: $1.450 + 850 + 200 = 2.500\\text{ m}$.',
      'Converta para $\\text{km}$ ($\\div 1.000$): $2{,}50\\text{ km}$.',
    ],
    memoryTakeaway: 'Escala linear de comprimento ($\\text{km - hm - dam - m - dm - cm - mm}$): $1\\text{ km} = 1.000\\text{ m}$ e $1\\text{ m} = 100\\text{ cm}$.',
  },
  {
    id: 'mat-q64',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    source: 'Edital 12.2 · Escala e Área Real',
    stimulusId: 'geo-retangulo-escala',
    prompt:
      'Na planta baixa de um auditório desenhada na escala $1:200$, a sala aparece como um retângulo de $b = 4\\text{ cm}$ por $h = 3\\text{ cm}$. Qual é a ÁREA REAL dessa sala em metros quadrados?',
    options: ['0,24 m².', '2,40 m².', '24,0 m².', '48,0 m².', '4.800 m².'],
    correctIndex: 3,
    explanation:
      'Multiplicamos primeiro cada medida linear no desenho pelo fator da escala ($200$): comprimento real $= 4 \\times 200 = 800\\text{ cm} = 8\\text{ m}$; largura real $= 3 \\times 200 = 600\\text{ cm} = 6\\text{ m}$. Logo, a área real é $8 \\times 6 = 48{,}0\\text{ m}^2$.',
    trapNote: 'Armadilha gravíssima: NÃO multiplique a área do papel ($12\\text{ cm}^2$) por $200$! Para áreas, a razão cresce ao QUADRADO ($200^2 = 40.000$). É sempre mais seguro converter cada lado primeiro!',
    optionFeedback: [
      'Você multiplicou $12\\text{ cm}^2 \\times 200 = 2.400\\text{ cm}^2 = 0{,}24\\text{ m}^2$ — esqueceu que escala é linear e a área varia com $200^2$!',
      'Erro duplo na escala e na conversão de $\\text{cm}^2$ para $\\text{m}^2$.',
      '$24$ seria metade da área real ou confusão entre perímetro e área ($2 \\times 12$).',
      'Correto! Lados reais $8\\text{ m}$ e $6\\text{ m}$ produzem área real $8 \\times 6 = 48{,}0\\text{ m}^2$.',
      'Esqueceu de dividir $\\text{cm}^2$ por $10.000$ ou converteu errado de $\\text{cm}$ para $\\text{m}$.',
    ],
    stepByStep: [
      'Converta o comprimento para o tamanho real: $4\\text{ cm} \\times 200 = 800\\text{ cm} = 8\\text{ m}$.',
      'Converta a largura para o tamanho real: $3\\text{ cm} \\times 200 = 600\\text{ cm} = 6\\text{ m}$.',
      'Multiplique as dimensões reais já em metros: $8 \\times 6 = 48\\text{ m}^2$.',
    ],
    memoryTakeaway: 'Na planta em escala, SEMPRE passe cada comprimento para metros reais ANTES de multiplicar para achar a área!',
  },
  {
    id: 'mat-q65',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    source: 'Edital 12.2 · Relação Massa e Volume',
    prompt:
      'Sabe-se que $1\\text{ m}^3$ de certo óleo vegetal possui massa de $900\\text{ kg}$. Qual é a massa, em gramas, de uma amostra de $50\\text{ cm}^3$ desse mesmo óleo?',
    options: ['4,5 g.', '4.500 g.', '90 g.', '450 g.', '45 g.'],
    correctIndex: 4,
    explanation:
      'Convertemos: $1\\text{ m}^3 = 1.000\\text{ dm}^3 = 1.000\\text{ L}$, e $900\\text{ kg}$ divididos por $1.000\\text{ L}$ dão $0{,}9\\text{ kg}$ ($= 900\\text{ g}$) por $1\\text{ L}$ ($1.000\\text{ cm}^3$). Logo, $1\\text{ cm}^3$ tem $0{,}9\\text{ g}$, e $50\\text{ cm}^3$ pesam $50 \\times 0{,}9 = 45\\text{ g}$.',
    trapNote: 'Memorize a conversão chave de volume: $1\\text{ m}^3 = 1.000\\text{ dm}^3 = 1.000.000\\text{ cm}^3$ (cada passo volumétrico anda $3$ casas decimais!).',
    optionFeedback: [
      'Erro de uma casa decimal ao converter $\\text{m}^3$ ou $\\text{kg}$ para $\\text{g}$.',
      'Corresponderia a $5\\text{ litros}$ ($5.000\\text{ cm}^3$).',
      'Corresponderia a $100\\text{ cm}^3$, não $50\\text{ cm}^3$.',
      'Corresponderia a $500\\text{ cm}^3$ ($0{,}5\\text{ L}$).',
      'Correto! $900\\text{ g}$ por $1.000\\text{ cm}^3$ equivale a $0{,}9\\text{ g/cm}^3$; logo $50 \\times 0{,}9 = 45\\text{ g}$.',
    ],
    stepByStep: [
      'Divida $1\\text{ m}^3 = 1.000\\text{ L}$: logo $1\\text{ L}$ ($1.000\\text{ cm}^3$) desse óleo pesa $\\frac{900\\text{ kg}}{1.000} = 0{,}9\\text{ kg} = 900\\text{ g}$.',
      'Como $50\\text{ cm}^3 = \\frac{1}{20}$ de $1.000\\text{ cm}^3$, calcule $\\frac{900}{20} = 45\\text{ g}$.',
    ],
    memoryTakeaway: 'Degraus de VOLUME ($\\text{m}^3 \\to \\text{dm}^3 \\to \\text{cm}^3$) andam de $1.000$ em $1.000$ ($3$ casas por passo)!',
  },
  {
    id: 'mat-q66',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    source: 'Edital 12.2 · Hora Decimal para Horas e Minutos',
    prompt:
      'Uma impressora a laser operou continuamente por $2{,}35\\text{ horas}$ imprimindo cadernos de prova. No relógio convencional, esse tempo equivale exatamente a:',
    options: [
      '2 horas e 35 minutos.',
      '3 horas e 15 minutos.',
      '2 horas e 18 minutos.',
      '2 horas e 45 minutos.',
      '2 horas e 21 minutos.',
    ],
    correctIndex: 4,
    explanation:
      'A parte inteira corresponde a $2\\text{ horas}$. A parte decimal ($0{,}35\\text{ h}$) deve ser multiplicada por $60\\text{ minutos}$: $0{,}35 \\times 60 = 21\\text{ minutos}$. Total exato: $2\\text{ horas e } 21\\text{ minutos}$.',
    trapNote: 'Pegadinha universal da matemática: $2{,}35\\text{ h}$ NÃO são $2\\text{ h } 35\\text{ min}$! Base do tempo é $60$, não $100$.',
    optionFeedback: [
      'Erro clássico: leu $0{,}35$ de hora como $35$ minutos em vez de multiplicar $0{,}35 \\times 60$.',
      'Valor acima de $3\\text{ h}$, incompatível com $2{,}35\\text{ h}$.',
      '$18\\text{ min}$ equivaleria a $0{,}30\\text{ h}$.',
      '$45\\text{ min}$ equivaleria a $0{,}75\\text{ h}$ ($2{,}75\\text{ h}$).',
      'Correto! $0{,}35 \\times 60 = 21\\text{ min}$, resultando em $2\\text{ h } 21\\text{ min}$.',
    ],
    stepByStep: [
      'Separe as horas inteiras ($2\\text{ h}$) da fração decimal ($0{,}35\\text{ h}$).',
      'Multiplique a fração por $60$: $0{,}35 \\times 60 = 21\\text{ minutos}$.',
      'Junte: $2\\text{ horas e } 21\\text{ minutos}$.',
    ],
    memoryTakeaway: 'Para transformar parte decimal de hora em minutos, multiplique sempre por $60$ ($0{,}5\\text{ h} = 30\\text{ min}$; $0{,}25\\text{ h} = 15\\text{ min}$)!',
  },
  {
    id: 'mat-q67',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    source: 'Edital 12.2 · Volume e Vazão Líquida',
    prompt:
      'Uma cisterna de $3\\text{ m}$ de comprimento, $2\\text{ m}$ de largura e $1{,}2\\text{ m}$ de profundidade está inicialmente vazia. Uma bomba injeta água a $40\\text{ L/min}$, porém há um furo no fundo que vaza $10\\text{ L/min}$. Nessas condições, em quantas horas a cisterna ficará completamente cheia?',
    options: ['2 horas.', '3 horas.', '4 horas.', '5 horas.', '6 horas.'],
    correctIndex: 2,
    explanation:
      'Volume da cisterna: $V = 3 \\times 2 \\times 1{,}2 = 7{,}2\\text{ m}^3 = 7.200\\text{ litros}$. A vazão líquida efetiva é $40 - 10 = 30\\text{ L/min}$. Dividindo: $\\frac{7.200}{30} = 240\\text{ minutos}$. Convertendo para horas ($\\div 60$): $\\frac{240}{60} = 4\\text{ horas}$.',
    trapNote: 'Não esqueça duas conversões aqui: $\\text{m}^3 \\to \\text{L}$ ($\\times 1.000$) e minutos $\\to$ horas ($\\div 60$)!',
    optionFeedback: [
      'Corresponderia a encher metade do tanque ou usar $60\\text{ L/min}$ líquidos.',
      'Você provavelmente dividiu $7.200$ por $40$ ignorando o vazamento ($180\\text{ min} = 3\\text{ horas}$)!',
      'Correto! $7.200\\text{ L} \\div 30\\text{ L/min} = 240\\text{ min} = 4\\text{ horas}$.',
      'Erro aritmético ao dividir $240$ por $60$.',
      'Você subtraiu errado ou calculou com vazão de $20\\text{ L/min}$.',
    ],
    stepByStep: [
      'Calcule o volume total em litros: $3 \\times 2 \\times 1{,}2 = 7{,}2\\text{ m}^3 = 7.200\\text{ L}$.',
      'Subtraia a perda da entrada para obter a vazão real: $40 - 10 = 30\\text{ L/min}$.',
      'Divida volume por vazão: $7.200 \\div 30 = 240\\text{ minutos} = 4\\text{ horas}$.',
    ],
    memoryTakeaway: 'Entrada e vazamento simultâneos: ache primeiro a VAZÃO LÍQUIDA (entra $-$ sai) antes de dividir o volume.',
  },
  {
    id: 'mat-q68',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    source: 'Edital 12.2 · Conversão de Área ($\\text{km}^2 \\to \\text{m}^2$)',
    prompt:
      'Um parque ecológico urbano ocupa uma superfície de $0{,}035\\text{ km}^2$. Essa medida equivale exatamente a quantos metros quadrados?',
    options: ['35 m².', '350 m².', '3.500 m².', '35.000 m².', '350.000 m².'],
    correctIndex: 3,
    explanation:
      'Na escala de área ($\\text{km}^2 \\to \\text{hm}^2 \\to \\text{dam}^2 \\to \\text{m}^2$), são $3$ degraus multiplicados por $100$ cada ($100^3 = 1.000.000$). Portanto, $0{,}035 \\times 1.000.000 = 35.000\\text{ m}^2$.',
    trapNote: 'Não multiplique $0{,}035$ por $1.000$ ($= 35$)! Como é área ($\\text{km}^2 = \\text{km} \\times \\text{km}$), $1\\text{ km}^2 = 1.000 \\times 1.000 = 1.000.000\\text{ m}^2$.',
    optionFeedback: [
      'Armadilha clássica: multiplicou por $1.000$ (como se fosse $\\text{km} \\to \\text{m}$) ignorando que a unidade está ao quadrado!',
      'Multiplicou por $10.000$ (escala de hectare, não de $\\text{km}^2$).',
      'Faltou uma casa decimal na conversão.',
      'Correto! $0{,}035 \\times 1.000.000 = 35.000\\text{ m}^2$.',
      'Andou uma casa decimal a mais ($10^7$).',
    ],
    stepByStep: [
      'Lembre: $1\\text{ km} = 1.000\\text{ m}$, então $1\\text{ km}^2 = 1.000\\text{ m} \\times 1.000\\text{ m} = 1.000.000\\text{ m}^2$.',
      'Desloque a vírgula $6$ casas para a direita: $0{,}035 \\to 35.000\\text{ m}^2$.',
    ],
    memoryTakeaway: 'Degraus de ÁREA ($\\text{km}^2, \\text{m}^2, \\text{cm}^2$) andam de $100$ em $100$ ($2$ casas por degrau; de $\\text{km}^2$ para $\\text{m}^2$ são $6$ casas!).',
  },
  {
    id: 'mat-q69',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    source: 'Edital 12.2 · Massa Mista ($\\text{kg}$, $\\text{g}$ e $\\text{mg}$)',
    prompt:
      'Para preparar um experimento de química na oficina técnica, uma equipe misturou $0{,}45\\text{ kg}$ de areia, $280\\text{ g}$ de brita fina e $12.000\\text{ mg}$ de sal mineral. Qual é a massa total dessa mistura em GRAMAS?',
    options: ['337 g.', '450,28 g.', '1.200 g.', '850 g.', '742 g.'],
    correctIndex: 4,
    explanation:
      'Convertendo todas as massas para gramas: $0{,}45\\text{ kg} = 0{,}45 \\times 1.000 = 450\\text{ g}$; $280\\text{ g} = 280\\text{ g}$; e $12.000\\text{ mg} = 12.000 \\div 1.000 = 12\\text{ g}$. Soma total: $450 + 280 + 12 = 742\\text{ gramas}$.',
    trapNote: 'Miligrama ($\\text{mg}$) é milésima parte do grama: $1\\text{ g} = 1.000\\text{ mg}$.',
    optionFeedback: [
      'Converteu errado $\\text{kg} \\to \\text{g}$ ($45\\text{ g}$) em lugar de $450\\text{ g}$.',
      'Misturou gramas com decimais sem padronizar os expoentes.',
      'Ignorou as conversões somando valores incompatíveis.',
      'Você converteu $12.000\\text{ mg}$ para $120\\text{ g}$ (dividiu por $100$ em vez de $1.000$).',
      'Correto! $450 + 280 + 12 = 742\\text{ g}$.',
    ],
    stepByStep: [
      'Converta para gramas: $0{,}45\\text{ kg} = 450\\text{ g}$.',
      'Converta $12.000\\text{ mg} \\div 1.000 = 12\\text{ g}$.',
      'Some as três parcelas em gramas: $450 + 280 + 12 = 742\\text{ g}$.',
    ],
    memoryTakeaway: '$1\\text{ kg} = 1.000\\text{ g}$ e $1\\text{ g} = 1.000\\text{ mg}$ — na massa, vai sempre de $1.000$ em $1.000$ entre kg, g e mg.',
  },
  {
    id: 'mat-q70',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    source: 'Edital 12.2 · Decímetros Cúbicos e Mililitros',
    prompt:
      'Uma jarra cheia contém exatos $1{,}8\\text{ dm}^3$ de água mineral. Após servir $6$ copos idênticos de $220\\text{ mL}$ cada um, quantos mililitros ainda permanecem na jarra?',
    options: ['360 mL.', '420 mL.', '480 mL.', '520 mL.', '680 mL.'],
    correctIndex: 2,
    explanation:
      'Lembrando que $1\\text{ dm}^3 = 1\\text{ litro} = 1.000\\text{ mL}$, a jarra guarda $1{,}8 \\times 1.000 = 1.800\\text{ mL}$. Servindo $6$ copos de $220\\text{ mL}$: $6 \\times 220 = 1.320\\text{ mL}$. Sobra na jarra: $1.800 - 1.320 = 480\\text{ mL}$.',
    trapNote: 'Não trave ao ver $\\text{dm}^3$! Decímetro cúbico e litro são exatamente a mesma medida ($1\\text{ dm}^3 = 1\\text{ L}$).',
    optionFeedback: [
      'Erro aritmético ao calcular $1.800 - 1.320$.',
      'Subtraindo $1.380$ em vez de $1.320$.',
      'Correto! $1{,}8\\text{ dm}^3 = 1.800\\text{ mL}$, e $1.800 - 1.320 = 480\\text{ mL}$.',
      'Erro de conta ao subtrair as dezenas ($1800 - 1320 = 480$, não $520$).',
      'Você calculou com $5$ copos ou $2\\text{ litros}$ na jarra.',
    ],
    stepByStep: [
      'Converta $1{,}8\\text{ dm}^3 = 1{,}8\\text{ L} = 1.800\\text{ mL}$.',
      'Calcule o total servido nos $6$ copos: $6 \\times 220 = 1.320\\text{ mL}$.',
      'Subtraia do total inicial: $1.800 - 1.320 = 480\\text{ mL}$.',
    ],
    memoryTakeaway: '$1\\text{ dm}^3 = 1\\text{ L} = 1.000\\text{ mL}$. Guardou essa ponte, qualquer questão com $\\text{dm}^3$ vira fácil!',
  },
  {
    id: 'mat-q71',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    source: 'Edital 12.2 · Duração em Minutos para Horário Final',
    prompt:
      'Uma palestra sobre desenvolvimento de jogos começou pontualmente às $14\\text{ h } 48\\text{ min}$ e teve duração ininterrupta de $115\\text{ minutos}$. A que horas a palestra encerrou?',
    options: [
      '16 h 03 min.',
      '16 h 33 min.',
      '17 h 03 min.',
      '16 h 53 min.',
      '16 h 43 min.',
    ],
    correctIndex: 4,
    explanation:
      'Convertendo $115\\text{ minutos}$ para horas e minutos: $115 = 60 + 55 = 1\\text{ h } 55\\text{ min}$. Somando ao horário inicial: $14\\text{ h } 48\\text{ min} + 1\\text{ h } 55\\text{ min} = 15\\text{ h } 103\\text{ min}$. Como $103\\text{ min} = 1\\text{ h } 43\\text{ min}$, o término foi às $16\\text{ h } 43\\text{ min}$.',
    trapNote: 'Você também pode notar que $115\\text{ min} = 2\\text{ h} - 5\\text{ min}$: basta somar $2\\text{ h}$ ($16\\text{ h } 48\\text{ min}$) e voltar $5\\text{ minutos}$ ($16\\text{ h } 43\\text{ min}$)!',
    optionFeedback: [
      'Você considerou $115\\text{ min}$ como $1\\text{ h } 15\\text{ min}$ (base $100$ falsa!).',
      'Erro de $10\\text{ minutos}$ na conversão de $103 - 60 = 43$.',
      'Considerou $115\\text{ min}$ como mais de $2\\text{ horas}$.',
      'Somou $5\\text{ min}$ em vez de subtrair $5\\text{ min}$ ao comparar com $2\\text{ horas}$.',
      'Correto! $14\\text{h }48\\text{min} + 1\\text{h }55\\text{min} = 16\\text{h }43\\text{min}$.',
    ],
    stepByStep: [
      'Decomponha $115\\text{ min}$ em múltiplo de $60$: $115 = 60 + 55 = 1\\text{ h } 55\\text{ min}$.',
      'Some $14\\text{ h} + 1\\text{ h} = 15\\text{ h}$ e $48\\text{ min} + 55\\text{ min} = 103\\text{ min}$.',
      'Passe $60\\text{ min}$ para as horas: $15 + 1 = 16\\text{ h}$ e sobram $103 - 60 = 43\\text{ min}$.',
    ],
    memoryTakeaway: 'Atalho mental rápido para tempos perto de $2\\text{ h}$ ($120\\text{ min}$): $115\\text{ min} = 2\\text{ h} - 5\\text{ min}$.',
  },
  {
    id: 'mat-q72',
    discipline: 'MAT',
    topicId: 'mat-medidas',
    source: 'Edital 12.2 · Superfície em Decímetros Quadrados',
    prompt:
      'Uma lousa retangular usada nas aulas de lógica mede $2{,}4\\text{ m}$ de largura por $150\\text{ cm}$ de altura. Qual é a área dessa lousa expressa em decímetros quadrados ($\\text{dm}^2$)?',
    options: ['3,6 dm².', '36 dm².', '36.000 dm².', '3.600 dm².', '360 dm².'],
    correctIndex: 4,
    explanation:
      'Convertendo as duas dimensões diretamente para decímetros: $2{,}4\\text{ m} = 24\\text{ dm}$ e $150\\text{ cm} = 15\\text{ dm}$. Multiplicando: $24 \\times 15 = 360\\text{ dm}^2$ (ou calculando $3{,}6\\text{ m}^2 \\times 100 = 360\\text{ dm}^2$).',
    trapNote: 'Não multiplique metros quadrados por $10$ para achar $\\text{dm}^2$! Área multiplica por $100$ a cada degrau ($1\\text{ m}^2 = 100\\text{ dm}^2$).',
    optionFeedback: [
      '$3{,}6$ é a área em $\\text{m}^2$, faltando passar para $\\text{dm}^2$ ($\\times 100$).',
      'Multiplicou $3{,}6\\text{ m}^2$ apenas por $10$ (como se fosse comprimento linear!).',
      'Valor corresponde à área em centímetros quadrados ($36.000\\text{ cm}^2$), não em decímetros quadrados.',
      'Multiplicou por $1.000$ (como se fosse volume $\\text{m}^3 \\to \\text{dm}^3$).',
      'Correto! $24\\text{ dm} \\times 15\\text{ dm} = 360\\text{ dm}^2$.',
    ],
    stepByStep: [
      'Passe cada lado para decímetros: $2{,}4\\text{ m} = 24\\text{ dm}$ e $150\\text{ cm} = 15\\text{ dm}$.',
      'Multiplique: $24 \\times 15 = 360\\text{ dm}^2$.',
    ],
    memoryTakeaway: 'Converta os dois lados PARA A UNIDADE PEDIDA antes de multiplicar a área — elimina erros de $10, 100$ ou $1.000$!',
  },

  // ============================================================================
  // 3. RAZÃO, PROPORÇÃO E DIVISÃO PROPORCIONAL (20 questões: mat-q12..14 + mat-q73..89)
  // ============================================================================
  {
    id: 'mat-q12',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    source: 'Edital 12.2 · Razão e Proporção',
    prompt:
      'A razão entre as idades de dois irmãos é $\\frac{3}{5}$ e a soma das suas idades atuais é igual a $32$ anos. Qual é a idade do irmão mais velho?',
    options: ['12 anos.', '16 anos.', '18 anos.', '20 anos.', '24 anos.'],
    correctIndex: 3,
    explanation:
      'Representando as idades por $3k$ e $5k$: $3k + 5k = 32 \\Rightarrow 8k = 32 \\Rightarrow k = 4$. Logo, o irmão mais velho tem $5 \\cdot 4 = 20$ anos (e o mais novo tem $12$ anos).',
    trapNote: 'Leia o comando: pede a idade do mais VELHO ($5k$), não a do mais novo ($3k = 12$).',
    optionFeedback: [
      '$12$ anos é a idade do irmão mais NOVO ($3 \\cdot 4$), e o enunciado pediu o mais velho.',
      '$16$ anos seria metade de $32$ (idades iguais, razão $1:1$, o que contradiz $\\frac{3}{5}$).',
      'Não satisfaz $3k + 5k = 32$ mantendo razão $\\frac{3}{5}$ ($18:14 \\neq 3:5$).',
      'Correto! $k = 4$, então $5k = 20$ anos e $3k = 12$ anos ($12 + 20 = 32$ e $12/20 = 3/5$).',
      '$24$ anos exigiria um irmão mais novo de $8$ anos, e $\\frac{8}{24} = \\frac{1}{3} \\neq \\frac{3}{5}$.',
    ],
    stepByStep: [
      'Associe à razão $\\frac{3}{5}$ a constante $k$: idade menor $= 3k$ e idade maior $= 5k$.',
      'Some as partes: $3k + 5k = 32 \\Rightarrow 8k = 32 \\Rightarrow k = 4$.',
      'Calcule a idade pedida (mais velho): $5 \\cdot 4 = 20$ anos.',
    ],
    memoryTakeaway: 'Em qualquer razão $\\frac{a}{b}$, escreva $a \\cdot k$ e $b \\cdot k$ — transforma a proporção em uma equação de 1 linha!',
  },
  {
    id: 'mat-q13',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    source: 'Edital 12.2 · Divisão Diretamente Proporcional',
    prompt:
      'Uma premiação de R$ 1.800,00 de uma maratona de tecnologia será dividida entre três monitores em partes diretamente proporcionais às horas dedicadas: $4\\text{ h}$, $5\\text{ h}$ e $6\\text{ h}$. Quanto receberá o monitor que trabalhou $6$ horas?',
    options: ['R$ 480,00.', 'R$ 600,00.', 'R$ 720,00.', 'R$ 840,00.', 'R$ 900,00.'],
    correctIndex: 2,
    explanation:
      'Total de partes: $4 + 5 + 6 = 15$. Valor de cada parte: $k = \\frac{1.800}{15} =$ R$ 120,00. Quem trabalhou $6\\text{ h}$ recebe $6 \\times 120 =$ R$ 720,00.',
    trapNote: 'Confira sempre se a soma das parcelas fecha o prêmio total: $480 + 600 + 720 = 1.800$.',
    optionFeedback: [
      'R$ 480,00 é a parte de quem trabalhou $4$ horas ($4 \\times 120$), não $6$ horas.',
      'R$ 600,00 é a parte de quem trabalhou $5$ horas ($5 \\times 120$) — ou divisão igual por $3$.',
      'Correto! Cada hora vale $\\frac{1.800}{15} =$ R$ 120,00; $6 \\times 120 =$ R$ 720,00.',
      'Multiplicou por valor de parte errado ($k = 140$ somaria $2.100 > 1.800$).',
      'Metade do prêmio ($50\\%$), mas $\\frac{6}{15} = 40\\%$, não $50\\%$.',
    ],
    stepByStep: [
      'Some os índices da divisão direta: $4 + 5 + 6 = 15$ partes.',
      'Ache o valor de uma parte: $k = \\frac{1.800}{15} = 120$.',
      'Multiplique pelo índice pedido ($6$): $6 \\times 120 =$ R$ 720,00.',
    ],
    memoryTakeaway: 'Divisão DIRETA = divida o total pela SOMA dos pesos para achar $k$, depois multiplique pelo peso de interesse.',
  },
  {
    id: 'mat-q14',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    source: 'Edital 12.2 · Divisão Inversamente Proporcional',
    prompt:
      'Um incentivo de R$ 2.200,00 será rateado entre três alunos em partes INVERSAMENTE proporcionais ao número de faltas registradas no semestre: $2$, $4$ e $6$ faltas. Quanto receberá o aluno que teve apenas $2$ faltas?',
    options: ['R$ 400,00.', 'R$ 600,00.', 'R$ 800,00.', 'R$ 1.100,00.', 'R$ 1.200,00.'],
    correctIndex: 4,
    explanation:
      'As partes são proporcionais aos inversos $\\frac{1}{2}$, $\\frac{1}{4}$ e $\\frac{1}{6}$. Usando $\\text{MMC}(2, 4, 6) = 12$, obtemos $\\frac{6}{12}$, $\\frac{3}{12}$ e $\\frac{2}{12}$ (proporcional a $6, 3$ e $2$). Soma: $6 + 3 + 2 = 11$ partes. Cada parte vale $\\frac{2.200}{11} =$ R$ 200,00. Quem teve $2$ faltas recebe $6 \\times 200 =$ R$ 1.200,00.',
    trapNote: 'NUNCA divida diretamente por $2, 4, 6$: na divisão inversa, quem tem MENOS faltas recebe a MAIOR parcela!',
    optionFeedback: [
      'R$ 400,00 é a menor parcela ($2 \\times 200$), destinada a quem teve $6$ faltas.',
      'R$ 600,00 é a parcela intermediária ($3 \\times 200$), de quem teve $4$ faltas.',
      'Erro de cálculo ao repartir $2.200$; o rateio inverso usa partes $6 : 3 : 2$.',
      'Dividiu ao meio ($50\\%$), mas a fração certa é $\\frac{6}{11}$ do prêmio.',
      'Correto! Inversos $\\frac{1}{2}, \\frac{1}{4}, \\frac{1}{6} \\equiv 6, 3, 2$; logo $6 \\times \\frac{2.200}{11} =$ R$ 1.200,00.',
    ],
    stepByStep: [
      'Inverta os números: $\\frac{1}{2},\\; \\frac{1}{4},\\; \\frac{1}{6}$.',
      'Reduza ao mesmo denominador ($\\text{MMC} = 12$): $\\frac{6}{12},\\; \\frac{3}{12},\\; \\frac{2}{12}$ $\\Rightarrow$ use $6, 3$ e $2$.',
      'Total $= 6 + 3 + 2 = 11$ partes $\\Rightarrow$ $k = \\frac{2.200}{11} = 200$. Para $2$ faltas: $6 \\times 200 =$ R$ 1.200,00.',
    ],
    memoryTakeaway: 'Divisão INVERSA = inverta para frações $\\frac{1}{a}$, iguale o denominador pelo MMC e faça divisão direta com os numeradores!',
  },
  {
    id: 'mat-q73',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    source: 'Edital 12.2 · Escala Cartográfica',
    prompt:
      'Na maquete de um novo prédio no Porto Digital construída na escala $1 : 250$, o corredor principal mede $4\\text{ cm}$. Qual é o comprimento real desse corredor, em metros?',
    options: ['10 m.', '12 m.', '15 m.', '20 m.', '25 m.'],
    correctIndex: 0,
    explanation:
      'Na escala $1 : 250$, cada $1\\text{ cm}$ na maquete equivale a $250\\text{ cm}$ reais. Logo, $4 \\times 250 = 1.000\\text{ cm}$. Dividindo por $100$ para converter em metros: $\\frac{1.000}{100} = 10\\text{ m}$.',
    trapNote: 'Escala $1 : 250$ está em mesma unidade ($\\text{cm}$ para $\\text{cm}$); lembre sempre de dividir centímetros por $100$ para obter metros!',
    optionFeedback: [
      'Correto! $4\\text{ cm} \\times 250 = 1.000\\text{ cm} = 10\\text{ m}$.',
      'Multiplicou como se a escala fosse $1:300$ ou errou $4 \\times 250$.',
      'Resultado para $6\\text{ cm}$ na maquete ($6 \\times 250 = 1.500\\text{ cm} = 15\\text{ m}$).',
      'Dobrou o resultado ($8\\text{ cm}$ na maquete).',
      'Considerou $1\\text{ cm}$ como $250$, multiplicando por $10$ em vez de $4$.',
    ],
    stepByStep: [
      'Use $\\text{Escala} = \\frac{\\text{Medida no desenho}}{\\text{Medida real}} \\Rightarrow \\frac{1}{250} = \\frac{4}{R}$.',
      'Multiplique em cruz: $R = 4 \\times 250 = 1.000\\text{ cm}$.',
      'Converta para metros: $1.000\\text{ cm} \\div 100 = 10\\text{ m}$.',
    ],
    memoryTakeaway: 'Escala $= \\frac{\\text{Desenho}}{\\text{Real}}$ na MESMA unidade! Converta $\\text{cm} \\to \\text{m}$ dividindo por $100$ no final.',
  },
  {
    id: 'mat-q74',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    source: 'Edital 12.2 · Razão Entre Quantidades',
    prompt:
      'Em uma turma do $9^\\circ$ ano, a razão entre o número de meninas e o número de meninos é de $\\frac{4}{5}$. Sabendo que há exatamente $20$ meninos nessa turma, quantos estudantes há AO TODO na sala?',
    options: ['32 estudantes.', '36 estudantes.', '40 estudantes.', '44 estudantes.', '45 estudantes.'],
    correctIndex: 1,
    explanation:
      'Sejam $M$ as meninas e $H = 20$ os meninos: $\\frac{M}{20} = \\frac{4}{5} \\Rightarrow 5M = 80 \\Rightarrow M = 16$ meninas. Somando meninas e meninos: $16 + 20 = 36$ estudantes.',
    trapNote: 'Cuidado: $16$ é só a quantidade de meninas; o comando pede o TOTAL de estudantes ($16 + 20 = 36$).',
    optionFeedback: [
      'Considerou o dobro de meninas ($16 \\times 2 = 32$), esquecendo que há $20$ meninos.',
      'Correto! $\\frac{M}{20} = \\frac{4}{5} \\Rightarrow M = 16$; total $= 16 + 20 = 36$ estudantes.',
      'Calculou o dobro de meninos ($20 + 20$), ignorando a razão $\\frac{4}{5}$.',
      'Somou $24 + 20$ invertendo a razão ($\\frac{5}{4}$ de $20$ daria $25$, não $24$).',
      'Usou $\\frac{5}{4} \\times 20 = 25$ para meninas ($25 + 20 = 45$), invertendo a razão dada.',
    ],
    stepByStep: [
      'Monte a proporção: $\\frac{\\text{meninas}}{\\text{meninos}} = \\frac{4}{5} \\Rightarrow \\frac{M}{20} = \\frac{4}{5}$.',
      'Resolva: $M = \\frac{4 \\times 20}{5} = 16$ meninas.',
      'Some toda a turma: $16 + 20 = 36$ estudantes.',
    ],
    memoryTakeaway: 'Leia até a última linha: achou uma das partes ($16$)? Verifique se a pergunta pede a parte ou o TOTAL ($16 + 20$).',
  },
  {
    id: 'mat-q75',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    source: 'Edital 12.2 · Divisão de Lucros Proporcionais',
    prompt:
      'Dois colegas investiram juntos em uma pequena loja virtual de periféricos: Caio investiu R$ 12.000,00 e Beatriz investiu R$ 18.000,00. Ao final do semestre, apuraram um lucro líquido de R$ 10.000,00, que foi dividido de forma diretamente proporcional ao capital investido. Quanto recebeu Caio?',
    options: ['R$ 2.500,00.', 'R$ 3.000,00.', 'R$ 4.000,00.', 'R$ 5.000,00.', 'R$ 6.000,00.'],
    correctIndex: 2,
    explanation:
      'Simplificando a razão dos investimentos: $12.000 : 18.000 = 2 : 3$. Soma das partes $= 2 + 3 = 5$. Cada parte vale $\\frac{10.000}{5} =$ R$ 2.000,00. Caio (2 partes) recebe $2 \\times 2.000 =$ R$ 4.000,00.',
    trapNote: 'Simplifique os zeros do investimento antes ($12.000 : 18.000 = 2 : 3$) para não fazer contas enormes!',
    optionFeedback: [
      'Calculou $25\\%$ do lucro, mas Caio investiu $\\frac{12}{30} = 40\\%$ do capital.',
      'Confundiu o total investido ($30.000$) com fração $\\frac{3}{10}$.',
      'Correto! Razão $2:3$, total $5$ partes ($k = 2.000$); Caio recebe $2 \\times 2.000 =$ R$ 4.000,00.',
      'Dividiu o lucro ao meio ($50\\%$), ignorando que Beatriz investiu mais.',
      'R$ 6.000,00 é a parte de Beatriz ($3 \\times 2.000$), que investiu R$ 18.000,00.',
    ],
    stepByStep: [
      'Simplifique $12.000$ e $18.000$ dividindo por $6.000$: razão $2 : 3$.',
      'Total de partes: $2 + 3 = 5 \\Rightarrow k = \\frac{10.000}{5} =$ R$ 2.000,00.',
      'Parte de Caio: $2 \\times 2.000 =$ R$ 4.000,00.',
    ],
    memoryTakeaway: 'Corte os zeros em comum nas proporções ($12.000 : 18.000 \\to 2 : 3$) antes de somar as partes!',
  },
  {
    id: 'mat-q76',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    source: 'Edital 12.2 · Divisão Inversa',
    prompt:
      'A quantia de R$ 930,00 deve ser repartida em partes inversamente proporcionais aos números $2$, $3$ e $5$. Qual é o valor da MENOR dessas três partes?',
    options: ['R$ 155,00.', 'R$ 180,00.', 'R$ 300,00.', 'R$ 450,00.', 'R$ 465,00.'],
    correctIndex: 1,
    explanation:
      'Inversos: $\\frac{1}{2}$, $\\frac{1}{3}$ e $\\frac{1}{5}$. Com $\\text{MMC}(2, 3, 5) = 30$, temos $\\frac{15}{30}$, $\\frac{10}{30}$ e $\\frac{6}{30}$, proporcionais a $15, 10$ e $6$. Soma: $15 + 10 + 6 = 31$ partes. Cada parte vale $\\frac{930}{31} = 30$. A menor parcela corresponde ao índice $6$: $6 \\times 30 =$ R$ 180,00.',
    trapNote: 'Na divisão inversa, a MENOR parcela pertence ao MAIOR número inicial ($5$).',
    optionFeedback: [
      'Resultado aproximado dividindo $930$ por $6$ sem calcular a soma dos numeradores equivalentes ($31$).',
      'Correto! Inversos viram $15 : 10 : 6$; $k = \\frac{930}{31} = 30$; menor parcela $= 6 \\times 30 =$ R$ 180,00.',
      'Valor da parcela intermediária (R$ 300,00, isto é, $10 \\times 30$).',
      'Valor da MAIOR parcela (R$ 450,00, isto é, $15 \\times 30$), e o enunciado pediu a menor.',
      'Fez divisão DIRETA para o índice $5$ ($\\frac{5}{10} \\times 930$), errando a lógica inversa.',
    ],
    stepByStep: [
      'Inverta: $\\frac{1}{2},\\; \\frac{1}{3},\\; \\frac{1}{5}$.',
      'Tire o $\\text{MMC}(2, 3, 5) = 30$: $\\frac{15}{30},\\; \\frac{10}{30},\\; \\frac{6}{30}$ $\\Rightarrow$ partes $15, 10$ e $6$.',
      'Some: $15 + 10 + 6 = 31 \\Rightarrow k = \\frac{930}{31} = 30$. Menor parte $= 6 \\times 30 =$ R$ 180,00.',
    ],
    memoryTakeaway: 'Quanto MAIOR o número na divisão inversa, MENOR a fatia que ele recebe ($6 < 10 < 15$).',
  },
  {
    id: 'mat-q77',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    source: 'Edital 12.2 · Razão e Geometria',
    prompt:
      'Os lados de um retângulo estão na razão $5 : 7$. Sabendo que o perímetro desse retângulo mede $96\\text{ cm}$, qual é a sua área, em centímetros quadrados?',
    options: ['280 cm².', '420 cm².', '520 cm².', '560 cm².', '640 cm².'],
    correctIndex: 3,
    explanation:
      'Sejam os lados $5k$ e $7k$. O perímetro é a soma dos 4 lados: $2(5k + 7k) = 96 \\Rightarrow 24k = 96 \\Rightarrow k = 4$. Logo, os lados medem $5 \\cdot 4 = 20\\text{ cm}$ e $7 \\cdot 4 = 28\\text{ cm}$. Área $= 20 \\times 28 = 560\\text{ cm}^2$.',
    trapNote: 'Não iguale $5k + 7k = 96$! Um retângulo tem DOIS comprimentos e DUAS larguras ($2a + 2b = 96$).',
    optionFeedback: [
      'Metade da área correta (errou o cálculo de $20 \\times 28$ ou usou $10 \\times 28$).',
      'Calculou usando $k = 3$ ou somou errado o perímetro.',
      'Erro aritmético ao multiplicar $20 \\times 28$.',
      'Correto! Semi-perímetro $5k + 7k = 48 \\Rightarrow k = 4$; lados $20\\text{ cm}$ e $28\\text{ cm}$; área $= 560\\text{ cm}^2$.',
      'Esqueceu de dividir o perímetro por $2$ ($5k + 7k = 96 \\Rightarrow k = 8$ quadruplicaria a área).',
    ],
    stepByStep: [
      'Escreva os lados como $5k$ e $7k$. Perímetro $= 2(5k + 7k) = 24k$.',
      'Resolva: $24k = 96 \\Rightarrow k = 4$.',
      'Lados: $20\\text{ cm}$ e $28\\text{ cm}$. Área $= 20 \\times 28 = 560\\text{ cm}^2$.',
    ],
    memoryTakeaway: 'Perímetro de retângulo é o DOBRO de $(a + b)$! Sempre ache o semi-perímetro ($96 \\div 2 = 48$) primeiro.',
  },
  {
    id: 'mat-q78',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    source: 'Edital 12.2 · Propriedade Fundamental das Proporções',
    prompt:
      'Qual é o valor de $x$ que satisfaz a proporção $\\dfrac{3x - 2}{4} = \\dfrac{x + 6}{3}$ ?',
    options: ['x = 2.', 'x = 3.', 'x = 4.', 'x = 5.', 'x = 6.'],
    correctIndex: 4,
    explanation:
      'Pela propriedade fundamental (produto dos meios igual ao produto dos extremos): $3(3x - 2) = 4(x + 6) \\Rightarrow 9x - 6 = 4x + 24 \\Rightarrow 5x = 30 \\Rightarrow x = 6$. Conferindo: $\\frac{18 - 2}{4} = 4$ e $\\frac{6 + 6}{3} = 4$.',
    trapNote: 'Aplique a propriedade distributiva nos DOIS termos de cada numerador ($3 \\cdot (-2) = -6$ e $4 \\cdot 6 = 24$)!',
    optionFeedback: [
      'Substituindo $x = 2$: $\\frac{4}{4} = 1 \\neq \\frac{8}{3}$.',
      'Substituindo $x = 3$: $\\frac{7}{4} \\neq 3$.',
      'Substituindo $x = 4$: $\\frac{10}{4} = 2{,}5 \\neq \\frac{10}{3}$.',
      'Substituindo $x = 5$: $\\frac{13}{4} \\neq \\frac{11}{3}$.',
      'Correto! $9x - 6 = 4x + 24 \\Rightarrow 5x = 30 \\Rightarrow x = 6$ (ambas as frações resultam em $4$).',
    ],
    stepByStep: [
      'Multiplique em cruz com parênteses: $3(3x - 2) = 4(x + 6)$.',
      'Expanda: $9x - 6 = 4x + 24$.',
      'Isole $x$: $9x - 4x = 24 + 6 \\Rightarrow 5x = 30 \\Rightarrow x = 6$.',
    ],
    memoryTakeaway: 'Na multiplicação em cruz com somas no numerador, USE PARÊNTESES sempre: $3(3x - 2) = 4(x + 6)$.',
  },
  {
    id: 'mat-q79',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    source: 'Edital 12.2 · Razão e Misturas',
    prompt:
      'Em uma receita de café com leite, a razão entre a quantidade de café e a de leite é de $2 : 3$. Para preparar uma garrafa de $1{,}5\\text{ litro}$ ($1.500\\text{ mL}$) mantendo exatamente essa proporção, quantos mililitros de CAFÉ são necessários?',
    options: ['300 mL.', '500 mL.', '600 mL.', '750 mL.', '900 mL.'],
    correctIndex: 2,
    explanation:
      'Chamando café $= 2k$ e leite $= 3k$, o total é $2k + 3k = 5k = 1.500\\text{ mL} \\Rightarrow k = 300\\text{ mL}$. Logo, a quantidade de café é $2 \\times 300 = 600\\text{ mL}$ (e $900\\text{ mL}$ de leite).',
    trapNote: 'Não divida $1.500$ por $3$ nem calcule $\\frac{2}{3}$ de $1.500$! A fração do total para o café é $\\frac{2}{2 + 3} = \\frac{2}{5}$.',
    optionFeedback: [
      '$300\\text{ mL}$ é o valor de uma parte ($k$), mas o café corresponde a $2$ partes ($2k$).',
      'Erro comum: dividiu $1.500$ por $3$ achando $\\frac{1}{3}$, em vez de dividir por $2 + 3 = 5$.',
      'Correto! $\\frac{2}{5}$ de $1.500\\text{ mL} = 600\\text{ mL}$ de café (e $900\\text{ mL}$ de leite).',
      'Seria mistura meio a meio ($1:1$), não $2:3$.',
      '$900\\text{ mL}$ é a quantidade de LEITE ($3 \\times 300$), e o enunciado pediu o café.',
    ],
    stepByStep: [
      'Transforme $1{,}5\\text{ L}$ em mililitros: $1.500\\text{ mL}$.',
      'Some as partes da razão $2:3 \\to 2 + 3 = 5$ partes. Cada parte $= \\frac{1.500}{5} = 300\\text{ mL}$.',
      'Calcule o café ($2$ partes): $2 \\times 300 = 600\\text{ mL}$.',
    ],
    memoryTakeaway: 'Razão $A : B = 2 : 3$ significa $\\frac{2}{5}$ do total para $A$ e $\\frac{3}{5}$ para $B$, nunca $\\frac{2}{3}$ do total!',
  },
  {
    id: 'mat-q80',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    source: 'Edital 12.2 · Escala e Área Real',
    prompt:
      'Na planta baixa de um laboratório desenhada na escala $1 : 200$, uma sala retangular mede $4\\text{ cm}$ de largura por $5\\text{ cm}$ de comprimento. Qual é a área REAL dessa sala em metros quadrados?',
    options: ['20 m².', '40 m².', '4.000 m².', '160 m².', '80 m².'],
    correctIndex: 4,
    explanation:
      'Converta primeiro CADA lado para a medida real: $4\\text{ cm} \\times 200 = 800\\text{ cm} = 8\\text{ m}$, e $5\\text{ cm} \\times 200 = 1.000\\text{ cm} = 10\\text{ m}$. Agora multiplique: $8\\text{ m} \\times 10\\text{ m} = 80\\text{ m}^2$.',
    trapNote: 'Nunca multiplique a área do papel ($20\\text{ cm}^2$) pela escala linear ($200$)! Em áreas, o fator escala fica ao QUADRADO ($200^2 = 40.000$).',
    optionFeedback: [
      '$20$ é a área numérica apenas na planta ($4 \\times 5 = 20\\text{ cm}^2$), sem aplicar a escala.',
      'Esqueceu um fator $2$ na conversão ou aplicou escala $1:100$ parcialmente.',
      'Multiplicou $20\\text{ cm}^2 \\times 200 = 4.000$ confundindo escala linear com escala de área!',
      'Dobrou o resultado sem justificativa geométrica.',
      'Correto! Lados reais: $8\\text{ m}$ e $10\\text{ m}$, logo área real $= 8 \\times 10 = 80\\text{ m}^2$.',
    ],
    stepByStep: [
      'Converta cada dimensão separadamente: $4\\text{ cm} \\times 200 = 800\\text{ cm} = 8\\text{ m}$; $5\\text{ cm} \\times 200 = 1.000\\text{ cm} = 10\\text{ m}$.',
      'Calcule a área real em $\\text{m}^2$: $8 \\times 10 = 80\\text{ m}^2$.',
    ],
    memoryTakeaway: 'Na escala de plantas baixas, converta CADA LADO para metros antes de multiplicar a área — zero erro garantido!',
  },
  {
    id: 'mat-q81',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    source: 'Edital 12.2 · Números Diretamente Proporcionais',
    prompt:
      'Três números reais $a, b$ e $c$ são diretamente proporcionais a $3, 4$ e $5$, nessa ordem. Sabendo que $2a + b - c = 25$, qual é o valor da soma $a + b + c$ ?',
    options: ['25.', '36.', '48.', '55.', '60.'],
    correctIndex: 4,
    explanation:
      'Escreva $a = 3k$, $b = 4k$ e $c = 5k$. Substituindo na equação: $2(3k) + 4k - 5k = 25 \\Rightarrow 6k + 4k - 5k = 25 \\Rightarrow 5k = 25 \\Rightarrow k = 5$. Então $a + b + c = (3 + 4 + 5)k = 12 \\times 5 = 60$.',
    trapNote: 'Use a constante $k$ para reduzir 3 incógnitas ($a, b, c$) a apenas 1 incógnita ($k$).',
    optionFeedback: [
      '$25$ é o valor dado de $2a + b - c$, não a soma $a + b + c$.',
      'Usou $k = 3$, o que daria $2a + b - c = 15 \\neq 25$.',
      'Usou $k = 4$, o que daria $2a + b - c = 20 \\neq 25$.',
      'Erro na soma $3 + 4 + 5 = 12$ (usou $11 \\times 5 = 55$).',
      'Correto! $5k = 25 \\Rightarrow k = 5$; soma $a + b + c = 12 \\times 5 = 60$.',
    ],
    stepByStep: [
      'Substitua $a = 3k,\\; b = 4k,\\; c = 5k$ em $2a + b - c = 25$.',
      'Resolva: $6k + 4k - 5k = 25 \\Rightarrow 5k = 25 \\Rightarrow k = 5$.',
      'Some: $a + b + c = 12k = 12 \\times 5 = 60$.',
    ],
    memoryTakeaway: 'Se $a, b, c$ são proporcionais a $3, 4, 5$, escreva direto $a = 3k,\\; b = 4k,\\; c = 5k$ e substitua em qualquer condição!',
  },
  {
    id: 'mat-q82',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    source: 'Edital 12.2 · Divisão Proporcional com 4 Parcelas',
    prompt:
      'Quatro amigas dividiram uma conta de R$ 132,00 em partes diretamente proporcionais aos itens pedidos por cada uma, na razão $1 : 2 : 3 : 5$. Quanto pagou a amiga que consumiu MENOS?',
    options: ['R$ 12,00.', 'R$ 24,00.', 'R$ 33,00.', 'R$ 36,00.', 'R$ 60,00.'],
    correctIndex: 0,
    explanation:
      'Soma das partes: $1 + 2 + 3 + 5 = 11$. Valor de uma parte: $k = \\frac{132}{11} =$ R$ 12,00. Quem consumiu menos teve índice $1$, pagando $1 \\times 12 =$ R$ 12,00.',
    trapNote: 'Não divida $132$ por $4$ (número de amigas)! Como o consumo foi desigual ($1:2:3:5$), divida pela SOMA dos pesos ($11$).',
    optionFeedback: [
      'Correto! $1 + 2 + 3 + 5 = 11$ partes; $\\frac{132}{11} =$ R$ 12,00 para a de índice $1$.',
      'R$ 24,00 é quanto pagou a segunda amiga ($2 \\times 12$).',
      'R$ 33,00 seria divisão igualitária por $4$ amigas ($132 \\div 4$), ignorando o consumo.',
      'R$ 36,00 é quanto pagou a terceira amiga ($3 \\times 12$).',
      'R$ 60,00 é quanto pagou a que consumiu MAIS ($5 \\times 12$).',
    ],
    stepByStep: [
      'Some todos os pesos: $1 + 2 + 3 + 5 = 11$.',
      'Divida o valor total: $k = \\frac{132}{11} =$ R$ 12,00.',
      'Menor pagamento ($1 \\cdot k$): R$ 12,00.',
    ],
    memoryTakeaway: 'Em qualquer conta dividida por proporção $1:2:3:5$, divida pela soma dos números ($11$), nunca pela quantidade de pessoas ($4$).',
  },
  {
    id: 'mat-q83',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    source: 'Edital 12.2 · Diferença e Razão',
    prompt:
      'A diferença entre dois números positivos é $28$, e a razão entre o maior e o menor é $\\frac{7}{3}$. Qual é a SOMA desses dois números?',
    options: ['21.', '49.', '63.', '70.', '98.'],
    correctIndex: 3,
    explanation:
      'Sejam os números $7k$ e $3k$. Como a diferença é $28$: $7k - 3k = 28 \\Rightarrow 4k = 28 \\Rightarrow k = 7$. Os números são $49$ e $21$. Sua soma é $49 + 21 = 70$ (ou $(7 + 3) \\cdot 7 = 70$).',
    trapNote: 'Preste atenção: $21$ e $49$ são os dois números isolados; o comando pede a SOMA ($70$).',
    optionFeedback: [
      '$21$ é apenas o número menor ($3 \\times 7$).',
      '$49$ é apenas o número maior ($7 \\times 7$).',
      'Erro aritmético na multiplicação ou confusão com múltiplos de $9$.',
      'Correto! $4k = 28 \\Rightarrow k = 7$; os números são $49$ e $21$, cuja soma é $70$.',
      'Multiplicou $7 \\times 14$ ou dobrou o maior número.',
    ],
    stepByStep: [
      'Escreva os números como $7k$ e $3k$.',
      'Aplique a diferença: $7k - 3k = 28 \\Rightarrow 4k = 28 \\Rightarrow k = 7$.',
      'Calcule a soma: $7k + 3k = 10k = 10 \\times 7 = 70$.',
    ],
    memoryTakeaway: 'Atalho: se tem razão $\\frac{7}{3}$ e diferença $28$, faça $7 - 3 = 4$ partes $= 28 \\Rightarrow k = 7$, então soma $= 10k = 70$.',
  },
  {
    id: 'mat-q84',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    source: 'Edital 12.2 · Proporção em Misturas',
    prompt:
      'Uma solução desinfetante foi preparada misturando álcool e água na razão de $3 : 2$ (para cada $3$ partes de álcool, usam-se $2$ partes de água). Em um galão de $65\\text{ litros}$ dessa solução, quantos litros são de ÁGUA?',
    options: ['13 L.', '26 L.', '32,5 L.', '39 L.', '43,3 L.'],
    correctIndex: 1,
    explanation:
      'Total de partes: $3 + 2 = 5$. Cada parte vale $\\frac{65}{5} = 13\\text{ L}$. Como a água corresponde a $2$ partes, há $2 \\times 13 = 26\\text{ litros}$ de água (e $39\\text{ L}$ de álcool).',
    trapNote: 'Confira na pergunta se pede ÁLCOOL ($3k = 39$) ou ÁGUA ($2k = 26$)!',
    optionFeedback: [
      '$13\\text{ L}$ representa apenas $1$ parte ($k$), e a água ocupa $2$ partes.',
      'Correto! $3k + 2k = 65 \\Rightarrow k = 13$; água $= 2 \\times 13 = 26\\text{ L}$.',
      'Seria mistura $50\\%$ álcool e $50\\%$ água ($1:1$), não $3:2$.',
      '$39\\text{ L}$ é o volume de ÁLCOOL ($3 \\times 13$), e a questão pediu o de água.',
      'Calculou $\\frac{2}{3}$ de $65$, errando o denominador ($3 + 2 = 5$, não $3$).',
    ],
    stepByStep: [
      'Some as partes da mistura: $3\\text{ (álcool)} + 2\\text{ (água)} = 5$ partes.',
      'Divida o volume total: $k = \\frac{65}{5} = 13\\text{ L}$ por parte.',
      'Volume de água ($2$ partes): $2 \\times 13 = 26\\text{ L}$.',
    ],
    memoryTakeaway: 'Em razão $3:2$, o denominador da fração do total é sempre a SOMA ($3 + 2 = 5$), nunca $3$!',
  },
  {
    id: 'mat-q85',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    source: 'Edital 12.2 · Divisão Inversa Entre Dois Índices',
    prompt:
      'Um prêmio de R$ 700,00 será dividido entre dois técnicos de informática em partes INVERSAMENTE proporcionais ao número de minutos que cada um atrasou em um chamado: $4\\text{ minutos}$ e $10\\text{ minutos}$. Quanto receberá o técnico que atrasou $10\\text{ minutos}$?',
    options: ['R$ 200,00.', 'R$ 250,00.', 'R$ 350,00.', 'R$ 450,00.', 'R$ 500,00.'],
    correctIndex: 0,
    explanation:
      'Os inversos são $\\frac{1}{4}$ e $\\frac{1}{10}$. Pelo $\\text{MMC}(4, 10) = 20$, equivalem a $\\frac{5}{20}$ e $\\frac{2}{20}$, isto é, proporcionais a $5$ e $2$. Total $= 5 + 2 = 7$ partes. Cada parte $= \\frac{700}{7} = 100$. Quem atrasou $10\\text{ min}$ recebe a menor parcela ($2$ partes): $2 \\times 100 =$ R$ 200,00.',
    trapNote: 'Quem atrasou MAIS ($10\\text{ min}$) deve ganhar MENOS (R$ 200,00), e quem atrasou menos ($4\\text{ min}$) ganha mais (R$ 500,00).',
    optionFeedback: [
      'Correto! Inversos $\\frac{1}{4}, \\frac{1}{10} \\equiv 5, 2$; logo quem atrasou $10\\text{ min}$ leva $\\frac{2}{7}$ de $700 =$ R$ 200,00.',
      'Erro ao dividir $700$ ou erro na soma das partes inversas.',
      'Divisão ao meio ($1:1$), ignorando a diferença de atrasos.',
      'Erro aritmético ao calcular as proporções.',
      'R$ 500,00 é a parcela de quem atrasou $4\\text{ minutos}$ ($5 \\times 100$), não $10\\text{ minutos}$.',
    ],
    stepByStep: [
      'Escreva os inversos: $\\frac{1}{4}$ e $\\frac{1}{10}$.',
      'Com $\\text{MMC}(4, 10) = 20$: $\\frac{5}{20}$ e $\\frac{2}{20}$ $\\Rightarrow$ partes $5$ e $2$.',
      'Soma $= 7 \\Rightarrow k = \\frac{700}{7} = 100$. Parcela de $10\\text{ min}$ (peso $2$): $2 \\times 100 =$ R$ 200,00.',
    ],
    memoryTakeaway: 'Para apenas DOIS números inversamente proporcionais ($a$ e $b$), o atalho é inverter a ordem: $a$ fica com peso $b$, e $b$ fica com peso $a$!',
  },
  {
    id: 'mat-q86',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    source: 'Edital 12.2 · Escala de Mapa Urbano',
    prompt:
      'Em um mapa turístico do Recife desenhado na escala $1 : 50.000$, a distância em linha reta entre dois pontos é de $6\\text{ km}$ na realidade. Quantos centímetros separam esses dois pontos no mapa?',
    options: ['1,2 cm.', '6 cm.', '12 cm.', '30 cm.', '120 cm.'],
    correctIndex: 2,
    explanation:
      'Converta $6\\text{ km}$ para centímetros: $6\\text{ km} = 6.000\\text{ m} = 600.000\\text{ cm}$. Usando $\\text{Escala} = \\frac{d}{D}$: $\\frac{1}{50.000} = \\frac{d}{600.000} \\Rightarrow d = \\frac{600.000}{50.000} = 12\\text{ cm}$.',
    trapNote: 'Não esqueça nenhum zero na conversão $\\text{km} \\to \\text{cm}$: $1\\text{ km} = 1.000\\text{ m} = 100.000\\text{ cm}$ (5 zeros!).',
    optionFeedback: [
      'Errou uma potência de $10$ na conversão (cortou 1 zero a menos do denominador ou a mais no numerador).',
      'Repetiu o número $6$ sem dividir pelos $50.000$ na unidade certa.',
      'Correto! $6\\text{ km} = 600.000\\text{ cm}$; $\\frac{600.000}{50.000} = 12\\text{ cm}$.',
      'Multiplicou $6 \\times 5$ em vez de dividir $60$ por $5$.',
      'Errou um zero na conversão $\\text{km} \\to \\text{cm}$ ($6.000.000 / 50.000$).',
    ],
    stepByStep: [
      'Passe $6\\text{ km}$ para $\\text{cm}$: $6 \\times 100.000 = 600.000\\text{ cm}$.',
      'Divida pelo fator de redução da escala ($50.000$): $\\frac{600.000}{50.000} = \\frac{60}{5} = 12\\text{ cm}$.',
    ],
    memoryTakeaway: 'Memorize: $1\\text{ km} = 100.000\\text{ cm}$ ($10^5\\text{ cm}$). Cortar $5$ zeros em uma escala $1 : 100.000$ dá direto em centímetros!',
  },
  {
    id: 'mat-q87',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    source: 'Edital 12.2 · Proporção Contínua',
    prompt:
      'Na proporção contínua $\\dfrac{x}{18} = \\dfrac{8}{x}$, sendo $x$ um número real positivo, qual é o valor de $x$?',
    options: ['9.', '12.', '13.', '16.', '24.'],
    correctIndex: 1,
    explanation:
      'Multiplicando em cruz: $x \\cdot x = 18 \\cdot 8 \\Rightarrow x^2 = 144$. Como $x > 0$, obtemos $x = \\sqrt{144} = 12$.',
    trapNote: 'O termo central $x$ é a média GEOMÉTRICA ($\\sqrt{18 \\cdot 8} = 12$), NÃO a média aritmética ($\\frac{18+8}{2} = 13$)!',
    optionFeedback: [
      '$9^2 = 81 \\neq 144$.',
      'Correto! $x^2 = 18 \\times 8 = 144 \\Rightarrow x = 12$ ($\\frac{12}{18} = \\frac{8}{12} = \\frac{2}{3}$).',
      'Armadilha! $13$ é a média aritmética $\\frac{18 + 8}{2}$, não a média geométrica da proporção.',
      '$16^2 = 256 \\neq 144$.',
      '$24$ é o dobro da resposta correta.',
    ],
    stepByStep: [
      'Multiplique meios e extremos: $x \\cdot x = 18 \\cdot 8$.',
      'Resolva: $x^2 = 144 \\Rightarrow x = \\sqrt{144} = 12$.',
    ],
    memoryTakeaway: 'Quando $x$ aparece em posições opostas ($\\frac{x}{a} = \\frac{b}{x}$), multiplicando em cruz surge $x^2 = a \\cdot b$, ou seja, a média geométrica!',
  },
  {
    id: 'mat-q88',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    source: 'Edital 12.2 · Razão na Forma Irredutível',
    prompt:
      'Em um simulado preparatório com $20$ questões, um estudante acertou $15$ e errou $5$. Qual é a razão entre o número de ERROS e o TOTAL de questões do simulado, na forma irredutível?',
    options: ['$\\frac{1}{4}$', '$\\frac{1}{3}$', '$\\frac{2}{5}$', '$\\frac{3}{4}$', '$\\frac{4}{5}$'],
    correctIndex: 0,
    explanation:
      'Razão pedida: $\\frac{\\text{Erros}}{\\text{Total}} = \\frac{5}{20}$. Simplificando numerador e denominador por $5$, temos $\\frac{1}{4}$.',
    trapNote: 'Leia exatamente os termos comparados: Erros ($5$) sobre TOTAL ($20$), e NÃO erros sobre acertos ($\\frac{5}{15} = \\frac{1}{3}$)!',
    optionFeedback: [
      'Correto! $\\frac{5\\text{ erros}}{20\\text{ questões}} = \\frac{1}{4}$.',
      'Pegadinha: $\\frac{5}{15} = \\frac{1}{3}$ compara erros com ACERTOS, mas a pergunta pediu erros sobre o TOTAL.',
      'Equivaleria a $8$ erros em $20$ questões.',
      '$\\frac{15}{20} = \\frac{3}{4}$ é a razão de ACERTOS sobre o total, não a de erros.',
      'Seria $16$ em $20$, sem relação com os dados.',
    ],
    stepByStep: [
      'Identifique numerador (erros $= 5$) e denominador (total $= 20$).',
      'Simplifique $\\frac{5}{20}$ dividindo por $5$: $\\frac{1}{4}$.',
    ],
    memoryTakeaway: 'A ordem dos termos na razão respeita rigorosamente a ordem escrita na pergunta: “entre A e B” é sempre $\\frac{A}{B}$.',
  },
  {
    id: 'mat-q89',
    discipline: 'MAT',
    topicId: 'mat-proporcao',
    source: 'Edital 12.2 · Grandezas Inversamente Proporcionais (Engrenagens)',
    prompt:
      'Duas engrenagens acopladas em um robô educacional têm, respectivamente, $40$ dentes (engrenagem A) e $24$ dentes (engrenagem B). Enquanto a engrenagem A realiza $90$ rotações por minuto, quantas rotações por minuto realiza a engrenagem B?',
    options: ['54 rpm.', '100 rpm.', '120 rpm.', '150 rpm.', '180 rpm.'],
    correctIndex: 3,
    explanation:
      'Quanto MENOR a engrenagem (menos dentes), MAIS voltas ela precisa dar para acompanhar os mesmos dentes encaixados: são grandezas inversamente proporcionais! Logo, $40 \\times 90 = 24 \\times n_B \\Rightarrow 3.600 = 24n_B \\Rightarrow n_B = \\frac{3.600}{24} = 150\\text{ rpm}$.',
    trapNote: 'Em engrenagens acopladas, o PRODUTO $\\text{(dentes)} \\times \\text{(rotações)}$ é constante — quem tem menos dentes gira mais rápido!',
    optionFeedback: [
      'Calculou como grandeza DIRETA ($\\frac{24}{40} \\times 90 = 54$), como se a engrenagem menor girasse mais devagar!',
      'Erro aritmético na divisão $3.600 \\div 24$.',
      'Dividiu incorretamente; $24 \\times 120 = 2.880 \\neq 3.600$.',
      'Correto! Produto constante de dentes encaixados: $40 \\times 90 = 24 \\times 150 = 3.600$.',
      'Dobrou as rotações de A ($90 \\times 2 = 180$), o que exigiria engrenagem B com metade dos dentes ($20$).',
    ],
    stepByStep: [
      'Identifique a relação inversa: mais dentes $\\Rightarrow$ menos voltas ($\\text{dentes}_A \\cdot n_A = \\text{dentes}_B \\cdot n_B$).',
      'Substitua: $40 \\times 90 = 24 \\times n_B$.',
      'Divida: $n_B = \\frac{3.600}{24} = 150\\text{ rpm}$.',
    ],
    memoryTakeaway: 'Engrenagens acopladas ou polias ligadas por correia têm produto constante: $\\text{Dentes}_1 \\cdot \\text{Voltas}_1 = \\text{Dentes}_2 \\cdot \\text{Voltas}_2$.',
  },

  // ============================================================================
  // 4. REGRA DE TRÊS SIMPLES E COMPOSTA (20 questões: mat-q15..17 + mat-q90..106)
  // ============================================================================
  {
    id: 'mat-q15',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    source: 'Edital 12.2 · Regra de Três Simples Inversa',
    prompt:
      'Uma equipe de $12$ técnicos instala e configura todos os computadores de uma ETE em $10$ dias. Se $4$ técnicos forem deslocados para outra escola antes de iniciar o serviço, em quantos dias os técnicos restantes concluirão o mesmo trabalho no mesmo ritmo?',
    options: ['6 dias.', '12 dias.', '14 dias.', '15 dias.', '16 dias.'],
    correctIndex: 3,
    explanation:
      'Se $4$ técnicos saíram dos $12$, restam $12 - 4 = 8$ técnicos. Menos técnicos levam MAIS dias (grandeza inversa): $12 \\times 10 = 8 \\times d \\Rightarrow 120 = 8d \\Rightarrow d = 15$ dias.',
    trapNote: 'Pegadinha dupla: 1) “$4$ foram deslocados” significa que ficaram $8$ (não $4$); 2) grandeza é inversa, multiplica em linha reta!',
    optionFeedback: [
      'Usou regra de três DIRETA com $8$ ($\\frac{8 \\times 10}{12} \\approx 6{,}7$, aproximando para $6$), impossível menos gente terminar antes!',
      'Errou a divisão $\\frac{120}{8}$.',
      'Erro aritmético; $8 \\times 14 = 112 \\neq 120$.',
      'Correto! $8$ técnicos mantêm o total de $12 \\times 10 = 120$ técnicos·dia: $\\frac{120}{8} = 15$ dias.',
      'Calculou $12 + 4$ somando dias diretamente.',
    ],
    stepByStep: [
      'Ache quantos técnicos ficam: $12 - 4 = 8$ técnicos.',
      'Relação inversa (menos técnicos $\\Rightarrow$ mais dias): $12 \\times 10 = 8 \\times d$.',
      'Resolva: $d = \\frac{120}{8} = 15$ dias.',
    ],
    memoryTakeaway: 'Antes de armar a conta, leia se o número saiu (“4 deslocados $\\to$ restam 8”) e teste o bom senso: menos pessoas = MAIS dias!',
  },
  {
    id: 'mat-q16',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    source: 'Edital 12.2 · Regra de Três Composta',
    prompt:
      'Em um laboratório maker, $6$ impressoras 3D, operando $4$ horas por dia, produzem $240$ peças em $5$ dias. Mantendo o mesmo ritmo, em quantos dias $8$ impressoras, operando $6$ horas por dia, produzirão $576$ peças?',
    options: ['4 dias.', '5 dias.', '6 dias.', '8 dias.', '9 dias.'],
    correctIndex: 2,
    explanation:
      'Compare cada grandeza com Dias ($D$): mais impressoras $\\Rightarrow$ menos dias (inversa: $\\frac{8}{6}$); mais horas/dia $\\Rightarrow$ menos dias (inversa: $\\frac{6}{4}$); mais peças $\\Rightarrow$ mais dias (direta: $\\frac{240}{576}$). Logo: $\\frac{5}{D} = \\frac{8}{6} \\cdot \\frac{6}{4} \\cdot \\frac{240}{576} = 2 \\cdot \\frac{5}{12} = \\frac{5}{6} \\Rightarrow D = 6$ dias.',
    trapNote: 'Isole a coluna da incógnita à esquerda; para cada outra coluna, pergunte “aumentando isto, aumentam os dias?” (se diminuir, inverta a fração!).',
    optionFeedback: [
      'Esqueceu que a produção subiu de $240$ para $576$ ou inverteu a razão das peças.',
      'Errou na simplificação entre as frações diretas e inversas.',
      'Correto! Cada impressora faz $\\frac{240}{6 \\cdot 4 \\cdot 5} = 2$ peças/hora; $8$ imp. $\\times 6\\text{ h/dia} \\times 2 = 96$ peças/dia; $\\frac{576}{96} = 6$ dias.',
      'Inverteu a razão das horas/dia tratando como direta.',
      'Multiplicou fatores sem inverter as grandezas inversamente proporcionais à duração.',
    ],
    stepByStep: [
      'Compare com Dias: Impressoras (inversa $\\frac{8}{6}$), Horas/dia (inversa $\\frac{6}{4}$), Peças (direta $\\frac{240}{576}$).',
      'Monte: $\\frac{5}{D} = \\frac{8}{6} \\cdot \\frac{6}{4} \\cdot \\frac{240}{576} = \\frac{8}{4} \\cdot \\frac{5}{12} = 2 \\cdot \\frac{5}{12} = \\frac{5}{6}$.',
      'Logo, $D = 6$ dias.',
    ],
    memoryTakeaway: 'Atalho infalível (Método do Produto): $\\frac{\\text{Recursos}_1 \\cdot \\text{Tempo}_1}{\\text{Produção}_1} = \\frac{\\text{Recursos}_2 \\cdot \\text{Tempo}_2}{\\text{Produção}_2}$!',
  },
  {
    id: 'mat-q17',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    source: 'Edital 12.2 · Regra de Três Composta',
    prompt:
      'Quatro digitadores, trabalhando $6$ horas por dia durante $10$ dias, preparam $1.200$ páginas de apostilas. Mantendo o ritmo, quantas páginas serão preparadas por $6$ digitadores, trabalhando $8$ horas por dia durante $9$ dias?',
    options: ['1.620 páginas.', '1.800 páginas.', '1.920 páginas.', '2.160 páginas.', '2.400 páginas.'],
    correctIndex: 3,
    explanation:
      'Produção $= \\text{taxa} \\times (\\text{digitadores} \\times \\text{h/dia} \\times \\text{dias})$. Taxa unitária: $\\frac{1.200}{4 \\times 6 \\times 10} = \\frac{1.200}{240} = 5$ páginas por digitador·hora. No 2º cenário: $5 \\times (6 \\times 8 \\times 9) = 5 \\times 432 = 2.160$ páginas.',
    trapNote: 'Aqui a incógnita é a PRODUÇÃO (páginas), portanto todas as três grandezas (trabalhadores, horas/dia e dias) são DIRETAMENTE proporcionais a ela!',
    optionFeedback: [
      'Esqueceu de atualizar uma das variáveis (ex.: manteve $6\\text{ h/dia}$ em vez de $8\\text{ h/dia}$).',
      'Calculou com $4$ digitadores ou usou $10$ dias em vez de multiplicar corretamente $6 \\times 8 \\times 9$.',
      'Erro aritmético ao calcular $5 \\times 432$.',
      'Correto! Taxa $= 5$ pág/hora·pessoa; novo esforço $= 6 \\times 8 \\times 9 = 432$ horas·pessoa; $432 \\times 5 = 2.160$ páginas.',
      'Dobrou a produção inicial sem respeitar as proporções reais ($\\frac{432}{240} = 1{,}8$).',
    ],
    stepByStep: [
      'Calcule o total de horas·pessoa iniciais: $4 \\times 6 \\times 10 = 240$.',
      'Taxa: $\\frac{1.200}{240} = 5$ páginas por hora·pessoa.',
      'Novo esforço: $6 \\times 8 \\times 9 = 432 \\Rightarrow \\text{Páginas} = 432 \\times 5 = 2.160$.',
    ],
    memoryTakeaway: 'Quando a incógnita for o PRODUTO FINAL (páginas, peças, metros de muro), calcule a taxa unitária por hora·trabalhador e multiplique pelo novo total de horas!',
  },
  {
    id: 'mat-q90',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    source: 'Edital 12.2 · Regra de Três Simples Direta',
    prompt:
      'Um carro tem consumo médio constante de $14\\text{ km}$ por litro de gasolina na estrada. Para percorrer uma viagem de $350\\text{ km}$ nessas condições, quantos litros de gasolina serão consumidos?',
    options: ['25 L.', '28 L.', '30 L.', '35 L.', '40 L.'],
    correctIndex: 0,
    explanation:
      'Distância e litros são diretamente proporcionais: $14\\text{ km} \\to 1\\text{ L}$, logo $350\\text{ km} \\to x\\text{ L}$. Temos $14x = 350 \\Rightarrow x = \\frac{350}{14} = 25$ litros.',
    trapNote: 'Simplifique $\\frac{350}{14}$ dividindo ambos por $7$ antes: $\\frac{50}{2} = 25$ litros — sem chance de errar conta!',
    optionFeedback: [
      'Correto! $\\frac{350}{14} = \\frac{50}{2} = 25$ litros.',
      'Erro ao dividir $350$ por $14$ ($14 \\times 28 = 392 \\neq 350$).',
      'Considerou rendimento de $11{,}6\\text{ km/L}$ em vez de $14\\text{ km/L}$.',
      'Dividiu $350$ por $10$ em vez de $14$.',
      'Erro grave na divisão.',
    ],
    stepByStep: [
      'Arme a proporção direta: $\\frac{14}{350} = \\frac{1}{x}$.',
      'Divida: $x = \\frac{350}{14} = \\frac{50}{2} = 25\\text{ L}$.',
    ],
    memoryTakeaway: 'Antes de dividir números grandes na prova, simplifique por $2$ ou por $7$: $\\frac{350}{14} \\div 7 = \\frac{50}{2} = 25$ em 2 segundos!',
  },
  {
    id: 'mat-q91',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    source: 'Edital 12.2 · Velocidade e Tempo (Inversa)',
    prompt:
      'Um ônibus interurbano faz a viagem entre duas cidades em $3$ horas a uma velocidade média de $80\\text{ km/h}$. Se na viagem de volta o motorista reduzir a velocidade média para $60\\text{ km/h}$, em quanto tempo concluirá o mesmo trajeto?',
    options: ['2 h 15 min.', '6 h.', '4 h 30 min.', '5 h.', '4 h.'],
    correctIndex: 4,
    explanation:
      'Com velocidade MENOR, o tempo gasto é MAIOR (grandezas inversamente proporcionais): $80 \\times 3 = 60 \\times t \\Rightarrow 240 = 60t \\Rightarrow t = 4$ horas.',
    trapNote: 'Distância $= \\text{velocidade} \\times \\text{tempo}$. Como a distância é a mesma ($80 \\times 3 = 240\\text{ km}$), basta dividir $240$ pela nova velocidade ($60$)!',
    optionFeedback: [
      'Erro grave: aplicou regra de três DIRETA ($\\frac{60 \\times 3}{80} = 2{,}25\\text{ h} = 2\\text{h }15\\text{min}$), como se andando mais devagar chegasse antes!',
      'Dobrou o tempo sem relação com a razão $\\frac{80}{60}$.',
      'Somou $1\\text{h }30\\text{min}$ sem calcular a proporção exata.',
      'Erro aritmético na divisão $\\frac{240}{60}$.',
      'Correto! Distância $= 80 \\times 3 = 240\\text{ km}$; a $60\\text{ km/h}$, $t = \\frac{240}{60} = 4$ horas.',
    ],
    stepByStep: [
      'Calcule a distância fixa: $D = 80 \\times 3 = 240\\text{ km}$.',
      'Divida pela nova velocidade: $t = \\frac{240}{60} = 4\\text{ h}$.',
    ],
    memoryTakeaway: 'Velocidade $\\times$ Tempo $= \\text{Distância}$: se a velocidade cai, o tempo SOBE na mesma proporção!',
  },
  {
    id: 'mat-q92',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    source: 'Edital 12.2 · Torneiras e Vazão (Inversa)',
    prompt:
      'Cinco torneiras idênticas abertas ao máximo enchem completamente uma piscina escolar em $12$ horas. Quantas dessas mesmas torneiras, no TOTAL, precisariam ficar abertas ao mesmo tempo para encher essa piscina em apenas $4$ horas?',
    options: ['8 torneiras.', '10 torneiras.', '12 torneiras.', '14 torneiras.', '15 torneiras.'],
    correctIndex: 4,
    explanation:
      'Para diminuir o tempo à terça parte ($12\\text{ h} \\to 4\\text{ h}$), é necessário TRIPLICAR o número de torneiras (inversamente proporcionais): $5 \\times 12 = n \\times 4 \\Rightarrow n = \\frac{60}{4} = 15$ torneiras no total.',
    trapNote: 'Leia se a pergunta pede “no TOTAL” ($15$) ou “quantas A MAIS” ($15 - 5 = 10$ — alternativa B é distrator para quem não lê o comando!).',
    optionFeedback: [
      'Não satisfaz $5 \\times 12 = 60$ ($8 \\times 4 = 32 \\neq 60$).',
      '$10$ seria o número de torneiras A MAIS ($15 - 5$), mas a pergunta pediu quantas são necessárias NO TOTAL.',
      'Confundiu com o número de horas ($12$).',
      'Erro de conta ao dividir $60$ por $4$.',
      'Correto! Inversamente proporcional: $5 \\times 12 = n \\times 4 \\Rightarrow n = 15$ torneiras no total.',
    ],
    stepByStep: [
      'Identifique relação inversa (menos tempo $\\Rightarrow$ mais torneiras): $5 \\times 12 = n \\times 4$.',
      'Resolva: $60 = 4n \\Rightarrow n = 15$ torneiras.',
    ],
    memoryTakeaway: 'Grife sempre no enunciado se ele pede “no total” ($n$) ou “a mais” ($n - n_{\\text{inicial}}$)!',
  },
  {
    id: 'mat-q93',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    source: 'Edital 12.2 · Regra de Três Composta em Obra',
    prompt:
      'Quatro pedreiros constroem um muro de $18\\text{ m}$ de comprimento em $6$ dias. Mantendo a mesma produtividade, em quantos dias $6$ pedreiros construirão um muro igual de $36\\text{ m}$ de comprimento?',
    options: ['4 dias.', '6 dias.', '8 dias.', '9 dias.', '12 dias.'],
    correctIndex: 2,
    explanation:
      'Taxa de 1 pedreiro: $\\frac{18}{4 \\times 6} = \\frac{18}{24} = 0{,}75\\text{ m/dia}$. Com $6$ pedreiros, fazem $6 \\times 0{,}75 = 4{,}5\\text{ m/dia}$. Para construir $36\\text{ m}$: $\\frac{36}{4{,}5} = 8$ dias. Pelas frações: $\\frac{6}{D} = \\frac{6}{4} \\cdot \\frac{18}{36} = \\frac{3}{4} \\Rightarrow D = 8$ dias.',
    trapNote: 'Compare cada coluna com DIAS: pedreiros é INVERSA ($\\text{inverte } 6/4$), enquanto metros de muro é DIRETA ($\\text{mantém } 18/36$)!',
    optionFeedback: [
      'Apenas aplicou o dobro do muro e reduziu indevidamente a proporção.',
      'Considerou o mesmo tempo mesmo dobrando o comprimento do muro ($36\\text{ m}$) com apenas $50\\%$ mais pedreiros.',
      'Correto! $\\frac{6}{D} = \\frac{6}{4} \\cdot \\frac{18}{36} = \\frac{3}{4} \\Rightarrow D = 8$ dias.',
      'Inverteu ou errou a multiplicação das frações.',
      'Tratou apenas a duplicação do muro ($6 \\times 2 = 12$) ignorando os $2$ pedreiros extras.',
    ],
    stepByStep: [
      'Escreva $\\frac{6}{D}$ à esquerda.',
      'Compare: mais pedreiros $\\Rightarrow$ menos dias (inverte para $\\frac{6}{4}$); mais metros $\\Rightarrow$ mais dias (mantém $\\frac{18}{36}$).',
      '$\\frac{6}{D} = \\frac{6}{4} \\cdot \\frac{1}{2} = \\frac{3}{4} \\Rightarrow 3D = 24 \\Rightarrow D = 8$ dias.',
    ],
    memoryTakeaway: 'Se $4$ pedreiros fazem $18\\text{ m}$ em $6\\text{ d}$, para fazer o DOBRO ($36\\text{ m}$) com $4$ pedreiros seriam $12\\text{ d}$; aumentando a equipe em $\\frac{6}{4} = 1{,}5\\times$, o tempo cai para $\\frac{12}{1{,}5} = 8\\text{ d}$!',
  },
  {
    id: 'mat-q94',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    source: 'Edital 12.2 · Regra de Três Direta (Vazão)',
    prompt:
      'Uma bomba d’água elétrica com vazão constante transfere $450\\text{ litros}$ em $15\\text{ minutos}$. Quantos minutos ela levará para transferir $1.080\\text{ litros}$?',
    options: ['30 min.', '36 min.', '40 min.', '45 min.', '54 min.'],
    correctIndex: 1,
    explanation:
      'Como mais litros exigem mais tempo, as grandezas são diretamente proporcionais. A vazão é $\\frac{450}{15} = 30\\text{ L/min}$. Logo, para $1.080\\text{ L}$, o tempo será $\\frac{1.080}{30} = 36\\text{ minutos}$.',
    trapNote: 'Achar primeiro a taxa por 1 minuto ($450 \\div 15 = 30\\text{ L/min}$) evita multiplicações gigantes ($1.080 \\times 15$).',
    optionFeedback: [
      '$30$ é a vazão em litros por minuto ($30\\text{ L/min}$), não o tempo pedido em minutos!',
      'Correto! Vazão $= 30\\text{ L/min}$; $\\frac{1.080}{30} = 36$ minutos.',
      'Corresponderia a $1.200\\text{ L}$ ($40 \\times 30$), não $1.080\\text{ L}$.',
      'Corresponderia a $1.350\\text{ L}$ ($3\\times 450$).',
      'Erro aritmético ao simplificar $\\frac{1.080 \\times 15}{450}$.',
    ],
    stepByStep: [
      'Calcule a vazão unitária: $\\frac{450\\text{ L}}{15\\text{ min}} = 30\\text{ L/min}$.',
      'Divida o volume desejado pela vazão: $\\frac{1.080}{30} = 36\\text{ min}$.',
    ],
    memoryTakeaway: 'Em qualquer regra de três direta de produção ou vazão, reduza primeiro à unidade ($1\\text{ min}$, $1\\text{ h}$, $1\\text{ peça}$) — simplifica tudo!',
  },
  {
    id: 'mat-q95',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    source: 'Edital 12.2 · Estoque de Alimentos (Inversa)',
    prompt:
      'Um abrigo animal possui ração estocada suficiente para alimentar $40$ cães durante $18$ dias. Antes de iniciar a distribuição, o abrigo resgata mais $20$ cães. Mantendo a mesma porção diária por animal, por quantos dias durará esse estoque de ração?',
    options: ['12 dias.', '14 dias.', '15 dias.', '24 dias.', '27 dias.'],
    correctIndex: 0,
    explanation:
      'O total passa para $40 + 20 = 60$ cães. Com MAIS animais comendo do mesmo estoque, a comida dura MENOS dias (inversamente proporcionais): $40 \\times 18 = 60 \\times d \\Rightarrow 720 = 60d \\Rightarrow d = 12$ dias.',
    trapNote: 'Não faça $\\frac{40}{20}$! “Resgatou mais $20$” significa $40 + 20 = 60$ cães no total!',
    optionFeedback: [
      'Correto! $40 \\times 18 = 720$ porções diárias; para $60$ cães, $\\frac{720}{60} = 12$ dias.',
      'Erro na divisão $720 \\div 60$.',
      'Erro de cálculo.',
      'Calculou como grandeza direta ou errou o total de cães.',
      'Usou regra de três DIRETA ($\\frac{60 \\times 18}{40} = 27$ dias), o que é absurdo pois mais cães fariam a comida durar mais!',
    ],
    stepByStep: [
      'Some o novo total de cães: $40 + 20 = 60$ cães.',
      'Produto constante (inversa): $40 \\times 18 = 60 \\times d$.',
      'Resolva: $d = \\frac{720}{60} = 12$ dias.',
    ],
    memoryTakeaway: 'Problemas de estoque de ração/água/munição com alteração no número de indivíduos são SEMPRE inversamente proporcionais!',
  },
  {
    id: 'mat-q96',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    source: 'Edital 12.2 · Regra de Três Composta Completa',
    prompt:
      'Para asfaltar $1{,}2\\text{ km}$ de uma via, $10$ operários trabalhando $8\\text{ horas/dia}$ gastaram $12$ dias. Mantendo a mesma produtividade, em quantos dias $12$ operários trabalhando $6\\text{ horas/dia}$ asfaltarão $1{,}8\\text{ km}$ da mesma via?',
    options: ['12 dias.', '15 dias.', '18 dias.', '20 dias.', '24 dias.'],
    correctIndex: 3,
    explanation:
      'Compare com Dias: mais operários $\\Rightarrow$ menos dias (inversa: $\\frac{12}{10}$); menos horas/dia $\\Rightarrow$ mais dias (inversa: $\\frac{6}{8}$); mais quilômetros $\\Rightarrow$ mais dias (direta: $\\frac{1{,}2}{1{,}8}$). Logo: $\\frac{12}{D} = \\frac{12}{10} \\cdot \\frac{6}{8} \\cdot \\frac{1{,}2}{1{,}8} = \\frac{6}{5} \\cdot \\frac{3}{4} \\cdot \\frac{2}{3} = \\frac{3}{5} \\Rightarrow 3D = 60 \\Rightarrow D = 20$ dias.',
    trapNote: 'Não inverta a coluna da extensão asfaltada ($1{,}2\\text{ km} \\to 1{,}8\\text{ km}$): mais obra exige mais dias (direta)!',
    optionFeedback: [
      'Assumiu que o aumento de operários compensou exatamente o aumento da via e redução da jornada, sem fazer a conta.',
      'Errou uma das razões ($1{,}2 / 1{,}8 = 2/3$ ou $6/8 = 3/4$).',
      'Erro aritmético na simplificação final.',
      'Correto! $\\frac{12}{D} = \\frac{12}{10} \\cdot \\frac{6}{8} \\cdot \\frac{2}{3} = \\frac{3}{5} \\Rightarrow D = 20$ dias.',
      'Inverteu a razão das horas ou usou fator incorreto.',
    ],
    stepByStep: [
      'Isole $\\frac{12}{D}$ à esquerda.',
      'Operários (inversa): $\\frac{12}{10} = \\frac{6}{5}$. Horas/dia (inversa): $\\frac{6}{8} = \\frac{3}{4}$. Extensão (direta): $\\frac{1{,}2}{1{,}8} = \\frac{2}{3}$.',
      'Multiplique: $\\frac{12}{D} = \\frac{6}{5} \\cdot \\frac{3}{4} \\cdot \\frac{2}{3} = \\frac{36}{60} = \\frac{3}{5} \\Rightarrow D = \\frac{60}{3} = 20$ dias.',
    ],
    memoryTakeaway: 'Corte os fatores iguais em cima e embaixo ao multiplicar as frações na Regra de 3 Composta ($\\frac{6}{5} \\cdot \\frac{3}{4} \\cdot \\frac{2}{3}$ corta o $3$ direto)!',
  },
  {
    id: 'mat-q97',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    source: 'Edital 12.2 · Regra de Três Composta (Produção)',
    prompt:
      'Três máquinas embaladoras idênticas embalam juntas $1.500$ caixas em $2$ horas. Quantas caixas serão embaladas por $5$ dessas máquinas operando juntas durante $3$ horas?',
    options: ['2.250 caixas.', '2.500 caixas.', '3.000 caixas.', '3.500 caixas.', '3.750 caixas.'],
    correctIndex: 4,
    explanation:
      'Calculando a capacidade unitária por máquina·hora: $\\frac{1.500}{3 \\times 2} = \\frac{1.500}{6} = 250$ caixas por máquina·hora. Com $5$ máquinas por $3$ horas: $5 \\times 3 \\times 250 = 15 \\times 250 = 3.750$ caixas.',
    trapNote: 'Não multiplique apenas por $\\frac{5}{3}$ nem apenas por $\\frac{3}{2}$: ambos os fatores multiplicam juntos ($\\frac{5}{3} \\cdot \\frac{3}{2} = \\frac{5}{2} = 2{,}5\\times$).',
    optionFeedback: [
      'Considerou apenas a mudança de horas ($\\frac{3}{2} \\times 1.500$), mantendo $3$ máquinas.',
      'Considerou apenas o aumento de máquinas ($\\frac{5}{3} \\times 1.500$), mantendo $2$ horas.',
      'Calculou $200$ caixas/(máq·h) em vez de $250$.',
      'Erro aritmético em $15 \\times 250$.',
      'Correto! Taxa $= 250$ caixas/(máquina·hora); $5 \\times 3 \\times 250 = 3.750$ caixas.',
    ],
    stepByStep: [
      'Ache a taxa de 1 máquina em 1 hora: $\\frac{1.500}{3 \\times 2} = 250$ caixas/h.',
      'Multiplique pela nova equipe ($5$) e novo tempo ($3\\text{ h}$): $5 \\times 3 \\times 250 = 3.750$ caixas.',
    ],
    memoryTakeaway: 'Produção $= (\\text{Taxa unitária}) \\times (\\text{Máquinas}) \\times (\\text{Tempo})$. Achar a taxa de 1 máquina em 1 hora resolve em duas contas fáceis!',
  },
  {
    id: 'mat-q98',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    source: 'Edital 12.2 · Obra Interrompida',
    prompt:
      'Uma reforma escolar estava planejada para ser feita por $15$ operários em $24$ dias. Após exatamente $8$ dias de trabalho normal, $5$ operários foram remanejados para outro projeto. Em quantos dias os operários que ficaram concluirão a parte RESTANTE da reforma?',
    options: ['16 dias.', '18 dias.', '24 dias.', '30 dias.', '36 dias.'],
    correctIndex: 2,
    explanation:
      'Nos $8$ primeiros dias, a equipe trabalhou normalmente, então faltavam $24 - 8 = 16$ dias de trabalho para $15$ operários. Com a saída de $5$, restam $15 - 5 = 10$ operários. Pela regra inversa: $15 \\times 16 = 10 \\times d \\Rightarrow 240 = 10d \\Rightarrow d = 24$ dias.',
    trapNote: 'Não use os $24$ dias inteiros na regra de três! Já se passaram $8$ dias, portanto compare apenas o que FALTA ($24 - 8 = 16$ dias para $15$ operários).',
    optionFeedback: [
      '$16$ dias é quanto faltava se NINGUÉM tivesse saído ($24 - 8$).',
      'Erro na divisão $240 \\div 10$.',
      'Correto! Trabalho restante $= 15 \\times 16 = 240$ homens·dia; com $10$ operários, $\\frac{240}{10} = 24$ dias.',
      'Calculou usando $8$ em vez de $10$ operários restantes.',
      'Erro clássico: usou $24$ dias inteiros ($\\frac{15 \\times 24}{10} = 36$), esquecendo os $8$ dias já trabalhados!',
    ],
    stepByStep: [
      'Desconte os dias já cumpridos pela equipe cheia: $24 - 8 = 16$ dias restantes para $15$ operários.',
      'Ache os operários que ficaram: $15 - 5 = 10$ operários.',
      'Regra inversa no trecho restante: $15 \\times 16 = 10 \\times d \\Rightarrow d = 24$ dias.',
    ],
    memoryTakeaway: 'Em problemas onde a equipe muda NO MEIO da tarefa, sempre subtraia os dias já decorridos antes de montar a regra de três!',
  },
  {
    id: 'mat-q99',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    source: 'Edital 12.2 · Regra de Três Composta (Incógnita Recursos)',
    prompt:
      'Oito teares industriais, funcionando $5$ horas por dia durante $6$ dias, produzem $480\\text{ metros}$ de tecido. Quantos teares serão necessários para produzir $576\\text{ metros}$ trabalhando $6$ horas por dia durante $8$ dias?',
    options: ['6 teares.', '8 teares.', '9 teares.', '10 teares.', '12 teares.'],
    correctIndex: 0,
    explanation:
      'Compare com Teares ($T$): mais metros $\\Rightarrow$ mais teares (direta: $\\frac{480}{576} = \\frac{5}{6}$); mais horas/dia $\\Rightarrow$ menos teares (inversa: $\\frac{6}{5}$); mais dias $\\Rightarrow$ menos teares (inversa: $\\frac{8}{6} = \\frac{4}{3}$). Logo: $\\frac{8}{T} = \\frac{5}{6} \\cdot \\frac{6}{5} \\cdot \\frac{8}{6} = \\frac{8}{6} \\Rightarrow T = 6$ teares.',
    trapNote: 'Note como $\\frac{5}{6} \\cdot \\frac{6}{5}$ se cancela perfeitamente dando $1$, deixando $\\frac{8}{T} = \\frac{8}{6} \\Rightarrow T = 6$!',
    optionFeedback: [
      'Correto! Taxa por tear·hora $= \\frac{480}{8 \\cdot 5 \\cdot 6} = 2\\text{ m/h}$; para $576\\text{ m}$ em $48\\text{ h}$, $\\frac{576}{48 \\cdot 2} = 6$ teares.',
      'Considerou o mesmo número de teares sem ajustar carga horária e produção.',
      'Inverteu a razão dos dias em relação aos teares.',
      'Erro aritmético na multiplicação de frações.',
      'Usou $576$ e $480$ em relação inversa.',
    ],
    stepByStep: [
      'Compare com Teares: Produção é direta ($\\frac{480}{576}$); Horas/dia é inversa ($\\frac{6}{5}$); Dias é inversa ($\\frac{8}{6}$).',
      '$\\frac{8}{T} = \\frac{480}{576} \\cdot \\frac{6}{5} \\cdot \\frac{8}{6} = \\frac{5}{6} \\cdot \\frac{6}{5} \\cdot \\frac{8}{6} = \\frac{8}{6}$.',
      'Logo, $T = 6$ teares.',
    ],
    memoryTakeaway: 'Quer validar o resultado da Regra de 3 Composta na hora? Ache a taxa unitária ($2\\text{ m/(tear·h)}$) e confira: $6 \\times 6 \\times 8 \\times 2 = 576$!',
  },
  {
    id: 'mat-q100',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    source: 'Edital 12.2 · Regra de Três Simples Direta',
    prompt:
      'Uma impressora laser de alta velocidade imprime $28$ páginas por minuto. Mantendo esse ritmo constante, quantos minutos ela levará para imprimir um caderno de estudos de $420$ páginas?',
    options: ['12 min.', '15 min.', '18 min.', '20 min.', '24 min.'],
    correctIndex: 1,
    explanation:
      'Grandezas diretamente proporcionais: $28\\text{ pág} \\to 1\\text{ min}$; $420\\text{ pág} \\to t\\text{ min}$. Logo, $t = \\frac{420}{28}$. Simplificando numerador e denominador por $7$: $\\frac{60}{4} = 15$ minutos.',
    trapNote: 'Simplifique $\\frac{420}{28}$ dividindo ambos por $14$ (ou por $7$ e depois por $4$) para evitar erros de divisão longa.',
    optionFeedback: [
      '$12 \\times 28 = 336 \\neq 420$.',
      'Correto! $\\frac{420}{28} = \\frac{60}{4} = 15$ minutos.',
      '$18 \\times 28 = 504 \\neq 420$.',
      '$20 \\times 28 = 560 \\neq 420$.',
      '$24 \\times 28 = 672 \\neq 420$.',
    ],
    stepByStep: [
      'Monte a divisão direta: $t = \\frac{420}{28}$.',
      'Simplifique por $7$: $\\frac{420 \\div 7}{28 \\div 7} = \\frac{60}{4} = 15$ minutos.',
    ],
    memoryTakeaway: 'Tabuada rápida do $14$: $14 \\times 2 = 28$ e $14 \\times 3 = 42$ — enxergar $14$ em $420$ e $28$ resolve $\\frac{30}{2} = 15$ instantaneamente!',
  },
  {
    id: 'mat-q101',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    source: 'Edital 12.2 · Vazão e Tempo de Enchimento',
    prompt:
      'Uma torneira com vazão de $20\\text{ litros por minuto}$ enche completamente um reservatório em $45$ minutos. Se utilizarmos uma bomba com vazão maior, de $30\\text{ litros por minuto}$, em quantos minutos o mesmo reservatório estará cheio?',
    options: ['15 min.', '22,5 min.', '25 min.', '30 min.', '67,5 min.'],
    correctIndex: 3,
    explanation:
      'Capacidade do reservatório $= 20 \\times 45 = 900\\text{ litros}$. Com a bomba de $30\\text{ L/min}$: $t = \\frac{900}{30} = 30$ minutos (vazão e tempo são inversamente proporcionais).',
    trapNote: 'Vazão maior enche mais RÁPIDO! Quem marca $67{,}5\\text{ min}$ aplicou regra de três direta sem pensar no sentido físico.',
    optionFeedback: [
      'Dividiu $45$ por $3$ em vez de multiplicar por $\\frac{20}{30} = \\frac{2}{3}$.',
      'Seria para vazão de $40\\text{ L/min}$ (dobro de $20$), não $30\\text{ L/min}$.',
      'Erro aritmético ao calcular $\\frac{900}{30}$.',
      'Correto! Volume $= 20 \\times 45 = 900\\text{ L}$; a $30\\text{ L/min}$ leva $\\frac{900}{30} = 30$ minutos.',
      'Armadilha clássica: aplicou regra de três DIRETA ($\\frac{30 \\times 45}{20} = 67{,}5$), fazendo a bomba mais forte demorar mais!',
    ],
    stepByStep: [
      'Calcule a capacidade total do reservatório: $20 \\times 45 = 900\\text{ L}$.',
      'Divida pela nova vazão ($30\\text{ L/min}$): $t = \\frac{900}{30} = 30$ minutos.',
    ],
    memoryTakeaway: 'Em enchimento de tanques, multiplique vazão antiga $\\times$ tempo antigo para descobrir o volume, depois divida pela nova vazão!',
  },
  {
    id: 'mat-q102',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    source: 'Edital 12.2 · Regra de Três Composta (Confecção)',
    prompt:
      'Dez costureiras, trabalhando $6$ horas por dia, confeccionam $300$ camisas em $15$ dias. Em quantos dias $12$ costureiras, trabalhando $5$ horas por dia, confeccionarão $480$ camisas no mesmo ritmo?',
    options: ['12 dias.', '16 dias.', '18 dias.', '20 dias.', '24 dias.'],
    correctIndex: 4,
    explanation:
      'Taxa por costureira·hora: $\\frac{300}{10 \\times 6 \\times 15} = \\frac{300}{900} = \\frac{1}{3}$ de camisa/h. A nova equipe produz $12 \\times 5 \\times \\frac{1}{3} = 20$ camisas por dia. Para produzir $480$ camisas: $\\frac{480}{20} = 24$ dias.',
    trapNote: 'Note que $10 \\times 6 = 60$ costureira·horas/dia e $12 \\times 5 = 60$ costureira·horas/dia — a capacidade DIÁRIA das duas equipes é idêntica! Logo o tempo muda só pela razão de camisas ($\\frac{480}{300} \\times 15 = 24$ dias).',
    optionFeedback: [
      'Metade do valor correto (errou fator da produção $480/300$).',
      'Erro aritmético na simplificação das frações.',
      'Usou razão $\\frac{12}{10}$ sem compensar a redução da carga horária ($6\\text{ h} \\to 5\\text{ h}$).',
      'Achou a produção diária ($20$ camisas/dia) e parou antes de dividir $480$ por $20$!',
      'Correto! $\\frac{15}{D} = \\frac{12}{10} \\cdot \\frac{5}{6} \\cdot \\frac{300}{480} = 1 \\cdot \\frac{5}{8} \\Rightarrow D = 24$ dias.',
    ],
    stepByStep: [
      'Compare com Dias: Costureiras (inversa: $\\frac{12}{10}$), Horas/dia (inversa: $\\frac{5}{6}$), Camisas (direta: $\\frac{300}{480}$).',
      'Multiplique: $\\frac{15}{D} = \\frac{12}{10} \\cdot \\frac{5}{6} \\cdot \\frac{5}{8} = \\frac{60}{60} \\cdot \\frac{5}{8} = \\frac{5}{8}$.',
      'Resolva: $5D = 120 \\Rightarrow D = 24$ dias.',
    ],
    memoryTakeaway: 'Observe sempre o produto $\\text{(trabalhadores)} \\times \\text{(horas/dia)}$: $10 \\times 6 = 12 \\times 5 = 60$. Quando os dois lados empatam, sobra uma regra de 3 simples!',
  },
  {
    id: 'mat-q103',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    source: 'Edital 12.2 · Acréscimo de Pessoal em Prazo Menor',
    prompt:
      'Uma ponte é construída por $16$ trabalhadores em $18$ dias. Para entregar a obra com antecedência, deseja-se concluir a mesma ponte em $12$ dias. Quantos trabalhadores A MAIS precisam ser contratados?',
    options: ['6 trabalhadores.', '8 trabalhadores.', '10 trabalhadores.', '12 trabalhadores.', '24 trabalhadores.'],
    correctIndex: 1,
    explanation:
      'Prazo menor exige equipe maior (inversa): $16 \\times 18 = T \\times 12 \\Rightarrow T = \\frac{288}{12} = 24$ trabalhadores no total. Como já havia $16$, precisam ser contratados $24 - 16 = 8$ trabalhadores a mais.',
    trapNote: 'A alternativa E ($24$) é o TOTAL da equipe nova, mas a pergunta exige “quantos trabalhadores A MAIS” ($24 - 16 = 8$)!',
    optionFeedback: [
      'Calculou $18 - 12 = 6$ dias e somou diretamente sem proporção.',
      'Correto! Total necessário $= \\frac{16 \\times 18}{12} = 24$; a mais $= 24 - 16 = 8$ trabalhadores.',
      'Erro aritmético ao calcular $24 - 16$.',
      'Dividiu $16$ e somou $4$, sem resolver a equação inversa.',
      'Pegadinha! $24$ é o TOTAL necessário da nova equipe, faltando subtrair os $16$ trabalhadores que já estão na obra.',
    ],
    stepByStep: [
      'Encontre o total necessário para $12$ dias: $16 \\times 18 = 12T \\Rightarrow T = 24$.',
      'Subtraia a equipe inicial para achar os contratados a mais: $24 - 16 = 8$ trabalhadores.',
    ],
    memoryTakeaway: 'Achou $T = 24$? Relê a última frase: “A MAIS” manda fazer $T_{\\text{novo}} - T_{\\text{inicial}}$ antes de marcar!',
  },
  {
    id: 'mat-q104',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    source: 'Edital 12.2 · Regra de Três Composta (Bombas)',
    prompt:
      'Cinco bombas idênticas esvaziam um reservatório de $60.000\\text{ L}$ em $4$ horas. Mantendo a mesma capacidade de sucção, em quantas horas $4$ dessas bombas esvaziarão um reservatório de $36.000\\text{ L}$?',
    options: ['3 horas.', '4 horas.', '4,8 horas.', '6 horas.', '8 horas.'],
    correctIndex: 0,
    explanation:
      'Vazão de 1 bomba: $\\frac{60.000}{5 \\times 4} = 3.000\\text{ L/h}$. Quatro bombas juntas retiram $4 \\times 3.000 = 12.000\\text{ L/h}$. Logo, para esvaziar $36.000\\text{ L}$: $\\frac{36.000}{12.000} = 3$ horas.',
    trapNote: 'Não ache que menos bombas sempre levam mais horas se o volume TAMBÉM diminuiu ($60.000\\text{ L} \\to 36.000\\text{ L}$)! Calcule a vazão de 1 bomba!',
    optionFeedback: [
      'Correto! Cada bomba retira $3.000\\text{ L/h}$; $4$ bombas retiram $12.000\\text{ L/h}$, esvaziando $36.000\\text{ L}$ em $3$ horas.',
      'Apenas repetiu o tempo anterior ($4\\text{ h}$) sem calcular as variações.',
      'Desconsiderou que o novo reservatório é menor ($36.000\\text{ L}$ em vez de $60.000\\text{ L}$).',
      'Erro nas frações ao combinar variação de bombas com variação de volume.',
      'Seria para um volume muito maior ($96.000\\text{ L}$).',
    ],
    stepByStep: [
      'Ache a vazão de $1$ bomba: $\\frac{60.000}{5 \\times 4} = 3.000\\text{ L/h}$.',
      'Multiplique por $4$ bombas: $4 \\times 3.000 = 12.000\\text{ L/h}$.',
      'Divida o novo volume: $\\frac{36.000}{12.000} = 3\\text{ h}$.',
    ],
    memoryTakeaway: 'Para bombas/máquinas com alteração de volume, achar a vazão unitária ($\\text{L/h por bomba}$) impede errar diretas/inversas!',
  },
  {
    id: 'mat-q105',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    source: 'Edital 12.2 · Conversão de Tempo em Regra de Três',
    prompt:
      'Um carro percorre $240\\text{ km}$ em $3\\text{ horas}$ com velocidade constante. Mantendo exatamente essa mesma velocidade, quantos quilômetros esse carro percorrerá em $4\\text{ horas}$ e $30\\text{ minutos}$?',
    options: ['320 km.', '340 km.', '360 km.', '380 km.', '400 km.'],
    correctIndex: 2,
    explanation:
      'Converta $4\\text{ h } 30\\text{ min}$ para horas decimais: $4{,}5\\text{ h}$ (NUNCA use $4{,}3\\text{ h}$!). Como $\\frac{240}{3} = 80\\text{ km/h}$, a distância em $4{,}5\\text{ h}$ será $80 \\times 4{,}5 = 360\\text{ km}$.',
    trapNote: 'Armadilha clássica: $4\\text{ h } 30\\text{ min} = 4{,}5\\text{ h}$, NÃO $4{,}3\\text{ h}$! $30$ minutos valem metade de uma hora ($0{,}5\\text{ h}$).',
    optionFeedback: [
      '$320\\text{ km}$ corresponde a $4$ horas exatas, esquecendo os $30$ minutos extras.',
      'Erro aritmético: $4\\text{h }30\\text{min}$ em vez de somar $40\\text{ km}$ ($0{,}5 \\times 80$) somou $20$.',
      'Correto! Velocidade $= 80\\text{ km/h}$; em $4{,}5\\text{ h}$ percorre $80 \\times 4{,}5 = 360\\text{ km}$.',
      'Erro na soma $320 + 40$.',
      'Corresponderia a $5$ horas ($5 \\times 80$), não $4\\text{h }30\\text{min}$.',
    ],
    stepByStep: [
      'Converta o tempo: $30\\text{ min} = 0{,}5\\text{ h} \\Rightarrow 4\\text{ h }30\\text{ min} = 4{,}5\\text{ h}$.',
      'Velocidade: $\\frac{240}{3} = 80\\text{ km/h}$.',
      'Distância: $80 \\times 4{,}5 = 360\\text{ km}$.',
    ],
    memoryTakeaway: 'Hora para decimal divide os minutos por $60$: $30\\text{ min} = \\frac{30}{60} = 0{,}5\\text{ h}$; $15\\text{ min} = 0{,}25\\text{ h}$; $45\\text{ min} = 0{,}75\\text{ h}$!',
  },
  {
    id: 'mat-q106',
    discipline: 'MAT',
    topicId: 'mat-regra3',
    source: 'Edital 12.2 · Regra de Três Inversa com Decorrência de Tempo',
    prompt:
      'Um navio com $150$ tripulantes possui reserva de água potável para $40$ dias. Após exatamente $10$ dias de viagem, a embarcação resgata $30$ náufragos (passando a $180$ pessoas a bordo). Mantendo o mesmo consumo diário por pessoa, para quantos dias A PARTIR DO RESGATE ainda durará a água restante?',
    options: ['18 dias.', '20 dias.', '22 dias.', '25 dias.', '33 dias.'],
    correctIndex: 3,
    explanation:
      'Após $10$ dias, a água restante abasteceria os $150$ tripulantes por mais $40 - 10 = 30$ dias ($150 \\times 30 = 4.500$ rações diárias). Com $150 + 30 = 180$ pessoas a bordo: $\\frac{4.500}{180} = 25$ dias.',
    trapNote: 'Desconte os $10$ dias já bebidos ($40 - 10 = 30$) ANTES de montar a regra inversa!',
    optionFeedback: [
      'Erro aritmético na divisão $4.500 \\div 180$.',
      'Usou $30$ pessoas no cálculo errado ou subtraiu dias diretamente.',
      'Erro ao dividir $4.500$ por $180$.',
      'Correto! Restavam $150 \\times 30 = 4.500$ rações; divididas por $180$ pessoas, duram $25$ dias.',
      'Armadilha! Usou os $40$ dias originais ($\\frac{150 \\times 40}{180} \\approx 33{,}3$) esquecendo que os primeiros $10$ dias de água já foram consumidos!',
    ],
    stepByStep: [
      'Calcule quantos dias restavam aos $150$ originais: $40 - 10 = 30$ dias.',
      'Total a bordo após resgate: $150 + 30 = 180$ pessoas.',
      'Regra inversa: $150 \\times 30 = 180 \\times d \\Rightarrow d = \\frac{4.500}{180} = 25$ dias.',
    ],
    memoryTakeaway: 'Sempre subtraia os dias que JÁ PASSARAM ($40 - 10 = 30$) antes de aplicar a proporção inversa para os novos tripulantes!',
  },
  // ============================================================================
  // 5. PORCENTAGEM, DESCONTOS E AUMENTOS SUCESSIVOS (20 questões: mat-q18..20, 40 + mat-q107..122)
  // ============================================================================
  {
    id: 'mat-q18',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    source: 'Edital 12.2 · Aumentos e Descontos Sucessivos',
    prompt:
      'Um computador custava R$ 2.500,00. Sofreu um reajuste de $+20\\%$ e, na semana seguinte, recebeu um desconto promocional de $-20\\%$ sobre o novo preço. Qual foi o preço final e a variação líquida em relação ao valor inicial?',
    options: [
      'R$ 2.500,00 (sem alteração).',
      'R$ 2.450,00 (redução de 2%).',
      'R$ 2.400,00 (redução de 4%).',
      'R$ 2.600,00 (aumento de 4%).',
      'R$ 2.350,00 (redução de 6%).',
    ],
    correctIndex: 2,
    explanation:
      'Usando fatores multiplicativos: $+20\\% \\Rightarrow \\times 1{,}20$ (de R$ 2.500,00 vai para R$ 3.000,00). Depois, $-20\\%$ incide sobre R$ 3.000,00: $3.000 \\times 0{,}80 =$ R$ 2.400,00. O fator acumulado é $1{,}20 \\times 0{,}80 = 0{,}96$, ou seja, redução líquida de $4\\%$.',
    trapNote: 'Subir $20\\%$ e cair $20\\%$ NUNCA volta ao preço inicial, pois os $-20\\%$ incidem sobre um valor maior!',
    optionFeedback: [
      'Armadilha clássica: achou que $+20\\% - 20\\% = 0\\%$, esquecendo que as bases são diferentes.',
      'Erro aritmético ao calcular $20\\%$ de $3.000$.',
      'Correto! $1{,}20 \\times 0{,}80 = 0{,}96$ ($-4\\%$): $2.500 \\times 0{,}96 =$ R$ 2.400,00.',
      'Inverteu a variação final pensando em ganho de $4\\%$ em vez de perda.',
      'Erro ao subtrair R$ 600 + desconto errado.',
    ],
    stepByStep: [
      'Fator do aumento de $20\\%$: $1 + 0{,}20 = 1{,}20$. Fator do desconto de $20\\%$: $1 - 0{,}20 = 0{,}80$.',
      'Multiplique os fatores: $1{,}20 \\times 0{,}80 = 0{,}96 = 96\\%$ (queda de $4\\%$).',
      'Preço final: $2.500 \\times 0{,}96 =$ R$ 2.400,00.',
    ],
    memoryTakeaway: 'Aumento de $p\\%$ seguido de desconto de $p\\%$ resulta sempre em REDUÇÃO de $\\left(\\frac{p}{10}\\right)^2\\%$! Para $20\\%$: $-2^2 = -4\\%$.',
  },
  {
    id: 'mat-q19',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    source: 'Edital 12.2 · Porcentagem Reversa',
    prompt:
      'Após um reajuste de $+15\\%$, a taxa mensal de um curso preparatório passou a ser R$ 276,00. Qual era o valor da taxa ANTES desse aumento?',
    options: ['R$ 234,60.', 'R$ 240,00.', 'R$ 245,00.', 'R$ 250,00.', 'R$ 261,00.'],
    correctIndex: 1,
    explanation:
      'O valor atual equivale a $115\\%$ ($1{,}15$) do valor inicial $x$. Logo, $1{,}15x = 276 \\Rightarrow x = \\frac{276}{1{,}15} =$ R$ 240,00. Conferindo: $15\\%$ de $240 = 36$, e $240 + 36 = 276$.',
    trapNote: 'NUNCA calcule $15\\%$ de $276$ para subtrair — isso daria R$ 234,60 (alternativa A, armadilha clássica!).',
    optionFeedback: [
      'Armadilha! Subtraiu $15\\%$ do valor FINAL ($276 \\times 0{,}85 = 234{,}60$), quando o aumento de $15\\%$ ocorreu sobre o valor ANTERIOR.',
      'Correto! $\\frac{276}{1{,}15} =$ R$ 240,00 ($240 + 15\\% = 240 + 36 = 276$).',
      'Não fecha $276$ ao aplicar $+15\\%$ ($245 \\times 1{,}15 = 281{,}75$).',
      'Aplicando $+15\\%$ sobre $250$, daria $287{,}50 \\neq 276$.',
      'Apenas subtraiu $15$ reais ($276 - 15$) confundindo reais com porcentagem.',
    ],
    stepByStep: [
      'Equacione o valor atualizado: $x \\times 1{,}15 = 276$.',
      'Isole $x$ dividindo: $x = \\frac{276}{1{,}15} = \\frac{27.600}{115} =$ R$ 240,00.',
    ],
    memoryTakeaway: 'Para voltar ao preço ANTERIOR, nunca subtraia a porcentagem do final — DIVIDA o valor final pelo fator ($\\div 1{,}15$)!',
  },
  {
    id: 'mat-q20',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    source: 'Edital 12.2 · Vagas do Edital (Porto Digital)',
    prompt:
      'Conforme o Edital 2027.1, a ETE Porto Digital oferta $120$ vagas para Desenvolvimento de Sistemas. Se $80\\%$ das vagas são reservadas a egressos de escolas públicas e, desse total reservado, $50\\%$ destinam-se a famílias com renda per capita de até $1{,}5$ salário-mínimo, quantas vagas correspondem a esse recorte?',
    options: ['36 vagas.', '40 vagas.', '48 vagas.', '60 vagas.', '96 vagas.'],
    correctIndex: 2,
    explanation:
      '$80\\%$ de $120$ vagas $= 0{,}80 \\times 120 = 96$ vagas para escolas públicas. Metade ($50\\%$) dessas $96$ vagas equivale a $0{,}50 \\times 96 = 48$ vagas (exatamente como consta no quadro do item 10.1 do Edital!).',
    trapNote: 'Porcentagem de porcentagem multiplica-se: $50\\%$ de $80\\% = 0{,}50 \\times 0{,}80 = 0{,}40 = 40\\%$ do total ($0{,}40 \\times 120 = 48$).',
    optionFeedback: [
      'Calculou $30\\%$ do total ($0{,}30 \\times 120$) em vez de $40\\%$.',
      '$40$ é a PORCENTAGEM ($40\\%$), não o número de vagas ($40\\%$ de $120 = 48$)!',
      'Correto! $50\\%$ de $80\\%$ de $120 = 0{,}5 \\times 0{,}8 \\times 120 = 48$ vagas.',
      '$60$ seria $50\\%$ de TODAS as $120$ vagas, ignorando a etapa dos $80\\%$.',
      '$96$ é o total reservado para escolas públicas ($80\\%$), faltando aplicar os $50\\%$.',
    ],
    stepByStep: [
      'Calcule o 1º recorte ($80\\%$): $0{,}80 \\times 120 = 96$ vagas.',
      'Calcule o 2º recorte ($50\\%$ de $96$): $0{,}50 \\times 96 = 48$ vagas.',
    ],
    memoryTakeaway: 'Na língua portuguesa matemática, “de” significa MULTIPLICAR: $50\\%$ DE $80\\%$ DE $120 = 0{,}5 \\times 0{,}8 \\times 120 = 48$.',
  },
  {
    id: 'mat-q40',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    source: 'Edital 12.2 · Porcentagem e Meta da Prova',
    prompt:
      'Em um simulado oficial da ETE com $20$ questões ($10$ de Língua Portuguesa e $10$ de Matemática), uma estudante deseja atingir $85\\%$ de aproveitamento geral. Se ela acertar $9$ questões em Língua Portuguesa, qual percentual mínimo das questões de Matemática precisará acertar?',
    options: ['60%.', '70%.', '75%.', '80%.', '90%.'],
    correctIndex: 3,
    explanation:
      '$85\\%$ de $20$ questões $= 0{,}85 \\times 20 = 17$ acertos no total. Se já acertou $9$ em Português, faltam $17 - 9 = 8$ acertos em Matemática. Como Matemática tem $10$ questões: $\\frac{8}{10} = 80\\%$.',
    trapNote: 'Não tire média simples ($\\frac{90\\% + x}{2} = 85\\%$) sem cuidado — aqui os pesos são iguais ($10$ e $10$), então também funciona ($90\\% + 80\\% = 170\\% \\div 2 = 85\\%$), mas contar os acertos ($17 - 9 = 8$) evita erros quando os blocos têm tamanhos diferentes!',
    optionFeedback: [
      'Com $6$ acertos em Mat ($60\\%$), somaria $15/20 = 75\\% < 85\\%$.',
      'Com $7$ acertos em Mat ($70\\%$), somaria $16/20 = 80\\% < 85\\%$.',
      'Não gera número inteiro de questões em $10$ itens.',
      'Correto! $85\\%$ de $20 = 17$ acertos; $17 - 9 = 8$ acertos em $10$ de Mat ($80\\%$).',
      'Com $9$ acertos em Mat ($90\\%$), faria $18/20 = 90\\%$, acima do mínimo pedido.',
    ],
    stepByStep: [
      'Meta de acertos totais: $0{,}85 \\times 20 = 17$ questões.',
      'Acertos necessários em Matemática: $17 - 9 = 8$ questões.',
      'Percentual em Matemática (de $10$): $\\frac{8}{10} = 80\\%$.',
    ],
    memoryTakeaway: 'Em provas de $20$ questões, cada acerto vale exatos $5\\%$ da prova inteira ($10\\%$ da sua matéria)!',
  },
  {
    id: 'mat-q107',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    source: 'Edital 12.2 · Descontos Sucessivos',
    prompt:
      'Uma mochila recebeu dois descontos sucessivos na liquidação: primeiro de $10\\%$ e, em seguida, de $20\\%$ sobre o preço já reduzido. Esses dois descontos equivalem a um único desconto de:',
    options: ['28%.', '30%.', '32%.', '35%.', '72%.'],
    correctIndex: 0,
    explanation:
      'Aplicando os fatores de redução: primeiro desconto de $10\\% \\to \\times 0{,}90$; segundo desconto de $20\\% \\to \\times 0{,}80$. Produto: $0{,}90 \\times 0{,}80 = 0{,}72$ (paga-se $72\\%$ do preço). Logo, o desconto único é $100\\% - 72\\% = 28\\%$.',
    trapNote: 'Não some $10\\% + 20\\% = 30\\%$! Os descontos sucessivos resultam sempre em um desconto único MENOR que a soma direta ($28\\% < 30\\%$).',
    optionFeedback: [
      'Correto! $0{,}90 \\times 0{,}80 = 0{,}72$; logo o desconto acumulado foi $1 - 0{,}72 = 28\\%$.',
      'Armadilha clássica: somou $10\\% + 20\\% = 30\\%$ como se os dois incidissem no preço original.',
      'Inverteu o raciocínio de aumentos sucessivos ($1{,}10 \\times 1{,}20 = 1{,}32 \\to +32\\%$).',
      'Erro aritmético sem relação com os fatores.',
      '$72\\%$ é o percentual PAGO pelo cliente, e o comando pediu o DESCONTO ($100\\% - 72\\% = 28\\%$).',
    ],
    stepByStep: [
      'Multiplique os fatores restantes: $(1 - 0{,}10) \\times (1 - 0{,}20) = 0{,}90 \\times 0{,}80 = 0{,}72$.',
      'Subtraia de $100\\%$: $100\\% - 72\\% = 28\\%$.',
    ],
    memoryTakeaway: 'Descontos sucessivos de $a\\%$ e $b\\%$ pagam $(1 - a)(1 - b)$ — lembre que o resultado final é o quanto você PAGA, então faça $1 - \\text{produto}$ para achar o desconto!',
  },
  {
    id: 'mat-q108',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    source: 'Edital 12.2 · Taxa de Variação Percentual',
    prompt:
      'Um notebook que custava R$ 2.000,00 passou a custar R$ 2.500,00 após a alta do dólar. Qual foi o percentual de aumento aplicado sobre o preço original?',
    options: ['20%.', '25%.', '30%.', '40%.', '50%.'],
    correctIndex: 1,
    explanation:
      'O aumento em reais foi $2.500 - 2.000 =$ R$ 500,00. Dividindo a variação pelo preço INICIAL: $\\frac{500}{2.000} = \\frac{1}{4} = 0{,}25 = 25\\%$.',
    trapNote: 'Divida SEMPRE pelo preço ORIGINAL ($2.000$), nunca pelo preço final ($2.500$, que daria a armadilha $20\\%$).',
    optionFeedback: [
      'Armadilha! Dividiu o aumento de $500$ pelo preço FINAL ($\\frac{500}{2.500} = 20\\%$) em vez do preço original.',
      'Correto! $\\frac{2.500 - 2.000}{2.000} = \\frac{500}{2.000} = 0{,}25 = 25\\%$.',
      'Calculou $\\frac{500}{1.666}$ ou errou a simplificação.',
      'Errou a fração decimal.',
      'Confundiu $500$ reais com $50\\%$ (seria R$ 3.000,00).',
    ],
    stepByStep: [
      'Ache a diferença absoluta: $2.500 - 2.000 = 500$.',
      'Divida pelo valor INICIAL: $\\frac{500}{2.000} = \\frac{1}{4} = 25\\%$.',
    ],
    memoryTakeaway: 'Fórmula da variação percentual: $\\frac{\\text{Valor Final} - \\text{Valor Inicial}}{\\text{Valor Inicial}} \\times 100\\%$ — no denominador vai sempre o INICIAL!',
  },
  {
    id: 'mat-q109',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    source: 'Edital 12.2 · Aumentos Sucessivos',
    prompt:
      'O valor da passagem de ônibus de um município sofreu dois aumentos consecutivos de $10\\%$ no mesmo ano. Qual foi o aumento percentual único equivalente a esses dois reajustes?',
    options: ['10%.', '19%.', '20%.', '20,5%.', '21%.'],
    correctIndex: 4,
    explanation:
      'Fator para cada aumento de $10\\%$: $1{,}10$. Multiplicando os dois: $1{,}10 \\times 1{,}10 = 1{,}21$. Isso representa $121\\%$ do valor original, isto é, aumento único de $21\\%$.',
    trapNote: 'Aumentos sucessivos rendem MAIS que a soma ($21\\% > 20\\%$); já descontos sucessivos de $10\\%$ rendem MENOS ($19\\% < 20\\%$).',
    optionFeedback: [
      'Ignorou o segundo aumento.',
      '$19\\%$ corresponde a dois DESCONTOS sucessivos de $10\\%$ ($0{,}9 \\times 0{,}9 = 0{,}81$).',
      'Armadilha clássica: somou $10\\% + 10\\% = 20\\%$, ignorando o efeito composto ($10\\%$ sobre $110\\%$).',
      'Erro aritmético ao multiplicar $1{,}1 \\times 1{,}1$.',
      'Correto! $1{,}10 \\times 1{,}10 = 1{,}21 \\Rightarrow +21\\%$.',
    ],
    stepByStep: [
      'Multiplique os fatores de aumento: $1{,}10 \\times 1{,}10 = 1{,}21$.',
      'Subtraia $1$: $1{,}21 - 1 = 0{,}21 = 21\\%$.',
    ],
    memoryTakeaway: 'Memorize o par clássico de prova: $+10\\%$ e $+10\\% = +21\\%$; já $-10\\%$ e $-10\\% = -19\\%$!',
  },
  {
    id: 'mat-q110',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    source: 'Edital 12.2 · Valor Original Após Desconto',
    prompt:
      'Com um desconto de $20\\%$ para pagamento à vista, um monitor gamer foi vendido por R$ 640,00. Qual era o preço de tabela desse monitor ANTES do desconto?',
    options: ['R$ 740,00.', 'R$ 768,00.', 'R$ 780,00.', 'R$ 800,00.', 'R$ 840,00.'],
    correctIndex: 3,
    explanation:
      'Se houve $20\\%$ de desconto, o cliente pagou $80\\%$ ($0{,}80$) do preço original $P$. Portanto, $0{,}80 \\cdot P = 640 \\Rightarrow P = \\frac{640}{0{,}80} =$ R$ 800,00.',
    trapNote: 'Se você somar $20\\%$ de $640$ ($+128 = 768$, letra B), cai na armadilha mais antiga de porcentagem!',
    optionFeedback: [
      'Erro de estimativa sem calcular a fração $80\\%$.',
      'Armadilha! Calculou $640 \\times 1{,}20 = 768$, aplicando $20\\%$ em cima do preço COM desconto.',
      'Erro aritmético ao dividir $640$ por $0{,}8$.',
      'Correto! R$ 640,00 equivale a $80\\%$ do original: $\\frac{640}{0{,}80} =$ R$ 800,00.',
      'Adicionou R$ 200 sem justificativa ($200/800 = 25\\%$, mas $200/840 \\neq 20\\%$).',
    ],
    stepByStep: [
      'Identifique que pagar com $-20\\%$ significa pagar $80\\% = 0{,}80$ do original.',
      'Monte: $0{,}80 \\cdot P = 640 \\Rightarrow P = \\frac{640}{0{,}80} =$ R$ 800,00.',
    ],
    memoryTakeaway: 'Desconto de $20\\%$? O preço pago é $80\\%$ ($0{,}8$) do antigo. Para recuperar o antigo, DIVIDA por $0{,}8$ (nunca multiplique por $1{,}2$!).',
  },
  {
    id: 'mat-q111',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    source: 'Edital 12.2 · Porcentagem Básica',
    prompt:
      'A mensalidade de um clube esportivo passou de R$ 150,00 para R$ 168,00. Qual foi o percentual de reajuste aplicado?',
    options: ['12%.', '15%.', '18%.', '20%.', '22%.'],
    correctIndex: 0,
    explanation:
      'O aumento em reais foi $168 - 150 =$ R$ 18,00. Comparando com o valor inicial de R$ 150,00: $\\frac{18}{150} = \\frac{6}{50} = \\frac{12}{100} = 12\\%$.',
    trapNote: 'Não confunda R$ 18,00 de aumento com $18\\%$ (letra C)! R$ 18 só seria $18\\%$ se a mensalidade original fosse R$ 100,00.',
    optionFeedback: [
      'Correto! Aumento de R$ 18,00 sobre R$ 150,00: $\\frac{18}{150} = \\frac{12}{100} = 12\\%$.',
      '$15\\%$ de $150$ daria $22{,}50$ (R$ 172,50).',
      'Armadilha! Confundiu os R$ 18,00 de diferença absoluta com $18\\%$.',
      '$20\\%$ de $150$ daria R$ 180,00.',
      'Erro aritmético na divisão $\\frac{18}{150}$.',
    ],
    stepByStep: [
      'Subtraia para achar o aumento em reais: $168 - 150 = 18$.',
      'Divida pelo valor inicial e converta a denominador $100$: $\\frac{18}{150} \\div 3 = \\frac{6}{50} = \\frac{12}{100} = 12\\%$.',
    ],
    memoryTakeaway: 'Frações sobre $150$ ou $50$ convertem rápido para porcentagem sem conta decimal: divida por $3$ ($\\frac{18}{150} = \\frac{6}{50}$) e dobre ($\\frac{12}{100} = 12\\%$).',
  },
  {
    id: 'mat-q112',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    source: 'Edital 12.2 · Desconto à Vista vs. Acréscimo Parcelado',
    prompt:
      'Um teclado mecânico custa R$ 350,00 na etiqueta. Pagando no PIX, o cliente ganha $12\\%$ de desconto; já pagando parcelado no cartão, há um acréscimo de $10\\%$ sobre o preço de etiqueta. Qual é a diferença, em reais, entre o preço parcelado e o preço no PIX?',
    options: ['R$ 42,00.', 'R$ 70,00.', 'R$ 77,00.', 'R$ 82,00.', 'R$ 95,00.'],
    correctIndex: 2,
    explanation:
      'No cartão ($+10\\%$): $350 + 35 =$ R$ 385,00. No PIX ($-12\\%$): $12\\%$ de $350 = 0{,}12 \\times 350 =$ R$ 42,00, logo $350 - 42 =$ R$ 308,00. Diferença: $385 - 308 =$ R$ 77,00 (atalho: como ambos incidem sobre os R$ 350,00, a distância percentual é $10\\% + 12\\% = 22\\%$ de $350 = 77$).',
    trapNote: 'Não basta calcular apenas o desconto ($42$): ambos partem de R$ 350,00 para lados opostos ($+10\\%$ acima e $-12\\%$ abaixo), somando $22\\%$ de distância!',
    optionFeedback: [
      'R$ 42,00 é apenas o desconto isolado do PIX ($12\\%$ de $350$).',
      'Dobrou os $10\\%$ ou usou $20\\%$ no lugar de $22\\%$.',
      'Correto! Parcelado R$ 385,00 menos PIX R$ 308,00 = R$ 77,00 ($22\\%$ de R$ 350,00).',
      'Erro aritmético na multiplicação $0{,}22 \\times 350$.',
      'Erro grave ao somar valores.',
    ],
    stepByStep: [
      'Como ambos os percentuais incidem sobre o mesmo preço base (R$ 350,00), a diferença percentual é $10\\% + 12\\% = 22\\%$.',
      'Calcule $22\\%$ de $350$: $0{,}22 \\times 350 = 0{,}11 \\times 700 =$ R$ 77,00.',
    ],
    memoryTakeaway: 'Atalho: um valor $12\\%$ ABAIXO e outro $10\\%$ ACIMA da mesma base diferem exatamente em $12\\% + 10\\% = 22\\%$ da base!',
  },
  {
    id: 'mat-q113',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    source: 'Edital 12.2 · Porcentagem de Subconjunto',
    prompt:
      'Em uma escola técnica com $800$ estudantes, $45\\%$ participaram das oficinas de robótica. Entre os que participaram dessas oficinas, exatamente $25\\%$ chegaram à fase estadual da competição. Quantos estudantes dessa escola chegaram à fase estadual?',
    options: ['72 estudantes.', '90 estudantes.', '180 estudantes.', '200 estudantes.', '360 estudantes.'],
    correctIndex: 1,
    explanation:
      'Primeiro, $45\\%$ de $800 = 0{,}45 \\times 800 = 360$ estudantes nas oficinas. Depois, $25\\%$ ($\\frac{1}{4}$) desses $360$ foram à estadual: $\\frac{360}{4} = 90$ estudantes.',
    trapNote: 'Não tire $25\\%$ de $800$ ($200$)! Os $25\\%$ referem-se APENAS ao grupo dos $360$ participantes da oficina.',
    optionFeedback: [
      'Calculou $20\\%$ de $360$ ($72$) em vez de $25\\%$.',
      'Correto! $45\\%$ de $800 = 360$; $25\\%$ de $360 = \\frac{360}{4} = 90$ estudantes.',
      'Seria metade ($50\\%$) dos participantes da oficina, não $25\\%$.',
      'Erro clássico: calculou $25\\%$ do TOTAL da escola ($800$) em vez dos $360$ da oficina.',
      '$360$ é o total que entrou nas oficinas ($45\\%$), faltando aplicar os $25\\%$.',
    ],
    stepByStep: [
      'Calcule os participantes da oficina: $0{,}45 \\times 800 = 360$.',
      'Calcule $25\\%$ ($\\frac{1}{4}$) desse grupo: $360 \\div 4 = 90$ estudantes.',
    ],
    memoryTakeaway: 'Troque $25\\%$ por $\\div 4$ e $50\\%$ por $\\div 2$ sempre que puder — evita erros de conta com vírgula!',
  },
  {
    id: 'mat-q114',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    source: 'Edital 12.2 · Reajuste Salarial Acumulado',
    prompt:
      'O valor da bolsa de iniciação tecnológica de uma escola teve um aumento de $20\\%$ em janeiro e, seis meses depois, sofreu um novo aumento de $25\\%$ sobre o valor de janeiro. Qual foi o aumento percentual TOTAL acumulado no período?',
    options: ['22,5%.', '40%.', '45%.', '48%.', '50%.'],
    correctIndex: 4,
    explanation:
      'Multiplicando os fatores de aumento: $1{,}20 \\times 1{,}25 = 1{,}50$ (equivalente a $150\\%$ do valor inicial). Logo, o aumento acumulado foi de $150\\% - 100\\% = 50\\%$.',
    trapNote: 'NUNCA some aumentos sucessivos ($20\\% + 25\\% = 45\\%$)! Os $25\\%$ de julho incidem sobre os $120\\%$ de janeiro, acrescentando mais $5\\%$ ($0{,}25 \\times 120 = 30$).',
    optionFeedback: [
      'Tirou média simples de $20\\%$ e $25\\%$.',
      'Erro aritmético sem relação com os fatores.',
      'Armadilha nº 1: somou $20\\% + 25\\% = 45\\%$ esquecendo que o 2º aumento incide sobre o valor já aumentado!',
      'Calculou $1{,}20 \\times 1{,}25$ com erro de decimal.',
      'Correto! Supondo R$ 100: $+20\\% \\to 120$; $+25\\%$ de $120$ ($+30$) $\\to 150$. Aumento total $= 50\\%$.',
    ],
    stepByStep: [
      'Teste com base $100$: após $+20\\%$, vira $120$.',
      'Aplique $+25\\%$ ($\\frac{1}{4}$) sobre $120$: $120 \\div 4 = 30 \\Rightarrow 120 + 30 = 150$.',
      'Variação sobre $100$: $+50\\%$.',
    ],
    memoryTakeaway: 'Fingir que o valor inicial é $100$ transforma qualquer conta de aumentos ou descontos sucessivos em conta de cabeça!',
  },
  {
    id: 'mat-q115',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    source: 'Edital 12.2 · Porcentagem e Capacidade Total',
    prompt:
      'Um reservatório de água estava preenchido com $40\\%$ da sua capacidade total. Após receber $360\\text{ litros}$ de água, o medidor passou a indicar $70\\%$ da capacidade total. Quantos litros cabem nesse reservatório completamente cheio?',
    options: ['600 L.', '900 L.', '1.080 L.', '1.200 L.', '1.800 L.'],
    correctIndex: 3,
    explanation:
      'O acréscimo de $360\\text{ L}$ fez o nível subir de $40\\%$ para $70\\%$, o que corresponde a $70\\% - 40\\% = 30\\%$ da capacidade total $C$. Assim: $0{,}30 \\cdot C = 360 \\Rightarrow C = \\frac{360}{0{,}30} = 1.200\\text{ litros}$.',
    trapNote: 'Não iguale $360\\text{ L}$ a $70\\%$ nem a $40\\%$! Os $360\\text{ L}$ correspondem à DIFERENÇA entre os dois marcadores ($30\\%$).',
    optionFeedback: [
      'Dividiu $360$ por $0{,}6$ ou errou a diferença percentual.',
      'Calculou $360 \\div 0{,}40 = 900\\text{ L}$, atribuindo os $360\\text{ L}$ ao marcador inicial ($40\\%$).',
      'Erro multiplicando $360 \\times 3$.',
      'Correto! $70\\% - 40\\% = 30\\%$ equivalem a $360\\text{ L}$; logo $10\\% = 120\\text{ L}$ e $100\\% = 1.200\\text{ L}$.',
      'Atribuiu $360\\text{ L}$ a $20\\%$ ($360 \\times 5$).',
    ],
    stepByStep: [
      'Subtraia os percentuais: $70\\% - 40\\% = 30\\%$.',
      'Se $30\\%$ do total $= 360\\text{ L}$, divida por $3$: $10\\% = 120\\text{ L}$.',
      'Multiplique por $10$: $100\\% = 1.200\\text{ L}$.',
    ],
    memoryTakeaway: 'Em problemas de tanque/nível de bateria, encontre quanto $10\\%$ vale em unidades reais: achar $100\\%$ vira multiplicar por $10$!',
  },
  {
    id: 'mat-q116',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    source: 'Edital 12.2 · Porcentagem Sobre o Restante',
    prompt:
      'De uma bolsa de estudos no valor de R$ 600,00, um estudante gastou $25\\%$ na compra de livros e $20\\%$ DO RESTANTE em cadernos e canetas. Quantos reais ainda sobraram dessa quantia?',
    options: ['R$ 330,00.', 'R$ 360,00.', 'R$ 390,00.', 'R$ 420,00.', 'R$ 450,00.'],
    correctIndex: 1,
    explanation:
      'Gasto em livros: $25\\%$ de $600 =$ R$ 150,00. Resta $600 - 150 =$ R$ 450,00. Em seguida gasta $20\\%$ desse restante ($0{,}20 \\times 450 =$ R$ 90,00). Logo, sobra $450 - 90 =$ R$ 360,00.',
    trapNote: 'Atenção à expressão “DO RESTANTE”! Quem soma $25\\% + 20\\% = 45\\%$ calcula $55\\%$ de $600 =$ R$ 330,00 e cai na letra A!',
    optionFeedback: [
      'Armadilha clássica! Somou $25\\% + 20\\% = 45\\%$ de $600$, ignorando que os $20\\%$ incidem sobre o RESTANTE ($450$).',
      'Correto! $600 \\times 0{,}75 = 450$; depois $450 \\times 0{,}80 =$ R$ 360,00.',
      'Erro ao calcular $20\\%$ de $450$ ($450 - 60$ em vez de $450 - 90$).',
      'Descontou apenas os $30\\%$ finais sem calcular sequencialmente.',
      'R$ 450,00 é quanto restou após os livros, faltando descontar os $20\\%$ em cadernos.',
    ],
    stepByStep: [
      'Após gastar $25\\%$, sobra $75\\%$: $0{,}75 \\times 600 =$ R$ 450,00.',
      'Após gastar $20\\%$ do restante, sobra $80\\%$ dele: $0{,}80 \\times 450 =$ R$ 360,00.',
    ],
    memoryTakeaway: 'Gastar $25\\%$ e depois $20\\%$ DO RESTANTE é manter $75\\%$ e depois $80\\%$: $0{,}75 \\times 0{,}80 = 0{,}60$ ($60\\%$ finais)!',
  },
  {
    id: 'mat-q117',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    source: 'Edital 12.2 · Desconto Compensatório',
    prompt:
      'O preço de um fone de ouvido sofreu um aumento de $25\\%$. Se a loja quiser voltar exatamente ao preço anterior aplicando um desconto sobre o novo valor, de quanto deverá ser esse desconto?',
    options: ['20%.', '22%.', '25%.', '30%.', '33,3%.'],
    correctIndex: 0,
    explanation:
      'Suponha preço inicial R$ 100,00. Com $+25\\%$, passa a R$ 125,00. Para voltar a R$ 100,00, deve-se descontar R$ 25,00 em cima de R$ 125,00: $\\frac{25}{125} = \\frac{1}{5} = 20\\%$.',
    trapNote: 'Nunca responda $25\\%$! Como o preço cresceu para $125$, tirar $25$ de $125$ representa $\\frac{1}{5} = 20\\%$, não $25\\%$.',
    optionFeedback: [
      'Correto! Base $100 \\xrightarrow{+25\\%} 125$; desconto de $25$ sobre $125$ é $\\frac{25}{125} = 20\\%$.',
      'Erro ao estimar a fração $\\frac{25}{125}$.',
      'Armadilha nº 1: tirar $25\\%$ de $125$ dá $93{,}75$, abaixo dos $100$ iniciais!',
      'Exagero no desconto; baixaria o preço abaixo do inicial.',
      'Seria o caso inverso para um desconto de $25\\%$ ($\\frac{25}{75} = 33{,}3\\%$ de aumento).',
    ],
    stepByStep: [
      'Adote o preço base $100$: após $+25\\%$, vira $125$.',
      'Calcule quanto precisa cair em relação a $125$: $\\frac{125 - 100}{125} = \\frac{25}{125} = \\frac{1}{5} = 20\\%$.',
    ],
    memoryTakeaway: 'Para desfazer um aumento de $p\\%$, use a razão $\\frac{\\text{diferença}}{\\text{novo preço}}$ testando com base $100$!',
  },
  {
    id: 'mat-q118',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    source: 'Edital 12.2 · Lucro Sobre o Custo',
    prompt:
      'Um comerciante vendeu uma caixa de som por R$ 1.380,00, obtendo nessa venda um lucro de $15\\%$ sobre o preço de custo. Qual foi o valor do lucro, EM REAIS, obtido nessa venda?',
    options: ['R$ 150,00.', 'R$ 165,00.', 'R$ 180,00.', 'R$ 207,00.', 'R$ 230,00.'],
    correctIndex: 2,
    explanation:
      'O preço de venda (R$ 1.380,00) é igual ao custo mais $15\\%$ do custo, isto é, $1{,}15 \\cdot C = 1.380 \\Rightarrow C = \\frac{1.380}{1{,}15} =$ R$ 1.200,00. Portanto, o lucro foi $1.380 - 1.200 =$ R$ 180,00.',
    trapNote: 'Leia atentamente: “$15\\%$ sobre o preço de CUSTO”! Calcular $15\\%$ da VENDA ($1.380 \\times 0{,}15 = 207$) é a armadilha da letra D!',
    optionFeedback: [
      'Erro aritmético na divisão por $1{,}15$.',
      'Erro na estimativa percentual.',
      'Correto! Custo $= \\frac{1.380}{1{,}15} =$ R$ 1.200,00; lucro $= 1.380 - 1.200 =$ R$ 180,00.',
      'Armadilha clássica! Calculou $15\\%$ sobre a VENDA ($1.380$), quando o enunciado diz $15\\%$ sobre o CUSTO.',
      'Seria se o custo fosse R$ 1.150,00 ($20\\%$ de lucro).',
    ],
    stepByStep: [
      'Equacione Venda $= 1{,}15 \\times \\text{Custo} \\Rightarrow C = \\frac{1.380}{1{,}15} =$ R$ 1.200,00.',
      'Calcule o lucro em reais: $1.380 - 1.200 =$ R$ 180,00.',
    ],
    memoryTakeaway: '“Lucro de $15\\%$ sobre o custo” $\\Rightarrow$ Venda $= 1{,}15 \\times \\text{Custo}$. Ache sempre o custo primeiro dividindo a venda por $1{,}15$!',
  },
  {
    id: 'mat-q119',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    source: 'Edital 12.2 · Porcentagem em Levantamento Estatístico',
    prompt:
      'Em uma pesquisa com $250$ candidatos à ETE Porto Digital, $70$ estudantes responderam estudar apenas por videoaulas e os demais afirmaram priorizar simulados cronometrados. Qual percentual dos candidatos entrevistados prioriza simulados cronometrados?',
    options: ['28%.', '45%.', '60%.', '68%.', '72%.'],
    correctIndex: 4,
    explanation:
      'Os que priorizam simulados são $250 - 70 = 180$ estudantes. Dividindo pelo total: $\\frac{180}{250} = \\frac{18}{25}$. Multiplicando por $4$ para ter denominador $100$: $\\frac{72}{100} = 72\\%$.',
    trapNote: 'Sempre multiplique frações com denominador $25$ por $4$ ($25 \\times 4 = 100$) — calcula a porcentagem exata em 2 segundos!',
    optionFeedback: [
      '$28\\%$ ($\\frac{70}{250}$) é a parcela que estuda APENAS por videoaulas; a pergunta pediu os que priorizam simulados.',
      'Não corresponde a $\\frac{180}{250}$.',
      'Equivaleria a $150$ em $250$.',
      'Erro na conversão de $\\frac{18}{25}$ para porcentagem.',
      'Correto! $250 - 70 = 180$ candidatos; $\\frac{180}{250} = \\frac{18}{25} = \\frac{72}{100} = 72\\%$.',
    ],
    stepByStep: [
      'Subtraia para achar o grupo pedido: $250 - 70 = 180$.',
      'Transforme a fração para base $100$: $\\frac{180}{250} = \\frac{18}{25} = \\frac{18 \\times 4}{25 \\times 4} = \\frac{72}{100} = 72\\%$.',
    ],
    memoryTakeaway: 'Frações de $250$ ou $25$ viram porcentagem na hora multiplicando em cima e embaixo por $4$ ($25 \\times 4 = 100$)!',
  },
  {
    id: 'mat-q120',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    source: 'Edital 12.2 · Porcentagem Aplicada à Tecnologia',
    prompt:
      'Um pendrive de $32\\text{ GB}$ está com $60\\%$ de sua capacidade ocupada por arquivos. Se o usuário apagar exatos $25\\%$ dos arquivos já armazenados, quantos gigabytes ficarão LIVRES no pendrive?',
    options: ['14,4 GB.', '17,6 GB.', '19,2 GB.', '20,8 GB.', '24,0 GB.'],
    correctIndex: 1,
    explanation:
      'Espaço ocupado inicial: $0{,}60 \\times 32 = 19{,}2\\text{ GB}$. Ao apagar $25\\%$, restam ocupados $75\\%$ ($\\frac{3}{4}$) desse espaço: $0{,}75 \\times 19{,}2 = 14{,}4\\text{ GB}$. Logo, o espaço LIVRE será $32 - 14{,}4 = 17{,}6\\text{ GB}$.',
    trapNote: 'Não faça $60\\% - 25\\% = 35\\%$! Os $25\\%$ são sobre o espaço OCUPADO ($60\\%$ de $32$), correspondendo a $15\\%$ do pendrive ($0{,}25 \\times 60\\% = 15\\%$, deixando $45\\%$ ocupado e $55\\%$ livre: $0{,}55 \\times 32 = 17{,}6\\text{ GB}$).',
    optionFeedback: [
      '$14{,}4\\text{ GB}$ é o novo espaço OCUPADO ($45\\%$ de $32$), e o enunciado pediu o espaço LIVRE.',
      'Correto! Ocupado cai para $0{,}75 \\times 60\\% = 45\\%$ do pendrive; livre $= 55\\%$ de $32\\text{ GB} = 17{,}6\\text{ GB}$.',
      '$19{,}2\\text{ GB}$ era o espaço ocupado INICIAL ($60\\%$ de $32$).',
      'Armadilha! Subtraiu $60\\% - 25\\% = 35\\%$ ocupado ($65\\%$ livre $\\times 32 = 20{,}8\\text{ GB}$), erro de base!',
      'Calculou $75\\%$ direto do pendrive inteiro ($0{,}75 \\times 32$).',
    ],
    stepByStep: [
      'Ocupação inicial: $60\\%$ do pendrive.',
      'Ao apagar $25\\%$ do ocupado, resta ocupado $0{,}75 \\times 60\\% = 45\\%$ do pendrive.',
      'Espaço livre $= 100\\% - 45\\% = 55\\%$ de $32\\text{ GB} = 0{,}55 \\times 32 = 17{,}6\\text{ GB}$.',
    ],
    memoryTakeaway: 'Trabalhe nos percentuais antes de multiplicar pelo tamanho em GB ($0{,}75 \\times 60\\% = 45\\%$ ocupado $\\to 55\\%$ livre) — menos contas com vírgula!',
  },
  {
    id: 'mat-q121',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    source: 'Edital 12.2 · Cálculo de Aumento Percentual',
    prompt:
      'O ingresso de uma mostra de tecnologia custava R$ 40,00 no primeiro lote e passou para R$ 52,00 no segundo lote. Qual foi o percentual de aumento do primeiro para o segundo lote?',
    options: ['12%.', '20%.', '23%.', '30%.', '35%.'],
    correctIndex: 3,
    explanation:
      'Aumento em reais: $52 - 40 =$ R$ 12,00. Razão sobre o valor do primeiro lote: $\\frac{12}{40} = \\frac{3}{10} = 0{,}30 = 30\\%$.',
    trapNote: 'R$ 12,00 de aumento não é $12\\%$ (letra A)! Divida sempre pela base inicial (R$ 40,00).',
    optionFeedback: [
      'Armadilha: confundiu R$ 12,00 de aumento em dinheiro com $12\\%$.',
      '$20\\%$ de $40$ é R$ 8,00 (iria para R$ 48,00).',
      'Dividiu $12$ pelo valor final $52$ ($\\frac{12}{52} \\approx 23\\%$) em vez do valor inicial $40$.',
      'Correto! $\\frac{52 - 40}{40} = \\frac{12}{40} = \\frac{3}{10} = 30\\%$.',
      '$35\\%$ de $40$ daria $+14$ (R$ 54,00).',
    ],
    stepByStep: [
      'Ache a diferença: $52 - 40 = 12$.',
      'Divida pelo preço inicial ($40$): $\\frac{12}{40} = \\frac{3}{10} = 30\\%$.',
    ],
    memoryTakeaway: 'Sempre que dividir por $40$, simplifique primeiro por $4$: $\\frac{12}{40} \\div 4 = \\frac{3}{10} = 30\\%$.',
  },
  {
    id: 'mat-q122',
    discipline: 'MAT',
    topicId: 'mat-porcentagem',
    source: 'Edital 12.2 · Aumento Compensatório Após Desconto',
    prompt:
      'Durante uma promoção relâmpago, um curso deu $20\\%$ de desconto em sua assinatura. Terminada a promoção, para retornar exatamente ao preço anterior sem desconto, de quanto deverá ser o aumento aplicado sobre o preço promocional?',
    options: ['16%.', '20%.', '22,5%.', '25%.', '30%.'],
    correctIndex: 3,
    explanation:
      'Tomando base $100$: após desconto de $20\\%$, o preço promocional é $80$. Para retornar a $100$, precisa subir $20$ reais em cima de $80$: $\\frac{20}{80} = \\frac{1}{4} = 25\\%$.',
    trapNote: 'Se der $-20\\%$ e depois subir $+20\\%$, o preço vai apenas para $80 \\times 1{,}20 = 96$ (ainda $4\\%$ abaixo)! Para voltar a $100$, precisa de $+25\\%$.',
    optionFeedback: [
      'Valor sem relação com a razão $\\frac{20}{80}$.',
      'Armadilha clássica: $+20\\%$ sobre $80$ leva a $96$, não a $100$!',
      'Erro aritmético.',
      'Correto! De $80$ para $100$ sobe $20$ em cima de $80$: $\\frac{20}{80} = \\frac{1}{4} = 25\\%$.',
      'Passaria do preço original ($80 \\times 1{,}30 = 104$).',
    ],
    stepByStep: [
      'Adote preço inicial $= 100$. Preço promocional ($-20\\%$) $= 80$.',
      'Calcule a razão de subida sobre $80$: $\\frac{100 - 80}{80} = \\frac{20}{80} = \\frac{1}{4} = 25\\%$.',
    ],
    memoryTakeaway: 'Desfazendo porcentagem: cair $20\\%$ exige subir $25\\%$ para empatar; subir $25\\%$ exige cair $20\\%$ para empatar!',
  },

  // ============================================================================
  // 6. MÉDIAS: ARITMÉTICA, PONDERADA, GEOMÉTRICA E HARMÔNICA (20 questões: mat-q21..24 + mat-q123..138)
  // ============================================================================
  {
    id: 'mat-q21',
    discipline: 'MAT',
    topicId: 'mat-medias',
    source: 'Edital 12.2 · Média Ponderada',
    prompt:
      'Em uma seleção técnica, um candidato obteve nota $8{,}0$ em Língua Portuguesa (peso $3$) e nota $6{,}0$ em Matemática (peso $2$). Qual foi a sua média ponderada final?',
    options: ['6,8.', '7,0.', '7,2.', '7,4.', '7,5.'],
    correctIndex: 2,
    explanation:
      'Média ponderada: $M_p = \\frac{8{,}0 \\times 3 + 6{,}0 \\times 2}{3 + 2} = \\frac{24 + 12}{5} = \\frac{36}{5} = 7{,}2$.',
    trapNote: 'Não divida por $2$ (quantidade de disciplinas)! Divida SEMPRE pela SOMA DOS PESOS ($3 + 2 = 5$).',
    optionFeedback: [
      'Inverteu os pesos ($6{,}0$ com peso $3$ e $8{,}0$ com peso $2$ daria $\\frac{18+16}{5} = 6{,}8$).',
      'Tirou média aritmética simples ($\\frac{8{,}0 + 6{,}0}{2} = 7{,}0$), ignorando que Português tem peso maior!',
      'Correto! $\\frac{8 \\cdot 3 + 6 \\cdot 2}{3 + 2} = \\frac{36}{5} = 7{,}2$.',
      'Erro aritmético na divisão $\\frac{36}{5}$.',
      'Erro ao somar os pesos.',
    ],
    stepByStep: [
      'Multiplique cada nota pelo respectivo peso: $8{,}0 \\times 3 = 24$ e $6{,}0 \\times 2 = 12$.',
      'Some os produtos: $24 + 12 = 36$.',
      'Divida pela soma dos pesos ($3 + 2 = 5$): $\\frac{36}{5} = 7{,}2$.',
    ],
    memoryTakeaway: 'Na média ponderada, o denominador é SEMPRE a soma dos pesos ($3 + 2 = 5$), jamais o número de matérias!',
  },
  {
    id: 'mat-q22',
    discipline: 'MAT',
    topicId: 'mat-medias',
    source: 'Edital 12.2 · Média Geométrica',
    prompt:
      'Um terreno retangular possui lados medindo $9\\text{ m}$ e $16\\text{ m}$. Um segundo terreno, de formato quadrado, possui exatamente a mesma área do retângulo. O lado desse quadrado corresponde à média geométrica de $9$ e $16$, que mede:',
    options: ['11,5 m.', '12,0 m.', '12,5 m.', '13,0 m.', '14,4 m.'],
    correctIndex: 1,
    explanation:
      'A média geométrica de dois números positivos $a$ e $b$ é $M_g = \\sqrt{a \\cdot b}$. Assim, $M_g = \\sqrt{9 \\cdot 16} = \\sqrt{144} = 12{,}0\\text{ m}$ (ou $\\sqrt{9} \\cdot \\sqrt{16} = 3 \\times 4 = 12$).',
    trapNote: 'Não confunda média geométrica ($\\sqrt{9 \\cdot 16} = 12{,}0$) com média aritmética ($\\frac{9+16}{2} = 12{,}5$)!',
    optionFeedback: [
      'Erro ao calcular a raiz de $144$.',
      'Correto! $M_g = \\sqrt{9 \\times 16} = 3 \\times 4 = 12{,}0\\text{ m}$ (área $12^2 = 144\\text{ m}^2 = 9 \\times 16$).',
      'Armadilha! $12{,}5$ é a média ARITMÉTICA $\\frac{9 + 16}{2}$, não a geométrica!',
      'Aproximação incorreta.',
      '$14{,}4$ corresponde ao produto $\\frac{2 \\cdot 9 \\cdot 16}{25}$ ou à média harmônica multiplicada errado.',
    ],
    stepByStep: [
      'Aplique a fórmula da média geométrica de $2$ valores: $M_g = \\sqrt{9 \\times 16}$.',
      'Atalho sem multiplicar: $\\sqrt{9} \\times \\sqrt{16} = 3 \\times 4 = 12{,}0\\text{ m}$.',
    ],
    memoryTakeaway: 'Para $M_g = \\sqrt{a \\cdot b}$ com quadrados perfeitos ($9$ e $16$), tire a raiz de cada um ANTES de multiplicar ($3 \\times 4 = 12$)!',
  },
  {
    id: 'mat-q23',
    discipline: 'MAT',
    topicId: 'mat-medias',
    source: 'Edital 12.2 · Média Harmônica',
    prompt:
      'Um estudante vai de casa até a ETE Porto Digital a uma velocidade constante de $60\\text{ km/h}$ e retorna pelo mesmo caminho a $40\\text{ km/h}$. A velocidade média no trajeto completo de ida e volta (dada pela média harmônica das velocidades) é igual a:',
    options: ['45 km/h.', '46 km/h.', '48 km/h.', '50 km/h.', '52 km/h.'],
    correctIndex: 2,
    explanation:
      'Para dois números $a$ e $b$, a média harmônica vale $M_h = \\frac{2 \\cdot a \\cdot b}{a + b}$. Logo: $M_h = \\frac{2 \\times 60 \\times 40}{60 + 40} = \\frac{4.800}{100} = 48\\text{ km/h}$.',
    trapNote: 'Armadilha mais famosa das provas: responder $50\\text{ km/h}$ ($\\frac{60+40}{2}$) está ERRADO porque ele passa MAIS tempo rodando a $40\\text{ km/h}$!',
    optionFeedback: [
      'Erro na fórmula da média harmônica.',
      'Erro aritmético na divisão por $100$.',
      'Correto! $M_h = \\frac{2 \\cdot 60 \\cdot 40}{60 + 40} = \\frac{4.800}{100} = 48\\text{ km/h}$.',
      'Armadilha clássica! $50\\text{ km/h}$ é a média ARITMÉTICA, válida só se os TEMPOS fossem iguais — em distâncias iguais usa-se média HARMÔNICA!',
      'Valor acima até da média aritmética (impossível pois $M_h < M_g < M_a$).',
    ],
    stepByStep: [
      'Reconheça “mesma distância na ida e na volta” $\\to$ Média Harmônica.',
      'Aplique $M_h = \\frac{2ab}{a + b} = \\frac{2 \\times 60 \\times 40}{60 + 40} = \\frac{4.800}{100} = 48\\text{ km/h}$.',
    ],
    memoryTakeaway: 'Ida e volta pela MESMA DISTÂNCIA com velocidades $v_1$ e $v_2$: sempre $M_h = \\frac{2 v_1 v_2}{v_1 + v_2}$ (e sempre menor que a média aritmética!).',
  },
  {
    id: 'mat-q24',
    discipline: 'MAT',
    topicId: 'mat-medias',
    source: 'Edital 12.2 · Média Aritmética e Soma Total',
    prompt:
      'A média das pontuações de $5$ amigos em um simulado da ETE foi $14{,}0$ pontos. Após a inclusão da nota de um $6^\\circ$ amigo, a média do grupo subiu para $14{,}5$ pontos. Qual foi a pontuação desse $6^\\circ$ amigo?',
    options: ['15,0 pontos.', '16,0 pontos.', '16,5 pontos.', '17,0 pontos.', '18,0 pontos.'],
    correctIndex: 3,
    explanation:
      'Soma das $5$ primeiras notas: $5 \\times 14{,}0 = 70$ pontos. Nova soma das $6$ notas: $6 \\times 14{,}5 = 87$ pontos. Logo, a nota do $6^\\circ$ amigo foi $87 - 70 = 17{,}0$ pontos.',
    trapNote: 'Sempre converta média em SOMA TOTAL ($\\text{Soma} = \\text{Média} \\times \\text{Quantidade}$) antes de adicionar ou retirar pessoas!',
    optionFeedback: [
      'Apenas estimou um pouco acima de $14{,}5$, o que daria média menor que $14{,}5$.',
      'Daria média $\\frac{70 + 16}{6} = 14{,}33 \\neq 14{,}5$.',
      'Daria média $\\frac{70 + 16{,}5}{6} = 14{,}42 \\neq 14{,}5$.',
      'Correto! Soma antiga $= 5 \\cdot 14 = 70$; soma nova $= 6 \\cdot 14{,}5 = 87$; diferença $= 17{,}0$ pontos.',
      'Daria média $\\frac{70 + 18}{6} = 14{,}67 \\neq 14{,}5$.',
    ],
    stepByStep: [
      'Calcule a soma inicial ($5$ amigos): $5 \\times 14{,}0 = 70$.',
      'Calcule a nova soma ($6$ amigos): $6 \\times 14{,}5 = 87$.',
      'Subtraia para achar o novo valor: $87 - 70 = 17{,}0$ pontos.',
    ],
    memoryTakeaway: 'Atalho: para subir a média de $6$ pessoas em $+0{,}5$, o $6^\\circ$ amigo precisa trazer os $14{,}0$ dele mais $6 \\times 0{,}5 = +3{,}0$ extras $\\Rightarrow 17{,}0$!',
  },
  {
    id: 'mat-q123',
    discipline: 'MAT',
    topicId: 'mat-medias',
    source: 'Edital 12.2 · Média Aritmética Simples',
    prompt:
      'Um estudante obteve as seguintes cinco notas nas atividades preparatórias de Matemática: $7{,}0$; $8{,}5$; $6{,}0$; $9{,}0$ e $7{,}5$. Qual é a média aritmética simples dessas cinco notas?',
    options: ['7,6.', '7,8.', '8,0.', '8,2.', '8,5.'],
    correctIndex: 0,
    explanation:
      'Somando os $5$ valores: $7{,}0 + 8{,}5 + 6{,}0 + 9{,}0 + 7{,}5 = 38{,}0$. Dividindo pela quantidade de notas ($5$): $\\frac{38{,}0}{5} = 7{,}6$.',
    trapNote: 'Atalho: para dividir por $5$, multiplique por $2$ e volte uma casa decimal ($38 \\times 2 = 76 \\to 7{,}6$)!',
    optionFeedback: [
      'Correto! Soma $= 38{,}0$; $\\frac{38{,}0}{5} = 7{,}6$.',
      'Somou errado dando $39{,}0 / 5$.',
      'Seria se a soma fosse $40{,}0$.',
      'Somou $41{,}0 / 5$.',
      'Pegou uma das notas ($8{,}5$) ou errou a divisão.',
    ],
    stepByStep: [
      'Agrupe pares fáceis ao somar: $(8{,}5 + 7{,}5) + (7{,}0 + 9{,}0) + 6{,}0 = 16 + 16 + 6 = 38{,}0$.',
      'Divida por $5$: $\\frac{38{,}0}{5} = 7{,}6$.',
    ],
    memoryTakeaway: 'Ao somar decimais com $.5$, junte os pares terminados em $.5$ primeiro ($8{,}5 + 7{,}5 = 16$) para eliminar vírgulas rápido!',
  },
  {
    id: 'mat-q124',
    discipline: 'MAT',
    topicId: 'mat-medias',
    source: 'Edital 12.2 · Média Geométrica de Três Termos',
    prompt:
      'Calcule a média geométrica dos três números positivos $2$, $6$ e $18$.',
    options: ['4.', '5.', '6.', '7,6.', '8,67.'],
    correctIndex: 2,
    explanation:
      'Para $n = 3$ valores, a média geométrica é a raiz CÚBICA do produto dos três: $M_g = \\sqrt[3]{2 \\times 6 \\times 18} = \\sqrt[3]{216}$. Como $6^3 = 6 \\times 6 \\times 6 = 216$, temos $M_g = 6$.',
    trapNote: 'Não use raiz quadrada para $3$ termos! Média geométrica de $n$ números usa raiz de índice $n$ ($\\sqrt[3]{\\text{produto}}$).',
    optionFeedback: [
      '$4^3 = 64 \\neq 216$.',
      '$5^3 = 125 \\neq 216$.',
      'Correto! Note que em P.G. ($2, 6, 18$), $2 \\times 18 = 6^2$, logo $\\sqrt[3]{6^3} = 6$.',
      'Estimativa sem relação com $\\sqrt[3]{216}$.',
      '$8{,}67$ é a média ARITMÉTICA ($\\frac{2 + 6 + 18}{3} = \\frac{26}{3} \\approx 8{,}67$).',
    ],
    stepByStep: [
      'Multiplique ou fatore os três números: $2 \\times 6 \\times 18 = 2 \\times 6 \\times (2 \\times 9) = 6 \\times 36 = 6^3 = 216$.',
      'Extraia a raiz cúbica: $\\sqrt[3]{216} = 6$.',
    ],
    memoryTakeaway: 'Média geométrica de $3$ números $= \\sqrt[3]{a \\cdot b \\cdot c}$. Dica: fatore em primos ou potências antes de multiplicar tudo!',
  },
  {
    id: 'mat-q125',
    discipline: 'MAT',
    topicId: 'mat-medias',
    source: 'Edital 12.2 · Nota Necessária para Média',
    prompt:
      'Para alcançar aprovação direta em uma disciplina, Ana precisa de média aritmética exatamente igual a $7{,}0$ nas $4$ avaliações do bimestre. Nas três primeiras avaliações, ela tirou $6{,}5$; $7{,}0$ e $5{,}5$. Qual nota mínima Ana precisa tirar na $4^\\text{a}$ avaliação?',
    options: ['7,0.', '7,5.', '8,0.', '8,5.', '9,0.'],
    correctIndex: 4,
    explanation:
      'Para ter média $7{,}0$ em $4$ provas, a SOMA total das $4$ notas precisa ser $4 \\times 7{,}0 = 28{,}0$ pontos. Como já somou $6{,}5 + 7{,}0 + 5{,}5 = 19{,}0$, falta tirar $28{,}0 - 19{,}0 = 9{,}0$ na última prova.',
    trapNote: 'Não ache a média das 3 primeiras para depois fazer a média com a 4ª ($\\frac{M_3 + x}{2} = 7$ — ERRADO porque $M_3$ vale por $3$ provas, não $1$!).',
    optionFeedback: [
      'Com $7{,}0$, sua soma seria $26{,}0 \\div 4 = 6{,}5 < 7{,}0$.',
      'Com $7{,}5$, sua soma seria $26{,}5 \\div 4 = 6{,}625 < 7{,}0$.',
      'Daria média de $\\frac{19 + 8}{4} = 6{,}75 < 7{,}0$.',
      'Daria média de $\\frac{19 + 8{,}5}{4} = 6{,}875 < 7{,}0$.',
      'Correto! Meta de soma $= 4 \\times 7{,}0 = 28{,}0$; já tem $19{,}0$; falta $28{,}0 - 19{,}0 = 9{,}0$.',
    ],
    stepByStep: [
      'Meta de soma nas $4$ provas: $4 \\times 7{,}0 = 28{,}0$.',
      'Soma atual das $3$ provas: $6{,}5 + 5{,}5 + 7{,}0 = 19{,}0$.',
      'Nota necessária na $4^\\text{a}$ prova: $28{,}0 - 19{,}0 = 9{,}0$.',
    ],
    memoryTakeaway: 'Atalho do desvio em relação à meta $7{,}0$: tirou $-0{,}5$, $0$ e $-1{,}5$ (déficit de $-2{,}0$). Para zerar na $4^\\text{a}$ prova precisa tirar $7{,}0 + 2{,}0 = 9{,}0$!',
  },
  {
    id: 'mat-q126',
    discipline: 'MAT',
    topicId: 'mat-medias',
    source: 'Edital 12.2 · Média Harmônica de Taxas',
    prompt:
      'Duas impressoras 3D produzem o MESMO lote de peças cada uma (mesma quantidade produzida pela A e pela B). A impressora A trabalha a $30\\text{ peças/hora}$ e a B a $60\\text{ peças/hora}$. Qual é a taxa média harmônica do conjunto nessa tarefa ($M_h = \\frac{2ab}{a+b}$)?',
    options: ['35 peças/h.', '40 peças/h.', '45 peças/h.', '48 peças/h.', '50 peças/h.'],
    correctIndex: 1,
    explanation:
      'Aplicando a média harmônica de $a = 30$ e $b = 60$: $M_h = \\frac{2 \\times 30 \\times 60}{30 + 60} = \\frac{3.600}{90} = 40$ peças por hora.',
    trapNote: 'Não responda $45$ (média aritmética)! A impressora lenta ($30$) fica o DOBRO do tempo ligada para fazer as mesmas peças.',
    optionFeedback: [
      'Erro aritmético na fórmula.',
      'Correto! $M_h = \\frac{2 \\times 30 \\times 60}{30 + 60} = \\frac{3.600}{90} = 40\\text{ peças/h}$.',
      'Armadilha clássica: $45$ é a média ARITMÉTICA ($\\frac{30+60}{2}$), não a harmônica!',
      'Confundiu com a média harmônica de $40$ e $60$.',
      'Seria maior que a média aritmética, o que é impossível.',
    ],
    stepByStep: [
      'Escreva $M_h = \\frac{2 \\cdot 30 \\cdot 60}{30 + 60}$.',
      'Simplifique: $\\frac{3.600}{90} = 40\\text{ peças/h}$.',
    ],
    memoryTakeaway: 'Sempre que duas taxas diferentes ($a$ e $b$) cumprem QUANTIDADES IGUAIS (mesma distância ou mesmo lote), a taxa média é a HARMÔNICA!',
  },
  {
    id: 'mat-q127',
    discipline: 'MAT',
    topicId: 'mat-medias',
    source: 'Edital 12.2 · Média Harmônica de Três Valores',
    prompt:
      'Qual é a média harmônica dos números $2$, $3$ e $6$?',
    options: ['3.', '3,3.', '3,5.', '3,67.', '4.'],
    correctIndex: 0,
    explanation:
      'Para $n$ termos, $M_h = \\frac{n}{\\frac{1}{x_1} + \\frac{1}{x_2} + \\dots + \\frac{1}{x_n}}$. Logo: $M_h = \\frac{3}{\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6}} = \\frac{3}{\\frac{3 + 2 + 1}{6}} = \\frac{3}{\\frac{6}{6}} = \\frac{3}{1} = 3$.',
    trapNote: 'Não aplique $\\frac{2ab}{a+b}$ para $3$ números! A fórmula geral para $n$ números é dividir $n$ pela soma dos inversos ($\\frac{1}{x_i}$).',
    optionFeedback: [
      'Correto! Soma dos inversos $= \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = 1$; então $M_h = \\frac{3}{1} = 3$.',
      'Valor próximo da média geométrica ($\\sqrt[3]{36} \\approx 3{,}3$), não da harmônica.',
      'Média entre $3$ e $4$.',
      '$3{,}67$ é a média ARITMÉTICA ($\\frac{2+3+6}{3} = \\frac{11}{3}$).',
      'Valor superior à média aritmética ($3{,}67$), impossível!',
    ],
    stepByStep: [
      'Some os inversos: $\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = \\frac{3 + 2 + 1}{6} = 1$.',
      'Divida a quantidade de elementos ($3$) pela soma dos inversos ($1$): $M_h = \\frac{3}{1} = 3$.',
    ],
    memoryTakeaway: 'Média Harmônica geral ($3$ ou mais termos): $M_h = \\frac{\\text{quantidade de valores}}{\\text{soma dos inversos}}$. Tire o MMC só dos denominadores!',
  },
  {
    id: 'mat-q128',
    discipline: 'MAT',
    topicId: 'mat-medias',
    source: 'Edital 12.2 · Média de Dois Grupos (Ponderada)',
    prompt:
      'Em um simulado, um grupo de $12$ estudantes obteve média $6{,}0$, enquanto outro grupo de $8$ estudantes obteve média $8{,}5$. Reunindo todos os $20$ estudantes em uma única lista, qual é a média aritmética geral da turma?',
    options: ['6,5.', '6,8.', '6,9.', '7,0.', '7,25.'],
    correctIndex: 3,
    explanation:
      'Soma do 1º grupo: $12 \\times 6{,}0 = 72$. Soma do 2º grupo: $8 \\times 8{,}5 = 68$. Soma total dos $20$ alunos: $72 + 68 = 140$. Média geral: $\\frac{140}{20} = 7{,}0$.',
    trapNote: 'Não tire a média simples das duas médias ($\\frac{6{,}0 + 8{,}5}{2} = 7{,}25$ — letra E)! O primeiro grupo tem MAIS gente ($12$ vs $8$), puxando a média para baixo de $7{,}25$.',
    optionFeedback: [
      'Erro aritmético ao somar as notas dos dois grupos.',
      'Errou o peso dos grupos.',
      'Erro ao dividir por $20$.',
      'Correto! $(12 \\cdot 6{,}0 + 8 \\cdot 8{,}5) \\div 20 = \\frac{72 + 68}{20} = \\frac{140}{20} = 7{,}0$.',
      'Armadilha clássica! $7{,}25$ seria válido apenas se os dois grupos tivessem a MESMA quantidade de estudantes.',
    ],
    stepByStep: [
      'Soma do Grupo 1: $12 \\times 6{,}0 = 72$.',
      'Soma do Grupo 2: $8 \\times 8{,}5 = 68$.',
      'Média dos $20$ estudantes: $\\frac{72 + 68}{20} = \\frac{140}{20} = 7{,}0$.',
    ],
    memoryTakeaway: 'Juntando dois grupos de tamanhos diferentes ($n_1$ e $n_2$), a média geral é sempre a MÉDIA PONDERADA usando os tamanhos como pesos!',
  },
  {
    id: 'mat-q129',
    discipline: 'MAT',
    topicId: 'mat-medias',
    source: 'Edital 12.2 · Média Salarial Ponderada',
    prompt:
      'Uma startup do Porto Digital conta com $10$ colaboradores: $5$ estagiários que recebem R$ 2.400,00 cada, $3$ programadores júnior que recebem R$ 4.000,00 cada e $2$ programadores plenos que recebem R$ 7.000,00 cada. Qual é o salário médio mensal desses $10$ profissionais?',
    options: ['R$ 3.200,00.', 'R$ 3.500,00.', 'R$ 3.800,00.', 'R$ 4.000,00.', 'R$ 4.466,00.'],
    correctIndex: 2,
    explanation:
      'Folha mensal: $5 \\times 2.400 + 3 \\times 4.000 + 2 \\times 7.000 = 12.000 + 12.000 + 14.000 =$ R$ 38.000,00. Dividindo pelos $10$ colaboradores: $\\frac{38.000}{10} =$ R$ 3.800,00.',
    trapNote: 'Não divida a soma dos 3 salários por $3$ ($4.466$)! Existem $5$ estagiários contra apenas $2$ plenos; divida pela soma das pessoas ($10$).',
    optionFeedback: [
      'Erro aritmético na folha salarial.',
      'Errou ao multiplicar uma das faixas.',
      'Correto! Folha total R$ 38.000,00 dividida por $10$ colaboradores = R$ 3.800,00.',
      'Tomou apenas o salário da faixa intermediária sem ponderar.',
      'Armadilha: tirou média simples dos $3$ cargos ($\\div 3$) ignorando quantos profissionais há em cada cargo.',
    ],
    stepByStep: [
      'Multiplique salário $\\times$ pessoas: $12.000 + 12.000 + 14.000 = 38.000$.',
      'Divida pelo total de profissionais ($5 + 3 + 2 = 10$): $\\frac{38.000}{10} =$ R$ 3.800,00.',
    ],
    memoryTakeaway: 'Em folha salarial ou tabelas de frequência, o peso é sempre o NÚMERO DE PESSOAS em cada categoria.',
  },
  {
    id: 'mat-q130',
    discipline: 'MAT',
    topicId: 'mat-medias',
    source: 'Edital 12.2 · Média Geométrica Aplicada',
    prompt:
      'Determine a média geométrica entre os comprimentos $3\\text{ cm}$ e $27\\text{ cm}$.',
    options: ['6 cm.', '9 cm.', '12 cm.', '13,5 cm.', '15 cm.'],
    correctIndex: 1,
    explanation:
      'A média geométrica de $a$ e $b$ é $M_g = \\sqrt{a \\cdot b} = \\sqrt{3 \\times 27} = \\sqrt{81} = 9\\text{ cm}$.',
    trapNote: 'Não faça $\\frac{3 + 27}{2} = 15$ (média aritmética — letra E)! Geométrica multiplica e extrai a raiz.',
    optionFeedback: [
      '$6^2 = 36 \\neq 81$.',
      'Correto! $M_g = \\sqrt{3 \\times 27} = \\sqrt{81} = 9\\text{ cm}$.',
      'Valor sem relação com $\\sqrt{81}$.',
      'Erro ao dividir $27$ por $2$.',
      'Armadilha! $15\\text{ cm}$ é a média ARITMÉTICA ($\\frac{3 + 27}{2}$), não a geométrica!',
    ],
    stepByStep: [
      'Multiplique os valores: $3 \\times 27 = 81$.',
      'Extraia a raiz quadrada: $\\sqrt{81} = 9\\text{ cm}$.',
    ],
    memoryTakeaway: 'Média Geométrica de $2$ valores: multiplique os dois e tire a RAIZ QUADRADA ($\\sqrt{3 \\cdot 27} = \\sqrt{81} = 9$).',
  },
  {
    id: 'mat-q131',
    discipline: 'MAT',
    topicId: 'mat-medias',
    source: 'Edital 12.2 · Retirada de Elemento da Média',
    prompt:
      'A média aritmética de $6$ números inteiros é $15$. Ao retirarmos um desses números do conjunto, a média dos $5$ números restantes passa a ser $13$. Qual foi o número retirado?',
    options: ['13.', '14.', '18.', '20.', '25.'],
    correctIndex: 4,
    explanation:
      'Soma dos $6$ números: $6 \\times 15 = 90$. Soma dos $5$ restantes: $5 \\times 13 = 65$. O número retirado é a diferença: $90 - 65 = 25$.',
    trapNote: 'Use sempre o truque da soma ($\\text{Soma} = n \\cdot \\text{Média}$): nunca tente adivinhar os $6$ números individuais!',
    optionFeedback: [
      'Confundiu o número retirado com a nova média ($13$).',
      'Pegou a média entre $13$ e $15$ ($14$).',
      'Subtraiu $15$ de $33$ sem calcular as duas somas totais.',
      'Erro aritmético em $90 - 65$.',
      'Correto! Soma de $6 = 90$; soma de $5 = 65$; retirado $= 90 - 65 = 25$.',
    ],
    stepByStep: [
      'Soma inicial: $6 \\times 15 = 90$.',
      'Soma final sem o elemento: $5 \\times 13 = 65$.',
      'Elemento retirado: $90 - 65 = 25$.',
    ],
    memoryTakeaway: 'Sempre que um problema tirar ou colocar um número alterando a média, ache Soma Nova $-$ Soma Antiga (ou vice-versa)!',
  },
  {
    id: 'mat-q132',
    discipline: 'MAT',
    topicId: 'mat-medias',
    source: 'Edital 12.2 · Relação Entre as Médias',
    prompt:
      'Para quaisquer dois números reais positivos e DISTINTOS $a$ e $b$, considere sua média aritmética ($M_a$), média geométrica ($M_g$) e média harmônica ($M_h$). Qual relação de ordem é SEMPRE verdadeira?',
    options: [
      '$M_h < M_g < M_a$',
      '$M_a < M_g < M_h$',
      '$M_g < M_h < M_a$',
      '$M_h < M_a < M_g$',
      '$M_a = M_g = M_h$',
    ],
    correctIndex: 0,
    explanation:
      'Teste com um exemplo simples, como $a = 4$ e $b = 16$: $M_a = \\frac{4+16}{2} = 10$; $M_g = \\sqrt{4 \\cdot 16} = 8$; $M_h = \\frac{2 \\cdot 4 \\cdot 16}{4 + 16} = \\frac{128}{20} = 6{,}4$. Portanto, $M_h < M_g < M_a$ sempre que $a \\neq b$ (e só são iguais quando $a = b$).',
    trapNote: 'Se esquecer na prova, basta testar dois quadrados perfeitos fáceis como $4$ e $16$ (ou $1$ e $4$) para verificar na hora!',
    optionFeedback: [
      'Correto! Para positivos distintos vale sempre a desigualdade clássica: $M_h < M_g < M_a$.',
      'Inverteu completamente a ordem; a aritmética é sempre a MAIOR das três.',
      'A harmônica é sempre menor que a geométrica para $a \\neq b$.',
      'A aritmética nunca fica abaixo da geométrica.',
      'A igualdade $M_a = M_g = M_h$ só ocorre quando $a = b$, e o enunciado garantiu números DISTINTOS.',
    ],
    stepByStep: [
      'Escolha um par prático ($a = 1$ e $b = 4$): $M_a = \\frac{1+4}{2} = 2{,}5$.',
      'Calcule $M_g = \\sqrt{1 \\cdot 4} = 2$ e $M_h = \\frac{2 \\cdot 1 \\cdot 4}{1 + 4} = \\frac{8}{5} = 1{,}6$.',
      'Compare: $1{,}6 < 2 < 2{,}5 \\Rightarrow M_h < M_g < M_a$.',
    ],
    memoryTakeaway: 'Ordem alfabética ajuda a lembrar (de trás para frente): **H**armônica $<$ **G**eométrica $<$ **A**ritmética!',
  },
  {
    id: 'mat-q133',
    discipline: 'MAT',
    topicId: 'mat-medias',
    source: 'Edital 12.2 · Média Ponderada com Três Pesos',
    prompt:
      'No sistema de avaliação de um curso, a nota final é a média ponderada de Trabalhos (peso $2$), Provas (peso $5$) e Simulado (peso $3$). Um estudante tirou $9{,}0$ nos Trabalhos, $7{,}0$ nas Provas e $6{,}0$ no Simulado. Qual foi sua média final?',
    options: ['6,8.', '7,0.', '7,1.', '7,3.', '7,5.'],
    correctIndex: 2,
    explanation:
      'Multiplique notas por pesos: $9{,}0 \\times 2 = 18$; $7{,}0 \\times 5 = 35$; $6{,}0 \\times 3 = 18$. Soma dos produtos: $18 + 35 + 18 = 71$. Soma dos pesos: $2 + 5 + 3 = 10$. Média: $\\frac{71}{10} = 7{,}1$.',
    trapNote: 'Não esqueça de dividir por $10$ (soma dos pesos $2+5+3$), nunca por $3$!',
    optionFeedback: [
      'Erro ao somar os produtos ponderados.',
      'Arredondou errado ou trocou peso entre Trabalhos e Simulado.',
      'Correto! $\\frac{2(9) + 5(7) + 3(6)}{2 + 5 + 3} = \\frac{71}{10} = 7{,}1$.',
      '$7{,}33$ seria a média ARITMÉTICA simples ($\\frac{9+7+6}{3}$), ignorando os pesos!',
      'Erro aritmético na soma.',
    ],
    stepByStep: [
      'Calcule numerador: $(2 \\cdot 9{,}0) + (5 \\cdot 7{,}0) + (3 \\cdot 6{,}0) = 18 + 35 + 18 = 71$.',
      'Some os pesos: $2 + 5 + 3 = 10$.',
      'Divida: $\\frac{71}{10} = 7{,}1$.',
    ],
    memoryTakeaway: 'Verifique se os pesos somam $10$: quando somam $10$, basta calcular a soma ponderada e voltar uma casa decimal ($71 \\to 7{,}1$)!',
  },
  {
    id: 'mat-q134',
    discipline: 'MAT',
    topicId: 'mat-medias',
    source: 'Edital 12.2 · Média Geométrica em Crescimento',
    prompt:
      'Ao longo de três meses, um projeto escolar multiplicou seu alcance mensal pelos fatores $4$, $10$ e $25$, respectivamente. Qual é a média geométrica desses três fatores de crescimento?',
    options: ['6.', '8.', '9.', '10.', '13.'],
    correctIndex: 3,
    explanation:
      'Para $3$ fatores positivos, $M_g = \\sqrt[3]{4 \\times 10 \\times 25}$. Observe que $4 \\times 25 = 100$, e $100 \\times 10 = 1.000$. Portanto, $M_g = \\sqrt[3]{1.000} = 10$.',
    trapNote: 'Não tire a média aritmética ($\\frac{4 + 10 + 25}{3} = 13$ — letra E)! Taxas/fatores multiplicativos acumulados têm média GEOMÉTRICA.',
    optionFeedback: [
      '$6^3 = 216 \\neq 1.000$.',
      '$8^3 = 512 \\neq 1.000$.',
      '$9^3 = 729 \\neq 1.000$.',
      'Correto! $\\sqrt[3]{4 \\times 10 \\times 25} = \\sqrt[3]{1.000} = 10$.',
      'Armadilha! $13$ é a média ARITMÉTICA ($\\frac{39}{3}$), não a geométrica!',
    ],
    stepByStep: [
      'Multiplique agrupando $4 \\times 25 = 100$: $100 \\times 10 = 1.000$.',
      'Extraia a raiz cúbica: $\\sqrt[3]{1.000} = 10$.',
    ],
    memoryTakeaway: 'Procurando $\\sqrt[3]{a \\cdot b \\cdot c}$? Tente formar potências de $10$ primeiro ($4 \\times 25 = 100$)!',
  },
  {
    id: 'mat-q135',
    discipline: 'MAT',
    topicId: 'mat-medias',
    source: 'Edital 12.2 · Descobrindo Termo Pela Média Geométrica',
    prompt:
      'A média geométrica entre dois números positivos é $6$. Sabendo que um desses números é igual a $9$, qual é o outro número?',
    options: ['3.', '4.', '6.', '8.', '9.'],
    correctIndex: 1,
    explanation:
      'Pela definição de média geométrica: $\\sqrt{9 \\cdot x} = 6$. Elevando ambos os lados ao quadrado: $9x = 36 \\Rightarrow x = \\frac{36}{9} = 4$.',
    trapNote: 'Não faça $\\frac{9 + x}{2} = 6 \\Rightarrow x = 3$ (letra A)! Isso seria se fosse média aritmética.',
    optionFeedback: [
      'Armadilha! $x = 3$ satisfaz média ARITMÉTICA ($\\frac{9+3}{2} = 6$), não geométrica ($\\sqrt{27} \\neq 6$).',
      'Correto! $\\sqrt{9 \\cdot 4} = \\sqrt{36} = 6$.',
      'Com $x = 6$, $\\sqrt{9 \\cdot 6} = \\sqrt{54} \\neq 6$.',
      'Com $x = 8$, $\\sqrt{72} \\neq 6$.',
      'Com $x = 9$, $\\sqrt{81} = 9 \\neq 6$.',
    ],
    stepByStep: [
      'Escreva a equação: $\\sqrt{9 \\cdot x} = 6$.',
      'Eleve ao quadrado: $9x = 36 \\Rightarrow x = 4$.',
    ],
    memoryTakeaway: 'Para dois números com média geométrica $M_g$, o produto dos dois vale sempre $M_g^2$ ($a \\cdot b = 6^2 = 36$)!',
  },
  {
    id: 'mat-q136',
    discipline: 'MAT',
    topicId: 'mat-medias',
    source: 'Edital 12.2 · Descobrindo Peso em Média Ponderada',
    prompt:
      'Em uma avaliação composta por duas etapas de pesos $2$ e $p$, um candidato tirou nota $5{,}0$ na primeira etapa (peso $2$) e $8{,}0$ na segunda etapa (peso $p$). Sabendo que sua média ponderada final foi exatos $7{,}0$, qual é o valor do peso $p$?',
    options: ['1.', '2.', '3.', '3,5.', '4.'],
    correctIndex: 4,
    explanation:
      'Pela fórmula da média ponderada: $\\frac{5{,}0 \\cdot 2 + 8{,}0 \\cdot p}{2 + p} = 7{,}0 \\Rightarrow 10 + 8p = 7(2 + p) \\Rightarrow 10 + 8p = 14 + 7p \\Rightarrow 8p - 7p = 14 - 10 \\Rightarrow p = 4$.',
    trapNote: 'Não esqueça que a incógnita $p$ aparece TAMBÉM no denominador ($2 + p$)!',
    optionFeedback: [
      'Se $p = 1$, a média seria $\\frac{10 + 8}{3} = 6{,}0 \\neq 7{,}0$.',
      'Se $p = 2$, pesos iguais dariam $\\frac{5 + 8}{2} = 6{,}5 \\neq 7{,}0$.',
      'Se $p = 3$, a média seria $\\frac{10 + 24}{5} = 6{,}8 \\neq 7{,}0$.',
      'Não fecha exatos $7{,}0$.',
      'Correto! $\\frac{10 + 8(4)}{2 + 4} = \\frac{42}{6} = 7{,}0$.',
    ],
    stepByStep: [
      'Monte: $\\frac{10 + 8p}{2 + p} = 7$.',
      'Multiplique em cruz: $10 + 8p = 14 + 7p$.',
      'Isole $p$: $p = 4$.',
    ],
    memoryTakeaway: 'Atalho da balança na média $7{,}0$: nota $5{,}0$ perde $2$ pontos com peso $2$ (déficit $= -4$). Nota $8{,}0$ ganha $+1$ por peso; logo precisa de peso $p = 4$ para equilibrar ($+4$)!',
  },
  {
    id: 'mat-q137',
    discipline: 'MAT',
    topicId: 'mat-medias',
    source: 'Edital 12.2 · Velocidade Média em Trechos Iguais',
    prompt:
      'Uma ciclista percorre a primeira metade de uma avenida a $30\\text{ km/h}$ e a segunda metade (mesma distância) a $20\\text{ km/h}$. Qual foi a sua velocidade média em todo o trajeto?',
    options: ['24 km/h.', '25 km/h.', '26 km/h.', '27,5 km/h.', '28 km/h.'],
    correctIndex: 0,
    explanation:
      'Distâncias iguais com duas velocidades pedem a Média Harmônica: $M_h = \\frac{2 \\times 30 \\times 20}{30 + 20} = \\frac{1.200}{50} = 24\\text{ km/h}$.',
    trapNote: 'Resposta $25\\text{ km/h}$ ($\\frac{30+20}{2}$) é a armadilha certa de errar!',
    optionFeedback: [
      'Correto! $M_h = \\frac{2 \\cdot 30 \\cdot 20}{30 + 20} = \\frac{1.200}{50} = 24\\text{ km/h}$.',
      'Armadilha clássica! $25$ é a média aritmética, mas na parte mais lenta ($20\\text{ km/h}$) a ciclista demorou mais tempo.',
      'Erro aritmético.',
      'Valor acima da média aritmética ($25$), impossível.',
      'Erro na fórmula.',
    ],
    stepByStep: [
      'Mesma distância $\\Rightarrow$ aplique $M_h = \\frac{2ab}{a + b}$.',
      '$M_h = \\frac{2 \\times 30 \\times 20}{30 + 20} = \\frac{1.200}{50} = 24\\text{ km/h}$.',
    ],
    memoryTakeaway: 'Sempre que dividir um percurso em DUAS METADES IGUAIS de distância, ignore o tamanho da rua e aplique $M_h = \\frac{2 v_1 v_2}{v_1 + v_2}$!',
  },
  {
    id: 'mat-q138',
    discipline: 'MAT',
    topicId: 'mat-medias',
    source: 'Edital 12.2 · Inclusão de Novo Membro na Média',
    prompt:
      'A média aritmética das idades de quatro irmãos é $18$ anos. Quando incluímos a idade da mãe desses jovens no cálculo, a média das cinco idades passa a ser $24$ anos. Qual é a idade da mãe?',
    options: ['40 anos.', '42 anos.', '45 anos.', '48 anos.', '54 anos.'],
    correctIndex: 3,
    explanation:
      'Soma das idades dos $4$ irmãos: $4 \\times 18 = 72$ anos. Soma das idades das $5$ pessoas (incluindo a mãe): $5 \\times 24 = 120$ anos. Idade da mãe: $120 - 72 = 48$ anos.',
    trapNote: 'Não multiplique $24$ por $4$: com a mãe, o grupo tem $5$ pessoas ($5 \\times 24 = 120$)!',
    optionFeedback: [
      'Daria média dos $5$ igual a $\\frac{72+40}{5} = 22{,}4$ anos.',
      'Daria média dos $5$ igual a $22{,}8$ anos.',
      'Daria média dos $5$ igual a $23{,}4$ anos.',
      'Correto! $5 \\times 24 - 4 \\times 18 = 120 - 72 = 48$ anos.',
      'Daria média dos $5$ igual a $25{,}2$ anos.',
    ],
    stepByStep: [
      'Soma das idades dos $4$ irmãos: $4 \\times 18 = 72$.',
      'Soma das $5$ idades: $5 \\times 24 = 120$.',
      'Idade da mãe: $120 - 72 = 48$ anos.',
    ],
    memoryTakeaway: 'Lembre de atualizar o número de integrantes ao multiplicar pela nova média ($4$ pessoas $\\to 5$ pessoas)!',
  },
  // =========================================================
  // TÓPICO 7: ÁLGEBRA — POLINÔMIOS, PRODUTOS NOTÁVEIS E FATORAÇÃO (20)
  // =========================================================
  {
    id: 'mat-q25',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    source: 'Edital 12.2 · Polinômios (Valor Numérico)',
    prompt:
      'Considere os polinômios $P(x) = 2x^2 - 3x + 5$ e $Q(x) = x^2 + 2x - 1$. Qual é o valor numérico de $P(3) - Q(2)$?',
    options: ['5.', '7.', '9.', '11.', '21.'],
    correctIndex: 1,
    explanation:
      'Calculando $P(3)$: $2 \\cdot 3^2 - 3 \\cdot 3 + 5 = 18 - 9 + 5 = 14$. Calculando $Q(2)$: $2^2 + 2 \\cdot 2 - 1 = 4 + 4 - 1 = 7$. Logo, $P(3) - Q(2) = 14 - 7 = 7$.',
    trapNote:
      'Substitua $x = 3$ apenas em $P(x)$ e $x = 2$ apenas em $Q(x)$ — nunca subtraia os polinômios antes se os valores de $x$ forem distintos!',
    optionFeedback: [
      'Erro aritmético na avaliação de $P(3)$ ou $Q(2)$.',
      'Correto! $P(3) = 14$ e $Q(2) = 7 \\Rightarrow 14 - 7 = 7$.',
      'Provável erro de sinal em $-3 \\cdot 3$ ou no termo $-1$ de $Q(2)$.',
      'Possivelmente calculou $(P - Q)(2)$ em vez de usar $x = 3$ em $P$ e $x = 2$ em $Q$.',
      'Somou $P(3) + Q(2) = 14 + 7 = 21$ em vez de subtrair.',
    ],
    stepByStep: [
      'Avalie $P(3) = 2(3)^2 - 3(3) + 5 = 18 - 9 + 5 = 14$.',
      'Avalie $Q(2) = (2)^2 + 2(2) - 1 = 4 + 4 - 1 = 7$.',
      'Subtraia os valores: $P(3) - Q(2) = 14 - 7 = 7$.',
    ],
    memoryTakeaway:
      'Quando pedir $P(a) - Q(b)$ com $a \\neq b$, calcule $P(a)$ e $Q(b)$ separados primeiro antes de subtrair!',
  },
  {
    id: 'mat-q26',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    source: 'Edital 12.2 · Produtos Notáveis (Identidade de Soma)',
    prompt: 'Sabendo que $x + y = 10$ e $x \\cdot y = 21$, qual é o valor numérico de $x^2 + y^2$?',
    options: ['42.', '58.', '79.', '100.', '121.'],
    correctIndex: 1,
    explanation:
      'Pelo quadrado da soma de dois termos: $(x + y)^2 = x^2 + 2xy + y^2$. Substituindo $x + y = 10$ e $xy = 21$: $10^2 = x^2 + y^2 + 2(21) \\Rightarrow 100 = x^2 + y^2 + 42 \\Rightarrow x^2 + y^2 = 58$.',
    trapNote:
      'Jamais escreva $(x + y)^2 = x^2 + y^2$ (isso levaria a 100, letra D)! O termo do meio $+ 2xy$ é obrigatório.',
    optionFeedback: [
      '$42$ corresponde apenas ao termo $2xy = 2 \\cdot 21$, faltou subtrair de $100$.',
      'Correto! $(x+y)^2 - 2xy = 100 - 42 = 58$.',
      'Subtraiu apenas $1xy$ ($100 - 21 = 79$) em vez de $2xy$.',
      'Armadilha clássica! Esqueceu o $2xy$ ao assumir $(x+y)^2 = x^2 + y^2 = 100$.',
      'Somou $100 + 21 = 121$ em vez de subtrair $42$.',
    ],
    stepByStep: [
      'Parta da identidade $(x + y)^2 = x^2 + 2xy + y^2$.',
      'Substitua os dados: $10^2 = (x^2 + y^2) + 2 \\cdot 21 \\Rightarrow 100 = (x^2 + y^2) + 42$.',
      'Isole: $x^2 + y^2 = 100 - 42 = 58$.',
    ],
    memoryTakeaway:
      'Sempre que o enunciado der a soma $(x+y)$ e o produto $(xy)$, ele quer que você eleve $(x+y)^2$ e isole $x^2 + y^2 = (x+y)^2 - 2xy$!',
  },
  {
    id: 'mat-q27',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    source: 'Edital 12.2 · Fatoração Algébrica (Simplificação)',
    prompt:
      'Para $x \\neq 3$ e $x \\neq -3$, a fração algébrica $\\dfrac{x^2 - 9}{x^2 - 6x + 9}$ simplifica-se para:',
    options: [
      '$\\dfrac{x + 3}{x - 3}$',
      '$\\dfrac{x - 3}{x + 3}$',
      '$\\dfrac{1}{x - 3}$',
      '$-\\dfrac{3}{2x}$',
      '$x + 3$',
    ],
    correctIndex: 0,
    explanation:
      'Fatorando o numerador (diferença de dois quadrados): $x^2 - 9 = (x - 3)(x + 3)$. Fatorando o denominador (trinômio quadrado perfeito): $x^2 - 6x + 9 = (x - 3)^2$. Cancelando um fator comum $(x - 3)$, resta $\\dfrac{x + 3}{x - 3}$.',
    trapNote:
      'Não corte $x^2$ com $x^2$ nem $9$ com $9$ diretamente! Só se simplifica o que está MULTIPLICANDO após fatorar.',
    optionFeedback: [
      'Correto! $\\frac{(x-3)(x+3)}{(x-3)^2} = \\frac{x+3}{x-3}$.',
      'Inverteu numerador e denominador.',
      'Esqueceu que o fator restante no numerador é $(x + 3)$, não $1$.',
      'Erro grave: tentou cancelar $x^2$ e $9$ em soma antes de fatorar.',
      'Esqueceu que sobra um fator $(x - 3)$ no denominador.',
    ],
    stepByStep: [
      'Fatore o numerador (diferença de quadrados): $x^2 - 3^2 = (x - 3)(x + 3)$.',
      'Fatore o denominador (quadrado da diferença): $x^2 - 2\\cdot 3x + 3^2 = (x - 3)^2 = (x - 3)(x - 3)$.',
      'Divida numerador e denominador por $(x - 3)$: $\\dfrac{x + 3}{x - 3}$.',
    ],
    memoryTakeaway:
      'Antes de cortar qualquer letra numa fração algébrica, FATORIZE tudo em cima e embaixo primeiro!',
  },
  {
    id: 'mat-q28',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    source: 'Edital 12.2 · Fatoração Aplicada ao Cálculo Rápido',
    prompt:
      'Aplicando fatoração por diferença de quadrados, calcule o valor exato da expressão $\\dfrac{105^2 - 95^2}{20}$:',
    options: ['10.', '50.', '100.', '200.', '1.000.'],
    correctIndex: 2,
    explanation:
      'Aplicando $a^2 - b^2 = (a + b)(a - b)$, temos $105^2 - 95^2 = (105 + 95)(105 - 95) = 200 \\times 10 = 2.000$. Dividindo por $20$: $\\dfrac{2.000}{20} = 100$.',
    trapNote:
      'Calcular $105^2$ e $95^2$ na mão gasta tempo precioso dos 60 minutos da prova da ETE e aumenta a chance de errar multiplicação.',
    optionFeedback: [
      '$10$ é apenas a diferença $(105 - 95)$, faltou multiplicar por $(105 + 95) = 200$ e dividir por $20$.',
      'Errou a divisão $\\frac{2.000}{20}$.',
      'Correto! $\\frac{(105+95)(105-95)}{20} = \\frac{200 \\cdot 10}{20} = 100$.',
      '$200$ é $(105 + 95)$; esqueceu de multiplicar por $10$ e dividir por $20$.',
      'Dividiu por $2$ em vez de dividir por $20$.',
    ],
    stepByStep: [
      'Aplique $a^2 - b^2 = (a + b)(a - b)$ no numerador: $(105 + 95)(105 - 95) = 200 \\cdot 10$.',
      'Substitua na fração: $\\dfrac{200 \\cdot 10}{20}$.',
      'Simplifique $\\frac{200}{20} = 10$ e multiplique: $10 \\cdot 10 = 100$.',
    ],
    memoryTakeaway:
      'Viu diferença de quadrados numéricos grandes ($a^2 - b^2$)? Transforme imediatamente em $(a + b) \\cdot (a - b)$!',
  },
  {
    id: 'mat-q139',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    source: 'Edital 12.2 · Valor Numérico com Negativos',
    prompt:
      'Dado o polinômio $P(x) = x^3 - 2x^2 - 5x + 6$, qual é o valor numérico de $P(-2)$?',
    options: ['-8.', '0.', '4.', '12.', '16.'],
    correctIndex: 1,
    explanation:
      'Substituindo $x = -2$ entre parênteses: $P(-2) = (-2)^3 - 2(-2)^2 - 5(-2) + 6 = -8 - 2(4) + 10 + 6 = -8 - 8 + 16 = 0$.',
    trapNote:
      'Atenção dupla nos sinais negativos: $(-2)^3 = -8$ (expoente ímpar mantém negativo), $(-2)^2 = +4$ (expoente par vira positivo) e $-5 \\cdot (-2) = +10$.',
    optionFeedback: [
      'Provavelmente trocou o sinal em $-5(-2)$ deixando $-10$ em vez de $+10$.',
      'Correto! $-8 - 8 + 10 + 6 = 0$ (logo $-2$ é raiz desse polinômio!).',
      'Erro de sinal em $-2(-2)^2$: considerou $+8$ em vez de $-8$.',
      'Erro de sinal múltiplo nos dois primeiros termos.',
      'Somou $8 + 8 + 10 - 10$, errando o sinal de $(-2)^3$.',
    ],
    stepByStep: [
      'Substitua com parênteses: $P(-2) = (-2)^3 - 2(-2)^2 - 5(-2) + 6$.',
      'Calcule cada potência e produto: $(-2)^3 = -8$; $-2(4) = -8$; $-5(-2) = +10$.',
      'Some: $-8 - 8 + 10 + 6 = -16 + 16 = 0$.',
    ],
    memoryTakeaway:
      'Ao substituir número NEGATIVO em polinômio, coloque-o SEMPRE dentro de parênteses antes de elevar às potências!',
  },
  {
    id: 'mat-q140',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    source: 'Edital 12.2 · Operações com Polinômios',
    prompt:
      'Se $A(x) = 3x^2 - 4x + 7$ e $B(x) = x^2 + 5x - 2$, qual polinômio representa $A(x) - 2 \\cdot B(x)$?',
    options: [
      '$x^2 - 14x + 11$',
      '$x^2 + 6x + 3$',
      '$x^2 - 14x + 3$',
      '$5x^2 + 6x + 3$',
      '$x^2 + x + 9$',
    ],
    correctIndex: 0,
    explanation:
      'Primeiro distribua $-2$ em todos os termos de $B(x)$: $-2B(x) = -2x^2 - 10x + 4$. Agora some termo a termo com $A(x)$: $(3x^2 - 2x^2) + (-4x - 10x) + (7 + 4) = x^2 - 14x + 11$.',
    trapNote:
      'Quando subtrair um polinômio multiplicado por $-2$, o último termo $-2 \\cdot (-2)$ vira $+4$ (sinal positivo)!',
    optionFeedback: [
      'Correto! $(3-2)x^2 + (-4-10)x + (7+4) = x^2 - 14x + 11$.',
      'Esqueceu de inverter o sinal de $+5x$ e $-2$ em $B(x)$ após o sinal de menos.',
      'Fez $7 - 4 = 3$ em vez de $7 - 2(-2) = 7 + 4 = 11$.',
      'Somou $3x^2 + 2x^2 = 5x^2$ ignorando o sinal negativo de $-2B(x)$.',
      'Não multiplicou os termos de $B(x)$ por $2$.',
    ],
    stepByStep: [
      'Calcule $-2B(x) = -2(x^2 + 5x - 2) = -2x^2 - 10x + 4$.',
      'Agrupe os termos semelhantes com $A(x) = 3x^2 - 4x + 7$:',
      '$(3 - 2)x^2 + (-4 - 10)x + (7 + 4) = x^2 - 14x + 11$.',
    ],
    memoryTakeaway:
      'Em $A - 2B$, distribua o $-2$ inteiro sobre TODOS os sinais de $B$ antes de somar os termos semelhantes!',
  },
  {
    id: 'mat-q141',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    source: 'Edital 12.2 · Quadrado da Diferença',
    prompt:
      'Desenvolvendo e simplificando a expressão algébrica $(3a - 2b)^2 - (3a + 2b)^2$, obtém-se:',
    options: ['$-24ab$', '$24ab$', '$18a^2 + 8b^2$', '$-8b^2$', '$0$'],
    correctIndex: 0,
    explanation:
      '$(3a - 2b)^2 = 9a^2 - 12ab + 4b^2$ e $(3a + 2b)^2 = 9a^2 + 12ab + 4b^2$. Subtraindo: $(9a^2 - 12ab + 4b^2) - (9a^2 + 12ab + 4b^2) = -12ab - 12ab = -24ab$.',
    trapNote:
      'Dica alternativa: use diferença de quadrados $X^2 - Y^2 = (X+Y)(X-Y)$, onde $X = 3a-2b$ e $Y = 3a+2b$: $(6a)(-4b) = -24ab$!',
    optionFeedback: [
      'Correto! Os termos quadráticos $9a^2$ e $4b^2$ se anulam, sobrando $-12ab - 12ab = -24ab$.',
      'Inverteu a ordem da subtração ou errou o sinal dos termos do meio.',
      'Somou os dois quadrados em vez de subtrair (isso daria $2(9a^2 + 4b^2)$).',
      'Esqueceu os termos centrais $\\pm 2 \\cdot 3a \\cdot 2b = \\pm 12ab$.',
      'Assumiu que $(3a-2b)^2$ e $(3a+2b)^2$ eram iguais.',
    ],
    stepByStep: [
      'Expanda $(3a - 2b)^2 = 9a^2 - 12ab + 4b^2$.',
      'Expanda $(3a + 2b)^2 = 9a^2 + 12ab + 4b^2$.',
      'Subtraia aplicando parênteses no segundo: $9a^2 - 12ab + 4b^2 - 9a^2 - 12ab - 4b^2 = -24ab$.',
    ],
    memoryTakeaway:
      'Lembre da identidade de Legendre: $(A + B)^2 - (A - B)^2 = 4AB$, e invertendo a ordem dá $-4AB$ (aqui $-4(3a)(2b) = -24ab$)!',
  },
  {
    id: 'mat-q142',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    source: 'Edital 12.2 · Identidade com Diferença e Produto',
    prompt: 'Se dois números reais $x$ e $y$ satisfazem $x - y = 6$ e $x \\cdot y = 7$, quanto vale $x^2 + y^2$?',
    options: ['22.', '36.', '43.', '50.', '52.'],
    correctIndex: 3,
    explanation:
      'Pelo quadrado da diferença: $(x - y)^2 = x^2 - 2xy + y^2$. Substituindo os valores: $6^2 = (x^2 + y^2) - 2(7) \\Rightarrow 36 = (x^2 + y^2) - 14 \\Rightarrow x^2 + y^2 = 36 + 14 = 50$.',
    trapNote:
      'Aqui temos DIFERENÇA ($x - y$), então o termo do meio tem sinal negativo ($-2xy$), que passa para o outro lado SOMANDO!',
    optionFeedback: [
      'Armadilha! Fez $36 - 14 = 22$ em vez de passar o $-14$ somando.',
      'Esqueceu completamente do termo $-2xy$.',
      'Somou apenas $+xy$ ($36 + 7 = 43$) em vez de $+2xy$.',
      'Correto! $(x-y)^2 + 2xy = 36 + 14 = 50$.',
      'Erro aritmético na adição.',
    ],
    stepByStep: [
      'Use $(x - y)^2 = x^2 - 2xy + y^2$.',
      'Substitua $x - y = 6$ e $xy = 7$: $36 = x^2 + y^2 - 14$.',
      'Passe $-14$ somando: $x^2 + y^2 = 36 + 14 = 50$.',
    ],
    memoryTakeaway:
      '$x^2 + y^2 = (x + y)^2 - 2xy$ (se der a soma) OU $x^2 + y^2 = (x - y)^2 + 2xy$ (se der a diferença)!',
  },
  {
    id: 'mat-q143',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    source: 'Edital 12.2 · Produto da Soma pela Diferença',
    prompt:
      'Simplificando a expressão algébrica $(x + 5)(x - 5) - (x - 3)^2 - 6x$, obtém-se sempre um número constante igual a:',
    options: ['-34.', '-16.', '16.', '34.', '$-2x - 16$.'],
    correctIndex: 0,
    explanation:
      'Desenvolvendo passo a passo: $(x + 5)(x - 5) = x^2 - 25$ e $(x - 3)^2 = x^2 - 6x + 9$. Aplicando o sinal negativo aos parênteses: $(x^2 - 25) - (x^2 - 6x + 9) - 6x = x^2 - 25 - x^2 + 6x - 9 - 6x = -34$.',
    trapNote:
      'Proteja sempre $(x - 3)^2$ dentro de parênteses quando houver sinal de menos antes; assim $-(-6x)$ vira $+6x$ e cancela o $-6x$ final!',
    optionFeedback: [
      'Correto! Os termos $x^2 - x^2$ e $+6x - 6x$ se cancelam, restando $-25 - 9 = -34$.',
      'Errou o sinal de $+9$ dentro de $-(x^2 - 6x + 9)$, fazendo $-25 + 9 = -16$.',
      'Errou os sinais ao subtrair os parênteses.',
      'Trocou o sinal do resultado final.',
      'Esqueceu de inverter o sinal de $-6x$ ao tirar os parênteses.',
    ],
    stepByStep: [
      'Expanda o produto da soma pela diferença: $(x + 5)(x - 5) = x^2 - 25$.',
      'Expanda o quadrado da diferença protegido por parênteses: $-(x^2 - 6x + 9) = -x^2 + 6x - 9$.',
      'Some ao restante: $(x^2 - 25) + (-x^2 + 6x - 9) - 6x = -25 - 9 = -34$.',
    ],
    memoryTakeaway:
      'Sempre que houver um “menos” antes de um produto notável, abra parênteses primeiro e troque TODOS os sinais de uma vez só!',
  },
  {
    id: 'mat-q144',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    source: 'Edital 12.2 · Multiplicação de Polinômios',
    prompt:
      'Qual é o coeficiente do termo em $x^2$ no produto dos polinômios $(2x^2 - 3x + 4) \\cdot (x - 5)$?',
    options: ['-13.', '-10.', '-7.', '-3.', '7.'],
    correctIndex: 0,
    explanation:
      'Para encontrar o coeficiente de $x^2$, não precisa multiplicar tudo — basta combinar os pares que geram $x^2$: $(2x^2) \\cdot (-5) = -10x^2$ e $(-3x) \\cdot (x) = -3x^2$. Somando ambos: $-10x^2 - 3x^2 = -13x^2$. Portanto, o coeficiente é $-13$.',
    trapNote:
      'Você não precisa perder tempo multiplicando todos os 6 pares — foque apenas nos termos cujo grau some $2$!',
    optionFeedback: [
      'Correto! $(2)(-5) + (-3)(1) = -10 - 3 = -13$.',
      'Considerou apenas $2x^2 \\cdot (-5) = -10x^2$, esquecendo $(-3x)(x)$.',
      'Subtraíu errado: $-10 + 3 = -7$.',
      'Considerou apenas $(-3x)(x)$.',
      'Erro de sinais na soma dos termos em $x^2$.',
    ],
    stepByStep: [
      'Identifique quais multiplicações produzem $x^2$: $(2x^2) \\cdot (-5)$ e $(-3x) \\cdot (x)$.',
      'Calcule: $-10x^2$ e $-3x^2$.',
      'Some: $-10 + (-3) = -13$.',
    ],
    memoryTakeaway:
      'Para achar um coeficiente específico em produto de polinômios, multiplique só os pares cujos expoentes somam o grau pedido!',
  },
  {
    id: 'mat-q145',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    source: 'Edital 12.2 · Fatoração por Agrupamento',
    prompt: 'Fatorando completamente o polinômio $ax + ay + 2x + 2y$, obtém-se:',
    options: [
      '$(a + 2)(x + y)$',
      '$(a + y)(x + 2)$',
      '$(a - 2)(x + y)$',
      '$2a(x + y)$',
      '$(ax + 2)(y + 1)$',
    ],
    correctIndex: 0,
    explanation:
      'Por agrupamento em dois blocos: coloque $a$ em evidência nos dois primeiros termos e $2$ nos dois últimos: $a(x + y) + 2(x + y)$. Agora coloque o binômio comum $(x + y)$ em evidência: $(x + y)(a + 2)$.',
    trapNote:
      'Sempre confira multiplicando mentalmente de volta pela distributiva para validar sua fatoração!',
    optionFeedback: [
      'Correto! $(a+2)(x+y) = ax + ay + 2x + 2y$.',
      'Ao expandir dá $ax + 2a + xy + 2y$, diferente do original.',
      'Erro de sinal: geraria $-2x - 2y$.',
      'Multiplique de volta: $2a(x+y) = 2ax + 2ay$, não é soma $a+2$.',
      'Expansão incorreta.',
    ],
    stepByStep: [
      'Agrupe de dois em dois: $(ax + ay) + (2x + 2y)$.',
      'Ponha o fator comum de cada par em evidência: $a(x + y) + 2(x + y)$.',
      'Ponha $(x + y)$ em evidência: $(a + 2)(x + y)$.',
    ],
    memoryTakeaway:
      'Viu 4 termos sem fator comum único a todos? Aplique FATORAÇÃO POR AGRUPAMENTO em pares!',
  },
  {
    id: 'mat-q146',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    source: 'Edital 12.2 · Fator Comum + Diferença de Quadrados',
    prompt: 'Qual é a fatoração COMPLETA do polinômio $3x^2 - 75$ no conjunto dos reais?',
    options: [
      '$3(x + 5)(x - 5)$',
      '$3(x - 5)^2$',
      '$(3x - 25)(x + 3)$',
      '$3(x^2 - 75)$',
      '$(x + 25)(x - 25)$',
    ],
    correctIndex: 0,
    explanation:
      '1º passo: coloque o fator comum $3$ em evidência $\\Rightarrow 3(x^2 - 25)$. 2º passo: fatore a diferença de quadrados interna $x^2 - 25 = (x + 5)(x - 5)$. Resultado completo: $3(x + 5)(x - 5)$.',
    trapNote:
      'Nunca pare no meio do caminho após colocar o $3$ em evidência — sempre verifique se o que sobrou dentro dos parênteses ainda é fatorável!',
    optionFeedback: [
      'Correto! Primeiro fator comum ($3$), depois diferença de quadrados ($x^2 - 5^2$).',
      '$3(x-5)^2 = 3x^2 - 30x + 75$, diferente de $3x^2 - 75$.',
      'Produto incorreto.',
      'Esqueceu de dividir $75$ por $3$ ao colocar $3$ em evidência.',
      'Esqueceu o fator $3$ e não tirou a raiz quadrada de $25$.',
    ],
    stepByStep: [
      'Coloque o MDC numérico ($3$) em evidência: $3(x^2 - 25)$.',
      'Reconheça $x^2 - 25 = x^2 - 5^2 = (x + 5)(x - 5)$.',
      'Junte os fatores: $3(x + 5)(x - 5)$.',
    ],
    memoryTakeaway:
      'Ordem sagrada da fatoração: 1º Fator Comum em evidência $\\to$ 2º Produtos Notáveis (diferença de quadrados / TQP)!',
  },
  {
    id: 'mat-q147',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    source: 'Edital 12.2 · Simplificação por Agrupamento',
    prompt:
      'Supondo denominadores diferentes de zero, simplifique a fração algébrica $\\dfrac{x^2 + 3x}{x^2 - 9}$:',
    options: [
      '$\\dfrac{x}{x - 3}$',
      '$\\dfrac{3x}{-9}$',
      '$\\dfrac{x}{x + 3}$',
      '$\\dfrac{x + 3}{x - 3}$',
      '$x - 3$',
    ],
    correctIndex: 0,
    explanation:
      'Fatorando o numerador (fator comum $x$): $x(x + 3)$. Fatorando o denominador (diferença de quadrados): $(x + 3)(x - 3)$. Cancelando o fator comum $(x + 3)$, sobra $\\dfrac{x}{x - 3}$.',
    trapNote:
      'Não corte $x^2$ com $x^2$ antes de fatorar! O sinal correto depende dos fatores $(x+3)$ e $(x-3)$.',
    optionFeedback: [
      'Correto! $\\frac{x(x+3)}{(x+3)(x-3)} = \\frac{x}{x-3}$.',
      'Erro gravíssimo: cancelou $x^2$ em uma soma/subtração sem fatorar.',
      'Cancelou o fator errado ou confundiu o sinal no denominador.',
      'Colocou $(x+3)$ no lugar de $x$ no numerador.',
      'Deixou o denominador virar numerador.',
    ],
    stepByStep: [
      'Coloque $x$ em evidência no numerador: $x^2 + 3x = x(x + 3)$.',
      'Fatore a diferença de quadrados no denominador: $x^2 - 9 = (x + 3)(x - 3)$.',
      'Simplifique $(x + 3)$ em cima e embaixo: $\\dfrac{x}{x - 3}$.',
    ],
    memoryTakeaway:
      'Viu $x^2 + kx$ em cima e $x^2 - k^2$ embaixo? É par pronto de Fator Comum + Diferença de Quadrados!',
  },
  {
    id: 'mat-q148',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    source: 'Edital 12.2 · Geometria com Polinômios',
    prompt:
      'Um quadrado tem lado medindo $(2x + 3)$ centímetros e um retângulo tem dimensões $(4x + 6)$ por $(x + 1)$ centímetros. Qual polinômio expressa a DIFERENÇA entre a área do quadrado e a área do retângulo, nessa ordem?',
    options: [
      '$2x + 3$',
      '$2x^2 + 5x + 3$',
      '$10x + 15$',
      '$8x^2 + 22x + 15$',
      '$2x + 9$',
    ],
    correctIndex: 0,
    explanation:
      'Área do quadrado: $(2x + 3)^2 = 4x^2 + 12x + 9$. Área do retângulo: $(4x + 6)(x + 1) = 4x^2 + 4x + 6x + 6 = 4x^2 + 10x + 6$. Subtraindo: $(4x^2 + 12x + 9) - (4x^2 + 10x + 6) = 2x + 3$.',
    trapNote:
      'Dica extra de fatoração: perceba que $(4x+6) = 2(2x+3)$! Colocando $(2x+3)$ em evidência: $(2x+3)[(2x+3) - 2(x+1)] = (2x+3)[1] = 2x+3$!',
    optionFeedback: [
      'Correto! $(4x^2 + 12x + 9) - (4x^2 + 10x + 6) = 2x + 3$.',
      'Erro na expansão de $(2x+3)^2$ ou na distributiva do retângulo.',
      'Esqueceu de subtrair $-6$ ou somou $9+6 = 15$ sem trocar o sinal.',
      'Somou as duas áreas em vez de subtrair.',
      'Esqueceu de subtrair o termo constante $6$ do $9$.',
    ],
    stepByStep: [
      'Área do quadrado: $(2x + 3)^2 = 4x^2 + 12x + 9$.',
      'Área do retângulo: $(4x + 6)(x + 1) = 4x^2 + 10x + 6$.',
      'Diferença: $(4x^2 - 4x^2) + (12x - 10x) + (9 - 6) = 2x + 3$.',
    ],
    memoryTakeaway:
      'Antes de expandir tudo na marra, olhe se os lados têm fator comum — aqui $(4x+6) = 2(2x+3)$ simplifica o cálculo mentalmente!',
  },
  {
    id: 'mat-q149',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    source: 'Edital 12.2 · Soma e Diferença de Quadrados Numéricos',
    prompt: 'Qual é o valor exato da fração numérica $\\dfrac{2027^2 - 2026^2}{2027 + 2026}$?',
    options: ['0.', '2.027.', '2.', '4.053.', '1.'],
    correctIndex: 4,
    explanation:
      'Pela diferença de dois quadrados: $2027^2 - 2026^2 = (2027 + 2026)(2027 - 2026)$. Dividindo tudo por $(2027 + 2026)$, cancela-se a soma e resta apenas $2027 - 2026 = 1$.',
    trapNote:
      'Questões com o ano do Edital (2027) são truques clássicos para verificar se você domina $a^2 - b^2$ sem tentar multiplicar na mão!',
    optionFeedback: [
      'Eles não são iguais para zerar o numerador.',
      'Chute sem aplicar fatoração.',
      'Erro na diferença $2027 - 2026$.',
      '$4.053$ é apenas a soma $2027 + 2026$, que foi cortada pelo denominador.',
      'Correto! $\\frac{(a+b)(a-b)}{a+b} = a - b = 2027 - 2026 = 1$.',
    ],
    stepByStep: [
      'Aplique $a^2 - b^2 = (a + b)(a - b)$ com $a = 2027$ e $b = 2026$.',
      'Cancele $(2027 + 2026)$ do numerador com o denominador.',
      'Sobra apenas $2027 - 2026 = 1$.',
    ],
    memoryTakeaway:
      '$\\dfrac{a^2 - b^2}{a + b}$ vale SEMPRE $a - b$ (para $a + b \\neq 0$)!',
  },
  {
    id: 'mat-q150',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    source: 'Edital 12.2 · Grau de Polinômios e Termos Semelhantes',
    prompt:
      'Considere $P(x) = ax^3 + (b - 2)x^2 + 5x - 1$ e $Q(x) = 3x^3 + 4x^2 + (c + 1)x - 1$. Sabendo que $P(x)$ e $Q(x)$ são polinômios IDÊNTICOS para todo $x$, qual é o valor de $a + b + c$?',
    options: ['9.', '11.', '13.', '15.', '17.'],
    correctIndex: 2,
    explanation:
      'Polinômios idênticos têm coeficientes iguais termo a termo: em $x^3 \\Rightarrow a = 3$; em $x^2 \\Rightarrow b - 2 = 4 \\Rightarrow b = 6$; em $x \\Rightarrow c + 1 = 5 \\Rightarrow c = 4$. Logo, $a + b + c = 3 + 6 + 4 = 13$.',
    trapNote:
      'Atenção em $b - 2 = 4$: dá $b = 6$ (não $2$), e $c + 1 = 5$ dá $c = 4$ (não $6$)!',
    optionFeedback: [
      'Fez $b = 4 - 2 = 2$, errando o sinal ao isolar $b$.',
      'Fez $b = 2$ e $c = 6$.',
      'Correto! $a = 3$, $b = 6$ e $c = 4 \\Rightarrow 3 + 6 + 4 = 13$.',
      'Fez $c = 5 + 1 = 6$ em vez de $5 - 1 = 4$.',
      'Erro aritmético ao somar $a + b + c$.',
    ],
    stepByStep: [
      'Iguale coeficientes de $x^3$: $a = 3$.',
      'Iguale coeficientes de $x^2$: $b - 2 = 4 \\Rightarrow b = 6$.',
      'Iguale coeficientes de $x$: $5 = c + 1 \\Rightarrow c = 4$.',
      'Some: $3 + 6 + 4 = 13$.',
    ],
    memoryTakeaway:
      'Dois polinômios são idênticos quando os coeficientes de MESMA POTÊNCIA de $x$ são exatamente iguais!',
  },
  {
    id: 'mat-q151',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    source: 'Edital 12.2 · Simplificação com Agrupamento no Numerador',
    prompt:
      'Para valores reais em que o denominador é não nulo, simplificando a fração $\\dfrac{ax + ay + bx + by}{a^2 - b^2}$, obtém-se:',
    options: [
      '$\\dfrac{x + y}{a - b}$',
      '$\\dfrac{x + y}{a + b}$',
      '$\\dfrac{a + b}{x + y}$',
      '$\\dfrac{x - y}{a - b}$',
      '$\\dfrac{xy}{ab}$',
    ],
    correctIndex: 0,
    explanation:
      'No numerador, por agrupamento: $a(x + y) + b(x + y) = (a + b)(x + y)$. No denominador, diferença de quadrados: $a^2 - b^2 = (a + b)(a - b)$. Cancelando $(a + b)$, resta $\\dfrac{x + y}{a - b}$.',
    trapNote:
      'A única variável cancelável após fatorar é o fator comum inteiro $(a + b)$.',
    optionFeedback: [
      'Correto! $\\frac{(a+b)(x+y)}{(a+b)(a-b)} = \\frac{x+y}{a-b}$.',
      'Cancelou o fator errado $(a - b)$ no denominador.',
      'Inverteu numerador e denominador.',
      'Mudou o sinal entre $x$ e $y$ sem motivo.',
      'Erro grave ao tentar misturar termos somados como produto.',
    ],
    stepByStep: [
      'Agrupe o numerador: $ax + ay + bx + by = (a + b)(x + y)$.',
      'Fatore o denominador: $a^2 - b^2 = (a + b)(a - b)$.',
      'Cancele $(a + b)$: $\\dfrac{x + y}{a - b}$.',
    ],
    memoryTakeaway:
      'Viu 4 letras no numerador ($ax+ay+bx+by$) e $a^2-b^2$ no denominador? Fatore os dois e cancele o binômio comum!',
  },
  {
    id: 'mat-q152',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    source: 'Edital 12.2 · Identidade do Inverso $(x + 1/x)$',
    prompt:
      'Se $x$ é um número real não nulo tal que $x + \\dfrac{1}{x} = 5$, qual é o valor numérico de $x^2 + \\dfrac{1}{x^2}$?',
    options: ['10.', '23.', '25.', '27.', '50.'],
    correctIndex: 1,
    explanation:
      'Elevando ambos os lados de $x + \\frac{1}{x} = 5$ ao quadrado: $\\left(x + \\frac{1}{x}\\right)^2 = x^2 + 2 \\cdot x \\cdot \\frac{1}{x} + \\frac{1}{x^2} = x^2 + 2 + \\frac{1}{x^2} = 25$. Logo, $x^2 + \\frac{1}{x^2} = 25 - 2 = 23$.',
    trapNote:
      'Quando multiplicar $2 \\cdot x \\cdot \\frac{1}{x}$, o $x$ se cancela com $\\frac{1}{x}$ deixando um $+2$ (e não $0$)!',
    optionFeedback: [
      'Apenas dobrou $5 \\times 2 = 10$ sem elevar ao quadrado.',
      'Correto! $5^2 - 2 = 25 - 2 = 23$.',
      'Esqueceu de subtrair o termo central $2 \\cdot x \\cdot \\frac{1}{x} = 2$.',
      'Somou $+2$ ($25 + 2 = 27$) em vez de subtrair $2$ (isso só valeria se fosse $x - \\frac{1}{x} = 5$).',
      'Erro na operação final.',
    ],
    stepByStep: [
      'Eleve ao quadrado: $\\left(x + \\dfrac{1}{x}\\right)^2 = 5^2 = 25$.',
      'Desenvolva: $x^2 + 2\\cdot x \\cdot \\dfrac{1}{x} + \\dfrac{1}{x^2} = 25 \\Rightarrow x^2 + 2 + \\dfrac{1}{x^2} = 25$.',
      'Isole: $x^2 + \\dfrac{1}{x^2} = 25 - 2 = 23$.',
    ],
    memoryTakeaway:
      'Se $x + \\frac{1}{x} = k$, então $x^2 + \\frac{1}{x^2} = k^2 - 2$ sempre!',
  },
  {
    id: 'mat-q153',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    source: 'Edital 12.2 · Fatoração Numérica em Evidência',
    prompt:
      'Sem fazer multiplicações gigantes, calcule rapidamente o valor numérico da expressão $\\dfrac{38 \\cdot 74 + 38 \\cdot 26}{19}$:',
    options: ['100.', '150.', '2.000.', '380.', '200.'],
    correctIndex: 4,
    explanation:
      'Coloque $38$ em evidência no numerador: $\\dfrac{38 \\cdot (74 + 26)}{19} = \\dfrac{38 \\cdot 100}{19}$. Simplificando $\\frac{38}{19} = 2$, temos $2 \\cdot 100 = 200$.',
    trapNote:
      'Perceber $74 + 26 = 100$ e $\\frac{38}{19} = 2$ resolve a questão em 5 segundos sem risco de errar conta longa.',
    optionFeedback: [
      'Esqueceu que $\\frac{38}{19} = 2$ (respondeu apenas $74 + 26 = 100$).',
      'Erro aritmético na divisão.',
      'Erro de ordem decimal ao multiplicar por $100$.',
      'Dividiu por $10$ em vez de dividir por $19$.',
      'Correto! $\\frac{38 \\cdot (74+26)}{19} = 2 \\cdot 100 = 200$.',
    ],
    stepByStep: [
      'Coloque o fator comum $38$ em evidência: $38 \\cdot (74 + 26) = 38 \\cdot 100$.',
      'Divida $38$ por $19$: $\\frac{38}{19} = 2$.',
      'Multiplique: $2 \\cdot 100 = 200$.',
    ],
    memoryTakeaway:
      'Em expressões aritméticas com números repetidos, fator comum em evidência transforma contas chatas em múltiplos de $100$!',
  },
  {
    id: 'mat-q154',
    discipline: 'MAT',
    topicId: 'mat-algebra',
    source: 'Edital 12.2 · Trinômio Quadrado Perfeito',
    prompt:
      'Para que o trinômio $x^2 - k x + 64$ seja um trinômio quadrado perfeito (com $k > 0$), qual deve ser o valor de $k$?',
    options: ['8.', '12.', '16.', '32.', '128.'],
    correctIndex: 2,
    explanation:
      'No quadrado perfeito $(x - a)^2 = x^2 - 2ax + a^2$, comparando o termo independente temos $a^2 = 64 \\Rightarrow a = 8$. Logo, o termo central é $-2ax = -2(8)x = -16x$, ou seja, $k = 16$.',
    trapNote:
      'Erro clássico é responder $8$ (que é apenas a raiz $\\sqrt{64}$), esquecendo de multiplicar por $2$ ($2ab$)!',
    optionFeedback: [
      'Armadilha! $8$ é o valor de $a = \\sqrt{64}$; o coeficiente central é $2a = 16$.',
      'Não forma quadrado perfeito com $64$.',
      'Correto! $(x - 8)^2 = x^2 - 16x + 64 \\Rightarrow k = 16$.',
      'Dividiu $64$ por $2$ em vez de tirar a raiz quadrada e dobrar.',
      'Dobrou $64$ em vez de usar $\\sqrt{64}$.',
    ],
    stepByStep: [
      'Extraia as raízes dos termos quadrados das pontas: $\\sqrt{x^2} = x$ e $\\sqrt{64} = 8$.',
      'O termo do meio de um TQP vale sempre $2 \\cdot x \\cdot 8 = 16x$.',
      'Comparando $-kx = -16x$, conclui-se $k = 16$.',
    ],
    memoryTakeaway:
      'Trinômio Quadrado Perfeito sempre tem termo do meio igual ao DOBRO do produto das duas raízes ($2 \\cdot \\text{raiz}_1 \\cdot \\text{raiz}_2$)!',
  },

  // =========================================================
  // TÓPICO 8: EQUAÇÕES DO 1º GRAU, FRACIONÁRIAS E SISTEMAS LINEARES (20)
  // (Estrixamente 1º Grau e Sistemas Lineares conforme Edital 12.2)
  // =========================================================
  {
    id: 'mat-q01',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    source: 'Prova Real · LP_ETE (Q16 — Sistema 1º Grau)',
    prompt:
      'Em um espaço de recreação de uma escola de esportes, há $30$ estudantes andando de skate ($4$ rodas) ou de bicicleta ($2$ rodas). No total, há $84$ rodas girando pela praça. Quantos estudantes estão andando de bicicleta e quantos estão andando de skate, respectivamente?',
    options: ['18 e 12.', '16 e 14.', '15 e 15.', '14 e 16.', '13 e 17.'],
    correctIndex: 0,
    explanation:
      'Sejam $b =$ bicicletas ($2$ rodas) e $s =$ skates ($4$ rodas). Temos o sistema: $b + s = 30$ e $2b + 4s = 84$. Dividindo a 2ª equação por $2$: $b + 2s = 42$. Subtraindo a 1ª equação ($b + s = 30$): $s = 42 - 30 = 12$ skates. Logo, $b = 30 - 12 = 18$ bicicletas.',
    trapNote:
      'Atenção à palavra “respectivamente”: primeiro bicicletas ($18$), depois skates ($12$). Inverter a ordem é pegadinha clássica!',
    optionFeedback: [
      'Correto! $18 \\times 2 + 12 \\times 4 = 36 + 48 = 84$ rodas e $18 + 12 = 30$ alunos.',
      'Daria $16(2) + 14(4) = 32 + 56 = 88$ rodas (excede $84$).',
      'Daria $15(2) + 15(4) = 30 + 60 = 90$ rodas.',
      'Daria $14(2) + 16(4) = 28 + 64 = 92$ rodas.',
      'Daria $13(2) + 17(4) = 26 + 68 = 94$ rodas.',
    ],
    stepByStep: [
      'Monte as equações: $b + s = 30$ (alunos) e $2b + 4s = 84$ (rodas).',
      'Divida a 2ª equação por $2$: $b + 2s = 42$.',
      'Subtraia a 1ª da nova 2ª: $(b + 2s) - (b + s) = 42 - 30 \\Rightarrow s = 12$.',
      'Encontre $b = 30 - 12 = 18$. Ordem pedida: $18$ bicicletas e $12$ skates.',
    ],
    memoryTakeaway:
      'Atalho mental para problemas de rodas/patas: imagine que todos têm $2$ rodas ($30 \\times 2 = 60$). Faltam $84 - 60 = 24$ rodas; dividindo por $2$ rodas extras de cada skate, dão $12$ skates na hora!',
  },
  {
    id: 'mat-q02',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    source: 'Edital 12.2 · Sistemas Lineares de Compras',
    prompt:
      'Na papelaria próxima à ETE, $3$ cadernos iguais e $2$ canetas iguais custam juntos R$ 56,00. Já $2$ cadernos e $4$ canetas dos mesmos modelos custam R$ 48,00. Quanto custará a compra de $1$ caderno junto com $1$ caneta?',
    options: ['R$ 18,00.', 'R$ 20,00.', 'R$ 22,00.', 'R$ 24,00.', 'R$ 16,00.'],
    correctIndex: 1,
    explanation:
      'Sistema: $3c + 2k = 56$ e $2c + 4k = 48$. Multiplicando a 1ª por $2$: $6c + 4k = 112$. Subtraindo a 2ª ($2c + 4k = 48$): $4c = 64 \\Rightarrow c =$ R$ 16,00. Substituindo na 2ª: $2(16) + 4k = 48 \\Rightarrow 4k = 16 \\Rightarrow k =$ R$ 4,00. Portanto, $1$ caderno $+ 1$ caneta $= 16 + 4 =$ R$ 20,00.',
    trapNote:
      'Leia o comando final com atenção: a questão pede a SOMA ($1$ caderno $+ 1$ caneta $=$ R$ 20,00), não o preço isolado do caderno (R$ 16,00 — letra E)!',
    optionFeedback: [
      'Valor incorreto de $c + k$.',
      'Correto! Caderno $=$ R$ 16,00 e caneta $=$ R$ 4,00 $\\Rightarrow 16 + 4 =$ R$ 20,00.',
      'Erro aritmético ao determinar $k$.',
      'Erro ao dividir ou multiplicar uma das equações.',
      'Armadilha! R$ 16,00 é apenas o valor do caderno ($c$); faltou somar a caneta ($k = 4$).',
    ],
    stepByStep: [
      'Monte o sistema: $\\begin{cases} 3c + 2k = 56 \\\\ 2c + 4k = 48 \\end{cases}$.',
      'Dobre a 1ª equação para igualar $4k$: $6c + 4k = 112$.',
      'Subtraia a 2ª: $4c = 64 \\Rightarrow c = 16$. Substitua: $3(16) + 2k = 56 \\Rightarrow 2k = 8 \\Rightarrow k = 4$.',
      'Some os dois: $c + k = 16 + 4 =$ R$ 20,00.',
    ],
    memoryTakeaway:
      'Antes de responder num problema de sistema, releia a última frase para checar se pediu $x$, $y$, $x+y$ ou $x-y$!',
  },
  {
    id: 'mat-q03',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    source: 'Edital 12.2 · Equação Fracionária do 1º Grau',
    prompt: 'Determine o valor real de $x$ que satisfaz a equação $\\dfrac{x + 1}{2} + \\dfrac{x + 4}{3} = 6$:',
    options: ['$x = 3$', '$x = 4$', '$x = 5$', '$x = 6$', '$x = 7$'],
    correctIndex: 2,
    explanation:
      'Tirando o $\\text{MMC}(2, 3) = 6$ nos dois membros da equação: $3(x + 1) + 2(x + 4) = 36 \\Rightarrow 3x + 3 + 2x + 8 = 36 \\Rightarrow 5x + 11 = 36 \\Rightarrow 5x = 25 \\Rightarrow x = 5$.',
    trapNote:
      'Erro mais clássico em equações com fração: esquecer de multiplicar o lado direito ($= 6$) pelo MMC ($6 \\times 6 = 36$)!',
    optionFeedback: [
      'Para $x = 3$, $\\frac{4}{2} + \\frac{7}{3} = 2 + 2{,}33 \\neq 6$.',
      'Para $x = 4$, $\\frac{5}{2} + \\frac{8}{3} = 2{,}5 + 2{,}67 \\neq 6$.',
      'Correto! $\\frac{5+1}{2} + \\frac{5+4}{3} = 3 + 3 = 6$.',
      'Para $x = 6$, $\\frac{7}{2} + \\frac{10}{3} = 6{,}83 \\neq 6$.',
      'Para $x = 7$, $\\frac{8}{2} + \\frac{11}{3} = 7{,}67 \\neq 6$.',
    ],
    stepByStep: [
      'Calcule o $\\text{MMC}(2, 3) = 6$ e multiplique TODOS os termos por $6$ (inclusive o $6$ da direita!).',
      'Obtém-se $3(x + 1) + 2(x + 4) = 36$.',
      'Expanda: $3x + 3 + 2x + 8 = 36 \\Rightarrow 5x + 11 = 36 \\Rightarrow 5x = 25 \\Rightarrow x = 5$.',
    ],
    memoryTakeaway:
      'Em equação com frações, multiplique TODOS os termos — inclusive números inteiros após o sinal de igual — pelo MMC!',
  },
  {
    id: 'mat-q04',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    source: 'Edital 12.2 · Problema do 1º Grau com Frações',
    prompt:
      'Para revisar para o processo seletivo, Lucas leu $\\dfrac{1}{3}$ das páginas de uma apostila na segunda-feira, $\\dfrac{2}{5}$ do total na terça-feira e ainda restaram $12$ páginas para concluir na quarta-feira. Quantas páginas tem a apostila inteira?',
    options: ['36 páginas.', '40 páginas.', '45 páginas.', '50 páginas.', '60 páginas.'],
    correctIndex: 2,
    explanation:
      'Soma das frações lidas do total $P$: $\\frac{1}{3} + \\frac{2}{5} = \\frac{5 + 6}{15} = \\frac{11}{15}$. O restante equivale a $1 - \\frac{11}{15} = \\frac{4}{15}$ do total. Logo, $\\frac{4}{15} P = 12 \\Rightarrow P = \\frac{12 \\times 15}{4} = 45$ páginas.',
    trapNote:
      'Leia se a segunda fração é “do total” (como aqui) ou “do restante” — isso altera toda a montagem da equação!',
    optionFeedback: [
      'Com $36$ páginas, $1/3$ são $12$, mas $2/5$ de $36$ nem dá número inteiro.',
      'Com $40$ páginas, $1/3$ não é inteiro.',
      'Correto! $\\frac{1}{3}(45) = 15$, $\\frac{2}{5}(45) = 18$; restam $45 - (15 + 18) = 12$ páginas.',
      'Com $50$ páginas, $1/3$ não dá inteiro.',
      'Daria se restassem $16$ páginas ($\\frac{4}{15} \\cdot 60 = 16$).',
    ],
    stepByStep: [
      'Some as frações do total já lidas: $\\dfrac{1}{3} + \\dfrac{2}{5} = \\dfrac{5 + 6}{15} = \\dfrac{11}{15}$.',
      'A fração restante é $1 - \\dfrac{11}{15} = \\dfrac{4}{15}$.',
      'Iguale aos $12$ restantes: $\\dfrac{4}{15} P = 12 \\Rightarrow P = \\dfrac{12 \\cdot 15}{4} = 45$ páginas.',
    ],
    memoryTakeaway:
      'Quando frações incidem sobre o TOTAL, some-as primeiro, descubra a fração que FALTA para $1$ inteiro e iguale ao valor em unidades!',
  },
  {
    id: 'mat-q155',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    source: 'Edital 12.2 · Equação do 1º Grau com Distributiva e Sinal',
    prompt: 'Qual é a solução real da equação do 1º grau $5(x - 2) - 3(2x - 4) = 8$?',
    options: ['$x = -6$', '$x = -2$', '$x = 2$', '$x = 6$', '$x = 10$'],
    correctIndex: 0,
    explanation:
      'Aplicando a distributiva com atenção aos sinais: $5x - 10 - 6x + 12 = 8 \\Rightarrow -x + 2 = 8 \\Rightarrow -x = 6 \\Rightarrow x = -6$.',
    trapNote:
      'A armadilha é $-3 \\cdot (-4) = +12$: muitos alunos escrevem $-12$ por esquecerem que menos vezes menos dá MAIS!',
    optionFeedback: [
      'Correto! $5(-8) - 3(-16) = -40 + 48 = 8$.',
      'Para $x = -2$: $5(-4) - 3(-8) = -20 + 24 = 4 \\neq 8$.',
      'Erro de sinais ao distribuir o $-3$ e passar os termos.',
      'Errou o sinal ao multiplicar por $-1$ no final ($-x = 6 \\Rightarrow x = -6$, não $+6$).',
      'Substituiu errado.',
    ],
    stepByStep: [
      'Distribua os fatores: $5x - 10 - 6x + 12 = 8$.',
      'Reduza termos semelhantes: $(5x - 6x) + (-10 + 12) = 8 \\Rightarrow -x + 2 = 8$.',
      'Isole: $-x = 6 \\Rightarrow x = -6$.',
    ],
    memoryTakeaway:
      'Sinal negativo fora dos parênteses como $-3(2x - 4)$ inverte o sinal de TODOS os termos de dentro: vira $-6x + 12$!',
  },
  {
    id: 'mat-q156',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    source: 'Edital 12.2 · Problema de Idades (1º Grau)',
    prompt:
      'Hoje, a idade de uma mãe é o quádruplo da idade de sua filha. Daqui a $12$ anos, a idade da mãe será exatamente o dobro da idade da filha. Qual é a idade ATUAL da filha?',
    options: ['4 anos.', '6 anos.', '8 anos.', '10 anos.', '12 anos.'],
    correctIndex: 1,
    explanation:
      'Seja $f$ a idade atual da filha e $4f$ a da mãe. Daqui a $12$ anos, AMBAS envelhecem $12$ anos: mãe terá $4f + 12$ e filha terá $f + 12$. Equação: $4f + 12 = 2(f + 12) \\Rightarrow 4f + 12 = 2f + 24 \\Rightarrow 2f = 12 \\Rightarrow f = 6$ anos.',
    trapNote:
      'O tempo passa para AS DUAS pessoas! Nunca esqueça de somar $+ 12$ também na idade da filha antes de multiplicar por $2$.',
    optionFeedback: [
      'Se filha $= 4$, mãe $= 16$; em $12$ anos: $28$ não é o dobro de $16$.',
      'Correto! Hoje: $6$ e $24$ (quádruplo); em $12$ anos: $18$ e $36$ (dobro)!',
      'Em $12$ anos seriam $20$ e $44$ (não é dobro).',
      'Em $12$ anos seriam $22$ e $52$ (não é dobro).',
      'Em $12$ anos seriam $24$ e $60$ (não é dobro).',
    ],
    stepByStep: [
      'Hoje: filha $= f$, mãe $= 4f$.',
      'Daqui a $12$ anos: filha $= f + 12$, mãe $= 4f + 12$.',
      'Equação: $4f + 12 = 2(f + 12) \\Rightarrow 4f + 12 = 2f + 24 \\Rightarrow 2f = 12 \\Rightarrow f = 6$ anos.',
    ],
    memoryTakeaway:
      'Em problemas de idades no futuro ou passado, monte uma tabelinha (“Hoje” vs. “Daqui a $T$ anos”) somando $+T$ em TODAS as pessoas!',
  },
  {
    id: 'mat-q157',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    source: 'Edital 12.2 · Números Consecutivos',
    prompt:
      'A soma de três números inteiros consecutivos é igual a $96$. Qual é o produto do menor pelo maior desses três números?',
    options: ['960.', '990.', '1.056.', '1.024.', '1.023.'],
    correctIndex: 4,
    explanation:
      'Represente os três inteiros consecutivos por $(x - 1), x, (x + 1)$. A soma é $(x - 1) + x + (x + 1) = 3x = 96 \\Rightarrow x = 32$. Logo os números são $31, 32$ e $33$. O produto do menor pelo maior é $31 \\times 33 = 1.023$ (ou $32^2 - 1 = 1.024 - 1 = 1.023$).',
    trapNote:
      'Representar consecutivos por $(x - 1), x, (x + 1)$ cancela os números na hora e acha o número do meio na primeira linha!',
    optionFeedback: [
      'Produto incorreto ($30 \\times 32$).',
      '$30 \\times 33 = 990$.',
      '$32 \\times 33 = 1.056$ (multiplicou o do meio pelo maior).',
      '$1.024 = 32^2$ (o quadrado do termo do meio).',
      'Correto! Números $31, 32, 33 \\Rightarrow 31 \\cdot 33 = 1.023$.',
    ],
    stepByStep: [
      'A média de $3$ consecutivos é o número do meio: $\\frac{96}{3} = 32$.',
      'Portanto, os três números são $31, 32$ e $33$.',
      'Multiplique o menor pelo maior: $31 \\times 33 = (32 - 1)(32 + 1) = 32^2 - 1 = 1.023$.',
    ],
    memoryTakeaway:
      'Truque ninja: para $3$ (ou $5$) números consecutivos, o número do MEIO é sempre a soma dividida por $3$ (ou por $5$)!',
  },
  {
    id: 'mat-q158',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    source: 'Edital 12.2 · Sistema de Cédulas (2×2)',
    prompt:
      'Um estudante sacou R$ 580,00 em um caixa eletrônico que só fornecia cédulas de R$ 20,00 e R$ 50,00. Sabendo que ele recebeu exatamente $17$ cédulas ao todo, quantas notas de R$ 50,00 havia no saque?',
    options: ['6 notas.', '8 notas.', '9 notas.', '10 notas.', '11 notas.'],
    correctIndex: 1,
    explanation:
      'Sejam $v$ notas de $20$ e $c$ notas de $50$: $v + c = 17$ e $20v + 50c = 580$. Dividindo a 2ª por $10$: $2v + 5c = 58$. Multiplicando a 1ª por $2$: $2v + 2c = 34$. Subtraindo: $3c = 24 \\Rightarrow c = 8$ notas de R$ 50,00.',
    trapNote:
      'Simplifique $20v + 50c = 580$ dividindo logo por $10$ antes de resolver — contas menores evitam erros!',
    optionFeedback: [
      'Se $c = 6$ ($300$) e $v = 11$ ($220$), daria apenas R$ 520,00.',
      'Correto! $8$ notas de $50$ ($400$) $+$ $9$ notas de $20$ ($180$) $=$ R$ 580,00 em $17$ cédulas.',
      '$9$ é a quantidade de notas de R$ 20,00 ($v$), NÃO as de R$ 50,00!',
      'Daria R$ 640,00.',
      'Daria R$ 670,00.',
    ],
    stepByStep: [
      'Sistema: $\\begin{cases} v + c = 17 \\\\ 20v + 50c = 580 \\end{cases}$.',
      'Simplifique a 2ª por $10$: $2v + 5c = 58$. Multiplique a 1ª por $2$: $2v + 2c = 34$.',
      'Subtraia: $3c = 24 \\Rightarrow c = 8$ notas de R$ 50,00.',
    ],
    memoryTakeaway:
      'Em sistemas com dinheiro ($20v + 50c = 580$), corte os zeros finais dividindo tudo por $10$ antes de multiplicar!',
  },
  {
    id: 'mat-q159',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    source: 'Edital 12.2 · Sistema de Prova (Acertos e Erros)',
    prompt:
      'Em um concurso com $40$ questões, cada resposta correta vale $+5$ pontos e cada questão errada ou em branco desconta $-2$ pontos. Se um candidato fez $130$ pontos no total, quantas questões ele ACERTOU?',
    options: ['26 questões.', '28 questões.', '30 questões.', '32 questões.', '34 questões.'],
    correctIndex: 2,
    explanation:
      'Sejam $c =$ certas e $e =$ erradas. Temos $c + e = 40 \\Rightarrow e = 40 - c$. Pontuação: $5c - 2e = 130$. Substituindo: $5c - 2(40 - c) = 130 \\Rightarrow 5c - 80 + 2c = 130 \\Rightarrow 7c = 210 \\Rightarrow c = 30$ acertos.',
    trapNote:
      'Ao substituir $e = 40 - c$ em $-2e$, lembre do sinal: $-2(40 - c) = -80 + 2c$!',
    optionFeedback: [
      '$26$ certas e $14$ erradas $= 130 - 28 = 102$ pontos (esqueceu o desconto!).',
      '$28$ certas e $12$ erradas $= 140 - 24 = 116$ pontos.',
      'Correto! $30$ certas ($+150$) e $10$ erradas ($-20$) $= 130$ pontos.',
      '$32$ certas e $8$ erradas $= 160 - 16 = 144$ pontos.',
      '$34$ certas e $6$ erradas $= 170 - 12 = 158$ pontos.',
    ],
    stepByStep: [
      'Equação 1: $c + e = 40$. Equação 2: $5c - 2e = 130$.',
      'Dobre a Equação 1: $2c + 2e = 80$.',
      'Some as duas (método da adição): $7c = 210 \\Rightarrow c = 30$ acertos.',
    ],
    memoryTakeaway:
      'Quando o problema dá pontuação com perda ($5c - 2e$), somar o dobro da 1ª equação ($2c + 2e$) cancela os erros direto!',
  },
  {
    id: 'mat-q160',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    source: 'Edital 12.2 · Equação Fracionária com Incógnita no Denominador',
    prompt:
      'Para $x \\neq 2$, qual valor real de $x$ resolve a equação racional redutível ao 1º grau $\\dfrac{3x + 4}{x - 2} = 5$?',
    options: ['$x = 3$', '$x = 5$', '$x = 14$', '$x = 9$', '$x = 7$'],
    correctIndex: 4,
    explanation:
      'Multiplicando ambos os lados por $(x - 2)$: $3x + 4 = 5(x - 2) \\Rightarrow 3x + 4 = 5x - 10 \\Rightarrow 4 + 10 = 5x - 3x \\Rightarrow 14 = 2x \\Rightarrow x = 7$. (Verificando condição de existência: $7 \\neq 2$, válido!)',
    trapNote:
      'Ao multiplicar por $(x - 2)$, multiplique o $5$ pelos DOIS termos: $5x - 10$ (não $5x - 2$)!',
    optionFeedback: [
      'Se $x = 3$, $\\frac{13}{1} = 13 \\neq 5$.',
      'Erro na distributiva $5(x - 2)$ deixando $5x - 2$ em vez de $5x - 10$.',
      'Parou em $2x = 14$ e esqueceu de dividir por $2$.',
      'Para $x = 9$, $\\frac{31}{7} \\neq 5$.',
      'Correto! $\\frac{3(7)+4}{7-2} = \\frac{25}{5} = 5$.',
    ],
    stepByStep: [
      'Multiplique em cruz: $3x + 4 = 5(x - 2)$.',
      'Distribua: $3x + 4 = 5x - 10$.',
      'Agrupe: $14 = 2x \\Rightarrow x = 7$.',
    ],
    memoryTakeaway:
      'Multiplique sempre por parênteses ao cruzar o denominador: $5 \\cdot (x - 2) = 5x - 10$!',
  },
  {
    id: 'mat-q161',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    source: 'Edital 12.2 · Saldo Restante ("Do Restante")',
    prompt:
      'Mariana gastou $\\dfrac{1}{4}$ de sua mesada comprando livros e $\\dfrac{2}{3}$ do que RESTOU em material de desenho, ficando ainda com R$ 45,00. Qual era o valor total de sua mesada?',
    options: ['R$ 135,00.', 'R$ 150,00.', 'R$ 180,00.', 'R$ 200,00.', 'R$ 240,00.'],
    correctIndex: 2,
    explanation:
      'Após gastar $\\frac{1}{4}$, sobra $\\frac{3}{4}$ da mesada ($M$). Em seguida ela gasta $\\frac{2}{3}$ desse restante, logo sobra $\\frac{1}{3}$ do restante: $\\frac{1}{3} \\cdot \\left(\\frac{3}{4} M\\right) = \\frac{1}{4} M$. Como sobraram R$ 45,00, temos $\\frac{1}{4} M = 45 \\Rightarrow M =$ R$ 180,00.',
    trapNote:
      'Dica infalível: multiplique sempre as frações QUE SOBRAM! Gastou $1/4 \\to$ sobrou $3/4$. Gastou $2/3$ disso $\\to$ sobrou $1/3$ de $3/4 = 1/4$!',
    optionFeedback: [
      'Erro ao calcular a fração restante.',
      'Não fecha $45$ após os dois descontos fracionários.',
      'Correto! $180 - 45 = 135$; depois $2/3$ de $135 = 90$; sobram $135 - 90 =$ R$ 45,00.',
      'Daria R$ 50,00 no final.',
      'Daria R$ 60,00 no final.',
    ],
    stepByStep: [
      'Após gastar $1/4$, resta $\\frac{3}{4}M$.',
      'Após gastar $2/3$ do que restou, resta $\\frac{1}{3}$ de $\\frac{3}{4}M = \\frac{1}{4}M$.',
      'Iguale a 45: $\\frac{1}{4}M = 45 \\Rightarrow M = 45 \\times 4 =$ R$ 180,00.',
    ],
    memoryTakeaway:
      'Sempre que aparecer “do que restou”, vá multiplicando direto as frações do QUE SOBRA em cada etapa até igualar ao dinheiro final!',
  },
  {
    id: 'mat-q162',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    source: 'Edital 12.2 · Sistema de Três Incógnitas Simétrico (1º Grau)',
    prompt:
      'Um estoquista pesou três caixas A, B e C em pares: A e B pesam juntas $24\\text{ kg}$; B e C pesam juntas $30\\text{ kg}$; A e C pesam juntas $26\\text{ kg}$. Quanto pesa a caixa B sozinha?',
    options: ['10 kg.', '12 kg.', '14 kg.', '16 kg.', '18 kg.'],
    correctIndex: 2,
    explanation:
      'Temos $A + B = 24$, $B + C = 30$ e $A + C = 26$. Somando as três equações: $2(A + B + C) = 24 + 30 + 26 = 80 \\Rightarrow A + B + C = 40\\text{ kg}$. Como $A + C = 26$, temos $B = 40 - 26 = 14\\text{ kg}$.',
    trapNote:
      'Não perca tempo tentando isolar $A$ e substituir! Some as 3 equações de uma vez para achar $2(A+B+C)$!',
    optionFeedback: [
      '$10\\text{ kg}$ é o peso da caixa A ($40 - 30 = 10$).',
      'Erro aritmético ao subtrair $A + C$.',
      'Correto! Soma total $A+B+C = 40$, logo $B = 40 - (A+C) = 40 - 26 = 14\\text{ kg}$.',
      '$16\\text{ kg}$ é o peso da caixa C ($40 - 24 = 16$).',
      'Erro ao dividir a soma por $2$.',
    ],
    stepByStep: [
      'Some as três equações: $(A+B) + (B+C) + (A+C) = 24 + 30 + 26 = 80$.',
      'Divida por $2$: $A + B + C = 40\\text{ kg}$.',
      'Subtraia $A + C = 26$: $B = 40 - 26 = 14\\text{ kg}$.',
    ],
    memoryTakeaway:
      'Sistema cíclico $A+B$, $B+C$, $A+C$? Some as 3 equações e divida por $2$ para obter $A + B + C$ na hora!',
  },
  {
    id: 'mat-q163',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    source: 'Edital 12.2 · Equação Fracionária com Sinal Negativo',
    prompt: 'Determine o valor real de $x$ que satisfaz a equação $\\dfrac{2x - 1}{3} - \\dfrac{x - 1}{4} = 2$:',
    options: ['$x = 3$', '$x = 4$', '$x = 9$', '$x = 6$', '$x = 5$'],
    correctIndex: 4,
    explanation:
      'Tirando o $\\text{MMC}(3, 4) = 12$ nos dois lados: $4(2x - 1) - 3(x - 1) = 24 \\Rightarrow 8x - 4 - 3x + 3 = 24 \\Rightarrow 5x - 1 = 24 \\Rightarrow 5x = 25 \\Rightarrow x = 5$. Conferindo: $\\frac{2(5)-1}{3} - \\frac{5-1}{4} = \\frac{9}{3} - \\frac{4}{4} = 3 - 1 = 2$.',
    trapNote:
      'Atenção máxima ao sinal negativo antes da segunda fração: $-3(x - 1)$ resulta em $-3x + 3$ (o $-1$ multiplicado por $-3$ fica POSITIVO)!',
    optionFeedback: [
      'Para $x = 3$: $\\frac{5}{3} - \\frac{2}{4} \\neq 2$.',
      'Para $x = 4$: $\\frac{7}{3} - \\frac{3}{4} \\neq 2$.',
      'Substituiu incorretamente.',
      'Se escreveu $-3(x - 1) = -3x - 3$, acabou errando a conta para $5x = 31$.',
      'Correto! $\\frac{9}{3} - \\frac{4}{4} = 3 - 1 = 2$.',
    ],
    stepByStep: [
      'Calcule $\\text{MMC}(3, 4) = 12$ e multiplique TODOS os termos por $12$: $4(2x - 1) - 3(x - 1) = 24$.',
      'Distribua cuidando dos sinais: $8x - 4 - 3x + 3 = 24$.',
      'Simplifique: $5x - 1 = 24 \\Rightarrow 5x = 25 \\Rightarrow x = 5$.',
    ],
    memoryTakeaway:
      'Sempre envolva o numerador inteiro em parênteses após um sinal de subtração entre frações: $-\\dfrac{x-1}{4}$ vira $-3(x-1) = -3x + 3$!',
  },
  {
    id: 'mat-q164',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    source: 'Edital 12.2 · Comparação de Planos (Equação do 1º Grau)',
    prompt:
      'Uma copiadora cobra uma taxa fixa de R$ 12,00 pela encadernação mais R$ 0,25 por página impressa. Outra copiadora concorrente não cobra taxa fixa, mas cobra R$ 0,40 por página. A partir de quantas páginas impressas exatamente as duas copiadoras passam a cobrar o MESMO valor total?',
    options: ['60 páginas.', '75 páginas.', '80 páginas.', '90 páginas.', '100 páginas.'],
    correctIndex: 2,
    explanation:
      'Igualando os custos para $n$ páginas: $12 + 0{,}25n = 0{,}40n \\Rightarrow 12 = 0{,}15n \\Rightarrow n = \\frac{12}{0{,}15} = \\frac{1.200}{15} = 80$ páginas.',
    trapNote:
      'Para dividir por decimal ($12 \\div 0{,}15$), multiplique ambos por $100$ ($\\frac{1.200}{15} = 80$) para evitar erro de vírgula.',
    optionFeedback: [
      'Com $60$ pág: $12 + 15 = 27$ vs. $24$ (ainda diferentes).',
      'Com $75$ pág: $30{,}75$ vs. $30$ (quase!).',
      'Correto! $12 + 0{,}25(80) = 32$ e $0{,}40(80) = 32$.',
      'Com $90$ pág: $34{,}50$ vs. $36$.',
      'Com $100$ pág: $37$ vs. $40$.',
    ],
    stepByStep: [
      'Equacione os custos: $12 + 0{,}25n = 0{,}40n$.',
      'Subtraia $0{,}25n$: $12 = 0{,}15n$.',
      'Multiplique por $100$ para tirar a vírgula: $1.200 = 15n \\Rightarrow n = 80$ páginas.',
    ],
    memoryTakeaway:
      'Comparação de tarifas com fixo $+$ variável: $\\text{Quantidade de empate} = \\dfrac{\\text{Diferença nas taxas fixas}}{\\text{Diferença no preço unitário}}$ ($12 \\div 0{,}15 = 80$)!',
  },
  {
    id: 'mat-q165',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    source: 'Edital 12.2 · Sistema por Soma e Diferença',
    prompt:
      'A diferença entre o preço de um teclado e o de um mouse é R$ 70,00, e o dobro do preço do teclado somado ao triplo do preço do mouse é igual a R$ 440,00. Quanto custa o mouse?',
    options: ['R$ 50,00.', 'R$ 60,00.', 'R$ 75,00.', 'R$ 130,00.', 'R$ 140,00.'],
    correctIndex: 1,
    explanation:
      'Sistema: $t - m = 70 \\Rightarrow t = m + 70$ e $2t + 3m = 440$. Substituindo $t$: $2(m + 70) + 3m = 440 \\Rightarrow 2m + 140 + 3m = 440 \\Rightarrow 5m = 300 \\Rightarrow m =$ R$ 60,00.',
    trapNote:
      'A letra D (R$ 130,00) é o preço do TECLADO! Releia a pergunta antes de marcar o gabarito.',
    optionFeedback: [
      'Se mouse $= 50$, teclado $= 120$, soma $2(120)+3(50) = 390 \\neq 440$.',
      'Correto! Mouse $=$ R$ 60,00 e teclado $=$ R$ 130,00 ($260 + 180 = 440$).',
      'Daria soma diferente de $440$.',
      'Armadilha! R$ 130,00 é o preço do TECLADO, mas a questão perguntou o preço do MOUSE!',
      'Daria soma incompatível.',
    ],
    stepByStep: [
      'Monte: $t - m = 70$ e $2t + 3m = 440$.',
      'Isole $t = m + 70$ e substitua na 2ª equação: $2(m + 70) + 3m = 440$.',
      'Resolva: $5m = 300 \\Rightarrow m =$ R$ 60,00.',
    ],
    memoryTakeaway:
      'Se a pergunta pede uma incógnita específica ($m$), substitua sempre a OUTRA ($t = m + 70$) para já achar a resposta direta!',
  },
  {
    id: 'mat-q166',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    source: 'Edital 12.2 · Classificação de Sistemas Lineares (Impossível/Possível)',
    prompt:
      'Para qual valor da constante $k$ o sistema linear $\\begin{cases} 2x + 3y = 10 \\\\ 4x + k y = 15 \\end{cases}$ NÃO possui nenhuma solução real (sistema impossível)?',
    options: ['$k = 3$', '$k = 4$', '$k = 5$', '$k = 6$', '$k = 9$'],
    correctIndex: 3,
    explanation:
      'Para um sistema $2 \\times 2$ ser impossível (retas paralelas), os coeficientes de $x$ e $y$ devem ser proporcionais, mas o termo independente NÃO pode seguir a mesma proporção: $\\frac{2}{4} = \\frac{3}{k} \\neq \\frac{10}{15}$. Logo $\\frac{1}{2} = \\frac{3}{k} \\Rightarrow k = 6$ (note que $\\frac{10}{15} = \\frac{2}{3} \\neq \\frac{1}{2}$, confirmando que é impossível).',
    trapNote:
      'Se a 2ª linha fosse $4x + 6y = 20$ (proporcional até no resultado), teria INFINITAS soluções (SPI). Como é $15 \\neq 20$, é IMPOSSÍVEL (SI)!',
    optionFeedback: [
      'Se $k = 3$, as retas se cruzam em solução única.',
      'Se $k = 4$, há solução única.',
      'Se $k = 5$, há solução única.',
      'Correto! Dobrou $2x + 3y$ virando $4x + 6y$, mas $15 \\neq 20$: contradição impossível!',
      'Se $k = 9$, há solução única.',
    ],
    stepByStep: [
      'Multiplique a 1ª equação por $2$: $4x + 6y = 20$.',
      'Compare com a 2ª equação ($4x + ky = 15$): se $k = 6$, o lado esquerdo fica idêntico ($4x + 6y$), porém igualado a $20$ e $15$ ao mesmo tempo!',
      'Contradição ($20 = 15$) $\\Rightarrow$ nenhuma solução ($k = 6$).',
    ],
    memoryTakeaway:
      'Mesmos coeficientes de $(x, y)$ multiplicados e resultado DIFERENTE $=$ retas paralelas $=$ sistema IMPOSSÍVEL!',
  },
  {
    id: 'mat-q167',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    source: 'Edital 12.2 · Distribuição com Equação do 1º Grau',
    prompt:
      'Dividindo uma quantia de R$ 270,00 entre três colegas de equipe, sabe-se que Bruno recebeu R$ 30,00 a mais que Ana, e Carla recebeu o dobro do que recebeu Bruno. Quanto recebeu Ana?',
    options: ['R$ 45,00.', 'R$ 50,00.', 'R$ 60,00.', 'R$ 75,00.', 'R$ 90,00.'],
    correctIndex: 0,
    explanation:
      'Seja $x$ o valor de Ana. Então Bruno $= x + 30$ e Carla $= 2(x + 30) = 2x + 60$. Soma total: $x + (x + 30) + (2x + 60) = 270 \\Rightarrow 4x + 90 = 270 \\Rightarrow 4x = 180 \\Rightarrow x =$ R$ 45,00.',
    trapNote:
      'Escreva Carla em função de Bruno ($2(x + 30)$) com parênteses, senão você esquece de dobrar os $30$ também!',
    optionFeedback: [
      'Correto! Ana $= 45$, Bruno $= 75$, Carla $= 150$. Total $= 45 + 75 + 150 =$ R$ 270,00.',
      'Com Ana $= 50$, daria $50 + 80 + 160 = 290 \\neq 270$.',
      'Esqueceu de dobrar os $30$ de Bruno ao calcular Carla ($2x + 30$ daria $x = 60$).',
      'R$ 75,00 é a quantia de BRUNO, não de Ana.',
      'Valor incompatível.',
    ],
    stepByStep: [
      'Expresse tudo em termos de Ana ($x$): Ana $= x$; Bruno $= x + 30$; Carla $= 2(x + 30) = 2x + 60$.',
      'Some: $x + x + 30 + 2x + 60 = 270 \\Rightarrow 4x + 90 = 270$.',
      'Resolva: $4x = 180 \\Rightarrow x =$ R$ 45,00.',
    ],
    memoryTakeaway:
      'Quando uma pessoa depende da outra ($C = 2B$ e $B = A + 30$), use a pessoa-base ($A = x$) e proteja $2(x + 30)$ com parênteses!',
  },
  {
    id: 'mat-q168',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    source: 'Edital 12.2 · Razão Traduzida em Equação do 1º Grau',
    prompt:
      'Qual número devemos SOMAR simultaneamente ao numerador e ao denominador da fração $\\dfrac{3}{7}$ para que ela se torne equivalente a $\\dfrac{3}{4}$?',
    options: ['6.', '8.', '9.', '12.', '15.'],
    correctIndex: 2,
    explanation:
      'Chamando o número de $x$: $\\dfrac{3 + x}{7 + x} = \\dfrac{3}{4}$. Multiplicando em cruz: $4(3 + x) = 3(7 + x) \\Rightarrow 12 + 4x = 21 + 3x \\Rightarrow x = 21 - 12 = 9$. Conferindo: $\\frac{3+9}{7+9} = \\frac{12}{16} = \\frac{3}{4}$.',
    trapNote:
      'Não adicione $x$ só em cima! O enunciado pede “ao numerador E ao denominador”.',
    optionFeedback: [
      '$\\frac{3+6}{7+6} = \\frac{9}{13} \\neq \\frac{3}{4}$.',
      '$\\frac{11}{15} \\neq \\frac{3}{4}$.',
      'Correto! $\\frac{3+9}{7+9} = \\frac{12}{16} = \\frac{3}{4}$.',
      '$\\frac{15}{19} \\neq \\frac{3}{4}$.',
      '$\\frac{18}{22} = \\frac{9}{11} \\neq \\frac{3}{4}$.',
    ],
    stepByStep: [
      'Monte a proporção: $\\dfrac{3 + x}{7 + x} = \\dfrac{3}{4}$.',
      'Multiplique em cruz: $4(3 + x) = 3(7 + x) \\Rightarrow 12 + 4x = 21 + 3x$.',
      'Isole $x$: $4x - 3x = 21 - 12 \\Rightarrow x = 9$.',
    ],
    memoryTakeaway:
      'A diferença entre denominador e numerador ($7 - 3 = 4$) não muda quando você soma o mesmo número aos dois! Em $\\frac{3}{4}$ multiplicada por $4$ ($\\frac{12}{16}$), a diferença também é $4$: logo $12 - 3 = 9$!',
  },
  {
    id: 'mat-q169',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    source: 'Edital 12.2 · Sistema de Trocas e Empréstimos',
    prompt:
      'Caio e Davi têm juntos $100$ figurinhas. Se Caio der $15$ figurinhas para Davi, os dois ficarão com a MESMA quantidade. Quantas figurinhas Caio tem inicialmente?',
    options: ['55 figurinhas.', '60 figurinhas.', '65 figurinhas.', '70 figurinhas.', '75 figurinhas.'],
    correctIndex: 2,
    explanation:
      'Se após a transferência os dois empatam com $100$ figurinhas no total, cada um fica com $50$. Se Caio ficou com $50$ depois de dar $15$, inicialmente Caio tinha $50 + 15 = 65$ figurinhas (e Davi tinha $35$). Algebricamente: $C - 15 = D + 15 \\Rightarrow C - D = 30$, e com $C + D = 100 \\Rightarrow 2C = 130 \\Rightarrow C = 65$.',
    trapNote:
      'Quando $A$ dá $k$ para $B$ e empata, a diferença inicial era $2k$ ($2 \\times 15 = 30$), não $k$!',
    optionFeedback: [
      'Se Caio tivesse $55$ e desse $15$, ficaria com $40$ enquanto Davi iria para $60$.',
      'Ficaria com $45$ vs. $55$.',
      'Correto! Caio ($65$) dá $15$ ao Davi ($35$): ambos passam a ter $50$ figurinhas.',
      'Ficaria com $55$ vs. $45$.',
      'Ficaria com $60$ vs. $40$.',
    ],
    stepByStep: [
      'Equação 1: $C + D = 100$. Equação 2: $C - 15 = D + 15 \\Rightarrow C - D = 30$.',
      'Some as equações: $2C = 130 \\Rightarrow C = 65$.',
    ],
    memoryTakeaway:
      'Se quem tem mais dá $15$ para quem tem menos, um diminui $15$ e o outro aumenta $15$ — diferença inicial $= 30$!',
  },
  {
    id: 'mat-q170',
    discipline: 'MAT',
    topicId: 'mat-equacoes',
    source: 'Edital 12.2 · Sistema com Frações Lineares',
    prompt:
      'Resolva o sistema $\\begin{cases} \\dfrac{x}{2} + \\dfrac{y}{3} = 7 \\\\ x - y = 4 \\end{cases}$ e assinale o valor da soma $x + y$:',
    options: ['12.', '14.', '16.', '18.', '20.'],
    correctIndex: 2,
    explanation:
      'Multiplicando a 1ª equação pelo $\\text{MMC}(2, 3) = 6$: $3x + 2y = 42$. Da 2ª equação: $x = y + 4$. Substituindo: $3(y + 4) + 2y = 42 \\Rightarrow 3y + 12 + 2y = 42 \\Rightarrow 5y = 30 \\Rightarrow y = 6$. Logo $x = 6 + 4 = 10$. Assim, $x + y = 10 + 6 = 16$.',
    trapNote:
      'Não esqueça de multiplicar o $7$ da 1ª equação por $6$ ($7 \\times 6 = 42$), e confira se marcou $x + y = 16$, não $x = 10$!',
    optionFeedback: [
      'Erro aritmético ao eliminar os denominadores.',
      'Erro na soma final.',
      'Correto! $x = 10$ e $y = 6 \\Rightarrow \\frac{10}{2} + \\frac{6}{3} = 5 + 2 = 7$, $10 - 6 = 4$, e $x + y = 16$.',
      'Valor incompatível com a 1ª equação.',
      'Substituiu errado ao encontrar $x$.',
    ],
    stepByStep: [
      'Elimine as frações da 1ª multiplicando por $6$: $3x + 2y = 42$.',
      'Use $x = y + 4$: $3(y + 4) + 2y = 42 \\Rightarrow 5y + 12 = 42 \\Rightarrow 5y = 30 \\Rightarrow y = 6$.',
      'Calcule $x = 6 + 4 = 10$ e some: $x + y = 16$.',
    ],
    memoryTakeaway:
      'Antes de resolver sistema com frações, limpe a linha fracionária multiplicando pelo MMC dos denominadores!',
  },
  // =========================================================
  // TÓPICO 9: ÂNGULOS E POLÍGONOS (20)
  // =========================================================
  {
    id: 'mat-q29',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    source: 'Edital 12.2 · Ângulos Adjacentes Suplementares',
    stimulusId: 'geo-angulos-suplementares',
    prompt:
      'Na figura, os dois ângulos adjacentes medem $(3x - 10^\\circ)$ e $(x + 30^\\circ)$ e formam juntos um ângulo raso ($180^\\circ$). Nessas condições, qual é a medida do MENOR desses dois ângulos?',
    options: ['40°.', '50°.', '70°.', '110°.', '120°.'],
    correctIndex: 2,
    explanation:
      'Como os ângulos são suplementares: $(3x - 10^\\circ) + (x + 30^\\circ) = 180^\\circ \\Rightarrow 4x + 20^\\circ = 180^\\circ \\Rightarrow 4x = 160^\\circ \\Rightarrow x = 40^\\circ$. Substituindo de volta para achar os dois ângulos: $3(40^\\circ) - 10^\\circ = 110^\\circ$ e $40^\\circ + 30^\\circ = 70^\\circ$. Logo, o menor mede $70^\\circ$.',
    trapNote:
      'A letra A ($40^\\circ$) é apenas o valor da incógnita $x$, e a letra D ($110^\\circ$) é o ângulo MAIOR — o comando pediu o MENOR!',
    optionFeedback: [
      'Armadilha! $40^\\circ$ é apenas o valor de $x$, ainda falta substituir em $x + 30^\\circ$.',
      'Erro aritmético na equação $4x + 20 = 180$.',
      'Correto! $x = 40^\\circ \\Rightarrow$ os ângulos são $70^\\circ$ e $110^\\circ$; o menor é $70^\\circ$.',
      'Atenção: $110^\\circ$ é o MAIOR ângulo, e o enunciado pediu o MENOR.',
      'Somaria $190^\\circ$ com o outro ângulo.',
    ],
    stepByStep: [
      'Iguale a soma ao ângulo raso: $(3x - 10^\\circ) + (x + 30^\\circ) = 180^\\circ$.',
      'Resolva: $4x + 20^\\circ = 180^\\circ \\Rightarrow 4x = 160^\\circ \\Rightarrow x = 40^\\circ$.',
      'Calcule ambos: $3(40^\\circ) - 10^\\circ = 110^\\circ$ e $40^\\circ + 30^\\circ = 70^\\circ$.',
      'O menor ângulo mede $70^\\circ$.',
    ],
    memoryTakeaway:
      'Em geometria, $x$ quase nunca é a resposta final! Sempre substitua $x$ e leia se pediu o maior ou o menor ângulo.',
  },
  {
    id: 'mat-q30',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    source: 'Edital 12.2 · Ângulos em Retas Paralelas',
    stimulusId: 'geo-paralelas-transversal',
    prompt:
      'Na figura, as retas $r$ e $s$ são paralelas ($r \\parallel s$) e cortadas pela transversal $t$. Sabendo que os ângulos correspondentes assinalados medem $(2x + 15^\\circ)$ e $(3x - 25^\\circ)$, quanto mede cada um desses ângulos?',
    options: ['40°.', '85°.', '95°.', '105°.', '115°.'],
    correctIndex: 2,
    explanation:
      'Ângulos correspondentes em retas paralelas são congruentes (têm a mesma medida): $2x + 15^\\circ = 3x - 25^\\circ \\Rightarrow x = 40^\\circ$. Substituindo: $2(40^\\circ) + 15^\\circ = 95^\\circ$ (e $3(40^\\circ) - 25^\\circ = 95^\\circ$).',
    trapNote:
      'Identifique se o par é correspondente/alterno (iguais) ou colateral (somam $180^\\circ$) — e nunca pare no $x = 40^\\circ$ (letra A)!',
    optionFeedback: [
      'Armadilha! $40^\\circ$ é apenas o valor de $x$, não a medida do ângulo.',
      'Somou $2(40) + 5$ em vez de $+15$.',
      'Correto! $2(40^\\circ) + 15^\\circ = 95^\\circ$ e $3(40^\\circ) - 25^\\circ = 95^\\circ$.',
      'Substituiu $x$ errado.',
      'Erro ao passar $-25$ para o outro lado.',
    ],
    stepByStep: [
      'Ângulos correspondentes são iguais: $2x + 15^\\circ = 3x - 25^\\circ$.',
      'Isole $x$: $15^\\circ + 25^\\circ = 3x - 2x \\Rightarrow x = 40^\\circ$.',
      'Substitua em qualquer um deles: $2(40^\\circ) + 15^\\circ = 95^\\circ$.',
    ],
    memoryTakeaway:
      'Retas paralelas $+$ transversal formam só dois tamanhos de ângulo: agudos iguais entre si e obtusos iguais entre si (um agudo $+$ um obtuso $= 180^\\circ$)!',
  },
  {
    id: 'mat-q31',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    source: 'Edital 12.2 · Complemento e Suplemento',
    prompt:
      'O suplemento de um ângulo agudo é exatamente igual ao triplo do seu complemento. Qual é a medida desse ângulo?',
    options: ['30°.', '36°.', '45°.', '60°.', '75°.'],
    correctIndex: 2,
    explanation:
      'Seja $x$ o ângulo. Suplemento $= 180^\\circ - x$ e Complemento $= 90^\\circ - x$. Montando a equação: $180 - x = 3(90 - x) \\Rightarrow 180 - x = 270 - 3x \\Rightarrow 2x = 90 \\Rightarrow x = 45^\\circ$.',
    trapNote:
      'Não troque complemento ($90^\\circ - x$) com suplemento ($180^\\circ - x$) nem com replemento ($360^\\circ - x$).',
    optionFeedback: [
      'Para $30^\\circ$: suplemento $= 150^\\circ$, triplo do complemento $= 3(60^\\circ) = 180^\\circ$ (diferentes).',
      'Para $36^\\circ$: suplemento $= 144^\\circ \\neq 3(54^\\circ) = 162^\\circ$.',
      'Correto! Para $45^\\circ$: suplemento $= 135^\\circ$ e triplo do complemento $= 3(45^\\circ) = 135^\\circ$.',
      'Para $60^\\circ$: suplemento $= 120^\\circ \\neq 3(30^\\circ) = 90^\\circ$.',
      'Para $75^\\circ$: suplemento $= 105^\\circ \\neq 3(15^\\circ) = 45^\\circ$.',
    ],
    stepByStep: [
      'Escreva: suplemento $= 180^\\circ - x$; complemento $= 90^\\circ - x$.',
      'Equacione: $180 - x = 3(90 - x) = 270 - 3x$.',
      'Resolva: $3x - x = 270 - 180 \\Rightarrow 2x = 90 \\Rightarrow x = 45^\\circ$.',
    ],
    memoryTakeaway:
      'Ordem alfabética ajuda na hora da prova: **C**omplemento ($90^\\circ$) $<$ **S**uplemento ($180^\\circ$) $<$ **R**eplemento ($360^\\circ$)!',
  },
  {
    id: 'mat-q32',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    source: 'Edital 12.2 · Soma de Ângulos e Diagonais de Polígonos',
    stimulusId: 'geo-poligono-hexagono',
    prompt:
      'A soma dos ângulos internos de um determinado polígono convexo é igual a $1.080^\\circ$. Quantas diagonais possui esse polígono ao todo?',
    options: ['9 diagonais.', '14 diagonais.', '20 diagonais.', '27 diagonais.', '35 diagonais.'],
    correctIndex: 2,
    explanation:
      'Pela fórmula $S_i = (n - 2) \\cdot 180^\\circ$: $(n - 2) \\cdot 180^\\circ = 1.080^\\circ \\Rightarrow n - 2 = 6 \\Rightarrow n = 8$ lados (octógono). O total de diagonais vale $d = \\dfrac{n(n - 3)}{2} = \\dfrac{8 \\cdot 5}{2} = 20$ diagonais.',
    trapNote:
      'Cuidado para não confundir diagonais que partem de UM vértice ($n - 3 = 5$) nem esquecer de dividir por $2$ ($8 \\cdot 5 = 40$, metade $= 20$)!',
    optionFeedback: [
      '$9$ diagonais é de um hexágono ($n = 6$, $S_i = 720^\\circ$).',
      '$14$ diagonais é de um heptágono ($n = 7$, $S_i = 900^\\circ$).',
      'Correto! $S_i = 1.080^\\circ \\Rightarrow n = 8 \\Rightarrow d = \\frac{8 \\cdot 5}{2} = 20$ diagonais.',
      '$27$ diagonais é de um eneágono ($n = 9$, $S_i = 1.260^\\circ$).',
      '$35$ diagonais é de um decágono ($n = 10$, $S_i = 1.440^\\circ$).',
    ],
    stepByStep: [
      'Descubra o número de lados: $(n - 2) \\cdot 180^\\circ = 1.080^\\circ \\Rightarrow n - 2 = 6 \\Rightarrow n = 8$.',
      'Aplique a fórmula de diagonais totais: $d = \\dfrac{n(n - 3)}{2}$.',
      'Substitua $n = 8$: $d = \\dfrac{8 \\cdot (8 - 3)}{2} = \\dfrac{40}{2} = 20$ diagonais.',
    ],
    memoryTakeaway:
      'Divida $S_i$ por $180^\\circ$ e some $+2$ para achar o número de lados na hora ($\\frac{1.080}{180} + 2 = 6 + 2 = 8$ lados)!',
  },
  {
    id: 'mat-q33',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    source: 'Edital 12.2 · Polígonos Regulares (Ângulo Interno e Externo)',
    prompt:
      'Em qual polígono regular a medida de cada ângulo interno é igual ao TRIPLO da medida do seu ângulo externo?',
    options: ['Pentágono.', 'Hexágono.', 'Octógono.', 'Decágono.', 'Dodecágono.'],
    correctIndex: 2,
    explanation:
      'Em todo polígono convexo, o ângulo interno e o externo de um mesmo vértice são suplementares: $a_i + a_e = 180^\\circ$. Se $a_i = 3 \\cdot a_e$, então $3a_e + a_e = 180^\\circ \\Rightarrow 4a_e = 180^\\circ \\Rightarrow a_e = 45^\\circ$. Como $S_e = 360^\\circ$ sempre, temos $n = \\dfrac{360^\\circ}{45^\\circ} = 8$ lados (octógono).',
    trapNote:
      'Usar $a_e = \\frac{360^\\circ}{n}$ e $a_i + a_e = 180^\\circ$ resolve qualquer problema de polígono regular em 2 linhas, evitando frações pesadas!',
    optionFeedback: [
      'No pentágono ($n=5$), $a_e = 72^\\circ$ e $a_i = 108^\\circ$ (não é o triplo).',
      'No hexágono ($n=6$), $a_e = 60^\\circ$ e $a_i = 120^\\circ$ ($a_i = 2a_e$, dobro!).',
      'Correto! No octógono ($n=8$), $a_e = 45^\\circ$ e $a_i = 135^\\circ = 3 \\cdot 45^\\circ$.',
      'No decágono ($n=10$), $a_e = 36^\\circ$ e $a_i = 144^\\circ = 4 \\cdot 36^\\circ$.',
      'No dodecágono ($n=12$), $a_e = 30^\\circ$ e $a_i = 150^\\circ = 5 \\cdot 30^\\circ$.',
    ],
    stepByStep: [
      'Use a relação $a_i + a_e = 180^\\circ$ substituindo $a_i = 3a_e$: $4a_e = 180^\\circ \\Rightarrow a_e = 45^\\circ$.',
      'Como a soma externa é sempre $360^\\circ$, faça $n = \\dfrac{360^\\circ}{45^\\circ} = 8$ lados.',
      'Polígono de $8$ lados = Octógono.',
    ],
    memoryTakeaway:
      'Nunca decore a fórmula do ângulo interno! Ache primeiro o ângulo EXTERNO ($a_i + a_e = 180^\\circ$) e divida $360^\\circ$ por ele para achar $n$!',
  },
  {
    id: 'mat-q171',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    source: 'Edital 12.2 · Ângulos Opostos pelo Vértice (OPV)',
    stimulusId: 'geo-angulos-opv',
    prompt:
      'Duas retas concorrentes formam os ângulos assinalados na figura. Sabendo que $\\alpha = 3x - 20^\\circ$ e $\\beta = x + 40^\\circ$ são opostos pelo vértice, qual é a medida do ângulo suplementar $\\gamma$?',
    options: ['30°.', '70°.', '110°.', '120°.', '140°.'],
    correctIndex: 2,
    explanation:
      'Ângulos opostos pelo vértice (OPV) têm medidas iguais: $\\alpha = \\beta \\Rightarrow 3x - 20^\\circ = x + 40^\\circ \\Rightarrow 2x = 60^\\circ \\Rightarrow x = 30^\\circ$. Calculando $\\alpha$: $3(30^\\circ) - 20^\\circ = 70^\\circ$. Como $\\alpha + \\gamma = 180^\\circ$, temos $\\gamma = 180^\\circ - 70^\\circ = 110^\\circ$.',
    trapNote:
      'Pegadinha clássica de dois passos: $30^\\circ$ é $x$, $70^\\circ$ é $\\alpha$ (e $\\beta$), mas a questão pediu o adjacente suplementar $\\gamma = 110^\\circ$!',
    optionFeedback: [
      'Armadilha! $30^\\circ$ é apenas o valor de $x$.',
      'Armadilha! $70^\\circ$ é a medida de $\\alpha$ e $\\beta$, não do ângulo $\\gamma$ pedido.',
      'Correto! $\\alpha = \\beta = 70^\\circ \\Rightarrow \\gamma = 180^\\circ - 70^\\circ = 110^\\circ$.',
      'Erro aritmético ao subtrair de $180^\\circ$.',
      'Somaria $210^\\circ$ com $\\alpha$.',
    ],
    stepByStep: [
      'Iguale os ângulos OPV: $3x - 20^\\circ = x + 40^\\circ \\Rightarrow 2x = 60^\\circ \\Rightarrow x = 30^\\circ$.',
      'Encontre $\\alpha = 30^\\circ + 40^\\circ = 70^\\circ$.',
      'Calcule $\\gamma = 180^\\circ - 70^\\circ = 110^\\circ$.',
    ],
    memoryTakeaway:
      'Ângulos OPV são sempre CONGRUENTES ($\\alpha = \\beta$), e cada um deles junto ao vizinho do lado soma $180^\\circ$!',
  },
  {
    id: 'mat-q172',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    source: 'Edital 12.2 · Ângulos Colaterais em Paralelas',
    prompt:
      'Duas retas paralelas $r$ e $s$ são cortadas por uma transversal $t$, determinando dois ângulos colaterais internos cujas medidas são $(5x - 10^\\circ)$ e $(x + 70^\\circ)$. Quanto mede o MAIOR desses dois ângulos?',
    options: ['20°.', '90°.', '110°.', '130°.', '150°.'],
    correctIndex: 1,
    explanation:
      'Ângulos colaterais internos (mesmo lado da transversal, entre as paralelas) são SUPLEMENTARES: $(5x - 10^\\circ) + (x + 70^\\circ) = 180^\\circ \\Rightarrow 6x + 60^\\circ = 180^\\circ \\Rightarrow 6x = 120^\\circ \\Rightarrow x = 20^\\circ$. Substituindo: $5(20^\\circ) - 10^\\circ = 90^\\circ$ e $20^\\circ + 70^\\circ = 90^\\circ$. Logo ambos medem $90^\\circ$ (a transversal é perpendicular)!',
    trapNote:
      'Não iguale ângulos colaterais! Colaterais SOMAM $180^\\circ$ (se você igualasse, acharia $5x - 10 = x + 70 \\Rightarrow x = 20^\\circ$ por coincidência numérica do $90^\\circ$, mas em outros ângulos daria erro grave!).',
    optionFeedback: [
      '$20^\\circ$ é apenas o valor da variável $x$.',
      'Correto! $(5\\cdot 20 - 10) = 90^\\circ$ e $(20 + 70) = 90^\\circ$, somando exatos $180^\\circ$.',
      'Erro na substituição ou na soma.',
      'Somaria $220^\\circ$ se fosse suplementar de $90^\\circ$.',
      'Substituiu errado.',
    ],
    stepByStep: [
      'Colaterais internos somam $180^\\circ$: $(5x - 10^\\circ) + (x + 70^\\circ) = 180^\\circ$.',
      'Resolva: $6x + 60^\\circ = 180^\\circ \\Rightarrow 6x = 120^\\circ \\Rightarrow x = 20^\\circ$.',
      'Substitua: $5(20^\\circ) - 10^\\circ = 90^\\circ$ e $20^\\circ + 70^\\circ = 90^\\circ$.',
    ],
    memoryTakeaway:
      'Alternos ou Correspondentes $=$ IGUAIS; **CO**laterais $=$ **CO**mpletam $180^\\circ$!',
  },
  {
    id: 'mat-q173',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    source: 'Edital 12.2 · Conversão Graus, Minutos e Segundos',
    prompt:
      'Calcule a soma das medidas angulares $28^\\circ\\,42\'\\,35\'\' + 17^\\circ\\,35\'\\,45\'\'$ expressa na forma simplificada:',
    options: [
      '$45^\\circ\\,18\'\\,20\'\'$',
      '$46^\\circ\\,17\'\\,20\'\'$',
      '$45^\\circ\\,77\'\\,80\'\'$',
      '$46^\\circ\\,78\'\\,80\'\'$',
      '$46^\\circ\\,18\'\\,20\'\'$',
    ],
    correctIndex: 4,
    explanation:
      'Somando cada unidade: segundos $= 35\'\' + 45\'\' = 80\'\' = 1\'\\,20\'\'$; minutos $= 42\' + 35\' + 1\' = 78\' = 1^\\circ\\,18\'$; graus $= 28^\\circ + 17^\\circ + 1^\\circ = 46^\\circ$. Resultado simplificado: $46^\\circ\\,18\'\\,20\'\'$.',
    trapNote:
      'Sistema sexagesimal (base $60$): nunca some como decimal base $100$! Cada $60\'\'$ vira $1\'$ e cada $60\'$ vira $1^\\circ$.',
    optionFeedback: [
      'Esqueceu de passar $+1^\\circ$ vindo dos $78\'$.',
      'Esqueceu de somar o $+1\'$ vindo dos $80\'\'$.',
      'Forma bruta sem conversão sexagesimal.',
      'Não simplificou segundos nem minutos maiores que $60$.',
      'Correto! $80\'\' \\to 1\'20\'\'$, $78\' \\to 1^\\circ 18\'$, total $= 46^\\circ\\,18\'\\,20\'\'$.',
    ],
    stepByStep: [
      'Some segundos: $35\'\' + 45\'\' = 80\'\' = 60\'\' + 20\'\' \\to$ fica $20\'\'$ e sobe $1\'$.',
      'Some minutos: $42\' + 35\' + 1\' = 78\' = 60\' + 18\' \\to$ fica $18\'$ e sobe $1^\\circ$.',
      'Some graus: $28^\\circ + 17^\\circ + 1^\\circ = 46^\\circ \\Rightarrow 46^\\circ\\,18\'\\,20\'\'$.',
    ],
    memoryTakeaway:
      'Em graus, minutos e segundos (Edital 12.2 tópico 19), cada bloco que atingir ou passar de $60$ transfere $+1$ para a coluna à esquerda!',
  },
  {
    id: 'mat-q174',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    source: 'Edital 12.2 · Ângulo Entre Ponteiros do Relógio',
    prompt:
      'Às $2\\text{ h }20\\text{ min}$ (duas horas e vinte minutos), qual é a medida do MENOR ângulo formado entre os ponteiros das horas e dos minutos de um relógio analógico?',
    options: ['40°.', '50°.', '60°.', '65°.', '70°.'],
    correctIndex: 1,
    explanation:
      'Fórmula do ângulo entre ponteiros: $\\theta = \\left|\\dfrac{11M - 60H}{2}\\right|$. Substituindo $H = 2$ e $M = 20$: $\\theta = \\left|\\dfrac{11(20) - 60(2)}{2}\\right| = \\left|\\dfrac{220 - 120}{2}\\right| = \\dfrac{100}{2} = 50^\\circ$.',
    trapNote:
      'Armadilha clássica é responder $60^\\circ$ achando que às 2h20 o ponteiro pequeno fica parado exatamente no número 2! Enquanto o ponteiro grande anda $20$ min, o pequeno avança $10^\\circ$ na direção do 3.',
    optionFeedback: [
      'Erro aritmético no deslocamento do ponteiro das horas.',
      'Correto! Ponteiro dos minutos está no 4 ($120^\\circ$); o das horas andou $60^\\circ + \\frac{1}{3}(30^\\circ) = 70^\\circ \\Rightarrow 120^\\circ - 70^\\circ = 50^\\circ$.',
      'Armadilha! Ignorou que o ponteiro das horas se moveu $10^\\circ$ além do 2.',
      'Calculou metade errada.',
      '70° é a posição do ponteiro das horas a partir do 12, não o ângulo entre eles.',
    ],
    stepByStep: [
      'Aplique $\\theta = \\left|\\dfrac{11M - 60H}{2}\\right|$ com $H = 2$ e $M = 20$.',
      'Calcule: $\\left|\\dfrac{220 - 120}{2}\\right| = \\dfrac{100}{2} = 50^\\circ$.',
    ],
    memoryTakeaway:
      'Para ângulo de relógio: $11M - 60H$ em módulo dividido por $2$ (ou lembre que cada minuto movimenta $0{,}5^\\circ$ no ponteiro das horas)!',
  },
  {
    id: 'mat-q175',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    source: 'Edital 12.2 · Bissetrizes de Ângulos Adjacentes',
    prompt:
      'Dois ângulos $\\angle AOB$ e $\\angle BOC$ são adjacentes e suplementares, com $\\angle AOB = 112^\\circ$. Traçam-se as bissetrizes $OM$ de $\\angle AOB$ e $ON$ de $\\angle BOC$. Qual é a medida do ângulo $\\angle MON$ formado por essas duas bissetrizes?',
    options: ['56°.', '68°.', '78°.', '90°.', '112°.'],
    correctIndex: 3,
    explanation:
      'Como são suplementares, $\\angle BOC = 180^\\circ - 112^\\circ = 68^\\circ$. A bissetriz $OM$ pega metade de $112^\\circ = 56^\\circ$, e a bissetriz $ON$ pega metade de $68^\\circ = 34^\\circ$. O ângulo entre elas vale $56^\\circ + 34^\\circ = 90^\\circ$.',
    trapNote:
      'Propriedade elegante: as bissetrizes de quaisquer dois ângulos adjacentes SUPLEMENTARES sempre formam $90^\\circ$ (ângulo reto), não importa quais sejam os valores!',
    optionFeedback: [
      '$56^\\circ$ é apenas metade de $\\angle AOB$.',
      '$68^\\circ$ é a medida de $\\angle BOC$.',
      'Erro aritmético na soma das metades.',
      'Correto! $\\frac{\\angle AOB + \\angle BOC}{2} = \\frac{180^\\circ}{2} = 90^\\circ$ sempre!',
      '$112^\\circ$ é o ângulo $\\angle AOB$ original.',
    ],
    stepByStep: [
      'Ache $\\angle BOC = 180^\\circ - 112^\\circ = 68^\\circ$.',
      'Metades pelas bissetrizes: $\\angle MOB = \\frac{112^\\circ}{2} = 56^\\circ$ e $\\angle BON = \\frac{68^\\circ}{2} = 34^\\circ$.',
      'Some: $\\angle MON = 56^\\circ + 34^\\circ = 90^\\circ$.',
    ],
    memoryTakeaway:
      'Bissetrizes de dois ângulos adjacentes suplementares são SEMPRE perpendiculares ($\\frac{180^\\circ}{2} = 90^\\circ$)!',
  },
  {
    id: 'mat-q176',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    source: 'Edital 12.2 · Diagonais vs. Número de Lados',
    prompt:
      'Em qual polígono convexo o número TOTAL de diagonais é exatamente igual ao TRIPLO do número de seus lados?',
    options: ['Hexágono (6 lados).', 'Heptágono (7 lados).', 'Octógono (8 lados).', 'Eneágono (9 lados).', 'Decágono (10 lados).'],
    correctIndex: 3,
    explanation:
      'Temos $d = 3n$. Usando a fórmula $d = \\dfrac{n(n - 3)}{2}$: $\\dfrac{n(n - 3)}{2} = 3n$. Como $n > 0$, podemos dividir os dois lados por $n$: $\\dfrac{n - 3}{2} = 3 \\Rightarrow n - 3 = 6 \\Rightarrow n = 9$ lados (Eneágono).',
    trapNote:
      'Dividir os dois lados por $n$ transforma uma equação quadrática numa equação super simples do 1º grau ($\\frac{n-3}{2} = 3$)!',
    optionFeedback: [
      'Hexágono: $d = 9$, triplo de $6$ seria $18$.',
      'Heptágono: $d = 14$, triplo de $7$ seria $21$.',
      'Octógono: $d = 20$, triplo de $8$ seria $24$.',
      'Correto! No eneágono ($n = 9$), $d = \\frac{9 \\cdot 6}{2} = 27 = 3 \\times 9$.',
      'Decágono: $d = 35$, triplo de $10$ seria $30$.',
    ],
    stepByStep: [
      'Equacione: $\\dfrac{n(n - 3)}{2} = 3n$.',
      'Cancele $n$ dos dois lados (pois $n \\ge 3$): $\\dfrac{n - 3}{2} = 3$.',
      'Resolva: $n - 3 = 6 \\Rightarrow n = 9$ lados (eneágono).',
    ],
    memoryTakeaway:
      'Em polígonos onde $d = k \\cdot n$, cancele $n$ logo: $\\frac{n-3}{2} = k \\Rightarrow n = 2k + 3$!',
  },
  {
    id: 'mat-q177',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    source: 'Edital 12.2 · Regra do "Zigue-Zague" (Retas Paralelas)',
    prompt:
      'Duas retas paralelas horizontais $r$ e $s$ são ligadas internamente por uma linha poligonal em forma de “V” aberto para a direita, cujo vértice forma um ângulo desconhecido $x$. O segmento superior faz $32^\\circ$ com a reta $r$, e o segmento inferior faz $43^\\circ$ com a reta $s$ (ambos abertos para a esquerda). Qual é a medida de $x$?',
    options: ['11°.', '65°.', '75°.', '105°.', '115°.'],
    correctIndex: 2,
    explanation:
      'Traçando uma reta auxiliar paralela passando pelo vértice do ângulo $x$, os ângulos alternos internos dividem $x$ exatamente em duas partes: $32^\\circ$ em cima e $43^\\circ$ embaixo. Logo, $x = 32^\\circ + 43^\\circ = 75^\\circ$.',
    trapNote:
      'Na regra dos bicos entre paralelas: soma dos ângulos que apontam para um lado $=$ soma dos ângulos que apontam para o outro lado!',
    optionFeedback: [
      'Subtraiu $43^\\circ - 32^\\circ = 11^\\circ$ em vez de somar os ângulos alternos.',
      'Erro aritmético na soma.',
      'Correto! Pela paralela auxiliar no vértice: $x = 32^\\circ + 43^\\circ = 75^\\circ$.',
      '$105^\\circ$ é o suplemento de $75^\\circ$ (seria o ângulo aberto para o outro lado).',
      'Valor incompatível.',
    ],
    stepByStep: [
      'Passe uma reta imaginária paralela a $r$ e $s$ bem no vértice de $x$.',
      'Por alternos internos, a parte de cima de $x$ vale $32^\\circ$ e a de baixo vale $43^\\circ$.',
      'Some as duas partes: $x = 32^\\circ + 43^\\circ = 75^\\circ$.',
    ],
    memoryTakeaway:
      'Regra do “bico” entre paralelas: trace uma paralela pelo vértice ou lembre que o bico para um lado é a SOMA dos dois ângulos do lado oposto!',
  },
  {
    id: 'mat-q178',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    source: 'Edital 12.2 · Ângulos Internos de Pentágono Irregular',
    prompt:
      'Em um pentágono convexo, quatro de seus ângulos internos medem respectivamente $95^\\circ$, $110^\\circ$, $125^\\circ$ e $102^\\circ$. Qual é a medida do quinto ângulo interno?',
    options: ['98°.', '108°.', '112°.', '118°.', '138°.'],
    correctIndex: 1,
    explanation:
      'A soma dos ângulos internos de qualquer pentágono ($n = 5$) vale $S_i = (5 - 2) \\cdot 180^\\circ = 3 \\cdot 180^\\circ = 540^\\circ$. Soma dos quatro conhecidos: $95 + 110 + 125 + 102 = 432^\\circ$. Logo, o quinto mede $540^\\circ - 432^\\circ = 108^\\circ$.',
    trapNote:
      'A soma $S_i = 540^\\circ$ vale para QUALQUER pentágono convexo (regular ou irregular)!',
    optionFeedback: [
      'Erro na subtração $540 - 432$.',
      'Correto! $540^\\circ - (95 + 110 + 125 + 102) = 540^\\circ - 432^\\circ = 108^\\circ$.',
      'Somaria $544^\\circ$.',
      'Erro na soma dos quatro ângulos conhecidos.',
      'Usou $S_i$ errado.',
    ],
    stepByStep: [
      'Calcule a soma interna do pentágono: $S_i = (5 - 2) \\cdot 180^\\circ = 540^\\circ$.',
      'Some os $4$ ângulos dados: $95 + 110 + 125 + 102 = 432^\\circ$.',
      'Subtraia do total: $540^\\circ - 432^\\circ = 108^\\circ$.',
    ],
    memoryTakeaway:
      'Decorar os primeiros valores de $S_i$ poupa tempo: Triângulo $= 180^\\circ$, Quadrilátero $= 360^\\circ$, Pentágono $= 540^\\circ$, Hexágono $= 720^\\circ$!',
  },
  {
    id: 'mat-q179',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    source: 'Edital 12.2 · Replemento e Complemento Combinados',
    prompt:
      'O replemento de um ângulo excede o triplo do seu complemento em $150^\\circ$. Qual é a medida desse ângulo?',
    options: ['20°.', '30°.', '45°.', '60°.', '75°.'],
    correctIndex: 1,
    explanation:
      'Replemento $= 360^\\circ - x$; Complemento $= 90^\\circ - x$. Traduzindo “excede em $150^\\circ$”: $(360 - x) - 3(90 - x) = 150 \\Rightarrow 360 - x - 270 + 3x = 150 \\Rightarrow 90 + 2x = 150 \\Rightarrow 2x = 60 \\Rightarrow x = 30^\\circ$.',
    trapNote:
      'Cuidado com o sinal negativo na frente de $-3(90 - x)$: o resultado é $-270 + 3x$ (não $-3x$)!',
    optionFeedback: [
      'Para $x = 20^\\circ$: $340 - 3(70) = 130 \\neq 150$.',
      'Correto! Replemento ($330^\\circ$) $-$ triplo do complemento ($3 \\cdot 60^\\circ = 180^\\circ$) $= 150^\\circ$.',
      'Para $x = 45^\\circ$: $315 - 3(45) = 180 \\neq 150$.',
      'Para $x = 60^\\circ$: $300 - 3(30) = 210 \\neq 150$.',
      'Para $x = 75^\\circ$: $285 - 3(15) = 240 \\neq 150$.',
    ],
    stepByStep: [
      'Escreva: Replemento $= 360 - x$ e triplo do complemento $= 3(90 - x)$.',
      'Monte a diferença: $(360 - x) - 3(90 - x) = 150$.',
      'Resolva: $360 - x - 270 + 3x = 150 \\Rightarrow 90 + 2x = 150 \\Rightarrow 2x = 60 \\Rightarrow x = 30^\\circ$.',
    ],
    memoryTakeaway:
      '“$A$ excede $B$ em $150$” traduz-se matematicamente por $A - B = 150$ (ou $A = B + 150$)!',
  },
  {
    id: 'mat-q180',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    source: 'Edital 12.2 · Soma de Ângulos Externos',
    prompt:
      'Qual polígono regular tem cada ângulo externo medindo exatos $24^\\circ$ e quantas diagonais passam por cada um de seus vértices?',
    options: [
      'Pentadecágono (15 lados) e 12 diagonais por vértice.',
      'Dodecágono (12 lados) e 9 diagonais por vértice.',
      'Pentadecágono (15 lados) e 90 diagonais por vértice.',
      'Icoságono (20 lados) e 17 diagonais por vértice.',
      'Octógono (8 lados) e 5 diagonais por vértice.',
    ],
    correctIndex: 0,
    explanation:
      'Número de lados: $n = \\dfrac{360^\\circ}{a_e} = \\dfrac{360^\\circ}{24^\\circ} = 15$ lados (pentadecágono). De cada vértice partem $n - 3 = 15 - 3 = 12$ diagonais (pois não se liga a si mesmo nem aos 2 vizinhos).',
    trapNote:
      'Leia a diferença: “diagonais POR VÉRTICE” é apenas $(n - 3 = 12)$, enquanto o TOTAL do polígono seria $\\frac{15 \\cdot 12}{2} = 90$!',
    optionFeedback: [
      'Correto! $n = \\frac{360}{24} = 15$ lados (pentadecágono) e $15 - 3 = 12$ diagonais partindo de um vértice.',
      'Para $12$ lados, o ângulo externo seria $\\frac{360}{12} = 30^\\circ \\neq 24^\\circ$.',
      'Armadilha! $90$ é o número TOTAL de diagonais do polígono, NÃO as que partem de um único vértice.',
      'Para $20$ lados, $a_e = 18^\\circ$.',
      'Para $8$ lados, $a_e = 45^\\circ$.',
    ],
    stepByStep: [
      'Ache os lados: $n = \\dfrac{360^\\circ}{24^\\circ} = 15$ lados (pentadecágono).',
      'Calcule diagonais de UM vértice: $d_v = n - 3 = 15 - 3 = 12$.',
    ],
    memoryTakeaway:
      'Não confunda $d_{\\text{vértice}} = n - 3$ com $d_{\\text{total}} = \\dfrac{n(n - 3)}{2}$!',
  },
  {
    id: 'mat-q181',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    source: 'Edital 12.2 · Hexágono Regular e Triângulos Equiláteros',
    prompt:
      'Qual é a medida de cada ângulo INTERNO de um hexágono regular usado em pisos de ladrilho sem sobrar espaços?',
    options: ['90°.', '108°.', '120°.', '135°.', '144°.'],
    correctIndex: 2,
    explanation:
      'Em um hexágono regular ($n = 6$), o ângulo externo mede $a_e = \\dfrac{360^\\circ}{6} = 60^\\circ$. Logo, cada ângulo interno mede $a_i = 180^\\circ - 60^\\circ = 120^\\circ$ (3 juntos completam $360^\\circ$ num vértice, preenchendo o plano perfeitamente!).',
    trapNote:
      'Ladrilhos regulares que cobrem o chão sem buracos são apenas os que dividem $360^\\circ$: triângulo ($60^\\circ$), quadrado ($90^\\circ$) e hexágono ($120^\\circ$).',
    optionFeedback: [
      '$90^\\circ$ é o ângulo interno do quadrado.',
      '$108^\\circ$ é o ângulo interno do pentágono regular.',
      'Correto! $\\frac{720^\\circ}{6} = 120^\\circ$ (ou $180^\\circ - \\frac{360^\\circ}{6} = 120^\\circ$).',
      '$135^\\circ$ é o ângulo interno do octógono regular.',
      '$144^\\circ$ é o ângulo interno do decágono regular.',
    ],
    stepByStep: [
      'Ache o ângulo externo: $a_e = \\dfrac{360^\\circ}{6} = 60^\\circ$.',
      'Subtraia de $180^\\circ$: $a_i = 180^\\circ - 60^\\circ = 120^\\circ$.',
    ],
    memoryTakeaway:
      'Ângulos internos famosos: Triângulo $= 60^\\circ$, Quadrado $= 90^\\circ$, Pentágono $= 108^\\circ$, Hexágono $= 120^\\circ$, Octógono $= 135^\\circ$!',
  },
  {
    id: 'mat-q182',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    source: 'Edital 12.2 · Diagonais Que Passam Pelo Centro',
    prompt:
      'Em um polígono regular com um número PAR de lados ($n$), exatamente metade dos lados possui uma diagonal ligando vértices diametralmente opostos passando pelo centro ($d_{\\text{centro}} = \\frac{n}{2}$). Quantas diagonais NÃO passam pelo centro em um octógono regular ($n = 8$)?',
    options: ['4 diagonais.', '8 diagonais.', '12 diagonais.', '16 diagonais.', '20 diagonais.'],
    correctIndex: 3,
    explanation:
      'Total de diagonais do octógono ($n = 8$): $d = \\dfrac{8(8 - 3)}{2} = 20$. As diagonais que passam pelo centro são $\\frac{n}{2} = \\frac{8}{2} = 4$. Logo, as que NÃO passam pelo centro são $20 - 4 = 16$ diagonais.',
    trapNote:
      'Leia a palavra negativa (“NÃO passam pelo centro”) antes de assinalar $4$ ou $20$!',
    optionFeedback: [
      'Armadilha! $4$ são as diagonais que PASSAM pelo centro; a pergunta pede as que NÃO passam.',
      '$8$ é o número de lados do octógono.',
      'Erro aritmético ao calcular o total de diagonais.',
      'Correto! $20$ diagonais no total $- 4$ diagonais centrais $= 16$ não centrais.',
      '$20$ é o total geral de diagonais.',
    ],
    stepByStep: [
      'Total de diagonais do octógono: $d = \\frac{8 \\cdot 5}{2} = 20$.',
      'Diagonais pelo centro: $\\frac{8}{2} = 4$.',
      'Diagonais fora do centro: $20 - 4 = 16$.',
    ],
    memoryTakeaway:
      'Em polígono regular com $n$ PAR, passam pelo centro exatamente $\\frac{n}{2}$ diagonais (e se $n$ for ÍMPAR, zero passa pelo centro)!',
  },
  {
    id: 'mat-q183',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    source: 'Edital 12.2 · Razão Entre Soma Interna e Soma Externa',
    prompt:
      'Em um polígono convexo, a soma das medidas dos ângulos internos é igual ao QUÁDRUPLO da soma dos ângulos externos. Quantos lados tem esse polígono?',
    options: ['6 lados.', '8 lados.', '10 lados.', '12 lados.', '14 lados.'],
    correctIndex: 2,
    explanation:
      'Sabemos que a soma dos ângulos externos de QUALQUER polígono convexo é sempre $360^\\circ$. Assim, $S_i = 4 \\times 360^\\circ = 1.440^\\circ$. Pela fórmula $(n - 2) \\cdot 180^\\circ = 1.440^\\circ \\Rightarrow n - 2 = 8 \\Rightarrow n = 10$ lados (decágono).',
    trapNote:
      'Muita gente trava achando que falta a fórmula de $S_e$ — $S_e$ vale $360^\\circ$ em TODOS os polígonos convexos!',
    optionFeedback: [
      'Hexágono tem $S_i = 720^\\circ = 2 \\cdot 360^\\circ$ (dobro).',
      'Octógono tem $S_i = 1.080^\\circ = 3 \\cdot 360^\\circ$ (triplo).',
      'Correto! Decágono ($n = 10$) tem $S_i = 8 \\cdot 180^\\circ = 1.440^\\circ = 4 \\cdot 360^\\circ$.',
      'Dodecágono tem $S_i = 1.800^\\circ = 5 \\cdot 360^\\circ$.',
      '14 lados teria $S_i = 2.160^\\circ = 6 \\cdot 360^\\circ$.',
    ],
    stepByStep: [
      'Lembre que $S_e = 360^\\circ$ sempre.',
      'Como $S_i = 4 \\cdot S_e$, iguale $(n - 2) \\cdot 180^\\circ = 4 \\cdot 360^\\circ$.',
      'Divida por $180^\\circ$: $n - 2 = 4 \\cdot 2 = 8 \\Rightarrow n = 10$ lados.',
    ],
    memoryTakeaway:
      'Já que $360^\\circ = 2 \\cdot 180^\\circ$, se $S_i = k \\cdot S_e$, basta fazer $n = 2k + 2$ ($2 \\cdot 4 + 2 = 10$)!',
  },
  {
    id: 'mat-q184',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    source: 'Edital 12.2 · Ângulos de Um Quadrilátero',
    prompt:
      'As medidas dos quatro ângulos internos de um quadrilátero convexo são $(2x)$, $(3x - 10^\\circ)$, $(x + 40^\\circ)$ e $(2x + 10^\\circ)$. Quanto mede o MAIOR ângulo interno desse quadrilátero?',
    options: ['40°.', '80°.', '90°.', '110°.', '120°.'],
    correctIndex: 3,
    explanation:
      'A soma dos ângulos internos de um quadrilátero é $360^\\circ$: $2x + (3x - 10) + (x + 40) + (2x + 10) = 360 \\Rightarrow 8x + 40 = 360 \\Rightarrow 8x = 320 \\Rightarrow x = 40^\\circ$. Os ângulos medem: $80^\\circ$, $110^\\circ$, $80^\\circ$ e $90^\\circ$. O maior ângulo mede $110^\\circ$.',
    trapNote:
      'Depois de achar $x = 40^\\circ$, substitua nos QUATRO ângulos — não presuma qual expressão parece maior sem calcular!',
    optionFeedback: [
      '$40^\\circ$ é o valor de $x$.',
      '$80^\\circ$ é o menor ângulo ($2x$ e $x+40$).',
      '$90^\\circ$ é o ângulo $2x + 10$.',
      'Correto! $3(40^\\circ) - 10^\\circ = 110^\\circ$ é o maior dos quatro ângulos.',
      'Somaria mais que $360^\\circ$.',
    ],
    stepByStep: [
      'Some os $4$ termos igualando a $360^\\circ$: $8x + 40^\\circ = 360^\\circ$.',
      'Resolva: $8x = 320^\\circ \\Rightarrow x = 40^\\circ$.',
      'Calcule os $4$ ângulos: $80^\\circ, 110^\\circ, 80^\\circ, 90^\\circ \\Rightarrow$ maior $= 110^\\circ$.',
    ],
    memoryTakeaway:
      'Soma dos ângulos internos de QUALQUER quadrilátero convexo é sempre $360^\\circ$!',
  },
  {
    id: 'mat-q185',
    discipline: 'MAT',
    topicId: 'mat-angulos-poligonos',
    source: 'Edital 12.2 · Aumento no Número de Lados de um Polígono',
    prompt:
      'Quando aumentamos o número de lados de um polígono convexo em $3$ unidades, o que acontece com a soma dos seus ângulos internos ($S_i$)?',
    options: [
      'Aumenta $180^\\circ$.',
      'Aumenta $360^\\circ$.',
      'Permanece constante.',
      'Fica multiplicada por $3$.',
      'Aumenta $540^\\circ$.',
    ],
    correctIndex: 4,
    explanation:
      'Como $S_i(n) = (n - 2) \\cdot 180^\\circ$, cada lado a mais acrescenta exatamente $180^\\circ$ na soma dos ângulos internos. Aumentando $3$ lados: $3 \\times 180^\\circ = 540^\\circ$.',
    trapNote:
      'Quem permanece constante é a SOMA DOS ÂNGULOS EXTERNOS ($360^\\circ$); a soma interna cresce linearmente $180^\\circ$ por lado adicional.',
    optionFeedback: [
      '$180^\\circ$ é o aumento para apenas $1$ lado a mais.',
      '$360^\\circ$ é o aumento para $2$ lados a mais.',
      'Quem permanece sempre constante em $360^\\circ$ é a soma dos ângulos EXTERNOS.',
      'A relação não é multiplicativa por $3$.',
      'Correto! $S_i(n+3) - S_i(n) = [(n+3-2) - (n-2)] \\cdot 180^\\circ = 3 \\cdot 180^\\circ = 540^\\circ$.',
    ],
    stepByStep: [
      'Escreva $S_{\\text{nova}} = ((n + 3) - 2) \\cdot 180^\\circ = (n - 2)\\cdot 180^\\circ + 3 \\cdot 180^\\circ$.',
      'Calcule o acréscimo: $3 \\times 180^\\circ = 540^\\circ$.',
    ],
    memoryTakeaway:
      'Cada novo lado adicionado a um polígono convexo soma exatos $+180^\\circ$ aos ângulos internos (como colar mais um triângulo)!',
  },

  // =========================================================
  // TÓPICO 10: TRIÂNGULOS, TALES, SEMELHANÇA E CEVIANAS (20)
  // =========================================================
  {
    id: 'mat-q34',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    source: 'Edital 12.2 · Lei Angular de Tales e Classificação',
    prompt:
      'As medidas dos três ângulos internos de um triângulo são proporcionais aos números $2$, $3$ e $5$. Esse triângulo classifica-se, respectivamente quanto aos ângulos e quanto aos lados, como:',
    options: [
      'Acutângulo e isósceles.',
      'Obtusângulo e escaleno.',
      'Retângulo e escaleno.',
      'Retângulo e isósceles.',
      'Acutângulo e equilátero.',
    ],
    correctIndex: 2,
    explanation:
      'Pela Lei Angular de Tales, a soma dos ângulos internos de qualquer triângulo é $180^\\circ$: $2k + 3k + 5k = 180^\\circ \\Rightarrow 10k = 180^\\circ \\Rightarrow k = 18^\\circ$. Logo os ângulos medem $36^\\circ, 54^\\circ$ e $90^\\circ$. Como possui um ângulo reto ($90^\\circ$), é RETÂNGULO; e como os três ângulos são distintos, os três lados também são distintos, sendo ESCALENO.',
    trapNote:
      'Lembre da correspondência em todo triângulo: ângulos distintos implicam lados de medidas distintas (escaleno); dois ângulos iguais implicam isósceles.',
    optionFeedback: [
      'Tem um ângulo de $90^\\circ$ (não é acutângulo) e todos os ângulos diferentes.',
      'Não tem ângulo maior que $90^\\circ$ (o maior é exatamente $90^\\circ$).',
      'Correto! Ângulos $36^\\circ, 54^\\circ, 90^\\circ \\Rightarrow$ um ângulo reto (retângulo) e três medidas diferentes (escaleno).',
      'Para ser retângulo isósceles teria ângulos $45^\\circ, 45^\\circ, 90^\\circ$ (proporção $1:1:2$).',
      'Equilátero teria os três ângulos iguais a $60^\\circ$ ($1:1:1$).',
    ],
    stepByStep: [
      'Iguale a soma a $180^\\circ$: $2k + 3k + 5k = 180^\\circ \\Rightarrow 10k = 180^\\circ \\Rightarrow k = 18^\\circ$.',
      'Ângulos: $36^\\circ, 54^\\circ$ e $90^\\circ$.',
      'Tem $90^\\circ \\Rightarrow$ Retângulo. Todos distintos $\\Rightarrow$ Escaleno.',
    ],
    memoryTakeaway:
      'Sempre que a soma dos dois menores coeficientes for igual ao maior ($2 + 3 = 5$), o maior ângulo será exatos $90^\\circ$!',
  },
  {
    id: 'mat-q35',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    source: 'Edital 12.2 · Semelhança de Triângulos',
    stimulusId: 'geo-semelhanca-tales',
    prompt:
      'No triângulo $ABC$ ilustrado, o segmento $DE$ é paralelo à base $BC$ ($DE \\parallel BC$), com $AD = 6\\text{ cm}$, $DB = 3\\text{ cm}$ e $DE = 8\\text{ cm}$. Qual é a medida do segmento $BC$?',
    options: ['4 cm.', '10 cm.', '11 cm.', '12 cm.', '16 cm.'],
    correctIndex: 3,
    explanation:
      'Como $DE \\parallel BC$, os triângulos $ADE$ e $ABC$ são semelhantes ($\\triangle ADE \\sim \\triangle ABC$). O lado completo $AB$ do triângulo maior vale $AD + DB = 6 + 3 = 9\\text{ cm}$. Montando a razão entre bases e lados correspondentes: $\\dfrac{AD}{AB} = \\dfrac{DE}{BC} \\Rightarrow \\dfrac{6}{9} = \\dfrac{8}{x} \\Rightarrow 6x = 72 \\Rightarrow x = 12\\text{ cm}$.',
    trapNote:
      'Pegadinha clássica: JAMAIS faça $\\frac{6}{3} = \\frac{8}{x}$ (daria $x = 4\\text{ cm}$, letra A)! O valor $3$ é só o pedaço $DB$; o lado do $\\triangle ABC$ é $AB = 6 + 3 = 9$.',
    optionFeedback: [
      'Armadilha clássica! Usou $DB = 3$ em vez do lado completo $AB = 6 + 3 = 9$.',
      'Erro aritmético na proporção.',
      'Somou $3 + 8 = 11$ sem usar semelhança.',
      'Correto! $\\frac{6}{6+3} = \\frac{8}{BC} \\Rightarrow \\frac{6}{9} = \\frac{8}{BC} \\Rightarrow BC = 12\\text{ cm}$.',
      'Dobrou $DE = 8$ sem razão correta.',
    ],
    stepByStep: [
      'Calcule o lado completo do triângulo grande: $AB = AD + DB = 6 + 3 = 9\\text{ cm}$.',
      'Monte a semelhança $\\triangle ADE \\sim \\triangle ABC$: $\\dfrac{AD}{AB} = \\dfrac{DE}{BC}$.',
      'Substitua e resolva: $\\dfrac{6}{9} = \\dfrac{8}{x} \\Rightarrow 6x = 72 \\Rightarrow x = 12\\text{ cm}$.',
    ],
    memoryTakeaway:
      'Em $\\triangle ADE$ dentro de $\\triangle ABC$, quando entra a BASE paralela ($DE$ e $BC$), é SEMELHANÇA de triângulos — use o lado INTEIRO ($AB = AD + DB$)!',
  },
  {
    id: 'mat-q36',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    source: 'Edital 12.2 · Cevianas Notáveis (Bissetriz Interna)',
    stimulusId: 'geo-ceviana-bissetriz',
    prompt:
      'No triângulo $ABC$ da figura, $\\angle B = 70^\\circ$, $\\angle C = 50^\\circ$ e o segmento $AD$ é a bissetriz interna do ângulo $\\hat{A}$. Determine a medida do ângulo $\\angle ADB$:',
    options: ['60°.', '75°.', '80°.', '90°.', '100°.'],
    correctIndex: 2,
    explanation:
      'No $\\triangle ABC$ inteiro: $\\angle A = 180^\\circ - (70^\\circ + 50^\\circ) = 60^\\circ$. Como $AD$ é bissetriz de $\\hat{A}$, divide $60^\\circ$ ao meio: $\\angle BAD = 30^\\circ$. Agora olhe para o $\\triangle ABD$: $\\angle ADB = 180^\\circ - 70^\\circ - 30^\\circ = 80^\\circ$.',
    trapNote:
      'Não confunda BISSETRIZ (divide o ângulo do vértice ao meio) com ALTURA (formaria $90^\\circ$ na base — letra D)!',
    optionFeedback: [
      '$60^\\circ$ é o ângulo inteiro $\\hat{A}$, ou a diferença se confundiu os triângulos.',
      'Calculou metade errada ou usou médias.',
      'Correto! $\\angle A = 60^\\circ \\Rightarrow \\angle BAD = 30^\\circ \\Rightarrow \\angle ADB = 180^\\circ - 70^\\circ - 30^\\circ = 80^\\circ$.',
      'Armadilha! Seria $90^\\circ$ somente se $AD$ fosse ALTURA (ou se $AB = AC$).',
      '$100^\\circ$ é o ângulo suplementar adjacente $\\angle ADC$.',
    ],
    stepByStep: [
      'No $\\triangle ABC$: $\\angle A = 180^\\circ - 70^\\circ - 50^\\circ = 60^\\circ$.',
      'Como $AD$ é bissetriz: $\\angle BAD = \\angle CAD = \\frac{60^\\circ}{2} = 30^\\circ$.',
      'No $\\triangle ABD$: $\\angle ADB = 180^\\circ - 70^\\circ - 30^\\circ = 80^\\circ$.',
    ],
    memoryTakeaway:
      'Ceviana BISSETRIZ parte o ângulo do vértice em duas metades idênticas! Trace mentalmente o subtriângulo esquerdo ($\\triangle ABD$) e some $180^\\circ$.',
  },
  {
    id: 'mat-q37',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    source: 'Edital 12.2 · Cevianas e Pontos Notáveis',
    prompt:
      'Em um triângulo qualquer, a ceviana que une um vértice ao ponto médio do lado oposto e o ponto de encontro das três alturas recebem, respectivamente, os nomes de:',
    options: [
      'Altura e incentro.',
      'Mediana e ortocentro.',
      'Bissetriz e baricentro.',
      'Mediana e baricentro.',
      'Mediatriz e circuncentro.',
    ],
    correctIndex: 1,
    explanation:
      'A **mediana** liga o vértice ao ponto médio do lado oposto (suas interseções formam o baricentro). Já as três **alturas** se encontram no **ortocentro** (lembre de “orto” = reto/$90^\\circ$).',
    trapNote:
      'A letra D mistura a ceviana (mediana) com o SEU ponto de encontro (baricentro), ignorando que o segundo pedido é o encontro das ALTURAS!',
    optionFeedback: [
      'Altura não vai ao ponto médio, e incentro é o encontro das bissetrizes.',
      'Correto! Vértice ao ponto médio = Mediana; encontro das alturas = Ortocentro.',
      'Bissetriz divide o ângulo (não o lado), e baricentro é encontro das medianas.',
      'Armadilha! O segundo item perguntado foi o ponto de encontro das ALTURAS (ortocentro), não o das medianas (baricentro).',
      'Mediatriz é reta perpendicular ao ponto médio (não precisa passar pelo vértice).',
    ],
    stepByStep: [
      'Ceviana que divide o LADO oposto ao meio (ponto médio) $\\to$ **Mediana**.',
      'Encontro das três **Alturas** (perpendiculares $90^\\circ$) $\\to$ **Ortocentro**.',
    ],
    memoryTakeaway:
      'Trio sagrado de cevianas: **Mediana $\\to$ Baricentro** · **Bissetriz $\\to$ Incentro** · **Altura $\\to$ Ortocentro**!',
  },
  {
    id: 'mat-q38',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    source: 'Edital 12.2 · Semelhança Aplicada (Sombras)',
    prompt:
      'No mesmo instante em que uma haste vertical de $1{,}2\\text{ m}$ de altura projeta uma sombra horizontal de $0{,}9\\text{ m}$, um poste vertical próximo projeta uma sombra de $4{,}5\\text{ m}$. Qual é a altura do poste?',
    options: ['4,8 m.', '5,4 m.', '6,0 m.', '6,4 m.', '7,2 m.'],
    correctIndex: 2,
    explanation:
      'No mesmo instante, os raios solares têm a mesma inclinação, formando dois triângulos retângulos semelhantes: $\\dfrac{H}{4{,}5} = \\dfrac{1{,}2}{0{,}9}$. Simplificando $\\frac{1{,}2}{0{,}9} = \\frac{12}{9} = \\frac{4}{3}$, temos $H = \\frac{4}{3} \\times 4{,}5 = 6{,}0\\text{ m}$.',
    trapNote:
      'Mantenha a ordem correta na proporção: $\\frac{\\text{altura}}{\\text{sombra}}$ de um objeto igual a $\\frac{\\text{altura}}{\\text{sombra}}$ do outro!',
    optionFeedback: [
      'Multiplicou por escala errada.',
      'Multiplicou $4{,}5 \\times 1{,}2 = 5{,}4$ esquecendo de dividir por $0{,}9$.',
      'Correto! A sombra cresceu $5$ vezes ($4{,}5 \\div 0{,}9 = 5$), logo a altura também cresce $5$ vezes: $1{,}2 \\times 5 = 6{,}0\\text{ m}$.',
      'Erro aritmético.',
      'Subiu a proporção errada.',
    ],
    stepByStep: [
      'Compare as sombras: $\\dfrac{4{,}5}{0{,}9} = \\dfrac{45}{9} = 5$ (o poste tem sombra $5\\times$ maior).',
      'Multiplique a altura pelo mesmo fator $5$: $1{,}2 \\times 5 = 6{,}0\\text{ m}$.',
    ],
    memoryTakeaway:
      'Em problemas de sombra no mesmo horário, divida Sombra Grande $\\div$ Sombra Pequena ($4{,}5 \\div 0{,}9 = 5$) e multiplique pela altura pequena!',
  },
  {
    id: 'mat-q186',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    source: 'Edital 12.2 · Teorema de Tales no Feixe de Paralelas',
    stimulusId: 'geo-tales-feixe',
    prompt:
      'Na figura, o feixe de retas paralelas $r \\parallel s \\parallel t$ é cortado por duas retas transversais, determinando segmentos cujas medidas são $a = 6\\text{ cm}$, $b = 9\\text{ cm}$, $c = 8\\text{ cm}$ e $d = x$. Pelo Teorema de Tales, qual é a medida de $x$?',
    options: ['10 cm.', '11 cm.', '12 cm.', '14 cm.', '15 cm.'],
    correctIndex: 2,
    explanation:
      'Pelo Teorema de Tales, um feixe de paralelas determina segmentos proporcionais sobre quaisquer transversais: $\\dfrac{a}{b} = \\dfrac{c}{d} \\Rightarrow \\dfrac{6}{9} = \\dfrac{8}{x} \\Rightarrow 6x = 72 \\Rightarrow x = 12\\text{ cm}$.',
    trapNote:
      'Diferente do triângulo com base paralela ($DE / BC$), nos segmentos das próprias transversais comparamos pedaço sobre pedaço ($a / b = c / d$)!',
    optionFeedback: [
      'Apenas adicionou $+2$ seguindo diferença fixa ($8 - 6 = 2 \\to 10$), que é ERRADO em proporcionalidade!',
      'Fez diferença somada ($9 - 6 = 3 \\to 8 + 3 = 11$) em vez de multiplicar em cruz.',
      'Correto! $\\frac{6}{9} = \\frac{8}{12}$ (razão $\\frac{2}{3}$ dos dois lados).',
      'Erro aritmético na proporção.',
      'Somou $6 + 9 = 15$.',
    ],
    stepByStep: [
      'Monte a proporção do Teorema de Tales: $\\dfrac{6}{9} = \\dfrac{8}{x}$.',
      'Simplifique $\\frac{6}{9} = \\frac{2}{3}$: $\\dfrac{2}{3} = \\dfrac{8}{x}$.',
      'Multiplique em cruz: $2x = 24 \\Rightarrow x = 12\\text{ cm}$.',
    ],
    memoryTakeaway:
      'Jamais resolva Teorema de Tales somando diferenças constantes ($+3$ ou $+2$)! É sempre MULTIPLICAÇÃO/PROPORÇÃO em cruz!',
  },
  {
    id: 'mat-q187',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    source: 'Edital 12.2 · Cevianas (Altura e Mediana no Mesmo Triângulo)',
    stimulusId: 'geo-triangulo-altura',
    prompt:
      'No triângulo $ABC$ ilustrado, $AH$ é a altura relativa ao lado $BC$ e $AM$ é a mediana relativa ao mesmo lado. Sabendo que $BC = 14\\text{ cm}$, $BH = 4\\text{ cm}$ e $\\angle B = 52^\\circ$, quais são respectivamente as medidas do segmento $HM$ e do ângulo $\\angle BAH$?',
    options: [
      '$3\\text{ cm}$ e $38^\\circ$.',
      '$3\\text{ cm}$ e $52^\\circ$.',
      '$7\\text{ cm}$ e $38^\\circ$.',
      '$4\\text{ cm}$ e $42^\\circ$.',
      '$10\\text{ cm}$ e $38^\\circ$.',
    ],
    correctIndex: 0,
    explanation:
      'Como $AM$ é mediana, $M$ é o ponto médio de $BC$: logo $BM = \\frac{14}{2} = 7\\text{ cm}$. Como $H$ está entre $B$ e $M$ com $BH = 4\\text{ cm}$, temos $HM = BM - BH = 7 - 4 = 3\\text{ cm}$. Já no triângulo retângulo $AHB$ ($\\angle AHB = 90^\\circ$), $\\angle BAH = 90^\\circ - 52^\\circ = 38^\\circ$.',
    trapNote:
      '$7\\text{ cm}$ é a medida de $BM$ (metade da base), não de $HM$!',
    optionFeedback: [
      'Correto! $BM = 7\\text{ cm} \\Rightarrow HM = 7 - 4 = 3\\text{ cm}$; e no $\\triangle AHB$ retângulo, $\\angle BAH = 90^\\circ - 52^\\circ = 38^\\circ$.',
      'Repete $52^\\circ$ sem complementar até $90^\\circ$.',
      'Deu $BM = 7\\text{ cm}$ no lugar de $HM = 7 - 4 = 3\\text{ cm}$.',
      'Errou tanto o segmento quanto o ângulo complementar.',
      '$10\\text{ cm}$ é a medida de $HC = 14 - 4$, não de $HM$.',
    ],
    stepByStep: [
      'Como $AM$ é mediana, $M$ é ponto médio: $BM = \\frac{14}{2} = 7\\text{ cm}$.',
      'Subtraia $BH = 4$: $HM = 7 - 4 = 3\\text{ cm}$.',
      'Como $AH$ é altura, $\\triangle AHB$ é retângulo em $H$: $\\angle BAH = 90^\\circ - 52^\\circ = 38^\\circ$.',
    ],
    memoryTakeaway:
      'Altura sempre cria um ângulo de $90^\\circ$ (gerando dois triângulos retângulos!) e Mediana sempre parte a base oposta exatamente ao meio ($BM = MC$)!',
  },
  {
    id: 'mat-q188',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    source: 'Edital 12.2 · Teorema do Ângulo Externo',
    prompt:
      'Em um triângulo $ABC$, o ângulo interno em $A$ mede $x + 15^\\circ$, o ângulo interno em $B$ mede $2x - 5^\\circ$, e o ângulo EXTERNO adjacente ao vértice $C$ mede $130^\\circ$. Qual é o valor de $x$?',
    options: ['30°.', '35°.', '40°.', '45°.', '50°.'],
    correctIndex: 2,
    explanation:
      'Pelo Teorema do Ângulo Externo, qualquer ângulo externo de um triângulo é igual à SOMA dos dois ângulos internos não adjacentes a ele: $(x + 15^\\circ) + (2x - 5^\\circ) = 130^\\circ \\Rightarrow 3x + 10^\\circ = 130^\\circ \\Rightarrow 3x = 120^\\circ \\Rightarrow x = 40^\\circ$.',
    trapNote:
      'Não iguale a soma apenas desses dois a $180^\\circ$! Falta o terceiro ângulo interno ($180^\\circ - 130^\\circ = 50^\\circ$), por isso $(x+15)+(2x-5) = 130^\\circ$.',
    optionFeedback: [
      'Daria soma externa de apenas $100^\\circ$.',
      'Daria soma externa de $115^\\circ$.',
      'Correto! $\\angle A + \\angle B = \\angle C_{\\text{ext}} \\Rightarrow 3x + 10^\\circ = 130^\\circ \\Rightarrow x = 40^\\circ$.',
      'Daria soma de $145^\\circ$.',
      'Erro ao passar $+10^\\circ$ ou ao confundir ângulo externo com interno.',
    ],
    stepByStep: [
      'Aplique o Teorema do Ângulo Externo: $\\hat{A} + \\hat{B} = \\text{Externo de } C$.',
      'Substitua: $(x + 15^\\circ) + (2x - 5^\\circ) = 130^\\circ \\Rightarrow 3x + 10^\\circ = 130^\\circ$.',
      'Resolva: $3x = 120^\\circ \\Rightarrow x = 40^\\circ$.',
    ],
    memoryTakeaway:
      'Teorema do Ângulo Externo poupa uma conta: Ângulo Externo $= \\text{Soma dos } 2 \\text{ Internos Distantes}$!',
  },
  {
    id: 'mat-q189',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    source: 'Edital 12.2 · Razão Entre Perímetros e Áreas na Semelhança',
    prompt:
      'Dois triângulos semelhantes têm razão de semelhança entre seus lados correspondentes igual a $k = \\dfrac{2}{3}$. Se a área do triângulo MENOR mede $24\\text{ cm}^2$, qual é a área do triângulo MAIOR?',
    options: ['$36\\text{ cm}^2$', '$48\\text{ cm}^2$', '$54\\text{ cm}^2$', '$72\\text{ cm}^2$', '$108\\text{ cm}^2$'],
    correctIndex: 2,
    explanation:
      'Na semelhança de figuras planas, enquanto os lados e perímetros ficam na razão $k$, as ÁREAS ficam na razão $k^2 = \\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$. Logo, $\\dfrac{24}{A_{\\text{maior}}} = \\dfrac{4}{9} \\Rightarrow 4 A_{\\text{maior}} = 216 \\Rightarrow A_{\\text{maior}} = 54\\text{ cm}^2$.',
    trapNote:
      'Pegadinha clássica: responder $36\\text{ cm}^2$ (letra A) usando $\\frac{2}{3}$ direto em vez de elevar ao quadrado $\\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$!',
    optionFeedback: [
      'Armadilha clássica! Usou a razão linear $k = \\frac{2}{3}$ em área ($24 \\div \\frac{2}{3} = 36$), esquecendo que ÁREA cresce com $k^2$!',
      'Apenas dobrou a área.',
      'Correto! $\\frac{A_{\\text{menor}}}{A_{\\text{maior}}} = \\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9} \\Rightarrow A_{\\text{maior}} = \\frac{24 \\times 9}{4} = 54\\text{ cm}^2$.',
      'Apenas triplicou a área.',
      'Multiplicou errado por $4{,}5$.',
    ],
    stepByStep: [
      'Eleve a razão dos lados ao quadrado para comparar ÁREAS: $k^2 = \\left(\\dfrac{2}{3}\\right)^2 = \\dfrac{4}{9}$.',
      'Monte a proporção: $\\dfrac{24}{A} = \\dfrac{4}{9}$.',
      'Resolva: $A = \\dfrac{24 \\cdot 9}{4} = 6 \\cdot 9 = 54\\text{ cm}^2$.',
    ],
    memoryTakeaway:
      'Razão de semelhança $k$: Comprimento/Perímetro usa $k^1$; **ÁREA** usa $k^2$; **VOLUME** usa $k^3$!',
  },
  {
    id: 'mat-q190',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    source: 'Edital 12.2 · Condição de Existência de um Triângulo',
    prompt:
      'Dois lados de um triângulo medem $7\\text{ cm}$ e $12\\text{ cm}$. Quantos valores INTEIROS diferentes (em centímetros) pode assumir a medida do terceiro lado $x$?',
    options: ['11 valores.', '12 valores.', '13 valores.', '14 valores.', '19 valores.'],
    correctIndex: 2,
    explanation:
      'Pela Desigualdade Triangular, o terceiro lado $x$ deve ser maior que a diferença dos outros dois e menor que a soma deles: $|12 - 7| < x < 12 + 7 \\Rightarrow 5 < x < 19$. Os inteiros estritamente entre $5$ e $19$ vão de $6$ até $18$: são $18 - 6 + 1 = 13$ valores inteiros!',
    trapNote:
      'Os extremos $5$ e $19$ NÃO servem porque formam uma linha reta achatada (degenerada), não um triângulo! E lembre de contar os dois lados fechados: $18 - 6 + 1 = 13$.',
    optionFeedback: [
      'Erro na contagem ou excluiu errado mais de um extremo.',
      'Contou $18 - 6 = 12$ esquecendo de somar $+1$ na contagem inclusiva.',
      'Correto! $5 < x < 19 \\Rightarrow x \\in \\{6, 7, 8, \\dots, 18\\} = 13$ inteiros.',
      'Contou $19$ ou $5$ indevidamente.',
      'Usou toda a soma $19$ sem o limite inferior $5$.',
    ],
    stepByStep: [
      'Aplique $|a - b| < x < a + b$: $12 - 7 < x < 12 + 7 \\Rightarrow 5 < x < 19$.',
      'Liste o intervalo inteiro aberto: mínimo $= 6$, máximo $= 18$.',
      'Conte quantos inteiros: $18 - 6 + 1 = 13$ valores.',
    ],
    memoryTakeaway:
      'Para existir triângulo, nenhum lado pode alcançar a soma dos outros dois: $|a - b| < x < a + b$ (sem sinal de igual)!',
  },
  {
    id: 'mat-q191',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    source: 'Edital 12.2 · Triângulo Isósceles (Dois Casos de Ângulo)',
    prompt:
      'Um dos ângulos internos de um triângulo ISÓSCELES mede $104^\\circ$. Qual é a medida de cada um dos outros dois ângulos?',
    options: ['38° e 38°.', '52° e 52°.', '76° e 0°.', '104° e 28°.', '40° e 36°.'],
    correctIndex: 0,
    explanation:
      'Se um ângulo vale $104^\\circ$ (obtuso), ele NÃO pode ser repetido porque $104^\\circ + 104^\\circ = 208^\\circ > 180^\\circ$! Logo, $104^\\circ$ é obrigatoriamente o ângulo do vértice (único), e os outros dois ângulos da base são congruentes: $2\\theta + 104^\\circ = 180^\\circ \\Rightarrow 2\\theta = 76^\\circ \\Rightarrow \\theta = 38^\\circ$.',
    trapNote:
      'Qualquer triângulo com um ângulo $\\ge 90^\\circ$ isósceles obriga o ângulo diferente a ser o maior, e os outros dois são agudos e iguais!',
    optionFeedback: [
      'Correto! $104^\\circ + 38^\\circ + 38^\\circ = 180^\\circ$.',
      'Dividiu $104^\\circ$ por $2$ em vez de subtrair $104^\\circ$ de $180^\\circ$ primeiro!',
      'Não existe ângulo nulo em triângulo.',
      'Soma $104 + 104 + 28 = 236^\\circ > 180^\\circ$ (impossível!).',
      'Os outros dois precisam ser iguais no triângulo isósceles.',
    ],
    stepByStep: [
      'Como $104^\\circ > 90^\\circ$, ele não pode se repetir (passaria de $180^\\circ$).',
      'Os outros dois são iguais a $\\theta$: $104^\\circ + 2\\theta = 180^\\circ$.',
      'Resolva: $2\\theta = 76^\\circ \\Rightarrow \\theta = 38^\\circ$ cada.',
    ],
    memoryTakeaway:
      'Triângulo isósceles tem um ângulo $> 90^\\circ$? Esse é sempre o ângulo ÚNICO; subtraia de $180^\\circ$ e divida por $2$!',
  },
  {
    id: 'mat-q192',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    source: 'Edital 12.2 · Baricentro (Divisão da Mediana na Razão 2:1)',
    prompt:
      'Em um triângulo $ABC$, o ponto $G$ é o baricentro (encontro das medianas). Se a mediana completa $AM$ mede $21\\text{ cm}$, quanto mede o segmento $AG$ (do vértice $A$ até o baricentro $G$)?',
    options: ['7 cm.', '10,5 cm.', '12 cm.', '14 cm.', '15 cm.'],
    correctIndex: 3,
    explanation:
      'Propriedade fundamental do baricentro: ele divide cada mediana na razão $2 : 1$ a partir do vértice! Ou seja, o pedaço do vértice ($AG$) vale $\\frac{2}{3}$ da mediana e o pedaço até o ponto médio ($GM$) vale $\\frac{1}{3}$. Logo, $AG = \\frac{2}{3} \\times 21 = 14\\text{ cm}$ (e $GM = 7\\text{ cm}$).',
    trapNote:
      'A letra A ($7\\text{ cm}$) é a medida de $GM$ (do baricentro até o lado), enquanto $AG$ (do vértice ao baricentro) é o DOBRO ($14\\text{ cm}$)!',
    optionFeedback: [
      'Armadilha! $7\\text{ cm}$ é o pedaço menor $GM$ (do baricentro ao ponto médio da base).',
      'Dividiu por $2$ achando que o baricentro ficava no ponto médio da mediana (falso!).',
      'Erro aritmético ao tomar $2/3$ de $21$.',
      'Correto! Do vértice ao baricentro vale $\\frac{2}{3}$ da mediana: $\\frac{2}{3} \\cdot 21 = 14\\text{ cm}$.',
      'Erro aritmético.',
    ],
    stepByStep: [
      'O baricentro divide a mediana em $3$ terços ($2$ partes do vértice até $G$ e $1$ parte de $G$ até a base).',
      'Calcule $\\frac{1}{3}$: $GM = \\frac{21}{3} = 7\\text{ cm}$.',
      'Calcule $\\frac{2}{3}$: $AG = 2 \\times 7 = 14\\text{ cm}$.',
    ],
    memoryTakeaway:
      'No **Baricentro**: do vértice é o DOBRO do pedaço do lado ($2 : 1$, isto é, $\\frac{2}{3}$ e $\\frac{1}{3}$)!',
  },
  {
    id: 'mat-q193',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    source: 'Edital 12.2 · Teorema da Bissetriz Interna',
    prompt:
      'No triângulo $ABC$, os lados medem $AB = 12\\text{ cm}$ e $AC = 18\\text{ cm}$, e a base $BC$ mede $15\\text{ cm}$. Se a bissetriz interna $AD$ corta a base $BC$ no ponto $D$, quanto mede o segmento $BD$?',
    options: ['5 cm.', '6 cm.', '7,5 cm.', '9 cm.', '10 cm.'],
    correctIndex: 1,
    explanation:
      'Pelo Teorema da Bissetriz Interna, a bissetriz divide o lado oposto em segmentos proporcionais aos lados adjacentes: $\\dfrac{BD}{DC} = \\dfrac{AB}{AC} = \\dfrac{12}{18} = \\dfrac{2}{3}$. Como $BD + DC = 15\\text{ cm}$ em $2 + 3 = 5$ partes, cada parte vale $\\frac{15}{5} = 3\\text{ cm}$. Assim, $BD = 2 \\times 3 = 6\\text{ cm}$ (e $DC = 9\\text{ cm}$).',
    trapNote:
      'Não confunda bissetriz com mediana! A bissetriz só divide a base ao meio ($7{,}5\\text{ cm}$, letra C) quando $AB = AC$ (triângulo isósceles).',
    optionFeedback: [
      'Dividiu $15$ por $3$ em vez de por $2 + 3 = 5$ partes.',
      'Correto! Razão $\\frac{12}{18} = \\frac{2}{3} \\Rightarrow BD = \\frac{2}{5} \\cdot 15 = 6\\text{ cm}$.',
      'Armadilha! $7{,}5\\text{ cm}$ seria se $AD$ fosse MEDIANA (ponto médio), não bissetriz!',
      '$9\\text{ cm}$ é a medida do outro segmento $DC$, adjacente ao lado maior ($18$).',
      'Proporção incorreta.',
    ],
    stepByStep: [
      'Aplique o Teorema da Bissetriz Interna: $\\dfrac{BD}{DC} = \\dfrac{12}{18} = \\dfrac{2}{3}$.',
      'Divida $BC = 15$ na razão $2 : 3$ ($5$ partes): cada parte vale $\\frac{15}{5} = 3\\text{ cm}$.',
      'Logo $BD = 2 \\times 3 = 6\\text{ cm}$.',
    ],
    memoryTakeaway:
      'A bissetriz interna NÃO parte a base ao meio em geral — ela reparte a base na MESMA PROPORÇÃO dos dois lados ao lado ($12 : 18$)!',
  },
  {
    id: 'mat-q194',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    source: 'Edital 12.2 · Casos Clássicos de Congruência',
    prompt:
      'Dois triângulos retângulos possuem a mesma hipotenusa ($10\\text{ cm}$) e um dos catetos medindo $6\\text{ cm}$ em ambos. Pode-se garantir que esses dois triângulos são congruentes? Se sim, por qual critério?',
    options: [
      'Não, pois falta saber o valor de um ângulo agudo.',
      'Sim, pelo caso clássico AAA (ângulo-ângulo-ângulo).',
      'Sim, apenas se o ângulo de 90° for oposto ao cateto.',
      'Não, pois LLA nunca garante congruência em nenhuma situação.',
      'Sim, pelo caso especial de triângulos retângulos (Hipotenusa e Cateto — que implica LLL).',
    ],
    correctIndex: 4,
    explanation:
      'Em triângulos RETÂNGULOS, conhecendo a hipotenusa ($10$) e um cateto ($6$), o terceiro lado (outro cateto) fica unicamente determinado por Pitágoras ($\\sqrt{10^2 - 6^2} = 8\\text{ cm}$), tornando os 3 lados iguais (caso especial Cateto-Hipotenusa / LLL).',
    trapNote:
      'AAA garante SEMELHANÇA (tamanhos podem ser diferentes), nunca congruência! E o caso LLA só falha quando não é o maior lado — no retângulo com hipotenusa + cateto funciona sempre!',
    optionFeedback: [
      'Os outros catetos valem $8\\text{ cm}$ nos dois triângulos por Pitágoras.',
      'AAA garante SEMELHANÇA (ex.: triângulos de $3,4,5$ e $6,8,10$), NÃO congruência.',
      'A hipotenusa é sempre oposta ao ângulo de $90^\\circ$.',
      'O caso Hipotenusa-Cateto (ângulo reto oposto ao maior lado) garante sim a congruência.',
      'Correto! Em triângulos retângulos, ter a mesma hipotenusa e o mesmo cateto determina os 3 lados iguais (congruência!).',
    ],
    stepByStep: [
      'O ângulo reto ($90^\\circ$) é oposto à hipotenusa ($10\\text{ cm}$).',
      'Logo o segundo cateto é necessariamente $\\sqrt{10^2 - 6^2} = 8\\text{ cm}$ em ambos.',
      'Três lados iguais ($6, 8, 10$) $\\Rightarrow$ congruentes!',
    ],
    memoryTakeaway:
      'Casos que GARANTEM congruência: **LAL, ALA, LLL, LAAo** e (em retângulos) **Hipotenusa–Cateto**! Já **AAA** só dá SEMELHANÇA!',
  },
  {
    id: 'mat-q195',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    source: 'Edital 12.2 · Base Média do Triângulo',
    prompt:
      'No triângulo $ABC$, $M$ é o ponto médio do lado $AB$ e $N$ é o ponto médio do lado $AC$. Sabendo que o segmento $MN$ mede $x + 5\\text{ cm}$ e a base $BC$ mede $3x + 2\\text{ cm}$, quanto mede a base $BC$?',
    options: ['8 cm.', '13 cm.', '16 cm.', '26 cm.', '30 cm.'],
    correctIndex: 3,
    explanation:
      'Pelo Teorema da Base Média, o segmento $MN$ que une os pontos médios de dois lados é paralelo ao terceiro lado ($BC$) e mede exatamente a METADE dele: $BC = 2 \\cdot MN$. Equação: $3x + 2 = 2(x + 5) \\Rightarrow 3x + 2 = 2x + 10 \\Rightarrow x = 8$. Substituindo em $BC$: $3(8) + 2 = 26\\text{ cm}$ (e $MN = 8 + 5 = 13\\text{ cm}$).',
    trapNote:
      'A letra A ($8\\text{ cm}$) é $x$, e a letra B ($13\\text{ cm}$) é a base média $MN$; a questão pediu $BC = 26\\text{ cm}$!',
    optionFeedback: [
      'Armadilha! $8$ é apenas o valor da incógnita $x$.',
      'Armadilha! $13\\text{ cm}$ é a base média $MN$, que vale metade de $BC$.',
      'Erro aritmético na equação $3x + 2 = 2x + 10$.',
      'Correto! $x = 8 \\Rightarrow BC = 3(8) + 2 = 26\\text{ cm}$ (dobro de $MN = 13\\text{ cm}$).',
      'Substituiu $x$ incorretamente.',
    ],
    stepByStep: [
      'Base Média vale metade da base: $BC = 2 \\cdot MN \\Rightarrow 3x + 2 = 2(x + 5)$.',
      'Resolva: $3x + 2 = 2x + 10 \\Rightarrow x = 8$.',
      'Substitua em $BC = 3(8) + 2 = 26\\text{ cm}$.',
    ],
    memoryTakeaway:
      'Segmento que liga os PONTOS MÉDIOS de dois lados do triângulo é a **Base Média**: paralelo ao $3^\\circ$ lado e igual à sua **METADE**!',
  },
  {
    id: 'mat-q196',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    source: 'Edital 12.2 · Cevianas no Triângulo Equilátero vs. Isósceles',
    prompt:
      'Assinale a afirmação VERDADEIRA sobre os pontos notáveis (baricentro, incentro, circuncentro e ortocentro) de um triângulo:',
    options: [
      'Em todo triângulo obtusângulo, o ortocentro localiza-se sempre no interior do triângulo.',
      'Em qualquer triângulo, os quatro pontos notáveis coincidem exatamente no mesmo ponto.',
      'Em um triângulo retângulo, o ortocentro fica no ponto médio da hipotenusa.',
      'O incentro pode ficar fora do triângulo quando ele possui um ângulo maior que 90°.',
      'O baricentro (encontro das medianas) localiza-se SEMPRE no interior de qualquer triângulo.',
    ],
    correctIndex: 4,
    explanation:
      'O baricentro (centro de gravidade, encontro das medianas) e o incentro (centro da circunferência inscrita, encontro das bissetrizes) ficam SEMPRE dentro do triângulo! Já o ortocentro e o circuncentro podem ficar fora (se for obtusângulo) ou na borda (no retângulo: ortocentro no vértice do ângulo reto e circuncentro no ponto médio da hipotenusa).',
    trapNote:
      'Memorize quais pontos NUNCA saem do triângulo: **Baricentro** e **Incentro** são sempre internos; Ortocentro e Circuncentro podem ir para fora ou borda!',
    optionFeedback: [
      'Falso! No triângulo obtusângulo, o ortocentro fica EXTERNAMENTE (fora) do triângulo.',
      'Falso! Os quatro pontos só coincidem no triângulo EQUILÁTERO.',
      'Falso! No retângulo, o ponto médio da hipotenusa é o CIRCUNCENTRO; o ortocentro fica exatamente no vértice de $90^\\circ$!',
      'Falso! O incentro é o centro do círculo INSCRITO, portanto está sempre dentro.',
      'Correto! Baricentro e incentro estão sempre estritamente dentro de qualquer triângulo.',
    ],
    stepByStep: [
      'Analise a localização dos pontos notáveis nos 3 tipos de triângulos (acutângulo, retângulo, obtusângulo).',
      'Medianas vão do vértice ao lado oposto (segmento interno) $\\to$ Baricentro é sempre interno.',
    ],
    memoryTakeaway:
      'No triângulo **RETÂNGULO**: **Ortocentro** = vértice do ângulo de $90^\\circ$; **Circuncentro** = ponto médio da hipotenusa!',
  },
  {
    id: 'mat-q197',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    source: 'Edital 12.2 · Lei Angular com Sistema de Bissetrizes',
    prompt:
      'No triângulo $ABC$, o ângulo interno $\\hat{A}$ mede $76^\\circ$. Traçam-se as bissetrizes internas dos ângulos $\\hat{B}$ e $\\hat{C}$, que se encontram no ponto $I$ (incentro). Quanto mede o ângulo $\\angle BIC$?',
    options: ['104°.', '114°.', '128°.', '132°.', '142°.'],
    correctIndex: 2,
    explanation:
      'No $\\triangle ABC$, $\\hat{B} + \\hat{C} = 180^\\circ - 76^\\circ = 104^\\circ$. As bissetrizes cortam cada um desses ângulos pela metade até o incentro $I$: $\\frac{\\hat{B}}{2} + \\frac{\\hat{C}}{2} = \\frac{104^\\circ}{2} = 52^\\circ$. No $\\triangle BIC$, temos $\\angle BIC = 180^\\circ - 52^\\circ = 128^\\circ$.',
    trapNote:
      'Atalho de vestibular/ETE para o ângulo formado por duas bissetrizes internas no incentro: $\\angle BIC = 90^\\circ + \\frac{\\hat{A}}{2} = 90^\\circ + 38^\\circ = 128^\\circ$!',
    optionFeedback: [
      '$104^\\circ$ é apenas a soma $\\hat{B} + \\hat{C}$.',
      'Erro aritmético na divisão ou subtração.',
      'Correto! $\\angle BIC = 180^\\circ - \\frac{180^\\circ - 76^\\circ}{2} = 180^\\circ - 52^\\circ = 128^\\circ$.',
      'Erro ao calcular $\\frac{76^\\circ}{2} = 38^\\circ$.',
      'Somou $180 - 38$ (que é $142^\\circ$) sem dividir a base toda.',
    ],
    stepByStep: [
      'No $\\triangle ABC$, calcule $\\hat{B} + \\hat{C} = 180^\\circ - 76^\\circ = 104^\\circ$.',
      'No $\\triangle BIC$, entram as metades: $\\frac{\\hat{B} + \\hat{C}}{2} = \\frac{104^\\circ}{2} = 52^\\circ$.',
      'Portanto, $\\angle BIC = 180^\\circ - 52^\\circ = 128^\\circ$.',
    ],
    memoryTakeaway:
      'Ângulo no **Incentro** entre duas bissetrizes internas vale sempre $\\mathbf{90^\\circ + \\dfrac{\\hat{A}}{2}}$ (aqui $90^\\circ + 38^\\circ = 128^\\circ$)!',
  },
  {
    id: 'mat-q198',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    source: 'Edital 12.2 · Semelhança em Terrenos / Rampa',
    prompt:
      'Uma rampa retilínea de acessibilidade tem comprimento total de $15\\text{ m}$ e atinge uma altura final de $1{,}8\\text{ m}$. Quando uma cadeirante já percorreu $5\\text{ m}$ ao longo da rampa (a partir do início no chão), a que altura do solo ela se encontra?',
    options: ['0,45 m.', '0,50 m.', '0,60 m.', '0,90 m.', '1,20 m.'],
    correctIndex: 2,
    explanation:
      'Formam-se dois triângulos retângulos semelhantes compartilhando o ângulo de inclinação da rampa: a razão percorrida na hipotenusa é $\\frac{5}{15} = \\frac{1}{3}$ do total. Logo, a altura alcançada também será $\\frac{1}{3}$ da altura total: $h = \\frac{1{,}8}{3} = 0{,}60\\text{ m}$.',
    trapNote:
      'Verifique se a fração já é sobre o comprimento total ($5$ de $15$) ou o restante — aqui $5$ já é a distância percorrida desde a origem!',
    optionFeedback: [
      'Usou escala de $\\frac{1}{4}$ em vez de $\\frac{1}{3}$.',
      'Arredondou incorretamente.',
      'Correto! $\\frac{h}{5} = \\frac{1{,}8}{15} \\Rightarrow h = \\frac{1{,}8}{3} = 0{,}60\\text{ m}$.',
      'Seria a altura na metade da rampa ($7{,}5\\text{ m}$).',
      'Seria a altura quando faltassem $5\\text{ m}$ ($10\\text{ m}$ percorridos).',
    ],
    stepByStep: [
      'Compare os percursos inclinados: $\\dfrac{5\\text{ m}}{15\\text{ m}} = \\dfrac{1}{3}$ da rampa.',
      'Por semelhança de triângulos retângulos, a altura é $\\dfrac{1}{3} \\times 1{,}8\\text{ m} = 0{,}60\\text{ m}$.',
    ],
    memoryTakeaway:
      'Subiu $\\frac{1}{3}$ de uma rampa reta? Então subiu exatamente $\\frac{1}{3}$ da altura total (e andou $\\frac{1}{3}$ da base horizontal)!',
  },
  {
    id: 'mat-q199',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    source: 'Edital 12.2 · Soma de Ângulos Externos em Polígono / Triângulo',
    prompt:
      'Em um triângulo $ABC$, dois ângulos externos distintos (um em $A$ e outro em $B$) medem, respectivamente, $115^\\circ$ e $135^\\circ$. Qual é a medida do ângulo INTERNO em $C$?',
    options: ['50°.', '65°.', '70°.', '85°.', '110°.'],
    correctIndex: 2,
    explanation:
      'Se o externo em $A$ é $115^\\circ$, o interno $\\hat{A} = 180^\\circ - 115^\\circ = 65^\\circ$. Se o externo em $B$ é $135^\\circ$, o interno $\\hat{B} = 180^\\circ - 135^\\circ = 45^\\circ$. Pela Lei Angular de Tales: $\\hat{C} = 180^\\circ - (65^\\circ + 45^\\circ) = 180^\\circ - 110^\\circ = 70^\\circ$.',
    trapNote:
      'Cuidado: você também pode fazer direto pela soma externa ($360^\\circ - 115^\\circ - 135^\\circ = 110^\\circ$ externo em $C$) e subtrair de $180^\\circ$: $180^\\circ - 110^\\circ = 70^\\circ$!',
    optionFeedback: [
      'Erro aritmético na subtração.',
      '$65^\\circ$ é o ângulo interno em $A$.',
      'Correto! Internos em $A$ e $B$ são $65^\\circ$ e $45^\\circ \\Rightarrow \\hat{C} = 180^\\circ - 110^\\circ = 70^\\circ$.',
      'Erro na conversão de externo para interno.',
      'Armadilha! $110^\\circ$ é o ângulo EXTERNO em $C$, mas a pergunta pediu o INTERNO em $C$!',
    ],
    stepByStep: [
      'Ache os internos em $A$ e $B$: $\\hat{A} = 180^\\circ - 115^\\circ = 65^\\circ$; $\\hat{B} = 180^\\circ - 135^\\circ = 45^\\circ$.',
      'Calcule $\\hat{C} = 180^\\circ - (65^\\circ + 45^\\circ) = 70^\\circ$.',
    ],
    memoryTakeaway:
      'Ângulo interno + ângulo externo do mesmo vértice = $180^\\circ$ sempre!',
  },
  {
    id: 'mat-q200',
    discipline: 'MAT',
    topicId: 'mat-triangulos',
    source: 'Edital 12.2 · Mediatriz vs. Bissetriz e Classificação',
    prompt:
      'Em um triângulo $ABC$, a altura $AH$ relativa ao lado $BC$ coincide exatamente com a mediana $AM$ (ou seja, os pontos $H$ e $M$ são o mesmo ponto). Com essa única informação, garante-se obrigatoriamente que o triângulo $ABC$ é:',
    options: [
      'Retângulo em $A$, necessariamente.',
      'Equilátero (todos os lados iguais), necessariamente.',
      'Obtusângulo em $A$, necessariamente.',
      'Escaleno com $\\angle B \\neq \\angle C$.',
      'Isósceles com $AB = AC$, no mínimo.',
    ],
    correctIndex: 4,
    explanation:
      'Se a altura ($90^\\circ$ em $H$) passa pelo ponto médio $M$ do lado $BC$, então $AH$ é a mediatriz de $BC$, dividindo o triângulo em dois triângulos retângulos congruentes pelo caso LAL ($BH = HC$, $\\angle AHB = \\angle AHC = 90^\\circ$, lado $AH$ comum). Portanto, obrigatoriamente $AB = AC$ (isósceles; podendo também ser equilátero caso $BC = AB$, mas o garantido no mínimo é $AB = AC$).',
    trapNote:
      'Todo triângulo equilátero é isósceles, mas a altura coincidir com a mediana de UM vértice garante isósceles ($AB = AC$), não obriga que o 3º lado $BC$ tenha a mesma medida!',
    optionFeedback: [
      'Não precisa ter $90^\\circ$ em $A$ (por exemplo, $A$ pode medir $40^\\circ$ com $B=C=70^\\circ$).',
      'Armadilha! Para garantir equilátero, a coincidência teria que ocorrer em DOIS vértices distintos — em apenas um garante $AB = AC$ (isósceles).',
      'Pode ser acutângulo, retângulo ou obtusângulo em $A$.',
      'Pelo contrário: os ângulos da base ficam obrigatoriamente iguais ($\\angle B = \\angle C$).',
      'Correto! Os subtriângulos $AHB$ e $AHC$ ficam congruentes por LAL $\\Rightarrow AB = AC$ (isósceles!).',
    ],
    stepByStep: [
      'Compare $\\triangle AHB$ e $\\triangle AHC$: $HB = HC$ (pois $H=M$), $\\angle AHB = \\angle AHC = 90^\\circ$ (altura) e $AH$ comum.',
      'Pelo caso LAL, $\\triangle AHB \\equiv \\triangle AHC \\Rightarrow AB = AC$ (triângulo isósceles).',
    ],
    memoryTakeaway:
      'Sempre que duas cevianas distintas (altura, mediana ou bissetriz) coincidem a partir de um vértice, o triângulo é **ISÓSCELES** com vértice naquele ponto!',
  },
];
