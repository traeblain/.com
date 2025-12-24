require('dotenv').config()
const axios = require('axios').default
const postUrl = "https://api.airtable.com/v0/appWQ7mufpoNZv5cS/Music"

exports.handler = async (event, context) => {
  try {
    const artistsResponse = await axios.get('https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=tblain&api_key=b25b959554ed76058ac220b7b2e0a026&period=6month&format=json')
    const artists = artistsResponse.data.topartists.artist

    const recordIDs = [
      'reczI5d71Z6R0WbO7', 'reckIC9zsR8zbMQsl', 'recgKX1wo85XuCpG8', 'recxFKcQPDXxq5O0z', 'rec6lEV1TOLmHXlxf'
    ]

    const cleanArtists = []
    let artistData
    for (let i = 0; i < 5; i++) {
      try {
        if (!artists[i].mbid) {
          let artistGetDetails = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artists[i].name}&api_key=b25b959554ed76058ac220b7b2e0a026&format=json`)
          artists[i].mbid = artistGetDetails.data.artist.mbid
        }
        console.log(artists[i].mbid, artists[i].name)
        artistData = await axios.get('https://webservice.fanart.tv/v3.2/music/' + artists[i].mbid + '&?api_key=' + process.env.FANART_API + '&format=json')

        console.log(artistData)
        cleanArtists[i] = {
          id: recordIDs[i],
          fields: {
            link: artists[i].url,
            plays: artists[i].playcount * 1,
            artist: artists[i].name,
            image: artists[i].image[3]['#text']
          }
        }

        if (typeof artistData.artistthumb !== 'undefined') {
          cleanArtists[i].fields.image = artistData.artistthumb[0].url.replace('https://assets.fanart.tv/fanart/', 'https://res.cloudinary.com/dixwznarl/image/upload/c_scale,q_auto,w_400/fanart/').replace('http://assets.fanart.tv/fanart/', 'https://res.cloudinary.com/dixwznarl/image/upload/c_scale,q_auto,w_400/fanart/')
        }
      } catch (e) {
        cleanArtists[i] = {
          id: recordIDs[i],
          fields: {
            link: artists[i].url,
            plays: artists[i].playcount * 1,
            artist: artists[i].name,
            image: artists[i].image[3]['#text']
          }
        }
      }
    }
    
    const postData = {
      records: cleanArtists
    }
    const resp = await axios.put(postUrl, postData, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.HUGO_PARAMS_AIRTABLETOKEN
      }
    })

    console.log(resp.status, resp.statusText)
    if (resp.status === 200 || resp.status === 201) {
      console.log('Attempting to rebuild.')
      const rebuild = await axios.post('https://api.netlify.com/build_hooks/' + process.env.REBUILD_KEY, {})
    }
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(resp.data)
    }
  }
  catch (error) {
    return {
      statusCode: 422,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: error })
    }
  }
}
