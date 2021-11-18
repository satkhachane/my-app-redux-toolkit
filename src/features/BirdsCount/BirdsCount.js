import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBird, addView, selectBirds} from "./birdsCountSlice"

export function BirdsCount()
{
    const[birdName, setBird] = useState('')
    const birds = useSelector(selectBirds);
    const dispatch = useDispatch();

      const handleSubmit = event => {
        event.preventDefault();
        dispatch(addBird(birdName))
        setBird('');
      };

      const incrementBird = (birdName)=>{
        console.log(birdName)
        //event.target.preventDefault();
        dispatch(addView(birdName));
      }

    return(

        <div>
            <h1>Bird List</h1>
            <form onSubmit={handleSubmit}>
                <label>
                <p>Add Bird</p>
                <input type="text" 
                onChange={e=>setBird(e.target.value)}
                value={birdName}></input>
                </label>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
            <ul>
        {birds.map(bird => (
          <li key={bird.name}>
            <h3>{bird.name}</h3>
            <div>
              Views: {bird.views}
              <button onClick={() => incrementBird(bird.name)}><span role="img" aria-label="add"><div>➕</div></span></button>
            </div>
          </li>
        ))}
      </ul>
           
        </div>
    );

}