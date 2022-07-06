import NextImage from "next/image";
import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { Bounded } from "./Bounded";
import { HorizontalDivider } from "./HorizontalDivider";
import Image from "next/image";

const Profile = ({ name, description, profilePicture }) => {
	return <h5>profile here</h5>;
};

const NavItem = ({ children }) => {
	return (
		<li className="font-semibold tracking-tight text-slate-400 pr-4">
			{children}
		</li>
	);
};

export const Header = ({
	withBackground = false,
	withLogo = true,
	withProfile = true,
	navigation,
	settings,
}) => {
	// console.log("navigation data label: " + navigation.data.homePageLabel);
	console.log(settings.data.profilePicture);
	return (
		<nav
			className={
				withBackground
					? "bg-purple950 relative w-full  flex flex-wrap items-center justify-between py-4 text-purple150 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light "
					: "bg-transparent relative w-full  flex flex-wrap items-center justify-between py-4 text-purple150 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light"
			}
		>
			<div className="container-fluid w-full flex-wrap items-center justify-between px-6">
				<ul className="navbar-nav flex flex-row pl-0 list-style-none mr-auto ">
					<NavItem className="nav-item">
						<PrismicLink
							href="/"
							className={
								withBackground
									? "nav-link text-purple150 hover:text-gray-400 focus:text-gray-400 p-0"
									: "nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
							}
						>
							{navigation.data.homePageLabel.label}
						</PrismicLink>
					</NavItem>
					{navigation.data?.links.map((item) => (
						<NavItem key={item.label}>
							<PrismicLink
								field={item.link}
								className={
									withBackground
										? "nav-link text-text-purple150 hover:text-gray-400 focus:text-gray-400 p-0"
										: "nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
								}
							>
								{item.label}
							</PrismicLink>
						</NavItem>
					))}
				</ul>
			</div>
			{withProfile && (
				<div className="flex items-center relative">
					<Profile
						name={settings.data.name}
						description={settings.data.description}
						profilePicture={settings.data.profilePicture}
					/>
				</div>
			)}
		</nav>
	);
};
