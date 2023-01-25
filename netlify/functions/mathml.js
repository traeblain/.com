const temml = require('temml')

const mathml = temml.renderToString('c = \\pm\\sqrt{a^2 + b^2}')

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        hello: "Hello Functions",
        math: mathml
      }
    )
  }
}
