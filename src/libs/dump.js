const isDev = process.env.NODE_ENV === 'development';

/**
 * @description The same as console.log but only if in development mode.
 */
export const cl = (...args) => {
  if (!isDev) {
    return;
  }

  console.log(...args);
};

/**
 * @description The same as console.error but only if in development mode.
 */
export const ce = (...args) => {
  if (!isDev) {
    return;
  }

  console.error(...args);
};