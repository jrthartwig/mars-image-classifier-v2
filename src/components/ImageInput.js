import React, { useState } from 'react';

const ImageInput = () => {
    const [prediction, setPrediction] = useState();
    const [input, setInput] = useState();

    const submitHandler = (event) => {
        let myHeaders = new Headers();
        myHeaders.append("Prediction-Key", "d32479c7aa0b4c93ba62c00c97f3b952");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "Url": `${input}` });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        }

        fetch("https://space-cadet-vision.cognitiveservices.azure.com/customvision/v3.0/Prediction/4457824c-3ee2-4619-ae00-edc640fd8dc1/classify/iterations/Iteration8/url", requestOptions)
            .then(console.log("here"))
            .then((response) => response.json())
            .then(result => setPrediction(result.predictions))
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Submit Image for Prediction Here:</label>
                <br></br>
                <input type="text" id="image-source" name="image-source" onChange={e => setInput(e.target.value)}></input>
                <input type="submit" value="Get Prediction"></input>
            </form>
            {
                prediction &&
                prediction.map((p, k) => (
                    <div style={{ alignItems: 'center', margin: "5px", marginBottom: "15px" }} key={k}>{prediction && p.tagName}: {Math.trunc(p.probability * 100)}%</div>
                ))
            }
        </div>
    )
}

export default ImageInput;