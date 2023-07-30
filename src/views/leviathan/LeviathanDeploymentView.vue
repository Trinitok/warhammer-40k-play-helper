<template>
  <v-container fluid>
    <v-row dense>
      <v-col>
        <v-btn href="https://wheelofnames.com/mxx-w9e">
          Random Deployment
        </v-btn>
      </v-col>
    </v-row>
    <br />
    <br />
    <v-row dense>
      <v-col>
        <DeploymentPage displayName="Search and Destroy" mapImage="https://i.imgur.com/gYzuJHQ.png" />
      </v-col>
      <v-col>
        <DeploymentPage displayName="Dawn of War" mapImage="https://i.imgur.com/KvjJSDH.png" />
      </v-col>
      <v-col>
        <DeploymentPage displayName="Sweeping Engagement" mapImage="https://i.imgur.com/onxG4oL.png" />
      </v-col>
      <v-col>
        <DeploymentPage displayName="Crucible of Battle" mapImage="https://i.imgur.com/aawr1bd.png" />
      </v-col>
      <v-col>
        <DeploymentPage displayName="Hammer And Anvil" mapImage="https://i.imgur.com/oMP6pCD.png" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// @ is an alias to /src
import DeploymentPage from '@/components/Deployment.vue'

export default {
  name: 'LeviathanDeploymentView',
  components: {
    DeploymentPage
  }
}
</script>
