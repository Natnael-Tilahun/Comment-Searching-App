//Importing required dependencies and packages
const express = require('express');
const cors = require('cors');
const axios = require('axios');

//Creating an instance of express app
const app = express();

//Setting the port for the server to run on
const PORT = process.env.PORT || 4001;

//Using the cors middleware to allow cross-origin requests
app.use(cors())

//Defining a GET route to search for data based on a query parameter
app.get('/api/search/', async (req, res) => {
    const postId = 3
    const apiUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;

    //Extracting the query parameter from the request
    const query = req.query.q

    //Using axios to make an API request to get the data
    const response = await axios.get(apiUrl);

    //Extracting the data from the response
    const data = response.data;

    //Filtering the data based on the search query
    const filteredData = data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

    //Returning the filtered data as a JSON response
    res.json(filteredData);

})

//Starting the server and listening on the specified port
app.listen(PORT, (error) => {
    if (error) {
        console.log(`Port ${PORT} is already in use.`);
        return;
    }
    console.log(`Server is ready and listening on port ${PORT}`);
});
