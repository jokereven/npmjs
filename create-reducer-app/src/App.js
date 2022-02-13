import React, { Fragment, PureComponent } from 'react';
import { Provider } from 'react-redux';
import Example from './example/index';
import store from './store/index';
import { GlobalStyle } from './style';

class App extends PureComponent {
	render() {
		return (
			<Fragment>
				{/* 全局样式 */}
				<GlobalStyle />
				<Provider store={store}>
					<Example />
				</Provider>
			</Fragment>
		);
	}
}
export default App;
