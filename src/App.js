import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./index.css"

import Home from "./components/Home"
import MouseTraker from "./components/PropRender"
import MouseTracker2 from "./components/PropChildren"
import User from "./components/User"
import Checkbox2 from "./components/Reducer"
import Checkbox from "./components/Checkbox"
import Hook from "./components/Hook"
import HelloWorld from "./components/ContextApi"
import CustomHook from "./components/CustomHook"
import GithubUser from "./components/GithubUser"
import WrappedButton from "./components/HOC"
import WrappedMouse from "./components/HOC_2"
import LaszyMouseTraker from "./components/CodeSplitting"
import StyledComponent from "./components/StyledComponent"

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link className="navItem" to={"/"}>Home</Link><br />
                    <Link className="navItem" to={"/hoc"}>Higher Order Component</Link><br />
                    <Link className="navItem" to={"/hoc2"}>Higher Order Commponent 2</Link><br />
                    <Link className="navItem" to={"/hook"}>Hook [useSate&useEffect]</Link><br />
                    <Link className="navItem" to={"/hook2"}>Hook[chekcbox]</Link><br />
                    <Link className="navItem" to={"/customhook"}>Custom Hook</Link><br />
                    <Link className="navItem" to={"/context"}>Context</Link><br />
                    <Link className="navItem" to={"/propRender"}>Prop.Render </Link><br />
                    <Link className="navItem" to={"/propChildren"}>Prop.Children</Link><br />
                    <Link className="navItem" to={"/codeSplitting"}>Prop render with Code Splitting</Link><br />
                    <Link className="navItem" to={"/reducer"}>Reducer</Link><br />
                    <Link className="navItem" to={"/styledComponent"}>Styled Components</Link>
                </nav>
                <main>
                    {/* <Route exact path={`/`} component={Home} /> */}
                    <Route exact path={`/`} component={() => (
                        <div>
                            <Home />
                        </div>
                    )} />

                    <React.Suspense fallback={<p>Please wait</p>}>
                        <div className="App">
                            <Route path={`/codeSplitting`} component={LaszyMouseTraker} />
                        </div>
                    </React.Suspense>
                    
                    <Route path={`/hoc`} component={WrappedButton} />
                    <Route path={`/hoc`} component={() => (
                        <WrappedButton color="red" />
                    )} />
                    <Route path={`/hoc2`} component={WrappedMouse} />
                    <Route path={`/hook`} component={Hook} />
                    <Route path={`/hook2`} component={Checkbox} />
                    <Route path={`/customhook`} component={CustomHook} />
                    <Route path={`/context`} component={HelloWorld} />
                    <Route path={`/propRender`} component={MouseTraker} />
                    <Route path={`/propChildren`} component={MouseTracker2} />
                    <Route path={`/reducer`} component={Checkbox2} />
                    {/*in line rendering */}
                    <Route
                        path="/githubuser"
                        render={() => (
                            <div className="App">
                                <GithubUser login="moonhighway" />
                                <GithubUser login="eveporcello" />
                            </div>)
                        }>
                    </Route>
                    {/* <Route
                        path={`/user/:firstname?/:lastname?/:age?`}
                        render={({ match }) => (cd
                            <div>
                                <User
                                    firstName={match.params.firstname}
                                    lastName={match.params.lastname}
                                    age={match.params.age}
                                />
                            </div>
                        )
                        } /> */}
                    <Route path={`/user/:firstname?/:lastname?/:age?`}
                        component={({ match }) => (
                            <div>
                                <User
                                    firstName={match.params.firstname}
                                    lastName={match.params.lastname}
                                    age={match.params.age}
                                />
                            </div>)} />
                    <Route path={`/styledComponent`} component={StyledComponent} />

                </main>
            </div>
        </Router>
    );
}
export default App;

