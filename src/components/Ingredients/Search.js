import React,{useEffect, useState} from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {

  // const [onSearch] = props;

  const [searchState,setSearchState] = useState('');

  useEffect(()=>{

    const query = searchState.length === 0 ? '':`?orderBy="title"&equalTo="${searchState}"`;

    fetch('https://react-my-burger-6ed38.firebaseio.com/ingredients.json'+query).then(
      response=>response.json()
    ).then(responseData=>{

      let updateUserIngredientState = [];

      for(const[key,value] of Object.entries(responseData)){


        updateUserIngredientState = updateUserIngredientState.concat({...value,id:key});

      }

      
      // setUserIngredientState(updateUserIngredientState);
      props.onSearch(updateUserIngredientState);

    });
    
  },[searchState]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" value={searchState} onChange={event => setSearchState(event.target.value)}/>
        </div>
      </Card>
    </section>
  );
});

export default Search;
