<template>
<v-btn href="https://wheelofnames.com/mxx-w9e">
          Random Deployment
        </v-btn>
            <br />
    <br />
  <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="800"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-primary"
      prev-icon="$vuetify"
      next-icon="$vuetify"
      show-arrows
    >
      <v-slide-group-item
        v-slot="{ toggle, selectedClass }"
      >
        <v-card
          color="grey-lighten-1"
          :class="['ma-4', selectedClass]"
          height="300"
          width="200"
          @click="toggle"
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
                <DeploymentPage @selected="selectedDeployment" displayName="Search and Destroy" mapImage="https://i.imgur.com/gYzuJHQ.png" />
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
      <v-slide-group-item
        v-slot="{ toggle, selectedClass }"
      >
        <v-card
          color="grey-lighten-1"
          :class="['ma-4', selectedClass]"
          height="300"
          @click="toggle"
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
                <DeploymentPage @selected="selectedDeployment" displayName="Dawn of War" mapImage="https://i.imgur.com/KvjJSDH.png" />
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
      <v-slide-group-item
        v-slot="{ toggle, selectedClass }"
      >
        <v-card
          color="grey-lighten-1"
          :class="['ma-4', selectedClass]"
          height="300"
          @click="toggle"
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
                <DeploymentPage @selected="selectedDeployment" displayName="Sweeping Engagement" mapImage="https://i.imgur.com/onxG4oL.png" />
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
      <v-slide-group-item
        v-slot="{ toggle, selectedClass }"
      >
        <v-card
          color="grey-lighten-1"
          :class="['ma-4', selectedClass]"
          height="300"
          @click="toggle"
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
                <DeploymentPage @selected="selectedDeployment" displayName="Crucible of Battle" mapImage="https://i.imgur.com/aawr1bd.png" />
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
      <v-slide-group-item
        v-slot="{ toggle, selectedClass }"
      >
        <v-card
          color="grey-lighten-1"
          :class="['ma-4', selectedClass]"
          height="300"
          @click="toggle"
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
                <DeploymentPage @selected="selectedDeployment" displayName="Hammer And Anvil" mapImage="https://i.imgur.com/oMP6pCD.png" />
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>

    <v-expand-transition>
      <v-sheet
        v-if="model != null"
        height="200"
      >
        <div class="d-flex fill-height align-center justify-center">
          <LeviathanTableSetup 
            :setup="selectedDeployment"
          />
          
          <!-- <h3 class="text-h6">
            Selected {{ model }}
          </h3> -->
        </div>
      </v-sheet>
    </v-expand-transition>
  </v-sheet>
</template>

<script setup>
  import { ref } from 'vue'

  const model = ref(null)
</script>
<script>
// @ is an alias to /src
import DeploymentPage from '@/components/Deployment.vue'
import LeviathanTableSetup from '@/components/leviathan/LeviathanTableSetup.vue';

export default {
  name: 'LeviathanDeploymentView',
  components: {
    DeploymentPage,
    LeviathanTableSetup,
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
