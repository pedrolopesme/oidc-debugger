import App from './App';
import { connect } from 'react-redux';
import { setConnection } from './actions/Actions';

const mapStateToProps = state => ({
  connection: state.connection,
});

const mapDispatchToProps = {
  setConnection,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;