import storage from './storage';

const formatApiUrl = (rawUrl?: string): string => {
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    const isLocal = host === 'localhost' || host === '127.0.0.1' || host.startsWith('192.168.') || host.startsWith('10.') || host.startsWith('172.') || /^(\d{1,3}\.){3}\d{1,3}$/.test(host);
    if (isLocal) {
      return 'http://localhost:8000/api';
    }
  }
  if (!rawUrl) return 'http://localhost:8000/api';
  let cleanUrl = rawUrl.trim().replace(/^["']|["']$/g, '');
  if (cleanUrl && !cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
    cleanUrl = `http://${cleanUrl}`;
  }
  return cleanUrl;
};

export const API_BASE_URL = formatApiUrl(
  process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_BASE_URL
);

function sanitizeErrorMessage(msg: string): string {
  if (!msg) return 'Something went wrong. Please try again.';
  
  let cleaned = msg.replace(/^Validation Error:\s*/i, '').trim();
  const lower = cleaned.toLowerCase();
  
  if (lower.includes('failed to fetch') || lower.includes('networkerror') || lower.includes('network error') || lower.includes('econnrefused')) {
    return 'Unable to connect right now. Please check your internet connection and try again.';
  }
  
  if (lower.includes('api') || lower.includes('json') || lower.includes('doctype') || lower.includes('syntaxerror') || lower.includes('unexpected token')) {
    return 'Unable to process request right now. Please try again.';
  }

  if (lower.includes('e11000') || lower.includes('duplicate key')) {
    if (lower.includes('email')) {
      return 'This email address is already registered. Please sign in or use a different email.';
    }
    if (lower.includes('phone') || lower.includes('mobile')) {
      return 'This phone number is already registered. Please sign in or use a different phone number.';
    }
    return 'An account with these details already exists. Please check your input.';
  }

  return cleaned;
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

    const text = await response.text();
    let data: any = {};
    try {
      data = text ? JSON.parse(text) : {};
    } catch (parseError) {
      console.error(`[API Non-JSON Response] ${endpoint}:`, text.substring(0, 150));
      throw new Error("Unable to process request right now. Please try again.");
    }

    if (!response.ok) {
      const rawServerMessage = data?.message || data?.error || 'Something went wrong. Please check your details and try again.';
      throw new Error(sanitizeErrorMessage(rawServerMessage));
    }

    return data as T;
  } catch (error: any) {
    const sanitizedMsg = sanitizeErrorMessage(error?.message || '');
    console.error(`[API Error] ${endpoint}:`, sanitizedMsg);
    throw new Error(sanitizedMsg);
  }
}
