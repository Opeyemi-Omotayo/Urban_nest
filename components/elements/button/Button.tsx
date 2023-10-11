type Props = {
    className?: string;
    children: React.ReactNode | string;
    disabled?: boolean;
    onClick?: any;
};

const Button = ({ className, children, disabled, onClick }: Props) => {
    return <button className={` ${className} h-11 rounded-lg text-white font-medium w-24`} disabled={disabled} onClick={onClick}>{children}</button>;
};

export default Button;