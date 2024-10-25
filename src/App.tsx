import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import MainComponent from "./components/main-component";
import mapResponse from "./utils/map-response";

function App() {
  const [films, setFilms] = useState<Film[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState("0");
  const [isFirstApiCall, setIsFirstApiCall] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchFilms = async (searchText: string, page?: number) => {
    setLoading(true);
    setError(null);
    setSearchTerm(searchText);
    try {
      let url = `https://www.omdbapi.com/?apikey=8523cbb8&s=${encodeURIComponent(
        searchText
      )}`;
      if (page) {
        url += `&page=${page}`;
      }
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error with status: ${response.status}`);
      }

      const data = await response.json();
      if (data.Response === "False") {
        setFilms([]);
        setTotalResults("0");
      } else {
        setFilms(mapResponse(data));
        setTotalResults(data.totalResults);
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(error);
      } else {
        console.error("Unknown error", e);
      }
    } finally {
      setLoading(false);
      if (isFirstApiCall) {
        setIsFirstApiCall(false);
      }
    }
  };

  return (
    <div className="content-container">
      <Header onSearch={(value) => fetchFilms(value)} />
      <MainComponent
        totalResults={totalResults}
        films={films}
        isLoading={isLoading}
        isFirstApiCall={isFirstApiCall}
        searchTerm={searchTerm}
        onPageClick={(value) => fetchFilms(searchTerm, value)}
      />
    </div>
  );
}

export default App;
