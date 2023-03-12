type Props = {
  id: string;
  name: string;
  inputType: string;
  placeholder: string;
  text: string;
};

const Inputfield: React.FC<Props> = ({
  name,
  inputType,
  placeholder,
  text,
}) => {
  return (
    <>
      <label htmlFor={name} className="text-[1.25rem] sm:text-[1.5rem]">
        {text}
      </label>
      <input type={inputType} name={name} id={name} placeholder={placeholder} />
    </>
  );
};

export default Inputfield;
