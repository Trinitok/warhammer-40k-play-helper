<template>
    <div class="game-select">
        <v-container class="text-center">
            <v-row justify="center">
                <v-col cols="12" sm="6" md="4">
                    <v-card
                        class="mx-auto"
                    >
                        <v-img
                            src="https://www.fauxhammer.com/wp-content/uploads/2023/05/Warhammer-40000-Leviathan-Review-Artwork.jpg"
                            height="200px"
                            cover
                        ></v-img>
                        <v-card-title>
                            Leviathan
                        </v-card-title>
                        <v-card-actions>
                            <v-btn
                                color="orange-lighten-2"
                                variant="text"
                                @click="show = !show"
                            >
                                Learn More
                            </v-btn>
                            <v-spacer />
                            <v-btn
                                color="orange-lighten-2"
                                variant="text"
                                to="/leviathan-deployment"
                            >
                                Select
                            </v-btn>
                        </v-card-actions>
                        <v-expand-transition>
                            <div v-show="show">
                                <v-divider></v-divider>
                                <v-card-subtitle>
                                    Leviathan Mission Rules
                                </v-card-subtitle>
                                <v-card-text>
                                    <a href="https://www.warhammer-community.com/wp-content/uploads/2023/06/hlF8WKv4gJpXPZha.pdf">
                                        https://www.warhammer-community.com/wp-content/uploads/2023/06/hlF8WKv4gJpXPZha.pdf
                                    </a>
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>