import { useState } from 'react';
import  { HeaderText, HomeImg, ImgDiv } from './Home.style';
import axios from 'axios';
import { Header } from '../../components/header/Header';
import Cards from '../../components/cards/Cards';
import homeSvg from "../../assets/home.svg"

const Home = () => {
  const mealType = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];
  const [query, setQuery] = useState('egg');
  const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
  const [recipes, setRecipes] = useState('');

  const APP_ID = '0a8f3cf7';
  const APP_KEY = '71b3096aed8981f4c337f35fe72e1218';

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealtype=${selectedMeal}`;

  const getData = async () => {
    if (query)
      try {
        const { data } = await axios.get(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    else {
      alert('Please Enter your meal');
    }
  };
  // console.log(recipes);
  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
      {!recipes && (
        <ImgDiv>
        <HomeImg src={homeSvg} />
      </ImgDiv>
    )}

    {recipes?.length === 0 && (<HeaderText>The Food can not be found </HeaderText>) } 

    {recipes?.length > 0 &&    <Cards recipes={recipes} /> } 
   
    </div>
  );
};
export default Home;
