import React, { Component } from 'react'

import CricinfoService from '../services/CricinfoService';

 

class CreateCricinfoComponent extends Component {

    constructor(props) {

        super(props)

 

        this.state = {

            // step 2

            id: this.props.match.params.id
            

        }

        this.changePlayerNameHandler = this.changePlayerNameHandler.bind(this);

        this.changeBestHandler = this.changeBestHandler.bind(this);

        this.changeRunsHandler = this.changeRunsHandler.bind(this);

        this.changeAverageHandler = this.changeAverageHandler.bind(this);

        this.changeMatchesHandler = this.changeMatchesHandler.bind(this);

        this.saveOrUpdateCricinfo = this.saveOrUpdateCricinfo.bind(this);

    }

 

    // step 3

    componentDidMount(){

 

        // step 4

        if(this.state.id === '_add'){

            return

        }else{

            CricinfoService.getCricinfoById(this.state.id).then( (res) =>{

                let cricinfo = res.data;

                this.setState({player_name: cricinfo.player_name,

                    Best: cricinfo.Best,

                    Runs : cricinfo.Runs,

                    Matches : cricinfo.Matches,

                    Average : cricinfo.Average

                });

            });

        }        

    }

    saveOrUpdateCricinfo = (e) => {

        e.preventDefault();

        let cricinfo = {player_name: this.state.player_name,

                    Best: this.state.Best,

                    Runs : this.state.Runs,

                    Matches : this.state.Matches,

                    Average : this.state.Average};

        console.log('cricinfo => ' + JSON.stringify(cricinfo));

 

        // step 5

        if(this.state.id === '_add'){

            CricinfoService.createCricinfo(cricinfo).then(res =>{

                this.props.history.push('/cricinfos');

            });

        }else{

            CricinfoService.updateCricinfo(cricinfo, this.state.id).then( res => {

                this.props.history.push('/cricinfos');

            });

        }

    }

   

    changePlayerNameHandler= (event) => {

        this.setState({player_name: event.target.value});

    }

 

    changeBestHandler= (event) => {

        this.setState({Best: event.target.value});

    }

 

    changeRunsHandler= (event) => {

        this.setState({Runs: event.target.value});

    }

    changeMatchesHandler= (event) => {

        this.setState({Matches: event.target.value});

    }

    changeAverageHandler= (event) => {

        this.setState({Average: event.target.value});

    }

 

    cancel(){

        this.props.history.push('/cricinfos');

    }

 

    getTitle(){

        if(this.state.id === '_add'){

            return <h3 className="text-center">Add Cricinfo</h3>

        }else{

            return <h3 className="text-center">Update Cricinfo</h3>

        }

    }

    render() {

        return (

            <div>

                <br></br>

                   <div className = "container">

                        <div className = "row">

                            <div className = "card col-md-6 offset-md-3 offset-md-3">

                                {

                                    this.getTitle()

                                }

                                <div className = "card-body">

                                    <form>

                                        <div className = "form-group">

                                            <label> Player Name: </label>

                                            <input placeholder="player name" name="player_name" className="form-control"

                                                value={this.state.player_name} onChange={this.changePlayerNameHandler}/>

                                        </div>

                                        <div className = "form-group">

                                            <label> Best: </label>

                                            <input placeholder="Best" name="Best" className="form-control"

                                                value={this.state.Best} onChange={this.changeBestHandler}/>

                                        </div>

                                        <div className = "form-group">

                                            <label> Runs: </label>

                                            <input placeholder="Runs" name="Runs" className="form-control"

                                                value={this.state.Runs} onChange={this.changeRunsHandler}/>

                                        </div>


                                        <div className = "form-group">

                                            <label> Matches: </label>

                                            <input placeholder="Matches" name="Matches" className="form-control"

                                                value={this.state.Matches} onChange={this.changeMatchesHandler}/>

                                        </div>


                                        <div className = "form-group">

                                            <label> Average: </label>

                                            <input placeholder="Average" name="Average" className="form-control"

                                                value={this.state.Average} onChange={this.changeAverageHandler}/>

                                        </div>


                                        <button className="btn btn-success" onClick={this.saveOrUpdateCricinfo}>Save</button>

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

 

export default CreateCricinfoComponent