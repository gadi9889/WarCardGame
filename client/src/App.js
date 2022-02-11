import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import War from './svg/War'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import axios from 'axios';
import './App.css';

function App() {
  const animationRef1 = useRef(null);
  const [validated, setValidated] = useState()

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  useEffect(() => {
    anime({
      targets: '.box-top-left',
      opacity:[0,1],
      translateX:anime.stagger(76),
      translateY:anime.stagger(100),
      rotate:'2turn',
      easing: 'easeInOutSine',
      duration: 1500,
      delay:anime.stagger(300),
      direction: 'alternate',
      loop: true
    });
    anime({
      targets: '.xox',
      opacity:[0,1],
      translateX:anime.stagger(76),
      translateY:anime.stagger(100),
      rotate:'2turn',
      easing: 'easeInOutSine',
      duration: 1500,
      delay:anime.stagger(300),
      direction: 'alternate',
      loop: true
    });
    anime({
      targets: '.aox',
      opacity:[0,1],
      translateX:anime.stagger(-76),
      translateY:anime.stagger(100),
      rotate:'2turn',
      easing: 'easeInOutSine',
      duration: 1500,
      delay:anime.stagger(300),
      direction: 'alternate',
      loop: true
    });
    anime({
      targets: '.wox',
      opacity:[0,1],
      translateX:anime.stagger(-76),
      translateY:anime.stagger(100),
      rotate:'2turn',
      easing: 'easeInOutSine',
      duration: 1500,
      delay:anime.stagger(300),
      direction: 'alternate',
      loop: true
    });
  }, []);

  const boxes = () => {
    let arr = []
    for (let i = 0; i < 8; i++) {
      arr.push(
        <div className='box-top-left position-absolute top-0 start-0'/>
      )
    }
    for (let i = 0; i < 8; i++) {
      arr.push(
        <div className='xox position-absolute top-0 start-50'/>
      )
    }
    for (let i = 0; i < 8; i++) {
      arr.push(
        <div className='aox position-absolute top-0 start-50'/>
      )
    }
    for (let i = 0; i < 8; i++) {
      arr.push(
        <div className='wox position-absolute top-0 start-100'/>
      )
    }
    return arr
  }

  return (
    <div className="d-flex justify-content-center align-content-center user-select-none bg-dark flex-wrap text-center text-white" style={{height:'100vh',width:'100vw'}}>
      {boxes().map(box => {return box})}
      <div className="rounded-2 bg-dark bg-gradient" style={{padding:'10px'}}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="validationKingdomName">
            <Form.Label>Kingdom</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                name="kName"
                placeholder="Ex:Akkadian"
                aria-describedby="inputGroupPrepend"
                pattern=".{5,}"
                required
              />
              
            </InputGroup>
            <Form.Text muted>
                Kingdom Name Must Be At Least 5 Letters Long
              </Form.Text>
          </Form.Group>
          <Form.Check
            inline
            label="Red"
            className='bg-danger rounded-2'
            name="redBlack"
            type="radio"
            checked
          />
          <Form.Check
            inline 
            className='bg-dark rounded-2'
            label="Black"
            name="redBlack"
            type="radio"
          />
        <Button type="submit" className="bg-dark">Enter</Button>
      </Form>
      </div>
    </div>
  );
}

export default App;
