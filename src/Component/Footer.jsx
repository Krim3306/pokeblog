import { Link } from "react-router-dom";

const Footer = (() => {
    return (
        <footer>
            <Link to='/'><img className="logo" src="https://www.pngall.com/wp-content/uploads/13/Pokemon-Logo-PNG-Pic.png" alt="Logo"></img></Link>
            <p className="copyright">CopyRyght --- Regrag Karim</p>
        </footer>
    )
})

export default Footer;