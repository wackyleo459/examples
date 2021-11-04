import React, { useState, useEffect } from "react";

const Entry = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entry for ${name} has been submitted`);
  }
  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div className="entry">
      Add Entry for Phonebook
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <label>
          Description
          <input type="text" value={desc} onChange={handleChange} />
        </label>
        <label>
          <input type="text" value={phone} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Entry;