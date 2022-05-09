import axios from 'axios';
import { UserState } from '@/store/modules/user/types';

export interface LoginData {
  userAccount: string;
  userPassword: string;
}

export interface LoginRes {
  token: string;
}
export function login(data: LoginData) {
  return axios.post<LoginRes>('/api/logins/login', data);
}

export function logout() {
  return axios.post<LoginRes>('/api/logins/logout');
}

export function getUserInfo() {
  return axios.post<UserState>('/api/users/info');
}
