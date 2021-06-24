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
import { Country } from "./Components/Country/Country";
function App() {
  const [loading, setLoading] = useState(true);
  const [allCountries, setAllCountries] = useState();
  const [data, setData] = useState();
  const [countryList, setCountryList] = useState();
  const [sortBy, setSortBy] = useState("Active Cases");
  const [reverse, setReverse] = useState(false);
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
    let currentList = [];
    json.forEach((country) => {
      currentList.push(country.country);
    });
    setCountryList(currentList);
    setLoading(false);
  };
  const fetchPastCountry = async (pastCountry) => {
    setLoading(true);
    let currentPastData = [];
    const res = await fetch(
      `https://corona.lmao.ninja/v2/historical/${pastCountry}`
    );
    const json = await res.json();
    if (json.timeline) {
      let dates = Object.keys(json.timeline.cases);
      dates.forEach((date) => {
        currentPastData.push({
          date: date,
          cases: json.timeline.cases[date],
          recovered: json.timeline.recovered[date],
          deaths: json.timeline.deaths[date],
        });
      });
      currentPastData = currentPastData.reverse();
      console.log(currentPastData);
      setPastData(currentPastData);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchCountries();
  }, []);
  const handleSort = (currentSortBy) => {
    let currentData = [];
    if (currentSortBy == "Name") {
      if (reverse) {
        currentData = data.sort((a, b) => (a.country > b.country ? 1 : -1));
      } else {
        currentData = data.sort((a, b) => (a.country > b.country ? -1 : 1));
      }
      setReverse(!reverse);
    }
    if (currentSortBy == "Active Cases") {
      currentData = data.sort((a, b) =>
        reverse ? b.active - a.active : a.active - b.active
      );

      setReverse(!reverse);
    }
    if (currentSortBy == "New Cases") {
      currentData = data.sort((a, b) =>
        reverse ? b.todayCases - a.todayCases : a.todayCases - b.todayCases
      );
      setReverse(!reverse);
    }
    if (currentSortBy == "Total Cases") {
      currentData = data.sort((a, b) =>
        reverse ? b.cases - a.cases : a.cases - b.cases
      );
      setReverse(!reverse);
    }
    if (currentSortBy == "Total Recovered") {
      currentData = data.sort((a, b) =>
        reverse ? b.recovered - a.recovered : a.recovered - b.recovered
      );
      setReverse(!reverse);
    }
    if (currentSortBy == "New Recovered") {
      currentData = data.sort((a, b) =>
        reverse
          ? b.todayRecovered - a.todayRecovered
          : a.todayRecovered - b.todayRecovered
      );
      setReverse(!reverse);
    }
    if (currentSortBy == "Total Deaths") {
      currentData = data.sort((a, b) =>
        reverse ? b.deaths - a.deaths : a.deaths - b.deaths
      );
      setReverse(!reverse);
    }
    if (currentSortBy == "New Deaths") {
      currentData = data.sort((a, b) =>
        reverse ? b.todayDeaths - a.todayDeaths : a.todayDeaths - b.todayDeaths
      );
      setReverse(!reverse);
    }
    let reg = new RegExp(searchValue, "i");
    setAllCountries(currentData.filter((c) => c.country.match(reg)));
    setSortBy(currentSortBy);
  };
  const handleSearch = (currentSearchValue) => {
    let reg = new RegExp(currentSearchValue, "i");
    let newCountries = data.filter((c) => c.country.match(reg));
    setAllCountries([...newCountries]);
    setSearchValue(currentSearchValue);
  };
  const handlePastCountry = (currentPastCountry) => {
    setPastCountry(currentPastCountry);
    fetchPastCountry(currentPastCountry);
  };
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Router>
          <Switch>
            <Route
              path="/past"
              render={(props) => (
                <Past
                  {...props}
                  showPast={false}
                  showSearch={false}
                  showCountryName={false}
                  countryList={countryList}
                  handlePastCountry={handlePastCountry}
                  pastCountry={pastCountry}
                  pastData={pastData}
                />
              )}
            />
            <Route path="/country" component={Country} />
            <Route
              path="/"
              render={(props) => (
                <Home
                  {...props}
                  reverse={reverse}
                  showPast={true}
                  showSearch={true}
                  showCountryName={false}
                  searchValue={searchValue}
                  handleSearch={handleSearch}
                  sortBy={sortBy}
                  handleSort={handleSort}
                  allCountries={allCountries}
                  changeCountry={handlePastCountry}
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
