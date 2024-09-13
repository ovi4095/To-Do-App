import Select from "react-select";

const SelectMode = ({ handleSelectedBy }) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "white",
      color: "black",
      borderColor: "#234C70",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#234C70" : "white",
      color: state.isFocused ? "white" : "black",
      "&:hover": {
        backgroundColor: "#234C70",
        color: "white",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "black",
    }),
  };
  const sortingOptions = [
    {
      value: "All Tasks",
      label: "All Tasks",
    },
    {
      value: "Active Tasks",
      label: "Active Tasks",
    },
    {
      value: "Completed Tasks",
      label: "Completed Tasks",
    },
  ];
  return (
    <section className="sorting">
      <Select
        onChange={(option) => handleSelectedBy(option.value)}
        defaultValue={sortingOptions[0]}
        options={sortingOptions}
        styles={customStyles}
      />
    </section>
  );
};

export default SelectMode;
