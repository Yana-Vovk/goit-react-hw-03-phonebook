import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}>
                    {contact.name}
                    <span>: </span>
                    {contact.number}
                     <span> </span>
                    <button type="button" onClick={() => onDeleteContact(contact.id)}>Delete</button>
                </li>))}
        </ul>
    );
}

ContactList.propTypes = {
    contacts:PropTypes.array,
    onDeleteContact:PropTypes.func,
}

export default ContactList;