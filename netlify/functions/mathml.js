const temml = require('temml')

// const mathml = temml.renderToString('c = \\pm\\sqrt{a^2 + b^2}')

exports.handler = async (event, context) => {
  const tex = event.body
  const mathml = temml.renderToString(tex, {displayMode: true, xml: true})
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        title: "Your Math Function",
        math: mathml,
        tex: tex
      }
    )
  }
}
