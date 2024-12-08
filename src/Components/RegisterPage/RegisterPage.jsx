import React, { useContext, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Provider/AuthProvider';

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
            password.length >= 6 &&
            /[A-Z]/.test(password) &&
            /[a-z]/.test(password);

        if (!isValidPassword) {
            setErrorMessage(
                'Password must be at least 6 characters long, with at least one uppercase and one lowercase letter'
            );
            toast.error(
                'Password must be at least 6 characters long, with at least one uppercase and one lowercase letter'
            );
            return;
        }

        createUser(email, password)
            .then((result) => {
                const profile = {
                    displayName: name,
                    photoURL: photo,
                };

                result.user
                    .updateProfile(profile)
                    .then(() => {
                        setSuccess(true);
                        toast.success('Successfully registered!');
                        navigate('/');
                    })
                    .catch((error) => {
                        setErrorMessage(error.message);
                        toast.error(error.message);
                    });

                const newUser = { email, name, photo };
                return fetch('https://b10-a10-server-side-noorjahan220.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser),
                });
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to save user to the backend.');
                }
                return response.json();
            })
            .catch((error) => {
                setErrorMessage(error.message);
                toast.error(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                setSuccess(true);
                toast.success('Successfully registered with Google!');
                navigate('/');
            })
            .catch((error) => {
                setErrorMessage(error.message);
               
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Photo URL"
                                name="photo"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
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
                                className="absolute right-3 top-4 text-gray-500"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        <label className="label">
                            <Link to="/forgot-password" className="label-text-alt link link-hover">
                                Forgot password?
                            </Link>
                        </label>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <Link to="/signin" className="text-center mt-2">
                            Already have an account? Login
                        </Link>
                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            className="btn btn-outline w-full mt-4"
                        >
                            Sign up with Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
