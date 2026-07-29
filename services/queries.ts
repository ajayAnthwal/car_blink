import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchApi } from '@/lib/apiClient';

// --- Master Data (Services) ---
export const useGetServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: () => fetchApi<any>('/services?isActive=true&limit=100'),
    select: (data) => {
      const servicesArray = data?.data?.data || data?.data?.services;
      if (!servicesArray) return { services: [], categories: ["All"] };
      
      const services = servicesArray.map((s: any) => ({
        name: s.name,
        description: s.shortDescription || s.description || "Premium car service.",
        priceFrom: s.price ? `₹${s.price}` : "Varies",
        category: s.category || "General",
        icon: s.icon || "Wrench",
        slug: s.slug
      }));

      const uniqueCats = new Set<string>();
      servicesArray.forEach((s: any) => {
        if (s.category) uniqueCats.add(s.category);
      });
      const categories = ["All", ...Array.from(uniqueCats)];

      return { services, categories };
    }
  });
};

// --- Blogs ---
export const useGetBlogs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: () => fetchApi<any>('/blogs?status=PUBLISHED'),
    select: (data) => {
      if (!data?.data?.blogs) return [];
      
      return data.data.blogs.map((b: any) => ({
        title: b.title,
        date: b.publishedAt ? new Date(b.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : new Date(b.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        readTime: "5 min read",
        image: b.featuredImage || "/images/blog-1.png",
        slug: b.slug,
      }));
    }
  });
};

export const useGetBlogBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['blog', slug],
    queryFn: () => fetchApi<any>(`/blogs/${slug}`),
    select: (data) => data?.data,
    enabled: !!slug
  });
};

// --- Plans & Subscriptions ---
export const useGetPlans = () => {
  return useQuery({
    queryKey: ['plans'],
    queryFn: () => fetchApi<any>('/plans'),
    select: (data) => data?.data || [],
  });
};

// --- Partners ---
export const useGetTopWorkshops = () => {
  return useQuery({
    queryKey: ['top-workshops'],
    queryFn: () => fetchApi<any>('/partner/public/top-workshops'),
    select: (data) => data?.data || [],
  });
};

// --- Booking & Leads ---
export const useCreateLead = () => {
  return useMutation({
    mutationFn: (data: { name: string; phone: string; vehicleBrand?: string; vehicleModel?: string; city?: string; message?: string; source?: string }) => 
      fetchApi('/leads', {
        method: 'POST',
        body: JSON.stringify(data),
      })
  });
};

export const useCreateBooking = () => {
  return useMutation({
    mutationFn: (data: { vehicleId: string; serviceId: string; cityId: string; description: string; preferredDate: string; latitude?: number; longitude?: number }) => 
      fetchApi('/customer/bookings', {
        method: 'POST',
        body: JSON.stringify(data),
      })
  });
};

export const useCreateGarageVehicle = () => {
  return useMutation({
    mutationFn: (data: { brand: string; model: string; registrationNumber: string; fuelType: string; year: number }) => 
      fetchApi('/customer/garage', {
        method: 'POST',
        body: JSON.stringify(data),
      })
  });
};
