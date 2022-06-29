import Head from "next/head";
import Image from "next/image";
import { createClient } from "../../prismicio";
import { Link, RichText } from "prismic-reactjs";
import * as prismicH from "@prismicio/helpers";
import { PrismicLink } from "@prismicio/react";
import { Layout } from "../../components/Layout";
import { Bounded } from "../../components/Bounded";
import BlogPostCard from "../../components/BlogPostCard";

export default function Blog({ page, posts, navigation, settings }) {
	console.log("page: ", page);
	let bkgImgUrl = page.data.backgroundImage.url;
	return (
		<Layout
			withBackground={true}
			withProfile={false}
			navigation={navigation}
			settings={settings}
			style={{ backgroundImage: `url(${bkgImgUrl})`, backgroundSize: "cover" }}
		>
			<Head>
				<title>{page.data.title}</title>
			</Head>
			<Bounded>
				<h1 className="text-3xl leading-tight mb-4 pb-4 border-b">
					{page.data.title}
				</h1>
			</Bounded>
			<Bounded>
				<p>
					<RichText render={page.data.description}></RichText>
				</p>
			</Bounded>
			<Bounded>
				<Bounded size="base" className="">
					<h3 className="text-xl font-bold leading-tight text-white italic text-left">
						Artykuły
					</h3>
				</Bounded>
				<Bounded size="base">
					<div className="flex flex-row justify-start">
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
				</Bounded>
			</Bounded>
		</Layout>
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
