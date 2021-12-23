import HelloDefault from './component/hello';
import ReactDOM from 'react-dom';

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