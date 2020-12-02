<template>
  <v-card
    v-if="card"
    :color="`${card.color}`"
    class="pa-8 my-2 white--text text-left card-shadow"
  >
    <v-card-title class="headline font-weight-bold">
      {{
        card.title
      }}
    </v-card-title>
    <v-tabs
      :background-color="`${card.color}`"
      dark
      icons-and-text
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
      show-arrows
      center
      fixed-tabs
    >
      <v-tabs-slider :color="`${card.accentColor}`" />
      <v-tab>
        {{ card.tab1 }}
        <v-icon>
          {{ card.icon1 }}
        </v-icon>
      </v-tab>
      <v-tab>
        {{ card.tab2 }}
        <v-icon>
          {{ card.icon2 }}
        </v-icon>
      </v-tab>
      <v-tab>
        {{ card.tab3 }}
        <v-icon>
          {{ card.icon3 }}
        </v-icon>
      </v-tab>
      <v-tab>
        {{ card.tab4 }}
        <v-icon>
          {{ card.icon4 }}
        </v-icon>
      </v-tab>

      <v-tab-item>
        <v-card
          :color="`${card.color}`"
          style="border-radius: 0px !important;"
          flat
        >
          <v-card-text class="text-h6 white--text">
            <p>
              {{ card.text1 }}
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card
          :color="`${card.color}`"
          style="border-radius: 0px !important;"
          flat
        >
          <v-card-text class="text-h6 white--text">
            <p>
              {{ card.text2 }}
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card
          :color="`${card.color}`"
          style="border-radius: 0px !important;"
          flat
        >
          <v-card-text class="text-h6 white--text">
            <p>
              {{ card.text3 }}
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card
          :color="`${card.color}`"
          style="border-radius: 0px !important;"
          flat
        >
          <v-card-text class="text-h6 white--text">
            <p>
              {{ card.text4 }}
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  name: "ColorWideCard",
  props: {
    card: {
      type: Object,
      default: () => {}
    },
  }
};
</script>
