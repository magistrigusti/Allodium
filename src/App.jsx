import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Navbar from './components/Navbar.jsx';
import Features from './components/Features.jsx';
import Story from './components/Story.jsx';

const App = () => {

  return (
    <main className="relative min-h-screen w-sreen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story /> 
    </main>
  )
}

export default App
