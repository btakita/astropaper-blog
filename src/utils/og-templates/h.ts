import type { HTMLAttributes, ReactNode } from "react";
export function h(type: string, props: HTMLAttributes<Element>) {
	return {
		type,
		props,
	} as ReactNode;
}
