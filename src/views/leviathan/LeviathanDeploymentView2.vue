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
    <template v-slot:[`item.1`]>
          <v-scale-transition>
              <DeploymentPage @selected="selectedDeployment" displayName="Search and Destroy" mapImage="https://i.imgur.com/gYzuJHQ.png" />
          </v-scale-transition>
    </template>
    <template v-slot:[`item.2`]>
          <v-scale-transition>
              <DeploymentPage @selected="selectedDeployment" displayName="Dawn of War" mapImage="https://i.imgur.com/KvjJSDH.png" />
          </v-scale-transition>
    </template>
    <template v-slot:[`item.3`]>
          <v-scale-transition>
              <DeploymentPage @selected="selectedDeployment" displayName="Sweeping Engagement" mapImage="https://i.imgur.com/onxG4oL.png" />
          </v-scale-transition>
    </template>
    <template v-slot:[`item.4`]>
          <v-scale-transition>
              <DeploymentPage @selected="selectedDeployment" displayName="Crucible of Battle" mapImage="https://i.imgur.com/aawr1bd.png" />
          </v-scale-transition>
    </template>
    <template v-slot:[`item.5`]>
          <v-scale-transition>
              <DeploymentPage @selected="selectedDeployment" displayName="Hammer and Anvil" mapImage="https://i.imgur.com/oMP6pCD.png" />
          </v-scale-transition>
    </template>
  </v-stepper>
  
</template>
<script>
import DeploymentPage from '@/components/Deployment2.vue'

export default {
  name: 'LeviathanDeploymentView2',
  components: {
    DeploymentPage,
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
