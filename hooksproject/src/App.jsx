import ClickSayHello from "./components/sayHelloCustomHook"
import MyContacts from "./components/MyContacts"


function App() {
  return (
    <div style={{textAlign: "center", margin: "1rem"}}>
      <h2>Custom Hook</h2>

      <ClickSayHello />
      <MyContacts />

    </div>
  )
}

export default App
