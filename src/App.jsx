import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Test stuff</h1>
        <CodeForm/>
        <Visual/>
      </div>
    );
  }
}

class Visual extends Component {
  render() {
    return (
      <p>test32</p>
  
    );
  }
}

class CodeForm extends Component {
  render() {
    return (
      <h2>James</h2>
      // {array}
      // {<textarea id="textArea" name="textArea" rows="20" cols="50">
        
      // </textarea>}
    );
  }
}

// export default App;
render(<App />, document.querySelector('#root'));