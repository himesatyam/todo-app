import { useState } from 'react';
import '../styles/login.css';

const Login = ({setLogin}) => {
    
    const [flag, setFlag] = useState(true);
    return (
        flag ? <h1 className="wait">Welcome to todo app, page is loading...</h1> : <div className="container outer">
            <h1>ToDo App</h1>
            <hr/>
            <div className="container main">
                <div className="container login">
                    <h3>Login</h3>
                    <hr />
                    <form>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="enter password" />
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
                <div className="container signup">
                    <h3>Signup</h3>
                    <hr />
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label">Email address</label>
                            <input type="text" class="form-control" id="name" placeholder="e.g. John Doe" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;