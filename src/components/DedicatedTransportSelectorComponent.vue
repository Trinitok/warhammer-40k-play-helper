<template>
    <v-dialog width="500">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" text="+"> </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card title="Dedicated Transport Unit Select">
                <v-card-text>
                    <DedicatedTransportUnitsComponent :faction="chosenFaction" @dedicatedTransportUnitSelect="dedicatedTransportSelect" />
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                    text="Close Dedicated Transport Unit Select"
                    @click="isActive.value = false"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>
<script>
import DedicatedTransportUnitsComponent from '@/components/leviathan/factions/chaos-demons/DedicatedTransportUnits.vue'

export default {
    name: "DedicatedTransportSelectorComponent",
    setup(props) {
        console.log('in dedicated transport selector component. here is the props');
        console.log(props.chosenFaction);
    },
    components: {
        DedicatedTransportUnitsComponent,
    },
    methods: {
        dedicatedTransportSelect(selectedDedicatedTransport) {
            this.$emit('selectedDedicatedTransport', selectedDedicatedTransport);
        }
    },
    props: {
        chosenFaction: String,
    }
}
</script>