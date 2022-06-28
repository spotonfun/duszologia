import Head from "next/head";
import Image from "next/image";
import { createClient } from "../prismicio";
import styles from "../styles/Home.module.css";
import { Link, RichText } from "prismic-reactjs";
import * as prismicH from "@prismicio/helpers";
import { Layout } from "../components/Layout";
import { PrismicLink } from "@prismicio/react";
import { Bounded } from "../components/Bounded";

export default function Home({ page, posts, navigation, settings }) {
	console.log("page: ", page);
	console.log("posts: ", posts);
	let bkgImgSrc = prismicH.asImageSrc(page.data.backgroundImage);
	// let bkgClassName =
	return (
		<Layout
			withHeaderDivider={false}
			withProfile={false}
			navigation={navigation}
			settings={settings}
		>
			<Head>
				<title>{prismicH.asText(page.data.title)}</title>
			</Head>
			<Bounded>
				<h1>
					<RichText render={page.data.title} />
				</h1>
			</Bounded>

			<div className="container mx-auto">
				<h1 className="text-3xl font-bold underline">
					<RichText render={page.data.title} />
				</h1>
				<h3 className="text-xl font-bold">
					page welcome text:
					<RichText render={page.data.welcomeText} />
				</h3>
				<br></br>
				<h2>posts</h2>
				<ul>
					{posts.map((post) => (
						<li key={post.uid}>
							post: {post.data.title}{" "}
							<PrismicLink document={post}>link</PrismicLink>
						</li>
					))}
				</ul>
			</div>
		</Layout>
	);
}

export async function getStaticProps({ previewData }) {
	const client = createClient({ previewData });

	console.log(client);

	const page = await client.getSingle("home-page");
	const navigation = await client.getSingle("navigation");
	const settings = await client.getSingle("settings");
	console.log("page:" + page);
	console.log("navigation:" + navigation);
	console.log("settings" + settings);

	const posts = await client.getAllByType("blog-post");
	// , {
	// 	orderings: [{ field: "blog-post.date", direction: "desc" }],
	// });

	console.log("page uid:" + page.uid);
	return {
		props: {
			page,
			posts,
			navigation,
			settings,
		},
	};
}
