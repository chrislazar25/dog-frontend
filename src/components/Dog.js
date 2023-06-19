import { useState, useEffect } from "react";

function Dog(prop){
    var [like, setLike] = useState(false);

    useEffect(() => {
        prop.updateFav(like, prop.id);
      }, [like]);

    return (
        <div className="min-width-[350px] max-width-[350px] m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img 
                className="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" 
                src={prop.img} 
                alt="Dog Pic!"
            />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                        {prop.name}
                    </p>
                    <p className="text-slate-500 font-medium">
                        A {prop.age} year old {prop.breed} from {prop.zip_code}
                    </p>
                    <p>
                    <button 
                        value={like}
                        onClick={(e)=>{
                            e.preventDefault();
                            const newLikeValue = !like;
                            setLike(newLikeValue);
                            }}
                        className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"

                    >
                        {!like? 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>:
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg> 
                        }
                        
                    </button>
                    </p>
                </div>
            </div>
        </div>
    
    );
}

export default Dog;