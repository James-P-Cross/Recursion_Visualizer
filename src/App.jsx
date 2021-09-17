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
      visuals: 'no visuals yet from state props',
      theCode: '',
      testSend: ''
    }

    this.sendCodeOnClick = this.sendCodeOnClick.bind(this);

  }
  
  componentDidMount() {
    fetch('/api')
      .then(res => res.json())
      .then(res => {
        console.log('this is res:', res);
        {this.setState({visuals : res})
        console.log(this.state.visuals)
      }
    })
  }
  //Post request to send code to server api file
  //Need to stringify the request
  sendCodeOnClick(code) {
    const testCodePost = 'Sent on post from App'
    fetch('/api', {
      method: 'Post',
      body: JSON.stringify({testCodePost}),
      headers: {'Content-Type': 'application/json'},
    })
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        console.log('console testing');

        this.setState({testSend: res});
        console.log(this.state.testSend);
      })
      .catch((err) => console.log('code send', err));
  }


  render() {

    return (
      <div>
      {/* <div>{this.state.visuals}</div> */}
      <h2>Recursion Visualizer</h2>
      <div>
      <form className="basecase" >Base case: <input type="text"  size="88.75"></input></form>
      </div>
      {<textarea id="textArea" name="textArea" rows="20" cols="140"> Hey, type entire recursive function here. . .  </textarea>}

      <div>
        <button className="visButton" onClick={this.sendCodeOnClick}>Start Visualizer</button>
      </div>
    <div>{this.state.testSend}</div>

    <div className="box"></div>

    {/* <Visual theCode = {this.state.theCode}/> */}

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