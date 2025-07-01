export const BREAKPOINTS = {
    small: 'min-width: 640px',
    medium: 'min-width: 768px',
    large: 'min-width: 1024px',
    xl: 'min-width: 1280px',
};

export const COLORS = {
  // BookSearch Primary Brand Colors (Inspired by Flipkart)
  primaryBlue: '#1F74BA', // Core brand color for trust and reliability, used in headers and key branding elements
  primaryYellow: '#F7E200', // Vibrant color for energy and optimism, ideal for buttons and highlights
  primaryOrange: '#F09120', // Warm, friendly accent for promotions and secondary buttons
  primaryWhite: '#FFFFFF', // Clean, neutral base for backgrounds and text clarity

  // BookSearch UI Colors (Inspired by Flipkart Website)
  brandeisBlue: '#0C73EB', // Primary navigation and interactive elements, conveys trust and engagement
  bananaYellow: '#F8E831', // Notifications and highlights, draws attention to deals or alerts
  antiFlashWhite: '#F1F3F6', // Subtle background for main content areas, ensures readability
  chineseSilver: '#C8C8C8', // Borders and secondary elements, provides neutral separation
  pastelRed: '#FF6164', // Call-to-action buttons and alerts, creates urgency and focus
  yankeesBlue: '#152336', // Primary text and dark accents, ensures high contrast and legibility

  // BookSearch Premium Colors (Inspired by Flipkart Plus)
  plusIndigo: '#1B1F65', // Deep, exclusive color for premium features like BookSearch Plus sections
  plusPastelOrange: '#FFB842', // Warm accent for premium highlights, conveys value
  plusBananaYellow: '#FFD73B', // Energetic premium color for badges and special offers
};

export const FONT = {
  // Primary font: Roboto (Inspired by Flipkart’s core typography)
  heading: 'font-roboto font-bold text-2xl', // Bold headings for titles and section headers, clear and authoritative
  subheading: 'font-roboto font-medium text-xl', // Medium-weight subheadings for category titles or book details
  body: 'font-roboto text-base text-gray-700', // Standard body text for descriptions, reviews, and general content
  caption: 'font-roboto text-sm text-gray-500', // Smaller text for secondary info like metadata or footnotes

  // Premium font: Poppins (Inspired by Flipkart’s marketing and Plus branding)
  premiumHeading: 'font-poppins font-semibold text-xl', // Geometric, modern headings for premium sections like BookSearch Plus
  premiumBody: 'font-poppins text-base text-gray-800', // Clean, stylish text for premium content or promotions
};


// example how to use
// import { COLORS } from '../theme';
// <div className="text-white" style={{ backgroundColor: COLORS.primary }}>
//   Welcome!
// </div>

