<template>
  <div>
    <div class="d-flex justify-space-around align-center py-4">
      <v-btn
        variant="text"
        icon="$vuetify"
        @click="model = Math.max(model - 1, 0)"
      ></v-btn>
      {{ colors[model] }}
      <v-btn
        variant="text"
        icon="$vuetify"
        @click="model = Math.min(model + 1, 11)"
      ></v-btn>
    </div>
    <v-carousel
      v-model="model"
      height="100%"
      progress="green"
      show-arrows
      prev-icon="$vuetify"
      next-icon="$vuetify"
    >
      <v-carousel-item key="table" value="0">
        <v-sheet color="primary" height="100%" tile>
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              <LeviathanDeploymentView />
              <!-- Slide {{ i + 1 }} -->
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item key="primary-mission" value="1">
        <v-sheet color="primary" tile>
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              <MissionView 
                :missionList="colors" 
                randomButtonSpinnerLink="https://wheelofnames.com/hc7-j9a"
              />
              <!-- Slide {{ i + 1 }} -->
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item key="mission-rule" value="2">
        <v-sheet color="primary" tile>
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              <MissionView 
                :missionList="colors" 
                randomButtonSpinnerLink="https://wheelofnames.com/bjg-sew"
              />
              <!-- Slide {{ i + 1 }} -->
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item key="measure-table" value="3">
        <v-sheet color="primary" tile>
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              Measure out 44 inches by 60 inches.  This will be your table.

              The 4 quadrants of the board are each 11 inches by 15 inches.
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item key="place-objective-marker" value="4">
        <v-sheet color="primary" tile>
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              Starting with Player 1, both players alternate placing objective markers.

              Please refer to the deployment card when deciding where to place unless your mission dictates otherwise.
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item key="setup-terrain" value="5">
        <v-sheet color="primary" tile>
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              Starting with Player 1, both players alternate placing terrain.

              Unless otherwise stated, no impassable terrain can be setup within 1 inch of an objective marker
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item key="player-1-secondary-mission" value="6">
        <v-sheet color="primary" tile>
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              <MissionView 
                title="Select 2 Secondary Missions"
                :missionList="colors" 
                randomButtonSpinnerLink="https://wheelofnames.com/5rh-3x5"
              />
              <!-- Slide {{ i + 1 }} -->
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item key="player-2-secondary-mission" value="7">
        <v-sheet color="primary" tile>
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              <MissionView 
                title="Select 2 Secondary Missions"
                :missionList="colors" 
                randomButtonSpinnerLink="https://wheelofnames.com/5rh-3x5"
              />
              <!-- Slide {{ i + 1 }} -->
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item key="Declare Battle Formations" value="8">
        <v-sheet color="primary" tile>
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              Secretly note: Units are attached, in transports, or in Reserves
              <br />
              <br />
              No more than half the units or points of an army can be in Reserves
              <br />
              <br />
              Reserves cannot enter in first round.
              <br />
              <br />
              Any reserves not in at the end of Round 3 are automatically destroyed
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item key="Deploy Armies" value="9">
        <v-sheet color="primary" tile>
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              Starting with the Defender, alternate placing units within your deployment zone
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item key="Determine First Turn" value="10">
        <v-sheet color="primary" tile>
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              Roll off to see who goes first.  Highest roll goes first.
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item key="Resolve Pre Battle Rules" value="11">
        <v-sheet color="primary" tile>
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              Resolve any pre-battle rules starting with the player going first
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
import LeviathanDeploymentView from "@/views/leviathan/LeviathanDeploymentView.vue";
import MissionView from "@/views/MissionView.vue";

export default {
  components: {
    LeviathanDeploymentView,
    MissionView,
  },
  data() {
    return {
      colors: [
        "table", 
        "primary mission", 
        "mission rule", 
        "measure-table",
        "place-objective-marker",
        "setup-terrain",
        "player-1-secondary-mission",
        "player-2-secondary-mission",
        "Declare Battle Formations",
        "Deploy Armies",
        "Determine First Turn",
        "Resolve Pre Battle Rules",
      ],
      primaryMissionObject: {
        "Take and Hold": {
          'Special': 'N/A',
          'Battle Round 2': 'At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up to 15VP per turn)', 
          'Battle Round 3': 'At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up to 15VP per turn)',
          'Battle Round 4': 'At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up to 15VP per turn)',
          'Battle Round 5': 'The player who has the first turn scores VP as described above. \n\nThe player who has the second turn scores VP as described above, but does so at the end of their turn instead of at the end of their Command phase.',
          'End of Battle': 'N/A',
        },
        "Scorched Earth": {
          'Special': 'From the second battle round, in each player’s Shooting phase, the player whose turn it is can select one unit from their army that is not Battle-shocked and is eligible to shoot. Until the end of that turn, that unit is not eligible to shoot or declare a charge. At the start of its controlling player’s next Command phase, if that unit is within 1” of an objective marker that the player whose turn it is controls, that objective marker is burned and removed from the battlefield',
          'Battle Round 2': 'At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up to 15VP per turn)', 
          'Battle Round 3': 'At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up to 15VP per turn)',
          'Battle Round 4': 'At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up to 15VP per turn)',
          'Battle Round 5': 'The player who has the first turn scores VP as described above.\n\nThe player who has the second turn scores VP as described above, but does so at the end of their turn instead of at the end of their Command phase.',
          'End of Battle': 'Each player scores 5VP if one or more objective markers in No Man’s Land were burned by a unit from their army, and 10VP if the objective marker in their opponent’s deployment zone was burned.',
        },
        "Purge the Foe": {
          'Special': 'At the end of the battle round, each player scores 4VP if one of more enemy units were destroyed that battle round, and an extra 4VP if more enemy units than friendly units were destroyed that battle round.\n\nNote that a unit can, if it is returned to the battlefield for any reason, potentially contribute to this Primary Mission several times (assuming it is returned and subsequently destroyed several times over)',
          'Battle Round 2': 'At the end of each Command phase, the player whose turn it is scores 4VP if they control one or more objective markers, and an extra 4VP if they control more objective markers than their opponent controls.', 
          'Battle Round 3': 'At the end of each Command phase, the player whose turn it is scores 4VP if they control one or more objective markers, and an extra 4VP if they control more objective markers than their opponent controls.',
          'Battle Round 4': 'At the end of each Command phase, the player whose turn it is scores 4VP if they control one or more objective markers, and an extra 4VP if they control more objective markers than their opponent controls.',
          'Battle Round 5': 'The player who has the first turn scores VP as described above.\n\nThe player who has the second turn scores VP as described above, but does so at the end of their turn instead of at the end of their Command phase.',
          'End of Battle': 'N/A',
        },
        "Sites of Power": {
          'Special': 'The objective markers in No Man’s Land are sites of power. At the end of each command phase, the player whose turn it is empowers all sites of power that they control that have one or more Character models from their army within range; each site of power remains empowered by that player while one or more of their Character models remains within range of it',
          'Battle Round 2': 'At the end of each player’s Command phase, the player whose turn it is scores VP as follows (up to 15VP per turn);\n\t- 3VP for each objective marker they control\n\t- 3VP for each site of power they have empowered\n\nNote that these are cumulative, so a player that controls one objective marker they have also empowered will score 6VP that turn', 
          'Battle Round 3': 'At the end of each player’s Command phase, the player whose turn it is scores VP as follows (up to 15VP per turn);\n\t- 3VP for each objective marker they control\n\t- 3VP for each site of power they have empowered\n\nNote that these are cumulative, so a player that controls one objective marker they have also empowered will score 6VP that turn',
          'Battle Round 4': 'At the end of each player’s Command phase, the player whose turn it is scores VP as follows (up to 15VP per turn);\n\t- 3VP for each objective marker they control\n\t- 3VP for each site of power they have empowered\n\nNote that these are cumulative, so a player that controls one objective marker they have also empowered will score 6VP that turn',
          'Battle Round 5': 'The player who has the first turn scores VP as described above.\n\nThe player who has the second turn scores VP as described above, but does so at the end of their turn instead of at the end of their Command phase.',
          'End of Battle': 'N/A',
        },
        "The Ritual": {
          'Special': '',
          'Battle Round 2': '', 
          'Battle Round 3': '',
          'Battle Round 4': '',
          'Battle Round 5': '',
          'End of Battle': 'N/A',
        },
        "Priority Targets": {
          'Special': '',
          'Battle Round 2': '', 
          'Battle Round 3': '',
          'Battle Round 4': '',
          'Battle Round 5': '',
          'End of Battle': '',
        },
        "Supply Drop": {
          'Special': '',
          'Battle Round 2': '', 
          'Battle Round 3': '',
          'Battle Round 4': '',
          'Battle Round 5': '',
          'End of Battle': 'N/A',
        },
        "Deploy Servo Skulls": {
          'Special': '',
          'Battle Round 2': '', 
          'Battle Round 3': '',
          'Battle Round 4': '',
          'Battle Round 5': '',
          'End of Battle': 'N/A',
        },
        "Vital Ground": {
          'Special': 'If you draw this and the Hidden Supplies Mission Rule Card, discard this card and draw a new Primary Mission card.\n\nAfter setting up the battlefield, remove the objective marker in No Man’s Land that is closest to the centre of the battlefield.',
          'Battle Round 2': 'At the end of each Command phase, the player whose turn it is scores VP as follows:\n\t-If they control the objective marker in their own deployment zone, they score 2VP.\n\t-For each objective marker in No Man’s Land they control, they score 5VP.\n\t-If they control the objective marker in their opponent’s deployment zone, they score 6VP.', 
          'Battle Round 3': 'At the end of each Command phase, the player whose turn it is scores VP as follows:\n\t-If they control the objective marker in their own deployment zone, they score 2VP.\n\t-For each objective marker in No Man’s Land they control, they score 5VP.\n\t-If they control the objective marker in their opponent’s deployment zone, they score 6VP.',
          'Battle Round 4': 'At the end of each Command phase, the player whose turn it is scores VP as follows:\n\t-If they control the objective marker in their own deployment zone, they score 2VP.\n\t-For each objective marker in No Man’s Land they control, they score 5VP.\n\t-If they control the objective marker in their opponent’s deployment zone, they score 6VP.',
          'Battle Round 5': 'The player who has the first turn scores VP as described above.\n\nThe player who has the second turn scores VP as described above, but does so at the end of their turn instead of at the end of their Command phase.',
          'End of Battle': 'N/A',
        },
      },
      secondaryMissionObject: {},
      missionRule: {
        'Chilling Rain': {
          'Special': '',
        },
        'Sweep and Clear': {
          'Special': '',
        },
        'Hidden Supplies': {
          'Special': '',
        },
        'Minefields': {
          'Special': '',
        },
        'Targets of Opportunity': {
          'Special': '',
        },
        'Scrambler Fields': {
          'Special': '',
        },
        'Delayed Reserves': {
          'Special': '',
        },
        'Chosen Battlefield': {
          'Special': '',
        },
        'Maelstrom of Battle': {
          'Special': '',
        },
        'Supply Lines': {
          'Special': 'In this mission, if a player controls the objective marker in their own deployment zone at the start of their Command phase, they roll one D6: on a 4+, that player gains 1CP.',
        },
        'Secret Intel': {
          'Special': '',
        },
        'Vox Static': {
          'Special': 'In this mission, the Command Re-roll Stratagem and New Orders Stratagem both cost 2CP to use.',
        },
      },
      model: 0,
    };
  },
};
</script>