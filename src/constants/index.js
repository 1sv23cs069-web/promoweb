export const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform';

// Department Branding
export const DEPARTMENT_LOGO = '/logo.png'; // Add your logo to public/ folder
export const CREATIVE_CODEX_LOGO = '/CClogo wobg.png'; // Add Creative Codex logo to public/ folder

export const STATS = [
  {
    number: 450,
    label: 'Students',
    icon: 'Users',
  },
  {
    number: 35,
    label: 'Faculty Members',
    icon: 'BookOpen',
  },
  {
    number: 92,
    label: 'Placement Rate %',
    icon: 'TrendingUp',
  },
  {
    number: 150,
    label: 'Research Publications',
    icon: 'FileText',
  },
];

export const WHY_CHOOSE = [
  {
    title: 'Industry-Oriented Learning',
    description: 'Curriculum designed with industry leaders. Real-world projects and internships from day one.',
    icon: 'Briefcase',
    features: ['Real-world projects', 'Industry internships', 'Expert mentorship', 'Corporate partnerships'],
  },
  {
    title: 'Modern Laboratories',
    description: 'State-of-the-art labs with latest technologies, AI, Cloud Computing, and IoT infrastructure.',
    icon: 'Cpu',
    features: ['High-performance servers', 'Cloud platforms', 'AI/ML tools', 'IoT workstations'],
  },
  {
    title: 'Strong Placement Support',
    description: 'Dedicated placement cell ensuring career opportunities with top companies.',
    icon: 'CheckCircle',
    features: ['Resume coaching', 'Interview prep', '92% placement rate', 'Average ₹8.5 LPA'],
  },
  {
    title: 'Innovation & Research',
    description: 'Cutting-edge research opportunities and innovation hubs for student projects.',
    icon: 'Lightbulb',
    features: ['Research labs', 'Patent filing', 'Innovation hub', 'Grant opportunities'],
  },
];

export const RECRUITERS = [
  'Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'IBM', 'Infosys', 'TCS',
  'Accenture', 'Wipro', 'HCL', 'Cognizant', 'Capgemini', 'Tech Mahindra'
];

export const FACULTY = [
  // Row 1 - HOD (1 person)
  {
    id: 1,
    name: 'Dr. Basavesha D',
    designation: 'Professor & Head of Department',
    qualification: 'Ph.D. in Computer Science',
    specialization: 'Artificial Intelligence, Machine Learning',
    image: '/images/faculty/Dr.Basavesha.png',
    isHoD: true,
  },
  // Row 2 - 2 Female, 1 Male
  {
    id: 2,
    name: 'Dr. R Rajeswari',
    designation: 'Associate Professor',
    qualification: 'Ph.D. in Data Science',
    specialization: 'Big Data Analytics, Cloud Computing',
    image: '/images/faculty/Rajeshwari.png',
  },
  {
    id: 3,
    name: 'Dr. Kiran G M',
    designation: 'Assistant Professor',
    qualification: 'Ph.D. in IoT & Embedded Systems',
    specialization: 'IoT, Embedded Systems, Robotics',
    image: '/images/faculty/Kiran.png',
  },
  {
    id: 4,
    name: 'Dr. Manjula H Nebagiri',
    designation: 'Senior Assistant Professor',
    qualification: 'M.Tech in Software Engineering',
    specialization: 'Web Development, Cyber Security',
    image: '/images/faculty/Manjula.png',
  },
  // Row 3 - 3 Male, 1 Female
  {
    id: 5,
    name: 'Prof. C V Shanmukaswamy',
    designation: 'Assistant Professor',
    qualification: 'M.Tech in Computer Networks',
    specialization: 'Network Security, 5G Technology',
    image: '/images/faculty/CVS.png',
  },
  {
    id: 6,
    name: 'Prof. Suthan R',
    designation: 'Assistant Professor',
    qualification: 'M.Tech in Software Development',
    specialization: 'DevOps, Containerization, Kubernetes',
    image: '/images/faculty/suthan.png',
  },
  {
    id: 7,
    name: 'Prof. Chethan M S',
    designation: 'Lecturer',
    qualification: 'M.Tech in Web Technologies',
    specialization: 'Full Stack Development, MERN Stack',
    image: '/images/faculty/Chethanms.png',
  },
  {
    id: 8,
    name: 'Prof. Prathibha T S',
    designation: 'Assistant Professor',
    qualification: 'Ph.D. in Cybersecurity',
    specialization: 'Ethical Hacking, Network Security',
    image: '/images/faculty/prathiba.png',
  },
  // Row 4 - 3 Female, 1 Male
  {
    id: 9,
    name: 'Prof. Rashmi N',
    designation: 'Assistant Professor',
    qualification: 'Ph.D. in Database Systems',
    specialization: 'NoSQL, Database Design, Big Data',
    image: '/images/faculty/rashmi.png',
  },
  {
    id: 10,
    name: 'Prof. Mamatha L',
    designation: 'Lecturer',
    qualification: 'M.Tech in Mobile Computing',
    specialization: 'Mobile App Development, Flutter',
    image: '/images/faculty/MamathaL.png',
  },
  {
    id: 11,
    name: 'Prof. Ramachandra H Y',
    designation: 'Assistant Professor',
    qualification: 'Ph.D. in Computer Vision',
    specialization: 'Image Processing, Deep Learning',
    image: '/images/faculty/RHY.jpg',
  },
  {
    id: 12,
    name: 'Prof. Sneha S R',
    designation: 'Lecturer',
    qualification: 'M.Tech in Compiler Design',
    specialization: 'Programming Languages, Algorithms',
    image: '/images/faculty/SnehaSR.jpg',
  },
   {
    id: 13,
    name: 'Prof. Kiran S',
    designation: 'Lecturer',
    qualification: 'M.Tech in Compiler Design',
    specialization: 'Programming Languages, Algorithms',
    image: '/images/faculty/kiran.jpg',
  },
];

export const ACHIEVEMENTS = {
  student: [
    {
      title: 'National Hackathon Winners 2024',
      description: 'First place in All India Hackathon Championship',
      category: 'hackathons',
      icon: '🏆',
      photo: '/images/achievements/hackathon.jpg',
    },
    {
      title: 'ACM ICPC Qualifiers',
      description: '5 students qualified for ACM ICPC Regionals',
      category: 'competitions',
      icon: '🥇',
      photo: '/images/achievements/icpc.jpg',
    },
    {
      title: 'Inter-college Sports',
      description: 'Won cricket, badminton, and volleyball championships',
      category: 'sports',
      icon: '⚽',
      photo: '/images/achievements/sports.jpg',
    },
    {
      title: 'Cultural Excellence',
      description: 'Best technical event organizers at state cultural festival',
      category: 'cultural',
      icon: '🎭',
      photo: '/images/achievements/cultural.jpg',
    },
  ],
  faculty: [
    {
      title: 'Published 45 Research Papers',
      description: 'In international and national journals',
      icon: '📄',
      photo: '/images/achievements/research.jpg',
    },
    {
      title: '5 Patents Filed',
      description: 'In AI and IoT domains',
      icon: '🔬',
      photo: '/images/achievements/patents.jpg',
    },
    {
      title: 'National Awards',
      description: '2 faculty members received national recognition',
      icon: '🏅',
      photo: '/images/achievements/awards.jpg',
    },
    {
      title: 'Guest Lectures',
      description: 'At IITs and other premier institutions',
      icon: '🎓',
      photo: '/images/achievements/lectures.jpg',
    },
  ],
};

export const EVENTS = [
  {
    id: 1,
    name: 'Shriutsav',
    fullName: 'Annual Technical Festival',
    description: 'Showcase of innovation and creativity with competitions, workshops, and innovation showcases.',
    date: 'March 2024',
    category: 'technical',
    image: '/images/events/shriutsav.jpg',
    inAssociationWith: 'Creative Codex',
  },
  {
    id: 2,
    name: 'IIS',
    fullName: 'Innovation Ignite Symposium',
    description: 'Inter-departmental innovation competition fostering collaborative projects.',
    date: 'September 2024',
    category: 'innovation',
    image: '/images/events/iis.jpg',
    inAssociationWith: 'Creative Codex',
  },
  {
    id: 3,
    name: 'Technical Workshops',
    description: 'Regular workshops on emerging technologies and industry trends.',
    date: 'Monthly',
    category: 'workshop',
    image: '/images/events/workshop.jpg',
    inAssociationWith: 'Creative Codex',
  },
  {
    id: 4,
    name: 'Guest Lectures',
    description: 'Expert talks from industry professionals and alumni.',
    date: 'Quarterly',
    category: 'seminar',
    image: '/images/events/lecture.jpg',
    inAssociationWith: 'Creative Codex',
  },
];

export const DEPARTMENT_TIMELINE = [
  {
    year: 1998,
    title: 'Department Established',
    description: 'Foundation of CSE Department with vision to provide quality education',
    icon: '🏛️',
  },
  {
    year: 2005,
    title: 'First Batch with 100% Placements',
    description: 'Achieved 100% placement rate in first graduating batch',
    icon: '🎓',
  },
  {
    year: 2010,
    title: 'Accredited by NBA',
    description: 'National Board of Accreditation recognition for academic excellence',
    icon: '✓',
  },
  {
    year: 2015,
    title: 'Research Center Launched',
    description: 'Dedicated research center for innovation and development',
    icon: '🔬',
  },
  {
    year: 2020,
    title: 'Innovation Hub Inaugurated',
    description: 'Creative Codex club established for student innovation',
    icon: '💡',
  },
  {
    year: 2024,
    title: 'World-Class Facilities Completed',
    description: 'State-of-the-art labs and infrastructure inaugurated',
    icon: '🏢',
  },
];

export const STUDENT_EXCELLENCE = {
  hackathons: [
    'National Hackathon Winners 2024',
    'Smart India Hackathon Finalists',
    'CodeChef and CodeForces Rankings',
    'Multiple state-level competitions',
  ],
  competitions: [
    'ACM ICPC Qualifiers',
    'Google Code Jam Participants',
    'Inter-college Programming Contests',
    'Cyber Security Competitions',
  ],
  sports: [
    'Inter-college Cricket Champions',
    'Badminton and Volleyball Winners',
    'Table Tennis Tournament Victory',
    'Marathon and Athletic Events',
  ],
  cultural: [
    'Best Technical Event Organizers',
    'Cultural Fest Coordinators',
    'Technical Festival "Shrishtav" Success',
    'Departmental Quiz Competition',
  ],
};

export const EVENT_CALENDAR = [
  { month: 'January', event: 'New Year Tech Bootcamp', type: 'Workshop', icon: '📚' },
  { month: 'March', event: 'Shrishtav (Technical Festival)', type: 'Festival', icon: '🎪' },
  { month: 'May', event: 'Summer Internship Talks', type: 'Seminar', icon: '💼' },
  { month: 'July', event: 'Cloud Computing Bootcamp', type: 'Workshop', icon: '☁️' },
  { month: 'September', event: 'IIS (Innovation Ignite Symposium)', type: 'Competition', icon: '🏆' },
  { month: 'October', event: 'Tech Symposium', type: 'Conference', icon: '🎤' },
  { month: 'November', event: 'Placement Drive Preparation', type: 'Workshop', icon: '💻' },
  { month: 'December', event: 'Year-end Talent Show', type: 'Cultural', icon: '🎭' },
];

export const EVENT_HIGHLIGHTS = [
  { title: 'Technical Excellence', image: '/images/highlights/tech.jpg', alt: 'Coding competition showcase' },
  { title: 'Innovation in Action', image: '/images/highlights/innovation.jpg', alt: 'Student innovation projects' },
  { title: 'Competition Success', image: '/images/highlights/competition.jpg', alt: 'Winning moments' },
  { title: 'Team Collaboration', image: '/images/highlights/collaboration.jpg', alt: 'Students working together' },
  { title: 'Learning Experience', image: '/images/highlights/learning.jpg', alt: 'Workshop sessions' },
  { title: 'Excellence Celebrated', image: '/images/highlights/excellence.jpg', alt: 'Awards and recognition' },
];

export const FACILITIES = [
  {
    title: 'Computer Labs',
    description: 'Well-equipped labs with latest computing infrastructure and high-speed internet',
    icon: 'Cpu',
  },
  {
    title: 'Smart Classrooms',
    description: 'Interactive learning spaces with advanced audio-visual systems',
    icon: 'Monitor',
  },
  {
    title: 'Seminar Halls',
    description: 'Modern auditoriums for lectures, workshops, and student presentations',
    icon: 'Presentation',
  },
  {
    title: 'Cloud Computing Lab',
    description: 'AWS, Azure, and GCP infrastructure for cloud learning',
    icon: 'Cloud',
  },
  {
    title: 'Innovation Space',
    description: 'Dedicated center for research, prototyping, and startup incubation',
    icon: 'Zap',
  },
  {
    title: 'Library & Resources',
    description: 'Comprehensive digital library with programming books and journals',
    icon: 'Book',
  },
];

export const PLACEMENT_STATS = {
  placementPercentage: 92,
  highestPackage: '₹18 LPA',
  averagePackage: '₹8.5 LPA',
  companiesVisited: 45,
  offersGenerated: 410,
};

export const PLACEMENT_SUCCESS_STORIES = [
  {
    name: 'Avula Amarnath Reddy',
    company: 'Google',
    position: 'Senior Software Engineer',
    story: 'Started as an intern, now leading product teams',
    photo: '/images/placements/arun-kumar.jpg',
    batch: '2019',
  },
  {
    name: 'Monika',
    company: 'Microsoft',
    position: 'Cloud Architect',
    story: 'Building next-gen cloud infrastructure',
    photo: '/images/placements/priya-sharma.jpg',
    batch: '2020',
  },
  {
    name: 'Viveka G V',
    company: 'Startup Founder',
    position: 'CEO & Co-founder',
    story: 'Built a ₹10 Cr valued tech startup',
    photo: '/images/placements/rajesh-patel.jpg',
    batch: '2021',
  },
];

export const CONTACT_INFO = {
  address: 'Department of CSE, Shridevi Institute of Engineering & Technology, Sira Road, Tumkur, Karnataka 572106',
  phone: '+91-XXXXXXXXXX',
  email: 'cse@shridevi.edu.in',
  admissions: '+91-XXXXXXXXXX',
  website: 'www.shridevi.edu.in',
};

export const SOCIAL_LINKS = [
  { name: 'Facebook', url: '#', icon: 'Facebook' },
  { name: 'Twitter', url: '#', icon: 'Twitter' },
  { name: 'LinkedIn', url: '#', icon: 'Linkedin' },
  { name: 'Instagram', url: '#', icon: 'Instagram' },
  { name: 'YouTube', url: '#', icon: 'Youtube' },
];

// Creative Codex - Department Club
export const CREATIVE_CODEX = {
  name: 'Creative Codex',
  tagline: 'Innovating Ideas, Coding Solutions',
  description: 'A student-run club fostering innovation and technical excellence through collaborative projects and events.',
  logo: '/cc-logo.png',
  website: '#',
};

export const NAVBAR_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Faculty', path: '/faculty' },
  { name: 'Placements', path: '/placements' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Events', path: '/events' },
  { name: 'Contact', path: '/contact' },
];
