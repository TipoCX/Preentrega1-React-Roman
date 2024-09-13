import NavBar from "./components/NavBar";
import ItemListContaier from "./components/ItemListContainer";

function App() {
    return (
        <div>
            <NavBar />
            <ItemListContaier greeting={"Bienvenido a mi tienda"} />
        </div>
    );
}

export default App;
