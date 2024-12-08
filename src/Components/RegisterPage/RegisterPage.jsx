import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';

import { toast } from 'react-hot-toast';

const RegisterPage = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        setErrorMessage('');
        setSuccess(false);

        const isValidPassword =
            password.length >= 6 && /[A-Z]/.test(password) && /[a-z]/.test(password);

        if (!isValidPassword) {
            setErrorMessage(
                'Password must be at least 6 characters long, with at least one uppercase and one lowercase letter'
            );
            return;
        }

        createUser(email, password)
            .then((result) => {
                const newUser = { email, displayName: name, photoURL: photo };

                return fetch('https://b10-a10-server-side-noorjahan220.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser),
                });
            })
            .then(res => res.json())
            .then(data => {
                toast.success('Successfully registered with Google!');
                navigate('/');
                console.log('User created to DB:', data);
            });
           
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                setSuccess(true);
                // Assuming you're using toast for success messages, uncomment this if needed:
                toast.success('Successfully registered with Google!');
                navigate('/');
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    return (
        <div className=" bg-gray-50 flex items-center justify-center p-16">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign Up</h1>
                {errorMessage && <p className="text-red-500 mb-4 text-center">{errorMessage}</p>}
                <form onSubmit={handleSignUp} className="space-y-4  ">
                    <div className="form-group">
                        <label className="label">
                            <span className="label-text text-gray-700">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label">
                            <span className="label-text text-gray-700">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Photo URL"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label">
                            <span className="label-text text-gray-700">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-group relative">
                        <label className="label">
                            <span className="label-text text-gray-700">Password</span>
                        </label>
                        <input
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Your password"
                            className="input input-bordered w-full"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-10"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <div className="form-group mt-6">
                        <button className="btn btn-primary w-full bg-gray-800 text-white hover:bg-gray-700 transition">
                            Sign Up
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-600">
                        Already have an account?{' '}
                        <Link to="/signin" className="text-gray-800 hover:underline">
                            Sign in
                        </Link>
                    </div>
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="btn btn-outline w-full mt-4 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition"
                    >
                        Sign up with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
