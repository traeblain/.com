import all from '../public/index.json'

export const random = async () => {
  const randomPost = Math.floor(Math.random() * all.data.length)
    
  const redirect = all.data[randomPost].url

  return redirect
}