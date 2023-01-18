const axios = require('axios').default
const all = require('../../public/index.json') //Pull from local should run faster

exports.handler = async (event, context) => {

  // const getData = await axios.get(url)
  const randomPost = Math.floor(Math.random() * all.data.length)
  
  const redirect = all.data[randomPost].url

  return {
    statusCode: 200,
    body: `<head>
    <meta http-equiv="Refresh" content="0; URL=${redirect}" />
  </head>`
  }

}