import React from "react";
import "./styles.css"


export default class TalentosJob extends React.Component{

    render(){
        return <div>
            <header>
                <h1>LabeNinjas</h1>
                <div>
                <button>Home</button>
                <button>Carrinho</button>
                </div>
            </header>
            <nav>
                <input placeholder="Valor Mínimo"/>
                <input placeholder="Valor Máximo"/>
                <input placeholder="Busca por Título ou descrição"/>
                <input placeholder="Sem Ordenação"/>
            </nav>
            <main>
              <div class="cards">
            <div> 
                <b>esdf</b>
            </div>
            <div> 
                <b>Preço:</b>
            </div>
            <div> 
                <b>Prazo:</b>
            </div>
            <div class="botao"> 
                <button><b>Ver detalhes</b></button>
                <button><b>Adicionar no Carrinho</b></button>
            </div>
            </div>
            </main>

        </div>
    }
}