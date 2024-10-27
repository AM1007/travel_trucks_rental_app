# Travel Trucks Rental application

## Overview

Travel Trucks Rental is your go-to spot for booking awesome travel trucks! Whether you’re planning a fun vacation, hitting the road for an adventure, or need wheels for work, we’ve got you covered. Our platform is super easy to use and packed with features to make your experience a breeze. [Let’s hit the road together!](https://travel-trucks-rental-app.vercel.app)

1. **Home Page**: Get a quick peek at all the cool services we offer! Feel free to make it look as snazzy as you want.
2. **Catalog Page**: Check out our awesome lineup of travel trucks! You can easily filter by location, gear, and type—find the perfect ride for your next adventure!
3. **Favorites Page**: This is your special spot! Here, you’ll find all the travel trucks you love saved just for you.
4. **Travel Truck Details**: Want the nitty-gritty? Here’s where you’ll find all the juicy details about each travel truck by ID. Happy truck hunting!

## Technical Specifications

- **Travel Truck Card**: Create a snazzy card layout to showcase our fabulous travel truck rental ads.
- **Pagination**: Show 4 fabulous ads on the first page of the catalog, and when you're ready for more, just hit that "Load More" button—easy peasy!
- **Favorites**: Want to save your favorites? Just click on the cute heart-shaped button! It’ll change color to show you which trucks you love best.
- **Persistence**: Don’t worry! Your favorite trucks will stay on your list even if you refresh the page. We’ve got your back!
- **Travel Truck Details**: When you want to dig deeper, click the "Show More" button to see all the juicy details about a camper ad.
- **Booking Form**: Ready to book your adventure? Fill out our fun form with your name, email, booking date, and any comments you have. Just remember, name, email, and booking date are must-haves before you hit submit!

## Technologies Used

### Frontend

- **Vite** - Ensures fast builds and hot module replacement.
- **HTML/CSS** - For structuring and styling web pages.
- **JavaScript** - Adds interactivity to web pages.
- **Axios** - Manages HTTP requests.
- **React** - Used for building user interface components.
- **Redux & ReduxToolkit** - Manages state across the app.
- **Redux-persist** - Maintains state between page reloads.

### Backend

- **MockAPI** - Simulates a backend for testing and development purposes.

## Routing with React Router

Implement routing using React Router with the following routes:

- `/`: Home page with a general description of the company's services.
- `/catalog`: Catalog page displaying campers of various configurations.
- `/favorites`: Favorites page showing advertisements added by the user.

Redirect users to the home page if they navigate to a non-existent route.

## Additional Task: Filtering

Add filtering functionality with the following options:

- **Text Input:** Filter advertisements based on the location entered by the user.
- **Checkboxes:** Filter advertisements based on selected equipment.
- **Radio Buttons:** Filter advertisements based on selected camper types.

## Conclusion

This app is all about making it super easy and fun for you to browse and book campers for your next adventure! By adding the cool features we talked about and keeping everything user-friendly, we’ll make sure you have a blast while using it. Get ready for some camping fun! 🏕️🚐

## Layoyt

[FIGMA](https://www.figma.com/design/6vTbzaB3EPgOreQz2jOJJe/Campers?node-id=0-1&node-type=canvas&t=KWmWMNxYsuysSqLP-0)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   ```
2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

3. **SView the application:**
   Open http://localhost:5173 in your web browser.
