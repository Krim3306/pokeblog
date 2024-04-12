import Footer from "../Component/Footer";
import Header from "../Component/Header"
import ListPokemons from "../Component/ListPokemons"
import RandomTeamPage from "./RandomTeamPage";
import SearchByNamePage from "./SearchByNamePage";

const HomePage = (() => {
    
    return (
        <>
            <Header />
            <SearchByNamePage />
            <RandomTeamPage />
            <ListPokemons />
            <Footer />
        </>
    )
})

export default HomePage;