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
// import queryClient from '@/lib/react-query';

export const useLogin = (): UseMutationResult<
  { data: TUserProfile; message: string },
  Error,
  { identifier?: string; email?: string; password?: string }
> => {
  const router = useRouter();

  return useMutation({
    mutationFn: postLogin,
    onSuccess: ({ data, message }) => {
      if (data.role === 'PARTNER') {
        toast.error('Workshop Partners must login via the Partner Dashboard.');
        setTimeout(() => {
          const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://car-blink-dashboard.vercel.app';
          window.location.href = `${dashboardUrl}/login`;
        }, 1500);
        return;
      }
      data.token && storage.setToken(data.token);
      toast.success(message);
      // Wait for toast to appear then redirect and hard reload to update auth context
      setTimeout(() => {
        window.location.href = '/';
      }, 1500);
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
        toast.error('This login page is exclusively for Workshop Partners. Please use the Customer login.');
        return;
      }
      data.token && storage.setToken(data.token);
      toast.success('Partner login successful! Redirecting to Dashboard...');
      setTimeout(() => {
        const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://car-blink-dashboard.vercel.app';
        window.location.href = `${dashboardUrl}/login?token=${data.token}`;
      }, 1500);
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
      if (data.role === 'PARTNER') {
        toast.error('Workshop Partners must login via the Partner Dashboard.');
        setTimeout(() => {
          const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://car-blink-dashboard.vercel.app';
          window.location.href = `${dashboardUrl}/login`;
        }, 1500);
        return;
      }
      data.token && storage.setToken(data.token);
      toast.success(message);
      setTimeout(() => {
        window.location.href = '/';
      }, 1500);
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
        toast.error('This login page is exclusively for Workshop Partners. Please use the Customer login.');
        return;
      }
      data.token && storage.setToken(data.token);
      toast.success('Partner login successful! Redirecting to Dashboard...');
      setTimeout(() => {
        const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://car-blink-dashboard.vercel.app';
        window.location.href = `${dashboardUrl}/login?token=${data.token}`;
      }, 1500);
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

    onSuccess: ({ data, message }) => {
      if (data.role === 'PARTNER') {
        toast.error('Workshop Partners must login via the Partner Dashboard.');
        setTimeout(() => {
          const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://car-blink-dashboard.vercel.app';
          window.location.href = `${dashboardUrl}/login`;
        }, 1500);
        return;
      }

      if (data?.token) {
        storage.setToken(data.token);
      }

      toast.success(message);

      setTimeout(() => {
        window.location.href = '/';
      }, 1500);
    },

    onError: (error) => {
      toast.error(error.message);
    }
  });
};
// export const useProfile = () => {
//   return useQuery({
//     queryKey: ['profile'],
//     queryFn: getProfile,
//     retry: false
//   });
// };

// export const usePutProfile = (): UseMutationResult<
//   { data: TUserProfile; message: string },
//   Error,
//   TUserProfile
// > => {
//   return useMutation({
//     mutationFn: putProfile,
//     onSuccess: ({ message }) => {
//       toast.success(message);
//       queryClient.invalidateQueries({ queryKey: ['profile'] });
//     },
//     onError: (error) => {
//       toast.error(error.message);
//     }
//   });
// };

// export const useForgetPassword = () => {
//   return useMutation({
//     mutationFn: sendResetOtp,
//     onSuccess: ({ message }) => {
//       toast.success(message);
//     },
//     onError: (error) => {
//       toast.error(error.message);
//     }
//   });
// };

// export const useResetPassword = () => {
//   const router = useRouter();
//   return useMutation({
//     mutationFn: resetPassword,
//     onSuccess: ({ message }) => {
//       toast.success(message);
//       router.push('/login');
//     },
//     onError: (error) => {
//       toast.error(error.message);
//     }
//   });
// };
