import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Home() {
    const history = useHistory()
  return (
    <button onClick={() => history.push('/pizzaOrder')}>OrderPage</button>
  )
}

export default Home