import './Searchbar.scss'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Fuse from 'fuse.js';


const Searchbar = () => {
  const advisors = useSelector(state => state.advisors)
  const [wrongSearch, setWrongSearch] = useState(false);

  function handleSearch(event) {
    event.preventDefault();
    const inputValue = event.target.elements.search.value.toLowerCase();
    const inputWords = inputValue.split(/\s+/);

    // Define the search options for the `Fuse` instance
    const options = {
      keys: ['Firstname', 'Lastname', 'Nickname'],
      threshold: 0.3,
      weight: {
        Firstname: 1,
        Lastname: 2,
        Nickname: 1.5,
      },
    };

    // Create a `Fuse` instance with the advisors array and the search options
    const fuse = new Fuse(advisors, options);

    // Search for matches with the search query
    let results = fuse.search(inputValue);
    // If there are no matches with the full input value, try searching by first and last name separately
    if (results?.length === 0 && inputWords?.length === 2) {
      // the search query has two parts - assume "firstname lastname" format
      const [firstname, lastname] = inputWords;
      let firstNameMatches = fuse.search(firstname);
      let lastNameMatches = fuse.search(lastname);
      if (firstNameMatches.length && lastNameMatches.length) {
        // Both first and last name have matches, return the advisor with the best score
        results = advisors.find(c => c.id === firstNameMatches[0].item.id || c.id === lastNameMatches[0].item.id);
      } else if (firstNameMatches.length) {
        // Only the first name has matches, return the advisor with the best score
        results = advisors.find(c => c.id === firstNameMatches[0].item.id);
      } else if (lastNameMatches.length) {
        // Only the last name has matches, return the advisor with the best score
        results = advisors.find(c => c.id === lastNameMatches[0].item.id);
      }
    }

  // If there are any matches, redirect to the first match
  if (results.length > 0) {
    const advisor = results[0].item;
    window.location.href = `https://code-advisor-back.vercel.app/Advisors/${advisor.id}`;
  } else if(results.id){
    window.location.href = `https://code-advisor-back.vercel.app/Advisors/${results.id}`;
  } else {
    setWrongSearch(true);
    setTimeout(() => {
      setWrongSearch(false);
    }, 3000); // 3 seconds delay
  }
}




  return (
    <form className={`searchbar ${wrongSearch ? "red" : ""}`} onSubmit={handleSearch}>
      <input
        className='input'
        autoComplete="off"
        type="text"
        placeholder="Search..."
        id="search"
      />

      <button
        className='btn'
        type="submit"
      >
        <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default Searchbar;