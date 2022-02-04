import React from "react";
import Icon from '../../assets/img/labeninjas-Icon.png';
import {Head} from './style.js'

const Header = (props) => {
    return (
        <Header>
            <img src={Icon} alt='&nbsp;Icone Labeninjas'/>
            <button onClick={() => {props.goToCatalogPage()}}>Contrate um job</button>
            <button onClick={() => {props.goToCadastroPage()}}>Divulgue seu job</button>
            
        </Head>

  
    );
};
export default Header;