// client/src/lib/api.ts
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  count?: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  short_description: string;
  certificate_image: string | null;
  registration_num: string | null;
  reg_program_num: string | null;
  platform: string;
  created_at: string;
}

// Функция для обработки ошибок
async function handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data: ApiResponse<T> = await response.json();
  
  if (!data.success) {
    throw new Error(data.message || 'API request failed');
  }
  
  return data;
}

// Получить все продукты
export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(`${API_BASE_URL}/products`);
  const result = await handleResponse<Product[]>(response);
  return result.data;
}

// Поиск продуктов
export async function searchProducts(query: string): Promise<Product[]> {
  const response = await fetch(`${API_BASE_URL}/products/search?q=${encodeURIComponent(query)}`);
  const result = await handleResponse<Product[]>(response);
  return result.data;
}

// Получить статистику
export async function getProductStats() {
  const response = await fetch(`${API_BASE_URL}/products/stats`);
  const result = await handleResponse<any>(response);
  return result.data;
}

// Получить продукт по ID
export async function getProductById(id: number): Promise<Product> {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  const result = await handleResponse<Product>(response);
  return result.data;
}