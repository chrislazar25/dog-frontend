import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function LogIn() {
    const [sidebar, setsidebar] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const nav = useNavigate();

    const sendCreds = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('https://frontend-take-home-service.fetch.com/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
            credentials: 'include', 
          });
    
          if (response.ok) {
            // Login successful
            console.log('Logged in successfully!');
            nav('/dog-frontend/search');
          } else {
            // Handle login failure
            console.error('Login failed!');
          }
        } catch (error) {
          console.error('An error occurred during login:', error);
        }
      };

    return (
        <div className="min-h-full w-full py-16 px-4">
            <div className="flex flex-col items-center justify-center">
                
                <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    <form 
                        id="login-form" 
                        onSubmit={sendCreds}
                    >
                        <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                            Login to your account
                        </p>
                        <div>
                            <lable className="text-sm font-medium leading-none text-gray-800">Name</lable>
                            <input 
                                role="input" 
                                type="text" 
                                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" 
                                value={name}
                                onChange={(e)=>{
                                    setName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mt-6  w-full">
                            <lable className="text-sm font-medium leading-none text-gray-800">Email</lable>
                            <div className="relative flex items-center justify-center">
                                <input 
                                    role="input" 
                                    type="email" 
                                    className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" 
                                    value={email}
                                    onChange={(e)=>{
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </form>
                        <div className="mt-8">
                            <button form="login-form" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                                Login
                            </button>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
