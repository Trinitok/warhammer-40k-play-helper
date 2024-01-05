<template>
    <h1>This is a skeleton template and will likely be replaced by something better...soon</h1>
    <br />
    <v-alert
        density="compact"
        type="warning"
    >
        <v-alert-title class="justify-center">
            No Backend Database! All items not downloaded will be lost!
        </v-alert-title>
    </v-alert>
    <v-btn>Download Results</v-btn>
    <br />
</template>
<script>
export default {
    name: "LeviathanScoreCalculator",
    setup() {
        
    },
}
</script>