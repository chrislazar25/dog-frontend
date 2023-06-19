
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';

function GenerateMatch(prop) {
    const [show, setShow] = useState(false);
    const [match, setMatch] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [dog, setDog] = useState(null);

    useEffect(() => {
      const fetchDog = async () => {
        try {
          const response = await fetch("https://frontend-take-home-service.fetch.com/dogs", {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([match]),
          });
  
          if (response.ok) {
            const dogObjects = await response.json();
            if (dogObjects.length > 0) {
              // Assuming the API returns an array of dog objects, extract the first dog
              setDog(dogObjects[0]);
            } else {
              // Handle the case when the dog is not found
              setDog(null);
            }
            console.log(dogObjects[0].name);
          } else {
            console.error("Request failed with status:", response.status);
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      };
  
      fetchDog();
    }, [match]);

    useEffect(() => {
        const fetchMatch = async () => {
          try {
            const dogIds = prop.favList;
            const response = await fetch('https://frontend-take-home-service.fetch.com/dogs/match', {
              method: 'POST',
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(dogIds),
            });
    
            if (response.ok) {
              const matchData = await response.json();
              setMatch(matchData.match);
              console.log(matchData.match);
            } else {
              console.error('Match request failed with status:', response.status);
            }
          } catch (error) {
            console.error('An error occurred:', error);
          }
        };
    
        fetchMatch();
      }, [show]);
  
    return (
    <>
        <div className="d-grid gap-2">
                <button
                    className="block mx-auto m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleShow}
                >
                    Generate Match!
                </button>
        </div>
        <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Meet Your Match!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {dog?
                        <div className="min-width-[350px] max-width-[350px] m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                            <img 
                                className="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" 
                                src={dog.img}
                                alt="Dog Pic!"
                            />
                            <div className="text-center space-y-2 sm:text-left">
                                <div className="space-y-0.5">
                                    <p className="text-lg text-black font-semibold">
                                        {dog.name}
                                    </p>
                                    <p className="text-slate-500 font-medium">
                                        A {dog.age} year old {dog.breed} from {dog.zip_code}!
                                    </p>
                                </div>
                            </div>
                        </div>
                    :
                        <h3>Heart a few dogs!</h3>
                    }
                </Modal.Body>
            <Modal.Footer>
                <button
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleClose}
                >
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

export default GenerateMatch;