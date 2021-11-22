import './navbar.css'
import {useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import SelectBreed from '../BreedSelector'

const Navbar = () => {
    
    return(
        <div id="navbarWrapper">
            <div id="buttonsWrapper">
                <SelectBreed />
            </div>
            <div id="burgerMenuWrapper" onClick={()=>{
                document.getElementById("buttonsWrapper").style.right==="0px"?
                    document.getElementById("buttonsWrapper").style.right="-70vw":
                    document.getElementById("buttonsWrapper").style.right="0px";
            }}>
                <AiOutlineMenu size={40} color={"#9B59B6"}/>
            </div>
        </div>
    )
}

export default Navbar;