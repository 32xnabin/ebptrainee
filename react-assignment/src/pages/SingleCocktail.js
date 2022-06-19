import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
// const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)

  const fetchCocktail = async () => {
    setLoading(true)
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      const data = await response.json()
      console.log(data)

      if (data.drinks) {
        const { strDrink: name, strDrinkThumb: image, strAlcoholic: info, strCategory: category, strGlass: glass, strInstructions: instructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4 } = data.drinks[0]
        const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4]
        const newCocktail = { name, info, image, category, glass, ingredients, instructions }
        setCocktail(newCocktail)
      } else {
        setCocktail(null)
      }
      setLoading(false)
      return data
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  React.useEffect(() => {
    fetchCocktail()
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (!cocktail) {
    return <h2 className='section-title'>No cocktail to display</h2>
  }
  const { name, info, image, category, glass, ingredients, instructions } = cocktail
  return (
    <section className='section-title'>
      <h2>{name}</h2>
    </section>
  )
}

export default SingleCocktail
