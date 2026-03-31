import { ArticleFrontmatter } from './mdx';

export interface ExpertAuthor {
  name: string;
  credentials: string[];
  experience: string;
  certifications: string[];
}

export interface ProductStructuredData {
  name: string;
  description: string;
  brand: string;
  category: string;
  price: string;
  availability: string;
}

export interface ReviewStructuredData {
  author: ExpertAuthor;
  datePublished: string;
  reviewRating: number;
  reviewBody: string;
  technicalSpecs: {
    torque: string;
    rpm: string;
    vibration: string;
    safety: string[];
  };
}

export function generateProductSchema(frontmatter: ArticleFrontmatter) {
  const productData: ProductStructuredData = {
    name: frontmatter.title,
    description: frontmatter.description,
    brand: frontmatter.brand || 'Saeyang',
    category: 'Professional E-file Micromotor',
    price: frontmatter.price || 'Contact for pricing',
    availability: 'https://schema.org/InStock'
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productData.name,
    description: productData.description,
    brand: productData.brand,
    category: productData.category,
    offers: {
      '@type': 'Offer',
      price: productData.price,
      availability: productData.availability,
      seller: {
        '@type': 'Organization',
        name: 'Coheal UK',
        url: 'https://coheal.co.uk'
      }
    }
  };
}

export function generateReviewSchema(frontmatter: ArticleFrontmatter, content: string) {
  const reviewData: ReviewStructuredData = {
    author: {
      name: frontmatter.reviewer || 'Professional E-file Reviewer',
      credentials: ['Beauty Device Specialist', 'Podiatry Equipment Tester'],
      experience: '10+ years testing e-file and micromotor systems',
      certifications: ['Electrical Safety Awareness', 'Independent Product Testing']
    },
    datePublished: frontmatter.date,
    reviewRating: frontmatter.rating || 4.5,
    reviewBody: content.replace(/<[^>]*>/g, ''), // Strip HTML for schema
    technicalSpecs: {
      torque: frontmatter.torque || '4.5 Ncm',
      rpm: frontmatter.rpm || '30,000',
      vibration: frontmatter.vibration || '< 2.5 m/s²',
      safety: frontmatter.safetyFeatures || ['White Finger Prevention', 'Electrical Safety Certified']
    }
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: generateProductSchema(frontmatter),
    author: {
      '@type': 'Person',
      name: reviewData.author.name,
      jobTitle: 'Professional E-file Specialist',
      description: reviewData.author.credentials.join(', '),
      knowsAbout: [
        'Professional E-file Testing',
        'Micromotor Torque Analysis',
        'Vibration Control',
        'Salon and Podiatry Workflows',
        'Dental Prosthetic Bench Tools'
      ]
    },
    datePublished: reviewData.datePublished,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: reviewData.reviewRating,
      bestRating: 5,
      worstRating: 1,
      ratingExplanation: 'Based on technical performance, handling comfort, durability, and safety'
    },
    reviewBody: reviewData.reviewBody,
    publisher: {
      '@type': 'Organization',
      name: 'E-file Reviews',
      url: 'https://efilereviews.co.uk'
    }
  };
}

export function generateBreadcrumbSchema(slug: string, title: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://efilereviews.co.uk'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Reviews',
        item: 'https://efilereviews.co.uk/reviews'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: `https://efilereviews.co.uk/reviews/${slug}`
      }
    ]
  };
}
