import React, { Component } from "react";
import Main from '../template/Main'
import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users'
const inicialState = {
    user: { name: '', email: '' },
    list: [],
    search: ''
}

export default class UserCrud extends Component {
    
    state = {...inicialState}
    completedList = []

    componentWillMount() {
        axios(baseUrl).then ( resp => {
            this.setState({list: resp.data})
            this.completedList = resp.data
        })
    }

    clear() {
        this.setState({user: inicialState.user})
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}`: `${baseUrl}`
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({user: inicialState.user, list})
                this.completedList = list
            })
    }

    getUpdatedList(user, add=true, search=false) {
        let list
        if(search)
            list = this.completedList.filter(u => 
                u.name.indexOf(this.state.search) == 0
            )
        else{
            list = this.state.list.filter(u => u.id !== user.id)
            if(add) list.unshift(user)
        }
        return list
    }

    async updateField(event, isSearch=false) {
        let list
        if(!isSearch){
            const user = {...this.state.user}
            user[event.target.name] = event.target.value
            this.setState({ user })
        } else {
            await this.setState({ search: event.target.value })
            if(event.target.value == '')
                list = this.completedList
            else
                list = this.getUpdatedList(null, false, true)
            this.setState({ list })
        }
    
    }
    
    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                            name="name" 
                            value={this.state.user.name}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o nome..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control"
                            name="email" 
                            value={this.state.user.email}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o email..."/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secudary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user) {
        this.setState({user})
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(
            () => {
                const list = this.getUpdatedList(user, false)
                this.setState({ list })
            })
         
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th >Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map( user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                        onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>

                        <button className="btn btn-danger ml-2"
                        onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                        
                    </td>
                </tr>
            )
        })
    }

    renderSearch() {
        return (
            <input type="text" 
            name="search" 
            value={this.state.search}
            onChange={e => this.updateField(e, true)}
            placeholder="Procure pelo nome..."
            className="col-12 col-md-6"/>   
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                <hr />
                {this.renderSearch()}
                {this.renderTable()}
            </Main>
        )
    }
}