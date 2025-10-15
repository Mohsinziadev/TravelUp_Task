# TravelUp - Travel Products Listing Website

A modern, responsive React application for browsing and discovering travel products, experiences, and destinations. Built with React, Redux Toolkit, and Tailwind CSS.

## 🌟 Features

- **Product Listing**: Browse through various travel products and experiences
- **Search & Filter**: Advanced search functionality with category filtering
- **Responsive Design**: Mobile-first design that works on all devices
- **Product Details**: Detailed product pages with comprehensive information
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Newsletter Signup**: Stay updated with the latest travel deals and products

## 🚀 Tech Stack

- **Frontend**: React 18, Redux Toolkit, React Router DOM
- **Styling**: Tailwind CSS, Custom CSS
- **Icons**: Heroicons
- **HTTP Client**: Axios
- **Pagination**: React Paginate
- **Animation**: Framer Motion

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd travelup-products
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your environment variables:

```env
REACT_APP_PRODUCT_API_BASE_URL=https://your-api-url.com
```

4. Start the development server:

```bash
npm start
# or
yarn start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── @components/          # Reusable UI components
│   ├── Header.jsx       # Site header with navigation
│   ├── Footer.jsx       # Site footer
│   └── SplashScreen.jsx # Loading screen
├── @modules/            # Feature modules
│   ├── ProductScreen/   # Main product listing page
│   └── ProductDetails/  # Product detail page
├── @store/              # Redux store configuration
│   ├── main/
│   │   ├── productSlice.js  # Product state management
│   │   └── appSlice.js      # App-wide state
│   └── rootReducer.js   # Root reducer
├── @routes/             # Routing configuration
├── @customHooks/        # Custom React hooks
├── @helpers/            # Utility functions and styles
├── api/                 # API configuration
└── assets/              # Static assets (images, icons, SVGs)
```

## 🎨 Key Components

### ProductScreen

- Main product listing page with search and filtering
- Pagination support for large product catalogs
- Responsive grid layout
- Loading states and error handling

### ProductCard

- Individual product display component
- Product information, pricing, and ratings
- Category tags and availability status
- Hover effects and smooth transitions

### SearchSec

- Advanced search functionality
- Category-based filtering
- Real-time search with debouncing
- Responsive design for all screen sizes

## 🔧 Configuration

### Environment Variables

- `REACT_APP_PRODUCT_API_BASE_URL`: Base URL for the product API

### API Integration

The application uses Axios for HTTP requests with:

- Request/response interceptors
- Error handling
- Timeout configuration
- Automatic JSON parsing

## 📱 Responsive Design

The application is built with a mobile-first approach:

- Breakpoints: xs, sm, md, lg, xl
- Flexible grid layouts
- Touch-friendly interactions
- Optimized images and assets

## 🎯 Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (irreversible)

## 🚀 Deployment

1. Build the application:

```bash
npm run build
```

2. Deploy the `build` folder to your hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Email: support@travelup.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ for TravelUp
