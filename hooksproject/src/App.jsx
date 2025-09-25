import ClickSayHello from "./components/CustomHook"
import MyContacts from "./components/MyContact"


function App() {
  return (
    <div>
      <h1 style={{textAlign: "center", margin: "1rem"}}>Custom Hook</h1>

      <ClickSayHello />
      <MyContacts />

    </div>
  )
}

export default App
