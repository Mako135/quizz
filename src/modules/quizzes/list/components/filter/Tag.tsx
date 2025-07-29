import type { TagI } from "@modules/quizzes/create/lib";
import { Badge } from "@/shared/ui";

type Props = {
	tag: TagI;
	onChange: () => void;
	checked: boolean;
};

export const Tag = ({ tag, onChange, checked }: Props) => {
	return (
		<label
			key={tag.id}
			htmlFor={tag.name.toString()}
			className="cursor-pointer"
		>
			<input
				type="checkbox"
				className="peer hidden"
				id={tag.name.toString()}
				checked={checked}
				onChange={onChange}
			/>
			<Badge
				className="peer-checked:bg-primary peer-checked:text-white"
				variant="outline"
			>
				{tag.name}
			</Badge>
		</label>
	);
};
