// App.js

import React from 'react';
import ReactDOM from 'react-dom';
import { LoginContainer, LoginForm, InputField, SubmitButton } from './LoginForm';

function App() {
    return (
        <LoginContainer>
            <LoginForm>
                <h2>Login</h2>
                <InputField type="text" placeholder="Username" className="input-field" />
                <InputField type="password" placeholder="Password" className="input-field" />
                <SubmitButton type="submit" className="submit-button">
                    Login
                </SubmitButton>
            </LoginForm>
        </LoginContainer>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
