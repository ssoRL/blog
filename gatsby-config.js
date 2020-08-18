const path = require(`path`)

const author = {
  firstname: "Gatsby",
  lastname: "framework",
}

module.exports = {
  siteMetadata: {
    title: `${author.firstname}'s Blog`,
    description: `Not everyone can be Gandhi, but each of us has the power to make sure our own lives count – and it’s those millions of lives that will ultimately build a better world. – Jeffrey Skoll`,
    author: `${author.firstname} ${author.lastname}`,
    authorDescription: "tries to make the world a better place",
    socials: {
      linkedin: "https://www.linkedin.com/in/pierre-alexis-blond-00924b158/",
      twitter: "https://twitter.com/_pablond",
      github: "https://github.com/PABlond",
    },
    themeColor: "#542C85",
    siteUrl: "https://friendly-cray-96d631.netlify.com/",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Mansalva", "Playfair Display", "Source Sans Pro"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/markdown`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src/assets/images`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#542C85`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
  ],
}
