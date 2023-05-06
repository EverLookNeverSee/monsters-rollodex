import {Component} from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {name: {firstName: "Milad", lastName: "Sadeghi DM"}, company: "Meta"};
    }
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hi, my name is {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company} ;)
            </p>
            <button onClick={() => {
                this.setState(() => {
                    return this.setState({name: {firstName: "EverLook", lastName: "NeverSee"}});
                }, () => {
                    console.log(this.state)});
            }}>
                Change the name
            </button>
          </header>
        </div>
    );
  }
}

export default App;
