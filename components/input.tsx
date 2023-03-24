import { ChangeEventHandler, MouseEventHandler } from "react";
import { Formik } from "formik";

const initialValues = {
  actorActressOne: undefined,
  actorActressTwo: undefined,
};

const validate = (values: any) => {
  let errors: any = {};

  if (!values.actorActressOne) errors.actorActressOne = "number one reqired";
  if (!values.actorActressTwo) errors.actorActressTwo = "number two required";

  return errors;
};

const Input = (props: {
  handleSearch: MouseEventHandler<HTMLButtonElement> | any;
  idOne: ChangeEventHandler<HTMLInputElement>;
  idTwo: ChangeEventHandler<HTMLInputElement>;
  ErrorOne: string | undefined;
  ErrorTwo: string | undefined;
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={props.handleSearch}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
        } = formik;
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
                onChange={props.idOne}
                onBlur={handleBlur}
              />
              {errors.actorActressOne && <p>{errors.actorActressOne}</p>}
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
                onChange={props.idTwo}
                onBlur={handleBlur}
              />
              {errors.actorActressTwo && touched.actorActressTwo && (
                <p>{errors.actorActressTwo}</p>
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
