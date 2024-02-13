export interface CreateAccountInterface {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirm_password: string;
}

export interface LoginInterface {
    email: string;
    password: string;
}
  