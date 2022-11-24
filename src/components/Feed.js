import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";

const Feed = ({ profile }) => {
	const [posts, setPosts] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		if (!profile) return navigate("/login");

		// fetch the posts from the database
		const getPosts = async () => {
			fetch(process.env.REACT_APP_SERVER_URL + "api/feed")
				.then((response) => response.json())
				.then((data) => {
					// add the posts to an array
					setPosts(
						data.posts.map((post) => {
							return <PostCard key={post._id} post={post}></PostCard>;
						})
					);
				});
		};
		getPosts();
	}, []);

	return (
		<>
			<div className="flex flex-wrap gap-12 p-12 rounded-lg bg-white justify-center">
				{posts}
			</div>
		</>
	);
};

export default Feed;
