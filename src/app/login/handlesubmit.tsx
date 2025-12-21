import { redirect, RedirectType } from 'next/navigation'


export async function handleSubmit(event:any, seterror:any) {
    let baseURL = "http://localhost:3300";

    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    seterror("")

    //console.log("Sending data to server:", data);

    const response = await fetch(baseURL+'/login', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json', // Critical for Express express.json() to work
      },
      body: JSON.stringify(data),
      credentials: 'include'
    });


    if (!response.ok) {
      // If the server sent a 401 or 500, we can still read the error message
      const errorText = await response.text();
      console.log("Server Error:", errorText);
      seterror(errorText);
      return;
    }

    // 3. Wait for the body content to be parsed
    // Use .json() if your server sends JSON, or .text() if it sends a string like "Hello World"
    const result = await response.text(); 
    if(result=="{\"auth\":1}"){
        redirect('/dashboard', RedirectType.replace)
    }
    
    console.log("Success! Server says:", result);
    


  };