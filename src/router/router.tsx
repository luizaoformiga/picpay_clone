import { NativeRouter, Route, Switch } from 'react-router-native';
import App from '../index';

export default function RouterApp() {
  return(
    <NativeRouter>
      <Switch />
        <Route exact path="/" component={App} />
    </NativeRouter>
  )
}
    