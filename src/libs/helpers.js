import _ from "lodash";

export const isNothing = (obj) => {
  return _.isUndefined(obj) || _.isNull(obj) || _.isNaN(obj);
};

export const isSomething = (obj) => {
  return !isNothing(obj);
};

export const isSomethingWithId = (obj) => {
  return isSomething(obj) && isSomething(obj.id);
};