/**
 * Navigation configuration
 * Contains all navigation links used in the Navbar component
 */

export type NavigationLink = {
  href: string;
  text: string;
};

export const NAVIGATION_LINKS: NavigationLink[] = [
  {
    href: "/lounge/",
    text: "BA2285",
  },
  {
    href: "/about/",
    text: "About",
  },
  {
    href: "/community/",
    text: "Community",
  },
  {
    href: "/posts/student-resources/",
    text: "Resources",
  },
  // Commented out for future use:
  // {
  //   href: "/partner-events/",
  //   text: "Partner Events",
  // },
  // {
  //   href: "/events/",
  //   text: "Events",
  // },
  {
    href: "/posts/",
    text: "Posts",
  },
];
