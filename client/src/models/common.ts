export interface Options {
  id: number;
  name: string;
  value?: string;
}

export interface Errors {
  statusCode: number;
  error: {
    message: string;
    errorCode: string;
    description: string;
  };
  path: string;
}

export interface FormikFieldProps {
  name: string;
  values: { [field: string]: any };

  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: any) => void;
}

export interface FormikFormProps {
  dirty: boolean;
  errors: { [field: string]: string };
  touched: { [field: string]: boolean };
}
