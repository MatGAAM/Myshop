import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductsList/ProductList';
import { Provider } from 'react-redux';
import { store } from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <Header />
      <ProductList />
      
      <GlobalStyles />

    </Provider>
  );
}

export default App;
