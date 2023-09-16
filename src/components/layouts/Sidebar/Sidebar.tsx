import { Links } from "./Links/Links";

function Sidebar() {
  return (
    <div className="pt-14 w-56 h-full fixed top-0 left-0 bg-gray-700 z-10">
      <aside className="flex flex-col gap-3 mt-10 px-3">
        <Links />
      </aside>
    </div>
  );
}

export default Sidebar;
