import { isNull } from "./validators";

export function normalizeSelectValue(value) {
  return isNull(value) || isNaN(value) ? value : +value;
}

