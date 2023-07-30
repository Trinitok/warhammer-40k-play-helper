<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/warhammer-10th-ed-logo.jpeg">
    <MainPage msg="Welcome to The Warhammer 40k Play Helper Web App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from '@/components/Main.vue'

export default {
  name: 'MainView',
  components: {
    MainPage
  }
}
</script>
