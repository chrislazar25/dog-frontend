import { useState, useEffect } from "react";
import BreedFilter from "../components/BreedFilter";
import DogCard from "../components/DogCard";
import ToggleFilter from "../components/ToggleFilter";
import ChangePage from "../components/ChangePage";
import GenerateMatch from "../components/GenerateMatch";

const SearchDogs = () => {
    const [breed, setBreed] = useState([]);
    const [searchBreed, setSearchBreed] = useState([]);
    const [showDogs, setShowDogs] = useState([]);
    const [dogs, setDogs] = useState([]);
    var [filterOrder, setFilterOrder] = useState('asc');
    const [nextPage, setNextPage] = useState();
    const [prevPage, setPrevPage] = useState();
    const [goPage, setGoPage] = useState();
    const [favList, setFavList] = useState([]);

    function updateBreed( check, breedName){
        if(check && searchBreed.indexOf(breedName)===-1){
          const newBreed = [...searchBreed, breedName];
          setSearchBreed(newBreed);
        } 
        if(!check){
          setSearchBreed(old => old.filter(breed => breed !== breedName));
        }
    }

    function updateFav( like, id){
      if(like && favList.indexOf(id)===-1){
        const newList = [...favList, id];
        setFavList(newList);
      } 
      if(!like){
        setFavList(old => old.filter(ids => ids !== id));
      }
  }

    useEffect(() => {
      const fetchDogs = async () => {
        try {  
          const response = await fetch('https://frontend-take-home-service.fetch.com/dogs', {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(showDogs),
          });
  
          if (response.ok) {
            const dogObjects = await response.json();
            setDogs(dogObjects);
          } else {
            console.error('Request failed with status:', response.status);
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      };
  
      fetchDogs();
    }, [showDogs]);

    useEffect(() => {
      const fetchDogResults = async () => {
        try {
          console.log('this is my next page query ', goPage);
          const response = await fetch('https://frontend-take-home-service.fetch.com'+goPage,{
            method: 'GET',
            credentials: 'include',
          });
          if (response.ok) {
            const searchResults = await response.json();
            console.log('These are the results', searchResults);
            setShowDogs(searchResults.resultIds);
            setNextPage(searchResults.next);
            setPrevPage(searchResults.prev);
          } else {
            console.error('Request failed with status:', response.status);
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      };
  
      fetchDogResults();
    }, [goPage]);
    
    useEffect(() => {
      const fetchDogResults = async () => {
        try {
          const params = new URLSearchParams();
          searchBreed.forEach((breed) => params.append('breeds', breed));
          params.append('sort', 'breed:'+filterOrder);
          console.log('this is my query: ',params.toString());
  
          const queryString = params.toString();
          const response = await fetch(`https://frontend-take-home-service.fetch.com/dogs/search?${queryString}`,{
            method: 'GET',
            credentials: 'include',
          });
          if (response.ok) {
            const searchResults = await response.json();
            console.log('These are the results', searchResults);
            setShowDogs(searchResults.resultIds);
            setNextPage(searchResults.next);
            setPrevPage(searchResults.prev);
          } else {
            console.error('Request failed with status:', response.status);
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      };
  
      fetchDogResults();
    }, [searchBreed, filterOrder]);

    useEffect(()=>{
        const fetchBreeds = async () => {
            try {
                const response = await fetch('https://frontend-take-home-service.fetch.com/dogs/breeds', {
                    method: 'GET',
                    credentials: 'include',
                });
                if (response.ok) {
                  const breedNames = await response.json();
                  setBreed(breedNames);
                  //console.log(breedNames);
                } else {
                  console.error('Request failed with status:', response.status);
                }
              } catch (error) {
                console.error('An error occurred:', error);
              }
            };
      
          fetchBreeds();
    
    }, []);



    return (
          <>  
              <div className="flex h-13">
              <BreedFilter 
                  breed={breed}
                  searchBreed={searchBreed}
                  updateBreed={updateBreed}
                  showDogs={showDogs}
              />
              <ToggleFilter 
                setFilterOrder={setFilterOrder}
              />
              <ChangePage 
                setGoPage={setGoPage}
                nextPage={nextPage}
                prevPage={prevPage}
              />
              </div>
              <DogCard 
                dogs={dogs}
                updateFav={updateFav}
              />
              <GenerateMatch 
                favList={favList}
              />
          </>
    );
};
export default SearchDogs;
