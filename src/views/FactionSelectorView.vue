<template>
  <div class="faction-select">
    <div >
      <h1>Player 1 Select Faction</h1>
      <FactionSelectorComponent />
    </div>
    <div >
      <h1>Player 2 Select Faction</h1>
      <FactionSelectorComponent />
    </div>
  </div>
</template>

<script>
import FactionSelectorComponent from '@/components/FactionSelectorComponent.vue'

export default {
  name: 'FactionSelectorView',
  components: {
    FactionSelectorComponent
  }
}
</script>
