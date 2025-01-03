import {FormContainer,Header,LoginContainer,StyledButton,StyledForm,StyledImg,StyledInput,} from './Login.style';
import mealSvg from '../../assets/meal.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const Navigate = useNavigate();

  const userInfo ={
    username: 'eric',
  };

  const handleSubmit = (e) => {
 e.preventDefault()
 sessionStorage.setItem('user', JSON.stringify(userInfo));
 Navigate(-1);
  }

  return (
    <LoginContainer>
      <FormContainer>
        <Header>{'Boston🐧'}Recipe</Header>
        <StyledImg src={mealSvg} alt='meal' />
        <StyledForm onSubmit={handleSubmit}   >
          <StyledInput type='text' placeholder='username' required />
          <StyledInput type='password' placeholder='password' required />
          <StyledButton type='submit'>Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};
 
export default Login;
