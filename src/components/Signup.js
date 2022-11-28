import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const Signup = ({ setProfile, profile }) => {
	const navigate = useNavigate();
	useEffect(() => {
		if (profile) return navigate("/");
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await fetch(process.env.REACT_APP_SERVER_URL + "api/auth/signup", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				username: e.target.username.value,
				email: e.target.email.value,
				password: e.target.password.value,
				confirmPassword: e.target.confirmPassword.value,
			}),
		});

		let user = await response.json();
		if (!user.success) {
			console.log("Auth Error");
			return navigate("/signup");
		} else {
			console.log(user.user);
			setProfile(user.user);
			return navigate("/");
		}
	};

	const handleGoogleSignIn = (user) => {
		window.open(process.env.REACT_APP_SERVER_URL + "api/auth/google", "_self");

		if (!user) {
			console.log("Google Auth Error");
		} else {
			console.log("Success");
		}
	};

	return (
		<div className="bg-white font-family-karla min-h-screen">
			<div className="w-full flex flex-wrap">
				{/* <!-- Login Section --> */}
				<div className="w-full md:w-1/2 flex flex-col">
					<div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
						<a href="/" className="">
							<img src="/assets/vector/default-monochrome.svg" className="w-80" />
						</a>
					</div>

					<div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
						<p className="text-center text-3xl ">Sign Up.</p>
						<form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
							<div className="flex flex-col pt-4">
								<label htmlFor="username" className="text-lg">
									Username
								</label>
								<input
									type="text"
									id="username"
									placeholder="Username"
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
								/>
							</div>

							<div className="flex flex-col pt-4">
								<label htmlFor="email" className="text-lg">
									Email
								</label>
								<input
									type="email"
									id="email"
									placeholder="your@email.com"
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
								/>
							</div>

							<div className="flex flex-col pt-4">
								<label htmlFor="password" className="text-lg">
									Password
								</label>
								<input
									type="password"
									id="password"
									placeholder="Password"
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
								/>
							</div>

							<div className="flex flex-col pt-4">
								<label htmlFor="confirmPassword" className="text-lg">
									Confirm Password
								</label>
								<input
									type="password"
									id="confirmPassword"
									placeholder="confirm Password"
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
								/>
							</div>

							<input
								type="submit"
								value="Sign up"
								className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
							/>
							<button
								type="button"
								onClick={handleGoogleSignIn}
								className="bg-red-700 text-white font-bold text-lg hover:bg-red-600 p-2 mt-6"
							>
								{" "}
								Login with Google{" "}
							</button>
							<div className="text-center py-4">
								<p>
									Already have an account?{" "}
									<Link to="/login" className="underline font-semibold">
										Login
									</Link>
								</p>
							</div>
						</form>
					</div>
				</div>

				{/* <!-- Image Section --> */}
				<div className="w-1/2 shadow-2xl">
					<img
						className="object-cover w-full h-screen hidden md:block"
						src="/assets/wallpaper3.jpg"
						alt="img"
					/>
				</div>
			</div>
		</div>
	);
};
export default Signup;
