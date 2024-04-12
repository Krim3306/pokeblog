import { Link } from "react-router-dom";

const Header = (() => {
    return (
        <header>
            <Link to='/'><img className="logo" src="https://www.pngall.com/wp-content/uploads/13/Pokemon-Logo-PNG-Pic.png" alt="Logo"></img></Link>
            {/* <ul>
                <li>
                    <Link to='/'>HomePage</Link>
                </li>
            </ul> */}
        </header>
        
    )
})

export default Header;