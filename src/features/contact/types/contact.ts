export interface ContactFormState {
  success: boolean;

  message?: string;

  errors?: {
    name?: string[];
    phone?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
}