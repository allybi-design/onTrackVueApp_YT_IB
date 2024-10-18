import { isNull } from "./validators";

export function normalizeSelectValue(value) {
  return isNull(value) || isNaN(value) ? value : +value;
}

export function generatePeriodSelectOptions() {
  const periodsInMinutes = [
    0, 15, 30, 45, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420,
    450, 480,
  ];

  return periodsInMinutes.map((periodInMinutes) => ({
    value: periodInMinutes * 60,
    label: generatePeriodSelectOptionsLabel(periodInMinutes),
  }));
}

export function updateTimelineItem(timelineItem, fields) {
  // console.log(timelineItem, fields);
  return Object.assign(timelineItem, fields);
}

export function generateTimeLineItems() {
  return [...Array(24).keys()].map((hour) => ({
    hour,
    selected: Math.floor(Math.random() * 6),
    activitySeconds: 0,
    isActive: false,
  }));
}

export function generatePeriodSelectOptionsLabel(periodInMinutes) {
  const hours = Math.floor(periodInMinutes / 60)
    .toString()
    .padStart(2, 0);
  const minutes = (periodInMinutes % 60).toString().padStart(2, 0);

  return `${hours}:${minutes}`;
}