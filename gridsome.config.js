// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const airtableDetails = { apiKey: 'keyGtrdAlWXdPnI5f', baseId: 'appNbWzwFrqWJHyV4' }

module.exports = {
  siteName: 'Gridsome',
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
