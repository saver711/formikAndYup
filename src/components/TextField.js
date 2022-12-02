/////////// IMPORTS
///
// import classes from './TextField.module.css'
import { useField, ErrorMessage } from "formik";
///
/////////// HELPER FUNCTIONS
///

///
/////////// HELPER VARIABLES
///

/* 👀 take a look here  👀
...props > grap rest of props, and it is not necessary to name it props
 */
export const TextField = ({ label, ...props }) => {
  /////////// VARIABLES
  ///
  const [field, meta] = useField(props);

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
  ///
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        autoComplete="off"
        {...props}
        {...field}
      />
      <ErrorMessage component='p' className="error" name={field.name} />
    </div>
  );
};
