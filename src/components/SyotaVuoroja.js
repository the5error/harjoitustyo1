import React, { Component } from 'react';

class SyotaVuorot extends Component {
  constructor(props) {
    super(props);
    this.state = {paiva: "",vuoro: "", aika: "", lounas: ""}
  }
    muuta = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }


 render() {
  return (

    <form>
      <label htmlFor="paiva" style={styles.labelStyle}> Päivä </label>
      <input type ="text" name="paiva" value={this.state.paiva} onChange={ this.muuta} />
      <br />
      <label htmlFor="vuoro" style={styles.labelStyle}> Vuoro </label>
      <input type ="text" name="vuoro" value={this.state.vuoro} onChange={ this.muuta} />
      <br />
      <label htmlFor="aika" style={styles.labelStyle}> Aika </label>
      <input type ="text" name="aika" value={this.state.aika} onChange={ this.muuta} />
      <br />

    </form>
  );
  }
}


  const styles = {
    labelStyle: {
      width: "6em",
      display: "block",
      float: "left"
    }
  }

export default SyotaVuorot;
