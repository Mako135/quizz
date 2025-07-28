"use client";

import { useFilterTag } from "../../lib";
import { Tag } from "./Tag";

export const FilterTag = () => {
	const { allTags, onChange } = useFilterTag();

	return (
		<div className="flex flex-wrap items-center gap-2 my-2">
			{allTags.map(({ tag, checked }) => (
				<Tag
					key={tag}
					tag={tag}
					checked={checked}
					onChange={() => onChange(tag)}
				/>
			))}
		</div>
	);
};
