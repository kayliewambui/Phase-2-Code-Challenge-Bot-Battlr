import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function BotDetails() {
  const { id } = useParams();
  const [bot, setBot] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4001/bots/${id}`)
      .then((res) => res.json())
      .then((handleFilterChange) => setBot(handleFilterChange));
  }, [id]);

  return (
    <>
      <div className="row " style={{ gap: "3%" }}>
        <div className="col-2 mb-4 ">
          <div key="" className="row no-gutters" style={{ width: "18rem;" }}>
            <div className="row ">
              <div className="card p-0 m-1 border border-primary shadow p-3 mb-5 bg-body rounded">
                <div className="col md-3">
                  <img
                    src={bot.avatar_url}
                    className="card-img-top"
                    alt="..."
                  />
                </div>

                <div className="card-body">
                  <h5 className="text-primary">Bot name: {bot.name}</h5>
                  <p className="card-text-sm">
                    <small>{bot.catchphrase}</small>
                  </p>
                  <h5 className="card-text-sm">
                    Bot class:
                    <span className="text-primary"> {bot.bot_class}</span>
                  </h5>

                  <div
                    className="ps-10"
                    style={{
                      display: "flex",
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
                        <i class="fa-solid fa-heart-pulse"> </i>
                      </span>{" "}
                      {bot.health}
                    </p>

                    <p
                      className="card-text-sm"
                      style={{
                        border: "10px",
                        border_radius: "5px",
                        borderBlockColor: "green",
                        padding: "10px",
                      }}
                    >
                      <span className="text-danger">
                        <i class="fa-solid fa-shield"> </i>
                      </span>
                      {bot.armor}
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
                        <i class="fa-solid fa-bolt-lightning"></i>
                      </span>
                      {bot.damage}
                    </p>
                  </div>
                  <p>Created at: {bot.created_at}</p>
                  <p>Updated at: {bot.updated_at}</p>
                </div>
                <a href="/" class="btn btn-primary">
                  Go Back
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BotDetails;