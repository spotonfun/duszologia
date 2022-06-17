import react from "react";
import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient, linkResolver } from "../../prismicio";
import { components } from "../../slices";

import { Layout } from "../../components/Layout";
import { BackButton } from "../../components/BackButton";

// Page for a blog post
const BlogPostPage = ({ post }) => {
	if (!post) {
		return null;
	}

	const title = prismicH.asText(post.data.title) || "Untitled";

	return (
		<Layout>
			<Head>
				<title>{title}</title>
			</Head>
		</Layout>
	);
};

export const getStaticProps = async ({ params, previewData }) => {
	const client = createClient({ previewData });
	const post = await client.getByUID("post", params.uid);

	return {
		propos: {
			post,
		},
	};
};

export const getStaticPaths = async () => {
	const client = createClient();

	const documents = await client.getAllByType("post");

	return {
		paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
		fallback: true,
	};
};

export default BlogPostPage;
