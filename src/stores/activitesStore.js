import { defineStore } from "pinia";

export const useActivitesStore = defineStore({
  id: "activites",
  state: () => ({
    // count: 0,
    activitiesOptions: [
      { value: 0, label: "Rest" },
      { value: 1, label: "Work" },
      { value: 2, label: "Eat" },
      { value: 3, label: "Sleep" },
      { value: 4, label: "Play" },
      { value: 5, label: "Study" },
    ],
  }),

  actions: {
    // //! Example 1: 
    // doubleCount() {
    //   this.count * 2;
    // },
    // //! exaample 2:
    // increment(payload) {
    //   this.count = this.count + payload;
    // },
  },

  getters: {
    // //! Example 1: 
    // getDoubleCount:(state) =>{
    //   return state.count * 2;
    // },
    // //!  exaample 2:
    // getCount: (state) => {
    //   return state.count
    // }
  },
});
