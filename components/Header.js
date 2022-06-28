import NextImage from "next/image";
import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { Bounded } from "./Bounded";
import { HorizontalDivider } from "./HorizontalDivider";

const Profile = ({ name, description, profilePicture }) => {
	return <h5>profile here</h5>;
};

const NavItem = ({ children }) => {
	return (
		<li className="font-semibold tracking-tight text-slate-800">{children}</li>
	);
};

export const Header = ({
	withDivider = true,
	withProfile = true,
	navigation,
	settings,
}) => {
	// console.log("navigation data label: " + navigation.data.homePageLabel);
	return (
		<div className="grid grid-cols-1 justify-items-right gap-20">
			<nav
				className="w-full 
				flex flex-wrap 
				items-center justify-between py-4
					 text-gray-500 hover:text-gray-700 focus:text-gray-700,text-bold shadow-lg
					 navbar navbar-expand-lg navbar-light
					 "
			>
				<div className="container-fluid w-full flex-wrap items-center justify-between px-6">
					<ul className="navbar-nav flex flex-row pl-0 list-style-none mr-auto ">
						<NavItem className="nav-item p-2">
							<PrismicLink href="/">
								{navigation.data.homePageLabel.label}
							</PrismicLink>
						</NavItem>
						{navigation.data?.links.map((item) => (
							<NavItem key={item.label}>
								<PrismicLink field={item.link}>{item.label}</PrismicLink>
							</NavItem>
						))}
					</ul>
				</div>
				{withProfile && (
					<Profile
						name={settings.data.name}
						description={settings.data.description}
						profilePicture={settings.data.profilePicture}
					/>
				)}
			</nav>

			{withDivider && <HorizontalDivider />}
		</div>
	);
};
