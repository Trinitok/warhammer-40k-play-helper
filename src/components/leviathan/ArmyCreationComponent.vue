<template>
    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-title id="characters-list-select">
                Characters <v-spacer />
                <!-- begin -->

                <CharacterSelectorComponentVue :chosenFaction="faction" @selectedCharacter="addCharacter" />

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

                <DedicatedTransportSelectorComponentVue />

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
import DedicatedTransportSelectorComponentVue from '../DedicatedTransportSelectorComponent.vue'
import OtherSelectorComponentVue from '../OtherSelectorComponent.vue'

export default {
    name: "ArmyCreationComponent",
    components: {
        BattlelineSelectorComponentVue,
        CharacterSelectorComponentVue,
        DedicatedTransportSelectorComponentVue,
        OtherSelectorComponentVue,
    },
    props: {
        faction: Object,
    },
    setup(props) {
        console.log('in army create component. here is the chosen faction');
        console.log(props.faction);
    },
    data: () => ({
        items: [
      ],
    }),
    methods: {
        addCharacter(characterToAdd) {
            console.log('adding' + characterToAdd);
            characterToAdd['value'] = this.items.length + 1;
            this.items.push(characterToAdd);
            console.log(this.items);
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