import Select from "react-select";

const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];

const Input = () => (
	<>
		<Select options={options} />
	</>
);

export default Input;
