import React, {useState, useEffect} from 'react';

function Birds(props) {
    let url = 'https://audubon-api.herokuapp.com/api/birds'

    const [birds, setBirds] = useState([]);
    
useState(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => {
        setBirds(json)
        // console.log(res);
  })
  .catch(console.error);
    }, [] )

    return (
      <section className="container">
      {birds.map(bird => {
        return (
          <div className="card">
            <div className="card-image">
              <img
                src={bird.image}
                alt={bird.name}
              />
            </div>
                      <div className="card-title">
                          <h3>{bird.name}</h3>
                      </div>
                  </div>
              );
          })}   
      </section>
  );
}

export default Birds;