import React from "react";
function ToggleFilter (props) {
    return (
        <div className="mx-auto py-12 flex justify-center">
            {/* Code block starts */}
            <div className="flex items-center">
                <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                    <input 
                        defaultChecked 
                        type="radio" 
                        name="radio"
                        value="asc" 
                        className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" 
                        onChange={(e)=>props.setFilterOrder(e.target.value)}

                    />
                    <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
                </div>
                <p className="ml-2 text-sm leading-4 font-normal text-black dark:text-gray-100">Ascending</p>
            </div>
            {/* Code block ends */}
            {/* Code block starts */}
            <div className="flex items-center ml-6">
                <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                    <input 
                        type="radio" 
                        name="radio" 
                        className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none" 
                        value="desc"
                        onChange={(e)=>props.setFilterOrder(e.target.value)}
                    />
                    <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
                </div>
                <p className="ml-2 text-sm leading-4 font-normal text-black dark:text-gray-100">Descending</p>
            </div>
            {/* Code block ends */}
            <style>
                {`  .checkbox:checked {
                        border: none;
                    }
                    .checkbox:checked + .check-icon {
                        display: flex;
                    }`}
            </style>
        </div>
    );
};
export default ToggleFilter;
