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
              <img
                src="../assets/tau.jpeg"
                cover
                height="150"
                class="text-right pa-2"
                @click="toggle"
              >
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
          src: '../assets/Adeptus_Astartes.jpg',
          name: 'space marine',
        },
        {
          src: '../assets/necron.jpg',
          name: 'necrons',
        },
        {
          src: 'backgrounds/bg-2.jpg',
          name: 'chaos marines',
        },
        {
          src: '../assets/tau.jpg',
          name: 'tau',
        },
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
