import temml from 'temml'

export const mathml = async (c: any) => {
  const tex = await c.req.text()
  console.log("Received TeX:", tex)
  const mathml = temml.renderToString(tex, { displayMode: true, xml: true })
    .replace("display=\"block\"", "class=\"hugo-math\" display=\"block\"")
    .replace("style=\"display:inline-block;\"", "")
  
    return c.json({
    title: "TraeBlain.com MathML Processor",
    math: mathml,
    tex: tex
  })
}
