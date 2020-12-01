import React,{useState, useEffect} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';


const Ingredients = (props) => {

  const userIngredient = {
    ingredients:[]
  }

  
  const [userIngredientState,setUserIngredientState] = useState(userIngredient);

  // useEffect(()=>{

  //   fetch('https://react-my-burger-6ed38.firebaseio.com/ingredients.json').then(
  //     response=>response.json()
  //   ).then(responseData=>{

  //     const updateUserIngredientState = {...userIngredientState};

  //     for(const[key,value] of Object.entries(responseData)){


  //       updateUserIngredientState.ingredients = updateUserIngredientState.ingredients.concat({...value,id:key});

  //     }

      
  //     setUserIngredientState(updateUserIngredientState);

  //   });

  // },[]);

const onSearch = (ingredients) => {

  const updateUserIngredientState = {...userIngredientState};

  updateUserIngredientState.ingredients = ingredients;

  setUserIngredientState(updateUserIngredientState);

}
  

const addIngredient = (ingredient) => {

  fetch('https://react-my-burger-6ed38.firebaseio.com/ingredients.json',{
    method:'POST',
    body: JSON.stringify(ingredient),
    headers: {'Conent-Type':'application/json'}
  }).then(response=>{
    
    return response.json();

  }).then(responseData=>{

    const updateUserIngredient = {...userIngredientState};

    updateUserIngredient.ingredients = updateUserIngredient.ingredients.concat({...ingredient,id:responseData.name});

    setUserIngredientState(updateUserIngredient);

  }).catch(error=>{
    console.log(error);
  });

  

}

const deleteIngredient = (id) => {

  const updateUserIngredient = {...userIngredientState};

  updateUserIngredient.ingredients =  updateUserIngredient.ingredients.filter((item) => {

    return item.id != id;

    }

  );

  setUserIngredientState(updateUserIngredient);

}


  return (

    <div className="App">
      <IngredientForm addIngredient={addIngredient}/>

      <section>
        <Search onSearch={onSearch}/>
        <IngredientList ingredients={userIngredientState.ingredients} onRemoveItem={deleteIngredient}/>
      </section>
    </div>
  );
}

export default Ingredients;
