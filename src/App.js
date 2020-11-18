import React, {Component} from 'react';

const Header = () => (
  <div className="header grid">
      <h1 className="title">Jiffy Lube</h1>
  </div>
)

class App extends Component {
  render () {
    return (
      <div className="page">
        <Header/>
        <div className='search grid'>
          {/*Where the gif stack goes */}
          <input className='input grid-item' placeholder='type something here'
          onChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default App;