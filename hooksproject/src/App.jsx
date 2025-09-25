import ClickSayHello from "./components/CustomHook"
import MyContacts from "./components/MyContacts"


function App() {
  return (
    <div style={{textAlign: "center", margin: "1rem"}}>
      <h1>Custom Hook</h1>

      <ClickSayHello />
      <MyContacts />

    </div>
  )
}

export default App
