export function isSelectValueValid(value) {
  return isNotEmptyString(value) || isNumberOrNull(value);
}
export function isNull(value) {
  return value === null;
}
export function isActivityValid(value) {
  return isString(value) && value.length > 0;
}

function isNotEmptyString(value) {
  return isString(value) && value.length > 0;
}

function isNumberOrNull(value) {
  return isNumber(value) || isNull(value);
}

function isString(value) {
  return typeof value === "string";
}

function isNumber(value) {
  return typeof value === "number";
}
