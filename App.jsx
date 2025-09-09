import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { X, Play, Star, Users, Shield, Smartphone } from 'lucide-react'
import './App.css'

// Import movie poster images
import netflixMovies from './assets/netflix-movies.jpg'
import projectPower from './assets/project-power.jpg'
import romanticComedy from './assets/romantic-comedy.jpg'
import netflixPoster from './assets/netflix-poster.jpg'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleWatchNow = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    // Simulate account creation
    alert('Free account created successfully! Welcome to Netflix!')
    setShowModal(false)
    setEmail('')
    setPassword('')
  }

  const contentItems = [
    {
      id: 1,
      title: "Action Movies",
      image: projectPower,
      description: "High-octane thrills and adventures"
    },
    {
      id: 2,
      title: "Romantic Comedies",
      image: romanticComedy,
      description: "Feel-good stories and laughs"
    },
    {
      id: 3,
      title: "Netflix Originals",
      image: netflixPoster,
      description: "Exclusive content you can't find anywhere else"
    },
    {
      id: 4,
      title: "Popular Movies",
      image: netflixMovies,
      description: "Trending films everyone's talking about"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold text-primary">
            NETFLIX
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#" className="hover:text-primary transition-colors">Movies</a>
            <a href="#" className="hover:text-primary transition-colors">TV Shows</a>
            <a href="#" className="hover:text-primary transition-colors">My List</a>
          </nav>
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="netflix-hero-bg min-h-screen flex items-center justify-center relative">
        <div className="netflix-gradient absolute inset-0"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto fade-in-up">
            <h1 className="hero-title mb-6">
              Watch Thousands of Movies & Shows for Free
            </h1>
            <p className="hero-subtitle mb-8 text-muted-foreground">
              Create your free account today. No credit card required. Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="netflix-button pulse-red text-lg px-8 py-4"
                onClick={handleWatchNow}
              >
                <Play className="mr-2 h-5 w-5" />
                Start Watching Free
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Preview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Content Categories
          </h2>
          <div className="content-grid">
            {contentItems.map((item) => (
              <Card key={item.id} className="netflix-card group cursor-pointer" onClick={handleWatchNow}>
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="netflix-button">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Now
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Free Account?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Content</h3>
              <p className="text-muted-foreground">Access to thousands of movies and TV shows</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Watch Anywhere</h3>
              <p className="text-muted-foreground">Stream on your phone, tablet, laptop, and TV</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Commitment</h3>
              <p className="text-muted-foreground">Cancel anytime. No contracts or hidden fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">NETFLIX</h4>
              <p className="text-muted-foreground">
                The world's leading streaming entertainment service.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Use</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 Netflix-Style Landing Page. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Content Locker Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay">
          <div className="modal-content rounded-lg p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-primary mb-2">NETFLIX</div>
              <h2 className="text-2xl font-bold mb-2">Create Your Free Account</h2>
              <p className="text-muted-foreground">
                Join millions of users watching amazing content for free
              </p>
            </div>

            <form onSubmit={handleSignUp} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="netflix-input w-full"
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="netflix-input w-full"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="netflix-button w-full text-lg py-3"
              >
                Create Free Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                ✓ No credit card required<br />
                ✓ Cancel anytime<br />
                ✓ Thousands of movies and shows
              </p>
              <p className="text-xs text-muted-foreground">
                By creating an account, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

