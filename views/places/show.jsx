const React = require("react");
const Def = require("../default");

function show (data) {
  return (
    <Def>
      <div>
        <main>
          <div className="row">
            <div className="col-sm-6">
              <img className="m-4" src={data.place.pic} alt={data.place.name} />
              <h3>
                Located in {data.place.city}, {data.place.state}
              </h3>
            </div>
            <div className="col-sm-6">
              <h2 className="m-4">{data.place.name} </h2>
              <h3>Rating</h3>
              <p>Not Rated</p>
              <h2>Description</h2>
              <h3>
                {data.place.showEstablished()}
              </h3>
              <h4>
                Serving {data.place.cuisines}
              </h4>
              {/* <p className="text-center">
                Located in {data.place.city}, {data.place.state} and serving{" "}
                {data.place.cuisines}
              </p> */}
            </div>
          </div>
          <div className="row">
            <div>   
                 <a href={`/places/${data.id}/edit`} className="btn btn-warning">     
                     Edit
                 </a>  
                 <form action={`/places/${data.id}?_method=DELETE`} method="POST"> 
                     <button type="submit" className="btn btn-danger">
                         Delete
                    </button>
                 </form>  
            </div>   
        </div>
          <div className="mb-3">
            <h2> Comments </h2>
            <p>No comments yet!</p>
          </div>
        </main>
        
      </div>
    </Def>
  );
}

module.exports = show