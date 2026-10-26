/**
 * Application-wide constants
 * Shared values used across the application
 */

export const APP_CONFIG = {
  name: "CSSU @ UofT",
  fullName: "Computer Science Student Union at the University of Toronto",
  email: "cssu@cdf.toronto.edu",
  officeRoom: "BA2285",
  officeLink: "https://goo.gl/maps/16JTD3pr2KKMkCTE7",
  constitutionPath: "/constitution.pdf",
} as const;

export const EVENT_CARDS_PER_ROW = 3;

export const IMAGE_PATHS = {
  logoSquare: "/cssu_square.webp",
  logoHorizontal: "/horizontal_logo_black.webp",
  logo: "/cssu_logo.webp",
  peopleBasePath: "/people",
} as const;
