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
            v-for="otherUnit in faction.otherDataSheets"
            :key="otherUnit"
        >
            <v-expansion-panel-title
            >
                {{ otherUnit.name }} <v-spacer /> <v-btn text="+" @click="selectOtherUnit(otherUnit.metaName)" />
            </v-expansion-panel-title>
        </v-expansion-panel>
    </v-expansion-panels>
</template>
<script>
export default {
    name: "OtherComponent",
    setup() {
        
    },
    data: () => ({
        battleline: [
            {
                name: "Bloodcrushers",
                statline: [
                    {
                        movement: 10,
                        toughness: 7,
                        armor_save: 4,
                        wounds: 4,
                        leadership: 7,
                        objective_control: 2
                    }
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                    {
                        name: "Hellblade",
                        statline: [
                            {
                                name: "base",
                                range: 0,
                                attacks: "2",
                                weapon_skill: 3,
                                strength: 5,
                                armor_piercing: 2,
                                damage: 2,
                            },
                        ]
                    },
                    {
                        name: "Juggernaut's Bladed Horn",
                        statline: [
                            {
                                name: "base",
                                range: 0,
                                attacks: "4",
                                weapon_skill: 4,
                                strength: 6,
                                armor_piercing: 1,
                                damage: 1,
                            },
                        ]
                    },
                ],
                abilities: [
                    {
                        name: "invulnerable_save",
                        invulnerable_save: 5,
                        text: "4+",
                        active: true,
                        aura: false,
                        aura_distance: 0,
                    },
                    {
                        name: "Brass Stampede",
                        text: "Each time this unit ends a Charge move, select one enemy unit within Engagement Range of this unit and roll one D6 for each model in this unit: for each 4+, that enemy unit suffers D3 mortal wounds",
                        active: true,
                        aura: false,
                        aura_distance: 0,
                    },
                ],
                points: 120,
            }
        ]
    }),
    methods: {
        selectOtherUnit(identification) {
            console.log('selected battleline unit = ' + identification);
            this.$emit('otherUnitSelect', identification);
        },
    },
    props: {
        faction: String,
    }
}
</script>