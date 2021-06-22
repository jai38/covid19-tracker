import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { Loader } from "./Common/Loader";
import { Home } from "./Components/Home/Home";
import { Past } from "./Components/Past/Past";
function App() {
  const [loading, setLoading] = useState(true);
  const [allCountries, setAllCountries] = useState();
  const [data, setData] = useState();
  const [countryList, setCountryList] = useState();
  const [sortBy, setSortBy] = useState("Active Cases");
  const [searchValue, setSearchValue] = useState("");
  const [pastCountry, setPastCountry] = useState();
  const [pastData, setPastData] = useState();
  const fetchCountries = async () => {
    const res = await fetch("https://corona.lmao.ninja/v2/countries", {
      method: "get",
    });
    let json = await res.json();
    json = json.sort((a, b) => b.active - a.active);
    setAllCountries(json);
    setData(json);
    console.log(json);
    setLoading(false);
  };
  const fetchPastCountry = async (pastCountry) => {
    const res = await fetch(
      `https://corona.lmao.ninja/v2/historical/${pastCountry}`
    );
    const json = await res.json();
    if (json.timeline) {
      setPastData(json.timeline);
    }
  };
  useEffect(() => {
    fetchCountries();
  }, []);
  useEffect(() => {
    let currentList = [];
    if (data) {
      data.forEach((country) => {
        currentList.push(country.country);
      });
    }
    setCountryList(currentList);
  }, [data]);
  useEffect(() => {
    if (pastCountry) {
      fetchPastCountry(pastCountry);
    }
  }, [pastCountry]);
  const handleSort = (currentSortBy) => {
    let currentData = [];
    if (currentSortBy == "Name") {
      currentData = data.sort((a, b) => (a.country > b.country ? 1 : -1));
    }
    if (currentSortBy == "Active Cases") {
      currentData = data.sort((a, b) => b.active - a.active);
    }
    if (currentSortBy == "New Cases") {
      currentData = data.sort((a, b) => b.todayCases - a.todayCases);
    }
    if (currentSortBy == "Total Cases") {
      currentData = data.sort((a, b) => b.cases - a.cases);
    }
    if (currentSortBy == "Total Recovered") {
      currentData = data.sort((a, b) => b.recovered - a.recovered);
    }
    if (currentSortBy == "New Recovered") {
      currentData = data.sort((a, b) => b.todayRecovered - a.todayRecovered);
    }
    if (currentSortBy == "Total Deaths") {
      currentData = data.sort((a, b) => b.deaths - a.deaths);
    }
    if (currentSortBy == "New Deaths") {
      currentData = data.sort((a, b) => b.todayDeaths - a.todayDeaths);
    }
    let reg = new RegExp(searchValue, "i");
    setAllCountries(currentData.filter((c) => c.country.match(reg)));
    setSortBy(currentSortBy);
  };
  const handleSearch = (currentSearchValue) => {
    setSearchValue(currentSearchValue);
    let reg = new RegExp(currentSearchValue, "i");
    setAllCountries(data.filter((c) => c.country.match(reg)));
  };
  const handlePastCountry = (currentPastCountry) => {
    setPastCountry(currentPastCountry);
  };
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Router>
          <Switch>
            <Route
              path="/past"
              component={() => (
                <Past
                  showPast={false}
                  showSearch={false}
                  showCountryName={false}
                  countryList={countryList}
                  handlePastCountry={handlePastCountry}
                  pastData={pastData}
                />
              )}
            />
            <Route
              path="/"
              component={() => (
                <Home
                  showPast={true}
                  showSearch={true}
                  showCountryName={false}
                  searchValue={searchValue}
                  handleSearch={handleSearch}
                  sortBy={sortBy}
                  handleSort={handleSort}
                  allCountries={allCountries}
                />
              )}
            />
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
