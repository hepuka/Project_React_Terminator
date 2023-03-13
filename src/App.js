import React, { useState, useEffect } from "react";

//components
import TerminatorList from "./components/terminator-list/terminator-list.component";
import SearchBox from "./components/searchbox/searchbox.component";

const App = () => {
  const [models, setModels] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setModels(users));
  }, []);

  const filteredModels = models.filter((model) => {
    return model.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  if (models.length === 0) {
    return <h1>Betöltés folyamatban...</h1>;
  }

  return (
    <div className="tc">
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
