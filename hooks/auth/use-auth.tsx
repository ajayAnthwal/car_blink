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
      return 'http://localhost:3000';
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
  storage.setToken(token);
  window.localStorage.setItem('car_blink_access_token', token);
  window.localStorage.setItem('carBlink_token', token);
  const expires = new Date(Date.now() + 30 * 864e5).toUTCString();
  document.cookie = `accessToken=${encodeURIComponent(token)}; expires=${expires}; path=/; SameSite=Lax`;
  document.cookie = `car_blink_access_token=${encodeURIComponent(token)}; expires=${expires}; path=/; SameSite=Lax`;
  if (role) {
    document.cookie = `role=${encodeURIComponent(role)}; expires=${expires}; path=/; SameSite=Lax`;
  }
};

export const useLogin = (): UseMutationResult<
  { data: TUserProfile; message: string },
  Error,
  { identifier?: string; email?: string; password?: string }
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: postLogin,
    onSuccess: ({ data, message }) => {
      data.token && setCrossPortAuth(data.token, data.role);
      toast.success(message || 'Login successful! Redirecting to Dashboard...');
      setTimeout(() => {
        const dashboardUrl = getDashboardUrl();
        window.location.href = `${dashboardUrl}/login?token=${data.token}`;
      }, 1000);
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });
};

export const usePartnerLogin = (): UseMutationResult<
  { data: TUserProfile; message: string },
  Error,
  { identifier?: string; email?: string; password?: string }
> => {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: ({ data, message }) => {
      if (data.role !== 'PARTNER') {
        toast.error('This login page is exclusively for Workshop Partners. Please use Customer login.');
        return;
      }
      data.token && setCrossPortAuth(data.token, data.role);
      toast.success('Partner login successful! Redirecting to Dashboard...');
      setTimeout(() => {
        const dashboardUrl = getDashboardUrl();
        window.location.href = `${dashboardUrl}/login?token=${data.token}`;
      }, 1000);
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
  { data: TUserProfile; message: string },
  Error,
  { identifier: string; otp: string }
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: postVerifyOtp,
    onSuccess: ({ data, message }) => {
      data.token && setCrossPortAuth(data.token, data.role);
      toast.success(message || 'Verification successful! Redirecting to Dashboard...');
      setTimeout(() => {
        const dashboardUrl = getDashboardUrl();
        window.location.href = `${dashboardUrl}/login?token=${data.token}`;
      }, 1000);
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });
};

export const usePartnerVerifyOtp = (): UseMutationResult<
  { data: TUserProfile; message: string },
  Error,
  { identifier: string; otp: string }
> => {
  return useMutation({
    mutationFn: postVerifyOtp,
    onSuccess: ({ data, message }) => {
      if (data.role !== 'PARTNER') {
        toast.error('This login page is exclusively for Workshop Partners. Please use Customer login.');
        return;
      }
      data.token && setCrossPortAuth(data.token, data.role);
      toast.success('Partner login successful! Redirecting to Dashboard...');
      setTimeout(() => {
        const dashboardUrl = getDashboardUrl();
        window.location.href = `${dashboardUrl}/login?token=${data.token}`;
      }, 1000);
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
  const router = useRouter();

  return useMutation({
    mutationFn: postRegister,

    onSuccess: (res: any) => {
      const payloadData = res?.data || res;
      const tokenToUse = payloadData?.tokens?.accessToken || payloadData?.token;
      const userRole = payloadData?.user?.role || payloadData?.role || 'CUSTOMER';

      if (tokenToUse) {
        setCrossPortAuth(tokenToUse, userRole);
      }

      toast.success(res?.message || 'Registration successful! Auto-logging in...');

      setTimeout(() => {
        const dashboardUrl = getDashboardUrl();
        if (tokenToUse) {
          window.location.href = `${dashboardUrl}/login?token=${tokenToUse}`;
        } else {
          window.location.href = `${dashboardUrl}/customer/dashboard`;
        }
      }, 800);
    },

    onError: (error) => {
      toast.error(error.message);
    }
  });
};
