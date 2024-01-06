<template>
    <v-card
    max-width="400"
    class="mx-auto"
    title="Select Faction"
  >
    <v-container class="pa-1">
      <v-item-group
        v-model="selection"
        multiple
      >
        <v-row>
          <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
            md="6"
          >
            {{ item.name }}
            <v-item v-slot="{ isSelected, toggle }">
              <div>
              <!-- <img
                :src="item.src"
                cover
                height="150"
                class="text-right pa-2"
                @click="toggle"
              > -->
              <!-- <v-img src="../assets/tau.jpg">
                <template #sources>
                  <source srcset="@/assets/tau.jpg">
                </template>
              </v-img> -->
              <v-img 
                :src="item.src"
                height="150"
                class="text-right pa-2"
                @click="toggle"
              />
                <v-btn text="Select" :icon="isSelected ? '$vuetify' : ''" @click="toggle"></v-btn>
              </div>
            </v-item>
          </v-col>
        </v-row>
      </v-item-group>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: 'FactionSelectorComponent',
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
          name: 'chaos demons'
        }
      ],
      selection: [],
    }),
  props: {
    factions: Array,
  },
  methods: {
      getImageUrl() {
          return this.mapImage;
      },
  }
}
</script>
