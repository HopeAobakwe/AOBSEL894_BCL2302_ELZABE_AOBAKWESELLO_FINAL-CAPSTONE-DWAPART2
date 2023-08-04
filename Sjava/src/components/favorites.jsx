import  { useState } from "react";
const Genre = {
  1: "Personal Growth",
  2: "True Crime and Investigative Journalism",
  3: "History",
  4: "Comedy",
  5: "Entertainment",
  6: "Business",
  7: "Fiction",
  8: "News",
  9: "Kids and Family",
};
const FavoritePodcast = ({ favoritePodcasts }) => {
const [sortOption, setSortOption] = useState("az");
const handleSort = (option) => {
setSortOption(option);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };
 
    useEffect(() => {
        let filteredShows = previewData.filter((show) =>
          show.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      
        if (sortBy === '[A-Z]') {
          filteredShows.sort((a, b) => a.title.localeCompare(b.title));
        } else if(sortBy == '[Z-A]'){
          filteredShows.sort((a, b) => b.title.localeCompare(a.title));
        } else if (sortBy === 'genre') {
          filteredShows.sort((a, b) => a.genres - b.genres);
        } else if (sortBy === 'Oldest') {
          filteredShows.sort((a, b) => new Date(a.updated) - new Date(b.updated));
        } else if (sortBy === 'Latest') {
          filteredShows.sort((a, b) => new Date(b.updated) - new Date(a.updated));
        }
      
        setFilteredData(filteredShows);
      }, [previewData, searchQuery, sortBy]);
      
  return (
    <div>
      <h2>Favorite Podcasts</h2>
      <div className="sort-buttons">
        <button onClick={() => handleSort("A-Z")}>Sort A-Z</button>
        <button onClick={() => handleSort("Z-A")}>Sort Z-A</button>
        <button onClick={() => handleSort("oldest")}>Sort by Date Ascending</button>
        <button onClick={() => handleSort("latest")}>Sort by Date Descending</button>
      </div>
      {sortedFavorites.length > 0 ? (
        <ul>
          {sortedFavorites.map((podcast) => (
            <li key={podcast.id}>
              <strong>{podcast.title}</strong>
              <img src={podcast.image} className="card--images" alt="Podcast" width="30%" />
      <p>Seasons: {podcast.seasons}</p>
      <p>Genres: {podcast.genres.map((genre) => Genre[genre]).join(",")}</p>
      <p>Updated: {podcast.updated}</p>
              Added on: {formatDate(podcast.addedDate)}
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite podcasts yet. Start adding some!</p>
      )}
    </div>
  );
};
export default FavoritePodcast;