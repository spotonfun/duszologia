import React from "react";
import { RichText } from "prismic-reactjs";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { Bounded } from "../../components/Bounded";

const Quote = ({ slice }) => (
	<Bounded size="small">
		<div className="font-bitter text-left text-xl italic medium">
			<PrismicRichText field={slice.primary.quote} />
		</div>
		<div className="text-right italic font-mali text-xs font-light">
			{"-" + slice.primary.source}
		</div>
	</Bounded>
);

export default Quote;
