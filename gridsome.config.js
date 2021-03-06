// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// Old key was regenerated, ask me for access to the airtable base
const airtableDetails = { apiKey: 'xxx', baseId: 'xxx' }

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
