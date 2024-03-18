import Button from "./button"
import { Link} from 'react-router-dom'
import {links} from './data'
import { useState } from "react"
import './Landing.css'
  

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleClick = ( e:any ) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop

        window.scrollTo({
            left:0,
            top:location -120,
        })
    }
    return (
        <header>

            <img className="chatter-logo" src="./Chatter.svg" alt="logo" />
            <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div id="menu-items" className={menuOpen ? "open":""}>
            <div id="li" >
                {links.map((link)=> {
                    return(
                        <a href={link.url} key={link.id} onClick={handleClick}>{link.text} </a>
                    )
                } )}
            </div>
            <div className="loginandbtn">
                <div className="blue">
                    <Link to="/create-account" className="linklogin">
                        login
                    </Link>
                </div>

                <Link to="/create-account" className="linkSignIn">
                   <Button> Sign Up</Button> 
                </Link> 

            </div>
            </div>
            


        </header>
    )
}
export default Navbar

