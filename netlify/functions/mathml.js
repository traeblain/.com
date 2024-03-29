const temml = require('temml')

// const mathml = temml.renderToString('c = \\pm\\sqrt{a^2 + b^2}')

exports.handler = async (event) => {
  const tex = event.body
  console.log(event.body)
  const mathml = temml
    .renderToString(tex, { displayMode: true, xml: true })
    .replace("display=\"block\"", "class=\"hugo-math\" display=\"block\"")
    .replace("style=\"display:inline-block;\"", "")
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        title: "TraeBlain.com MathML Processor",
        math: mathml,
        tex: tex
      }
    )
  }
}
