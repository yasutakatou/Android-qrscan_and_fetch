import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mail:""
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <label>
            mail: 
            <input type="text" name="mail" onChange={this.handleChange} value={this.state.mail}/>
          </label>
          <br />
          <button onClick={this.handleClick}>Start QR Scan</button>
        </header>
      </div>
    )
  }

  handleChange = (event) => {
    this.setState({[event.target.mail]: event.target.value})
  }

  handleClick = (event) => {
    const mailAddress = this.state.mail
    window['cordova'].plugins.barcodeScanner.scan(
      function (result) {
          if(!result.cancelled){
            alert("URL:" + result.text + " IMEI:" + window.device.imei + " Mail:" + mailAddress);
            const url = result.text.split('=')[0];
            const tokens = result.text.split('=')[1];
            const obj = {Mail: mailAddress, Imei: window.device.imei, Token: tokens};
            const method = "POST";
            const body = JSON.stringify(obj);
            const headers = {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            };
            fetch(url, {method, headers, body}).then((res)=> res.json()).then(alert).catch(alert);
          }
      },
      function (error) {
          alert("error : " + error);
      }
    );
  }
}

export default App;
