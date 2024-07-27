<template>
  <v-container class="d-flex justify-center align-center" fluid>
    <v-card class="playing-card" elevation="2">
      <!-- Top-left and Bottom-right corner numbers -->
      <div class="corner top-left">
        <v-icon :style="{ color: suitColors[suit] }">{{
          suitIcons[suit]
        }}</v-icon>
        <span>{{ topLeftNumber }}</span>
      </div>
      <div class="corner bottom-right">
        <span>{{ bottomRightNumber }}</span>
        <v-icon :style="{ color: suitColors[suit] }">{{
          suitIcons[suit]
        }}</v-icon>
      </div>

      <!-- Content Area (Center) -->
      <div class="card-header">
        <h3>{{ name }}</h3>
      </div>
      <v-card-text class="card-content">
        <slot></slot>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType } from "vue";

export default defineComponent({
  name: "PlayingCard",
  props: {
    name: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const suits = ["spades", "hearts", "diamonds", "clubs"];
    const values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];

    const suitIcons: Record<string, string> = {
      spades: "mdi-cards-spade",
      hearts: "mdi-cards-heart",
      diamonds: "mdi-cards-diamond",
      clubs: "mdi-cards-club",
    };

    const suitColors: Record<string, string> = {
      spades: "black",
      hearts: "red",
      diamonds: "red",
      clubs: "black",
    };

    // Reactive properties for the card
    const topLeftNumber = ref("");
    const bottomRightNumber = ref("");
    const suit = ref("");

    // Function to get a random item from an array
    const getRandomItem = (arr: string[]) =>
      arr[Math.floor(Math.random() * arr.length)];

    // Initialize card properties with random values
    onMounted(() => {
      suit.value = getRandomItem(suits);
      const randomValue = getRandomItem(values);

      const number =
        randomValue === "A" ? "A" : randomValue === "10" ? "10" : randomValue;
      topLeftNumber.value = number;
      bottomRightNumber.value = number;
    });

    return {
      topLeftNumber,
      bottomRightNumber,
      suit,
      suitIcons,
      suitColors,
    };
  },
});
</script>

<style scoped>
.playing-card {
  position: relative;
  width: 300px; /* Increased size */
  height: 400px; /* Increased size */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px solid #000; /* Border to make the card visible */
  border-radius: 8px; /* Rounded corners for better appearance */
}

.corner {
  position: absolute;
  font-size: 24px;
  font-weight: bold;
}

.top-left {
  top: 15px;
  left: 15px;
}

.bottom-right {
  bottom: 15px;
  right: 15px;
}

.card-header {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 18px;
  font-weight: bold;
  color: #000; /* Adjust color if needed */
}

.card-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: left;
}
</style>
