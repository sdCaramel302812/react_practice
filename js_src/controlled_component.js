import React from 'react';
import './index.css';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        intro: ''
      };
    }
  
    handleSubmit(e) {
      alert(this.state.name);
      alert(this.state.intro);
      e.preventDefault();
    }
  
    handleInputChange(e) {
      this.setState({name: e.target.value});
    }
  
    handleTextAreaChange(e) {
      this.setState({intro: e.target.value});
    }
  
    render() {
      return (
        <form onSubmit={() => this.handleSubmit()}>
          <label>
            Name:
            <input type="text" onChange={this.handleInputChange.bind(this)}/>
            Introduction:
            <textarea type="text" onChange={this.handleTextAreaChange.bind(this)}/>
          </label>
          <input type="submit" name="submit"/>
        </form>
      );
    }
  }
  
  class SelectForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'lime'
      }
  
      this.onSelectChange = this.onSelectChange.bind(this);
    }
  
    onSelectChange(e) {
      this.setState({value: e.target.value});
    }
  
    render() {
      // use multiple={true} to become multiple select form
      return (
        <form>
          <select value={this.state.value} onChange={this.onSelectChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mongo">Mongo</option>
          </select>
        </form>
      );
    }
  }
  
  class MultipleInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        checked: false,
        num: 0
      }
      this.onChange = this.onChange.bind(this);
    }
  
    onChange(e) {
      const target = e.target;
      const name = target.name;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({[name]: value});
      console.log(value);
    }
  
    render() {
      return (
        <form>
          Input 1:
          <input 
            name="checked"
            type="checkbox"
            value={this.state.checked}
            onChange={this.onChange}
          />
          Input 2:
          <input 
            name="num"
            type="number"
            value={this.state.num}
            onChange={this.onChange}
          />
        </form>
      );
    }
  }