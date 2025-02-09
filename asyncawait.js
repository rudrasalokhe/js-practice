// Simulating a fetch call with a Promise
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data received from server");
      }, 2000); // Simulates a 2-second delay
    });
  }
  
  // Using async and await
  async function getData() {
    console.log("Fetching data...");
    const data = await fetchData(); // Pauses here until fetchData resolves
    console.log(data); // Prints: "Data received from server"
  }
  
  getData();
  