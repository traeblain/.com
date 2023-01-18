require('dotenv').config()
const axios = require('axios').default
const moment = require('moment')
const Parser = require('rss-parser')
let parser = new Parser({
  customFields: {
    item: ['user_read_at', 'user_review', 'user_rating', 'author_name', 'book_id', 'book_medium_image_url']
  }
})
const postUrl ="https://api.airtable.com/v0/appChKYhLC0uF7gPx/Books"

function sortDate(a, b) {
  if (moment(a.user_read_at) > moment(b.user_read_at)) return -1;
  if (moment(a.user_read_at) < moment(b.user_read_at)) return 1;
  return 0;
}

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST" || event.queryStringParameters.secret !== process.env.POST_SECRET) {
    return {
      statusCode: 403,
      body: 'This is not the function you are looking for...'
    }
  }
  try {
    const postData = {}
    const feed = await parser.parseURL('https://www.goodreads.com/review/list_rss/1671848?shelf=read')
    const latest = feed.items.sort(sortDate)[0]
    console.log(latest)
    postData.Date = moment(latest.user_read_at).format()
    postData.Title = latest.title
    postData.Link = latest.link
    postData.Author = latest.author_name
    postData.Rating = latest.user_rating * 1
    postData.Review = latest.user_review
    postData.Image = latest.book_medium_image_url

    const resp = await axios.post(postUrl, { fields: postData }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.AIRTABLE_TOKEN
      }
    })

    // console.log(resp.status, resp.statusText)
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
      body: JSON.stringify({
        error: error
      })
    }
  }
}
