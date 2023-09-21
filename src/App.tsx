import * as React from "react";
import { Admin, Resource, defaultTheme, Layout } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
  RAFirebaseOptions
} from "react-admin-firebase";
import { SchoolCreate, SchoolEdit, SchoolList, SchoolShow } from "./Schools";
import { GuidelineList } from "./Guideline";
import { AvAppBar } from "./AvAppBar";
import { AvTheme } from "./AvTheme";

import BookIcon from '@mui/icons-material/Book';
import PeopleIcon from '@mui/icons-material/People';

const config = require("./FIREBASE_CONFIG.js").firebaseConfig;

const options: RAFirebaseOptions = {
  logging: true,
};
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);




const darkTheme = { ...defaultTheme, palette: { mode: 'dark' } };

export const AvLayout = (props: any) => <Layout {...props} appBar={AvAppBar} />;


class App extends React.Component {
  
  render() {
    return (
      <Admin dataProvider={dataProvider} authProvider={authProvider} theme={AvTheme} darkTheme={darkTheme} layout={AvLayout}>
        <Resource
          name="schools"
          list={SchoolList}
          show={SchoolShow}
          create={SchoolCreate}
          edit={SchoolEdit}
          icon={PeopleIcon}
        />
        <Resource
          name="guideline"
          list={GuidelineList}
          icon={BookIcon}
        />
      </Admin>
    );
  }
}

export default App;