<template>
    <v-app>
    <v-divider />
        <v-layout ref="app" class="rounded rounded-md">
        <v-navigation-drawer
            name="nav-drawer"
        >
            <v-list density="compact" nav>
                <v-list-item 
                    prepend-icon="$vuetify"
                    title="Army Creation" 
                    value="army" 
                    @click="showFactionCreation"
                >

                </v-list-item>
                <v-list-item 
                    prepend-icon="$vuetify"
                    title="Game" 
                    value="game" 
                    @click="showGame"
                >

                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main class="d-flex align-center justify-center">
            <v-alert 
                v-if="!isGameVisible && !isArmyCreationVisible"
                density="compact"
                type="warning"
                text="Please select a choice on the left"
            >
            </v-alert>
            <div id="army-creation" v-show="isArmyCreationVisible">
                <FactionSelectorViewVue />
            </div>
            <div id="game" v-show="isGameVisible">
                <LeviathanPhaseViewVue />
            </div>
        </v-main>

    </v-layout>
    <v-divider />
    </v-app>

</template>
<script>
import LeviathanPhaseViewVue from '@/views/leviathan/LeviathanPhaseView.vue'
import FactionSelectorViewVue from '@/views/FactionSelectorView.vue'

export default {
    name: "GameNavigation",
    components: {
        FactionSelectorViewVue,
        LeviathanPhaseViewVue,
    },
    data() {
      return {
            listItemSelected: false,
            isGameVisible: false,
            isArmyCreationVisible: false,
        }
    },
    setup() {
        
    },
    methods: {
        showFactionCreation() {
            this.isGameVisible = false;
            this.isArmyCreationVisible = true;

        },
        showGame() {
            this.isArmyCreationVisible = false;
            this.isGameVisible = true;
        },
    }
}
</script>