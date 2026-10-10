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
  otp?: string;
  role: "CUSTOMER" | "PARTNER";
  businessName?: string;
  workshopName?: string;
  ownerName?: string;
  businessType?: "Proprietorship" | "Partnership" | "LLP" | "Company" | "Other" | string;
  addressLine?: string;
  city?: string;
  state?: string;
  pincode?: string;
  latitude?: number;
  longitude?: number;
  businessAddress?: string;
  address?: string;
  gstNumber?: string;
  msmeNumber?: string;
};

export type RegisterResponse = {
  data: TUserProfile;
  message: string;
};