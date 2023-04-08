export interface ProgresBarModel {
  current: number;
  total: number;
}

export type ToastType = 'error' | 'warn' | 'info';

export interface ToastMessage {
  type: ToastType;
  message: string;
}
