import React, { useRef } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Person from './components/Person';
import ProductList from './components/ProductList';
import Login from './components/State/Login';
import Reducer from './components/State/Reducer';
import Status from './components/Status';
import Styles from './components/Styles';
import Toast from './components/Template/Toast';
import Test from './components/Test';
import UseRef from './components/UseRef';
import Input from './Input';
import List from './List';
import MutableRef from './MutableRef';
import RandomNumber from './RandomNumber';
import CustomButton from './components/html/CustomButton'
import CustomComponent from './components/html/CustomComponent';
import Text from './components/Text';
function App() {
  const personName = {
    first: 'ALy',
    last: 'RAza'
  }
  const productsList = [
    {
      name: 'Rice',
      price: 25
    },
    {
      name: 'Potato',
      price: 95
    },
    {
      name: 'Tomato',
      price: 80
    }
  ]
  return (
    <div className="App">

      {/* <Greet name={'RAza'} message={20} login={false} />
      <Greet name={'RAza'} login={true} />
      <Person name={personName} />
      <ProductList products={productsList} />
      <Status status='error' />
      <Test>
        <Heading>Lets jumps </Heading>
      </Test>
      <Button handleClick={(event, id) => {
        console.log('Button Clicked', event.target, id);
      }} />
      <Input value='' hanldeChange={(e) => console.log(e)} /> */}

      {/* <Styles styles={{ color: 'orange', fontSize: '8rem' }} /> */}
      {/* <Login /> */}
      {/* <Reducer /> */}
      {/* <UseRef /> */}
      {/* <MutableRef /> */}
      {/* <Counter  message='hello world'/> */}
      {/* <List items={['orange', 'banana', 'apple']} onClick={(item) => console.log(item)} />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <List items={[
        {
          id: 1,
          name: 'Rice',
          price: 25
        },
        {
          id: 2,
          name: 'Potato',
          price: 95
        },
        {
          id: 3,
          name: 'Tomato',
          price: 80
        }
      ]} onClick={(item) => console.log(item)} /> */}
      {/* <RandomNumber value={20} isPositive /> */}
      {/* <Toast position='center' /> */}
      {/* <CustomButton variant='primary' onClick={() => console.log('clicked')}>
        primary Button
      </CustomButton>
      <CustomComponent name={'hello typescript'} message={20} login={true} /> */}
      <Text as="h1" size="lg" >Heading</Text>
      <Text as="p" size="md" >paragraph</Text>
      <Text as="span" size="sm" color="primary">label</Text>
    </div>
  );
}

export default App;
