const InputWithPlaceholder = ({
  placeholder,
  handleChange,
  units,
  nameInput,
  value,
}) => {
  return (
    <>
      <div className="relative w-[140px] h-[40px] mt-10 flex items-center">
        <input
          value={value}
          onChange={handleChange}
          type="number"
          className="py-3 ps-4 block w-full bg-transparent border-gray-400 border text-lg text-gray-300"
          placeholder={placeholder}
          name={nameInput}
        />
        <div className="absolute end-5">
          <p className="text-gray-400 text-xl">{units}</p>
        </div>
      </div>
    </>
  );
};

export default InputWithPlaceholder;
