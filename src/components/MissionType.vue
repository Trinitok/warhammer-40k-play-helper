<template>
    <v-card color="basil">
        <v-tabs
            v-model="tab"
            bg-color="transparent"
            color="basil"
            grow
            next-icon="$vuetify"
            prev-icon="$vuetify"
            show-arrows
        >
            <v-tab
                v-for="item in items"
                :key="item"
                :value="item"
            >
                {{ item }}
            </v-tab>
        </v-tabs>

        <v-window v-model="tab">
            <v-window-item
                v-for="(item, index) in items"
                :key="item"
                :value="item"
            >
                <v-card
                color="basil"
                flat
                >
                    <v-card-text>{{ text[index] }}</v-card-text>
                </v-card>
            </v-window-item>
        </v-window>
    </v-card>
</template>

<script>
  export default {
    name: 'MissionType',
    props: {
        missionName: String
    },
    data () {
      return {
        tab: 'Table Dimensions',
        items: [
          'Special', 'Battle Round 2', 'Battle Round 3', 'Battle Round 4', 'Battle Round 5', 'End of Battle',
        ],
        text: [
            'Special text',
            'Battle Round 2 text',
            'Battle Round 3 text',
            'Battle Round 4 text',
            'Battle Round 5 text',
            'End of Battle text',
        ],
      }
    },
  }
</script>