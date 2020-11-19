import React, {Component} from 'react';

const Header = () => (
  <div className="header grid">
      <h1 className="title">Jiffy Lube</h1>
  </div>
)

const handleChange = event => {
  //create react app can write methods as arrow functions
  //meaning no constructor and bind
  const {value} = event.target
  // same as…
  // const value = event.target.value
  
  // value allows us to see the value of the typing, 
  // target is element, value is the input

  // event.key and event.keyCode are empty with onChange
  console.log(value);
  if (value.length > 2) {
    console.log('This is a valid search term.');
  }
}

// where there are 2 or more characters and press enter
// run a search
const handleKeyPress = event => {
  const {value} = event.target
  // value gives us the previous updated value
  // which is why we need to use onChange
  if (value.length > 2 && event.key === 'Enter') {
    alert(`search for ${value}`)
  }
}

const Search = () => (
  <div className="search grid">
    <input
      className="input grid-item"
      placeholder="Type something"
      // here we are running functions every time it changes
      // react convention, events are right on the component

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