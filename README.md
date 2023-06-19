This is a course catalog React application that allows users to browse and filter through a collection of courses. It fetches course data from an API and provides features such as filtering by category, liking/unliking courses, and displaying loading spinners during data fetching.

project url - https://shivamkashyap-top-courses.netlify.app/

## Features

- Display a collection of courses based on selected categories.
- Filter courses by category using the filter buttons.
- Like/unlike courses to save them for future reference.
- Loading spinners to indicate when data is being fetched.
- Responsive design for optimal viewing on different devices.

## Technologies Used

- React: JavaScript library for building user interfaces.
- React Hooks: Used to manage state and lifecycle methods in functional components.
- Tailwind CSS: Utility-first CSS framework for styling the application.
- react-icons: Library for using icons in React components.
- react-toastify: Library for displaying toast messages.
- API Integration: Fetches course data from an external API.

## Project Structure

The project consists of the following components:

- `App.js`: The main component that manages the application state and fetches course data from the API.
- `Card.js`: Renders an individual course card with an image, title, description, and like button.
- `Cards.js`: Renders a collection of course cards based on the selected category.
- `Filter.js`: Renders filter buttons to select course categories.
- `Navbar.js`: Renders a navigation bar with the application title.
- `Spinner.js`: Renders a loading spinner during data fetching.

## Installation

To run the application locally, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open the application in your browser: `http://localhost:3000`

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

---

Feel free to customize and enhance this README file based on your project's specific details and requirements.
