const axios = require('axios').default
const all = require('../../public/index.json')

exports.handler = async (event, context) => {

  const randomPost = Math.floor(Math.random() * all.data.length)
  
  const redirect = all.data[randomPost].url

  return {
    statusCode: 200,
    body: `<head>
    <meta http-equiv="Refresh" content="0; URL=${redirect}" />
  </head>`
  }

}