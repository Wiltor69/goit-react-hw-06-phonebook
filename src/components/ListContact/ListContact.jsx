import { removeContact } from 'redux/contactSlice';
import { Button, List, ListItem } from './ListContact.styled';
import { useSelector, useDispatch } from 'react-redux';
import { myContacts, myFilters } from 'redux/selector';

export const ListContact = () => {
  const contacts = useSelector(myContacts);
  const filters = useSelector(myFilters);
  const dispatch = useDispatch();

  const filtred = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <List>
      {filtred.map(contact => {
        return (
          <ListItem key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <Button onClick={() => dispatch(removeContact(contact.id))}>
              Delete
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};
