<template>
  <main class="question-card">
    <h1 class="question-title" v-html="formattedEnunciado"></h1>

    <form @submit.prevent="handleSubmit">
      <fieldset class="answers">

        <label
          v-for="(opt, idx) in opcoes"
          :key="idx"
          class="answer-option"
        >
          <input
            type="radio"
            :name="`resposta-${indiceAtual}`"
            :value="opt.letra"
            v-model="selecionada"
            @change="onOptionSelected"
          />
          <span class="answer-content">
            <span class="answer-letter">{{ opt.letra }}</span>.
            <span class="answer-text" v-html="opt.texto"></span>
          </span>
        </label>

      </fieldset>
    </form>
  </main>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  questoes: {
    type: Array,
    required: true
  },
  indiceAtual: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['select'])

const questaoAtual = computed(() => props.questoes[props.indiceAtual])

const opcoes = computed(() => questaoAtual.value?.opcoes || [])

const selecionada = computed({
  get: () => questaoAtual.value?.selecionada || null,
  set: (val) => {
    if (questaoAtual.value) {
      questaoAtual.value.selecionada = val
      emit('select', { indice: props.indiceAtual, valor: val })
    }
  }
})

const formattedEnunciado = computed(() => {
  if (!questaoAtual.value?.enunciado) return ''
  return questaoAtual.value.enunciado
    .replace(/\n/g, '<br class="desktop-break">')
})

function onOptionSelected() {
  emit('select', {
    indice: props.indiceAtual,
    valor: selecionada.value
  })
}

function handleSubmit() {
}
</script>
