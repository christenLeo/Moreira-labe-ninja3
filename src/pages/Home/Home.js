import React from "react";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";

const Home = (props) => {
    return (
        <>
            <Header
            goToCatalogPage={props.goToCatalogPage}
            goToCadastroPage={props.goToCadastroPage}
            />
            <main>
                <img src="https://redeizee.com.br/wp-content/uploads/2021/01/Blog_Post_02-768x310.png" alt="pessoas firmando um acordo" />
                <h2>Talento certo, no momento certo!</h2>

                <h3>Procurando um Job? ou anunciando?</h3>
                <>
                <button onClick={() => {props.goToCatalogPage()}}>Contrate um job</button>
                <button goToCadastroPage={() => {props.goToCadastroPage()}}>Divulgue seu job</button>
                </>
            </main>
            <Footer/>
        </>
    );
};
export default Home;