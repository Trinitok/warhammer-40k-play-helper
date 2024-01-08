<template>
    
</template>
<script>
export default {
    name: "BattlelineComponent",
    setup() {
        
    },
    data: () => ({
        battleline: [
            {
                name: "Bloodletters",
                statline: [
                    {
                        movement: 6,
                        toughness: 4,
                        armor_save: 7,
                        wounds: 1,
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
                    }
                ],
                abilities: [
                    {
                        name: "invulnerable_save",
                        invulnerable_save: 5,
                        text: "5+",
                        active: true,
                        aura: false,
                        aura_distance: 0,
                    },
                    {
                        name: "Blood Begets Blood",
                        text: "Each time a model in this unit makes a melee attack, re-roll a Wound roll of 1. If that attack targets a unit that is Below Half-strength, you can re-roll the Wound roll instead.",
                        active: true,
                        aura: true,
                        aura_distance: 0,
                    },
                ],
                points: 140,
            }
        ]
    }),
}
</script>