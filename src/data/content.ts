import { ProjectItem, ServiceItem, TestimonialItem, ProcessStep } from '../types';

export const BRAND_INFO = {
  name: 'Luxury Designers & Builders',
  tagline: 'From Vision to Reality.',
  secondaryTagline: 'We Design Your Dream. We Build Your Trust.',
  phoneDisplay: '96004 70328',
  phoneRaw: '09600470328',
  phoneIntl: '+919600470328',
  address: 'Lakshmi Nagar, 5/377, West St, Kalloorani, Aruppukkottai, Tamil Nadu 626105',
  city: 'Aruppukkottai',
  state: 'Tamil Nadu',
  rating: '5.0 ★',
  reviewsCount: '19 Google Reviews',
  mapDirectionsUrl: 'https://maps.google.com/?q=Lakshmi+Nagar+Kalloorani+Aruppukkottai+Tamil+Nadu+626105',
  whatsappUrl: 'https://wa.me/919600470328?text=Hello%20Luxury%20Designers%20%26%20Builders%2C%20I%20would%20like%20to%20inquire%20about%20a%20project.'
};

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
    image: '/images/pics/workpics/David prem.jpg.jpeg'
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
    image: '/images/pics/workpics/Night view.jpg.jpeg'
  },
  {
    number: '08',
    title: 'Ceiling Works',
    shortDesc: 'Bespoke modern false ceiling designs, gypsum board styling, and customized cove lighting solutions.',
    fullDesc: 'Creating structural depth and elegance with gypsum styling, acoustic panel installations, modular wooden coves, and energy-efficient light planning.',
    iconName: 'layers',
    image: '/images/pics/workpics/CEILING1.jpeg'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Kalloorani Heritage Residence',
    category: 'RESIDENTIAL',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/Elevation (2).jpg.jpeg',
    renderImage: '/images/pics/workpics/Elevation 4.jpg.jpeg',
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
    renderImage: '/images/pics/workpics/Picsart_26-03-18_08-57-23-358.jpg.jpeg',
    description: 'Ergonomic island kitchen with quartz countertops, hidden pantry hardware, matte acrylic cabinetry, and ambient under-shelf lighting.',
    details: { area: '450 Sq.Ft', duration: '2 Months', style: 'Contemporary Modular' }
  },
  {
    id: 'proj-4',
    title: 'Serene Master Haven',
    category: 'BEDROOM',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/IMG-20260225-WA0002.jpg.jpeg',
    renderImage: '/images/pics/workpics/Picsart_26-05-18_11-14-43-080.jpg.jpeg',
    description: 'A tranquil suite featuring acoustically padded headboards, integrated wardrobe vanity, and private balcony seating.',
    details: { area: '650 Sq.Ft', duration: '2.5 Months', style: 'Nordic Zen' }
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
    renderImage: '/images/pics/workpics/2.png',
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
    id: 'proj-26',
    title: 'Floating Cantilever Slab Facade 10',
    category: 'EXTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/EXTERIOR10.jpeg',
    description: 'A structural masterpiece featuring bold floating cantilever slabs, glass balustrades, and structural steel coving.',
    details: { area: '6,200 Sq.Ft', duration: '18 Months', style: 'Deconstructivist Modern' }
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
    title: 'Modern Bedroom Interior 3',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR3.jpeg',
    description: 'Master bedroom styling showcasing custom upholstered headboards, bedside table integration, and elegant cove lighting.',
    details: { area: '750 Sq.Ft', duration: '2.5 Months', style: 'Nordic Zen' }
  },
  {
    id: 'proj-33',
    title: 'Bespoke Wardrobe & Dressing 4',
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
    title: 'Compact Dining Space Styling 6',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR6.jpeg',
    description: 'Dining area interior containing a customized 6-seater glass-top table, upholstered chairs, and drop pendant lights.',
    details: { area: '450 Sq.Ft', duration: '2 Months', style: 'Contemporary Dining' }
  },
  {
    id: 'proj-36',
    title: 'Elegant Foyer Partition 7',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR7.jpeg',
    description: 'Custom entryway screen designed with linear CNC wood carving, geometric metal framing, and shoe cabinet console.',
    details: { area: '250 Sq.Ft', duration: '1 Month', style: 'Contemporary Foyer' }
  },
  {
    id: 'proj-37',
    title: 'Bespoke Kids Bedroom Layout 8',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR8.jpeg',
    description: 'Vibrant kids bedroom styling with built-in study desks, integrated bookshelves, and whimsical geometric wall patterns.',
    details: { area: '600 Sq.Ft', duration: '2 Months', style: 'Playful Modern' }
  },
  {
    id: 'proj-38',
    title: 'Modular Kitchen-Dining Partition 9',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR9.jpeg',
    description: 'Open-concept partition layout dividing kitchen and dining space using glass partitions and wooden louvers.',
    details: { area: '500 Sq.Ft', duration: '2 Months', style: 'Contemporary Open' }
  },
  {
    id: 'proj-39',
    title: 'Modern Study Room Interior 10',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR10.jpeg',
    description: 'Home office styling featuring ergonomic desk setups, acoustically padded walls, and minimalist shelves.',
    details: { area: '400 Sq.Ft', duration: '1.5 Months', style: 'Minimalist Study' }
  },
  {
    id: 'proj-40',
    title: 'Sleek Bathroom Vanity Design 11',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR11.jpeg',
    description: 'Bathroom interior layout containing custom under-counter drawers, backlit LED smart mirrors, and marble tiles.',
    details: { area: '150 Sq.Ft', duration: '1 Month', style: 'Luxury Bath' }
  },
  {
    id: 'proj-41',
    title: 'Bespoke Puja Room Archway 12',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR12.jpeg',
    description: 'Traditional wood-carved puja room doors with brass bells, marble platforms, and ambient warm cove lighting.',
    details: { area: '200 Sq.Ft', duration: '1.5 Months', style: 'Traditional Vernacular' }
  },
  {
    id: 'proj-42',
    title: 'Elite Executive Office Lounge 13',
    category: 'INTERIOR',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/INTERIOR13.jpeg',
    description: 'Commercial manager office interior showcasing custom desk paneling, high-back leather seating, and meeting tables.',
    details: { area: '1,100 Sq.Ft', duration: '3 Months', style: 'Executive Corporate' }
  },
  {
    id: 'proj-43',
    title: 'Contemporary Hall Showcase 14',
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
    description: 'Structural framing phase showcasing site excavation, brick wall brickwork construction, and foundation concrete checks.',
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
    id: 'proj-48',
    title: 'Corporate Reception Showcase',
    category: 'COMMERCIAL',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/COMMERCIAL3.jpeg',
    description: 'Minimalist corporate lobby partition wall featuring premium laminate finishes, trophy display shelves, and integrated warm coving.',
    details: { area: '320 Sq.Ft', duration: '1 Month', style: 'Modern Reception' }
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
    id: 'proj-51',
    title: 'Premium Retail Commercial Facade',
    category: 'COMMERCIAL',
    location: 'Aruppukkottai, TN',
    image: '/images/pics/workpics/COMMERCIAL4.jpeg',
    description: 'Bespoke commercial facade design highlighting premium shopfront glazing, dark metal panel profiles, and architectural exterior coving.',
    details: { area: '2,500 Sq.Ft', duration: '8 Months', style: 'Corporate Retail' }
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'rev-1',
    quote: 'Very good work. How they shown in the design and final output also same. Final look was awesome.',
    author: 'Verified Google Reviewer',
    location: 'Aruppukkottai, Tamil Nadu',
    rating: 5,
    projectType: 'Design & Build Residential'
  },
  {
    id: 'rev-2',
    quote: 'Very perfect 3D, 2D plan works.',
    author: 'Homeowner',
    location: 'Kalloorani, Aruppukkottai',
    rating: 5,
    projectType: '2D & 3D Planning'
  },
  {
    id: 'rev-3',
    quote: 'Outstanding service during initial assessment.',
    author: 'Client',
    location: 'Aruppukkottai, Tamil Nadu',
    rating: 5,
    projectType: 'Architectural Consultation'
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
