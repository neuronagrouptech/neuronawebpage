const FormField = ({ id, name, label, placeholder, value, onChange, type = "text", isTextArea }) => {
  const commonClasses =
    "w-full px-3 py-2 border border-gray-500 rounded-lg bg-darkRight text-white placeholder-gray-400 focus:ring-2 focus:ring-blueGreen focus:border-transparent";

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm text-white mb-1">
          {label}
        </label>
      )}
      {isTextArea ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={commonClasses}
          rows="4"
        ></textarea>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={commonClasses}
        />
      )}
    </div>
  );
};

export default FormField;
