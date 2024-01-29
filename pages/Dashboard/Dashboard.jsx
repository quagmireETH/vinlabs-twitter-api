import React, { useState, useEffect } from "react";
import Header_$VIN from "../components/Header_$VIN";
import Bottle from "../components/Bottle";
import { useSession } from "next-auth/react";

function Dashboard() {
  const [twitterData, setTwitterData] = useState({
    tweets: 0,
    comments: 0,
    retweets: 0,
    quoteTweets: 0,
  });
  const [percentage, setPercentage] = useState(0);
  const [isPageOne, setIsPageOne] = useState(true);

  const togglePage = () => {
    setIsPageOne(!isPageOne);
  };

  const { data: session } = useSession();

  const fetchTwitterData = async () => {
    try {
      const response = await fetch("/api/twitter-data");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      // Check if the data has the required properties
      if (data && typeof data === "object" && "tweets" in data) {
        setTwitterData(data);
      } else {
        // Set default values if the response is not as expected
        setTwitterData({ tweets: 0, comments: 0, retweets: 0, quoteTweets: 0 });
      }
    } catch (error) {
      console.error("Failed to fetch Twitter data:", error);
      // Set default values in case of an error
      setTwitterData({ tweets: 0, comments: 0, retweets: 0, quoteTweets: 0 });
    }
  };

  const getTwitterData = async () => {
    try {
      const response = await fetch("/api/twitter-data");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTwitterData(data);
    } catch (error) {
      console.error("Failed to fetch Twitter data:", error);
    }
  };

  useEffect(() => {
    getTwitterData();
  }, []);

  // Effect hook to fetch Twitter data on component mount and every 30 minutes
  useEffect(() => {
    fetchTwitterData();
    const interval = setInterval(fetchTwitterData, 1800000); // 1800000 ms = 30 minutes
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) clearInterval(interval);
        return prev + 1;
      });
    }, 100); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="h-screen relative">
        <Header_$VIN />

        <div className="flex justify-center mt-4">
          <button
            onClick={togglePage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {isPageOne ? "Switch to Page Two" : "Switch to Page One"}
          </button>
        </div>

        {isPageOne ? (
          <div className="flex justify-around items-center mt-12">
            <div className="border-2 rounded-xl p-4 w-1/3 shadow-md shadow-white">
              <div className="flex justify-between">
                <p>Activities</p>
                <p>Updates Every 30min</p>
              </div>
              <div>
                <table className="w-full text-center mt-10">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Type</th>
                      <th>Date</th>
                      <th>Points Gained</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{session?.user?.name || "Guest"}</td>
                      <td>{twitterData.tweets}</td>
                      <td>{twitterData.comments}</td>
                      <td>{twitterData.retweets}</td>
                      <td>{twitterData.quoteTweets}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-col w-1/3">
              <div className="flex justify-center items-center mb-12">
                <p className="text-3xl font-bold">My points : 0</p>
              </div>

              <div className="flex justify-center items-center mb-20">
                <Bottle percentage={percentage} />
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xl">Points from Engagement</p>
                  <p className="text-lg mt-2">0</p>
                </div>
                <div>
                  <p className="text-xl">Points from Engaging</p>
                  <p className="text-lg mt-2">0</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-around items-center mt-2">
            <div className="border-2 rounded-xl p-4 w-1/3 shadow-md shadow-white">
              <div className="flex justify-between">
                <p>Activities</p>
                <p>Updates Every 5min</p>
              </div>
              <div>
                <table className="w-full text-center mt-10">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Username</th>
                      <th>Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#1</td>
                      <td>Digi</td>
                      <td>1,200,420 pts</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-col w-1/3 ">
              <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center my-10 border-2 w-96 pl-5 py-2 rounded-3xl shadow-md shadow-white">
                  <p className="text-3xl font-bold">CURRENTLY IN NUMBER 1</p>
                  <p>UserName</p>
                  <p>15,690,750 pts</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col justify-center mb-10 border-2 rounded-3xl w-52 p-4 shadow-md shadow-white">
                  <p className="text-3xl font-bold">CURRENTLY IN NUMBER 2</p>
                  <p>UserName</p>
                  <p>15,690,750 pts</p>
                </div>

                <div className="flex flex-col justify-center mb-10 border-2 rounded-3xl w-52 p-4 shadow-md shadow-white">
                  <p className="text-3xl font-bold">CURRENTLY IN NUMBER 3</p>
                  <p>UserName</p>
                  <p>15,690,750 pts</p>
                </div>
              </div>

              <div className="flex justify-between items-center border-2 rounded-3xl px-4 py-2 mt-2 shadow-md shadow-white">
                <div className="flex flex-col justify-center text-center my-10">
                  <p className="text-xl font-bold">RANK</p>
                  <p className="text-3xl">15,690,750 pts</p>
                  <p className="text-xl">UserName</p>
                </div>
                <div className="h-24 border-r-2 my-5" />
                <div className="flex flex-col justify-center text-center my-10">
                  <p className="text-xl font-bold">RANK</p>
                  <p className="text-3xl">15,690,750 pts</p>
                  <p className="text-xl">UserName</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
