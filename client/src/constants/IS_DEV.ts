export const IS_DEV = Boolean(
  window.location.hostname === "localhost" ||
  window.location.hostname === "[::1]" ||
  (window.location.hostname.match(
    /^[0-9.]+$/
  ) && window.location.port === "5000")
) && window.location.port !== ""