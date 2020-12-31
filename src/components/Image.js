import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';


const Image = (props) => {

    const { imageURL } = props;

    const [prediction, setPrediction] = useState();

    useEffect(() => {
        fetch('http://localhost:8080/').then((res) => console.log(res));
    }, [])

    const GetPredictionHandler = () => {
        let myHeaders = new Headers();
        myHeaders.append("Prediction-Key", "d32479c7aa0b4c93ba62c00c97f3b952");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "Url": `${imageURL}` });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://space-cadet-vision.cognitiveservices.azure.com/customvision/v3.0/Prediction/4457824c-3ee2-4619-ae00-edc640fd8dc1/classify/iterations/Iteration6/url", requestOptions)
            .then((response) => response.json())
            .then(result => setPrediction(result.predictions))
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <div>
                <img alt="mars" src={imageURL} style={{ height: "250px" }} />
                <div style={{ textAlign: 'center' }}>
                    <Button style={{ margin: "15px", backgroundColor: '#c1440e' }} onClick={GetPredictionHandler} variant="secondary">Get Prediction</Button>
                    {
                        prediction &&
                        prediction.map((p, k) => (
                            <div style={{ alignItems: 'center', margin: "5px", marginBottom: "15px" }} key={k}>{prediction && p.tagName}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Image; 