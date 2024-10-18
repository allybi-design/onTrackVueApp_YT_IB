import { defineStore } from "pinia";

export const useActivitesStore = defineStore({
  id: "activites",
  state: () => ({
    activitiesOptions: [
      { value: 0, label: "Rest" },
      { value: 1, label: "Work" },
      { value: 2, label: "Eat" },
      { value: 3, label: "Sleep" },
      { value: 4, label: "Play" },
      { value: 5, label: "Study" },
    ],
  }),

  getters: {
     },

  actions: {
    doubleCount() {
      this.activities * 2;
    },
    increment() {
      this.activities++;
    },
  },
});
