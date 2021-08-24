import React, {Component} from 'react';
import './App.css';
import TOC from './components/TOC'
import Subject from './components/Subject'
import Content from './components/Content'



class App extends Component{
  render(){
    return (
      <div className="App">
        <Subject title="web" sub="world wide web"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
