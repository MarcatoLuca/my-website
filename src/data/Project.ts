import type { IProject } from "../models/IProject";

export const projects: IProject[] = [
  {
    id: '1',
    title: 'EU AI Compliance Tracker',
    description: 'A web application that helps organizations manage their compliance with the EU AI Act through interactive checklists, task management, and practical insights.',
    heroImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200',
    year: '2025',
    client: 'Confidential',
    role: 'Front-End Developer',
    tags: ['React', 'JSON', 'SharePoint'],
    overview: 'This project provides organizations with a practical way to manage their compliance with the EU AI Act. Users can complete dynamic checklists, view their compliance profile, track obligations, and create follow-up tasks with priorities and deadlines. The platform organizes obligations in a user-friendly manner and allows flexible management of activities related to compliance requirements.',
    challenge: 'The main challenge was designing a dynamic checklist system that could evaluate previous answers, calculate scores, check conditions, execute formulas, and determine outcomes in real time. The system needed to handle complex dependencies while remaining responsive and intuitive for users.',
    solution: 'We implemented a robust front-end using React integrated with SharePoint. The dynamic checklist engine was designed to evaluate responses, compute scores, and generate actionable insights. Task and follow-up management features allow assigning obligations to specific resources with deadlines and priorities, enabling practical and flexible compliance tracking.',

    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&auto=format&fit=crop',
    ],
    link: 'https://example.com',
    github: 'https://github.com',
    featured: true
  },
  {
    id: '2',
    title: 'Alpine Trails',
    description: 'A personal mobile project for exploring the Dolomites, offering detailed information on natural attractions, local operators, and outdoor activities.',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop',
    year: '2024',
    client: 'Personal Project',
    role: 'Full Stack Developer', // sviluppo completo dell’app
    tags: ['Flutter', 'FastAPI', 'SQL Server'],
    overview: 'Alpine Trails is a personal mobile project designed to let users explore the Dolomites, discover natural attractions, and connect with local activity providers. Registered users can access detailed information on trekking, hiking, climbing, mountain biking, skiing, snowshoeing, and camping. The app also provides a contact service for inquiries, and tools to track activities, calculate routes, and measure distances.',
    challenge: 'The main challenge was integrating real-time GPS tracking, route calculation for multiple activities, and performance optimization for mobile devices, while keeping the user experience intuitive and smooth.',
    solution: 'I built a mobile-first solution using Flutter for the front-end and FastAPI with SQL Server for the backend. Features include GPS tracking and route calculation for various outdoor activities, detailed information on natural attractions and local operators, and a contact system for user inquiries-all optimized for performance and usability.',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&auto=format&fit=crop',
    ],
    link: 'https://example.com',
    github: 'https://github.com',
    featured: true
  }
];