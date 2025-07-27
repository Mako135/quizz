"use client";

import { useState } from "react";
import { Badge } from "@/shared/ui/badge";

const tags = ["Frontend", "JavaScript", "React", "CSS"];

export const FilterTag = () => {
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	return (
		<div className="flex flex-wrap items-center gap-2 my-2">
			{selectedTags.map((tag) => (
				<label key={tag} htmlFor={tag.toLowerCase()} className="cursor-pointer">
					<input
						type="checkbox"
						className="peer hidden"
						id={tag.toLowerCase()}
						checked={selectedTags.includes(tag)}
						onChange={() => {
							if (selectedTags.includes(tag)) {
								setSelectedTags(selectedTags.filter((t) => t !== tag));
							} else {
								setSelectedTags([...selectedTags, tag]);
							}
						}}
					/>
					<Badge
						className="peer-checked:bg-primary peer-checked:text-white"
						variant="outline"
					>
						{tag}
					</Badge>
				</label>
			))}

			{tags
				.filter((tag) => !selectedTags.includes(tag))
				.map((tag) => (
					<label
						key={tag}
						htmlFor={tag.toLowerCase()}
						className="cursor-pointer"
					>
						<input
							type="checkbox"
							className="peer hidden"
							id={tag.toLowerCase()}
							checked={selectedTags.includes(tag)}
							onChange={() => {
								if (selectedTags.includes(tag)) {
									setSelectedTags(selectedTags.filter((t) => t !== tag));
								} else {
									setSelectedTags([...selectedTags, tag]);
								}
							}}
						/>
						<Badge
							className="peer-checked:bg-primary peer-checked:text-white"
							variant="outline"
						>
							{tag}
						</Badge>
					</label>
				))}
		</div>
	);
};
