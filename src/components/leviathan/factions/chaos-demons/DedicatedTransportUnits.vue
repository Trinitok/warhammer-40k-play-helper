<template>
    <v-expansion-panels>
        <v-expansion-panel
            v-if="faction.meta_name == 'chaos_daemons'"
        >
            <v-expansion-panel-title>
                Skarbrand <v-spacer /> <v-btn text="+" @click="selectCharacter('skarbrand')" />
            </v-expansion-panel-title>
        </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels
        v-if="faction.meta_name == 'chaos_space_marines'"
    >
        <ChaosSpaceMarinesVue ref="csm" />
        <v-expansion-panel
            v-for="dedicatedTransport in faction.dedicatedTransports"
            :key="dedicatedTransport"
        >
            <v-expansion-panel-title
            >
                {{ dedicatedTransport.name }} <v-spacer /> <v-btn text="+" @click="selectDedicatedTransportUnit(dedicatedTransport.metaName)" />
            </v-expansion-panel-title>
        </v-expansion-panel>
    </v-expansion-panels>
</template>
<script>
export default {
    name: "DedicatedTransportUnitsComponent",
    setup() {
        
    },
    data: () => ({
    }),
    methods: {
        selectDedicatedTransportUnit(identification) {
            console.log('selected dedicated transport unit = ' + identification);
            this.$emit('dedicatedTransportUnitSelect', identification);
        },
    },
    props: {
        faction: String,
    }
}
</script>