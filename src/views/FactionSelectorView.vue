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
        :complete="factionSelectionCompleted"
      >
      <!-- :items="['Faction', 'Detachment', 'Army']" -->
        <template v-slot:[`item.1`] >
          <FactionSelectorComponent @factionSelected="updateSelectedFaction" />
        </template>
        <template v-slot:[`item.2`]>
          <DetachmentSelectorComponent />
        </template>
        <template v-slot:[`item.3`]>
          <ArmyMakerComponent />
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

export default {
  name: 'FactionSelectorView',
  components: {
    FactionSelectorComponent
  },
  data: () => ({
    factionSelectionCompleted: false,
  }),
}
</script>
