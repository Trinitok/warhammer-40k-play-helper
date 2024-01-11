<template>
  <div class="faction-select">
    <v-expansion-panels>
      <v-expansion-panel
        title="Player 1 Select Faction"
        collapse-icon="$vuetify"
        expand-icon="$vuetify"
      >
      <v-expansion-panel-text>
      <v-stepper
        :items="['Faction', 'Detachment', 'Army']"
      >
      <!-- :items="['Faction', 'Detachment', 'Army']" -->
        <template v-slot:[`item.1`] >
          <FactionSelectorComponent @factionSelected="updateSelectedFaction" />
        </template>
        <template v-slot:[`item.2`]>
          <DetachmentSelectorComponentVue :faction="chosenFaction" />
        </template>
        <template v-slot:[`item.3`]>
          <ArmyCreationComponentVue />
        </template>
      </v-stepper>
      </v-expansion-panel-text>
      </v-expansion-panel>
    <v-divider />
      <v-expansion-panel
        title="Player 2 Select Faction"
        collapse-icon="$vuetify"
        expand-icon="$vuetify"
      >
        <v-expansion-panel-text>
          <FactionSelectorComponent @factionSelected="updateSelectedFaction" />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import FactionSelectorComponent from '@/components/FactionSelectorComponent.vue'
import DetachmentSelectorComponentVue from '@/components/DetachmentSelectorComponent.vue'
import ArmyCreationComponentVue from '@/components/leviathan/ArmyCreationComponent.vue'

export default {
  name: 'FactionSelectorView',
  components: {
    FactionSelectorComponent,
    DetachmentSelectorComponentVue,
    ArmyCreationComponentVue,
  },
  data: () => ({
    chosenFaction: {},
    chosenDetachment: '',
    chosenArmy: [],
  }),
  methods: {
    updateSelectedFaction(selectedFaction) {
      console.log('in faction selector view');
      console.log('here is your updated faction');
      console.log(selectedFaction);
      this.chosenFaction = selectedFaction;
    }
  }
}
</script>
