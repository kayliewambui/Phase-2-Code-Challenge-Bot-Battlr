import React, { useState, useEffect } from "react";

function YourBotArmy() {
  const [items, setItems] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4001/bots")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const sortedDamage = items.sort((a, b) => (a.damage > b.damage ? -1 : 1));

  function renderYourArmy(id) {
    const item = items.find((item) => item.id === id);
    const favorite = army.find((item) => item.id === id);
    favorite ? alert("existing") : setArmy([...army, item]);
    console.log("helo");
  }

  function handleDelete(id) {
    const filteredArmy = army.filter((item) => item.id !== id);
    setArmy(filteredArmy);
  }

  function deleteBot(id) {
    fetch(`http://localhost:4001/bots/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => document.location.reload());
  }

  return (
    <div>
      <div className="row" style={{ gap: "3%" }}>
        <h1> Your Favorite Bot Army</h1>

        {army.map((armies) => {
          return (
            <div className="col-2 mb-4">
              <div
                key={armies.name}
                className="row no-gutters"
                style={{ width: "100%" }}
              >
                <div className="row">
                  <div className="card p-0 m-1 border border-primary shadow p-3 mb-5 bg-body rounded">
                    <div className="col md-3 ">
                      <img
                        src={armies.avatar_url}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="text-primary">{armies.name}</h5>
                      <p className="card-text">{armies.catchphrase}</p>
                      <h5 className="card-text-sm">
                        Bot Class:
                        <span className="text-primary">
                          {" "}
                          {armies.bot_class}
                        </span>
                      </h5>
                      <div
                        className="ps-10"
                        style={{
                          display: "flex",
                          // padding_right: "20px",
                          margin: "20px",
                        }}
                      >
                        <p
                          className="card-text-sm"
                          style={{
                            border: "10px",
                            border_radius: "5px",
                            padding: "10px",
                          }}
                        >
                          <span className="text-danger">
                            <i class="fa-solid fa-heart-pulse"></i>
                          </span>
                          {armies.health}
                        </p>
                        <p
                          className="card-text-sm"
                          style={{
                            border: "10px",
                            border_radius: "5px",
                            padding: "10px",
                          }}
                        >
                          <span className="text-danger">
                            <i class="fa-solid fa-shield"></i>
                          </span>
                          {armies.armor}{" "}
                        </p>
                        <p
                          className="card-text-sm"
                          style={{
                            border: "10px",
                            border_radius: "5px",
                            borderColor: "red",
                            padding: "10px",
                          }}
                        >
                          {" "}
                          <span className="text-danger">
                            <i class="fa-solid fa-bolt-lightning"></i>
                          </span>{" "}
                          {armies.damage}{" "}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(armies.id)}
                      className="btn btn-primary"
                    >
                      Enlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="row" style={{ gap: "3%" }}>
        <h1> Choose Your Favorite Bot Army</h1>
        {sortedDamage.map((bot) => {
          return (
            <div className="col-2 mb-4">
              <div
                key={bot.name}
                className="row no-gutters"
                style={{ width: "18rem;" }}
              >
                <div className="row">
                  <div className="card p-0 m-1 border border-primary shadow p-3 mb-5 bg-body rounded">
                    <div
                      onClick={() => renderYourArmy(bot.id)}
                      className="col md-3"
                    >
                      <img
                        src={bot.avatar_url}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="text-primary">{bot.name}</h5>
                      <p className="card-text-sm">{bot.catchphrase}</p>
                      <h5 className="card-text-sm">
                        Bot Class:
                        <span className="text-primary"> {bot.bot_class}</span>
                      </h5>

                      <div
                        className="ps-10"
                        style={{
                          display: "flex",
                          // padding_right: "20px",
                          margin: "20px",
                        }}
                      >
                        <p
                          className="card-text-sm"
                          style={{
                            border: "10px",
                            border_radius: "5px",
                            padding: "10px",
                          }}
                        >
                          {" "}
                          <span className="text-danger">
                            <i class="fa-solid fa-heart-pulse"></i>{" "}
                          </span>
                          {bot.health}
                        </p>
                        <p
                          className="card-text-sm"
                          style={{
                            border: "10px",
                            border_radius: "5px",
                            padding: "10px",
                          }}
                        >
                          <span className="text-danger">
                            <i class="fa-solid fa-shield"></i>
                          </span>
                          {bot.armor}{" "}
                        </p>
                        <p
                          className="card-text-sm"
                          style={{
                            border: "10px",
                            border_radius: "5px",
                            borderColor: "red",
                            padding: "10px",
                          }}
                        >
                          <span className="text-danger">
                            {" "}
                            <i class="fa-solid fa-bolt-lightning"></i>
                          </span>{" "}
                          {bot.damage}{" "}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteBot(bot.id)}
                      className="btn btn-primary"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default YourBotArmy;