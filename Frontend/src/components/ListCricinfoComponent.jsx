import React, { Component } from 'react'

import CricinfoService from '../services/CricinfoService'




class ListCricinfoComponent extends Component {

    constructor(props) {

        super(props)

 

        this.state = {

                cricinfos: []

        }

        this.addCricinfo = this.addCricinfo.bind(this);

        this.editCricinfo = this.editCricinfo.bind(this);

        this.deleteCricinfo = this.deleteCricinfo.bind(this);

    }

 

    deleteCricinfo(id){

        CricinfoService.deleteCricinfo(id).then( res => {

            this.setState({cricinfos: this.state.cricinfos.filter(cricinfo => cricinfo.id !== id)});

        });

    }

    viewCricinfo(id){

        this.props.history.push(`/view-cricinfo/${id}`);

    }

    editCricinfo(id){

        this.props.history.push(`/add-cricinfo/${id}`);

    }

 

    componentDidMount(){

        CricinfoService.getCricinfos().then((res) => {

            this.setState({ cricinfos: res.data});

        });

    }

 

    addCricinfo(){

        this.props.history.push('/add-cricinfo/_add');

    }

 

    render() {

        return (

            <div>

                 <h2 className="text-center">Cricinfos List</h2>

                 <div className = "row">

                    <button className="btn btn-primary" onClick={this.addCricinfo}> Add Cricinfo</button>

                 </div>

                 <br></br>

                 <div className = "row">

                        <table className = "table table-striped table-bordered">

 

                            <thead>

                                <tr>

                                    <th> Id </th>

                                    <th> PLAYER NAME </th>

                                    <th> BEST </th>

                                    <th> RUNS </th>

                                    <th> MATCHES </th>

                                    <th> AVERAGE </th>

                                    <th> Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    this.state.cricinfos.map(

                                        cricinfo =>

                                        <tr key = {cricinfo.id}>

                                             <td> { cricinfo.firstName} </td>  

                                             <td> {cricinfo.lastName}</td>

                                             <td> {cricinfo.emailId}</td>

                                             <td>

                                                 <button onClick={ () => this.editCricinfo(cricinfo.id)} className="btn btn-info">Update </button>

                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCricinfo(cricinfo.id)} className="btn btn-danger">Delete </button>

                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewCricinfo(cricinfo.id)} className="btn btn-info">View </button>

                                             </td>

                                        </tr>

                                    )

                                }

                            </tbody>

                        </table>

 

                 </div>

 

            </div>

        )

    }

}

 

export default ListCricinfoComponent