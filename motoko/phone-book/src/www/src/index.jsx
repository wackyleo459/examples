import React from 'react';
import ReactDOM from 'react-dom';
import { phone_book as canister } from '../../declarations';
import Entry from './components/Entry.jsx';

class PhoneBook extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      desc: '',
      phone: '',
    };
  }
  render() {
    return (
      <div className="phonebook">
        <Entry />
      </div>
    )

  }

}

ReactDOM.render(<PhoneBook />, document.getElementById('app'));
