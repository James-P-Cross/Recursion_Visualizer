import React, { Component } from 'react';
import { render } from 'react-dom';

//Need to define/get data from parent component and assign to child componenet props attribute
//component ideally should only do one thing. . .

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   Visuals : 'none and more text from state'
    // };

  }
    render() {
      return (
        <div>
        {/* <h1>Recursion Here</h1> */}
        <CodeForm/>
        {/* <Visual/> */}
        <div>
        {/* <CodeForm visualProp = {this.state.Visuals}/> */}
        </div>
      </div>
      )
    }
}

class CodeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Visuals: 'no visuals yet',
      theCode: 'lots of code in here'
    }

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
    const vis = this.state.Visuals;
    return (
      <div>
      <div>{vis}</div>
      <h2>Recursion Visualizer</h2>
      {<textarea id="textArea" name="textArea" rows="20" cols="100"> Type recursive function here. . .  </textarea>}
      <div>
        <button type="button" className="submitButton" onClick={this.submitCode}>Start Visualizer</button>
      </div>
    <div className="box"></div>
    <Visual theCode = {this.state.theCode}/>

    </div>
    );
  }
}

class Visual extends Component {
  //must set state in the top componant AKA the stateful component
  // constructor(props) {
  //   super();
  //   this.state = {
  //     theCode : this.props.theCode
  //   }
  // }



  render() {
    const someCode = this.props.theCode;

    return (
      <>
      <div>{someCode}</div>

      <p>This text is from Visual component</p>
  </>
    );
  }
}


export default App;
// render(<App />, document.querySelector('#root'));