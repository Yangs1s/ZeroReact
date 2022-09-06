import styles from './App.module.css'
import Header from './Header/Header';
import Listcontainer from './ListContainer/Listcontainer';
import Footers from './Footer/Footers';
import { Route, Routes} from 'react-router-dom'
import Issue from './pages/issue';
import CreateIssue from './pages/createIssue'
import PullRequest from './pages/pullRequest'
import Action from './pages/action'
import Code from './pages/code'
import Project from './pages/project'
import Nav from './components/Nav/Nav'
function App() {
  return (
    <>
    <Nav/>
    <Header/>
    <Routes>
      <Route path="/"element={<Issue/>}></Route>
      <Route path="/issue"element={<Issue/>}></Route>
      <Route path="/new"element={<CreateIssue/>}></Route>
      <Route path="/pullrequest"element={<PullRequest/>}></Route>
      <Route path="/action"element={<Action/>}></Route>
      <Route path="/code"element={<Code/>}></Route>
      <Route path="/project"element={<Project/>}></Route>
    </Routes>
    </>
  );
}




export default App;

