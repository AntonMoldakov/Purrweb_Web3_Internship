import Button, { ButtonProps } from '@mui/material/Button';

export const ButtonDefault = (props: ButtonProps) => {
  return <Button {...props}>{props.title}</Button>;
};
