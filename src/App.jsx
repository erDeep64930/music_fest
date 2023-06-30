import Headliner from "./components/Headliner"
import Hero from "./components/Hero"
import LineUp from "./components/LineUp"
import Navbar from "./components/Navbar"
import Ticket from "./components/Ticket"


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Headliner />
      <LineUp />
      <Ticket />
    </div>
  )
}

export default App