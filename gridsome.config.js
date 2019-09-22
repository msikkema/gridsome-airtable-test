// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const airtableDetails = { apiKey: 'xxx', baseId: 'xxx' } // Ask me for the key and baseid

module.exports = {
  siteName: 'Gridsome + Airtable Test',
  plugins: [
    {
      use: '@gridsome/source-airtable',
      options: {
        ...airtableDetails,
        tableName: 'BlogPosts',
        typeName: 'Post',
        route: '/posts/:title'
      }
    },
    {
      use: '@gridsome/source-airtable',
      options: {
        ...airtableDetails,
        tableName: 'Reviews',
        typeName: 'Review',
        route: '/reviews/:title'
      }
    },
  ]
}
