import { defineStore } from "pinia";
import { generatePeriodSelectOptionsLabel } from "@/utils/functions";
import { generateTimeLineItems } from "@/utils/functions";

export const useTimeLineStore = defineStore({
  id: "timeLine",
  state: () => ({
    timeLineItems: [],
    periodsInMinutes: [
      0, 15, 30, 45, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390,
      420, 450, 480,
    ],
  }),

  actions: {
    initTimeLineItems() {
      this.timeLineItems = generateTimeLineItems();
    },
/**
 * Updates the timeline items by modifying the item that matches the target object's hour.
 * 
 * @param {Object} targetObj - The object containing the hour to match in the timeline items.
 * @param {Object} field - The fields to update in the matched timeline item.
 */
updateTimelineItems(targetObj, field) {
  this.timeLineItems = this.timeLineItems.map((item) => {
    return item.hour === targetObj.hour
      ? Object.assign(item, field)
      : item;
  });
},
  },

  getters: {
    getPeriodSelectOptions: (state) => {
      return state.periodsInMinutes.map((periodInMinutes) => ({
        value: periodInMinutes * 60,
        label: generatePeriodSelectOptionsLabel(periodInMinutes),
      }));
    },
  },
});
