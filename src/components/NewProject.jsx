import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
    const inputReff = useRef();
    const descReff = useRef();
    const dueDateReff = useRef();
    const modal = useRef();

    function handleSave() {
        const getInput = inputReff.current.value;
        const getDesc = descReff.current.value;
        const getDueDate = dueDateReff.current.value;

        if (getInput.length < 3 || getDesc.length < 3 || getDueDate === "") {
            modal.current.showModal();
            return;
        }

        onAdd({
            title: getInput,
            description: getDesc,
            dueDate: getDueDate
        });
    }

    return (
        <>
            <Modal ref={modal} buttonValue="Ok">
                <h2>Invalid input, fields must contain at least 3 characters
                    and the date should be valid.
                </h2>
            </Modal>
            <div className="w-[35rem] mt-16 mr-6"> 
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button
                            onClick={onCancel}
                            className="text-stone-300 hover:text-red-600">
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button
                            className="bg-stone-800 text-stone-50 hover:bg-green-800 px-6 py-2 rounded-md"
                            onClick={handleSave}>
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={inputReff} label="Title" placeholder="Enter Title" />
                    <Input ref={descReff} label="Description" textarea placeholder="Enter text" />
                    <Input type="date" ref={dueDateReff} label="Due Date" />
                </div>
            </div>
        </>
    );
}
