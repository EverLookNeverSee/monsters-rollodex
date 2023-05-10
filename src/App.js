import {useState, useEffect} from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
	const [searchField, setSearchField] = useState("");
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);
	const [title, setTitle] = useState("");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(users => setMonsters(users));
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchField),
		);
		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	const onSearchChange = event => {
		const searchFieldString = event.target.value.toLowerCase();
		setSearchField(searchFieldString);
	};

	const onTitleChange = event => {
		const searchFieldString = event.target.value.toLowerCase();
		setTitle(searchFieldString);
	};

	return (
		<div className="App">
			<h1 className="app-title">{title}</h1>
			<SearchBox
				onChangeHandler={onSearchChange}
				placeholder="Search Monsters"
				className="monsters-search-box"
			/>
			<br/>
			<SearchBox
				onChangeHandler={onTitleChange}
				placeholder="Set title"
				className="title-search-box"
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default App;
