import React, { Component } from 'react';
import {Link} from 'react-router';

class Items extends Component {

  contructor(props) {
    this.handleDetail = this.handleDetail.bind(this);
  }

  handleDetail(item) {
    this.props.fetchDetail(item.id);
  }

  render() {
    return (
      <div className="item-in">
        <div className="row">
          <div className="col-md-5">
            <Link to={`/categories/${this.props.item}`}>{this.props.item}</Link>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Items;
