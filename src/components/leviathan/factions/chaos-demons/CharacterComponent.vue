<template>
    
</template>
<script>
export default {
    name: "CharacterComponent",
    setup() {
        
    },
    data: () => ({
        characters: [
            {
                name: "Skarbrand",
                statline: [
                    {
                        movement: 8,
                        toughness: 11,
                        armor_save: 4,
                        wounds: 20,
                        leadership: 6,
                        objective_control: 5
                    }
                ],
                ranged_weapons: [
                    {
                        name: "Bellow of Endless Fury",
                        statline: [
                            {
                                name: "base",
                                range: 12,
                                attacks: "2d6",
                                ballistic_skill: 0,
                                strength: 5,
                                armor_piercing: 0,
                                damage: 1,
                            }
                        ],
                    }
                ],
                melee_weapons: [
                    {
                        name: "Slaughter and Carnage",
                        statline: [
                            {
                                name: "strike",
                                range: 0,
                                attacks: "8",
                                weapon_skill: 2,
                                strength: 16,
                                armor_piercing: 4,
                                damage: 6,
                            },
                            {
                                name: "sweep",
                                range: 12,
                                attacks: "2d6",
                                weapon_skill: 2,
                                strength: 8,
                                armor_piercing: 1,
                                damage: 2,
                            },
                        ]
                    }
                ],
                abilities: [
                    {
                        name: "invulnerable_save",
                        invulnerable_save: 4,
                        text: "4+",
                        active: true,
                        aura: false,
                        aura_distance: 0,
                    },
                    {
                        name: "Rage Embodied",
                        text: "(Aura) While a friendly Khorne Legiones Daemonica unit (excluding Monsters and Vehicles) is within 6\" of this model, add 1 to the Attacks characteristic of melee weapons equipped by models in that unit",
                        active: true,
                        aura: true,
                        aura_distance: 6,
                        affect: {
                            other_units: {
                                statline_changes: {
                                    melee_weapons: {
                                        attack: 1
                                    }
                                },
                                excluded_units: ["Monsters", "Vehicles"],
                                affected_units: ["Khorne", "Legiones Daemonica"]
                            }
                        }
                    },
                    {
                        name: "Murderlust",
                        text: "While a unit is within 6\" of this model, each time that unit is selected to Fall Back, it must take a Leadership test. If that test is failed, that unit must Remain Stationary this phase instead.",
                        active: true,
                        aura: true,
                        aura_distance: 6,
                    },
                ],
                points: 345,
            }
        ]
    }),
}
</script>