import { useEffect } from 'react';
import './Graphs.scss';
// import Chart from 'chart.js/auto';

const Graphs = () => {
  useEffect(() => {
    const registeredUsersCtx = document.getElementById('registered-users-chart').getContext('2d');
    const registeredUsersChart = new Chart(registeredUsersCtx, {
      type: 'bar',
      data: {
        labels: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
          {
            label: 'Number of registered users',
            data: [10, 20, 30, 40, 50, 60, 70],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    const appointmentsCtx = document.getElementById('appointments-chart').getContext('2d');
    const appointmentsChart = new Chart(appointmentsCtx, {
      type: 'bar',
      data: {
        labels: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
          {
            label: 'Number of appointments booked',
            data: [5, 10, 15, 20, 25, 30, 35],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, []);

  return (
    <div className="graphs-container">
      <h2>Graphs</h2>
      <div className="chart-container">
        <canvas id="registered-users-chart"></canvas>
      </div>
      <div className="chart-container">
        <canvas id="appointments-chart"></canvas>
      </div>
    </div>
  );
};

export default Graphs;
