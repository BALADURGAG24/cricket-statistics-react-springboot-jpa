import React, { Component } from 'react'

import CricinfoService from '../services/CricinfoService';




class UpdateCricinfoComponent extends Component {

    constructor(props) {

        super(props)

 

        this.state = {

            id: this.props.match.params.id,

            firstName: '',

            lastName: '',

            emailId: ''

        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);

        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);

        this.updateCricinfo = this.updateCricinfo.bind(this);

    }

 

    componentDidMount(){

        CricinfoService.getCricinfoById(this.state.id).then( (res) =>{

            let cricinfo = res.data;

            this.setState({firstName: cricinfo.firstName,

                lastName: cricinfo.lastName,

                emailId : cricinfo.emailId

            });

        });

    }




    updateCricinfo = (e) => {

        e.preventDefault();

        let cricinfo = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};

        console.log('cricinfo => ' + JSON.stringify(cricinfo));

        console.log('id => ' + JSON.stringify(this.state.id));

        CricinfoService.updateCricinfo(cricinfo, this.state.id).then( res => {

            this.props.history.push('/cricinfos');

        });

    }

   

    changeFirstNameHandler= (event) => {

        this.setState({firstName: event.target.value});

    }

 

    changeLastNameHandler= (event) => {

        this.setState({lastName: event.target.value});

    }

 

    changeEmailHandler= (event) => {

        this.setState({emailId: event.target.value});

    }




    cancel(){

        this.props.history.push('/cricinfos');

    }

 

    render() {

        return (

            <div>

                <br></br>

                   <div className = "container">

                        <div className = "row">

                            <div className = "card col-md-6 offset-md-3 offset-md-3">

                                <h3 className="text-center">Update Cricinfo</h3>

                                <div className = "card-body">

                                    <form>

                                        <div className = "form-group">

                                            <label> First Name: </label>

                                            <input placeholder="First Name" name="firstName" className="form-control"

                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>

                                        </div>

                                        <div className = "form-group">

                                            <label> Last Name: </label>

                                            <input placeholder="Last Name" name="lastName" className="form-control"

                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>

                                        </div>

                                        <div className = "form-group">

                                            <label> Email Id: </label>

                                            <input placeholder="Email Address" name="emailId" className="form-control"

                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>

                                        </div>




                                        <button className="btn btn-success" onClick={this.updateCricinfo}>Save</button>

                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                                    </form>

                                </div>

                            </div>

                        </div>




                   </div>

            </div>

        )

    }

}

 

export default UpdateCricinfoComponent