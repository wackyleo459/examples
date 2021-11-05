import React from 'react';
import ReactDOM from 'react-dom';
import { phone_book as canister } from '../../declarations';
import Entry from './components/Entry.jsx';

class PhoneBook extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lookupName: '',
      found: '',
      result: {
        name: '',
        desc: '',
        phone: '',
      },
    }
    this.setEntry = this.setEntry.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.lookupName = this.lookupName.bind(this);
  };

  setEntry(input) {
    canister.insert(input.name, { desc: input.desc, phone: input.phone });
  }

  handleChange(e) {
    this.setState({
      lookupName: e.target.value,
    })
  }

  lookupName() {
    canister.lookup(this.state.lookupName).then(opt_entry => {
      let entry = opt_entry.length > 0 ? opt_entry[0] : null;
      if (entry === null || entry === undefined) {
        this.setState({
          found: false,
        });
      } else {
        this.setState({
          found: true,
          result: {
            name: this.state.lookupName,
            desc: entry.desc,
            phone: entry.phone,
          }
        })
      }
    })
  }

  render() {

    return (
      <div className="phonebook">
        <Entry setEntry={this.setEntry} />

        <div className="display">
          Lookup info by Name
          <input type="text" onChange={this.handleChange} />
          <button onClick={this.lookupName}>
            Lookup
          </button>

          <div id="result">
            {(!!this.state.found === true) ?
              (
                <div>
                  <li>Name: {this.state.result.name}</li>
                  <li>Description: {this.state.result.desc}</li>
                  <li>Phone Number: {this.state.result.phone}</li>
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
