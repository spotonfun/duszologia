import react from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import * as prismicH from "@prismicio/helpers";

export const Layout = ({
	navigation,
	settings,
	withBackground,
	withLogo,
	withProfile,
	withSignUpForm,
	children,
	style,
}) => {
	// let logoImgSrc = prismicH.asImageSrc(settings.data.profilePicture);
	console.log(settings);
	return (
		<div className="text-slate-700" style={style}>
			<Header
				withProfile={withProfile}
				withBackground={withBackground}
				withLogo={withLogo}
				navigation={navigation}
				settings={settings}
			/>

			<main>{children}</main>
			<Footer withSignUpForm={withSignUpForm} settings={settings} />
		</div>
	);
};
