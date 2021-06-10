import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="bg-offwhite min-h-screen flex flex-col">
      <header className="text-center mt-10 mb-5" >
        <Link href="/">
          <a className="no-underline font-black uppercase inline-block" >
            <h1>
              <span className="text-5xl text-black leading-3 ml-5">Just Add</span>
              <br></br>
              <span className="text-6xl text-red leading-3 ml-8">+</span>
              <br></br>
              <span className="text-8xl text-black leading-10 z-0">Chicken</span>
            </h1>
            <h2 className="text-2xl text-red">Bring the heat home</h2>
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