"use client";

import { Skeleton } from "@shared/ui/skeleton";
import { BadgeCheck, ChevronsUpDown, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { useUserData } from "../lib/api";

export function NavUser() {
	const { data, isLoading } = useUserData();

	if (isLoading) {
		return <Skeleton className="h-8 w-32 rounded-lg" />;
	}

	if (!data) {
		return <div>No user data available</div>;
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex items-center gap-2 px-2.5 md:px-2 cursor-pointer">
				<Avatar className="h-8 w-8 rounded-lg">
					<AvatarImage src={data?.avatar} alt={data?.full_name} />
					<AvatarFallback className="rounded-lg uppercase">
						{data?.full_name.charAt(0)}
					</AvatarFallback>
				</Avatar>
				<div className="grid flex-1 text-left text-sm leading-tight">
					<span className="truncate font-medium">{data?.full_name}</span>
					<span className="truncate text-xs">{data?.username}</span>
				</div>
				<ChevronsUpDown className="ml-auto size-4" />
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
				align="end"
				sideOffset={4}
			>
				<DropdownMenuLabel className="p-0 font-normal">
					<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
						<Avatar className="h-8 w-8 rounded-lg">
							<AvatarImage src={data?.avatar} alt={data?.full_name} />
							<AvatarFallback className="rounded-lg uppercase">
								{data?.full_name.charAt(0)}
							</AvatarFallback>
						</Avatar>
						<div className="grid flex-1 text-left text-sm leading-tight">
							<span className="truncate font-medium">{data?.full_name}</span>
							<span className="truncate text-xs">{data?.username}</span>
						</div>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />

				<DropdownMenuGroup>
					<DropdownMenuItem>
						<BadgeCheck />
						Account
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<LogOut />
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
