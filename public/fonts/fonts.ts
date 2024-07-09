import localFont from "next/font/local";

// Import local Graphik fonts with both woff2 and woff formats
export const graphik = localFont({
  src: [
    {
      path: "../../public/fonts/Graphik-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/Graphik-Bold.woff",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/Graphik-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/fonts/Graphik-Medium.woff",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/fonts/Graphik-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Graphik-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Graphik-Semibold.woff2",
      weight: "600",
      style: "semi-bold",
    },
    {
      path: "../../public/fonts/Graphik-Semibold.woff",
      weight: "300",
      style: "semi-bold",
    },
    {
      path: "../../public/fonts/Graphik-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/fonts/Graphik-Light.woff",
      weight: "600",
      style: "light",
    },
    // Add more font variations as needed
  ],
  display: "swap",
});
