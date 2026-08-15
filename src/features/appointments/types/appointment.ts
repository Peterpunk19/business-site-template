export interface AppointmentFormState {
  success: boolean;
  message?: string;

  errors?: {
    name?: string[];
    phone?: string[];
    email?: string[];
    service?: string[];
    preferredDate?: string[];
    preferredTime?: string[];
    message?: string[];
  };
}