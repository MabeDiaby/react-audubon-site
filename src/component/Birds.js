import React, {useState, useEffect} from 'react';

function Birds(props) {
    let url = 'https://audubon-api.herokuapp.com/api/birds'

    const [birds, setBirds] = useState();
    
useState(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => {
        // console.log(res);
  })
  .catch(console.error);
    }, [] )

    return (
        <div>
            <h1>Some Birds Tweet Tweet</h1>
        </div>
    );
}

export default Birds;