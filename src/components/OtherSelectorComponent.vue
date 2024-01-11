<template>
    <v-dialog width="500">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" text="+"> </v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card title="Dialog">
                <v-card-text>
                    Other here
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                    text="Close Dialog"
                    @click="isActive.value = false"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>
<script>
export default {
    name: "OtherSelectorComponent",
}
</script>