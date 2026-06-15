import axios from 'axios';

const API_BASE_URL = (() => {
  const envUrl = import.meta.env.VITE_API_BASE_URL?.trim();
  const productionFallback = 'https://api.waksdigital.co.ke';
  if (import.meta.env.PROD) {
    return envUrl && !/localhost|127\.0\.0\.1/i.test(envUrl)
      ? envUrl
      : productionFallback;
  }
  return envUrl || 'http://localhost:3000';
})();

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const api = {
  getClient: () => apiClient,
  // Projects
  getProjects: () => apiClient.get('/api/recent_projects'),
  getProject: (id: string | number) => apiClient.get(`/api/recent_projects/${id}`),
  createProject: (project: any) => apiClient.post('/api/recent_projects', project),
  updateProject: (id: string | number, project: any) => apiClient.put(`/api/recent_projects/${id}`, project),
  deleteProject: (id: string | number) => apiClient.delete(`/api/recent_projects/${id}`),

  // Auth
  getSession: () => apiClient.get('/api/auth/session'),
  login: (email: string, password: string) => 
    apiClient.post('/api/auth/login', { email, password }),
  register: (email: string, password: string) => 
    apiClient.post('/api/auth/register', { email, password }),
  logout: () => apiClient.post('/api/auth/logout'),

  // Chatbot
  sendChat: (messages: any[], sessionId?: string) => 
    apiClient.post('/api/chatbot', { messages, sessionId }),

  // Blog
  getBlogPosts: () => apiClient.get('/api/blog_posts'),
};

export default api;