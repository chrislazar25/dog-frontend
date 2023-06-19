import React from 'react';

function ChangePage(props){
    return(
        
        <div className="flex flex-row mx-auto">
            <button
                    className="block mx-auto m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                    onClick={()=>{
                        props.setGoPage(props.prevPage);
                    }}
                >
                    Prev
                </button>
                <button
                    className="block mx-auto m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                    onClick={()=>{
                        props.setGoPage(props.nextPage);
                    }}
                >
                    Next
                </button>
        </div>
    );
}

export default ChangePage;