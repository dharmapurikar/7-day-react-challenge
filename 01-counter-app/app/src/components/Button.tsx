interface Props {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: Props) => {
  return (
    <button className="btn btn-primary m-2" onClick={onClick}>{label}</button>
  )
}

export default Button