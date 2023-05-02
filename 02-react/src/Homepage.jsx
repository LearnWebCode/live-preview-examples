import { useState } from "react"
import { Link } from "react-router-dom"

function Homepage() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(prev => prev + 1)
  }

  return (
    <div className="container">
      <h1>Welcome!</h1>
      <h2>We think you&rsquo;ll like it here.</h2>

      <div className="count-area">
        <p>You have clicked the button {count} times.</p>
        <button onClick={handleClick}>Click me</button>
      </div>

      <div className="photos">
        <img src="cat.jpg" alt="A black and white cat in front of a green background." />
        <img src="koala.jpg" alt="A cute koala holding ont a tree." />
        <img src="dog.jpg" alt="A black, white and brown dog in front of a pink background." />
        <img src="panda.jpg" alt="A panda in the forest." />
      </div>

      <p>
        Visit our <Link to="/about">about page</Link>.
      </p>
    </div>
  )
}

export default Homepage
