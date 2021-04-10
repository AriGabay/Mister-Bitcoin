import { Component } from 'react';
import { ContactList } from '../../cmps/ContactList';
import { ContactFilter } from '../../cmps/ContactFilter';
import './ContactPage.scss';
import '../../scss/_helpers.scss';
import { connect } from 'react-redux';
import { loadContacts } from '../../store/actions/contactActions';

class _ContactPage extends Component {
  state = {
    filterBy: null,
  };
  componentDidMount() {
    this.renderContacts();
  }
  renderContacts() {
    this.props.loadContacts();
  }

  onChangeFilter = (filterBy) => {
    this.props.loadContacts(filterBy);
  };
  addContact = () => {
    this.props.history.push('/edit');
  };
  render() {
    const { contacts } = this.props;

    return (
      <div>
        {contacts && (
          <div className="contact-container">
            <ContactFilter onChangeFilter={this.onChangeFilter} />
            <button onClick={this.addContact} className="btn-add-contact btn">
              Add contact
            </button>
            <ContactList contacts={contacts} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contactReducer.contacts,
});

const mapDispatchToProps = {
  loadContacts,
};

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage);
