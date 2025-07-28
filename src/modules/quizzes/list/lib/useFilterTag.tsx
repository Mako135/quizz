import { useCallback, useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
import { useFilterStore } from "./useFilterStore";

export const tagList = ["Frontend", "JavaScript", "React", "CSS"];

export const useFilterTag = () => {
	const { tags, addTag, removeTag } = useFilterStore(
		useShallow((state) => {
			const { tags, addTag, removeTag } = state;
			return { tags, addTag, removeTag };
		}),
	);

	const tagsSet = useMemo(() => new Set(tags), [tags]);

	const allTags = useMemo(
		() =>
			tagList
				.map((tag) => ({
					tag,
					checked: tagsSet.has(tag),
				}))
				.sort((a, b) => {
					if (a.checked && !b.checked) return -1;
					if (!a.checked && b.checked) return 1;
					return a.tag.localeCompare(b.tag);
				}),
		[tagsSet],
	);

	const onChange = useCallback(
		(tag: string) => {
			if (tags.includes(tag)) {
				removeTag(tag);
			} else {
				addTag(tag);
			}
		},
		[tags, addTag, removeTag],
	);

	return {
		allTags,
		onChange,
	};
};
