import React, { useState, useEffect } from "react";

const Entry = ({ setEntry }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entry for ${name} has been submitted`);
    let input = {
      name: name,
      desc: desc,
      phone: phone
    }
    setEntry(input);
  }
  const handleChange = {
    name: function (e) {
      setName(e.target.value);
    },
    description: function (e) {
      setDesc(e.target.value);
    },
    phoneNo: function (e) {
      setPhone(e.target.value);
    },
  }

  return (
    <div className="entry">
      Add Entry for Phonebook
      <form onSubmit={handleSubmit}>
        <div className="inputFields">
          <label>Name</label>
          <input type="text" value={name} onChange={handleChange.name} />
        </div>
        <div className="inputFields">
          <label className="inputFields">Description</label>
          <input type="text" value={desc} onChange={handleChange.description} />
        </div>
        <div className="inputFields">
          <label className="inputFields">Phone No</label>
          <input type="text" value={phone} onChange={handleChange.phoneNo} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Entry;