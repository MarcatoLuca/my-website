import type { IProject } from "../models/IProject";

  export const projects: IProject[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with real-time inventory management and seamless checkout experience.',
      heroImage: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1600&auto=format&fit=crop',
      year: '2024',
      client: 'Retail Company',
      role: 'Lead Developer',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      overview: 'This project involved building a comprehensive e-commerce platform from the ground up, focusing on performance, scalability, and user experience. The platform handles thousands of products and processes secure transactions with real-time inventory updates.',
      challenge: 'The main challenge was creating a system that could handle high traffic during peak shopping seasons while maintaining fast page loads and a smooth checkout process.',
      solution: 'We implemented a microservices architecture with Redis caching, optimized database queries, and used CDN for static assets. The checkout process was streamlined to reduce cart abandonment.',
      images: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&auto=format&fit=crop',
      ],
      link: 'https://example.com',
      github: 'https://github.com',
    }
  ];