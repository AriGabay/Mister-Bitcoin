import { Component } from 'react';
import { connect } from 'react-redux';
import { saveContact, removeContact } from '../../store/actions/contactActions';
import './ContactEditPage.scss';
import '../../scss/_helpers.scss';
import contactService from '../../services/contactService.js';
class _ContactEditPage extends Component {
  state = {
    contact: null,
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      contactService.getContactById(id).then((contact) => this.setState({ contact }));
    } else {
      this.setState({ contact: { name: '', email: '', phone: '' } });
    }
  }
  updateContact = (ev) => {
    ev.preventDefault();
    this.props.saveContact(this.state.contact);
  };

  handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    this.setState((prevState) => ({ contact: { ...prevState.contact, [name]: value } }));
  };

  render() {
    return (
      <div>
        {this.state.contact && (
          <div className="contact-edit-container">
            <h1>{this.state.contact.name}</h1>
            <form onSubmit={(ev) => this.updateContact(ev)} className="from-contact">
              <label htmlFor="nameInputEdit">Edit name </label>
              <input
                type="text"
                name="name"
                className="input-basic"
                value={this.state.contact.name}
                onChange={this.handleChange}
              />
              <label htmlFor="emailInputEdit">Edit email </label>
              <input
                type="text"
                name="email"
                className="input-basic"
                value={this.state.contact.email}
                onChange={this.handleChange}
              />
              <label htmlFor="phoneInputEdit">Edit phone </label>
              <input
                type="tel"
                name="phone"
                className="input-basic"
                value={this.state.contact.phone}
                onChange={this.handleChange}
              />
              <button className="btn">Save</button>
            </form>
            <button className="btn" onClick={() => this.props.history.push('/contact')}>
              Back
            </button>
            <button
              className="btn"
              onClick={() =>
                this.props.removeContact(this.props.match.params.id) && this.props.history.push('/contact')
              }
            >
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = {
  saveContact,
  removeContact,
};

export const ContactEditPage = connect(null, mapDispatchToProps)(_ContactEditPage);
