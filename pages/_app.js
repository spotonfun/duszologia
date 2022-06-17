import { PrismicPreview } from "@prismicio/next";
import { PrismicProvider } from "@prismicio/react";
import { linkResolver, repositoryName } from "../prismicio";
import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<PrismicProvider
			linkResolver={linkResolver}
			internalLinkComponent={({ href, children, ...props }) => (
				<Link href={href}>
					<a {...props}>{children}</a>
				</Link>
			)}
		>
			<PrismicPreview repositoryName={repositoryName}>
				<Component {...pageProps} />
			</PrismicPreview>
		</PrismicProvider>
	);
}

export default MyApp;
