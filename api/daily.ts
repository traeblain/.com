const postUrl = "https://api.airtable.com/v0/appWQ7mufpoNZv5cS/Music"
const recordIDs = [
  'reczI5d71Z6R0WbO7', 'reckIC9zsR8zbMQsl', 'recgKX1wo85XuCpG8', 'recxFKcQPDXxq5O0z', 'rec6lEV1TOLmHXlxf'
]

export const daily = async (ctx: any) => {
  try {
    const artistsResponse = await fetch('https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=tblain&api_key=b25b959554ed76058ac220b7b2e0a026&period=6month&format=json')
    const artistsData = await artistsResponse.json()
    const artists = artistsData.topartists.artist

    const cleanArtists = []
    let artistData
    let fanartURL 
    for (let i = 0; i < 5; i++) {
      try {
        if (!artists[i].mbid) {
          let artistGetDetailsResponse = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${encodeURIComponent(artists[i].name)}&api_key=b25b959554ed76058ac220b7b2e0a026&format=json`)
          let artistGetDetails = await artistGetDetailsResponse.json()
          artists[i].mbid = artistGetDetails.artist.mbid
        }
        console.log(artists[i].mbid, artists[i].name, artists[i].playcount * 1)
        fanartURL = "https://webservice.fanart.tv/v3.2/music/{0}?api_key={1}".replace('{0}', artists[i].mbid).replace('{1}', ctx.env.FANART_API)
        let artistDataResponse = await fetch(fanartURL)
        artistData = await artistDataResponse.json()
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

    const resp = await fetch(postUrl, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + ctx.env.HUGO_PARAMS_AIRTABLETOKEN
      },
      body: JSON.stringify(postData)
    })

    console.log(resp.status, resp.statusText)
    if (resp.status === 200 || resp.status === 201) {
      console.log('Attempting to rebuild...not yet...')
      // const rebuild = await fetch('https://api.netlify.com/build_hooks/' + ctx.env.REBUILD_KEY, {
      //   method: 'POST'
      // })
    }
    ctx.status(200)
    return ctx.json(await resp.json())
  }
  catch (error) {
    ctx.status(422)
    return ctx.json({ error: error })
  }
}
