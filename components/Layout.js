import react from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = ({
	navigation,
	settings,
	withHeaderDivider,
	withProfile,
	withSignUpForm,
	children,
}) => {
	return (
		<div className="text-slate-700">
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

export default Layout;