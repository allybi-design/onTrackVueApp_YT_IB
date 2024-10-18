import { ref } from "vue";
import { generatePeriodSelectOptions } from "./functions";

export const timeOptions = ref(generatePeriodSelectOptions());
