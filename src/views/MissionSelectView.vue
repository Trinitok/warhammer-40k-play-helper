<template>
<div class="mission-select">
    <MissionSelect />
  </div>
</template>

<script>
// @ is an alias to /src
import MissionSelect from '@/components/MissionSelect.vue'

export default {
  name: 'MissionSelectView',
  components: {
    MissionSelect
  }
}
</script>