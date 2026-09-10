<script setup>
defineProps({ page: Number, note: { type: String, default: 'Hektor Agent / Management proposal' }, source: String })
</script>

<template>
  <footer class="footer">
    <a v-if="source" :href="source">{{ note }}</a><span v-else>{{ note }}</span>
    <div class="page-position"><span class="page-track" aria-hidden="true"><i :style="{ width: `${page / 12 * 100}%` }"></i></span><span>{{ String(page).padStart(2, '0') }} <b>/ 12</b></span></div>
  </footer>
</template>
