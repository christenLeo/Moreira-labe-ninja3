import axios from "axios";
import React from "react";
import baseUrl from "../../constants/baseUrl";
import header from "../../constants/header";
import "./styles.css"


export default class TalentosJob extends React.Component {
    state = {
        jobsList: [],
        jobsListFiltrado: [],
        valorMaximo: "",
        valorMinimo: "",
        buscarTitulo: ""
    }
    getJobsList = async () => {
        try {
            const response = await axios.get(`${baseUrl}/jobs`, header);
            console.log(response.data.jobs);
            this.setState({ jobsList: response.data.jobs });
            this.setState({ jobsListFiltrado: response.data.jobs });
        }
        catch (err) {
            console.log(err.response)
        };
    };
    componentDidMount() {
        this.getJobsList()
    }

    onChangeValorMaximo = (event) => {
        this.setState({ valorMaximo: event.target.value })
    }

    onChangeValorMinimo = (event) => {
        this.setState({ valorMinimo: event.target.value })
    }

    onChangeBuscarTitulo = (event) => {
        this.setState({ buscarTitulo: event.target.value })
    }

    removeFiltros = () => {
        this.setState({
            buscarTitulo: "",
            valorMaximo: "",
            valorMinimo: ""
        })
        this.setState({
            jobsListFiltrado: [...this.state.jobsList]
        })
    }
    filtrar = () => {
        const newJobsFilter = this.state.jobsList.filter((job) => {
            return (!this.state.valorMaximo || job.price < this.state.valorMaximo)
                &&
                (!this.state.valorMinimo || job.price > this.state.valorMinimo)
                &&
                ((!this.state.buscarTitulo ||
                    job.title.toUpperCase().includes(this.state.buscarTitulo.toUpperCase())))
        })
        this.setState({
            jobsListFiltrado: newJobsFilter
        })
    }
    descontratar = (id) => {
        axios.post(`${baseUrl}/jobs/${id}`, {
            taken: false
        }, header).then((res) => {
            this.getJobsList()
        }).catch(() => {
            alert("Não foi possivel contratar esses serviços")
        })
    }
    render() {
        return <div>
            <nav>
                <input
                    type="number"
                    placeholder="Valor Mínimo"
                    onChange={this.onChangeValorMinimo}
                    value={this.state.valorMinimo}
                />
                <input type="number"
                    placeholder="Valor Máximo"
                    onChange={this.onChangeValorMaximo}
                    value={this.state.valorMaximo} />

                <input placeholder="Busca por Título ou descrição"
                    onChange={this.onChangeBuscarTitulo}
                    value={this.state.buscarTitulo} />


                <button onClick={this.removeFiltros}> Remover Filtros</button>
                <button onClick={this.filtrar}>Filtrar</button>
            </nav>
            <main>
                {
                    this.state.jobsListFiltrado.map((job) => {
                        return <div className="cards" key={job.id}>
                            <div>
                                <h2>{job.title}</h2>
                            </div>

                            <div>
                                <b>Descrição: {job.description}</b>
                            </div>

                            <div>
                                <b>Preço: {job.price}</b>
                            </div>

                            <div>
                                <b>Prazo: {job.dueDate}</b>
                            </div>

                            <div>
                                <b>Forma de Pagamento: {
                                    job.paymentMethods.map((metodo) => {
                                        return <span key={job.id + "-" + metodo}>
                                            {metodo}
                                        </span>
                                    })
                                }
                                </b>
                            </div>

                            <div className="botao">
                                {
                                    !job.taken ? (this.props.cart.findIndex((jobCart) => {
                                        return job.id === jobCart.id
                                    }) === -1 ?
                                        <button onClick={() => this.props.addCart(job)}>Adicionar no Carrinho</button>
                                        :
                                        <button onClick={() => this.props.removerCart(job.id)}>Remover do Carrinho</button>)
                                        :
                                        <button onClick={() => this.descontratar(job.id)}>
                                            Descontratar
                                        </button>
                                }
                            </div>
                        </div>
                    })
                }
            </main>

        </div>
    }
}