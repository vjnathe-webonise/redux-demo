import '../../../static/stylesheets/style';
import Home from './components/Home';

import { Provider } from 'react-redux';
import store from './store'; 

var App = () => {
    return (
        <Provider store={store}>
            <Home/>
        </Provider>
    );  
};

ReactDOM.render(<App/>, document.getElementById("container"));