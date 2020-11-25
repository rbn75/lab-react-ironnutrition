import React, { Component } from 'react';

import './App.css';
import 'bulma/css/bulma.css';
import Title from './components/Title';
import Button from './components/Button';
import FoodBox from './components/FoodBox';
import FilterForm from './components/FilterForm';
import FormAddFood from './components/FormAddFood';
import foods from './foods.json';



class App extends Component {
  state = {
    foods: [],
    filteredFoods: [],
  }

  componentDidMount() {
    this.setState({ 
      foods: [...foods], 
      filteredFoods: [...foods],
    });
  }

  filteredFoods = (filter) => {
    const { foods } = this.state;
    const { name } = filter;

    const filteredFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(name)
    });

    this.setState({
      filteredFoods,
    })
  }

  displayFood = () => {
    const { filteredFoods } = this.state;

    return filteredFoods.map((food, idx) => {
      const { name, image, calories } = food;
      return(
        <FoodBox name={food.name} image={food.image} calories={food.calories} />
      )
    })
  }

  handleSubmit = (food) => {
    const { foods, filteredFoods } = this.state;
    foods.push(food);
    filteredFoods.push(food);
    this.setState({ foods, filteredFoods });
  }

  render() {
    const { showForm } = this.state;

    return (
      <div className="App">
        <Title htmlType="H1">IronNutrition</Title>
        {/* <FilterForm filterFunction={this.filteredFoods} /> */}
        <FormAddFood addFoodFunction={this.handleSubmit} />
        <div className="container">
          <div className="foods-list">
            {this.displayFood()}
          </div>
          <div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default App;