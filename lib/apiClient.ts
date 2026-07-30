export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

import storage from './storage';

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
    ...options?.headers as any,
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
