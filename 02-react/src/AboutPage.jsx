import { useState } from "react"
import { Link } from "react-router-dom"

function About() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(prev => prev + 1)
  }

  return (
    <div className="container">
      <h1>About Our History!</h1>
      <h2>Our company is pretty cool.</h2>

      <div className="count-area">
        <p>You have clicked the button {count} times.</p>
        <button onClick={handleClick}>Click me</button>
      </div>

      <p>
        Go back to our <Link to="/">home page</Link>.
      </p>
    </div>
  )
}

export default About
