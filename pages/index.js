import Head from "next/head";
import Image from "next/image";
import { createClient } from "../prismicio";
import { Link, RichText } from "prismic-reactjs";
import * as prismicH from "@prismicio/helpers";
import { Layout } from "../components/Layout";
import { PrismicLink } from "@prismicio/react";
import { Bounded } from "../components/Bounded";
import BlogPostCard from "../components/BlogPostCard";

export default function Home({ page, posts, navigation, settings }) {
	// console.log("page: ", page);
	// console.log("posts: ", posts);
	let logoImgSrc = prismicH.asImageSrc(settings.data.profilePicture);
	let bkgImgUrl = page.data.backgroundImage.url;
	// let bkgClassName =
	// console.log("logoImgSrc: " + logoImgSrc);
	return (
		<Layout
			withHeaderDivider={false}
			withProfile={false}
			navigation={navigation}
			settings={settings}
			style={{ backgroundImage: `url(${bkgImgUrl})` }}
		>
			<Head>
				<title>{settings.data.name}</title>
			</Head>
			<div className="container mx-0 my-0 max-w-full h-auto">
				<div className="relative text-center">
					<Image
						src={logoImgSrc}
						alt={settings.data.profilePicture.alt}
						layout="intrinsic"
						width={246}
						height={80}
					/>
				</div>
				<Bounded size="small" className="text-center text-white">
					<h1 className="text-7xl leading-tight mb-4 pb-4 border-b">
						<RichText render={page.data.title} />
					</h1>
				</Bounded>

				<Bounded size="base" className="">
					<h3 className="text-xl font-light leading-tight text-white italic text-center">
						<RichText render={page.data.welcomeText} />
					</h3>
				</Bounded>

				<div></div>
				<div>
					<h2>posts</h2>
					<ul>
						{posts.map((post) => (
							<li key={post.uid}>
								<BlogPostCard post={post} />
								post: {post.data.title}{" "}
								<PrismicLink document={post}>link</PrismicLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticProps({ previewData }) {
	const client = createClient({ previewData });

	// console.log(client);

	const page = await client.getSingle("home-page");
	const navigation = await client.getSingle("navigation");
	const settings = await client.getSingle("settings");
	// console.log("page:" + page);
	// console.log("navigation:" + navigation);
	// console.log("settings" + settings);

	const posts = await client.getAllByType("blog-post");
	// , {
	// 	orderings: [{ field: "blog-post.date", direction: "desc" }],
	// });

	// console.log("page uid:" + page.uid);
	return {
		props: {
			page,
			posts,
			navigation,
			settings,
		},
	};
}
