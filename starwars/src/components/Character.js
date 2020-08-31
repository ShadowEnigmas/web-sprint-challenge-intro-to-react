import React from "react";
import styled from 'styled-components';

const Card = styled.div`
height: 500px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
overflow: hidden;
border: 2px solid darkgrey;`

const Character = (props) => {
    return (
        <Card>
            <h2>{props.name}</h2>
            <div>
                <p>Height: {props.height}cm</p>
                <p>Mass: {props.mass}kg</p>
                <p>Hair Color: {props.hairColor}</p>
                <p>Skin Color: {props.skinColor}</p>
                <p>Eye Color: {props.eyeColor}</p>
                <p>Born in: {props.birthYear}</p>
                <p>Gender: {props.gender}</p>
                <p>Homeworld: {props.homeworld}</p>
                <p>Films: {props.films}</p>
                <p>Species: {props.species}</p>
                <p>Vehicles: {props.vehicles}</p>
                <p>Starships: {props.starships}</p>
            </div>
        </Card>
    )
}

export default Character; 
