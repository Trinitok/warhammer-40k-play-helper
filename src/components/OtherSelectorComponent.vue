<template>
    <v-dialog width="500">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" text="+"> </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card title="Other Unit Select">
                <v-card-text>
                    Other here
                </v-card-text>
                    <OtherUnitsComponent :faction="chosenFaction" @otherUnitSelect="otherSelect" />
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                    text="Close Other Unit Select"
                    @click="isActive.value = false"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>
<script>
import OtherUnitsComponent from '@/components/leviathan/factions/chaos-demons/Other.vue'

export default {
    name: "OtherSelectorComponent",
    setup(props) {
        console.log('in other selector component. here is the props');
        console.log(props.chosenFaction);
    },
    components: {
        OtherUnitsComponent,
    },
    methods: {
        otherSelect(selectedOtherUnit) {
            this.$emit('selectedOther', selectedOtherUnit);
        }
    },
    props: {
        chosenFaction: String,
    }
}
</script>