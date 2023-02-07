import { Provider, useDispatch } from 'react-redux';
import store from './store';
import App from './App';
function AppWrapper() {
  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  );
}

export default AppWrapper;
