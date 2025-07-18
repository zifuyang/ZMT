export interface Package {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  features: string[];
}

export interface Vendor {
  id: string;
  name: string;
  tagline: string;
  bio: string;
  ownerName: string;
  ownerBio: string;
  ownerImage: string;
  images: string[];
  packages: Package[];
  category: string;
  location: string;
}

export interface VendorCardProps {
  vendor: Vendor;
} 