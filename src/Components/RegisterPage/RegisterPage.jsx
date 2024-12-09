import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';

const RegisterPage = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        const isValidPassword =
            password.length >= 6 && /[A-Z]/.test(password) && /[a-z]/.test(password);

        if (!isValidPassword) {
            toast.error('Password must be at least 6 characters long, with at least one uppercase and one lowercase letter');
            return;
        }

        try {
            const userCredential = await createUser(email, password, name, photo);

            const newUser = { email, displayName: name, photoURL: photo };
            await fetch('https://b10-a10-server-side-noorjahan220.vercel.app/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            toast.success('Successfully registered!');
            navigate('/');
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                toast.success('Successfully signed up with Google!');
                navigate('/');
            })
            .catch((error) => {
                toast.error("Cannot sign up, please try again.");
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 transition duration-300 hover:shadow-2xl">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        Sign Up
                    </span>
                </h1>
                <form onSubmit={handleSignUp} className="space-y-4">
                    <div className="form-group">
                        <label className="label">
                            <span className="label-text text-black dark:text-black">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-black"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label">
                            <span className="label-text text-black dark:text-black">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Photo URL"
                            className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-black"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="label">
                            <span className="label-text text-black dark:text-black">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-black"
                            required
                        />
                    </div>
                    <div className="form-group relative">
                        <label className="label">
                            <span className="label-text text-black dark:text-black">Password</span>
                        </label>
                        <input
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Your password"
                            className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 text-black dark:text-black"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-10 text-black dark:text-black"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <div className="form-group mt-6">
                        <button className="btn w-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300">
                            Sign Up
                        </button>
                    </div>
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="btn btn-outline w-full mt-4 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                        Sign up with Google
                    </button>
                    <div className="text-center mt-4 text-gray-600 dark:text-gray-300">
                        Already have an account?{' '}
                        <Link to="/signin" className="text-blue-500 hover:underline">
                            Sign in
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
