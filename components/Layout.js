import react from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({
	navigation,
	settings,
	withHeaderDivider,
	withProfile,
	withSignUpForm,
	children,
	style,
}) => {
	return (
		<div className="text-slate-700" style={style}>
			<Header
				withProfile={withProfile}
				withDivider={withHeaderDivider}
				navigation={navigation}
				settings={settings}
			/>

			<main>{children}</main>
			<Footer withSignUpForm={withSignUpForm} settings={settings} />
		</div>
	);
};
