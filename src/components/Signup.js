/////////// IMPORTS
///
// import classes from './Signup.module.css'
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "./TextField";
///
/////////// HELPER FUNCTIONS
///

///
/////////// HELPER VARIABLES
///

export const Signup = () => {
  /////////// VARIABLES
  ///
  const validatingSchema = Yup.object({
      firstName: 
      Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("First Name is required"),
      lastName: 
      Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Last Name is required"),
      email: 
      Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
      password: 
      Yup.string()
      .min(6, "Must be 6 characters or more")
      .required("Password is required"),
      confirmPassword: 
      Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
      gender: Yup.string().required("Gender is required")

  });
  ///
  /////////// STATES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///

  ///
  /////////// SIDE EFFECTS
  ///

  ///
  /////////// IF CASES
  ///

  ///
  /////////// EVENTS
  ///

  ///
  /////////// FUNCTIONS
  ///
  console.log("rendered from Signup");
  ///
  return (
    <>
      <Formik
        /* 👀 take a look here  👀
      دي مربوطه مع الانبوتس ال تحت بالنيم
       */
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          gender: ''
        }}
        validationSchema={validatingSchema}
        onSubmit={values => console.log(values)}
      >
        {(formik) => (
          <>
          {console.log(formik)}
            <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
            <Form>
              <TextField
                label="First Name:"
                id="firstName"
                name="firstName"
                type="text"
              />
              <p>{formik.values.firstName}</p>
              <label htmlFor="lastName">Last Name:</label>
              {/* 
              ///
              Something is different here
              ////
              */}
              <Field
                className={`form-control shadow-none ${formik.touched.lastName && formik.errors.lastName && 'is-invalid'}`}
                id="lastName"
                name="lastName"
                type="text"
              />
              <ErrorMessage name='lastName' component='p' className='error' />
              <TextField label="Email:" id="email" name="email" type="email" />
              <TextField
                label="Password:"
                id="password"
                name="password"
                type="password"
              />
              <TextField
                label="Confirm Password:"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
              />

              <div>
                <label htmlFor="male">
                <Field type="radio" name='gender' value='male' id='male' />
                Male
                </label>

                <label htmlFor="female">
                <Field type="radio" name='gender' value='female' id='female' />
                Female
                </label>
              </div>
              <ErrorMessage name="gender" component='p' className="error" />

              <button className="btn btn-dark mt-3" type="submit">
                Register
              </button>
              <button style={{marginLeft: '1rem'}} className="btn btn-danger mt-3" type="reset">
                Reset
              </button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};
