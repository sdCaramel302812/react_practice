import Hello from './component/hello';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <Hello
        name="John"
      />
    </div>
  );
}
  
  
  // ========================================

// assert the type of root is HTMLElement
ReactDOM.render(
  <App/>,
  document.getElementById('root') as HTMLElement
);