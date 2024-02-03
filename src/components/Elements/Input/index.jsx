import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { label, name, type, placeholder, onChange, value, id, htmlFor } =
    props;
  return (
    <div className="mb-6">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        id={id}
        name={name}
        type={type}
      />
    </div>
  );
};

export default InputForm;
