import '../styles/login.css';

const Login = () => {
    return (
        <div className="container outer">
            <h1>ToDo App</h1>
            <hr/>
            <div className="container main">
                <div className="container login">
                    <h3>Login</h3>
                    <hr />
                    <form>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="enter password" />
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
                        <div className="mb-3">
                            <label for="name" className="form-label">Email address</label>
                            <input type="text" className="form-control" id="name" placeholder="e.g. John Doe" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;