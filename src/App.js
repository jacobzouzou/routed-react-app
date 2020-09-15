import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

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
import WrappedMouse from "./components/HOC _2"
import LaszyMouseTraker from "./components/LazyLoading"

function App() {
    return (
        <Router>
            <div>
                <aside>
                    <Link to={"/Lazyloading"}></Link>
                    <Link to={"/hoc"}></Link>
                    <Link to={"/hoc2"}></Link>
                    <Link to={"/hook"}></Link>
                    <Link to={"/hook2"}></Link>
                    <Link to={"/customhook"}></Link>
                    <Link to={"/context"}></Link>
                    <Link to={"/proprender"}></Link>
                    <Link to={"/proprender2"}></Link>
                    <Link to={"/reducer"}></Link>
                </aside>
                <main>
                    <Route exact path={`/`} component={Home} />

                    <React.Suspense fallback={<p>Please wait</p>}>
                        <div className="App">
                            <Route path={`/lazyloading`} component={LaszyMouseTraker} />
                        </div>
                    </React.Suspense>
                    <Route path={`/hoc`} component={WrappedButton} />
                    <Route path={`/hoc2`} component={WrappedMouse} />
                    <Route path={`/hook`} component={Hook} />
                    <Route path={`/hook2`} component={Checkbox} />
                    <Route path={`/customhook`} component={CustomHook} />
                    <Route path={`/context`} component={HelloWorld} />
                    <Route path={`/proprender`} component={MouseTraker} />
                    <Route path={`/proprender2`} component={MouseTracker2} />
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
                </main>
            </div>
        </Router>
    );
}
export default App;

