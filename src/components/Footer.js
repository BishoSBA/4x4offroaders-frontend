import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bottom-0 p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
			<div className="sm:flex sm:items-center sm:justify-between">
				<Link to="/" className="flex items-center mb-4 sm:mb-0">
					<img
						src="/assets/vector/default-monochrome-white.svg"
						className="mr-3 h-8"
						alt="4x4offroaders Logo"
					/>
					{/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						4x4offroaders
					</span> */}
				</Link>
				<ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6 ">
							About
						</a>
					</li>
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6">
							Privacy Policy
						</a>
					</li>
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6 ">
							Licensing
						</a>
					</li>
					<li>
						<a href="#" className="hover:underline">
							Contact
						</a>
					</li>
				</ul>
			</div>
			<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
			<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
				© 2022{" "}
				<a
					href="https://github.com/BishoSBA/4x4offroaders-frontend"
					target="_blank"
					className="hover:underline"
				>
					4x4Offroaders™
				</a>
				. All Rights Reserved.
			</span>
			<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
				{" "}
				Created By:{" "}
				<a href="https://github.com/BishoSBA" target="_blank" className="hover:underline">
					Beshir Saeed
				</a>
				.
			</span>
		</footer>
	);
};

export default Footer;
