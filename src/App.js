import ContactList from "./Components/ContactList";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div className="h-screen flex flex-col w-full">
      <Navbar />
      <ContactList />
    </div>
  );
}

export default App;
