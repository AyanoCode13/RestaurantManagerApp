import { RouterProvider } from "react-router-dom"
import Router from  "./components/navigation/Router"

function App() {

  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  )
}

export default App
