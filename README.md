# Fundwise - AI Financial Advisor

A modern, AI-powered financial advisory web application built with Next.js 14, TypeScript, and TailwindCSS.

## Features

### 🤖 AI-Powered Financial Advice
- Personalized investment recommendations
- Risk assessment and portfolio optimization
- 24/7 AI chat assistant for financial questions
- Smart budget analysis and suggestions

### 📊 Portfolio Management
- Real-time portfolio tracking and performance analytics
- Interactive charts and visualizations
- Asset allocation recommendations
- Goal-based investment planning

### 💰 Financial Planning
- Emergency fund tracking
- Retirement planning calculations
- House down payment goals
- Custom financial objectives

### 📱 Modern UI/UX
- Responsive design for all devices
- Beautiful, accessible interface with shadcn/ui
- Dark mode support
- Smooth animations and transitions

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/erikthought/cursor-fundwise.git
cd cursor-fundwise
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
cursor-fundwise/
├── app/                    # Next.js 14 app directory
│   ├── dashboard/         # Dashboard page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/
│   └── ui/               # Reusable UI components
├── lib/
│   └── utils.ts          # Utility functions
├── public/               # Static assets
└── ...config files
```

## Key Pages

### Landing Page (`/`)
- Hero section with value proposition
- Feature highlights
- Call-to-action sections
- Responsive navigation and footer

### Dashboard (`/dashboard`)
- Portfolio overview with key metrics
- Interactive charts and graphs
- Financial goal tracking
- AI chat assistant
- Asset allocation visualization

## Features Overview

### Portfolio Analytics
- Total portfolio value tracking
- Monthly savings goals
- Risk assessment scoring
- AI confidence metrics

### Interactive Charts
- Portfolio performance over time
- Asset allocation pie charts
- Goal progress indicators
- Financial trend analysis

### AI Assistant
- Real-time chat interface
- Contextual financial advice
- Personalized recommendations
- Goal-based suggestions

## Customization

### Adding New Features
1. Create new components in `components/ui/`
2. Add new pages in `app/` directory
3. Update navigation and routing as needed

### Styling
- Modify `app/globals.css` for global styles
- Update `tailwind.config.ts` for custom theme
- Use CSS variables for consistent theming

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on every push

### Other Platforms
The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## SEO & Performance

- Optimized metadata for each page
- Responsive images and modern formats
- Fast loading with Next.js optimization
- Accessible design following WCAG guidelines

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support, please open an issue in the repository.
