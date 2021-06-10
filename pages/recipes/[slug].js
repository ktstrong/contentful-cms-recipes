import {createClient} from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
  
const client = createClient( {
  space: process.env.CONTENTFUL_SPACE_ID ,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "recipe"
})

const paths = res.items.map(item => {
  return {
    params: {slug: item.fields.slug}
  }
})

return {
  paths,
  fallback: false
  }
}

export async function getStaticProps({params}  ){
  const {items} = await client.getEntries({
    content_type: 'recipe',
    'fields.slug': params.slug
  })

    return {
    props: {recipe: items [0]}
  }
}

export default function RecipeDetails( {recipe} ) {
  const { title, cookingTime, ingredients, featuredImage, method} = recipe.fields

  return (
    <div className="mx-10">
      <div className="w-100">
        <img src={featuredImage.fields.file.url} alt="helloooo" />
      </div>

      <h1 className="text-4xl text-black capitalize m-2 mt-8 font-black" > {recipe.fields.title} </h1>
      <div  >
        <h1 className="text-xl font-semibold my-5">Ingredients: </h1>
          {ingredients.map(ing => (
      
            <ul>
              <li className="list-disc mx-6">
                {ing}
              </li>
            </ul>    
        ))}
      </div>
      <div  >
        <h1 className="text-2xl font-semibold my-5">Method: </h1>
          <div className="mx-3 mb-10 text-xl leading-9" > {documentToReactComponents(method)} </div>
      </div>
     
    </div>
    
    
  )


}