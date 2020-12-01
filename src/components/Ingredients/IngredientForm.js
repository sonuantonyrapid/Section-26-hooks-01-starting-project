import React,{useState,useRef} from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {

  const ingredient = {
    title:'',
    amount:''
  };

  const [ingredientState,setIngredientState] = useState(ingredient);

  const submitHandler = event => {
    event.preventDefault();
    const updateIngredientState = {...ingredientState}
    props.addIngredient(updateIngredientState);
  };

  const valueHandler = (event) => {

    const id = event.target.id;
    const value = event.target.value;

    setIngredientState((state)=>{

      const updateIngredientState = {...state};
      updateIngredientState[id] = value;

      return updateIngredientState;

    });

    // switch(id){

    //   case 'title':
        

    //     setIngredientState((state)=>{

    //       const updateIngredientState = {...state};
    //       updateIngredientState[id] = value;

    //       return updateIngredientState;

    //     });

    //     break;

    //   case 'amount':
        
    //     setIngredientState((state)=>{

    //       const updateIngredientState = {...state};
    //       updateIngredientState[id] = value;

    //       return updateIngredientState;

    //     });
      
    //     break;

    //   default:
    //     break;

    // }

  }

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" onChange={valueHandler} value={ingredientState.title}/>
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" onChange={valueHandler} value={ingredientState.amount}/>
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
