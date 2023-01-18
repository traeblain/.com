const axios = require('axios').default
const url = "https://tbcom2023.netlify.app/index.json" //Didn't work, remember to change this one GOLIVE!

exports.handler = async (event, context) => {

   const getData = await axios.get(url)
  const total = getData.data.data.length

  const randomPost = Math.floor(Math.random() * total)
  
  const redirect = getData.data.data[randomPost].url

  return {
    statusCode: 200,
    body: `<head>
    <meta http-equiv="Refresh" content="0; URL=${redirect}" />
  </head>`
  }

}