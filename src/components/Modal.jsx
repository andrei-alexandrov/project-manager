import { forwardRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonValue }, ref) {
    const modalInputStyling = "text-xl font-bold text-stone-500 my-4";

    return createPortal(
        <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md" ref={ref}>
            <div className={modalInputStyling}>
                {children}
            </div>
            <form className={`text-center ${modalInputStyling}`} method="dialog">
                <Button >
                    {buttonValue}
                </Button>
            </form>
        </dialog>, document.getElementById("modal-root"));
})

export default Modal; 