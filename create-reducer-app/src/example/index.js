import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { ExampleWrapper } from './style';

class Example extends PureComponent {
	render() {
		const { RandomColor, color } = this.props;
		return (
			<Fragment>
				<ExampleWrapper onClick={RandomColor}>{color}</ExampleWrapper>
			</Fragment>
		);
	}
}

const MapStateToProps = state => {
	return {
		color: state.getIn(['example', 'color']),
	};
};

const MapDispatchToProps = dispatch => {
	return {
		RandomColor() {
			let time = Date.now();
			let str = time.toString();
			let num = str.substr(str.length - 6);
			dispatch(actionCreators.random_color(num));
		},
	};
};

export default connect(MapStateToProps, MapDispatchToProps)(Example);
