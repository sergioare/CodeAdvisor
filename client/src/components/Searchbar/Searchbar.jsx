import './Searchbar.scss'
import Swal from 'sweetalert2'

const Searchbar = () => {
  const showAlert = () => {
    Swal.fire({
      title: "Sorry, We are working for you",
      icon: "warning",
      footer: "<b>Continue to enjoy our services</b>",
      timer: 3000,
    })
  }
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
        onClick={showAlert}
      >
        <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default Searchbar;