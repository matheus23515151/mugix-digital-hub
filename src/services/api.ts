import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export interface FormData {
  name: string;
  email: string;
  date: string;
  time: string;
  phone?: string;
  message?: string;
}

export const api = {
  async submitForm(data: FormData) {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/submit-form`, data);
      return response.data;
    } catch (error) {
      console.error('Error submitting form:', error);
      throw error;
    }
  }
};