<template>
    {{ faction_metadata.name }}
    <v-item v-slot="{ isSelected, toggle }">
        <div @click="selectedFaction">
            <v-img 
                :src="faction_metadata.src"
                height="150"
                class="text-right pa-2"
                @click="toggle"
            />
            <v-btn text="Select" :icon="isSelected ? '$vuetify' : ''" @click="toggle"></v-btn>
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
    methods: {
        selectedFaction(value) {
            console.log('item in faction selector was clicked');
            console.log(value);
            this.$emit('factionSelected', this.faction_metadata)
        },
    },
}
</script>