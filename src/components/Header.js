import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ logOut, user }) => {
	const navigate = useNavigate();
	const userImage = user != null ? user.image : "/assets/profile-pic-default.jpg";
	const hidden = user != null ? "" : "hidden";
	return (
		<div className="sticky top-0 navbar bg-gray-900 z-10">
			<div className="flex-1">
				<Link to="/" className="btn btn-ghost normal-case text-xl">
					<img
						src="/assets/vector/default-monochrome-white.svg"
						className="mr-3 h-9"
						alt="4x4offroaders Logo"
					/>
				</Link>
			</div>
			<div className="flex-none">
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img src={userImage} />
						</div>
					</label>
					<ul
						tabIndex={0}
						className={
							"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 " +
							hidden
						}
					>
						<li>
							<a onClick={() => navigate("/profile")}>Profile</a>
						</li>
						<li onClick={logOut}>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
