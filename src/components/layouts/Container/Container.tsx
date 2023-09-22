import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="bg-white rounded-[4px] shadow-sm p-4 border border-gray-100">
      {children}
    </div>
  );
}

export default Container;
