<template>
    <v-dialog width="500">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" text="+"> </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card title="Character Select">
                <v-card-text>
                    <CharacterComponent :faction="chosenFaction" @characterSelect="characterSelect" />
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                    text="Close Character Select"
                    @click="isActive.value = false"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>
<script>
import CharacterComponent from '@/components/leviathan/factions/chaos-demons/CharacterComponent.vue'

export default {
    name: "CharacterSelectorComponent",
    setup(props) {
        console.log('in character selector component. here is the props');
        console.log(props.chosenFaction);
    },
    components: {
        CharacterComponent,
    },
    methods: {
        characterSelect(selectedCharacter) {
            this.$emit('selectedCharacter', selectedCharacter);
        }
    },
    props: {
        chosenFaction: String,
    }
}
</script>