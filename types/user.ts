export type TUserProfile = {
  id?: number;
  firstName: string;
  lastName: string;
  countryCode: string;
  mobileNumber: string;
  email: string;
  profilePicture?: string;
  token?: string;
  role?: string;
};

export type UserManagementTab = 'customer' | 'provider' | 'admins';

export type TAccessManagement = {
  id?: number | undefined;
  category: string;
  canView: boolean;
  canAdd: boolean;
  canEdit: boolean;
  canDelete: boolean;
};

export type TAdminProfile = {
  id?: number | undefined;
  fullName?: string;
  firstName: string;
  lastName: string;
  countryCode: string;
  mobileNumber: string;
  email: string;
  profilePicture?: string | undefined;
  status?: string;
  role?: string;
  accessManagement?: TAccessManagement[];
  createdAt?: string;
  adminType: string;
};

export type TCustomerBookingHistory = {
  id?: number | undefined;
  provider?: string;
  service: string;
  date: string;
  type: string;
  profilePicture?: string | undefined;
  status?: string;
  accessManagement?: TAccessManagement[];
};
export type TProviderProfile = {
  id?: number | undefined;
  fullName?: string;
  firstName: string;
  lastName: string;
  countryCode: string;
  mobileNumber: string;
  email: string;
  services: string;
  status?: string;
  createdAt?: string;
  address?: Address[];
  businessInfo?: {
    businessName?: string;
    businessLogo?: string;
    yearOfExperience?: number;
    hasCertificationLicense?: boolean;
    isInsured?: boolean;
    hasToolset?: boolean;
    about?: string;
  };
  providedService?: {
    serviceTypes?: {
      type?: {
        name?: string;
      };
    }[];
  }[];
};

export type TCustomerDetails = {
  id: number;
  profilePicture?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email?: string;
  countryCode?: string;
  mobileNumber?: string;
  address: Address[];
  vehicles: Vehicle[];
};

export type Address = {
  addressType?: string;
  addressLine1: string;
  category: string;
  radius?: string;
  city?: string;
  zipcode?: string;
  state?: string;
};

export type Vehicle = {
  id: string;
  year?: string;
  industry?: string;
  model?: string;
  vehicleTrim?: string;
  engine?: string;
  driveTrain?: string;
};

export type TProviderAddress = {
  zipcode: string;
  radius: string;
};

export type TProviderBusinessInfo = {
  businessLogo: string | null;
  businessName: string;
  yearOfExperience: number | null;
};

export type TProviderDetails = {
  profilePicture?: string;
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  countryCode: string;
  mobileNumber: string;
  address: TProviderAddress[];
  businessInfo: TProviderBusinessInfo | null;
};
