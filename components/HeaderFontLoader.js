import Link from "next/link";
import react from "react";

export default function HeaderFontLoader() {
	return (
		<noscript>
			<Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

			<Link
				rel="preload"
				as="style"
				href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
			/>

			<Link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
				media="print"
				onload="this.media='all'"
			/>

			<noscript>
				<Link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
				/>
			</noscript>
		</noscript>
	);
}
