const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐️'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )
  }
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
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
              {rating}
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
                <button className="btn btn-danger" type="submit">
                  Delete
                </button>
              </form>
            </div>
          </div>
          {/* <div className="mb-3"> */}
          <h2>Comments</h2>
          {comments}
          <label for="customRange1" class="form-label">Star Rating</label>
          <input type="range" class="form-range" id="customRange1"></input>
          {/* </div> */}
        </main>

      </div>
    </Def>
  );
}

module.exports = show


