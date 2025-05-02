import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  CampusContainer,
  StudentContainer,
  AllCampusesContainer,
  AllStudentsContainer,
  NewStudentContainer,
  NewCampusContainer,
} from "./components/containers";

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/campuses" component={AllCampusesContainer} />
      <Route exact path="/campus/:id" component={CampusContainer} />
      <Route exact path="/campuses/new" component={NewCampusContainer} />
      <Route exact path="/students" component={AllStudentsContainer} />
      <Route exact path="/newstudent" component={NewStudentContainer} />
      <Route exact path="/student/:id" component={StudentContainer} />
    </Switch>
  </div>
);

export default App;
