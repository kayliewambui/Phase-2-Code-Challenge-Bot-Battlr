import React from "react";

function FilterBot({ botClass, setBotClass }) {
  function filterBotClass(event) {
    setBotClass(event.target.value);
  }

  return (
    <select
      value={botClass}
      className="form-select"
      aria-label="Default select example"
      onChange={filterBotClass}
      defaultValue={"all"}
    >
      <option value="all">All</option>
      <option value="Defender">Defender</option>
      <option value="Support">Support</option>
      <option value="Assault">Assault</option>
      <option value="Witch">Witch</option>
      <option value="Medic">Medic</option>
      <option value="Captain">Captain</option>
    </select>
  );
}

export default FilterBot;