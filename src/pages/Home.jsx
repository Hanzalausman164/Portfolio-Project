import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"

export const Home = () => {
  return (
    <div>
      {/* Theme Toggle */}
        <ThemeToggle />
      {/*Background Effect*/}
        <StarBackground />
      {/*Navbar*/}
        <Navbar />

    </div>
  )
}