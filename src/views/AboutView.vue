<template>
  <div class="about">
    <AboutPage />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutPage from '@/components/About.vue'

export default {
  name: 'AboutView',
  components: {
    AboutPage
  }
}
</script>
