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
                v-for="defaultMissionPhases in defaultMissionPhases"
                :key="defaultMissionPhases"
                :value="defaultMissionPhases"
            >
                {{ defaultMissionPhases }}
            </v-tab>
        </v-tabs>

        <v-window v-model="tab">
            <v-window-item
                v-for="(defaultMissionPhases, index) in defaultMissionPhases"
                :key="defaultMissionPhases"
                :value="defaultMissionPhases"
            >
                <v-card
                    color="basil"
                    flat
                >
                    <v-card-text
                        @click="testClick"
                    >{{ phaseText[index] }}</v-card-text>
                </v-card>
            </v-window-item>
        </v-window>
    </v-card>
</template>

<script>
  export default {
    name: 'MissionType',
    props: {
        missionName: String,
        missionPhaseList: Array,
        missionPhaseText: Array,
    },
    data () {
      return {
        tab: 'Mission Phase Tabs',
        defaultMissionPhases: [
          'Special', 'Battle Round 2', 'Battle Round 3', 'Battle Round 4', 'Battle Round 5', 'End of Battle',
        ],
        phaseText: [
            'Special text',
            'Battle Round 2 text',
            'Battle Round 3 text',
            'Battle Round 4 text',
            'Battle Round 5 text',
            'End of Battle text',
        ],
      }
    },
    methods: {
        testClick() {
            console.log('A mission text has been clicked')
        },
    },
  }
</script>