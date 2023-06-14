# ZeroLM Search: Build a Google Search Clone with ZeroLM

This repository contains the source code for a basic web application that leverages the capabilities of ZeroLM, a powerful API interface for large language model, to build a Google search clone.

## Overview

This tutorial demonstrates how you can integrate ZeroLM into a basic web application to enable intelligent search functionality. We have built a Google Search clone, and under the hood, the application uses ZeroLM to handle search queries and return relevant results.

## Getting Started

To get started with this application, follow these steps:

1. **Clone the repository**

   Use the following command to clone this repository:

```csharp
git clone https://github.com/CrypVestAi/zerolm-search.git
```

2. **Install Dependencies**

Navigate into the project directory and install the necessary dependencies using npm:

```csharp
cd zerolm-search
npm install
```

3. **Set up your ZeroLM API Key**

Rename the `.env.example` file to `.env` and replace `<YOUR_API_KEY>` with your actual ZeroLM API key.

4. **Start the server**

Run the following command to start the server:

```csharp
node app.js
```



You should see the message `Server started on port 3000`.

5. **Test the application**

Open your browser and navigate to `http://localhost:3000` to see the application in action. Type a query into the search bar and see how ZeroLM generates relevant search results.

## Project Structure

- `app.js`: This is the main server file where we set up our Express.js server and handle the '/search' POST route.
- `public/index.html`: This file contains the HTML for our Google Search clone. It includes a search bar and a place to display search results.
- `public/main.js`: This JavaScript file handles the functionality on the client side. It makes a POST request to our server when the search button is clicked or when the enter key is pressed in the search bar, and it displays the results that it receives from the server.
- `public/main.css`: This css file contains styling code for the client side

## Contributing

We welcome contributions to this project. If you have a feature you'd like to add or a bug you'd like to fix, feel free to open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

If you have any questions about this project, please open an issue or reach out to us directly via https://twitter.com/civai_official.
