import React from 'react';
import {useState, useEffect} from 'react';

function BirdDetails(props) {
    
    const [bird, setBirds] = useState("");
    
    const url = `https://audubon-api.herokuapp.com/api/birds/${props.match.params.id}`

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setBirds(json)})
            .catch(console.error)
    }, []);
    console.log(bird)

    return (
        <div className="details-container">
            <img
            src={bird.image} 
            alt={bird.name}
        />
            <div className="details">
                <h2>{bird.name}</h2>
                <h3>{bird.genus}</h3>
                <h4>Conservation Status</h4>
                <p>
                    {bird.conservationStatus}
                </p>
                <a
                    href= {bird.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        Read More
                    </a>
            </div>
        </div>
    );
}

export default BirdDetails;