export type RoleType = '' | '*' | 'admin' | 'user';
export interface UserState {
  userId: number;
  username?: string;
  userAccount?: string;
  avatar?: string;
  gender?: number;
  phone?: string;
  email?: string;
  nickname?: string;
  permission?: number;
  status?: number;
  createTime?: string;
  role: RoleType;
}
