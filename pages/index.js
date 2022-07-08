import Head from "next/head";
import Image from "next/image";
import { createClient } from "../prismicio";
import { Link, RichText, Text } from "prismic-reactjs";
import * as prismicH from "@prismicio/helpers";
import { Layout } from "../components/Layout";
import { PrismicLink } from "@prismicio/react";
import { Bounded } from "../components/Bounded";
import BlogPostCard from "../components/BlogPostCard";
import { PrismicText } from "@prismicio/react";
// import HeaderFontLoader from "../components/HeaderFontLoader";

export default function Home({ page, posts, navigation, settings }) {
	console.log("page: ", page);
	// console.log("posts: ", posts);
	let logoImgSrc = prismicH.asImageSrc(settings.data.profilePicture);
	let bkgImgUrl = page.data.backgroundImage.url;
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
			<div className="container mx-0 my-0 max-w-full h-auto text-center">
				<div className="relative text-center max-w-[350px] justify-center m-auto">
					<Image
						src={logoImgSrc}
						alt={settings.data.profilePicture.alt}
						layout="responsive"
						width={350}
						height={123}
					/>
				</div>
				<Bounded size="small" className="text-center  ">
					<h1 className="text-7xl leading-tight mb-4 pb-4 border-b font-serif text-white">
						{page.data.title}
					</h1>
				</Bounded>

				<Bounded size="base" className="">
					<h3 className="text-xl font-sans text-center text-white">
						<RichText render={page.data.welcomeText} />
					</h3>
				</Bounded>

				{
					// Button
				}
				<Bounded size="basic" className="text-center">
					<button
						type="button"
						className="inline-block px-12 py-2.5 bg-purple800 text-white  font-mali text-xl uppercase rounded-full shadow-md hover:bg-purple450 hover:shadow-lg focus:bg-purple450 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
					>
						<PrismicLink href="/blog">Blog</PrismicLink>
					</button>
				</Bounded>
				{
					// horizontal divider
				}
				<Bounded size="small" className="border-b mx-20">
					&nbsp;
				</Bounded>
				{
					// blog posts
				}
				<Bounded size="wide">
					<div className="mb-4">
						<h3 className="text-xl font-bold leading-tight text-white italic text-left">
							Artykuły
						</h3>
					</div>
					<div>
						<ul className="flex flex-column justify-start flex-wrap">
							{posts.map((post) => (
								<li key={post.uid} className="pr-4 pb-4">
									<BlogPostCard post={post} />
								</li>
							))}
						</ul>
					</div>
				</Bounded>
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

	const posts = await client.getAllByType(
		"blog-post", //);
		{
			orderings: [{ field: "blog-post.data.publishDate", direction: "desc" }],
		}
	);

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
