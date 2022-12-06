import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";

const Profile = ({ profile }) => {
	const [posts, setPosts] = useState([]);

	const navigate = useNavigate();

	let postsArray = [];

	// fetch the post from the database
	useEffect(() => {
		const getProfile = () => {
			fetch(process.env.REACT_APP_SERVER_URL + "api/profile", {
				method: "GET",
				credentials: "include",
			})
				.then((response) => response.json())
				.then((data) => {
					postsArray = data.posts;
					// setComments(data.comments);
					setPosts(
						postsArray.map((post) => {
							return <PostCard key={post._id} post={post}></PostCard>;
						})
					);
				});
		};
		getProfile();
	}, [profile]);

	if (!profile) return navigate("/login");

	return (
		<div className="p-12 gap-4 ">
			<div className="flex flex-col items-center">
				<div>
					<img className="w-24 rounded-full" src="https://picsum.photos/300/300" />
					<p className="text-center">
						<strong>{profile.username}</strong>
					</p>
				</div>
				<div className="mt-12">
					<h2 className="text-gray-900 text-center pb-8 font-medium">Create a Post</h2>
					<form
						action={process.env.REACT_APP_SERVER_URL + "api/post/createPost"}
						encType="multipart/form-data"
						method="POST"
					>
						<div className="relative z-0 mb-6 w-full group">
							<input
								type="text"
								name="title"
								id="title"
								className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer "
								placeholder=" "
								required
							/>
							<label
								htmlFor="title"
								className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg"
							>
								Title
							</label>
						</div>
						<div className="relative z-0 mb-6 w-full group">
							<textarea
								name="caption"
								id="caption"
								className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer "
								placeholder=" "
								rows="1"
								required
							></textarea>
							<label
								htmlFor="caption"
								className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg"
							>
								Caption
							</label>
						</div>
						<div className="relative z-0 mb-6 w-full group">
							<input
								type="text"
								name="vehicle"
								id="vehicle"
								className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer "
								placeholder=" "
								required
							/>
							<label
								htmlFor="vehicle"
								className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg"
							>
								Vehicle
							</label>
						</div>
						<div className="relative z-0 mb-6 w-full group">
							<input
								type="text"
								name="brand"
								id="brand"
								className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer "
								placeholder=" "
								required
							/>
							<label
								htmlFor="brand"
								className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg"
							>
								Brand
							</label>
						</div>
						<div className="relative z-0 mb-6 w-full group">
							<input
								type="text"
								name="workshop"
								id="workshop"
								className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer "
								placeholder=" "
								required
							/>
							<label
								htmlFor="workshop"
								className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-lg"
							>
								Workshop
							</label>
						</div>

						<div className="mb-3">
							<label
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								htmlFor="imageUpload"
							>
								Upload file
							</label>
							<input
								className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
								aria-describedby="file_input_help"
								id="imageUpload"
								type="file"
							/>
							<p
								className="mt-1 text-sm text-gray-500 dark:text-gray-500"
								id="file_input_help"
							>
								SVG, PNG, JPG or GIF (MAX. 800x400px).
							</p>
						</div>
						<button type="submit" className="btn btn-primary bg-violet-900">
							Submit
						</button>
					</form>
				</div>
			</div>
			<div className="flex flex-col items-center pt-12">
				<ul className="row dark:text-gray-900">User's Posts</ul>
				<div className="row justify-content-center mt-5">
					<a className="btn btn-primary" href="/">
						Return to Feed
					</a>
				</div>
			</div>
		</div>
	);
};

export default Profile;
