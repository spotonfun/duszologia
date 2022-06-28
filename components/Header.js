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
	console.log("navigation data label: " + navigation.data.label);
	return (
		<Bounded as="header">
			<div className="grid grid-cols-1 justify-items-center gap-20">
				<nav>
					<ul className="flex flex-wrap justify-center gap-10">
						<NavItem>
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
				</nav>
				{withProfile && (
					<Profile
						name={settings.data.name}
						description={settings.data.description}
						profilePicture={settings.data.profilePicture}
					/>
				)}
				{withDivider && <HorizontalDivider />}
			</div>
		</Bounded>
	);
};
