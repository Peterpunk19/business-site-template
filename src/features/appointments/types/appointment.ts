export interface AppointmentFormState {
  success: boolean;
  message?: string;
  service?: string;
  tracked: boolean;

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
