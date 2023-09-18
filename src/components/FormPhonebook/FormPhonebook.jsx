import { Formik, ErrorMessage } from 'formik';
import { Block, StyledField, StyledForm } from './FormPhonebook.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { myContacts } from 'redux/selector';
import { nanoid } from '@reduxjs/toolkit';

const schema = Yup.object().shape({
  name: Yup.string().min(1, 'Too Short!').required('Required'),
  number: Yup.string().min(3, 'Too Short!').required('Required'),
});

export const FormPhonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(myContacts);

  const handleSubmit = (value, action) => {
    const searchName = contacts.map(cont => cont.name).includes(value.name);

    const newContact = {
      id: nanoid(),
      name: value.name,
      number: value.number,
    };

    if (searchName) {
      alert(`${value.name} is already in contacts`);
      action.resetForm();
    } else {
      dispatch(addContact(newContact));
      action.resetForm();
    }
  };

  return (
    <Block>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <label>Name</label>
          <StyledField type="text" name="name" required />
          <ErrorMessage name="name" component="div" />
          <label>Number</label>
          <StyledField type="tel" name="number" required />
          <ErrorMessage name="number" component="div" />

          <button type="submit">Add contact</button>
        </StyledForm>
      </Formik>
    </Block>
  );
};
