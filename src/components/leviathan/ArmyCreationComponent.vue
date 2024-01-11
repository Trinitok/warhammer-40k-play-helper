<template>
    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-title>
                Characters <v-spacer />
                <!-- begin -->

                <CharacterSelectorComponentVue />

                <!-- end -->
            </v-expansion-panel-title>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                Battleline <v-spacer />
                <!-- begin -->

                <BattlelineSelectorComponentVue />

                <!-- end -->
            </v-expansion-panel-title>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                Dedicated Transports <v-spacer />
                <!-- begin -->

                <CharacterSelectorComponentVue />

                <!-- end -->
            </v-expansion-panel-title>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                Other <v-spacer />
                <!-- begin -->

                <OtherSelectorComponentVue />

                <!-- end -->
            </v-expansion-panel-title>
        </v-expansion-panel>
    </v-expansion-panels>
</template>
<script>
import BattlelineSelectorComponentVue from '../BattlelineSelectorComponent.vue'
import CharacterSelectorComponentVue from '../CharacterSelectorComponent.vue'
import OtherSelectorComponentVue from '../OtherSelectorComponent.vue'

export default {
    name: "ArmyCreationComponent",
    components: {
        BattlelineSelectorComponentVue,
        CharacterSelectorComponentVue,
        OtherSelectorComponentVue,
    },
    props: {

    },
    setup() {
        
    },
    methods: {
        showCharacters() {

        },
        showBattleline() {

        },
        showDedicatedTransports() {

        },
        showOther(){

        },
    },
}
</script>