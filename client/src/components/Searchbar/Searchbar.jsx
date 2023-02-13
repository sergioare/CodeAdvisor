import styles from './Searchbar.module.css'


const Searchbar = () => {
    return (
        <div className={styles.searchbar}>
          <input
            className={styles.input}
            autoComplete="off"
            type="text"
            placeholder="Search..."
            id="search"
          />
          
          <button
          className={styles.btn}
          type="submit"
          >
            
         <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
        </button>
        </div>
    );
};

export default Searchbar;