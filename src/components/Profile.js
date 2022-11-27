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
		<div className="container flex">
			<div className="row mt-5 p-12">
				<div className="col-6">
					<div>
						<p>
							<strong>User Name</strong>: {profile.username}
						</p>
						<p>
							<strong>Email</strong>: {profile.email || "No Email"}
						</p>
					</div>
					<div className="mt-12">
						<h2 className="text-gray-900">Add a post</h2>
						<form
							action={process.env.REACT_APP_SERVER_URL + "api/post/createPost"}
							encType="multipart/form-data"
							method="POST"
						>
							<div className="mb-3">
								<label htmlFor="title" className="form-label">
									Title
								</label>
								<input
									type="text"
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 mt-1 leading-tight focus:outline-none focus:shadow-outline"
									id="title"
									name="title"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="caption" className="form-label">
									Caption
								</label>
								<textarea
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
									id="caption"
									name="caption"
								></textarea>
							</div>
							<div className="mb-3">
								<label htmlFor="imageUpload" className="form-label">
									Image
								</label>
								<input
									type="file"
									className="form-control"
									id="imageUpload"
									name="file"
								/>
							</div>
							<button
								type="submit"
								className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
								value="Upload"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
				<div className="col-6">
					<ul className="row list-unstyled">{posts}</ul>
					<div className="row justify-content-center mt-5">
						<a className="btn btn-primary" href="/">
							Return to Feed
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
