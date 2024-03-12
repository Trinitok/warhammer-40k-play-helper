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

                <BattlelineSelectorComponentVue :chosenFaction="faction" @selectedBattleline="addBattleline" />

                <!-- end -->
            </v-expansion-panel-title>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                Dedicated Transports <v-spacer />
                <!-- begin -->

                <DedicatedTransportSelectorComponentVue :chosenFaction="faction" @selectedDedicatedTransport="addDedicatedTransports" />

                <!-- end -->
            </v-expansion-panel-title>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>
                Other <v-spacer />
                <!-- begin -->

                <OtherSelectorComponentVue :chosenFaction="faction" @selectedOtherDataSheet="addOtherDataSheet" />

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
        addBattleline(battlelineUnitToAdd) {
            console.log('adding' + battlelineUnitToAdd);
            battlelineUnitToAdd['value'] = this.items.length + 1;
            this.items.push(battlelineUnitToAdd);
            console.log(this.items);
        },
        addDedicatedTransports(dedicatedTransportUnitToAdd) {
            console.log('adding' + dedicatedTransportUnitToAdd);
            dedicatedTransportUnitToAdd['value'] = this.items.length + 1;
            this.items.push(dedicatedTransportUnitToAdd);
            console.log(this.items);
        },
        addOtherDataSheet(otherUnitToAdd){
            console.log('adding' + otherUnitToAdd);
            otherUnitToAdd['value'] = this.items.length + 1;
            this.items.push(otherUnitToAdd);
            console.log(this.items);
        },
    },
}
</script>