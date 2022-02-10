import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import CheckBox from './CheckBox';
import Form from './Form';
import TextInput from './TextInput';

export default function SignupForm() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState(false);

    const [error, setError] = useState('');
    const [loading, setLoading] = useState();

    const { signup } = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        // Password Validation
        if (password !== confirmPassword) {
            return setError("Password don't match!");
        }

        try {
            setError('');
            setLoading(true);
            await signup(email, password, userName);
            history.push('/');
        } catch (err) {
            console.log(err.message);
            setLoading(false);
            setError('Fail to Create an Account');
        }
    }

    return (
        <Form style={{ height: '500px' }} onSubmit={handleSubmit}>
            <TextInput
                type="text"
                placeholder="Enter name"
                icon="person"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <TextInput
                type="email"
                placeholder="Enter email"
                icon="alternate_email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
                type="password"
                placeholder="Enter password"
                icon="lock"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextInput
                type="password"
                placeholder="Confirm password"
                icon="lock_clock"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <CheckBox
                text="I agree to the Terms &amp; Conditions"
                required
                value={agree}
                onChange={(e) => setAgree(e.target.value)}
            />

            <Button disable={loading} type="submit">
                <span>Signup Now</span>
            </Button>

            {error && <p className="error">{error}</p>}

            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>
        </Form>
    );
}
