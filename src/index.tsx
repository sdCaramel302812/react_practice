import HelloDefault from './component/hello';
import ReactDOM from 'react-dom';
import { BrowserRouter,
  Link,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import Invoices from './routes/invoices';
import Invoice from './routes/invoice';

//const store = createStore(reducers);

function App() {
  return (
    <div>
      <HelloDefault
        name="John"
      />
      <Link to="/invoices">Invoices</Link>
      <Outlet/>
    </div>
  );
}
  
  
  // ========================================

// assert the type of root is HTMLElement
ReactDOM.render(
//  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="invoices" element={<Invoices/>}>
        <Route  //  default component of no subpath
          index
          element={
            <main style={{ padding: "1rem" }}>
              <p>Select an invoice</p>
            </main>
          }
        />
        <Route path=":invoiceId" element={<Invoice />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
//  </Provider>,
  document.getElementById('root') as HTMLElement
);