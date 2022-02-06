import React from "react";
import Icon from '../../assets/img/labeninjas-Icon.png';
import { Head } from './style.js'

const Header = (props) => {
    return (

        <Head>
            <img
                onClick={() => { props.goToHomePage() }}
                src={Icon}
                alt='Icone Labeninjas' />
            <div>
                <button onClick={() => { props.goToCatalogoPage() }}>Contrate um job</button>
                <button onClick={() => { props.goToCadastroPage() }}>Divulgue seu job</button>
                {
                    props.goToCarrinhoPage &&
                    <button onClick={() => { props.goToCarrinhoPage() }}>Carrinho</button>
                }
            </div>
        </Head>


    );
};
export default Header;