
import Image from "../assets/Spidey_1.png"
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert" className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
      <h2 className="text-lg font-bold mb-2">Oops! Something went wrong</h2>
      <p className="mb-4">Error: {error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function Header() {
  return (
    <header className="bg-red-600 text-white body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Spider-Man Comics</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="#" className="mr-5 hover:text-gray-900">Home</Link>
          <Link href="#" className="mr-5 hover:text-gray-900">Comics</Link>
          <Link href="#" className="mr-5 hover:text-gray-900">Characters</Link>
          <Link href="#" className="mr-5 hover:text-gray-900">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-5xl mb-4 font-medium text-red-600 stroke-black stroke-2" style={{ WebkitTextStroke: '2px black' }}>
            AMAZING
            <br className="hidden lg:inline-block" />
            SPIDER-MAN
          </h1>
          <p className="mb-8 leading-relaxed text-2xl font-bold">Swing into action with your friendly neighborhood Spider-Man! Join now for exclusive comics, art, and more!</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg shadow-lg transform hover:scale-105 transition duration-300">Join the Web</button>
            <button variant="outline" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg shadow-lg transform hover:scale-105 transition duration-300">Learn More</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
          <image
            className="object-cover object-center rounded transform hover:scale-105 transition duration-300"
            alt="Spider-Man"
            src={Image}
            width={720}
            height={600}
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="text-6xl font-bold text-yellow-400 transform -rotate-12" style={{ WebkitTextStroke: '2px red' }}>POW!</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section className="text-gray-600 body-font bg-yellow-50">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2 className="sm:text-5xl text-4xl font-medium title-font text-red-600 mb-4" style={{ WebkitTextStroke: '1px black' }}>Spider-Powers Unleashed!</h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s text-xl">Discover the amazing abilities that make Spider-Man the most spectacular superhero!</p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0 shadow-lg">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">Web-Slinging</h2>
              <p className="leading-relaxed text-base text-lg">Swing through the city skyline with Spidey's iconic web-shooters! Defy gravity and reach new heights!</p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0 shadow-lg">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">Spider-Sense</h2>
              <p className="leading-relaxed text-base text-lg">Danger? Not on Spidey's watch! Experience heightened awareness with his unique spider-sense!</p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0 shadow-lg">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">Super Strength</h2>
              <p className="leading-relaxed text-base text-lg">Witness incredible feats of strength as Spidey lifts cars and battles supervillains with ease!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulating an API call that might throw an error
    if (Math.random() < 0.5) {
      setError(new Error('Failed to subscribe. Please try again.'))
    } else {
      setEmail('')
      alert('Successfully subscribed!')
    }
  }

  return (
    <section className="text-gray-600 body-font relative web-bg">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto bg-white p-8 rounded-lg shadow-xl">
          <h1 className="flex-grow sm:pr-16 text-3xl font-medium title-font text-gray-900">Ready to join the Spider-Verse? Sign up for our newsletter!</h1>
          <form onSubmit={handleSubmit} className="flex w-full sm:w-auto mt-4 sm:mt-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow w-full bg-gray-100 rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <button type="submit" className="flex-shrink-0 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg ml-2 shadow-lg transform hover:scale-105 transition duration-300">Subscribe</button>
          </form>
          {error && <p className="text-red-500 mt-2">{error.message}</p>}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-24">
          <path d="M1200 120L0 16.48V0h1200v120z" className="fill-current text-red-600 opacity-25"></path>
        </svg>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-gray-100">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Spider-Man Comics</span>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Spider-Man Comics —
          <a href="https://twitter.com/spideycomics" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@spideycomics</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500 cursor-pointer hover:text-red-600">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500 cursor-pointer hover:text-red-600">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0  20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500 cursor-pointer hover:text-red-600">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  )
}

export default function Spiderman() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulating an asynchronous operation
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoaded) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="flex flex-col min-h-screen bg-blue-100 font-comic-sans">
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
          
          .font-comic-sans {
            font-family: 'Bangers', cursive;
          }
          
          .web-bg {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          }
        `}</style>

        <Header />

        <main className="flex-grow web-bg">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <HeroSection />
          </ErrorBoundary>

          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <FeaturesSection />
          </ErrorBoundary>

          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <NewsletterSection />
          </ErrorBoundary>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  )
}