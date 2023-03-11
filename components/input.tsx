const Input = (props: { handleSearch: any; idOne: any; idTwo: any }) => {
  return (
    <>
      <div>
        <label htmlFor="id1">ID 1:</label>
        <input type="text" id="id1" onChange={props.idOne} />
      </div>
      <div>
        <label htmlFor="id2">ID 2:</label>
        <input type="text" id="id2" onChange={props.idTwo} />
      </div>
      <button onClick={props.handleSearch}>Search</button>
    </>
  );
};
export default Input;
