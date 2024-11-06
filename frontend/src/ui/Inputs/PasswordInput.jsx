import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function PasswordInput({ value, onChange, placeholder }) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="mb-3 flex items-center rounded-lg border-[1.5px] bg-transparent px-5">
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="mr-3 w-full rounded-lg bg-transparent py-3 text-sm outline-none"
      />

      {isShowPassword ? (
        <Eye
          className="cursor-pointer text-indigo-600"
          onClick={() => toggleShowPassword()}
        />
      ) : (
        <EyeOff
          className="cursor-pointer text-slate-400"
          onClick={() => toggleShowPassword()}
        />
      )}
    </div>
  );
}

export default PasswordInput;
