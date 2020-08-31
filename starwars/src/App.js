import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character';

const CharacterContainer = styled.div`
  margin: 3%;
  display: grid;
  grid-gap: 100px;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState();
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get('https:swapi.dev/api/people/')
      .then((res) => {
        //console.log(res.data.results);
        setCharacter(res.data.results);
      })
      .catch((e) => {
        console.log(e);
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterContainer>
      {
        character.map((info, index) => {
          return (
            <Character
              key={index}
              name={info.name}
              species={info.species}
              gender={info.gender}
              homeworld={info.homeworld}
              birthYear={info.birth_year}
              height={info.height}
              mass={info.mass}
              hairColor={info.hair_color}
              eyeColor={info.eye_color}
              skinColor={info.skin_color}
              starships={info.starships}
              vehicles={info.vehicles}
              films={info.films}
            />
          )
        })
      }
      </CharacterContainer>
    </div>
  );
}

export default App;
