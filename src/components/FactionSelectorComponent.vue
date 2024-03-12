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
  <ChaosSpaceMarinesVue ref="csm" />
</template>
<script>
import FactionComponentVue from './FactionComponent.vue';
import ChaosSpaceMarinesVue from '@/components/leviathan/factions/chaos-space-marines/ChaosSpaceMarines.vue';

export default {
  name: 'FactionSelectorComponent',
  components: {
    FactionComponentVue,
    ChaosSpaceMarinesVue,
  },
  data: () => ({
      items: [
        {
          src: 'https://static.wikia.nocookie.net/warhammer40k/images/1/13/Ultramarines_Artificer_Armour2.jpg',
          name: 'space marine',
          meta_name: 'space_marines'
        },
        {
          src: 'https://static.wikia.nocookie.net/warhammer40k/images/3/33/Necron_Warriors_vs_UM.png',
          name: 'necrons',
          meta_name: 'necrons'
        },
        {
          src: 'https://static.wikia.nocookie.net/warhammer40k/images/6/68/AraghastthePillager.jpg',
          name: 'chaos marines',
          meta_name: 'chaos_space_marines',
        },
        {
          src: 'https://static.wikia.nocookie.net/warhammer40k/images/5/55/Tau_empire.jpg',
          name: 'tau',
          meta_name: 'tau'
        },
        {
          src: 'https://static.wikia.nocookie.net/warhammer40k/images/5/57/Tyrant.JPG',
          name: 'tyranids',
          meta_name: 'tyranids'
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
      this.selection.characters = this.$refs.csm.getCharacters();
      this.selection.battleline = this.$refs.csm.getBattleLine();
      this.selection.dedicatedTransports = this.$refs.csm.getDedicatedTransports();
      this.selection.otherDataSheets = this.$refs.csm.getOtherDataSheets();
      this.$emit('factionSelected', this.selection);
    }
  }
}
</script>
