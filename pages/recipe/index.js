import Link from 'next/link';


const RecipeIndex = () => {
  return <section className="text-center mt-5">
    <article style={{ float: 'right' }}>
      <Link href="/recipe/add">
        <button className="btn btn-primary" style={{ width: 150 }}>Add Recipe</button>
      </Link>
    </article>
  </section>
}

export default RecipeIndex;