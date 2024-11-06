import { getInitials } from "../../utils/helper";

function ProfileInfo({ onLogout }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 font-medium text-slate-800">
        {getInitials("Abdo Elradad")}
      </div>
      <div>
        <p className="text-sm font-medium">William</p>
        <button className="text-sm text-slate-700 underline" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileInfo;
