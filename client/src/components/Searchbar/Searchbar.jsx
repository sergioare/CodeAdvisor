import  './Searchbar.scss'
import { useSelector } from 'react-redux';
import { useState } from 'react';



const Searchbar = () => {
const advisors = useSelector(state=> state.advisors)
const [wrongSearch, setWrongSearch] = useState(false);

function handleSearch(event) {
  event.preventDefault();
  setWrongSearch(false)
  const inputValue = event.target.elements.search.value.toLowerCase();
  
  // split the search query into first and last name parts
  const nameParts = inputValue.split(' ');
  let advisor = null;
  
  if (nameParts.length === 2) {
    // the search query has two parts - assume "firstname lastname" format
    const [firstname, lastname] = nameParts;
    advisor = advisors.find(c =>
      (c.Firstname.toLowerCase() === firstname && c.Lastname.toLowerCase() === lastname) ||
      c.Nickname.toLowerCase() === inputValue
    );
  } else if (nameParts.length === 2) {
    // the search query has two parts - assume "lastname firstname" format
    const [lastname, firstname] = nameParts;
    advisor = advisors.find(c =>
      (c.Firstname.toLowerCase() === firstname && c.Lastname.toLowerCase() === lastname) ||
      c.Nickname.toLowerCase() === inputValue
    );
  } else {
    // the search query has only one part
    advisor = advisors.find(c =>
      c.Nickname.toLowerCase() === inputValue ||
      c.Firstname.toLowerCase() === inputValue ||
      c.Lastname.toLowerCase() === inputValue
    );
  }

  if (advisor) {
    window.location.href = `http://localhost:3000/user/${advisor.id}`;
  } else {
    setWrongSearch(true);
    setTimeout(() => {
      setWrongSearch(false);
    }, 3000); // 3 seconds delay
  }
}



    return (
        <form className={`searchbar ${wrongSearch? "red" : "" }`} onSubmit={handleSearch}>
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