import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Just Add</span>
              <span>Chicken</span>
            </h1>
            <h2>Bring the heat home</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

        <footer>
          <h1>EatGoodFood</h1>
  
      </footer>
    </div>
  )
}