import React from "react";
import { RichText } from "prismic-reactjs";

const BlogText = ({ slice }) => (
	<section>
		<span className="title">
			{slice.primary.title ? (
				<RichText render={slice.primary.title} />
			) : (
				<h2>Template slice, update me! {slice.primary.title}</h2>
			)}
		</span>
		{slice.primary.description ? (
			<RichText render={slice.primary.description} />
		) : (
			<p>{slice.primary.text}</p>
		)}
		<style jsx>{`
			section {
				max-width: 600px;
				margin: 4em auto;
				text-align: center;
			}
			.title {
				color: #8592e0;
			}
		`}</style>
	</section>
);

export default BlogText;
