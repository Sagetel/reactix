import React, { Component } from 'react'
import NavBar from './navBar'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      includesReact: false,
    }
    this.navItems = ['Главная страница', 'личный кабинет', 'Войти', 'Выйти']
    this.myRef = React.createRef();
  };
  handleInputChange = (event) => {
    const newValue = event.target.value
    if (newValue.search('реакт') !== -1) {
      this.setState({
        includesReact: true,
      });
    }
    this.setState({
      email: newValue,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };
  

  // componentDidMount() {
  //   console.log('Я смонтировался')
  // }
  // componentDidUpdate() {
  //   console.log('Я обновился')
  // }
  // UNSAFE_componentWillUpdate() {
  //   console.log('Я буду обновлятсья')
  // }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input type="email" name="email" value={this.state.email}
            onChange={this.handleInputChange}
            ref={this.myRef} />
          <button type="submit" disabled={this.state.includesReact}>Отправить</button>
          <button type="button" onClick={() => { this.myRef.current.focus(); }}>Фокус</button>
        </form>
        <NavBar items={this.navItems}/>
      </div>
    )
  }
}
