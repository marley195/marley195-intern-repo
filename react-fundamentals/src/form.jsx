import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  return (
    <div>
      <h1>Formik Form</h1>
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          resetForm();
          setSubmitting(false);
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string().required("Email is required"),
        })}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" />
            <Field name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
