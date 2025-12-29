const getUrl = "https://api.airtable.com/v0/appsrGcwdYD2QikLG/Kudos?filterByFormula=AND(SEARCH('{URLFILL}', {url}))"
const postUrl = "https://api.airtable.com/v0/appsrGcwdYD2QikLG/Kudos/"
// TODO: Look at moving this to Cloudflare's Key store...

export const kudos = async (ctx: any) => {
  try {
    const updateData = {
      fields: {
        kudo: 1
      }
    } as { fields: { kudo: number; url?: string }}

    const getData = await fetch(getUrl.replace('{URLFILL}', ctx.req.query('url')), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + ctx.env.HUGO_PARAMS_AIRTABLETOKEN
      }
    })
    const getJson = await getData.json()
    let kudo:any

    if (getJson.records.length === 1) {
      updateData.fields.kudo = getJson.records[0].fields.kudo + 1
      kudo = await fetch(postUrl + getJson.records[0].id, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + ctx.env.HUGO_PARAMS_AIRTABLETOKEN
        },
        body: JSON.stringify(updateData)
      })
    } else {
      updateData.fields.url = (ctx.req.query('url') + '/').replace('//', '/')
      kudo = await fetch(postUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + ctx.env.HUGO_PARAMS_AIRTABLETOKEN
        },
        body: JSON.stringify(updateData)
      })
    } 
    console.log(kudo.data)
    if (kudo.status === 200 || kudo.status === 201) {
      ctx.status(200)
      return ctx.json({
        url: ctx.req.query('url'),
        status: kudo.status,
        message: `Updated ${ctx.req.query('url')} with a kudo!`,
        count: updateData.fields.kudo
      })
    }

  } catch (error) {
    ctx.status(422)
    return ctx.json({
      error: error
    })
  }

}
