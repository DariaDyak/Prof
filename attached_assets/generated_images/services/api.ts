import axios from 'axios';

// Используйте переменную окружения или URL по умолчанию
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// Создайте экземпляр axios с базовыми настройками
const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 10 секунд timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Product {
  id: number;
  title: string;
  short_description: string;
  description: string;
  platform: string;
  registration_num: string | null;
  reg_program_num: string | null;
  certificate_image: string | null;
  created_at: string;
  updated_at: string;
}

class ApiService {
  async getProducts(): Promise<Product[]> {
    try {
      console.log(`Fetching products from ${API_URL}/products`);
      const response = await apiClient.get<Product[]>('/products');
      console.log(`Received ${response.data.length} products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      if (axios.isAxiosError(error)) {
        console.error('Response:', error.response?.data);
        console.error('Status:', error.response?.status);
      }
      throw new Error('Не удалось загрузить данные о продуктах');
    }
  }

  async getProductById(id: number): Promise<Product> {
    try {
      const response = await apiClient.get<Product>(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      throw error;
    }
  }

  async createProduct(productData: Omit<Product, 'id' | 'created_at' | 'updated_at'>): Promise<Product> {
    try {
      const response = await apiClient.post<Product>('/products', productData);
      return response.data;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  }

  async updateProduct(id: number, productData: Partial<Product>): Promise<Product> {
    try {
      const response = await apiClient.put<Product>(`/products/${id}`, productData);
      return response.data;
    } catch (error) {
      console.error(`Error updating product ${id}:`, error);
      throw error;
    }
  }

  async deleteProduct(id: number): Promise<void> {
    try {
      await apiClient.delete(`/products/${id}`);
    } catch (error) {
      console.error(`Error deleting product ${id}:`, error);
      throw error;
    }
  }

  // Проверка здоровья сервера
  async checkHealth(): Promise<boolean> {
    try {
      const response = await apiClient.get('/health');
      return response.data.status === 'OK';
    } catch (error) {
      console.error('Server health check failed:', error);
      return false;
    }
  }
}

export const apiService = new ApiService();