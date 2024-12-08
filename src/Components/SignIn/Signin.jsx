import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Signin = () => {
    const { signInUser } = useContext(AuthContext);
 const navigate = useNavigate()
    const handleSignin = e => {
        e.preventDefault();
        const form = e.target;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(password, email);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime };

                fetch(`https://b10-a10-server-side-noorjahan220.vercel.app/users`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(loginInfo),
                })
                    .then(res => res.json())
                    .then(data => {
                        form.reset();
                        toast.success('Successfully Signin!') 
                        navigate('/');
                        console.log("Sign-in info updated in DB", data);
                    });
            })
            .catch(error => {
                console.log(error);
                toast.error("This didn't work.")
            });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-16">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h1>
                <form onSubmit={handleSignin} className="space-y-4">
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
                    <div className="form-group">
                        <label className="label">
                            <span className="label-text text-gray-700">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered w-full"
                            required
                        />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-gray-600">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-group mt-6">
                        <button className="btn btn-primary w-full bg-gray-800 text-white hover:bg-gray-700 transition">
                            Login
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-gray-800 hover:underline">
                            Register
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;
