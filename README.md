# React + TypeScript Card Renderer

This project is a React application built with TypeScript that renders cards using data from an external source. Users can filter the displayed cards based on status and language.

## Features

- Render cards from the [Mediums data](https://raw.githubusercontent.com/getsubly/test-data/refs/heads/master/cards.json).
- Filter cards by:
  - Status
  - Language

## Technologies Used

- React
- TypeScript
- Vite (for development)
- Vitest (for testing)

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (Node package manager)

### Installation

#### 1. Clone the repository:

  ```bash
  git clone https://github.com/isoftchamp/subly-card
  cd subly-card
  ```

#### 2. Install dependencies

  ```
  npm install
  ```

### Running the Application

To start the development server, run:

  ```
  npm run dev
  ```

Open your browser and navigate to http://localhost:5173 (or the port specified in your Vite configuration).

### Building the Application

To build the application for production, run:

  ```
  npm run build
  ```

### Running Tests

To run the tests using Vitest, execute:

  ```
  npm run test
  ```

To run tests in watch mode, execute:

  ```
  npm run test:watch
  ```

### Other Scripts

* Linting: Run `npm run lint` to lint the code.
* Preview: Run `npm run preview` to preview the production build.
* Formatting: Run `npm run format` to format the code with Prettier.

## Deployment

The application is deployed and can be accessed at: https://subly-card.vercel.app/

## Filtering Cards

Users can filter the cards using the provided filters for status and language. The application updates the displayed cards dynamically based on the selected filters.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.
