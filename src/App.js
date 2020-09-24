import React from "react"

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link className="navItem" to={"/"}>Home</Link><br />
                    <Link className="navItem" to={"/codeSplitting"}>Code Splitting</Link><br />
                    <Link className="navItem" to={"/hoc"}>Higher Order Component</Link><br />
                    <Link className="navItem" to={"/hoc2"}>Higher Order Commponent 2</Link><br />
                    <Link className="navItem" to={"/hook"}>Hook</Link><br />
                    <Link className="navItem" to={"/hook2"}>Hook 2</Link><br />
                    <Link className="navItem" to={"/customhook"}>Custom Hook</Link><br />
                    <Link className="navItem" to={"/context"}>Context</Link><br />
                    <Link className="navItem" to={"/proprender"}>Prop Render </Link><br />
                    <Link className="navItem" to={"/proprender2"}>Prop Render 2</Link><br />
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
                            <Route path={`/CodSplitting`} component={CodSplitting} />
                        </div>
                    </React.Suspense>
                    {/* <Route path={`/hoc`} component={WrappedButton} /> */}
                    <Route path={`/hoc`} component={() => (
                        <WrappedButton color="red" />
                    )} />
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
                    <Route path={`/styledComponent`} component={StyledComponent} />

                </main>
            </div>
        </Router>
    );
}
export default App;

