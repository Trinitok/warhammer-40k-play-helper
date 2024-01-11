<template>
    <v-card
    max-width="400"
    class="mx-auto"
    title="Select Faction"
  >
    <v-container class="pa-1">
      <v-item-group
        v-model="selection"
        mandatory
      >
        <v-row>
          <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
            md="6"
          >
            <FactionComponentVue :faction_metadata="item" @factionSelected="changeSelectedFaction" />
          </v-col>
        </v-row>
      </v-item-group>
    </v-container>
  </v-card>
</template>
<script>
import FactionComponentVue from './FactionComponent.vue';

export default {
  name: 'FactionSelectorComponent',
  components: {
    FactionComponentVue,
  },
  data: () => ({
      items: [
        {
          src: 'https://static.wikia.nocookie.net/warhammer40k/images/1/13/Ultramarines_Artificer_Armour2.jpg',
          name: 'space marine',
        },
        {
          src: 'https://static.wikia.nocookie.net/warhammer40k/images/3/33/Necron_Warriors_vs_UM.png',
          name: 'necrons',
        },
        {
          src: 'https://static.wikia.nocookie.net/warhammer40k/images/6/68/AraghastthePillager.jpg',
          name: 'chaos marines',
        },
        {
          src: 'https://static.wikia.nocookie.net/warhammer40k/images/5/55/Tau_empire.jpg',
          name: 'tau',
        },
        {
          src: 'https://static.wikia.nocookie.net/warhammer40k/images/5/57/Tyrant.JPG',
          name: 'tyranids',
        },
        {
          src: 'https://static.wikia.nocookie.net/warhammer40k/images/c/c5/KhorneSlaaneshDaemonHorde.jpg',
          name: 'chaos demons',
          meta_name: 'chaos_daemons'
        }
      ],
      selection: {},
    }),
  props: {
    factions: Array,
  },
  methods: {
    changeSelectedFaction(selectedFaction) {
      console.log('in faction selector component. here is the selected faction');
      console.log(selectedFaction);
      this.selection = selectedFaction
      this.$emit('factionSelected', this.selection);
    }
  }
}
</script>
