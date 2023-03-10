// import logo from './logo.svg';
import './App.css'; 
import { Component } from 'react';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.componet';


class App extends Component {
  constructor(){
    super();
    this.state = {
      Monster: 
      [],
      SearchFile: '',
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    // fetch('http://127.0.0.1:8000/api/user')
    .then(response => response.json())
    .then(user=>this.setState({Monster:user}));
    
  }
  render(){
    const {Monster, SearchFile} = this.state;
    const filteredMonster = Monster.filter(Monster => Monster.name.toLowerCase().includes(SearchFile.toLowerCase()))

    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder='search monster'
          handleChange={e => this.setState({SearchFile: e.target.value})}
        />
        <CardList Monster={filteredMonster} />

    </div>
    );
  }
}

export default App;
