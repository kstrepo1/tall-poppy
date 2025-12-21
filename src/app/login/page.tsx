"use client"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';
import { handleSubmit } from './handlesubmit';


export default function Home() {
    const [error, seterror] = useState("");
  
  return (
    

    <div
      style={{
        ...styles.head,
      } as React.CSSProperties}
    >


    <Form onSubmit={(e)=> handleSubmit(e,seterror)}>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control name="username" type="text" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
    
    {error? error:""}
    </div>
  
    
  
    )
}

const styles={
  head: {
    
    position: "absolute",
    zIndex: 2,
    width: "100%",
    height:"100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
  },
  background: {
  
  },
  button: {

    
  }
}
