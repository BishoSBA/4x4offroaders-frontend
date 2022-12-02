import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";
import Loading from "./Loading";

const Feed = ({ profile }) => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (!profile) return navigate("/login");

		// fetch the posts from the database
		const getPosts = async () => {
			setIsLoading(true);
			fetch(process.env.REACT_APP_SERVER_URL + "api/feed")
				.then((response) => response.json())
				.then((data) => {
					// add the posts to an array
					setPosts(
						data.posts.map((post) => {
							return <PostCard key={post._id} post={post}></PostCard>;
						})
					);
					setIsLoading(false);
				});
		};
		getPosts();
	}, []);

	return (
		<>
			<div className="flex flex-wrap gap-12 p-12 rounded-lg bg-white justify-center">
				{isLoading ? Loading : posts}
			</div>
		</>
	);
};

export default Feed;
