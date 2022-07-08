import react from "react";
import Head from "next/head";
import { PrismicText, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient, linkResolver } from "../../prismicio";
import { components } from "../../slices";

import { Layout } from "../../components/Layout";
import { BackButton } from "../../components/BackButton";
import { Bounded } from "../../components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
// importy PrismicNextImage

const dateFormatter = new Intl.DateTimeFormat("pl-PL", {
	month: "short",
	day: "numeric",
	year: "numeric",
});

// Page for a blog post
export default function BlogPostPage({ post, navigation, settings }) {
	if (!post) {
		return null;
	}

	console.log(navigation);
	console.log(settings);
	console.log(post);

	console.log(post.data.title);
	// const title = prismicH.asText(post.data.title) || "Untitled";
	// console.log(title);

	const date = prismicH.asDate(
		post.data.publishDate
		//  || post.first_publication_date
	);

	return (
		<Layout
			withHeaderDivider={false}
			withProfile={false}
			navigation={navigation}
			settings={settings}
		>
			<Head>
				<title>{post.data.title}</title>
			</Head>

			<article>
				<div className="m-auto max-h-150">
					<PrismicNextImage
						field={post.data.featuredImage}
						imgixParams={{
							fit: "fillmax",
							fill: "solid",
							// crop: "entropy",

							// h: 150,
						}}
						// className="rounded-t-lg"
						// src={post.data.featuredImage.url}
						// alt={post.data.featuredImage.alt}
						width="100%"
						height="150"
						// layout="responsive"
					/>
				</div>
				<Bounded className="pb-0">
					<h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
						{post.data.title}
					</h1>
					<p className="font-serif italic tracking-tighter text-slate-500">
						{dateFormatter.format(date)}
					</p>
				</Bounded>
				<SliceZone slices={post.data.slices} components={components} />
			</article>
		</Layout>
	);
}

export const getStaticProps = async ({ params, previewData }) => {
	const client = createClient({ previewData });
	console.log("params: " + params);

	const post = await client.getByUID("blog-post", params.uid);
	const navigation = await client.getSingle("navigation");
	const settings = await client.getSingle("settings");
	console.log(navigation);
	console.log(settings);
	console.log(post);

	return {
		props: {
			post,
			navigation,
			settings,
		},
	};
};

export const getStaticPaths = async () => {
	const client = createClient();

	const documents = await client.getAllByType("blog-post");

	return {
		paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
		fallback: true,
	};
};
