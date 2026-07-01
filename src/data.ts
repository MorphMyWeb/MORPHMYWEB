import { Service, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-design',
    title: 'Responsive Web Design',
    titleEn: 'Responsive Web Design',
    description: 'Μοναδικός, custom σχεδιασμός ιστοσελίδων προσαρμοσμένος στην ταυτότητα της επιχείρησής σας. Δίνουμε έμφαση στην εμπειρία του χρήστη (UX) και το μοντέρνο UI.',
    descriptionEn: 'Unique, custom website design tailored to your brand identity. We emphasize user experience (UX) and modern UI layout.',
    icon: 'Monitor',
    features: ['Custom UI/UX Σχεδιασμός', 'Mobile First Προσέγγιση', 'Figma Wireframing', 'Smooth Animations'],
    featuresEn: ['Custom UI/UX Design', 'Mobile-First Approach', 'Figma Wireframing', 'Smooth Animations'],
    badge: 'Popular'
  },
  {
    id: 'business-sites',
    title: 'Business Websites',
    titleEn: 'Business Websites',
    description: 'Εταιρικές ιστοσελίδες που χτίζουν αξιοπιστία, αναδεικνύουν τις υπηρεσίες σας και μετατρέπουν τους επισκέπτες σε πελάτες.',
    descriptionEn: 'Corporate websites that build trust, showcase your services, and convert website visitors into loyal clients.',
    icon: 'Briefcase',
    features: ['Στοχευμένοι Tίτλοι & CTAs', 'Φόρμες Επικοινωνίας & Lead capture', 'Ταχεία Φόρτωση < 1s', 'Απόλυτη Ασφάλεια SSL'],
    featuresEn: ['Conversion-optimized CTAs', 'Lead Capture Forms', 'Fast Load Times < 1s', 'Dynamic SSL Encryption']
  },
  {
    id: 'seo-optimization',
    title: 'SEO & Google Ranking',
    titleEn: 'SEO Optimization',
    description: 'Στρατηγική βελτιστοποίηση On-Page και Off-Page SEO ώστε η ιστοσελίδα σας να εμφανίζεται στις πρώτες θέσεις των αποτελεσμάτων αναζήτησης Google.',
    descriptionEn: 'Strategic On-Page and Off-Page search engine optimization to rank your website on the very first page of Google search.',
    icon: 'Search',
    features: ['Έρευνα Λέξεων Κλειδιών', 'Technical SEO & Speed Boost', 'Google Search Console Setup', 'Τοπικό SEO (Google Maps)'],
    featuresEn: ['Keyword Research & Strategy', 'Technical SEO & Speed Boost', 'Google Search Console Setup', 'Local SEO (Google Maps)']
  },
  {
    id: 'maintenance',
    title: 'Υποστήριξη & Φιλοξενία',
    titleEn: 'Hosting & Support',
    description: 'Premium φιλοξενία σε γρήγορους Cloud Servers και συνεχή τεχνική υποστήριξη για να λειτουργεί η ιστοσελίδα σας απροβλημάτιστα 24/7.',
    descriptionEn: 'Premium hosting on lighting-fast Cloud Servers and ongoing technical support to keep your site running safely 24/7.',
    icon: 'Shield',
    features: ['Καθημερινά Backups', 'Uptime Monitoring 99.99%', 'Security Firewall & Updates', 'Άμεση Τεχνική Επίλυση'],
    featuresEn: ['Daily Automated Backups', 'Uptime Monitoring 99.99%', 'Security Firewall & Updates', 'Instant Helpdesk Support']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Aura Premium Beauty',
    titleEn: 'Aura Premium Beauty',
    category: 'E-Commerce / Καλλυντικά',
    categoryEn: 'E-Commerce / Cosmetics',
    description: 'Ένα μινιμαλιστικό και εξαιρετικά γρήγορο ηλεκτρονικό κατάστημα για premium μάρκα καλλυντικών με glassmorphic περιβάλλον χρήσης και seamless εμπειρία αγοράς.',
    descriptionEn: 'A minimalist and lighting-fast e-shop for a premium cosmetics brand, featuring custom glassmorphism, responsive interface, and sleek purchase funnel.',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Tailwind CSS', 'Stripe API', 'Framer Motion'],
    link: '#',
    year: '2026',
    stats: { label: 'Αύξηση Πωλήσεων', value: '+42%' },
    isFeatured: true
  },
  {
    id: 'project-2',
    title: 'Novus Law Office',
    titleEn: 'Novus Law Office',
    category: 'Corporate / Εταιρικό',
    categoryEn: 'Corporate / Legal',
    description: 'Εταιρική ιστοσελίδα υψηλού κύρους για δικηγορικό γραφείο στη Θεσσαλονίκη, με έμφαση στην καθαρή τυπογραφία, την εύκολη πλοήγηση και το κλείσιμο ραντεβού.',
    descriptionEn: 'High-end corporate website for a premier law firm in Thessaloniki, with an emphasis on bold editorial typography, intuitive navigation, and online book appointments.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop',
    tags: ['Astro', 'TypeScript', 'Tailwind', 'Bookings Integration'],
    link: '#',
    year: '2025',
    stats: { label: 'Νέα Leads', value: '+150%' },
    isFeatured: true
  },
  {
    id: 'project-3',
    title: 'AgroTech Solutions',
    titleEn: 'AgroTech Solutions',
    category: 'Landing Page / Τεχνολογία',
    categoryEn: 'Landing Page / AgroTech',
    description: 'Πλατφόρμα παρουσίασης έξυπνων συστημάτων άρδευσης και γεωργίας ακριβείας, εστιάζοντας στο B2B lead generation.',
    descriptionEn: 'Agrotechnology B2B landing page for smart irrigation and precision farming systems. Highly conversion-driven UI.',
    image: 'https://images.unsplash.com/photo-1628102476597-834c384672e4?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'CSS Gradients', 'Google Maps API', 'Formik'],
    link: '#',
    year: '2026',
    stats: { label: 'Conversion Rate', value: '4.8%' },
    isFeatured: true
  },
  {
    id: 'project-4',
    title: 'The Artisans Hub',
    titleEn: 'The Artisans Hub',
    category: 'Portfolio / Αρχιτεκτονική',
    categoryEn: 'Portfolio / Architecture',
    description: 'Ψηφιακή γκαλερί και portfolio για κορυφαίο αρχιτεκτονικό γραφείο, με full-screen slider, dark theme, smooth page transitions και 3D visualizers.',
    descriptionEn: 'Creative digital gallery and portfolio for a premier architecture firm, featuring immersive full-screen grids, deep blacks, and seamless spatial scale transitions.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    tags: ['Vite', 'Three.js', 'Tailwind', 'Preact'],
    link: '#',
    year: '2025',
    stats: { label: 'Traffic Growth', value: '+85%' }
  },
  {
    id: 'project-5',
    title: 'Velo Electric Bikes',
    titleEn: 'Velo Electric Bikes',
    category: 'E-Shop / Ηλεκτροκίνηση',
    categoryEn: 'Products / E-Bikes',
    description: 'Μοντέρνα interactive σελίδα παρουσίασης και παραμετροποίησης ηλεκτρικών ποδηλάτων με 3D parallax effects και real-time κοστολόγηση αξεσουάρ.',
    descriptionEn: 'A high-fidelity interactive product showcase of electric bikes, complete with multi-category build configurations, and animated technical spec highlights.',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Redux Toolkit'],
    link: '#',
    year: '2026',
    stats: { label: 'Pre-orders', value: '1.2k+' }
  },
  {
    id: 'project-6',
    title: 'Zest Food & Cafe Bar',
    titleEn: 'Zest Food & Cafe Bar',
    category: 'Business / Γαστρονομία',
    categoryEn: 'Business / Gastronomy',
    description: 'Μια διαδραστική ιστοσελίδα εστιατορίου με dynamic μενού, online κρατήσεις τραπεζιών και ζωντανή ενσωμάτωση κριτικών Google.',
    descriptionEn: 'Ambiance-driven website for a culinary hot spot, with live interactive menu cards, online table bookings, and direct Google Review syncing.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    tags: ['Vue.js', 'Tailwind CSS', 'Google Maps', 'Strapi CMS'],
    link: '#',
    year: '2025',
    stats: { label: 'Κρατήσεις / Μήνα', value: '380+' }
  }
];

export const OWNER_INFO = {
  name: 'Φώτης Μορφόπουλος',
  nameEn: 'Fotis Morfopoulos',
  role: 'Founder & Lead UI/UX Engineer',
  roleEn: 'Founder & Lead UI/UX Engineer',
  location: 'Θεσσαλονίκη, Ελλάδα',
  locationEn: 'Thessaloniki, Greece',
  phone: '6944665447',
  phoneFormatted: '+30 6944 665447', // Added formatting for clean UI display
  email: 'morphmywebsite@gmail.com', // Dynamically retrieved from additional metadata
  address: 'Θεσσαλονίκη, Ελλάδα',
  addressEn: 'Thessaloniki, Greece',
  bio: 'Δημιουργούμε ιστοσελίδες που συνδυάζουν το φουτουριστικό, premium design με την κορυφαία ταχύτητα και τη στρατηγική SEO, βοηθώντας τους πελάτες μας να ξεχωρίσουν.',
  bioEn: 'We deliver premium, cyberpunk-grade responsive websites with blistering load times and elite SEO rankings, helping businesses outscale their competition.'
};
