import { slugifyStr } from "@utils/slugify.ts";
import { Show, type VoidProps } from "solid-js";
import { Datetime } from "./Datetime.tsx";
import type { CollectionEntry } from "astro:content";
export interface Props {
	href?: string;
	frontmatter: CollectionEntry<"blog">["data"];
	secHeading?: boolean;
}
export function Card(
	$p: VoidProps<{
		href?: string;
		frontmatter: CollectionEntry<"blog">["data"];
		secHeading?: boolean;
	}>
) {
	//	{ href, frontmatter, secHeading = true }
	const href = $p.href;
	const frontmatter = $p.frontmatter;
	const secHeading = $p.secHeading;
	const title = frontmatter.title;
	const pubDatetime = frontmatter.pubDatetime;
	const description = frontmatter.description;
	const headerProps = {
		style: { viewTransitionName: slugifyStr(title) },
		className: "text-lg font-medium decoration-dashed hover:underline",
	};
	return (
		<li class="my-6">
			<a
				href={href}
				class="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
			>
				<Show when={secHeading} fallback={<h3 {...headerProps}>{title}</h3>}>
					<h2 {...headerProps}>{title}</h2>
				</Show>
			</a>
			<Datetime datetime={pubDatetime} />
			<p>{description}</p>
		</li>
	);
}
