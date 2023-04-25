export interface FormInterface{
    handleSubmit ?:(event:React.FormEvent<HTMLFormElement>) => void;
    action?:string;
}