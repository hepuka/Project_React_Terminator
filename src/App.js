import React, { useState, useEffect } from "react";

//components
import TerminatorList from "./components/terminator-list/terminator-list.component";
import SearchBox from "./components/searchbox/searchbox.component";

const App = () => {
  //models a usestate változó, a setModels a függvény ami módosítja a változó értékét
  //kezdőértékként egy üres tömböt adok meg
  const [models, setModels] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  let [count, setCount] = useState(0);

  //console.log(models, searchfield);

  const onSearchChange = (event) => {
    //ez a value lesz tárolva a state-ben a searchfield-ben
    setSearchfield(event.target.value);
  };

  //useEffect egyszer mindig lefut amikor újratöltöm a böngésző ablakát
  //useEffect mindannyiszor meghívódik ahányszor a React újrarendereli a komponenst
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setModels(users));

    //függőségi lista tömbje. Ha ez a paraméter megvan adva akkor ez egy feltételként működik. Ha ebben a tömbben valami változik akkor a useEffect újra lefut. tehát ha azt akarjuk, hogy a useEffect csak egyszer fusson le, akkor meg kell adni egy üres tömböt
  }, []);

  const filteredModels = models.filter((model) => {
    return model.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  if (models.length === 0) {
    return <h1>Betöltés folyamatban...</h1>;
  }

  const up = () => {
    return setCount(count + 1);
  };
  const down = () => {
    return setCount(count - 1);
  };

  const reset = () => {
    return setCount((count = 0));
  };

  return (
    <div className="tc">
      <h1>Beépített számláló</h1>
      <h2>{count}</h2>
      <button onClick={up}>+</button>
      <button onClick={down}>-</button>
      <button onClick={reset}>reset</button>
      <h1>Terminator modellek</h1>
      <SearchBox searchBoxProps={onSearchChange} />
      <TerminatorList terminatorListProps={filteredModels} />
    </div>
  );
};

//--------------------RÉGI ------------------//

//osztály alapú komponens
/* 
class App extends React.Component {
  constructor() {
    super(); //szülő osztály metódusa

    //komponens kezdő state-je
    this.state = {
      //modell database importálása
      models: [],

      //a keresőmezőbe bírtakat tartalmazza majd
      searchfield: "",
    };
  }

  //eseménykezelő arra, hogy ha megváltozik a keresőmező tartalma akkor mit kell kirenderelni
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ models: data }));
  }

  render() {
    // event.target.value tartalmazza a mezőbe beírt szöveget
    //console.log(event.target.value);
    const filteredModels = this.state.models.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    if (this.state.models.length === 0) {
      return <h1>Betöltés folyamatban...</h1>;
    }

    return (
      <div className="tc">
        <h1>Terminator modellek</h1>
        <SearchBox searchBoxProps={this.onSearchChange} />

        {/* state objektumból adja át az adatokat a listázó komponensnek}
        <TerminatorList terminatorListProps={filteredModels} />
      </div>
    );
  }
} */

export default App;
