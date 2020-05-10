export default interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined,
  children: any,
  className?: string,
  disabled?: boolean,
  onClick?: () => void,
  small?: boolean
}