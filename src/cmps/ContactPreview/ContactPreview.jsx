import { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './ContactPreview.scss';

export class ContactPreview extends Component {
  render() {
    const { name, _id } = this.props.contact;
    return (
      <NavLink to={`/details/${_id}`} className="links">
        <div className="contact-preview">
          <span className="name-contact-preview">name: {name}</span>
          <div>
            <img className="preview-img" src={`https://robohash.org/${_id}`} alt="" />
          </div>
        </div>
      </NavLink>
    );
  }
}
