<script setup>
defineProps({ chapter: { type: Number, default: 0 } })
const chapters = ['Opportunity', 'Web chat', 'Voice & dictation', 'Pilot']
</script>

<template>
  <header class="deck-header">
    <div class="brand"><span class="brand-mark" aria-hidden="true"></span>hektor<span class="brand-divider"></span><span class="brand-product">AGENT</span></div>
    <div v-if="chapter" class="chapter-nav" aria-label="Presentation section">
      <span v-for="(label, i) in chapters" :key="label" :class="{ active: chapter === i + 1 }" :aria-current="chapter === i + 1 ? 'step' : undefined"><b>{{ String(i + 1).padStart(2, '0') }}</b>{{ label }}</span>
    </div>
    <span v-else class="header-label">A PROPOSAL FOR HEKTOR MANAGEMENT</span>
  </header>
</template>
