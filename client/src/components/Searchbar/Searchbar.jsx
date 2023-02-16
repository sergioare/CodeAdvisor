import  './Searchbar.scss'


const Searchbar = () => {
    return (
        <div className='searchbar'>
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
        </div>
    );
};

export default Searchbar;