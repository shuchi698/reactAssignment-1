import React from 'react';
import './App.css';
import Head from './components/Head';
import ComponentFun from './components/ComponentFun';
import Component from './components/Component';


class App extends React.Component{

  state={
    showFunc:false,
    showClass:false,
  }

  handleFuncClick = () => {
    this.setState({showFunc: !this.state.showFunc})
  }

  handleClassClick = () => {
    this.setState({showClass: !this.state.showClass})
  }

  render(){
    return (
      <div className="App">
        <Title />
        <div className='header-box'>
          <button className='header' onClick={this.handleFuncClick}><div>To see styling in functional components</div></button>
          <button className='header header2' onClick={this.handleClassClick}><div>To see styling in class components</div></button>
        </div>
        <div className='component-box'>
        {this.state.showFunc ? <ComponentFun />: null}
        {this.state.showClass ? <Component />: null}
        </div>
      </div>
    );
  }
}

export default App;
