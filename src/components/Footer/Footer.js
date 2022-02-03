import React from "react";
import Logo from '../../assets/img/labeninjas-logo.png';

const Footer = () => {
    return (
        <footer>
            <img src={Logo} alt="logo labeninjas" />

            <>
            <h4>sigam a gente no git-hub</h4>
            <a href="">Leo Christen</a>
            <a href="">Larissa Firmino</a>
            <a href="">Adriano Brito</a>
            <a href="">José Antônio</a>
            <a href="">Danilo Silvério</a>
            </>
        </footer>
    );
};
export default Footer;