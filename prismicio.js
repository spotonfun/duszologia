import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import sm from "./sm.json";
import secret from "./secret.json";

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);
console.log(repositoryName);
const apiToken = secret.apiToken;

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
	console.log("linkResolver, doc.type: " + doc.type);
	switch (doc.type) {
		case "home-page":
			return "/";
		case "blog-post":
			return `/blog/${doc.uid}`;
		case "blog-home-page":
			return `/blog/`;
		// case "page":
		// 	return `/${doc.uid}`;
		default:
			return null;
	}
}

// This factory function allows smooth preview setup
export function createClient(
	config = {
		/*acessToken: apiToken, ref: "Master" */
	}
) {
	const client = prismic.createClient(repositoryName, {
		...config,
	});

	enableAutoPreviews({
		client,
		previewData: config.previewData,
		req: config.req,
	});

	return client;
}
