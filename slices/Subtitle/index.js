import React from "react";
import { RichText } from "prismic-reactjs";
import { PrismicRichText } from "@prismicio/react";
import { Bounded } from "../../components/Bounded";

const Subtitle = ({ slice }) => (
	<Bounded className="p-5 text-gray-500 font-spectral bold text-xxl">
		<PrismicRichText field={slice.primary.title} />
	</Bounded>
);

export default Subtitle;
