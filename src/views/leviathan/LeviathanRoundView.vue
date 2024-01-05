<template>
    <v-expansion-panels>
        <v-expansion-panel
            title="Player 1"
        >
            <v-expansion-panel-text>
                <LeviathanRoundComponentVue />
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels>
        <v-expansion-panel
            title="Player 2"
        >
            <v-expansion-panel-text>
                <LeviathanRoundComponentVue />
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>
<script>
import LeviathanRoundComponentVue from '@/components/leviathan/LeviathanRoundComponent.vue'

export default {
    name: "LeviathanRoundView",
    components: {
        LeviathanRoundComponentVue,
    },
    setup() {
        
    },
}
</script>