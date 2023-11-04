import { Formik, Form, Field, ErrorMessage } from "formik";
import { ChangeEvent, ChangeEventHandler, MouseEventHandler } from "react";

const Input = (props: {
  handleSearch: MouseEventHandler<HTMLButtonElement> | any;
  idOne: ChangeEventHandler<HTMLInputElement>;
  idTwo: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <Formik
      initialValues={{ actorActressOne: "", actorActressTwo: "" }}
      validate={(values) => {
        const errors: { actorActressOne: string; actorActressTwo: string } = {
          actorActressOne: "",
          actorActressTwo: "",
        };
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
      {({ values, handleChange, errors, touched, handleBlur }) => (
        <main className="container m-auto p-10 text-center">
          <section className="rounded bg-white p-8">
            <Form>
              <label htmlFor="actorActressOne">Actor/Actress One:</label>
              <Field
                type="text"
                id="actorActressOne"
                name="actorActressOne"
                className={
                  errors.actorActressOne && touched.actorActressOne
                    ? "border border-red-500 bg-white text-gray-700 border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white  mx-4"
                    : "bg-white text-gray-700 border border-gray-500 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mx-4"
                }
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  handleChange(e);
                  props.idOne?.(e);
                }}
                onBlur={handleBlur}
                value={values.actorActressOne}
              />
              <ErrorMessage
                name="actorActressOne"
                component="div"
                className="text-red-500"
              />
              <label htmlFor="actorActressTwo">Actor/Actress Two:</label>
              <Field
                type="text"
                id="actorActressTwo"
                name="actorActressTwo"
                className={
                  errors.actorActressTwo && touched.actorActressTwo
                    ? "border border-red-500 bg-white text-gray-700  border rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white  mx-4"
                    : "bg-white text-gray-700 border border-gray-500 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mx-4"
                }
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  handleChange(e);
                  props.idTwo?.(e);
                }}
                onBlur={handleBlur}
                value={values.actorActressTwo}
              />
              <ErrorMessage
                name="actorActressTwo"
                component="div"
                className="text-red-500"
              />
              <button
                onClick={props.handleSearch}
                type="submit"
                disabled={!values.actorActressOne || !values.actorActressTwo}
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                Find Film(s)
              </button>
            </Form>
          </section>
        </main>
      )}
    </Formik>
  );
};

export default Input;
