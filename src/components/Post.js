import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Comment from "./Comment";

const Post = ({ profile }) => {
	const [post, setPost] = useState({});
	const [postUser, setPostUser] = useState({});
	// const [comments, setComments] = useState([]);
	const postId = useParams().id;

	const navigate = useNavigate();

	useEffect(() => {
		if (!profile) return navigate("/login");

		// fetch the post from the database
		const getPost = async () => {
			fetch(process.env.REACT_APP_SERVER_URL + "api/post/" + postId)
				.then((response) => response.json())
				.then((data) => {
					setPost(data.post);
					setPostUser(data.postUser);
					// setComments(data.comments);
				});
		};
		getPost();
	}, []);

	return (
		<div className="place-self-center p-12 w-4/5 min-w-24">
			<span>{postUser.username}</span>
			<figure>
				<img src={post.image} alt="img" />
			</figure>
			<span>Likes: Plug Likes</span>
			<span>Comments: Plug Comments</span>
			<ul>
				<li>Vehicle: LC79</li>
				<li>Brands: LC79</li>
				<li>Workshops: LC79</li>
			</ul>
			<div>Plug comments</div>
		</div>
	);
};

export default Post;
