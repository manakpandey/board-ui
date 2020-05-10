export default interface Props {
  name: string,
  content: any,
  onChange: (e: any) => void,
  value: string,
  isSelected: string,
  label?: string
}