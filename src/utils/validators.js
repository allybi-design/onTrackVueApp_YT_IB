export function isSelectValueValid(value) {
  // console.log("isNotEmptyString", isNotEmptyString(value));
  // console.log("isNumberOrNull", isNumberOrNull(value));
  return isNotEmptyString(value) || isNumberOrNull(value);
}

export function isNull(value) {
  // console.log("isNull", value === null);
  return value === null;
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
