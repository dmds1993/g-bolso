import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { fetchDetail } from '../../redux/actions/searchDetailActions.js';

import { bindActionCreators } from 'redux';

class Detail extends Component {

  componentWillMount() {
    let id = this.props.params.id
    this.props.fetchDetail(id);
  }

  handleItem(categories) {
    console.log('categories', categories.detail)
    if (categories.detail) {
      return categories.detail.data.category.map((element, index) => {
        return (
          <p>GUIA BOLTA a sua categoria {element}</p>
        )
      })
    }
  }

  render() {
    return (
      <div>
        <Link to={`/categories`}>Voltar</Link>
          {this.handleItem(this.props.data)}
          {this.props.data.detail ? (
              <p>{this.props.data.detail.data.value}</p>
            ) : (
              <div />
          )}
  		</div>
    );
  }
}

const mapStateToProps = state => ({ data: state.objectDetail });

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchDetail }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
