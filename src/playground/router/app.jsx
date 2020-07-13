import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import job from './job.jpg'

function Home(){
    return(
        <div>
            <h1>You're Home</h1>
            <img src={job} alt='meme' width={300} height={300} /> 
        </div>
    )
}

function About(){
    return(
        <div>
            <h1>About page</h1>
        </div>
    )
}

function NotFound(){
    return(
        <div>
            <h1>Page Not Found.</h1>
            <Link to='/'>Click here to go home page</Link>
        </div>
    )
}

function App(){
    return (
        <Router>
            <h1>Welcome to my world</h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route path='/' exact component ={Home} />
                <Route path='/about' component= {About} />
                <Route path='*' component ={NotFound} />
            </Switch>
        </Router>
    )
}

export default App