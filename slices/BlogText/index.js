import React from "react";
import { RichText } from "prismic-reactjs";
import { PrismicRichText } from "@prismicio/react";
import { Bounded } from "../../components/Bounded";

const BlogText = ({ slice }) => (
	<Bounded size="medium" className="text-base px-10">
		<PrismicRichText field={slice.primary.text} />
	</Bounded>
);

export default BlogText;
