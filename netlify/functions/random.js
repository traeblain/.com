const axios = require('axios').default
const url = "/index.json" //Don't know if this will work...

exports.handler = async (event, context) => {

  const getData = await axios.get(url)
  const total = getData.data.length

  const randomPost = Math.floor(Math.random() * total)

  const redirect = getData[randomPost].url

  return {
    statusCode: 200
    body: `<head>
    <meta http-equiv="Refresh" content="0; URL=${redirect}" />
  </head>`
  }

}