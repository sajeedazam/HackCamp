import {Chart as ChartJS} from "chart.js/auto";
import React, { useState, useEffect } from "react";
import {Bar, PolarArea, Doughnut} from "react-chartjs-2";
import sourceData from "./Data/dummy.json";

const Statistics = () => {
    const [accessData, setAccessData] = useState([]);
    const [rsvpData, setRsvpData] = useState([]);
    const [foodData, setFoodData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const accessData = await parseAccess();
        setAccessData(accessData);
  
        const rsvpData = await parseRSVP();
        setRsvpData(rsvpData);

        const foodData = await parseFood();
        setFoodData(foodData);
        
      };
  
      fetchData();
    }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount
      const parseFood = async () => {
        let output = [];
        let hNum = 0;
        let kNum = 0;
        let vNum = 0;
        let cNum = 0;
        let oNum = 0;
        const lister = sourceData.map(data => data.diet);
    
        for (const s of lister) {
            if (s.toLowerCase() === "halal") {
                hNum = hNum + 1;
            }
        }

        for (const s of lister) {
            if (s.toLowerCase() === "kosher") {
                kNum = kNum + 1;
            }
        }

        for (const s of lister) {
            if (s.toLowerCase() === "vegan" || s.toLowerCase() === "vegetarian") {
                vNum = vNum + 1;
            }
        }

        for (const s of lister) {
            if (s.toLowerCase() === "celiac") {
                cNum = cNum + 1;
            }
        }

        for (const s of lister) {
            if (s.toLowerCase() === "other") {
                oNum = oNum + 1;
            }
        }

        return [hNum, kNum, vNum, cNum, oNum];

        return output;
    }

      const parseAccess = async () => {
        let yesNum = 0;
        let noNum = 0;
        let output = [];
        const lister = sourceData.map(data => data.accessability);
    
        for (const s of lister) {
            if (s.toLowerCase() === "yes") {
            yesNum = yesNum + 1;
            }
        }

        for (const s of lister) {
            if (s.toLowerCase() === "no") {
            noNum = noNum + 1;
            }
        }

        return [yesNum, noNum];
    };
  
    const parseRSVP = async () => {
      let yesNum = 0;
      let noNum = 0;
      let maybeNum = 0;
      const lister = sourceData.map((data) => data.rsvp);
  
      for (const s of lister) {
        if (s.toLowerCase() === "yes") {
          yesNum = yesNum + 1;
        } else if (s.toLowerCase() === "no") {
          noNum = noNum + 1;
        } else if (s.toLowerCase() === "maybe") {
          maybeNum = maybeNum + 1;
        }
      }
  
      return [yesNum, noNum, maybeNum];
    };
  
    return (
      <div>
  
        <div className="Access">
          <Bar
            data={{
              labels: ["yes", "no"],
              datasets: [
                {
                  label: "Count",
                  data: accessData,
                },
              ],
            }}
          />
        </div>
  
        <div className="RSVP">
          <Doughnut
            data={{
              labels: ["yes", "no", "maybe"],
              datasets: [
                {
                  label: "dataset",
                  data: rsvpData,
                  backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                  ],
                  hoverOffset: 4,
                },
              ],
            }}
          />
        </div>

        <div className="FoodRestrictions">
            <PolarArea
            data= {{
                labels: [
                    'Halal',
                    "Kosher",
                    'Vegeterian/Vegan',
                    'Celiac',
                    'Other'
                ],
                datasets: [{
                    label: "Food Restrictions",
                    data: foodData,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(75, 192, 192)',
                        'rgb(255, 205, 86)',
                        'rgb(201, 203, 207)',
                        'rgb(54, 162, 235)'
                      ] 
                }]
            }}>

            </PolarArea>
        </div>

      </div>
    );
  };
  
  export default Statistics;