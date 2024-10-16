import { ref} from "vue";


export const now = ref(today());


export function today() {
  return new Date();
}

export function formatedHour(hour){
  return `${hour.toString().padStart(2, 0)}:00`;
} 
