module.exports = {
  siteMetadata: {
    title: "Fostering Flourishing",
    baseKeywords: "fostering, flourishing, ",
    author: "David Hartsough",
    url: "https://fosteringflourishing.org",
    image: "https://fosteringflourishing.org/icons/icon-512x512.png",
    imageAlt: "Fostering Flourishing",
    schemaType: "WebSite",
    ogType: "website",
    color: "#06091d",
    maskIcon: "/safari-pinned-tab.svg",
    msTileImage: "/mstile-144x144.png",
    siteUrl: "https://fosteringflourishing.org",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-external-links",
          "gatsby-remark-autolink-headers",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Fostering Flourishing",
        short_name: "Flourishing",
        start_url: "/",
        background_color: "#06091d",
        theme_color: "#06091d",
        display: "minimal-ui",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-100473307-3",
      },
    },
    "gatsby-plugin-eslint",
  ],
}
