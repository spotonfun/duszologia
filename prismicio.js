import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import sm from "./sm.json";

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
	console.log("linkResolver, doc.type: " + doc.type);
	switch (doc.type) {
		case "blog-post":
			return `/blog/${doc.uid}`;
		case "home-page":
			return "/";
		case "page":
			return `/${doc.uid}`;
		default:
			return null;
	}
}

// This factory function allows smooth preview setup
export function createClient(config = {}) {
	const client = prismic.createClient(sm.endpoint, {
		...config,
	});

	enableAutoPreviews({
		client,
		previewData: config.previewData,
		req: config.req,
	});

	return client;
}
