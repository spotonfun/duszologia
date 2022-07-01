import React from "react";
import { RichText } from "prismic-reactjs";
import { PrismicRichText } from "@prismicio/react";
import { Bounded } from "../../components/Bounded";

const Text = ({ slice }) => (
	<Bounded size="medium" className="p-10 text-base">
		<PrismicRichText field={slice.primary.text} />
	</Bounded>
);

export default Text;
