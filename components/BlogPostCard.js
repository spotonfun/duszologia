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
			<div className="relative flex flex-col justify-center rounded-lg shadow-lg bg-purple650 w-[270px]">
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
				<div className="p-6 h-56 flex flex-col">
					<h5 className="text-purple100 text-xl font-medium mb-2">
						{post.data.title}
					</h5>
					<div className="text-gray-300 text-base mb-4 flex flex-1 ">
						<p className="break-normal truncate">{post.data.incentive}</p>
					</div>
					<button
						type="button"
						className=" inline-block px-6 py-2.5 bg-purple400 text-gray-300 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple250 hover:shadow-lg focus:bg-purple250 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple250 active:shadow-lg transition duration-150 ease-in-out"
					>
						<PrismicLink document={post}>Czytaj dalej...</PrismicLink>
					</button>
				</div>
			</div>
		</div>
	);
}
