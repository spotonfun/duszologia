import clsx from "clsx";

export const Bounded = ({
	as: Comp = "div",
	size = "base",
	className,
	children,
}) => {
	return (
		<Comp className={clsx("x-4 py-8 md:py-10 lg:py-12", className)}>
			<div
				className={clsx(
					"mx-auto w-full",
					size === "xsmall" && "max-w-l",
					size === "small" && "max-w-xl",
					size === "base" && "max-w-3xl",
					size === "wide" && "max-w-4xl",
					size === "widest" && "max-w-6xl"
				)}
			>
				{children}
			</div>
		</Comp>
	);
};
