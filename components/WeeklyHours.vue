<script setup>
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
</script>

<template>
  <figure class="weekly-hours" aria-label="Weekly support schedule. Monday to Friday, 08:00 to 12:00 and 13:00 to 17:00. Weekends closed. 40 staffed hours out of 168.">
    <div class="chart-caption">A WEEK AT A GLANCE <span>168 hours</span></div>
    <div class="hour-scale"><span>00</span><span>06</span><span>12</span><span>18</span><span>24</span></div>
    <div v-for="(day, i) in days" :key="day" class="day-row"><span>{{ day }}</span><div class="day-track"><template v-if="i < 5"><i class="morning"></i><i class="afternoon"></i></template></div></div>
    <figcaption><span><i class="legend-dot staffed"></i>Staffed hours</span><span><i class="legend-dot"></i>Outside staffed hours</span></figcaption>
  </figure>
</template>
