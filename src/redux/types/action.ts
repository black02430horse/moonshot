export type IAction = {
  next?: (...args: any) => void;
  errorAction?: (...args: any) => void;
  errors?: any;
};
