<template>
<div class="mission-select">
    <MissionType />
  </div>
</template>

<script>
// @ is an alias to /src
import MissionType from '@/components/MissionType.vue'

export default {
  name: 'MissionTypeSelectView',
  components: {
    MissionType
  }
}
</script>