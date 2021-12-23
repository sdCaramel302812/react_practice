import HelloDefault from './component/hello';
import Hello from './component/hello';
import reducers from './reducers/index';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//const store = createStore(reducers);

function App() {
  return (
    <div>
      <HelloDefault
        name="John"
      />
    </div>
  );
}
  
  
  // ========================================

// assert the type of root is HTMLElement
ReactDOM.render(
//  <Provider store={store}>
    <App/>,
//  </Provider>,
  document.getElementById('root') as HTMLElement
);