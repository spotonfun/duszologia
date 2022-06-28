import Head from "next/head";
import Image from "next/image";
import { createClient } from "../prismicio";
import styles from "../styles/Home.module.css";
import { Link, RichText } from "prismic-reactjs";
import * as prismicH from "@prismicio/helpers";
import { PrismicLink } from "@prismicio/react";

export default function Blog({ page, posts, navigation, settings }) {
	console.log("page: ", page);
	console.log("posts: ", posts);
	// let bkgImgSrc = prismicH.asImageSrc(page.data.backgroundImage);
	// let bkgClassName =
	return (
		<div className="container mx-auto">
			<h1 className="text-3xl font-bold underline">
				<RichText render={page.data.title} />
			</h1>
			<h3 className="text-xl font-bold">
				page welcome text:
				<RichText render={page.data.description} />
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
	);
}

export async function getStaticProps({ previewData }) {
	const client = createClient({ previewData });

	console.log(client);

	const page = await client.getSingle("blog-main-page");
	const navigation = await client.getSingle("navigation");
	const settings = await client.getSingle("settings");
	console.log(page);
	const posts = await client.getAllByType("blog-post");
	// , {
	// 	orderings: [{ field: "blog-post.date", direction: "desc" }],
	// });
	return {
		props: {
			page,
			posts,
			navigation,
			settings,
		},
	};
}
