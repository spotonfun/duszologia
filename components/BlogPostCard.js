import Image from "next/image";
import { PrismicLink } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

export default function BlogPostCard({ post }) {
	console.log(post);
	// console.log("featuredImageAlt=" + coverImageAlt);
	// let imgSrc = prismicH.asImageSrc(post.data.featuredImage);
	console.log(post.data.featuredImage.url);
	console.log(post.data.featuredImage.width);
	console.log(post.data.featuredImage.height);

	return (
		<div className="flex justify-center">
			<div className="relative flex flex-col justify-center rounded-lg shadow-lg bg-violet-300 w-[300px]">
				<PrismicLink document={post}>
					<Image
						className="rounded-t-lg"
						src={post.data.featuredImage.url}
						alt={post.data.featuredImage.alt}
						width={200}
						height={150}
						layout="responsive"
					/>
				</PrismicLink>
				<div className="p-6">
					<h5 className="text-gray-900 text-xl font-medium mb-2">
						{post.data.title}
					</h5>
					<p className="text-gray-700 text-base mb-4">{post.data.incentive}</p>
					<button
						type="button"
						className=" inline-block px-6 py-2.5 bg-violet-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
					>
						<PrismicLink document={post}>Read more...</PrismicLink>
					</button>
				</div>
			</div>
		</div>
	);
}
