# ZMT - Vendor Booking Website

A modern, Airbnb-inspired vendor booking platform built with React, TypeScript, and Tailwind CSS. Connect with local vendors for events, celebrations, and special occasions.

## 🚀 Features

- **Responsive Design**: Beautiful, mobile-first design inspired by Airbnb
- **Vendor Grid**: Display 20+ vendors in an elegant card layout
- **Individual Vendor Pages**: Detailed pages with image slideshows, packages, and booking options
- **Modern UI**: Clean, minimalist design with smooth animations and hover effects
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ZMT.git
   cd ZMT
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build

```bash
npm run build
```

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages.

### Manual Deployment Steps:

1. **Enable GitHub Pages** in your repository settings
2. **Set source** to "GitHub Actions"
3. **Push to main branch** - deployment will happen automatically

### Repository Settings:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Set **Source** to "GitHub Actions"
4. The workflow will automatically deploy when you push to the main branch

## 📁 Project Structure

```
ZMT/
├── src/
│   ├── components/          # Reusable components
│   ├── pages/              # Page components
│   │   ├── HomePage.tsx    # Main homepage with vendor grid
│   │   └── VendorPage.tsx  # Individual vendor pages
│   ├── data/               # Static data
│   │   └── vendors.ts      # Vendor data array
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts        # Interface definitions
│   ├── App.tsx             # Main app component with routing
│   ├── main.tsx            # App entry point
│   └── index.css           # Global styles and Tailwind
├── .github/workflows/      # GitHub Actions
│   └── deploy.yml          # Deployment workflow
├── public/                 # Static assets
├── dist/                   # Build output
└── package.json            # Dependencies and scripts
```

## 🎨 Design Features

- **Airbnb-inspired UI**: Clean, modern design with attention to detail
- **Responsive Grid**: Adapts to different screen sizes
- **Hover Effects**: Smooth animations and transitions
- **Color Scheme**: Professional blue and gray palette
- **Typography**: Inter font family for readability
- **Card Design**: Rounded corners, shadows, and hover states

## 📱 Vendor Features

Each vendor page includes:
- **Image Slideshow**: Multiple high-quality images
- **Vendor Information**: Name, tagline, and bio
- **Owner Profile**: Photo and background story
- **Package Options**: Three-tier pricing structure
- **Booking Buttons**: Domestic and international options (placeholder)

## 🔧 Customization

### Adding New Vendors

Edit `src/data/vendors.ts` to add new vendors:

```typescript
{
  id: 'vendor-21',
  name: 'New Vendor',
  tagline: 'Amazing Services',
  bio: 'Description here...',
  ownerName: 'Owner Name',
  ownerBio: 'Owner background...',
  ownerImage: 'https://example.com/image.jpg',
  images: ['https://example.com/image1.jpg'],
  packages: [
    {
      id: 'basic',
      title: 'Basic Package',
      description: 'Description...',
      priceRange: '$100 - $200',
      features: ['Feature 1', 'Feature 2']
    }
  ],
  category: 'Category',
  location: 'Location'
}
```

### Styling

Modify `src/index.css` for custom styles and `tailwind.config.js` for theme customization.

## 🌐 Live Demo

Visit the live website: [https://yourusername.github.io/ZMT/](https://yourusername.github.io/ZMT/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions or support, please open an issue on GitHub.
