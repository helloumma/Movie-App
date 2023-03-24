import { ChangeEventHandler, MouseEventHandler } from "react";
import { Formik } from "formik";

const Input = (props: {
  handleSearch: MouseEventHandler<HTMLButtonElement> | any;
  idOne: ChangeEventHandler<HTMLInputElement>;
  idTwo: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <Formik
      initialValues={{ actorActressOne: "", actorActressTwo: "" }}
      validate={(values) => {
        const errors: any = {};
        if (!values.actorActressOne) {
          errors.actorActressOne = "Actor/Actress One is required";
        }
        if (!values.actorActressTwo) {
          errors.actorActressTwo = "Actor/Actress Two is required";
        }
        return errors;
      }}
      onSubmit={props.handleSearch}
    >
      {(formik) => {
        const { values, handleChange, errors, touched, handleBlur } = formik;
        return (
          <main className="container m-auto p-10 text-center">
            <section className="rounded bg-white p-8">
              <label htmlFor="actorActressOne">Actor/Actress One:</label>
              <input
                type="text"
                id="actorActressOne"
                name="actorActressOne"
                className={
                  errors.actorActressOne && touched.actorActressOne
                    ? "border border-red-500 bg-white text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white  mx-4"
                    : "bg-white text-gray-700 border border-gray-500 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mx-4"
                }
                onChange={(e) => {
                  handleChange(e);
                  props.idOne?.(e); // call props.idOne if it exists
                }}
                onBlur={handleBlur}
                value={values.actorActressOne}
              />
              {errors.actorActressOne && (
                <p className="text-red-500">{errors.actorActressOne}</p>
              )}
              <label htmlFor="actorActressTwo">Actor/Actress Two:</label>
              <input
                type="text"
                id="actorActressTwo"
                name="actorActressTwo"
                className={
                  errors.actorActressTwo && touched.actorActressTwo
                    ? "border border-red-500 bg-white text-gray-700  border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white  mx-4"
                    : "bg-white text-gray-700 border border-gray-500 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mx-4"
                }
                onChange={(e) => {
                  handleChange(e);
                  props.idTwo?.(e);
                }}
                onBlur={handleBlur}
                value={values.actorActressTwo}
              />
              {errors.actorActressTwo && touched.actorActressTwo && (
                <p className="text-red-500">{errors.actorActressTwo}</p>
              )}
              <button
                onClick={props.handleSearch}
                type="submit"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                Find Film(s)
              </button>
            </section>
          </main>
        );
      }}
    </Formik>
  );
};
export default Input;
