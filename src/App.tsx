import * as React from "react";
import { Admin, Resource, defaultTheme, Layout } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
  RAFirebaseOptions
} from "react-admin-firebase";
import firebase from "firebase/compat/app";
import { SchoolList } from "./school/SchoolList";
import {SchoolCreate, SchoolEdit } from "./school/SchoolCreateEdit";
import { GuidelineList } from "./Guideline";
import { AvAppBar } from "./AvAppBar";
import { AvTheme } from "./AvTheme";

import BookIcon from '@mui/icons-material/Book';
import WidgetsIcon from '@mui/icons-material/Widgets';
import PeopleIcon from '@mui/icons-material/People';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { SchoolShow } from "./school/SchoolShow";
import { JSX } from "react/jsx-runtime";
import CustomLoginPage from "./CustomLoginPage";
import { InventoryList } from "./inventory/InventoryList";
import { InventoryCreate } from "./inventory/InventoryCreateEdit";

const config = require("./FIREBASE_CONFIG.js").firebaseConfig;

const options: RAFirebaseOptions = {
  logging: false,
};

const firebaseApp = firebase.initializeApp(config);

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);


const darkTheme = { ...defaultTheme, palette: { mode: 'dark' } };

export const AvLayout = (props: any) => <Layout {...props} appBar={AvAppBar} />;


class App extends React.Component {
  
  render() {
    return (
      <Admin 
        loginPage={CustomLoginPage} 
        dataProvider={dataProvider} 
        authProvider={authProvider} 
        theme={AvTheme} 
        layout={AvLayout}
        >
        <Resource
          name="schools"
          list={SchoolList}
          show={SchoolShow}
          create={SchoolCreate}
          edit={SchoolEdit}
          icon={AccountBalanceIcon}
        />
        <Resource
          name="guideline"
          list={GuidelineList}
          icon={BookIcon}
        />
        <Resource
          name="inventory"
          list={InventoryList}
          icon={WidgetsIcon}
          create={InventoryCreate}
          edit={InventoryCreate}
        />
      </Admin>
    );
  }
}

export default App;