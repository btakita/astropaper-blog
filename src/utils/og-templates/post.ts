import { SITE } from "@config";
import type { CollectionEntry } from "astro:content";
import { h } from "./h";
export default (post: CollectionEntry<"blog">) => {
	return h("div", {
		style: {
			background: "#fefbfb",
			width: "100%",
			height: "100%",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		children: [
			h("div", {
				style: {
					position: "absolute",
					top: "-1px",
					right: "-1px",
					border: "4px solid #000",
					background: "#ecebeb",
					opacity: "0.9",
					borderRadius: "4px",
					display: "flex",
					justifyContent: "center",
					margin: "2.5rem",
					width: "88%",
					height: "80%",
				},
			}),
			h("div", {
				style: {
					border: "4px solid #000",
					background: "#fefbfb",
					borderRadius: "4px",
					display: "flex",
					justifyContent: "center",
					margin: "2rem",
					width: "88%",
					height: "80%",
				},
				children: [
					h("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							margin: "20px",
							width: "90%",
							height: "90%",
						},
						children: [
							h("p", {
								style: {
									fontSize: 72,
									fontWeight: "bold",
									maxHeight: "84%",
									overflow: "hidden",
								},
								children: post.data.title,
							}),
							h("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									width: "100%",
									marginBottom: "8px",
									fontSize: 28,
								},
								children: [
									h("span", {
										children: [
											"by ",
											h("span", {
												style: {
													color: "transparent",
												},
												children: '"',
											}),
											h("span", {
												style: {
													overflow: "hidden",
													fontWeight: "bold",
												},
												children: post.data.author,
											}),
										],
									}),
									h("span", {
										style: {
											overflow: "hidden",
											fontWeight: "bold",
										},
										children: SITE.title,
									}),
								],
							}),
						],
					}),
				],
			}),
		],
	});
};
