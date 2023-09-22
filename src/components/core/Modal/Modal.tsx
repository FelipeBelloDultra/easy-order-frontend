import { X } from "react-feather";
import { ComponentProps } from "react";

type ModalProps = ComponentProps<"div"> & {
  onClose: () => void;
  isOpen: boolean;
};

function Modal({ isOpen, onClose, children, ...rest }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      {...rest}
      className="fixed h-full w-full inset-0 bg-gray-400/50 flex items-center justify-center z-30"
    >
      <div className="bg-white rounded-md p-5 w-[700px]">
        <div className="flex justify-end">
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}

export default Modal;
