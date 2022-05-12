import {Fragment} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes/index.js';
import {DefaultLayout} from './components/Layout'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === null ? Fragment : DefaultLayout;
            const Page = route.component;
            return <Route 
            key={index} 
            path={route.path}
            element={
              <Layout >
                <Page></Page>
              </Layout>}>
            </Route>;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
