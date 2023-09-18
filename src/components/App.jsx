import { FormPhonebook } from './FormPhonebook/FormPhonebook';
import { ListContact } from './ListContact/ListContact';
import { SearchBar } from './SeachBar/SeachBar';

export const App = () => {
  return (
    <>
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Phonebook
      </h1>

      <FormPhonebook />

      <h2
        style={{
          textAlign: 'center',
        }}
      >
        Contacts:
      </h2>

      <SearchBar />

      <ListContact />
    </>
  );
};
