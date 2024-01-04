<template>
    <v-stepper
        editable
        :items="[
            'Setup',
            'Round 1',
            'Round 2',
            'Round 3',
            'Round 4',
            'Round 5',
            'Final Results',
        ]"
        next-text="Next Phase"
        prev-text="Previous Phase"
    >
        <template v-slot:[`item.1`]>
            <v-card title="Setup" flat>
                <!-- <v-sheet color="primary" height="100%" tile>
                    <div class="d-flex fill-height justify-center align-center">
                        <div class="text-h2">
                        Establish who is Player 1 and Player 2
                        </div>
                    </div>
                </v-sheet> -->
                <LeviathanSetupView />
            </v-card>
        </template>
        <template v-slot:[`item.2`]>
            <v-card title='Round 1' flat>
                <LeviathanRoundViewVue />
            </v-card>
        </template>
        <template v-slot:[`item.3`]>
            <v-card title='Round 2' flat>
                <LeviathanRoundViewVue />
            </v-card>
        </template>
        <template v-slot:[`item.4`]>
            <v-card title='Round 3' flat>
                <LeviathanRoundViewVue />
            </v-card>
        </template>
        <template v-slot:[`item.5`]>
            <v-card title='Round 4' flat>
                <LeviathanRoundViewVue />
            </v-card>
        </template>
        <template v-slot:[`item.6`]>
            <v-card title='Round 5' flat>
                <LeviathanRoundViewVue />
            </v-card>
        </template>
        <template v-slot:[`item.7`]>
            <v-card title='Final Score' flat>
                <LeviathanScoreCalculator />
            </v-card>
        </template>
    </v-stepper>
</template>
<script>
import LeviathanSetupView from '../LeviathanStepperView.vue'
import LeviathanRoundViewVue from './LeviathanRoundView.vue'
import LeviathanScoreCalculator from './LeviathanScoreCalculatorView.vue'

export default {
    name: 'LeviathanDeploymentView2',
    components: {
        LeviathanSetupView,
        LeviathanRoundViewVue,
        LeviathanScoreCalculator,
    },
    setup() {
        
    },
}
</script>
