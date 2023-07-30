<template>
    <div class="deployment">
            <v-card
                to="/"
            >
                <v-img
                    :src="getImageUrl()"
                    height="200px"
                ></v-img>
                <v-card-title>{{ displayName }}</v-card-title>
            </v-card>
    </div>
</template>
<script>
export default {
  name: 'DeploymentPage',
//   data: ({
//       cards: [
//         { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
//       ],
//     }),
  props: {
    displayName: String,
    mapImage: String,
  },
  methods: {
      getImageUrl() {
          return this.mapImage;
      },
  }
}
</script>
