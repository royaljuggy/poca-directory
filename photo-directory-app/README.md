# photo-directory-app

This is a one-page photo directory application built with React and TypeScript. The application allows users to search and filter through a collection of photos, displaying relevant details for each photo.

## Features

- **Search Functionality**: Users can input search queries to find specific photos based on titles or descriptions.
- **Filtering Options**: Users can filter photos based on various criteria to narrow down their selection.
- **Responsive Design**: The application is designed to be user-friendly and responsive across different devices.

## Project Structure

```
photo-directory-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── PhotoCard.tsx
│   │   ├── SearchBar.tsx
│   │   └── FilterPanel.tsx
│   ├── data
│   │   └── photos.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd photo-directory-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Usage

Once the application is running, you can use the search bar to find specific photos and utilize the filter panel to refine your search results. Each photo is displayed with its title, description, and a temporary file path for the image.

## License

This project is licensed under the MIT License.