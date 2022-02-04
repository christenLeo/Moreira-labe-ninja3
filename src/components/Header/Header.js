import React from "react";
import Icon from '../../assets/img/labeninjas-Icon.png';
import {Head} from './style.js'

const Header = (props) => {
    return (
        <Head>
            <img src={Icon} alt='&nbsp;Icone Labeninjas'/>

            <div>
            <button onClick={() => {props.goToCatalogPage()}}>Contrate um job</button>
            <button goToCadastroPage={() => {props.goToCadastroPage()}}>Divulgue seu job</button>
            </div>
        </Head>
    );
};
export default Header;