import React, {Component} from 'react';

const Header = () => (
  <div className="header grid">
      <h1 className="title">Jiffy Lube</h1>
  </div>
)

const handleChange = event => {
  // same as…
  // const value = event.target.value
  const {value} = event.target
  // event.key and event.keyCode are empty with onChange
}

const handleKeyPress = event => {
  const {value} = event.target
  // value gives us the previous updated value
  // which is why we need to use onChange
  if (event.key === 'Enter') {
    alert('you pressed enter!')
  }
}

const Search = () => (
  <div className="search grid">
    <input
      className="input grid-item"
      placeholder="Type something"
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  </div>
)

class App extends Component {
  render () {
    return (
      <div className="page">
        <Header/>
        <Search/>
      </div>
    );
  }
}

export default App;