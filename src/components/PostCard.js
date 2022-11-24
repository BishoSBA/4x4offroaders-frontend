import React from "react";
import { Link } from "react-router-dom";

const Postcard = ({ post }) => {
	return (
		<Link to={"/post/" + post._id}>
			<div className="card w-96 bg-base-100 h-full border border-gray-00 shadow-md p-4 hover:scale-105 duration-500">
				<div className="flex bg-base-100 h-full w-full">
					<img
						src={post.image}
						alt="img"
						className="place-self-center w-fit h-fit mx-auto"
					/>
				</div>
				<div className="card-body">
					<h2 className="card-title">{post.title}</h2>
					<div className="card-actions justify-end mt-4">
						<div className="badge badge-primary">LC79</div>
						<div className="badge badge-secondary">Fox</div>
						<div className="badge badge-light">Saudi4x4Center</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Postcard;
