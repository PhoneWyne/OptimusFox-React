import { SignIn } from "../components/signin/SignIn";
import { SignUp } from "../components/signup/SignUp";
export function HomePage(){
    return(
        <div>
            <h3>Hello user</h3>
            <SignIn />
            <SignUp />
            
        </div>
    );
};