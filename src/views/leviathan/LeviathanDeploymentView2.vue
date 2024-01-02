<template>
  <v-btn href="https://wheelofnames.com/mxx-w9e">
          Random Deployment
  </v-btn>
  <br />
  <br />
  <v-stepper
    editable
    :items="['Search and Destroy', 'Dawn of War', 'Sweeping Engagement', 'Crucible of Battle', 'Hammer And Anvil']"
  >
  <!--  -->
    <template v-slot:[`item.1`]>
      <!-- <v-card
          color="grey-lighten-1"
          :class="['ma-4', selectedClass]"
          height="300"
          width="200"
          @click="toggle"
        > -->
        <!-- <div class="d-flex fill-height align-center justify-center"> -->
          <v-scale-transition>
              <DeploymentPage @selected="selectedDeployment" displayName="Search and Destroy" mapImage="https://i.imgur.com/gYzuJHQ.png" />
          </v-scale-transition>
        <!-- </div> -->
      <!-- </v-card> -->
    </template>
    <template v-slot:[`item.2`]>
      <!-- <v-card
          color="grey-lighten-1"
          :class="['ma-4', selectedClass]"
          height="300"
          width="200"
          @click="toggle"
        > -->
        <div class="d-flex fill-height align-center justify-center">
          <v-scale-transition>
              <DeploymentPage @selected="selectedDeployment" displayName="Dawn of War" mapImage="https://i.imgur.com/gYzuJHQ.png" />
          </v-scale-transition>
        </div>
      <!-- </v-card> -->
    </template>
    <template v-slot:[`item.3`]>
      <!-- <v-card
          color="grey-lighten-1"
          :class="['ma-4', selectedClass]"
          height="300"
          width="200"
          @click="toggle"
        > -->
        <div class="d-flex fill-height align-center justify-center">
          <v-scale-transition>
              <DeploymentPage @selected="selectedDeployment" displayName="Sweeping Engagement" mapImage="https://i.imgur.com/gYzuJHQ.png" />
          </v-scale-transition>
        </div>
      <!-- </v-card> -->
    </template>
  </v-stepper>
  
</template>

<script setup>
  // import { ref } from 'vue'

  // const model = ref(null)
</script>
<script>
// @ is an alias to /src
import DeploymentPage from '@/components/Deployment2.vue'
// import LeviathanTableSetup from '@/components/leviathan/LeviathanTableSetup.vue';

export default {
  name: 'LeviathanDeploymentView2',
  components: {
    DeploymentPage,
    // LeviathanTableSetup,
  },
  data: () => ({
      model: null,
    }),
  methods: {
    testClick(deploymentDisplayName) {
      console.log(deploymentDisplayName);
    },
    selectedDeployment(shenanigan) {
      console.log('i have been selected ' + shenanigan)
    }
  }
}
</script>
