import { Component } from 'react';
import { connect } from 'react-redux';
import { getContactById } from '../../store/actions/contactActions';
import { TransferFund } from '../../cmps/TransferFund';

import './ContactDetailsPage.scss';
import '../../scss/_helpers.scss';

class _ContactDetailsPage extends Component {
  componentDidMount() {
    this.props.getContactById(this.props.match.params.id);
  }
  render() {
    const { contact } = this.props;
    return (
      <div>
        {contact && (
          <div className="contact-details">
            <div className="text-contact-details">
              name: {contact.name} <br />
              email: {contact.email} <br />
              phone: {contact.phone} <br />
            </div>
            <div className="details-container-img">
              <img src={`https://robohash.org/${this.props.match.params.id}`} alt="robotImg" />
            </div>
            <div className="btn-contact-details">
              <button className="btn" onClick={() => this.props.history.push(`/edit/${contact._id}`)}>
                Edit
              </button>
              <button className="btn" onClick={() => this.props.history.push('/contact')}>
                Back
              </button>
            </div>
            <TransferFund contact={contact} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contact: state.contactReducer.currContact,
});

const mapDispatchToProps = {
  getContactById,
};

export const ContactDetailsPage = connect(mapStateToProps, mapDispatchToProps)(_ContactDetailsPage);
