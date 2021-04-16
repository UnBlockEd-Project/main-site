import logo from './logo.svg';
import './App.css';
import Header from './layouts/Dashboard/Header/index.js';
import Desktop1 from './views/Desktop1/index.js';
import Footer from './layouts/Dashboard/Footer/index.js';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import { renderRoutes } from 'react-router-config';
import ScrollReset from './components/ScrollReset';
import { theme } from './theme';
import { ThemeProvider } from '@material-ui/styles';
import { configureStore } from './store';
import { Provider as StoreProvider } from 'react-redux';

const history = createBrowserHistory();
const store = configureStore();

function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <ScrollReset />
          {renderRoutes(routes)}

          {/* <div>
        <Header />
        <Desktop1 />
        <Footer />
      </div> */}
        </Router>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
