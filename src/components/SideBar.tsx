import { FaCog, FaPlus, FaInfo } from "react-icons/fa";
const iconSize = 25;
const buttonStyling = "m-auto p-3 rounded-full bg-[#213555]"

interface Commands {
  toggleModal: any
}

const SideBar = ({toggleModal }: Commands) => {
  // This components needs to be a side bar with different option
  // It contains the option to create new todo list
  // It has the option to go into settings to customize the look of the app
  return (
    <div className="flex flex-col justify-between items-center h-screen w-40 p-4 bg-[#4F709C] text-[#F5EFE7]">
      <div className="text-2xl font-bold h-2/3">Todo App</div>

      {/* List of all the options in the appilcation */}
      <div className="flex flex-col h-1/3">
        {/* Here are button components */}

        <button className={buttonStyling} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
                onClick={() =>toggleModal()}>
          <FaPlus size={iconSize} />
        </button>

        <button className={buttonStyling}><FaCog size={iconSize} /></button>
        <button className={buttonStyling}><FaInfo size={iconSize} /></button>
      </div>

    </div>
  );
};

export default SideBar;
