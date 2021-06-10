import { createClient } from "contentful";
import RecipeCard from "./RecipeCard";

// First connect index pages to contentful. 

export async function getStaticProps(){
  const client = createClient( {
    // space: "j08karxmo721" ,
    // accessToken: "jljKwoluTiZsXR9iBcyiO36FmDen61YqKgWPQiot4KM",
    space: process.env.CONTENTFUL_SPACE_ID ,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    // having this token public on github is not secure. Create a file call .env.local
  } )

  const res = await client.getEntries( {content_type: 'recipe'} )

  return {
    props: {
      recipes: res.items
    }
  }
}


export default function Recipes({ recipes }) {

  return (
  
    <div>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}
    </div>
  )
}