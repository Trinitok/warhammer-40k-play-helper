<template>
    <h1 class="font-weight-bold text-h2 text-basil">
        {{ title }}
    </h1>
    <br />
    <v-btn href="https://wheelofnames.com/hc7-j9a">
        Random Deployment
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
                v-for="(n, index) in this.primaryMissionNames"
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
                            {{ primaryMissionNames[index] }}
                            <v-icon
                                v-if="isSelected"
                                color="white"
                                size="48"
                                icon="$vuetify"
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
                    <MissionType
                    />
                </div>
            </v-sheet>
        </v-expand-transition>
    </v-sheet>
</template>
<script>
import MissionType from '@/components/MissionType.vue'

export default {
    name: 'MissionView',
    props: {
        title: String,
        missionList: Array,
    },
    components: {
        MissionType
    },
    data () {
      return {
        primaryMissionNames: [
            'Take and Hold',
            'Scorched Earth',
            'Purge the Foe',
            'Sites of Power',
            'The Ritual',
            'Priority Targets',
            'Supply Drop',
            'Deploy Servo Skulls',
            'Vital Ground',
        ],
        model: null,
      }
    },
    methods: {
    }
}
</script>
