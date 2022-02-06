import React from "react";
import Logo from '../../assets/img/labeninjas-logo.png';
import {Foot} from './style.js'

const Footer = () => {
    return (
        <Foot>
            <img src={Logo} alt="logo labeninjas" />

            <div>
            <h4>Nos sigam no git-hub</h4>
            <a href="">Leo Christen</a>
            <a href="">Larissa Firmino</a>
            <a href="">Adriano Brito</a>
            <a href="">José Antônio</a>
            <a href="">Danilo Silvério</a>
            </div>
        </Foot>
    );
};
export default Footer;