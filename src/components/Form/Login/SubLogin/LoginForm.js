import { useLogin } from "./useLogin"

export function LoginForm() {
    const {data, onInputChange, fetchData} = useLogin()

    return (
        <div className="log-in" id="login">
            <div className="log-in-title">
                <p>Log In</p>
            </div>
            <div className="log-in-input">
                <div className="log-in-email">
                    <label>Email</label>
                    <input onChange={onInputChange} value={data.username} id="email" type="text" name="username" />
                </div>
                <div className="log-in-password">
                    <label>Password</label>
                    <input onChange={onInputChange} value={data.password} id="password" type="password" name="password" />
                </div>
                <div className="log-in-forgot-account">
                    <a href="">Forgot password</a>
                    <a href="">No account? Sign up!</a>
                </div>
            </div>

            <div className="log-in-btn">
                <button onClick={fetchData}>LOGIN</button>
            </div>
        </div>
    )
}