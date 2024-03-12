<template>
    <v-dialog width="500">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" text="+"> </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card title="Battleline Select">
                <v-card-text>
                    <Battleline :faction="chosenFaction" @battlelineSelect="battlelineSelect" />
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                    text="Close Battleline Select"
                    @click="isActive.value = false"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>
<script>
import Battleline from '@/components/leviathan/factions/chaos-demons/Battleline.vue'

export default {
    name: "BattlelineSelectorComponent",
    setup(props) {
        console.log('in battleline selector component. here is the props');
        console.log(props.chosenFaction);
    },
    components: {
        Battleline,
    },
    methods: {
        battlelineSelect(selectedBattlelineUnit) {
            this.$emit('selectedBattleline', selectedBattlelineUnit);
        }
    },
    props: {
        chosenFaction: String,
    }
}
</script>