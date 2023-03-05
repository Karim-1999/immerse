import { LoginForm } from "./SubLogin/LoginForm";
import { LogInLeft } from "./SubLogin/LoginLeftSide";
import "./SubLogin/style.css"

export function LogIn(){
    return (
        <div className="log-in-page">
            <LogInLeft />
            <LoginForm />
        </div>
    )
}