const Input = (props: { handleSearch: any; idOne: any; idTwo: any }) => {
  return (
    <main>
      <section>
        <label htmlFor="actorActressOne">Actor/Actress One:</label>
        <input type="text" id="actorActressOne" onChange={props.idOne} />
        <label htmlFor="actorActressTwo">Actor/Actress Two:</label>
        <input type="text" id="actorActressOne" onChange={props.idTwo} />
      </section>
      <button
        onClick={props.handleSearch}
        type="submit"
        className="submit-button"
      >
        Find Film(s)
      </button>
    </main>
  );
};
export default Input;
