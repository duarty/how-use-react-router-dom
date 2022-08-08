import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Home = () => {

    const params = useParams()
    
  return (
    <div className="home__container">
        
            <h1>{params.id}, seja bem vindo!</h1>
        
        <Link to={"/"}>Voltar</Link>
    </div>
  )
}

export default Home