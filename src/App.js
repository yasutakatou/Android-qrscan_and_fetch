import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mail:"test@test.com"
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({mail: event.target.value})
  }

  render() {
    return (
      <div>
        mail: 
        <input type="text" name="mail" onChange={this.handleChange} value={this.state.mail}/>
        <br />
        <button onClick={this.handleClick}>Start QR Scan</button>
      </div>
    )
  }

  handleClick = (event) => {
    event.preventDefault();
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
