import type { Control, FieldValues, Path } from "react-hook-form";
import {
	FormControl,
	FormDescription,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	FormField as UIFormField,
} from "../../ui";
import type { FieldConfig } from "./dynamic-form";

type CustomFormFieldProps<T extends FieldValues> = {
	fieldName: string;
	control: Control<T>;
	config: FieldConfig;
};

export const FormField = <T extends FieldValues>({
	fieldName,
	control,
	config,
}: CustomFormFieldProps<T>) => {
	return (
		<UIFormField
			control={control}
			name={fieldName as Path<T>}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{config.label}</FormLabel>
					<FormControl>
						<Input
							type={config.type || "text"}
							placeholder={config.placeholder}
							value={field.value?.toString() ?? ""}
							onChange={field.onChange}
							onBlur={field.onBlur}
							name={field.name}
							ref={field.ref}
						/>
					</FormControl>
					{config.description && (
						<FormDescription>{config.description}</FormDescription>
					)}
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
