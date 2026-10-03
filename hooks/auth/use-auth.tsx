"use client";

import {
  useMutation,
  UseMutationResult,
  useQuery
} from '@tanstack/react-query';
import {
  postLogin,
  postRegister,
  postSendOtp,
  postVerifyOtp
} from '@/services/auth.service';
import storage from '@/lib/storage';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { TUserProfile } from '@/types/user';
import { RegisterPayload, RegisterResponse, TLoginFormValues } from '@/types/auth';

export const getDashboardUrl = (): string => {
  if (typeof window !== 'undefined') {
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    if (isLocalhost) {
      return 'http://localhost:3001';
    }
  }
  const raw = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://dashboard.carblink.in';
  let clean = raw.trim().replace(/^["']|["']$/g, '');
  if (clean && !clean.startsWith('http://') && !clean.startsWith('https://')) {
    clean = `http://${clean}`;
  }
  return clean.replace(/\/$/, '');
};

const setCrossPortAuth = (token: string, role?: string) => {
  if (typeof window === 'undefined') return;
  const userRole = role || 'CUSTOMER';
  storage.setToken(token);
  window.localStorage.setItem('car_blink_access_token', token);
  window.localStorage.setItem('carBlink_token', token);
  window.localStorage.setItem('role', userRole);
  const expires = new Date(Date.now() + 30 * 864e5).toUTCString();
  document.cookie = `accessToken=${encodeURIComponent(token)}; expires=${expires}; path=/; SameSite=Lax`;
  document.cookie = `car_blink_access_token=${encodeURIComponent(token)}; expires=${expires}; path=/; SameSite=Lax`;
  document.cookie = `role=${encodeURIComponent(userRole)}; expires=${expires}; path=/; SameSite=Lax`;
};

const extractTokenAndRole = (res: any) => {
  const payload = res?.data || res;
  const token = payload?.tokens?.accessToken || payload?.token || res?.tokens?.accessToken || res?.token;
  const role = payload?.user?.role || payload?.role || res?.user?.role || res?.role || 'CUSTOMER';
  return { token, role };
};

export const useLogin = (): UseMutationResult<
  any,
  Error,
  { identifier?: string; email?: string; password?: string }
> => {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: (res: any) => {
      const { token, role } = extractTokenAndRole(res);
      if (token) setCrossPortAuth(token, role);
      toast.success(res?.message || 'Login successful! Redirecting to your Dashboard...');
      setTimeout(() => {
        const dashboardUrl = getDashboardUrl();
        if (token) {
          window.location.href = `${dashboardUrl}/login?token=${encodeURIComponent(token)}`;
        } else {
          const route = role === 'PARTNER' ? '/partner/dashboard' : '/customer/dashboard';
          window.location.href = `${dashboardUrl}${route}`;
        }
      }, 800);
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });
};

export const usePartnerLogin = (): UseMutationResult<
  any,
  Error,
  { identifier?: string; email?: string; password?: string }
> => {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: (res: any) => {
      const { token, role } = extractTokenAndRole(res);
      if (role !== 'PARTNER') {
        toast.error('This login page is exclusively for Workshop Partners. Please use Customer login.');
        return;
      }
      if (token) setCrossPortAuth(token, role);
      toast.success('Partner login successful! Redirecting to Workshop Dashboard...');
      setTimeout(() => {
        const dashboardUrl = getDashboardUrl();
        if (token) {
          window.location.href = `${dashboardUrl}/login?token=${encodeURIComponent(token)}`;
        } else {
          window.location.href = `${dashboardUrl}/partner/dashboard`;
        }
      }, 800);
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });
};

export const useSendOtp = (): UseMutationResult<
  { message: string },
  Error,
  { identifier: string }
> => {
  return useMutation({
    mutationFn: postSendOtp,
    onSuccess: ({ message }) => {
      toast.success(message);
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });
};

export const useVerifyOtp = (): UseMutationResult<
  any,
  Error,
  { identifier: string; otp: string }
> => {
  return useMutation({
    mutationFn: postVerifyOtp,
    onSuccess: (res: any) => {
      const { token, role } = extractTokenAndRole(res);
      if (token) setCrossPortAuth(token, role);
      toast.success(res?.message || 'Verification successful! Redirecting to Dashboard...');
      setTimeout(() => {
        const dashboardUrl = getDashboardUrl();
        if (token) {
          window.location.href = `${dashboardUrl}/login?token=${encodeURIComponent(token)}`;
        } else {
          const route = role === 'PARTNER' ? '/partner/dashboard' : '/customer/dashboard';
          window.location.href = `${dashboardUrl}${route}`;
        }
      }, 800);
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });
};

export const usePartnerVerifyOtp = (): UseMutationResult<
  any,
  Error,
  { identifier: string; otp: string }
> => {
  return useMutation({
    mutationFn: postVerifyOtp,
    onSuccess: (res: any) => {
      const { token, role } = extractTokenAndRole(res);
      if (role !== 'PARTNER') {
        toast.error('This login page is exclusively for Workshop Partners. Please use Customer login.');
        return;
      }
      if (token) setCrossPortAuth(token, role);
      toast.success('Partner login successful! Redirecting to Workshop Dashboard...');
      setTimeout(() => {
        const dashboardUrl = getDashboardUrl();
        if (token) {
          window.location.href = `${dashboardUrl}/login?token=${encodeURIComponent(token)}`;
        } else {
          window.location.href = `${dashboardUrl}/partner/dashboard`;
        }
      }, 800);
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });
};

export const useRegister = (): UseMutationResult<
  RegisterResponse,
  Error,
  RegisterPayload
> => {
  return useMutation({
    mutationFn: postRegister,
    onSuccess: (res: any, variables: any) => {
      const { token, role } = extractTokenAndRole(res);
      if (token) setCrossPortAuth(token, role);
      
      const userRole = variables?.role || role;
      if (userRole === 'PARTNER') {
        toast.success(res?.message || 'Partner registration submitted successfully!');
        // Do not auto-redirect; let partner review Step 3 verification notice
      } else {
        toast.success(res?.message || 'Registration successful! Opening your Dashboard...');
        setTimeout(() => {
          const dashboardUrl = getDashboardUrl();
          if (token) {
            window.location.href = `${dashboardUrl}/login?token=${encodeURIComponent(token)}`;
          } else {
            window.location.href = `${dashboardUrl}/customer/dashboard`;
          }
        }, 800);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });
};
