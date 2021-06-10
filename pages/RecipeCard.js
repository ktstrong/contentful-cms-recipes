import Link from 'next/link';

export default function RecipeCard({ recipe }) {
    const {title, slug, cookingTime, thumbnail } = recipe.fields
    console.log(recipe);
    console.log(recipe.fields.cookingTime);

    return (
        <div className="m-10" >
            <div>
                <img className="mb-2 w-80" src={thumbnail.fields.file.url} alt={"photo of "+ title} /> 

            </div>

            <div>
                <div>
                    <h3 className="ml-1 w-80 text-xl font-robot font-semibold" > { title } </h3>
                    <p> { cookingTime } mins to make </p>
                <div>
                <Link href={ '/recipes/' + slug }><a>Cook this</a></Link>

                </div>

                </div>
            
               
            </div>
        </div>
    );
}

