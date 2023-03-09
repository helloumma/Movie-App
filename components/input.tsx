import Select from "react-select";

interface Data {
	value: string;
	label: string;
}

const options: Data[] = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];

const Input = () => (
	<>
		<Select options={options} isMulti />
	</>
);

export default Input;
