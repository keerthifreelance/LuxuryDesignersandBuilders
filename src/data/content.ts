import { ProjectItem, ServiceItem, TestimonialItem, ProcessStep } from '../types';

export const BRAND_INFO = {
  name: 'Luxury Designers & Builders',
  websiteUrl: 'https://www.luxurydesignersandbuilders.in',
  tagline: 'From Vision to Reality.',
  secondaryTagline: 'We Design Your Dream. We Build Your Trust.',
  phoneDisplay: '96004 70328',
  phoneRaw: '09600470328',
  phoneIntl: '+919600470328',
  address: '5/377, Lakshmi Nagar, West St, Kalloorani, Aruppukattai, Virudhunagar (dt), Tamil Nadu 626105.',
  city: 'Aruppukkottai',
  state: 'Tamil Nadu',
  rating: '5.0 ★',
  reviewsCount: '19 Google Reviews',
  mapDirectionsUrl: 'https://www.google.com/maps/place/Luxury+Designers+and+Builders/@9.6384453,77.9810139,13z/data=!4m6!3m5!1s0x3b013bc3007cf8e5:0x22c142536e2caf66!8m2!3d9.6384453!4d77.9810139!16s%2Fg%2F11w4y3_0c4',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251960.52187299076!2d77.98101389989456!3d9.638445305819042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b013bc3007cf8e5%3A0x22c142536e2caf66!2sLuxury%20Designers%20and%20Builders!5e1!3m2!1sen!2sin!4v1786681804426!5m2!1sen!2sin',
  whatsappUrl: 'https://wa.me/919600470328?text=Hello%20Luxury%20Designers%20%26%20Builders%2C%20I%20would%20like%20to%20inquire%20about%20a%20project.',
  facebookUrl: 'https://www.facebook.com/luxurybuilders07?rdid=zdH4W6reMLpx78Ox&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Gvwiyr1HS%2F#',
  instagramUrl: 'https://www.instagram.com/luxury_designers_builders/?hl=en'
};

export const FOUNDER_INFO = {
  name: 'Er. Raj karan M',
  title: 'Founder & Civil Engineer',
  experience: '8+ Years',
  image: '/images/profile.png',
  bio: 'With over 8+ years of dedicated civil engineering and architectural planning experience, Er. Raj karan M founded Luxury Designers & Builders with a vision to bridge imaginative architectural concepts with flawless Vastu-compliant physical construction in Aruppukkottai and across Tamil Nadu.',
  fullBio: 'Er. Raj karan M brings deep structural engineering rigor, Vastu Shastra expertise, and advanced 3D rendering precision to every project. Having spearheaded over 25+ residential villas, luxury interior transformations, and commercial developments, he ensures 100% design fidelity matching approved renders into final turnkey completion.',
  quote: "Architecture is not merely about concrete and steel—it is the art of crafting spaces where families build memories, businesses thrive, and dreams come to life with absolute trust.",
  stats: [
    { label: 'EXPERIENCE', value: '8+ Yrs' },
    { label: 'PROJECTS BUILT', value: '25+' },
    { label: 'VASTU COMPLIANCE', value: '100%' },
    { label: 'CLIENT RATING', value: '5.0 ★' }
  ],
  specialties: [
    'Vastu Shastra 2D Architectural Blueprinting',
    'Structural & Civil Engineering Management',
    'Photorealistic 3D Render-to-Reality Execution',
    'Bespoke Luxury Interior Architecture & Styling',
    'End-to-End Turnkey Civil Construction'
  ]
};

export const HERO_SLIDES = [
  {
    id: 1,
    image: '/images/pics/topslides/heroslide1.jpeg',
    tagline: 'ARUPPUKKOTTAI • ARCHITECTURE & INTERIORS',
    headlineMain: 'FROM VISION TO',
    headlineGold: 'REALITY.',
    subhead: 'We design your dream space with precision Vastu planning, 3D visualization, and turnkey build excellence.',
    badge: 'LUXURY DESIGNERS & BUILDERS'
  },
  {
    id: 2,
    image: '/images/pics/topslides/heroslide2.jpeg',
    tagline: 'BESPOKE INTERIOR ARCHITECTURE',
    headlineMain: 'ELEGANCE IN',
    headlineGold: 'EVERY DETAIL.',
    subhead: 'Custom ceiling design, mood lighting, and curated premium finishes tailored around your personality.',
    badge: 'LUXURY LIVING & INTERIORS'
  },
  {
    id: 3,
    image: '/images/pics/topslides/heroslide3.jpeg',
    tagline: 'VASTU-COMPLIANT ARCHITECTURE',
    headlineMain: 'CRAFTED WITH',
    headlineGold: 'MATERIAL HONESTY.',
    subhead: 'Harmonious spatial distribution, natural ventilation, and timeless elevation aesthetics for modern luxury homes.',
    badge: 'ARCHITECTURAL EXCELLENCE'
  },
  {
    id: 4,
    image: '/images/pics/topslides/heroslide4.jpeg',
    tagline: 'PHOTOREALISTIC 3D VISUALIZATION',
    headlineMain: 'SEE IT BEFORE',
    headlineGold: 'WE BUILD IT.',
    subhead: 'Experience 100% architectural fidelity matching approved 3D renders into final physical construction.',
    badge: '3D TO REALITY'
  },
  {
    id: 5,
    image: '/images/pics/topslides/heroslide5.jpeg',
    tagline: 'MODULAR KITCHENS & SUITES',
    headlineMain: 'FUNCTIONALITY MEETS',
    headlineGold: 'OPULENCE.',
    subhead: 'Ergonomic kitchen design, acrylic cabinetry, utility storage, and seamless marble countertops.',
    badge: 'MODULAR KITCHEN SPECIALISTS'
  },
  {
    id: 6,
    image: '/images/pics/topslides/heroslide6.jpeg',
    tagline: 'BEDROOMS & PRIVATE SANCTUARIES',
    headlineMain: 'TRANQUIL &',
    headlineGold: 'REFINED SPACES.',
    subhead: 'Bespoke bedroom wardrobes, upholstered headboards, and accent lighting for ultimate relaxation.',
    badge: 'LUXURY BEDROOM INTERIORS'
  },
  {
    id: 7,
    image: '/images/pics/topslides/heroslide7.jpeg',
    tagline: 'EXTERIOR ELEVATIONS & FACADES',
    headlineMain: 'MONUMENTAL',
    headlineGold: 'CURB APPEAL.',
    subhead: 'Architectural facade lighting, contemporary stone cladding, and distinctive structural silhouettes.',
    badge: 'EXTERIOR DESIGN'
  },
  {
    id: 8,
    image: '/images/pics/topslides/heroslide8.jpeg',
    tagline: 'TURNKEY CONSTRUCTION MANAGEMENT',
    headlineMain: 'WE BUILD',
    headlineGold: 'YOUR TRUST.',
    subhead: 'End-to-end site management, civil engineering rigor, quality material procurement, and timely delivery.',
    badge: 'TURNKEY DESIGN & BUILD'
  },
  {
    id: 9,
    image: '/images/pics/topslides/heroslide9.jpeg',
    tagline: 'COMMERCIAL & CORPORATE SPACES',
    headlineMain: 'PRESTIGIOUS',
    headlineGold: 'CORPORATE ENVIRONMENTS.',
    subhead: 'Modern reception showcases, executive cabin partitions, and high-impact retail shopfront designs.',
    badge: 'COMMERCIAL ARCHITECTURE'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Interior Design',
    shortDesc: 'Bespoke luxury interior concepts crafted for modern residential and commercial spaces.',
    fullDesc: 'Custom furniture, premium material curation, spatial harmony, lighting design, and tailored finishes designed around your personality.',
    iconName: 'chair',
    image: '/images/pics/workpics/INTERIOR1.jpeg'
  },
  {
    number: '02',
    title: 'Architectural Design',
    shortDesc: 'Comprehensive architectural planning and structural elegance for timeless homes.',
    fullDesc: 'End-to-end structural design blending climate-responsive architecture, natural ventilation, elevation aesthetic, and structural integrity.',
    iconName: 'architecture',
    image: '/images/pics/workpics/David_prem.jpg.jpeg'
  },
  {
    number: '03',
    title: '2D Floor Planning',
    shortDesc: 'Precise Vastu-compliant 2D architectural floor layouts and structural blueprints.',
    fullDesc: 'Optimal space utilization, clear room dimensioning, electrical & plumbing schematics, and municipal approval-ready drawings.',
    iconName: 'square_foot',
    image: '/images/pics/workpics/2_20251106_102459_0001.png'
  },
  {
    number: '04',
    title: '3D Visualization',
    shortDesc: 'Photorealistic 3D interior & exterior walk-through renderings before construction.',
    fullDesc: 'Experience your future residence in lifelike 3D detail. Review lighting, textures, furniture placement, and facade designs with zero guesswork.',
    iconName: 'view_in_ar',
    image: '/images/pics/workpics/EXTERIOR3.jpeg'
  },
  {
    number: '05',
    title: 'Design & Build',
    shortDesc: 'Turnkey architectural construction from ground-up excavation to final handover.',
    fullDesc: 'Complete project execution handled under one roof. Material quality assurance, engineering oversight, site management, and timely completion.',
    iconName: 'construction',
    image: '/images/pics/workpics/CONSTRUCTION2.jpeg'
  },
  {
    number: '06',
    title: 'Renovation',
    shortDesc: 'Transform existing residential and commercial properties into modern architectural masterpieces.',
    fullDesc: 'Structural redesign, interior remodeling, facade updates, structural strengthening, and utility upgrades with minimal disruption.',
    iconName: 'home_repair_service',
    image: '/images/pics/workpics/BA2.jpeg'
  },
  {
    number: '07',
    title: 'Exterior Design',
    shortDesc: 'Striking modern elevation facades, landscape integration, and boundary aesthetics.',
    fullDesc: 'Parametric wood paneling, louvers, stone cladding, landscape illumination, and courtyard designs that make a memorable statement.',
    iconName: 'landscape',
    image: '/images/pics/workpics/Night_view.jpg.jpeg'
  },
  {
    number: '08',
    title: 'Ceiling Works',
    shortDesc: 'Bespoke modern false ceiling designs, gypsum board styling, and customized cove lighting solutions.',
    fullDesc: 'Creating structural depth and elegance with gypsum styling, acoustic panel installations, modular wooden coves, and energy-efficient light planning.',
    iconName: 'layers',
    image: '/images/pics/workpics/CEILING1.jpeg'
  },
  {
    number: '09',
    title: 'Hall Design',
    shortDesc: 'Bespoke grand living hall styling, custom TV wall paneling, and foyer screens.',
    fullDesc: 'Crafting luxurious double-height main halls, acoustic wall louvers, custom marble TV units, and ambient indirect cove lighting for royal living spaces.',
    iconName: 'chair',
    image: '/images/pics/workpics/HALL1.jpeg'
  }
];

export interface ServiceChargeItem {
  id: number;
  service: string;
  rate: string;
  highlight?: boolean;
}

export const SERVICE_CHARGES: ServiceChargeItem[] = [
  { id: 1, service: '2D FLOOR PLAN (BASIC)', rate: 'Rs. 1 / SQ.FT' },
  { id: 2, service: '2D FLOOR PLAN (WITH FURNITURE)', rate: 'Rs. 1.5 / SQ.FT' },
  { id: 3, service: '3D FLOOR PLAN', rate: 'Rs. 3 / SQ.FT' },
  { id: 4, service: 'STRUCTURAL DESIGN', rate: 'Rs. 5 / SQ.FT' },
  { id: 5, service: 'INTERIOR DESIGN', rate: 'Rs. 20 / SQ.FT', highlight: true },
  { id: 6, service: 'FRONT ELEVATION DESIGN', rate: 'Rs. 10 / SQ.FT' },
  { id: 7, service: '3D WALKTHROUGH ANIMATION', rate: 'Rs. 2000 / MIN' },
  { id: 8, service: 'CONSTRUCTION CONSULTANTS', rate: 'CUSTOM QUOTE', highlight: true }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-video-1',
    title: '3D Architecture & Exterior Walkthrough',
    category: 'VIDEOS',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR15.jpeg',
    videoUrl: '/images/pics/workpics2/video1.mp4',
    description: 'Exclusive 3D walkthrough video showcasing architectural elevation execution, interior spatial planning, structural detailing, and construction quality.',
    details: { area: '3,800 Sq.Ft', duration: 'Full HD Video', style: '3D Walkthrough' }
  },
  {
    id: 'proj-video-2',
    title: 'Resorts at vembar',
    category: 'VIDEOS',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/HALL2.jpeg',
    videoUrl: '/images/pics/workpics2/video2.mp4',
    description: 'Immersive interior spatial elevation video highlighting custom wall paneling, ambient LED lighting, and furniture arrangements.',
    details: { area: '2,400 Sq.Ft', duration: 'Full HD Video', style: 'Interior Walkthrough' }
  },
  {
    id: 'proj-video-3',
    title: 'Luxury Suite & False Ceiling Walkthrough',
    category: 'VIDEOS',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR15.jpeg',
    videoUrl: '/images/pics/workpics2/video3.mp4',
    description: 'High-definition 3D video walkthrough detailing bespoke false ceiling coving, spot lighting grids, and suite layout.',
    details: { area: '1,800 Sq.Ft', duration: 'Full HD Video', style: 'Ceiling & Suite Tour' }
  },
  {
    id: 'proj-video-4',
    title: 'Exterior Facade & Villa Elevation Walkthrough',
    category: 'VIDEOS',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR17.jpeg',
    videoUrl: '/images/pics/workpics2/video4.mp4',
    description: 'Comprehensive 360-degree architectural facade video demonstrating multi-tier cantilever slabs, stone cladding, and lighting.',
    details: { area: '4,500 Sq.Ft', duration: 'Full HD Video', style: 'Exterior 3D Tour' }
  },
  {
    id: 'proj-video-5',
    title: 'Exterior Tour',
    category: 'VIDEOS',
    location: 'Madurai, TN',
    image: '/images/pics/workpics/KITCHEN3.jpeg',
    videoUrl: '/images/pics/workpics2/video5.mp4',
    description: 'Detailed modular kitchen and dining space walkthrough showcasing acrylic cabinetry, quartz counters, and storage hardware.',
    details: { area: '600 Sq.Ft', duration: 'Full HD Video', style: 'Kitchen Design Video' }
  },
  {
    id: 'proj-1',
    title: 'Kalloorani Heritage Residence',
    category: 'RESIDENTIAL',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/Elevation_2.jpg.jpeg',
    description: 'A 4,200 sq.ft. modern courtyard bungalow combining natural limestone, teak wood louvers, and expansive glass facades.',
    details: { area: '4,200 Sq.Ft', duration: '12 Months', style: 'Modern Vernacular' }
  },
  {
    id: 'proj-2',
    title: 'Royal Living Suite',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR1.jpeg',
    description: 'Double-height living space with custom marble fluting, indirect warm LED coving, and handcrafted Italian leather seating.',
    details: { area: '1,800 Sq.Ft', duration: '4 Months', style: 'Minimalist Luxury' }
  },
  {
    id: 'proj-3',
    title: 'The Modern Chef Kitchen',
    category: 'KITCHEN',
    location: 'Madurai, TN',
    image: '/images/pics/workpics/KITCHEN1.jpeg',
    description: 'Ergonomic island kitchen with quartz countertops, hidden pantry hardware, matte acrylic cabinetry, and ambient under-shelf lighting.',
    details: { area: '450 Sq.Ft', duration: '2 Months', style: 'Contemporary Modular' }
  },
  {
    id: 'proj-5',
    title: 'Lakshmi Nagar Villa Facade',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR1.jpeg',
    description: 'Contemporary multi-tiered facade with floating cantilever slabs, ambient warm architectural sconces, and automated gate entry.',
    details: { area: '5,000 Sq.Ft', duration: '14 Months', style: 'Contemporary Luxury' }
  },
  {
    id: 'proj-6',
    title: 'Vertex Commercial Hub',
    category: 'COMMERCIAL',
    location: 'Virudhunagar, TN',
    image: '/images/pics/workpics/COMMERCIAL1.jpeg',
    description: 'Modern office space with acoustic glass partitions, ergonomic workstation layouts, and executive meeting lounges.',
    details: { area: '3,600 Sq.Ft', duration: '6 Months', style: 'Corporate Modern' }
  },
  {
    id: 'proj-7',
    title: 'Bespoke Gypsum False Ceiling',
    category: 'CEILING',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/CEILING1.jpeg',
    description: 'Custom-designed gypsum false ceiling with recessed warm LED strip coving, spotlight arrangements, and high-quality paint finish.',
    details: { area: '1,200 Sq.Ft', duration: '15 Days', style: 'Modern Luxury' }
  },
  {
    id: 'proj-8',
    title: 'Minimalist Floating Ceiling',
    category: 'CEILING',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/CEILING2.jpeg',
    description: 'Floating false ceiling board layout designed with hidden mechanical borders, creating a clean spatial volume effect.',
    details: { area: '950 Sq.Ft', duration: '12 Days', style: 'Minimalist Modern' }
  },
  {
    id: 'proj-9',
    title: 'Teak Wood Accent Cove',
    category: 'CEILING',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/CEILING3.jpeg',
    description: 'A premium combination of linear teak wood louvers, warm white coving, and recessed spotlights for dining halls.',
    details: { area: '1,500 Sq.Ft', duration: '20 Days', style: 'Contemporary Classic' }
  },
  {
    id: 'proj-10',
    title: 'Geometric Layered Gypsum',
    category: 'CEILING',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/CEILING4.jpeg',
    description: 'Multi-tiered false ceiling with floating cantilever slabs, designed around central fan coves and smart automation controls.',
    details: { area: '1,800 Sq.Ft', duration: '18 Days', style: 'Contemporary Luxury' }
  },
  {
    id: 'proj-11',
    title: 'Recessed Profile LED Styling',
    category: 'CEILING',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/CEILING5.jpeg',
    description: 'Architectural false ceiling with recessed linear profile LED strip lighting, customized layout slots, and track lights.',
    details: { area: '1,100 Sq.Ft', duration: '14 Days', style: 'Linear Modern' }
  },
  {
    id: 'proj-12',
    title: 'Circular Fan Dome Integration',
    category: 'CEILING',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/CEILING6.jpeg',
    description: 'Living room ceiling design showcasing custom circular fan coves, perimeter LED strips, and elegant gypsum layering.',
    details: { area: '1,650 Sq.Ft', duration: '16 Days', style: 'Elegant Luxury' }
  },
  {
    id: 'proj-13',
    title: 'Linear Architectural Grid',
    category: 'CEILING',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/CEILING7.jpeg',
    description: 'Modern office grid false ceiling styling with modular panels, acoustic properties, and flush integrated lighting.',
    details: { area: '2,200 Sq.Ft', duration: '25 Days', style: 'Corporate Modern' }
  },
  {
    id: 'proj-14',
    title: 'Warm Ambient Coved Lounge',
    category: 'CEILING',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/CEILING8.jpeg',
    description: 'Lounge false ceiling featuring dual fan mounts, soft perimeter lighting coves, and acoustic board paneling.',
    details: { area: '1,400 Sq.Ft', duration: '15 Days', style: 'Warm Minimalist' }
  },
  {
    id: 'proj-15',
    title: 'Dual Fan Hallway False Ceiling',
    category: 'CEILING',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/CEILING9.jpeg',
    description: 'Elongated false ceiling layout designed for halls, integrating dual designer ceiling fans and recessed spotlighting.',
    details: { area: '1,300 Sq.Ft', duration: '14 Days', style: 'Contemporary Hallway' }
  },
  {
    id: 'proj-16',
    title: 'Magnetic Spotlight False Ceiling',
    category: 'CEILING',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/CEILING10.jpeg',
    description: 'Bespoke bedroom ceiling integrated with flush magnetic track lights, designer fan coves, and minimal paint border.',
    details: { area: '700 Sq.Ft', duration: '10 Days', style: 'High-Tech Modern' }
  },
  {
    id: 'proj-17',
    title: 'Elegant Chandelier Drop Ceiling',
    category: 'CEILING',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/CEILING11.jpeg',
    description: 'Double-height ceiling design featuring center drop-chandelier mount, premium molding borders, and warm coving.',
    details: { area: '1,050 Sq.Ft', duration: '15 Days', style: 'Classic Luxury' }
  },
  {
    id: 'proj-18',
    title: 'Contemporary Exterior Facade 2',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR2.jpeg',
    description: 'Modern elevation facade showcasing architectural geometry, textured plaster surfaces, and elegant warm lighting.',
    details: { area: '3,200 Sq.Ft', duration: '10 Months', style: 'Modern Contemporary' }
  },
  {
    id: 'proj-19',
    title: 'Bespoke Modern Elevation 3',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR3.jpeg',
    description: 'A striking multi-tier facade layout designed with parametric wood panels and dark stone cladding details.',
    details: { area: '4,000 Sq.Ft', duration: '12 Months', style: 'Premium Luxury' }
  },
  {
    id: 'proj-20',
    title: 'Luxury Villa Front Facade 4',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR4.jpeg',
    description: 'A clean and elegant luxury residential facade with floating cantilever slabs and structural metal screens.',
    details: { area: '4,800 Sq.Ft', duration: '14 Months', style: 'Modern Vernacular' }
  },
  {
    id: 'proj-21',
    title: 'Parametric Panel Facade 5',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR5.jpeg',
    description: 'Contemporary facade detailing using linear wood panels, concrete plaster, and integrated perimeter coves.',
    details: { area: '3,500 Sq.Ft', duration: '11 Months', style: 'Contemporary Minimalist' }
  },
  {
    id: 'proj-22',
    title: 'Double-Height Elevation Design 6',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR6.jpeg',
    description: 'High-concept double-height living room elevation facade with large glazed windows and structural louvers.',
    details: { area: '5,200 Sq.Ft', duration: '16 Months', style: 'High-End Modern' }
  },
  {
    id: 'proj-23',
    title: 'Warm Illuminated Facade 7',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR7.jpeg',
    description: 'Facade design featuring custom spotlights, warm architectural uplighting, and smooth cream-toned textures.',
    details: { area: '2,800 Sq.Ft', duration: '9 Months', style: 'Warm Contemporary' }
  },
  {
    id: 'proj-24',
    title: 'Architectural Stone Cladding Facade 8',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR8.png',
    description: 'Heavy structural stone-cladding facade details combined with matte metal trim and automated gates.',
    details: { area: '4,600 Sq.Ft', duration: '13 Months', style: 'Rustic Modern' }
  },
  {
    id: 'proj-25',
    title: 'Teak Louvers Villa Elevation 9',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR9.jpeg',
    description: 'A traditional yet modern residential facade layout showcasing custom teak louvers and natural stone tiles.',
    details: { area: '3,800 Sq.Ft', duration: '12 Months', style: 'Vernacular Modern' }
  },
  {
    id: 'proj-27',
    title: 'Modern Facade Glass Balustrades 11',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR11.jpeg',
    description: 'Elegant home elevation incorporating frameless glass balconies, dark metallic accents, and modular panels.',
    details: { area: '4,100 Sq.Ft', duration: '14 Months', style: 'Contemporary Elite' }
  },
  {
    id: 'proj-28',
    title: 'Urban Villa Compact Facade 12',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR12.jpeg',
    description: 'Designed for compact urban plots, this facade maximizes height and lighting with vertical slats and profile lights.',
    details: { area: '2,400 Sq.Ft', duration: '8 Months', style: 'Compact Modern' }
  },
  {
    id: 'proj-29',
    title: 'Rustic Stone & Metal Facade 13',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR13.png',
    description: 'Custom exterior cladding featuring rugged sandstone finishes contrasted with linear black iron window grids.',
    details: { area: '3,700 Sq.Ft', duration: '11 Months', style: 'Industrial Contemporary' }
  },
  {
    id: 'proj-30',
    title: 'Monolithic Geometric Facade 14',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR14.png',
    description: 'A bold, single-volume monolithic exterior design utilizing premium white concrete panels and deep inset windows.',
    details: { area: '4,500 Sq.Ft', duration: '13 Months', style: 'Monolithic Modern' }
  },
  {
    id: 'proj-31',
    title: 'Contemporary Living Room 2',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR2.jpeg',
    description: 'Modern open-plan living room styling with integrated television console paneling, warm ambient lights, and bespoke furniture.',
    details: { area: '1,200 Sq.Ft', duration: '3 Months', style: 'Modern Contemporary' }
  },
  {
    id: 'proj-32',
    title: 'Modern TV With Simple Wall Panel Setup',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR3.jpeg',
    description: 'Minimalist TV setup with clean wall panels, integrated cable management, and ambient LED backlighting for a modern look.',
    details: { area: '250 Sq.Ft', duration: '1.5 Months', style: 'Minimalist Modern' }
  },
  {
    id: 'proj-33',
    title: 'Dental Clinic Interior',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR4.jpeg',
    description: 'Floor-to-ceiling modular wardrobe design with sliding mirror shutters, warm cabinet coves, and custom dressers.',
    details: { area: '350 Sq.Ft', duration: '1.5 Months', style: 'Sleek Modern' }
  },
  {
    id: 'proj-34',
    title: 'Luxury TV Unit Paneling 5',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR5.jpeg',
    description: 'Premium TV media wall featuring marble laminate sheets, hidden wiring grids, warm LED strip coving, and gold trim moldings.',
    details: { area: '180 Sq.Ft', duration: '1 Month', style: 'Minimalist Luxury' }
  },
  {
    id: 'proj-35',
    title: 'Unique TV Unit Design',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR6.jpeg',
    description: 'Dining area interior containing a customized 6-seater glass-top table, upholstered chairs, and drop pendant lights.',
    details: { area: '450 Sq.Ft', duration: '2 Months', style: 'Contemporary Dining' }
  },
  {
    id: 'proj-36',
    title: 'Simple TV Unit Design With Wall Panel',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR7.jpeg',
    description: 'Custom entryway screen designed with linear CNC wood carving, geometric metal framing, and shoe cabinet console.',
    details: { area: '250 Sq.Ft', duration: '1 Month', style: 'Contemporary Foyer' }
  },
  {
    id: 'proj-37',
    title: 'TV Unit Set up With Wall Panel',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR8.jpeg',
    description: 'Vibrant TV setup with wall paneling, integrated TV set up, and  wall panels.',
    details: { area: '600 Sq.Ft', duration: '2 Months', style: 'Playful Modern' }
  },
  {
    id: 'proj-38',
    title: 'Wall Panel TV Unit Strip Light Elegant',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR9.jpeg',
    description: 'Elegant living hall with feature wall paneling, integrated LED strip lights, and custom TV console storage.',
    details: { area: '500 Sq.Ft', duration: '2 Months', style: 'Contemporary Open' }
  },
  {
    id: 'proj-39',
    title: 'Modern TV Unit Interior',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR10.jpeg',
    description: 'Home office styling featuring ergonomic desk setups, acoustically padded walls, and minimalist shelves.',
    details: { area: '400 Sq.Ft', duration: '1.5 Months', style: 'Minimalist Study' }
  },
  {
    id: 'proj-40',
    title: 'Sleek Living Hall Vanity Design',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR11.jpeg',
    description: 'Bathroom interior layout containing custom under-counter drawers, backlit LED smart mirrors, and marble tiles.',
    details: { area: '150 Sq.Ft', duration: '1 Month', style: 'Luxury Bath' }
  },
  {
    id: 'proj-42',
    title: 'Elite Executive Hall Lounge',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR13.jpeg',
    description: 'Commercial manager office interior showcasing custom desk paneling, high-back leather seating, and meeting tables.',
    details: { area: '1,100 Sq.Ft', duration: '3 Months', style: 'Executive Corporate' }
  },
  {
    id: 'proj-43',
    title: 'Clinic With Bed Test',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR14.jpeg',
    description: 'Minimalist living room partition wall featuring premium laminate finishes, display shelves, and warm integrated spotlights.',
    details: { area: '320 Sq.Ft', duration: '1 Month', style: 'Contemporary Hallway' }
  },
  {
    id: 'proj-44',
    title: 'Ongoing Residential Civil Construction 1',
    category: 'RESIDENTIAL',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/CONSTRUCTION1.jpeg',
    description: 'Ongoing civil construction site showcasing high-grade bricklaying, structural column reinforcement, and structural concrete framing.',
    details: { area: '3,200 Sq.Ft', duration: 'Ongoing', style: 'Civil Structural' }
  },
  {
    id: 'proj-45',
    title: 'Ongoing Residential Civil Construction 2',
    category: 'RESIDENTIAL',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/CONSTRUCTION2.jpeg',
    description: 'Structural framing phase showcasing site excavation, brick wall masonry construction, and foundation concrete checks.',
    details: { area: '2,800 Sq.Ft', duration: 'Ongoing', style: 'Foundation Civil' }
  },
  {
    id: 'proj-46',
    title: 'Ongoing Residential Civil Construction 3',
    category: 'RESIDENTIAL',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/CONSTRUCTION3.jpeg',
    description: 'Roofing lintel slab and beam shuttering construction work, highlighting safety standards and reinforcing layout designs.',
    details: { area: '4,000 Sq.Ft', duration: 'Ongoing', style: 'Reinforced Concrete' }
  },
  {
    id: 'proj-47',
    title: 'Executive Storage & Cabinets',
    category: 'COMMERCIAL',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/COMMERCIAL2.jpeg',
    description: 'Custom-built full-height modular filing cabinets and executive storage partitions designed for modern corporate office suites.',
    details: { area: '350 Sq.Ft', duration: '15 Days', style: 'Sleek Corporate' }
  },
  {
    id: 'proj-49',
    title: 'Minimalist White Kitchen',
    category: 'KITCHEN',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/KITCHEN2.jpeg',
    description: 'Bespoke modular kitchen featuring sleek acrylic cabinetry, white marble splashbacks, and custom utility drawers.',
    details: { area: '380 Sq.Ft', duration: '1.5 Months', style: 'Minimalist Acrylic' }
  },
  {
    id: 'proj-50',
    title: 'Ongoing Residential Civil Construction 4',
    category: 'RESIDENTIAL',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/CONSTRUCTION4.jpeg',
    description: 'Active brick wall partition and window lintel installation phase, showing clean cement sand ratios.',
    details: { area: '3,100 Sq.Ft', duration: 'Ongoing', style: 'Brick Masonry' }
  },

  {
    id: 'proj-52',
    title: 'Ongoing Residential Civil Construction 5',
    category: 'RESIDENTIAL',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/CONSTRUCTION5.jpeg',
    description: 'Active residential civil foundation excavation, steel mesh framing, and structural concrete pouring phase.',
    details: { area: '4,500 Sq.Ft', duration: 'Ongoing', style: 'Reinforced Concrete' }
  },
  {
    id: 'proj-[#C5A059]-17',
    title: 'Parametric Villa Facade & Side Elevation',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR17.jpeg',
    sideImage: '/images/pics/workpics/EXTERIOR17side.jpeg',
    description: 'A multi-perspective luxury villa elevation showcasing warm architectural lighting, parametric louvers, and a complete side elevation view.',
    details: { area: '4,800 Sq.Ft', duration: '12 Months', style: 'Modern Vernacular' }
  },
  {
    id: 'proj-18-ext',
    title: 'Double-Height Facade & Side Perspective',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR18.jpeg',
    sideImage: '/images/pics/workpics/EXTERIOR18side.jpeg',
    description: 'Double-height living space facade detailing with floating balconies, teak wood accents, and side perspective layout.',
    details: { area: '5,100 Sq.Ft', duration: '14 Months', style: 'Contemporary Luxury' }
  },
  {
    id: 'proj-comm-4',
    title: 'Retail Storefront & Commercial Glazing',
    category: 'COMMERCIAL',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/COMMERCIAL4.jpeg',
    description: 'High-impact retail commercial store facade featuring toughened glass, dark metallic framing, and architectural coving.',
    details: { area: '2,200 Sq.Ft', duration: '5 Months', style: 'Modern Retail' }
  },
  {
    id: 'proj-comm-5',
    title: 'Corporate Executive Conference Suite',
    category: 'COMMERCIAL',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/COMMERCIAL5.jpeg',
    description: 'Bespoke corporate board meeting room with custom conference table, acoustic wall paneling, and ambient profile lighting.',
    details: { area: '1,500 Sq.Ft', duration: '3.5 Months', style: 'Corporate Executive' }
  },
  {
    id: 'proj-comm-6',
    title: 'Tech Hub Workspace & Desk Partitions',
    category: 'COMMERCIAL',
    location: 'Virudhunagar, TN',
    image: '/images/pics/workpics/COMMERCIAL6.png',
    description: 'Modern office workstation layout equipped with modular acoustic partitions, integrated cable channels, and ergonomic seating.',
    details: { area: '3,800 Sq.Ft', duration: '6 Months', style: 'Contemporary Office' }
  },
  {
    id: 'proj-comm-7',
    title: 'Modern Corporate Lounge & Reception',
    category: 'COMMERCIAL',
    location: 'Madurai, TN',
    image: '/images/pics/workpics/COMMERCIAL7.png',
    description: 'Prestigious corporate reception desk and visitor lounge featuring custom marble cladding and illuminated branding logo wall.',
    details: { area: '1,800 Sq.Ft', duration: '4 Months', style: 'Minimalist Corporate' }
  },
  {
    id: 'proj-hall-1',
    title: 'Grand Royal Living Hall Elevation',
    category: 'HALL',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/HALL1.jpeg',
    description: 'Bespoke grand living hall design featuring double-height wall paneling, warm profile coving, custom TV media wall, and luxury lounge seating.',
    details: { area: '1,850 Sq.Ft', duration: '3.5 Months', style: 'Minimalist Luxury' }
  },
  {
    id: 'proj-hall-2',
    title: 'Contemporary Luxury Main Hall',
    category: 'HALL',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/HALL2.jpeg',
    description: 'Sophisticated open-concept main hall styling with integrated acoustic louvers, indirect LED cove lighting, and handcrafted furniture.',
    details: { area: '1,650 Sq.Ft', duration: '3 Months', style: 'Modern Contemporary' }
  },
  {
    id: 'proj-bed-1',
    title: 'Royal Upholstered Master Bedroom',
    category: 'BEDROOM',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/BEDROOM1.jpeg',
    description: 'Opulent master suite featuring floor-to-ceiling padded fabric headboard, warm cove LED lighting, and integrated vanity dresser.',
    details: { area: '720 Sq.Ft', duration: '2 Months', style: 'Royal Luxury' }
  },
  {
    id: 'proj-bed-2',
    title: 'Minimalist Zen Suite',
    category: 'BEDROOM',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/BEDROOM2.jpeg',
    description: 'A serene bedroom layout with light oak wood paneling, floating nightstands, and soft ambient wall sconces.',
    details: { area: '650 Sq.Ft', duration: '2 Months', style: 'Nordic Zen' }
  },
  {
    id: 'proj-bed-3',
    title: 'Contemporary Luxury Suite',
    category: 'BEDROOM',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/BEDROOM3.jpeg',
    description: 'Spacious guest bedroom designed with custom wardrobe louvers, geometric wall molding, and indirect ceiling lights.',
    details: { area: '580 Sq.Ft', duration: '1.5 Months', style: 'Modern Contemporary' }
  },
  {
    id: 'proj-kit-3',
    title: 'Matte Finish Charcoal Modular Kitchen & Dining',
    category: 'KITCHEN',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/KITCHEN3.jpeg',
    description: 'Matte charcoal grey acrylic cabinetry combined with quartz island countertop and built-in appliance towers.',
    details: { area: '420 Sq.Ft', duration: '2 Months', style: 'Matte Minimalist' }
  },
  {
    id: 'proj-kit-4',
    title: 'Warm Teak Wood Parallel Kitchen & Dining',
    category: 'KITCHEN',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/KITCHEN4.jpeg',
    description: 'Parallel layout modular kitchen with natural teak wood laminate shutters, marble backsplash, and cutlery organizers.',
    details: { area: '380 Sq.Ft', duration: '1.5 Months', style: 'Warm Vernacular' }
  },
  {
    id: 'proj-kit-5',
    title: 'High-Gloss White & Gold Modular Kitchen & Dining',
    category: 'KITCHEN',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/KITCHEN5.jpeg',
    description: 'Ultra-gloss white acrylic kitchen equipped with gold profile handles, under-cabinet profile strip lights, and pull-out pantries.',
    details: { area: '480 Sq.Ft', duration: '2 Months', style: 'Sleek Luxury' }
  },
  {
    id: 'proj-kit-6',
    title: 'Contemporary Open Chef Kitchen',
    category: 'KITCHEN',
    location: 'Madurai, TN',
    image: '/images/pics/workpics/KITCHEN6.jpeg',
    description: 'Open-plan chef kitchen integrated with breakfast counter bar stools, chimney ducting, and soft-close Tandem boxes.',
    details: { area: '520 Sq.Ft', duration: '2.5 Months', style: 'Modern Open' }
  },
  {
    id: 'proj-int-15',
    title: 'Luxury Living Room Wall Paneling',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR15.jpeg',
    description: 'Living room interior featuring fluted charcoal louvers, gold trim brass inlay, and floating media unit.',
    details: { area: '450 Sq.Ft', duration: '1.5 Months', style: 'Bespoke Luxury' }
  },
  {
    id: 'proj-ext-15',
    title: 'Contemporary Residence Elevation 15',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR15.jpeg',
    description: 'Clean modern elevation facade featuring warm architectural lights and stone cladding.',
    details: { area: '3,600 Sq.Ft', duration: '10 Months', style: 'Modern Contemporary' }
  },
  {
    id: 'proj-ext-16',
    title: 'Grand Villa Facade 16',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR16.jpeg',
    description: 'Multi-tiered residential facade with floating cantilever slabs and glass balconies.',
    details: { area: '4,400 Sq.Ft', duration: '12 Months', style: 'High-End Modern' }
  },
  {
    id: 'proj-ext-19',
    title: 'Bespoke Facade Elevation 19',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR19.jpeg',
    description: 'Modern elevation detailing with linear wood panels and ambient spotlighting.',
    details: { area: '3,900 Sq.Ft', duration: '11 Months', style: 'Modern Contemporary' }
  },
  {
    id: 'proj-ext-20',
    title: 'Compact Villa Facade 20',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR20.png',
    description: 'Urban villa exterior design maximizing spatial elevation and vertical metal louvers.',
    details: { area: '2,600 Sq.Ft', duration: '8 Months', style: 'Compact Modern' }
  },
  {
    id: 'proj-ext-21',
    title: 'Modern Linear Villa Elevation 21',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR21.png',
    description: 'Parametric wood louver facade with warm perimeter lighting coving and stone accents.',
    details: { area: '3,800 Sq.Ft', duration: '11 Months', style: 'Linear Modern' }
  },
  {
    id: 'proj-ext-22',
    title: 'Double-Height Glazed Facade 22',
    category: 'EXTERIOR',
    location: 'Madurai, TN',
    image: '/images/pics/workpics/EXTERIOR22.png',
    description: 'High-concept double-height living room exterior elevation featuring floor-to-ceiling glass paneling.',
    details: { area: '5,100 Sq.Ft', duration: '15 Months', style: 'Contemporary Elite' }
  },
  {
    id: 'proj-ext-23',
    title: 'Minimalist Monolithic Facade 23',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR23.jpeg',
    description: 'Clean white concrete panel layout with inset balcony windows and warm architectural sconces.',
    details: { area: '4,200 Sq.Ft', duration: '12 Months', style: 'Minimalist Luxury' }
  },
  {
    id: 'proj-ext-24',
    title: 'Teak Louver Heritage Elevation 24',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR24.jpeg',
    description: 'Vernacular-inspired exterior combining natural teak wood louvers, grey stone tiles, and automated gates.',
    details: { area: '4,600 Sq.Ft', duration: '13 Months', style: 'Modern Vernacular' }
  },
  {
    id: 'proj-ext-25',
    title: 'Contemporary Metal Slat Villa 25',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR25.jpeg',
    description: 'Structural steel mesh screen facade with floating cantilever slabs and warm entrance illumination.',
    details: { area: '3,700 Sq.Ft', duration: '10 Months', style: 'Industrial Modern' }
  },
  {
    id: 'proj-ext-26',
    title: 'Luxury Courtyard Facade 26',
    category: 'EXTERIOR',
    location: 'Virudhunagar, TN',
    image: '/images/pics/workpics/EXTERIOR26.png',
    description: 'Expansive courtyard bungalow elevation combining textured plaster, glass balustrades, and landscape uplighting.',
    details: { area: '5,500 Sq.Ft', duration: '16 Months', style: 'Luxury Courtyard' }
  },
  {
    id: 'proj-ext-27',
    title: 'High-Tech Parametric Facade 27',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR27.jpeg',
    description: 'Geometric multi-tier facade with recessed LED strip coving and dark metallic accents.',
    details: { area: '4,300 Sq.Ft', duration: '12 Months', style: 'High-Tech Modern' }
  },
  {
    id: 'proj-ext-28',
    title: 'Opulent Villa Front Facade 28',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR28.jpeg',
    description: 'Architectural masterpiece featuring double-height entrance columns, frameless glass balconies, and warm sconces.',
    details: { area: '6,000 Sq.Ft', duration: '17 Months', style: 'Opulent Luxury' }
  },
  {
    id: 'proj-ext-45',
    title: 'Latest Elevation Gray Exterior  ',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR45.jpeg',
    sideImage: '/images/pics/workpics/EXTERIOR45side.jpeg',
    description: 'Modern elevation facade design featuring slatted dark grey wall paneling, central grey texture tower, pink upper terrace accent, and dedicated side perspective view.',
    details: { area: '3,600 Sq.Ft', duration: '10 Months', style: 'Contemporary Geometric Elevation' }
  },
  {
    id: 'proj-ext-46',
    title: 'Latest Elevation Turquoise Exterior ',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR46.jpeg',
    sideImage: '/images/pics/workpics/EXTERIOR46side.jpeg',
    description: 'Bespoke residential elevation design with warm wood finish cladding, vibrant turquoise textured tower, teal entry accent frame, and side perspective view.',
    details: { area: '3,800 Sq.Ft', duration: '11 Months', style: 'Contemporary Villa Elevation' }
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'rev-1',
    quote: 'Very good work. How they shown in the design and final output also same. Final look was awesome. Everyone like our interior design. Thanks for luxury designer make our home beautiful with affordable price.',
    author: 'Saravanakumar S',
    location: 'Aruppukkottai, Tamil Nadu',
    rating: 5,
    projectType: 'Interior Design & Construction'
  },
  {
    id: 'rev-2',
    quote: 'Very perfect 3D, 2D plan works👍 I really like his work designs appreciated and keep it up 🤗',
    author: 'Deepa Loganathan',
    location: 'Aruppukkottai, Tamil Nadu',
    rating: 5,
    projectType: '2D Floor Plan & 3D Model'
  },
  {
    id: 'rev-3',
    quote: 'Outstanding service during initial assessment. On time, professional, helpful in identifying current and future needs while providing great pricing quotes. You can confidently trust them. They are doing excellent work 👍',
    author: 'Murali Tharan',
    location: 'Aruppukkottai, Tamil Nadu',
    rating: 5,
    projectType: 'Architectural Assessment & Pricing'
  },
  {
    id: 'rev-4',
    quote: '3D models are very popular in engineering as they graphically represent the overall layout with all equipment, structures, and electrical connections. These 3D models are close to the real plant built at the site after construction.',
    author: 'Karthi Karthick',
    location: 'Aruppukkottai, Tamil Nadu',
    rating: 5,
    projectType: '3D Modeling & Civil Engineering'
  },
  {
    id: 'rev-5',
    quote: 'Perfect 👍👍 Planning, Designing, Executive Planning, Perfect Timing, Development of New Designs, 100% Happiness. Thanks to Your Team🤗',
    author: 'N. R. Anantha Raja',
    location: 'Aruppukkottai, Tamil Nadu',
    rating: 5,
    projectType: 'Turnkey Architectural Design'
  },
  {
    id: 'rev-6',
    quote: 'Affordable price for design. They doing different design from others like trending thoughts.',
    author: 'Ganga Meena',
    location: 'Aruppukkottai, Tamil Nadu',
    rating: 5,
    projectType: 'Trending Architectural Design'
  },
  {
    id: 'rev-7',
    quote: 'Outstanding design affordable price for design different design best service',
    author: 'Ravi Kumar Pandi',
    location: 'Aruppukkottai, Tamil Nadu',
    rating: 5,
    projectType: 'Home Elevation & Interior'
  },
  {
    id: 'rev-8',
    quote: 'Outstanding design affordable price for design different design',
    author: 'Karthick Raja',
    location: 'Aruppukkottai, Tamil Nadu',
    rating: 5,
    projectType: 'Architectural Blueprint'
  },
  {
    id: 'rev-9',
    quote: 'Good work and professional civil engineering execution.',
    author: 'Er S.Krishna Moorthi',
    location: 'Aruppukkottai, Tamil Nadu',
    rating: 5,
    projectType: 'Civil Engineering Work'
  },
  {
    id: 'rev-10',
    quote: 'Designs is very beautiful and excellent output.',
    author: 'Karthik R',
    location: 'Aruppukkottai, Tamil Nadu',
    rating: 5,
    projectType: 'Residential Design'
  },
  {
    id: 'rev-11',
    quote: 'Nice work and creative architectural planning.',
    author: 'Unnai Nee Nambu',
    location: 'Aruppukkottai, Tamil Nadu',
    rating: 5,
    projectType: '2D & 3D Design'
  },
  {
    id: 'rev-[#C5A059]-12',
    quote: 'Good civil construction and structural design service.',
    author: 'Britto Britto',
    location: 'Aruppukkottai, Tamil Nadu',
    rating: 5,
    projectType: 'Building Construction'
  },
  {
    id: 'rev-13',
    quote: 'Outstanding work and high quality finishing.',
    author: 'Vimal Anbalagan',
    location: 'Aruppukkottai, Tamil Nadu',
    rating: 5,
    projectType: 'Civil Engineering & Finish'
  },
  {
    id: 'rev-14',
    quote: 'New trending architectural concepts and excellent customer service.',
    author: 'Murugan Mms (Local Guide)',
    location: 'Aruppukkottai, Tamil Nadu',
    rating: 5,
    projectType: 'Turnkey Construction'
  },
  {
    id: 'rev-15',
    quote: 'Great architectural planning and very professional team.',
    author: 'Fazil Ifthihar',
    location: 'Aruppukkottai, Tamil Nadu',
    rating: 5,
    projectType: 'Architectural Service'
  },
  {
    id: 'rev-16',
    quote: 'Very good planning, designs, and timely execution.',
    author: 'Guna Sekaran',
    location: 'Aruppukkottai, Tamil Nadu',
    rating: 5,
    projectType: 'Residential Construction'
  },
  {
    id: 'rev-17',
    quote: 'Prompt response, great pricing quotes, and quality designs.',
    author: 'Daveedhu Rajan',
    location: 'Aruppukkottai, Tamil Nadu',
    rating: 5,
    projectType: 'Consultation & Planning'
  },
  {
    id: 'rev-18',
    quote: 'Creative 3D elevation models and affordable construction budget.',
    author: 'Karthi Keyan',
    location: 'Aruppukkottai, Tamil Nadu',
    rating: 5,
    projectType: '3D Elevation & Construction'
  },
  {
    id: 'rev-19',
    quote: 'High quality 2D floor plans and 3D visualization works.',
    author: 'SivaMani Dharshan',
    location: 'Aruppukkottai, Tamil Nadu',
    rating: 5,
    projectType: 'Floor Planning & 3D'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Understand the client\'s vision, site context & lifestyle.',
    detail: 'We conduct detailed site measurements, orientation analysis, Vastu preferences, and budget alignment sessions.'
  },
  {
    number: '02',
    title: 'PLAN',
    description: 'Space planning, zoning & structural blueprinting.',
    detail: 'Our architects draft 2D floor plans optimizing traffic flow, natural illumination, and municipal compliance.'
  },
  {
    number: '03',
    title: 'DESIGN',
    description: 'Architectural elevation & interior concept crafting.',
    detail: 'We select material palettes, lighting schemes, custom joinery details, and exterior facade textures.'
  },
  {
    number: '04',
    title: 'VISUALIZE',
    description: 'Photorealistic 3D rendering & virtual walkthroughs.',
    detail: 'Review high-definition renders of every room before breaking ground. What you approve is what we build.'
  },
  {
    number: '05',
    title: 'BUILD',
    description: 'Precision construction & quality-controlled execution.',
    detail: 'Our engineering supervisors manage material testing, structural checks, and schedule adherence.'
  },
  {
    number: '06',
    title: 'DELIVER',
    description: 'Final quality audit & key handover of your dream space.',
    detail: 'Thorough site cleanup, deep inspection, warranty handover, and celebratory key delivery.'
  }
];

export const STORY_STAGES = [
  {
    id: 'stage-1',
    label: '01 / 08',
    title: 'EMPTY LAND',
    headline: 'EVERY DREAM STARTS SOMEWHERE.',
    subhead: 'A raw plot waiting to be transformed into a masterpiece.',
    frameStart: 0,
    frameEnd: 100
  },
  {
    id: 'stage-2',
    label: '02 / 08',
    title: 'FOUNDATION',
    headline: 'WE BUILD FROM THE GROUND UP.',
    subhead: 'Uncompromising structural engineering and reinforced foundations.',
    frameStart: 101,
    frameEnd: 220
  },
  {
    id: 'stage-3',
    label: '03 / 08',
    title: 'CONSTRUCTION',
    headline: 'DESIGNED WITH PURPOSE.',
    subhead: 'Architectural geometry emerging layer by layer.',
    frameStart: 221,
    frameEnd: 330
  },
  {
    id: 'stage-4',
    label: '04 / 08',
    title: 'EXTERIOR',
    headline: 'BUILT TO LAST.',
    subhead: 'A completed facade standing tall against time.',
    frameStart: 331,
    frameEnd: 400
  },
  {
    id: 'stage-5',
    label: '05 / 08',
    title: 'ENTRANCE',
    headline: 'NOW... STEP INSIDE.',
    subhead: 'Transitioning from grand architecture into intimate warmth.',
    frameStart: 401,
    frameEnd: 450
  },
  {
    id: 'stage-6',
    label: '06 / 08',
    title: 'LIVING ROOM',
    headline: 'SPACES DESIGNED AROUND YOU.',
    subhead: 'Generous volume, natural light, and refined materials.',
    frameStart: 451,
    frameEnd: 540
  },
  {
    id: 'stage-7',
    label: '07 / 08',
    title: 'KITCHEN & INTERIORS',
    headline: 'BEAUTY MEETS FUNCTION.',
    subhead: 'Ergonomic precision meets bespoke luxury craftsmanship.',
    frameStart: 541,
    frameEnd: 810
  },
  {
    id: 'stage-8',
    label: '08 / 08',
    title: 'DREAM HOME',
    headline: 'DESIGNED FOR LIFE.',
    subhead: 'From Vision to Reality. Luxury Designers & Builders.',
    frameStart: 811,
    frameEnd: 900
  }
];
