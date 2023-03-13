import { ChangeEventHandler, MouseEventHandler } from "react";

const Input = (props: {
  handleSearch: MouseEventHandler<HTMLButtonElement>;
  idOne: ChangeEventHandler<HTMLInputElement>;
  idTwo: ChangeEventHandler<HTMLInputElement>;
  ErrorOne: string | undefined;
  ErrorTwo: string | undefined;
}) => {
  return (
    <main className="input-section">
      <section className="form-section">
        <label htmlFor="actorActressOne">Actor/Actress One:</label>
        <input
          type="text"
          id="actorActressOne"
          className={props.ErrorOne}
          onChange={props.idOne}
        />
        <label htmlFor="actorActressTwo">Actor/Actress Two:</label>
        <input
          type="text"
          id="actorActressOne"
          className={props.ErrorTwo}
          onChange={props.idTwo}
        />
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
