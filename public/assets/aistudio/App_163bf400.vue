<template>
  <div class="app">
    <QuestionCard
      :questoes="questoes"
      :indice-atual="0"
    />
  </div>
</template>

<script setup>
import QuestionCard from './components/QuestionCard.vue'

const questoes = [
  {
    enunciado: 'Assinale a alternativa em que a concordância verbal está incorreta.',
    opcoes: [
      { letra: 'a', texto: 'Mais de um gerente se criticaram mutuamente durante a reunião do Conselho.' },
      { letra: 'b', texto: 'Muitos de nós resolveu sair da sala antes da conclusão da reunião.' },
      { letra: 'c', texto: 'Sou eu que recebo os participantes do torneio de futebol.' },
      { letra: 'd', texto: 'Sou eu quem recebe os participantes do torneio de futebol.' },
      { letra: 'e', texto: 'Mais de um candidato desistiu da eleição.' }
    ],
    gabarito: 'b',
    comentario: 'Muitos de nós é sujeito plural; o verbo deve ser resolvemos.'
  },
  {
    enunciado: 'Assinale a alternativa em que a crase está empregada corretamente.',
    opcoes: [
      { letra: 'a', texto: 'Vou à praia amanhã.' },
      { letra: 'b', texto: 'Fui ao cinema ontem.' },
      { letra: 'c', texto: 'Ela vai à casa da avó.' },
      { letra: 'd', texto: 'Estamos à espera do resultado.' },
      { letra: 'e', texto: 'Preciso à água.' }
    ],
    gabarito: 'e'
  }
]
</script>
