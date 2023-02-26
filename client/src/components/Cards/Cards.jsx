import Card from "../Card/Card"
import "./Cards.scss"
import { useDispatch, useSelector } from 'react-redux';
import { getAdvisors } from '../../redux/actions/actions';
import { useEffect, useState } from 'react';

const Cards = ({ isSidebarOpen, currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const allAdvisors = useSelector(state => state.advisorsInDisplay);
  const [cardsPerPage, setCardsPerPage] = useState(8);

  // Calculate total number of pages
  const totalPages = Math.floor(allAdvisors.length / cardsPerPage);

  useEffect(() => {
    dispatch(getAdvisors())
  }, [dispatch])

  useEffect(() => {
    if (isSidebarOpen) {
      setCardsPerPage(6);
      setCurrentPage(Math.floor(currentPage * 1.33))
    } else {
      setCardsPerPage(8);
      setCurrentPage(Math.round(currentPage * 0.75))
    }
  }, [isSidebarOpen, currentPage, setCurrentPage]);

  // Calculate indexes of first and last cards on current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  // Slice advisors array to get the cards for the current page
  const advisors = allAdvisors.slice(indexOfFirstCard, indexOfLastCard);


  // Event handler for clicking the next page button
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Event handler for clicking the previous page button
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Event handler for clicking the first page button
  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  // Event handler for clicking the last page button
  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };
  return (

    <div className={`containerCardsPrincipal ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="containeMessage">
        <h1>Our Advisors</h1>
        <br />
        <p>Let's find the best advisor for you.</p>
      </div>
      <div className="pagination-container">
        <div className="pagination">
          <button
            className="first-page-btn"
            onClick={handleFirstPage}
            disabled={currentPage === 1}
          >
            &lt;&lt;
          </button>
          <button
            className="prev-page-btn"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          <span className="current-page">{currentPage}</span>
          <button
            className="next-page-btn"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
          <button
            className="last-page-btn"
            onClick={handleLastPage}
            disabled={currentPage === totalPages}
          >
            &gt;&gt;
          </button>
        </div>
      </div>
      <div className="container">

        {advisors?.map((advisor) => {
          return (
            <Card
              key={advisor.id}
              id={advisor.id}
              Image={advisor.Img}
              Firstname={advisor.Firstname + ' ' + advisor.Lastname}
              TechSkills={advisor.TechSkills}
              Specialty={advisor.Specialty}
              Language={advisor.Language}
              Score={advisor.Score}
            />
          );
        })}
      </div>

    </div>

  )
}

export default Cards;