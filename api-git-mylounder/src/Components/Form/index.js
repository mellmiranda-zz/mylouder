import React from "react";

import Spinner from "../Spinner";

const Form = ({ user, loading, error, buttonAction, changeUser }) => (
  <div className="formContainer">
    <input
      type="text"
      className="userInput"
      value={user}
      placeholder="Buscar usuário"
      onChange={e => changeUser(e.target.value)}
    />
    <button className="searchButton" onClick={buttonAction}>
      {loading ? <Spinner /> : "Buscar"}
    </button>

    <p className="errorText">{error}</p>
  </div>
);

export default Form;
