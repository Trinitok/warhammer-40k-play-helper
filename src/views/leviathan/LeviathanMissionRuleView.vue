<template>
    <h1 class="font-weight-bold text-h2 text-basil">
        {{ title }}
    </h1>
    <br />
    <v-btn :href="randomButtonSpinnerLink" target="_blank">
        Random
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
                v-for="(n, index) in this.leviathanMissionRules"
                :key="index"
                v-slot="{ isSelected, toggle, selectedClass }"
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
                            {{ leviathanMissionRules[index] }}
                            <v-icon
                                v-if="isSelected"
                                color="white"
                                size="48"
                                icon="$vuetify"
                                width="100%"
                            >
                            </v-icon>
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
                    <LeviathanMissionRuleComponentVue
                        :missionName="leviathanMissionRules[model]"
                        :missionPhaseText="leviathanMissionRuleDescriptions[model]"
                    />
                </div>
            </v-sheet>
        </v-expand-transition>
    </v-sheet>
</template>
<script>
import LeviathanMissionRuleComponentVue from '@/components/leviathan/LeviathanMissionRuleComponent.vue'

export default {
    name: 'LeviathanMissionRuleView',
    props: {
        title: String,
        missionList: Array,
        randomButtonSpinnerLink: String,
    },
    components: {
        LeviathanMissionRuleComponentVue
    },
    data () {
      return {
        leviathanMissionRules: [
            'Chosen Battlefield',
            'Scrambler Fields',
            'Chilling Rain',
            'Delayed Reserves',
            'Sweep and Clear',
            'Maelstrom of Battle',
            'Hidden Supplies',
            'Supply Lines',
            'Minefields',
            'Secret Intel',
            'Targets of Opportunity',
            'Vox Static',
        ],

        leviathanMissionRuleDescriptions: [
            'Chosen Battlefield Rule Text',
            'Scrambler Fields Rule Text', 
            'In this mission, no additional mission rules apply.', 
            'Delayed Reserves Rule Text', 
            'Sweep and Clear Rule Text', 
            'Maelstrom of Battle Rule Text',
            'Hidden Supplies Rule Text',
            'Supply Lines Rule Text',
            'Minefields Rule Text',
            'Secret Intel Rule Text',
            'Targets of Opportunity Rule Text',
            'Vox Static Rule Text',
        ],
        model: null,
      }
    },
    methods: {
    }
}
</script>
