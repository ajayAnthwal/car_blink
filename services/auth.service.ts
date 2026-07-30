import apiClient from '@/config/api.config';
import { RegisterPayload, RegisterResponse } from '@/types/auth';
import { TUserProfile } from '@/types/user';

const BASE_URLS = `/auth`;

export const postLogin = async (payload: {
  email: string;
  password: string;
}): Promise<{ data: TUserProfile; message: string }> => {
  try {
    const response = await apiClient.post(`${BASE_URLS}/login`, payload);
    const {
      result: { data, message }
    } = response.data;
    return { data, message };
  } catch (error: any) {
    throw new Error(error.message || 'Login failed');
  }
};

// export const postRegister = async (
//   payload: RegisterPayload
// ): Promise<RegisterResponse> => {
//   try {
//     const response = await apiClient.post(
//       `${BASE_URLS}/register`,
//       payload
//     );

//     const {
//       result: { data, message },
//     } = response.data;

//     return {
//       data,
//       message,
//     };
//   } catch (error: any) {
//     throw new Error(
//       error?.response?.data?.message ||
//         error?.message ||
//         "Registration failed"
//     );
//   }
// };

export const postRegister = async (
  payload: RegisterPayload
): Promise<RegisterResponse> => {
  try {
    const response = await apiClient.post(
      `${BASE_URLS}/register`,
      payload
    );

    const { data, message } = response.data;

    return {
      data,
      message,
    };
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message ||
        error?.message ||
        "Registration failed"
    );
  }
};

export const getProfile = async (): Promise<{
  data: TUserProfile;
  message: string;
}> => {
  try {
    const response = await apiClient.get(`${BASE_URLS}`);
    const { data, message } = response.data;
    return { data, message };
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

// export const putProfile = async (
//   payload: TUserProfile
// ): Promise<{ data: TUserProfile; message: string }> => {
//   try {
//     const response = await apiClient.put(`${BASE_URLS}`, payload);
//     const {
//       result: { data, message }
//     } = response.data;
//     return { data, message };
//   } catch (error: any) {
//     throw new Error(error.message || 'Update profile failed');
//   }
// };

// // Send OTP to email
// export const sendResetOtp = async (payload: {
//   email: string;
// }): Promise<{ message: string }> => {
//   try {
//     const response = await apiClient.post(`${BASE_URLS}/send-otp`, payload);
//     const {
//       result: { message }
//     } = response.data;
//     return { message };
//   } catch (error: any) {
//     throw new Error(error?.message || 'Failed to send reset link.');
//   }
// };

// // Reset password
// export const resetPassword = async (payload: {
//   email: string;
//   tempOtp: string;
//   password: string;
// }): Promise<{ message: string }> => {
//   try {
//     const response = await apiClient.patch(`${BASE_URLS}/password`, payload);
//     const {
//       result: { message }
//     } = response.data;
//     return { message };
//   } catch (error: any) {
//     throw new Error(error?.message || 'Password reset failed.');
//   }
// };
