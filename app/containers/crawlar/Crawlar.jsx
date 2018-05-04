import React, { Component } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../../reducers/crawlarReducer'

const { get_datas } = actions;

class Crawlar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crawlarDatas: []
    }
  }

  handleClick = () => {
    console.log(this.props.crawlarDatas, 'this.props')
    this.props.get_datas();
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={() => this.handleClick()}>Welcome to test</Button>
      </div>
    )
  }

  componentDidMount() {
    console.log(this.props)
  }

}

function mapStateToProps(state) {
  return {
    crawlarDatas: state.admin.crawlar
  }
}

function mapDispatchToProps(dispatch) {
  return {
    get_datas: bindActionCreators(get_datas, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Crawlar)
