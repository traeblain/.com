// import Parser from 'rss-parser'
import RSSParser from "./utils/rss-parser.min"

type Item = {
  Date: string
  Title: string
  Link: string
  Author: string
  Rating: number
  Review: string
  Image: string
}

const parser = new RSSParser({
  customFields: {
    item: ['user_read_at', 'user_review', 'user_rating', 'author_name', 'book_id', 'book_medium_image_url']
  }
})
const postUrl ="https://api.airtable.com/v0/appChKYhLC0uF7gPx/Books"

function sortDate(a: any, b: any) {
  const ta = a && a.user_read_at ? Date.parse(a.user_read_at) : 0
  const tb = b && b.user_read_at ? Date.parse(b.user_read_at) : 0
  return tb - ta
}

export const bookUpdate = async (ctx: any) => {
  try {
    const feedData = await fetch('https://www.goodreads.com/review/list_rss/1671848?shelf=read')
    const feedText = await feedData.text()

    const feed = await parser.parseString(feedText)
    const latest = feed.items.sort(sortDate)[0]

    const postData: Item = {
      Date: latest && latest.user_read_at ? new Date(latest.user_read_at).toISOString() : new Date().toISOString(),
      Title: latest && latest.title ? latest.title : '',
      Link: latest && latest.link ? latest.link : '',
      Author: latest && latest.author_name ? latest.author_name : '',
      Rating: latest && latest.user_rating ? latest.user_rating * 1 : 0,
      Review: latest && latest.user_review ? latest.user_review : '',
      Image: latest && latest.book_medium_image_url ? latest.book_medium_image_url : '',
    }

    if (!postData.Title) {
      throw "No book data found."
    }
    
    const resp = await fetch(postUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + ctx.env.HUGO_PARAMS_AIRTABLETOKEN
      },
      body: JSON.stringify({ fields: postData })
    })

    console.log(resp.status, resp.statusText)
    if (resp.status === 200 || resp.status === 201) {
      console.log('Attempting to rebuild.--Not yet...')
      // TODO: Trigger a rebuild of Cloudflare Pages
    }
    ctx.status(resp.status)
    return ctx.json(await resp.json())
  }
  catch (error) {
    ctx.status(422)
    return ctx.json({
      error: error
    })
  }
}
