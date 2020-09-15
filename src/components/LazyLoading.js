import React from "react"

const LaszyMouseTraker = React.lazy(() => import("./PropRender"))

function App() {
    return (
        <React.Suspense fallback={<p>Please wait</p>}>
            <div className="App">
                <LaszyMouseTraker />
            </div>
        </React.Suspense>
    );
}
export default App;