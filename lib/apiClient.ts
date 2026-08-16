import storage from './storage';

const formatApiUrl = (rawUrl?: string): string => {
  if (!rawUrl) return '';
  let cleanUrl = rawUrl.trim().replace(/^["']|["']$/g, '');
  if (cleanUrl && !cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
    cleanUrl = `http://${cleanUrl}`;
  }
  return cleanUrl;
};

export const API_BASE_URL = formatApiUrl(
  process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_BASE_URL
);

if (!API_BASE_URL && typeof window !== 'undefined') {
  console.warn("⚠️ NEXT_PUBLIC_API_URL environment variable is not set!");
}

/**
 * A simple fetch wrapper to hit the backend API.
 */
export async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  let token = '';
  if (typeof window !== 'undefined') {
    token = storage.getToken() || '';
  }

  const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options?.headers as any),
  };

  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers: defaultHeaders,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || 'API request failed');
    }

    return data as T;
  } catch (error: any) {
    console.error(`[API Error] ${endpoint}:`, error.message);
    throw error;
  }
}
