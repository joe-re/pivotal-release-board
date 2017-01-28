// @flow
//
import { Provider } from 'react-redux';
import store from './store';
import Container from './Container';

const Root = () => (
  <Provider store={store}>
    <div>
      <Container />
    </div>
  </Provider>
);

export default Root;
