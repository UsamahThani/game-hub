import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
	onSelectSortOrder: (sortOrder: string) => void;
	sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
	const sortOrders = [
		{ value: "", label: "Relenvance" },
		{ value: "-added", label: "Date Added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release Date" },
		{ value: "=metacritic", label: "Popularity" },
		{ value: "-rating", label: "Average Rating" },
	];

	const currentSortOrder = sortOrders.find((order) => order.value === sortOrder);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order By: {currentSortOrder?.label || 'Relevance'}
			</MenuButton>
			<MenuList>
				{sortOrders.map((sort) => (
					<MenuItem
						onClick={() => onSelectSortOrder(sort.value)}
						key={sort.value}
						value={sort.value}
					>
						{sort.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
