<template>
    <div class="deployment">
        <v-hover
          v-slot="{ isHovering, props }"
          open-delay="200"
        >
            <v-card
                @click="$emit('selected', 'v-card')"
                :elevation="isHovering ? 16 : 2"
                :class="{ 'on-hover': isHovering }"
                v-bind="props"
            >
                <v-img
                    :src="getImageUrl()"
                    height="200px"
                ></v-img>
                <v-card-title>{{ displayName }}</v-card-title>
            </v-card>
        </v-hover>
    </div>
</template>
<script>
export default {
  name: 'DeploymentPage',
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
