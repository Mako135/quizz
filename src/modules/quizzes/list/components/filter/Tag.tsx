import { Badge } from "@/shared/ui";

type Props = {
	tag: string;
	onChange: () => void;
	checked: boolean;
};

export const Tag = ({ tag, onChange, checked }: Props) => {
	return (
		<label key={tag} htmlFor={tag.toLowerCase()} className="cursor-pointer">
			<input
				type="checkbox"
				className="peer hidden"
				id={tag.toLowerCase()}
				checked={checked}
				onChange={onChange}
			/>
			<Badge
				className="peer-checked:bg-primary peer-checked:text-white"
				variant="outline"
			>
				{tag}
			</Badge>
		</label>
	);
};
