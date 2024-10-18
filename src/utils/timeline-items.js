import { ref } from "vue";

export const timeLineItems = ref([]);

// export function initTimeLineItems() {
//   timeLineItems.value = generateTimeLineItems();
// }

// export function updateTimelineItem(timelineItem, fields) {
//   // console.log(timelineItem, fields);
//   return Object.assign(timelineItem, fields);
// }

export function generateTimeLineItems() {
  return [...Array(24).keys()].map((hour) => ({
    hour,
    selected: Math.floor(Math.random() * 6),
    activitySeconds: 0,
    isActive: false,
  }));
}
