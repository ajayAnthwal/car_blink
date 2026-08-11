import { TUserProfile } from "./user";

export type TLoginFormValues = {
  email: string;
  password: string;
};

export type TSendOtpFormValues = {
  type: string;
  mobileNumber?: string | undefined;
  countryCode?: string | undefined;
  email?: string | undefined;
};

export type TVerifyOtpFormValues = {
  type: string;
  tempOtp: string | undefined;
  mobileNumber?: string | undefined;
  countryCode?: string | undefined;
  email?: string | undefined;
};

export type RegisterPayload = {
  fullName: string;
  email?: string;
  phone: string;
  password?: string;
  role: "CUSTOMER";
};

export type RegisterResponse = {
  data: TUserProfile;
  message: string;
};