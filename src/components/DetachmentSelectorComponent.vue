<template>
    <!-- <v-container fluid>
    <p>Selected Button: {{ radios }}</p>
    <v-radio-group v-model="radios">
      <v-radio label="Option One" value="one"></v-radio>
      <v-radio label="Option 2 (string)" value="2"></v-radio>
      <v-radio label="Option 3 (integer)" :value="3"></v-radio>
    </v-radio-group>
  </v-container> -->
    <v-card
    elevation="24"
    max-width="444"
    class="mx-auto"
  >
    <v-carousel
      :continuous="false"
      show-arrows="hover"
      hide-delimiters
      delimiter-icon="mdi-square"
      height="300"
    >
        <template v-slot:prev="{ props }">
            <v-btn
                variant="elevated"
                color="success"
                @click="props.onClick"
            >
                &lt;
            </v-btn>
        </template>
        <template v-slot:next="{ props }">
            <v-btn
                variant="elevated"
                color="info"
                @click="props.onClick"
                value=">"
            >
                &gt;
            </v-btn>
        </template>
      <v-carousel-item
        v-for="(slide, i) in getFactionDetachments()"
        :key="i"
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
          tile
        >
          <div class="d-flex justify-center align-center">
            <div class="text-h2">
              {{ slide.name }}
            </div>
          </div>

            {{ slide.text }}
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>

</template>
<script>
export default {
    name: "DetachmentSelectorComponent",
    props: {
        faction: String,
    },
    data: () => ({
        detachments: {
            tau: {

            },
            chaos_daemons: [
                {
                    name: "Warp Rifts",
                    text: "Each time a Legiones Daemonica unit from your army is set up on the battlefield using the Deep Strike ability, if it is set up wholly within your army’s Shadow of Chaos, it can be set up anywhere that is more than 6\" horizontally away from all enemy models, instead of more than 9\"."
                }
            ],

        },
        radios: "one",
        colors: [
          'green',
          'secondary',
          'yellow darken-4',
          'red lighten-2',
          'orange darken-1',
        ],
        // slides: [
        //   'First',
        //   'Second',
        //   'Third',
        //   'Fourth',
        //   'Fifth',
        // ],
    }),
    setup() {
    },
    methods: {
      getFactionDetachments() {
        return this.detachments[this.faction.meta_name];
      },
    }
}
</script>