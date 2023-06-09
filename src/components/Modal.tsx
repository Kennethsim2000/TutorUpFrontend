import React from "react";
import { User } from "./StudentCard";
import { userIsTutor } from "~/pages/displayPage";

interface ModalProps {
  user: User | null;
  closeModalFunction: () => void;
}

const Modal: React.FC<ModalProps> = ({user, closeModalFunction}) => {
  const [showModal, setShowModal] = React.useState(false);


  return (
    <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                {/*header*/}
                <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Matched
                  </h3>
                </div>

                {/*body*/}
                <div className="p-9 my-4 text-slate-500 text-lg leading-relaxed">
                  <h2 className="my-1">{user?.name}</h2>
                  <p className="font-light">{user?.age} y.o.</p>
                  <p className="font-light">{user?.subjects.join(', ')}</p>
                  {!userIsTutor && <p className="font-light">${user?.pricing} /hr</p>}
                  <p className="font-light">Chat with {user?.name} at ___ now!</p>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-5 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeModalFunction}
                  >
                    Close
                  </button>
                  {/* <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeModalFunction}
                  >
                    Chat
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default Modal;
