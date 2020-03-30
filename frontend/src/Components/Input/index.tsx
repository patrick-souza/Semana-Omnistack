import React, { InputHTMLAttributes } from 'react';

type IProps = {
  formik: any;
  name: string;
  placeholder: string;
  type?: 'text' | 'number' | 'email';
  textarea?: boolean;
};
export default function Input({
  formik,
  name,
  placeholder,
  type = 'text',
  textarea = false,
  ...rest
}: IProps & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>) {
  return (
    <>
      {textarea ? (
        <textarea
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name={name}
          placeholder={placeholder}
          className={formik.errors[name] && formik.touched[name] ? 'error' : ''}
          {...rest}
        />
      ) : (
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name={name}
          type={type}
          placeholder={placeholder}
          className={formik.errors[name] && formik.touched[name] ? 'error' : ''}
          {...rest}
        />
      )}
      {formik.errors[name] && formik.touched[name] && (
        <span className="error">{formik.errors[name]}</span>
      )}
    </>
  );
}
