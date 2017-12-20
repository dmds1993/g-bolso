import React, { Component } from 'react';
import Item from '../../components/Items';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItems } from '../../redux/actions/searchItemsActions.js';


class ResultSearch extends Component {

  componentWillMount() {
    this.props.fetchItems();
  }

  handleItem(categories) {
    if (categories.items && categories.items.data) {
      return categories.items.data.map((element, index) => {
        return (
          <Item item={element} key={element}/>
        )
      })
    }
  }

  render() {
    return (
      <div>
        {this.handleItem(this.props.items)}
      </div>
    );
  }
}

const mapStateToProps = ({items}) => {
    return { items }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchItems }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultSearch);
