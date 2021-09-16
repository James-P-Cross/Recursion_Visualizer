import React, { Component } from 'react';
import { render } from 'react-dom';

//Need to define/get data from parent component and assign to child componenet props attribute

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Visuals : 'none'
    };
  }
    render() {
      return (
        <div>
        <h1>Recursion Here</h1>
        <CodeForm/>
        <Visual/>
      </div>
      )
    }
}

class Visual extends Component {
  //must set state in the top componant AKA the stateful component



  render() {
    return (
      <p>test332</p>
  
    );
  }
}

class CodeForm extends Component {
  constructor(props) {
    super(props);

  }
  
  // componentDidMount() {
  //   fetch('/api')
  //     .then(res => res.json())
  //     .then(res => {this.setState.Visuals = res})
  // }
///////
  ///test get request to api
  submitCodeReq(code) {
    fetch('./api')
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        this.setState({Visuals: 'some'});
        // console.log('code sent success');
        // console.log(res);
      })
      .catch((err) => console.log('code send', err));
  }

  //Post request to send code to server api file
  //Need to stringify the request
  // submitCodeReq(code) {
  //   fetch('/api', {
  //     method: 'Post',
  //     body: JSON.stringify({code}),
  //     headers: {'Content-Type': 'application/json'},
  //   })
  //     .then(res => res.json())
  //     .then((res) => {
  //       this.setState({Visuals: 'some'});
  //       // console.log('code sent success');
  //       // console.log(res);
  //     })
  //     .catch((err) => console.log('code send', err));
  // }

  //Do I need a component did mount???


  render() {
    return (
      <div>
      <p>{this.props.Visuals}</p>
      <h2>James</h2>
        <button type="button" className="submitButton" onClick={this.submitCode}>SubmitReact</button>

      
      
    {<textarea id="textArea" name="textArea" rows="20" cols="50"> </textarea>}
    </div>
    );
  }
}


export default App;
// render(<App />, document.querySelector('#root'));