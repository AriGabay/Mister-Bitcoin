import { Component } from 'react';

import './ContactFilter.scss';
import '../../scss/_helpers.scss';
export class ContactFilter extends Component {
  state = {
    term: '',
  };

  handleChange = ({ target }) => {
    const value = target.value;
    this.setState({ term: value }, () => {
      this.props.onChangeFilter({ ...this.state });
    });
  };
  render() {
    const { term } = this.state;
    return (
      <div>
        <form className="contact-filter" onSubmit={(ev) => ev.preventDefault()}>
          <label htmlFor="filterBy" className="label-filterBy">
            Search
          </label>
          <input
            type="text"
            id="filterBy"
            className="input-basic"
            name="filterBy"
            value={term}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
