<template>
  <div>
    <div class="d-flex justify-space-around align-center py-4">
    </div>
    <v-stepper 
      editable
      :items="[
        'Step 1', // Establish Players
        'Step 2', // Deployment Map Select
        'Step 3', // Primary Mission Select
        'Step 4', // Mission Rule Select
        'Step 5', // Measure Table
        'Step 6', // Place Objective Markers
        'Step 7', // Place Setup Terrain
        'Step 8', // Declare Battle Formations
        'Step 9', // Deploy Armies
        'Step 10', // Determine First Turn
        'Step 11', // Resolve Pre Battle Rules
      ]"
      next-text="Next Setup"
      prev-text="Previous Setup"
    >
      <!-- Player Select -->
      <template v-slot:[`item.1`]>
        <v-card title="Establish Players" flat>
          <v-sheet color="primary" height="100%" tile>
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              Establish who is Player 1 and Player 2
              <!-- Slide {{ i + 1 }} -->
            </div>
          </div>
        </v-sheet>
        </v-card>
      </template>

      <!-- Deployment Map Select -->
      <template v-slot:[`item.2`]>
        <v-card title="Deployment Map Select" flat>
        <v-sheet id="deployment-map-select" color="primary" height="100%" tile>
          <br />
          <div class="justify-center align-center">
            <!-- <div class="text-h2"> -->
              <LeviathanDeploymentView2 />
              <!-- Slide {{ i + 1 }} -->
            <!-- </div> -->
          </div>

        <br /> <br />
        </v-sheet>
        </v-card>
      </template>

      <!-- Primary Mission Select -->
      <template v-slot:[`item.3`]>
        <v-card title="Primary Mission Select" flat>
          <v-sheet id="primary-mission-select" color="primary" tile>
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">
                <MissionView 
                  :missionList="colors" 
                  randomButtonSpinnerLink="https://wheelofnames.com/hc7-j9a"
                />
                <!-- Slide {{ i + 1 }} -->
              </div>
            </div>
            <br /> <br />
          </v-sheet>
        </v-card>
      </template>

      <!-- Mission Rule Select -->
      <template v-slot:[`item.4`]>
        <v-card title="Mission Rule Select" flat>
          <v-sheet id="mission-rule-select" color="primary" tile>
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">
                <MissionView 
                  :missionList="colors" 
                  randomButtonSpinnerLink="https://wheelofnames.com/bjg-sew"
                />
              </div>
            </div>
            <br /><br />
          </v-sheet>
        </v-card>
      </template>

      <!-- Measure Table -->
      <template v-slot:[`item.5`]>
        <v-card title="Measure Table" flat>
          <v-sheet color="primary" height="100%" tile>
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">
                Measure out 44 inches by 60 inches.  This will be your table.

                The 4 quadrants of the board are each 11 inches by 15 inches.
              </div>
            </div>
          </v-sheet>
        </v-card>
      </template>

      <!-- Place Objective Markers -->
      <template v-slot:[`item.6`]>
        <v-card title="Place Objective Markers" flat>
          <v-sheet color="primary" tile>
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">
                Starting with Player 1, both players alternate placing objective markers.

                Please refer to the deployment card when deciding where to place unless your mission dictates otherwise.
              </div>
            </div>
          </v-sheet>
        </v-card>
      </template>

      <!-- Place Setup Terrain -->
      <template v-slot:[`item.7`]>
        <v-card title="Setup Terrain" flat>
          <v-sheet color="primary" tile>
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">
                Starting with Player 1, both players alternate placing terrain.

                Unless otherwise stated, no impassable terrain can be setup within 1 inch of an objective marker
              </div>
            </div>
          </v-sheet>
        </v-card>
      </template>

      <!-- Declare Battle Formations -->
      <template v-slot:[`item.8`]>
        <v-card title="Battle Formations" flat>
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
        </v-card>
      </template>

      <!-- Deploy Armies -->
      <template v-slot:[`item.9`]>
        <v-card title="Deploy Armies" flat>
          <v-sheet color="primary" tile>
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">
                Starting with the Defender, alternate placing units within your deployment zone
              </div>
            </div>
          </v-sheet>
        </v-card>
      </template>

      <!-- Determine First Turn -->
      <template v-slot:[`item.10`]>
        <v-card title="Determine First Turn" flat>
          <v-sheet color="primary" tile>
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">
                Roll off to see who goes first.  Highest roll goes first.
              </div>
            </div>
          </v-sheet>
        </v-card>
      </template>

      <!-- Resolve Pre Battle Rules -->
      <template v-slot:[`item.11`]>
        <v-card title="Pre Battle Rules" flat>
          <v-sheet color="primary" tile>
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">
                Resolve any pre-battle rules starting with the player going first
              </div>
            </div>
          </v-sheet>
        </v-card>
      </template>
    </v-stepper>
  </div>
</template>
<script>
import LeviathanDeploymentView2 from "@/views/leviathan/LeviathanDeploymentView2.vue";
import MissionView from "@/views/MissionView.vue";

export default {
  components: {
    LeviathanDeploymentView2,
    MissionView,
  },
  data() {
    return {
      colors: [
        "player designation",
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
          'Special': 'When setting up the battlefield, remove all objective markers in No Man’s Land except the one closest to the centre of the battlefield. In each player’s Shooting phase, the player whose turn it is can select one unit from their army that is not Battle-shocked and is eligible to shoot. Until the end of that turn, that unit is not eligible to shoot or declare a charge. At the end of that turn, the player whose turn it is can set up one objective marker wholly within No Man’s Land and within 1” of that unit provided it can be set up exactly 9” from one other objective marker and not within 6” of any other objective marker.',
          'Battle Round 2': 'At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker in No Man’s Land they control (up to 15VP per turn).', 
          'Battle Round 3': 'At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker in No Man’s Land they control (up to 15VP per turn).',
          'Battle Round 4': 'At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker in No Man’s Land they control (up to 15VP per turn).',
          'Battle Round 5': 'The player who has the first turn scores VP as described above. The player who has the second turn scores VP as described above, but does so at the end of their turn instead of at the end of their Command phase.',
          'End of Battle': 'N/A',
        },
        "Priority Targets": {
          'Special': 'N/A',
          'Battle Round 2': 'At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up to 10VP per turn)', 
          'Battle Round 3': 'At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up to 10VP per turn)',
          'Battle Round 4': 'At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up to 10VP per turn)',
          'Battle Round 5': 'At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up to 10VP per turn)',
          'End of Battle': 'Each player scores 5VP for each objective marker they control (up to 15VP per player)',
        },
        "Supply Drop": {
          'Special': 'At the start of the battle, players randomly select two different objective markers in No Man’s Land: the first selected is the Alpha objective, the second is the Omega objective. At the start of the fourth battle round, the Alpha objective is removed from the battlefield. At the start of the fifth battle round, all objective markers in No Man’s Land apart from the Omega objective are also removed.',
          'Battle Round 2': 'At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control in No Man’s Land.', 
          'Battle Round 3': 'At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control in No Man’s Land.',
          'Battle Round 4': 'At the end of each Command phase, the player whose turn it is scores 8VP for each objective marker they control in No Man’s Land.',
          'Battle Round 5': 'The player who has the first turn scores 15VP at the end of their command phase if they control the objective marker in No Man’s Land. The player who has the second turn scores 15VP at the end of their turn if they control the objective maker in No Man’s Land',
          'End of Battle': 'N/A',
        },
        "Deploy Servo Skulls": {
          'Special': 'The objective markers that start the battle in No Man’s Land are servo-skulls. At the end of each turn, each of these objective markers can be moved up to 6” in any direction by the player that controls it. When moving objective markers, they cannot end that move on top of any other objective marker or model, or inside impassable parts of terrain features (such as the walls of a ruin).',
          'Battle Round 2': 'At the end of each turn, the player whose turn it is scores VP as follows: 2VP for each servo-skull that is wholly within 12” of their opponent’s deployment zone. 5VP for each servo-skull that is wholly within 6” of their opponent’s deployment zone. 8VP for each servo-skull that is wholly within their opponent’s deployment zone. Note that these are cumulative, so if a servo-skull is wholly within your opponent’s deployment zone, you would score 15VP from that servo-skull at the end of your turn.', 
          'Battle Round 3': 'At the end of each turn, the player whose turn it is scores VP as follows: 2VP for each servo-skull that is wholly within 12” of their opponent’s deployment zone. 5VP for each servo-skull that is wholly within 6” of their opponent’s deployment zone. 8VP for each servo-skull that is wholly within their opponent’s deployment zone. Note that these are cumulative, so if a servo-skull is wholly within your opponent’s deployment zone, you would score 15VP from that servo-skull at the end of your turn.', 
          'Battle Round 4': 'At the end of each turn, the player whose turn it is scores VP as follows: 2VP for each servo-skull that is wholly within 12” of their opponent’s deployment zone. 5VP for each servo-skull that is wholly within 6” of their opponent’s deployment zone. 8VP for each servo-skull that is wholly within their opponent’s deployment zone. Note that these are cumulative, so if a servo-skull is wholly within your opponent’s deployment zone, you would score 15VP from that servo-skull at the end of your turn.', 
          'Battle Round 5': 'At the end of each turn, the player whose turn it is scores VP as follows: 2VP for each servo-skull that is wholly within 12” of their opponent’s deployment zone. 5VP for each servo-skull that is wholly within 6” of their opponent’s deployment zone. 8VP for each servo-skull that is wholly within their opponent’s deployment zone. Note that these are cumulative, so if a servo-skull is wholly within your opponent’s deployment zone, you would score 15VP from that servo-skull at the end of your turn.', 
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
      secondaryMissionObject: {
        //  Fixed Secondary Objectives
        "Behind Enemy Lines (Fixed)": {
          'Fixed Special': 'At the end of your turn, if two or more units from your army (excluding Aircraft) are wholly within your opponent’s deployment zone, this Secondary Mission is achieved and you score 4VP If, at the end of your turn, only one unit from your army (excluding Aircraft) is wholly within your opponent’s deployment zone, this Secondary Mission is still achieved, but in this instance you score 2VP instead of 4VP. If you are using Tactical Missions, then when this Secondary Mission is achieved you score an extra 1VP (for a maximum of 5VP).'
        },
        "Assassination (Fixed)": {
          'Fixed Special': 'If you are using Fixed Missions, then while this Secondary Mission is active, each time an enemy Character model is destroyed, you score 4VP. If you are using Tactical Missions, then at the end of the turn, if either of the conditions below are satisfied, this Secondary Mission is achieved and you score 5VP: One or more enemy Character units were destroyed this turn. All Character units from your opponent’s Army Roster have been destroyed during the battle. Note that if you are using Tactical Missions, this Secondary Mission is achieved even if such a unit was destroyed and then subsequently resurrected for any reason.'
        },
        "Bring it Down (Fixed)": {
          'Fixed Special': 'While this Secondary Mission is active, each time an enemy Monster or Vehicle model is destroyed, you score 2VP and an extra 1VP for each of the conditions below that are satisfied (all are cumulative): The destroyed model had a Wounds characteristic of 10+ The destroyed model had a Wounds characteristic of 15+ The destroyed model had a Wounds characteristic of 20+ Note that VP are scored even if such a model is destroyed and then subsequently resurrected for any reason. If you score any VP from this Secondary Mission during a turn, then at the end of that turn this Secondary Mission is achieved. If you are using Tactical Missions, then when this Secondary Mission is achieved you score an extra 1VP. However, if you are using Tactical Missions, you cannot score more than 8VP in total from this Secondary Mission.'
        },
        "Engage on All Fronts (Fixed)": {
          'Fixed Special': 'At the end of your turn, if you have one or more qualifying units (see below) from your army wholly within three or more different table quarters, and those units are all more than 3” away from any other table quarter, this Secondary Mission is achieved and you score 4VP if you have qualifying units in four different table quarters, or 2VP if you have qualifying units in three different table quarters. While a unit is Battle-shocked, it is not a qualifying unit. If, when you draw this Secondary Mission card, you only have one or two qualifying units remaining in your army, you can discard this Secondary Mission card and draw a new Secondary Mission card. If you are using tactical Missions, then when this Secondary Mission is achieved you score an extra 1VP (for a maximum of 5VP).'
        },
        "Storm Hostile Objective (Fixed)": {
          'Fixed Special': 'At the end of your turn, if either of the below conditions are satisfied, this Secondary Mission is achieved and you score 4VP if you are using Fixed Missions, or 5VP if you are using Tactical Missions: You control one or more objective markers that were controlled by your opponent at the start of your turn. Your opponent did not control any objective markers at the start of your turn and you control one or more objective markers that you did not control at the start of your turn. This Secondary Mission cannot be achieved during the first battle round; if you randomly drew this Secondary Mission card during the first battle round, draw a new Secondary Mission card and shuffle this Secondary Mission card back into your Secondary Mission deck.'
        },
        "Cleanse (Fixed)": {
          'Fixed Special': 'In your Shooting phase, you can select one or more units from your army that are not Battle-shocked and are eligible to shoot. Until the end of your turn, the units you selected are not eligible to shoot or declare a charge. At the end of your turn, each objective marker that is not within your deployment zone that you control that has one or more of these selected units within range is cleansed by your army. If one or more objective markers are cleansed by your army this turn, this Secondary Mission is achieved and you score a number of VP depending on the number of objective markers cleansed by your army this turn, as follows: 1 objective marker cleansed = 2VP if you are using Fixed Missions, or 3VP if you are using Tactical Missions. 2 or more objective markers cleansed = 4VP if you are using Fixed Missions, or 5VP if you are using Tactical Missions.'
        },
        "Deploy Teleport Homers (Fixed)": {
          'Fixed Special': 'In your shooting phase, you can select one unit from your army that is not Battle-shocked and is eligible to shoot. Until the end of your turn, that unit is not eligible to shoot or declare a charge. At the end of your turn, if that unit is within your opponents deployment zone, or within 6” of the centre of the battlefield, it deploys a teleport homer at that locations, this Secondary Mission is achieved and you score a number of VP depending on where the teleport homer was deployed, as follows: Centre of battlefield = 2VP if you are using Fixed Missions, or 3VP if you are using Tactical Missions Opponent’s deployment zone = 4VP if you are using Fixed Missions, or 5VP if you are using Tactical Missions'
        },
        // Tactical Secondary Objectives
        "Investigate Signals (Tactical)": {
          'Tactical Special': 'In your Shooting phase, you can select one or more units from your army that are not Battle-shocked and are eligible to shoot. Until the end of your turn, the units you selected are not eligible to shoot or declare a charge. At the end of your turn, each corner of the battlefield that has one or more of these selected units wholly within 9” of it is scanned by your army. If one or more corners are scanned by your army, this Secondary Mission is achieved and you score 2VP for each corner scanned by your army this turn.'
        },
        "No Prisoners": {
          'Tactical Special': 'While this Secondary Mission is active, each time an enemy unit is destroyed, you score 2VP (to a maximum of 5VP). Note that VP are scored even if such a unit is destroyed and then subsequently resurrected for any reason. If you score any VP from this Secondary Mission during a turn, then at the end of that turn this Secondary Mission is achieved.'
        },
        "Extend Battle Lines (Tactical)": {
          'Tactical Special': 'At the end of your turn, if you control one or more objective markers in your own deployment zone and you also control one or more objective markers in No Man’s Land, this Secondary Mission is achieved and you score 5VP. If you only have one unit remaining in your army, then this Secondary Mission is instead achieved at the end of your turn if that unit controls one objective marker in No Man’s Land, but in this instance you score 2VP instead of 5VP.'
        },
        "Defend Stronghold (Tactical)": {
          'Tactical Special': 'At the end of your opponent’s turn, or at the end of the battle (whichever comes first), if you control one or more objective markers in your own deployment zone, this Secondary Mission is achieved and you score 3VP. This Secondary Mission cannot be achieved during the first battle round; if you draw this Secondary Mission card during the first battle round, draw a new Secondary Mission card and shuffle this Secondary Mission card back into your Secondary Mission deck.'
        },
        "Overwhelming Force (Tactical)": {
          'Tactical Special': 'While this Secondary Mission is active, each time an enemy unit that started the turn within range of an objective marker is destroyed, you score 3VP (to a maximum of 5VP). Note that VP are scored even if such a unit is destroyed and then subsequently resurrected for any reason. If you score any VP from this Secondary Mission during a turn, then at the end of that turn this Secondary Mission is achieved.'
        },
        "Secure No Man’s Land (Tactical)": {
          'Tactical Special': 'At the end of your turn, if you control two or more objective markers in No Man’s Land, this Secondary Mission is achieved and you score 5VP. If, at the end of your turn, you only control one objective marker in No Man’s Land, this Secondary Mission is still achieved, but in this instance you score 2VP instead of 5VP.'
        },
        "Area Denial (Tactical)": {
          'Tactical Special': 'At the end of your turn, if one or more units from your army (excluding Battle-shocked units) are wholly within 6” of the centre of the battlefield, and there are no enemy units wholly within 6” of the centre of the battlefield, this Secondary Mission is achieved and you score 5VP. If, at the end of your turn, there are one or more enemy units wholly within 6” of the centre of the battlefield, but there are no enemy units within 3” of the centre of the battlefield, then this Secondary Mission is still achieved, but in this instance you score 3VP instead of 5VP.'
        },
        "A Tempting Target (Tactical)": {
          'Tactical Special': 'When this Secondary Mission card is drawn, your opponent must select one objective marker in No Man’s Land. At the end of your turn, if you control that selected objective marker, this Secondary Mission is achieved and you score 5VP.'
        },
        "Capture Enemy Outpost (Tactical)": {
          'Tactical Special': 'At the end of your turn, if you control one or more objective markers in your opponent’s deployment zone, this Secondary Mission is achieved and you score 8VP.'
        },
      },
      missionRule: {
        'Chilling Rain': {
          'Special': 'In this mission, no additional mission rules apply',
        },
        'Sweep and Clear': {
          'Special': 'In this mission, if a player controls an objective marker at the end of their Command phase, that objective marker remains under their control, even if they have no models within range of it, unless their opponent controls it at the end of any subsequent Command phase.',
        },
        'Hidden Supplies': {
          'Special': 'In this mission, players must set up one additional objective marker in No Man’s Land. Unless the Chosen Battlefield mission rule is also in effect, before setting up this new objective marker, players must first move the objective marker in the centre of the battlefield 6” directly towards one of the corners of the battlefield (if No Man’s Land touches any corners of the battlefield, you must move the objective marker towards one of those corners). Players then set up the new objective marker 6” from the centre of the battlefield towards the diagonally opposite corner of the battlefield to the previously moved objective marker.',
        },
        'Minefields': {
          'Special': 'In this mission, each time an Advance roll of 6 is made for a unit, that unit suffers 1 mortal wound.',
        },
        'Targets of Opportunity': {
          'Special': 'In this mission, if a player is using Tactical Missions, then each time that player determines which Secondary Mission cards are active for them, if they have fewer than 3 active Secondary Mission cards, that player draws from their Secondary Mission deck until they have 3 Secondary Mission cards. In this mission, if a player is using Fixed Missions, then in addition to the 2 Fixed Mission cards, that player will also draw cards from their Secondary Mission deck during the battle. At the end of the Select Secondary Missions step, that player should retrieve their Secondary Mission deck, remove all the Fixed Mission cards they did not select at the start of that step, then shuffle the remaining cards. Then, at the start of each of that player’s Command phases, if that player has fewer than 3 active Secondary Mission cards (including their Fixed Mission cards), they draw from their Secondary Mission deck until they have 3 Secondary Mission cards. That player has access to the New Orders Strategem, and can spend CP to use it after drawing their Secondary Mission cards if they wish (remember that Fixed Mission cards cannot be discarded for any reason).',
        },
        'Scrambler Fields': {
          'Special': 'In this mission: Players’ units with the Infiltrators ability cannot be set up within range of an objective marker that is either in No Man’s Land or their opponent’s deployment zone. Players’ units with the Scout ability that make a move before the first turn begins cannot end that move within range of an objective marker that is either in No Man’s Land or their opponent’s deployment zone. If any rule is used to redeploy a unit, that rule cannot be used to set up that unit within range of an objective marker in No Man’s Land. When a player’s Reserves and Strategic Reserves units are set up on the battlefield, they cannot be set up within range of an objective marker that is either in No Man’s Land or their opponent’s deployment zone.',
        },
        'Delayed Reserves': {
          'Special': 'In this mission, until the start of the third battle round, each time a Reserves or Strategic Reserves unit wishes to arrive on the battlefield, the controlling player must make a Reserves roll for it. To do so, that player rolls one D6: on a 3+, that unit arrives on the battlefield; otherwise, the Reserves roll fails and that unit does not arrive this turn.',
        },
        'Chosen Battlefield': {
          'Special': 'In this mission, objective markers are not placed as shown on the Deployment card drawn. Instead, players roll off at the start of the Place Objective Markers step, then alternate setting up objective markers, one at a time, starting with the winner of the roll off. One objective marker must be placed wholly within each deployment zone, and the remaining objective markers must be played wholly within No Man’s Land, as shown on the Deployment card drawn. Objective markers must be placed more than 6” away from any battlefield edge and more than 9” away from all other objective markers. If for whatever reason it is not possible to set up an objective marker as described above, it is not placed on the battlefield. If any rules require players to set up additional objective markers (e.g. Hidden Supplies) during the Place Objective Markers step, players set them up as described on this Mission Rule card. If any rules instruct players to remove one or more objective markers, do so after setting them all up.',
        },
        'Maelstrom of Battle': {
          'Special': 'In this mission, shuffle the remaining Mission Rule cards together before drawing 2 new Mission Rule cards. If either of these new Mission Rule cards is Chilling rain, discard that Mission Rule card and draw 2 additional new Mission Rule cards (for a total of 3 new Mission Rule cards). Apply all the drawn Mission Rule cards to the battle.',
        },
        'Supply Lines': {
          'Special': 'In this mission, if a player controls the objective marker in their own deployment zone at the start of their Command phase, they roll one D6: on a 4+, that player gains 1CP.',
        },
        'Secret Intel': {
          'Special': 'In this mission, in each player’s Command phase, the first time that player draws Secondary Mission cards that phase, that player can draw one additional Secondary Mission card, and then discard one of their active Secondary Mission cards.',
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