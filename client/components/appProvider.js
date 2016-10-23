import React, {Component} from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from '../store';
import { persistStore, autoRehydrate } from 'redux-persist'
import Routes from '../routes.jsx';

export default class AppProvider extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   rehydrated: false,
    // };
  }

  // componentWillMount(){
  //   persistStore(store, {blacklist: ['routing']}, () => {
  //     this.setState({ rehydrated: true })
  //   })
  // }

  render() {
    // if(!this.state.rehydrated){
    //   return <div>Loading...</div>
    // }
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
