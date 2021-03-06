require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Jose Luis Checa Alamillos`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    '@chakra-ui/gatsby-plugin',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
  ],
}
