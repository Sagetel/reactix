import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
  };
  handleInputChange = (event) => {
    console.log(this.state)
    this.setState({
      email: event.target.value,
    });
  };
  componentDidMount() {
    console.log('Я смонтировался')
  }
  componentDidUpdate() {
    console.log('Я обновился')
  }
  UNSAFE_componentWillUpdate() {
    console.log('Я буду обновлятсья')

  }

  render() {
    return (
      <div>
        <form action="">
          <input type="email" name="email" id="" value={this.state.email}
            onChange={this.handleInputChange} />
          <input type="button" value="" />
        </form>
      </div>
    )
  }
}
