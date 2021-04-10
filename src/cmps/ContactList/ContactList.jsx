import { Component } from 'react';
import { ContactPreview } from '../ContactPreview';
import './ContactList.scss';

export class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <div className="list-container">
        <div className="list-contact">
          {contacts.map((contact, index) => (
            <div className="contact-preview-list" key={index}>
              <ContactPreview contact={contact} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
