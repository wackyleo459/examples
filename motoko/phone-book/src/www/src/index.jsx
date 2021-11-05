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
      lookupName: '',
      lookupDesc: '',
      lookupPhone: '',
    }
    this.setEntry = this.setEntry.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.lookupName = this.lookupName.bind(this);
  };

  setEntry(input) {
    this.setState({
      name: input.name,
      desc: input.desc,
      phone: input.phone,
    });

    canister.insert(input.name, { desc: input.desc, phone: input.phone });
  }

  handleChange(e) {
    this.setState({
      lookupName: e.target.value,
    })
  }

  lookupName() {
    canister.lookup(this.state.lookupName).then(opt_entry => {
      console.log('here is the info after lookup');
      console.log(opt_entry);
      let entry = opt_entry.length > 0 ? opt_entry[0] : null;
      if (entry === null || entry === undefined) {
        entry = {
          desc: "",
          phone: "",
        };
      }
      this.setState({
        lookupDesc: entry.desc,
        lookupPhone: entry.phone,
      })
    })
  }

  render() {

    return (
      <div className="phonebook">
        <Entry setEntry={this.setEntry} />
        <div className="display">
          Lookup info by Name
          <input type="text" value={this.state.lookupName} onChange={this.handleChange} />
          <button onClick={this.lookupName}>
            Lookup
          </button>
          <div id="result">
            {(!!this.state.lookupDesc === true) || (!!this.state.lookupPhone === true) ?
              (
                <div>
                  <li>Name: {this.state.name}</li>
                  <li>Description: {this.state.desc}</li>
                  <li>Phone Number: {this.state.phone}</li>
                </div>
              )
              : (
                <div>no information found</div>
              )
            }
          </div>

        </div>
      </div>
    )
  }
}

ReactDOM.render(<PhoneBook />, document.getElementById('app'));
