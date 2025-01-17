import React, { Component } from 'react'
import CricinfoService from '../services/CricinfoService'
class ViewCricinfoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            cricinfo: {}
        }
    }
    componentDidMount(){
        CricinfoService.getCricinfoById(this.state.id).then( res => {
            this.setState({cricinfo: res.data});
        })
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Cricinfo Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Cricinfo First Name: </label>
                            <div> { this.state.cricinfo.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Cricinfo Last Name: </label>
                            <div> { this.state.cricinfo.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Cricinfo Email ID: </label>
                            <div> { this.state.cricinfo.emailId }</div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }

}

 

export default ViewCricinfoComponent