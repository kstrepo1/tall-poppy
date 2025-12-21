"use client"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { redirect, RedirectType } from 'next/navigation'

export default function Home() {
  const [error, seterror] = useState("");

  async function logout() {
    let baseURL = "http://localhost:3300";
    seterror("")

    const response = await fetch(baseURL+'/logout', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      credentials: 'include'
    });


    if (!response.ok) {
      // If the server sent a 401 or 500, we can still read the error message
      const errorText = await response.text();
      console.log("Server Error:", errorText);
      seterror(errorText);
      return;
    }

    if(response.ok){
        redirect('/', RedirectType.replace)
    }

  };

  useEffect(()=>{logout()}, [])
  
  return (
    

    <div
      style={{
        ...styles.head,
      } as React.CSSProperties}
    >

    
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
