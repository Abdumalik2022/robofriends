import React, {Component} from "react";
import './App.css';
import CardList from "./Components/CardList";
import SearchBox from "./Components/SearchBox";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({robots: users})
            })
    }

    onInputChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        return !this.state.robots.length ?
            <h1 style={{ color: "lightblue", fontSize:'50px', fontFamily: 'Algerian'}}>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1' style={{ color: "lightblue", fontSize:'50px', fontFamily: 'Algerian'}}>RoboFriends</h1>
                    <SearchBox search={this.onInputChange}/>
                    <CardList robots={filteredRobots} />
                </div>
            );
    }
}

export default App;
