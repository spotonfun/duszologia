import React from "react";
import { RichText } from "prismic-reactjs";
import { PrismicRichText } from "@prismicio/react";
import { Bounded } from "../../components/Bounded";

const Text = ({ slice }) => (
	<div className="x-4 mx-auto w-full text-base max-w-3xl">
		<PrismicRichText field={slice.primary.text} />
	</div>
);

export default Text;
