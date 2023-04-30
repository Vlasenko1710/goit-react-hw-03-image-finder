import { Formik, Form, Field } from 'formik';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = async (values, { setSubmitting }) => {
    await onSubmit(values);
    setSubmitting(false);
  };

  return (
    <header>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form  autoComplete="off">
            <button
              type="submit"
              disabled={isSubmitting}
            >
              <span>
                <AiOutlineSearch />
              </span>
            </button>
            <Field
              name="search"
              type="text"
              placeholder="Search images and photos"
            />
          </Form>
        )}
      </Formik>
    </header>
  );
};



Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};