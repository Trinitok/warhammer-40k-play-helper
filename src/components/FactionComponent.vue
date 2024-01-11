<template>
    {{ faction_metadata.name }}
    <v-item v-slot="{ isSelected, toggle }">
        <div >
            <v-img 
                :src="faction_metadata.src"
                height="150"
                class="text-right pa-2"
                @click="[selectedFaction(), toggle($event)]"
            />
            <v-btn text="Select" :icon="isSelected ? '$vuetify' : ''" @click="[selectedFaction(), toggle($event)]" />
        </div>
    </v-item>
</template>
<script>
export default {
    name: "FactionComponent",
    props: {
        faction_metadata: Array,
    },
    setup() {
    },
    data: () => ({
    }),
    methods: {
        selectedFaction() {
            this.$emit('factionSelected', this.faction_metadata);
        },
    },
}
</script>