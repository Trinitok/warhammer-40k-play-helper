<template>
<div class="game-select">
    <GameSelect />
  </div>
</template>

<script>
// @ is an alias to /src
import GameSelect from '@/components/GameSelect.vue'

export default {
  name: 'GameSelectView',
  components: {
    GameSelect
  }
}
</script>