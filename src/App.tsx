import cityApi from "apis/cityApi"
import { useEffect } from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"

function App() {
  useEffect(() => {
    cityApi.getAll().then((res) => {
      console.log(res)
    })
  }, [])
  return (
    <div>
      <Routes>
        <Route path='/login'></Route>

        <Route path='/admin'></Route>

        <Route path='/not-found'></Route>
      </Routes>
    </div>
  )
}

export default App
