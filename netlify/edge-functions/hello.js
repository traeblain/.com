const temml = require('./node_modules/temml/dist/temml.cjs')

const mathml = temml.renderToString('c = \\pm\\sqrt{a^2 + b^2}')

export default async (request, context) => {
  return Response.json({ 
    hello: "world",
    mathml: mathml
  })
}