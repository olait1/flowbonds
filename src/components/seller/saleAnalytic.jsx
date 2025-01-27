import React, { useEffect, useRef } from "react";
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from "chart.js";

const SalesAnalytic = () => {
  const chartInstanceRef = useRef(null); // To store the chart instance
  const canvasRef = useRef(null); // To reference the canvas element

  useEffect(() => {
    // Register required components for Chart.js
    Chart.register(LineController, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

    // Ensure the canvas element exists
    if (canvasRef.current) {
      // Destroy existing chart instance if it exists
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      try {
        // Create a new Chart instance
        chartInstanceRef.current = new Chart(canvasRef.current.getContext("2d"), {
          type: "line", // Change the type to 'line' for Line chart
          data: {
            labels: ["Jan", "Feb", "March", "April", "May","June","July",'August',"Sept","Oct","Nov","Dec"], // Change to time-based or other labels
            datasets: [
              {
                label: "Order",
                data: [50, 60, 40, 75, 20,90,45,56,76,32,87,54,67], // Your dataset
                fill: false, // Prevent filling under the line
                borderColor: "rgba(75, 192, 192, 1)", // Line color
                tension: 0.1, // Smoothness of the line
                pointBackgroundColor: "rgba(75, 192, 192, 1)", // Points color
                borderWidth: 2,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "", // Chart title
              },
              legend: {
                position: "bottom", // Legend position
              },
            },
            scales: {
              y: {
                beginAtZero: 5, // Start the Y axis from zero
              },
            },
          },
        });
      } catch (error) {
        console.error("Error creating chart:", error);
      }
    }

    // Cleanup function to destroy the chart on component unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null; // Reset the reference
      }
    };
  }, []); // Runs only on mount and unmount

  return (
    <div className="col-8 ml-6 card bg-light shadow p-3" style={{ }}>
      <div className="card-body ">
        <strong>
          <small>Sales Analytics</small>
        </strong>
        <i className="fas fa-ellipsis-v text-muted" style={{ float: "right", cursor: 'pointer' }}></i>
        <canvas ref={canvasRef} width="400" height="100">
          <p>Your browser does not support the canvas element.</p>
        </canvas>
      </div>
    </div>
  );
};

export default SalesAnalytic;