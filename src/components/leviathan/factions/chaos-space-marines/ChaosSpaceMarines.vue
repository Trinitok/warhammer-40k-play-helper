<script>

export default {
    name: "ChaosSpaceMarines",
    setup() {
        let characters = [
            {
                name: "Abbadon the Despoiler",
                metaName: "abbadon-the-despoiler",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 310,
            },
            {
                name: "Chaos Lord",
                metaName: "chaos-lord",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 95,
            },
            {
                name: "Chaos Lord in Terminator Armor",
                metaName: "chaos-lord-in-terminator-armour",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 95,
            },
            {
                name: "Cypher",
                metaName: "cypher",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 105,
            },
            {
                name: "Dark Apostle",
                metaName: "dark-apostle",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 75,
            },
            {
                name: "Dark Commune",
                metaName: "dark-commune",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 65,
            },
            {
                name: "Exalted Champion",
                metaName: "exalted-champion",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 70,
            },
            {
                name: "Fabius Bile",
                metaName: "fabius-bile",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 85,
            },
            {
                name: "Haarken Worldclaimer",
                metaName: "haarken-worldclaimer",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 90,
            },
            {
                name: "Heretic Astartes Daemon Prince",
                metaName: "heretic-astartes-daemon-prince",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 180,
            },
            {
                name: "Heretic Astartes Daemon Prince with Wings",
                metaName: "heretic-astartes-daemon-prince-with-wings",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 195,
            },
            {
                name: "Huron Blackheart",
                metaName: "huron-blackheart",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 80,
            },
            {
                name: "Lord Discordant on Helstalker",
                metaName: "lord-discordant-on-helstalker",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 190,
            },
            {
                name: "Lucious the Eternal",
                metaName: "lucious-the-eternal",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 95,
            },
            {
                name: "Master of Executions",
                metaName: "master-of-executions",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 80,
            },
            {
                name: "Master of Possession",
                metaName: "master-of-possession",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 80,
            },
            {
                name: "Sorcerer",
                metaName: "sorcerer",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 60,
            },
            {
                name: "Sorcerer in Terminator Armour",
                metaName: "sorcerer-in-terminator-armour",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 90,
            },
            {
                name: "Traitor Enforcer",
                metaName: "traitor-enforcer",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 65,
            },
            {
                name: "Vashtorr the Arkifane",
                metaName: "vashtorr-the-arkifane",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 190,
            },
            {
                name: "Warpsmith",
                metaName: "warpsmith",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 70,
            },
        ];
        
        let battleLine = [
            {
                name: "Cultist Mob",
                metaName: "cultist-mob",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 55,
            },
            {
                name: "Legionaries",
                metaName: "legionaries",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 90,
            },
        ];

        let dedicatedTransport = [
            {
                name: "Chaos Rhino",
                metaName: "chaos-rhino",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 75,
            },
        ];

        let otherDataSheets = [
            {
                name: "Accursed Cultists",
                metaName: "accursed-cultists",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 105,
            },
            {
                name: "Chaos Bikers",
                metaName: "chaos-bikers",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 90,
            },
            {
                name: "Legionaries",
                metaName: "legionaries",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 90,
            },
            {
                name: "Legionaries",
                metaName: "legionaries",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 90,
            },
            {
                name: "Legionaries",
                metaName: "legionaries",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 90,
            },
            {
                name: "Legionaries",
                metaName: "legionaries",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 90,
            },
            {
                name: "Legionaries",
                metaName: "legionaries",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 90,
            },
            {
                name: "Legionaries",
                metaName: "legionaries",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 90,
            },
            {
                name: "Legionaries",
                metaName: "legionaries",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 90,
            },
            {
                name: "Legionaries",
                metaName: "legionaries",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 90,
            },
            {
                name: "Legionaries",
                metaName: "legionaries",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 90,
            },
            {
                name: "Legionaries",
                metaName: "legionaries",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 90,
            },
            {
                name: "Legionaries",
                metaName: "legionaries",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 90,
            },
            {
                name: "Legionaries",
                metaName: "legionaries",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 90,
            },
            {
                name: "Legionaries",
                metaName: "legionaries",
                statline: [
                ],
                ranged_weapons: [
                ],
                melee_weapons: [
                ],
                abilities: [
                ],
                points: 90,
            },
        ];

        const getCharacters = () => {
            console.log('csm characters');
            return characters;
        }

        const getBattleLine = () => {
            console.log('battleline csm');
            return battleLine;
        }

        const getDedicatedTransports = () => {
            console.log('dedicated transport csm');
            return dedicatedTransport;
        }

        const getOtherDataSheets = () => {
            console.log('otherdatasheets csm');
            return otherDataSheets;
        }

        return {
            getCharacters,
            getBattleLine,
            getDedicatedTransports,
            getOtherDataSheets,
        };
    },
}
</script>
