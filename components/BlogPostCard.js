import Image from "next/image";
import { PrismicLink } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

export default function BlogPostCard({ post }) {
	console.log("[BlogPostCard] post=" + post);
	// console.log("featuredImageAlt=" + coverImageAlt);
	return (
		<div className="flex justify-center">
			<div className="rounded-lg shadow-lg bg-white max-w-sm">
				<PrismicLink document={post}>
					{
						// <Image
						// className="rounded-t-lg"
						// src={prismicH.asImageSrc(post.data.featuredImage.src)}
						// alt={post.data.featuredImage.alt}
						// layout="fill"
						// />
					}
				</PrismicLink>
				<div className="p-6">
					<h5 className="text-gray-900 text-xl font-medium mb-2">
						{post.title}
					</h5>
					<p className="text-gray-700 text-base mb-4">{post.incentive}</p>
					<button
						type="button"
						className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
					>
						Read more...
					</button>
				</div>
			</div>
		</div>
	);
}