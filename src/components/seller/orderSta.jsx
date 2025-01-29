import React, { useEffect, useRef } from "react";
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from "chart.js";

const OrderSta = () => {
  const chartInstanceRef = useRef(null); // To store the chart instance
  const canvasRef = useRef(null); // To reference the canvas element

  useEffect(() => {
    // Register required components for Chart.js
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

    // Ensure the canvas element exists
    if (canvasRef.current) {
      // Destroy existing chart instance if it exists
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      try {
        // Create a new Chart instance
        chartInstanceRef.current = new Chart(canvasRef.current.getContext("2d"), {
          type: "doughnut",
          data: {
            labels: ["Completed Order", "Cancelled Order"],
            datasets: [
              {
                label: "Dataset",
                data: [12, 19],
                backgroundColor: [
                  "rgba(0, 0, 0, 0.6)", // Red
                  "hsla(251, 100.00%, 41.00%, 0.60)", // Blue
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "right",
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
    <div className="col-md-3  card bg-light shadow p-3" style={{ marginRight:50+'px' }}>
      <div className="card-body ">
              <strong> 
                 <small className="">Order Statistics</small>
              </strong>
              <i className="fas fa-ellipsis-v text-muted" style={{cursor:"pointer", float: "right" }}></i>
              <canvas ref={canvasRef} width="400" height="100">
          <p>Your browser does not support the canvas element.</p>
        </canvas>
      </div>
    </div>
  );
};

export default OrderSta;
