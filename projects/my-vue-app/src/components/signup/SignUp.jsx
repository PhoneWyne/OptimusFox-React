import React, {useState} from "react";
export function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSignUp = (event) =>{
        // default behavior after form submission is refresh page, need to prevent this
        event.preventDefault();

        // log email and password entered in form
        console.log({email, password});

        // clear form fields after submission
        setName('');
        setEmail('');
        setPassword('');
    };
    return (
        <div>
            <h2>Sign Up</h2>
            {/* on submitting, run the function "handleSignUp" */}
            <form onSubmit={handleSignUp}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    {/* email field, htmlFor is id of input field */}
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );    
};