import React from "react";
import Icon from '../../assets/img/labeninjas-Icon.png';

const Header = (props) => {
    return (
        <header>
            <>
            <img src={Icon} alt='&nbsp;Icone Labeninjas'/>
            </>

            <>
            <button onClick={() => {props.goToCatalogPage()}}>Contrate um job</button>
            <button goToCadastroPage={() => {props.goToCadastroPage()}}>Divulgue seu job</button>
            </>
        </header>
    );
};
export default Header;