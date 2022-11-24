import Header from "./components/Header";
import Footer from "./components/Footer";
import Feed from "./components/Feed";
import Post from "./components/Post";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const Router = BrowserRouter;

function App() {
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		const getUser = async () => {
			fetch(process.env.REACT_APP_SERVER_URL + "api/auth/login/success", {
				method: "GET",
				credentials: "include",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					"Access-Control-Allow-Credentials": true,
				},
			})
				.then((response) => {
					if (response.status === 200) return response.json();
					setProfile(null);
					throw new Error("Authentication has failed");
				})
				.then((resObject) => {
					setProfile(resObject.user);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		getUser();
	}, []);

	const logOut = async () => {
		window.open(process.env.REACT_APP_SERVER_URL + "api/auth/logout", "_self");
	};

	return (
		<>
			<Router>
				<Header logOut={logOut} user={profile} />
				<div className="flex flex-col bg-white min-h-screen">
					<Routes>
						<Route
							path="/login"
							element={<Login setProfile={setProfile} profile={profile} />}
						/>
						<Route
							path="/signup"
							element={<Signup setProfile={setProfile} profile={profile} />}
						/>
						<Route path="/" element={<Feed profile={profile} />} />
						<Route path="/post/:id" element={<Post profile={profile} />} />
						<Route path="/profile" element={<Profile profile={profile} />} />
					</Routes>
				</div>
				<Footer />
			</Router>
		</>
	);
}

export default App;
