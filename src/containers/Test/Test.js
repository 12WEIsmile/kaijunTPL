import React, { Component } from 'react';
import * as actions from '../../actions/index.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Input, Content } from '../../components/index.js';

class Test extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Redux Test</h1>
                <Input actions={this.props.actions} />
                <Content text={this.props.text} />
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        text: state.text
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Test);