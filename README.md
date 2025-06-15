# Portfolio Website

A modern, responsive portfolio website built with React and styled-components.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Fast loading with optimized components
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Contact Form**: Functional contact form with EmailJS integration
- **Project Showcase**: Interactive project viewer with iframe integration

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Smooth animations
- **React Router** - Navigation
- **EmailJS** - Contact form functionality
- **Material-UI Icons** - Icon library
- **Typewriter Effect** - Typing animations

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Navbar, Footer)
│   ├── sections/        # Page sections (Hero, Skills, etc.)
│   ├── cards/           # Reusable card components
│   └── HeroBgAnimation/ # Background animation component
├── constants/           # App constants and configuration
├── data/               # Static data (bio, skills, etc.)
├── images/             # Image assets
├── utils/              # Utility functions and themes
└── assets/             # Other assets (PDFs, etc.)
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run lint` - Runs ESLint
- `npm run lint:fix` - Fixes ESLint issues automatically

## 🎨 Customization

### Colors and Themes

Edit `src/utils/Themes.js` to customize colors and themes.

### Content

Update the following files to customize content:
- `src/data/constants.js` - Personal information, skills, experience
- `src/constants/index.js` - Projects and navigation links

### Styling

All styling is done with styled-components. Edit individual component files to modify styles.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Configuration

### EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the EmailJS configuration in `src/components/sections/Contact.jsx`

### Deployment

The app is ready for deployment on platforms like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Navneet Agarwal**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For any questions or suggestions, please reach out through the contact form on the website or directly via email.
