import { app, Component } from "apprun";

class MyApp extends Component {
  view = () => <div>Web Component - Hello World!</div>;
}

app.webComponent('my-app', MyApp);

export default MyApp;