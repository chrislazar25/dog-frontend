import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function BreedFilter(props) {
  const breed = props.breed;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        onClick={() => setIsModalOpen(true)}
        className="w-64 p-4 shadow rounded bg-white text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer"
      >
        Breeds
        <div>
          {isModalOpen ? (
            <div>
              <svg
                width={10}
                height={6}
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z"
                  fill="#1F2937"
                />
              </svg>
            </div>
          ) : (
            <div>
              <svg
                width={10}
                height={6}
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z"
                  fill="#1F2937"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
      <Modal show={isModalOpen} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Select Breeds</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            id="filter-form"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(props.searchBreed);
              console.log(props.showDogs);
            }}
          >
            <div className="breed">
              {breed.map((b) => {
                return (
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                      <div className="pl-4 flex items-center">
                        <div className="bg-gray-100 dark:bg-gray-800 border rounded-sm border-gray-200 dark:border-gray-700 w-3 h-3 flex flex-shrink-0 justify-center items-center relative">
                          <input
                            type="checkbox"
                            className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                            onChange={(e) => {
                              props.updateBreed(e.target.checked, b);
                            }}
                          />
                          <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                            <svg
                              className="icon icon-tabler icon-tabler-check"
                              xmlns="http://www.w3.org/2000/svg"
                              width={12}
                              height={12}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M5 12l5 5l10 -10" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-sm leading-normal ml-2 text-gray-800">
                          {b}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={handleCloseModal}
            variant="primary"
            type="submit"
            className="text-xs bg-purple-100 hover:bg-purple-200 rounded-md mt-6 font-medium py-2 leading-3 text-purple-700"
          >
            Search
          </Button>
        </Modal.Footer>
      </Modal>
      <style>
        {`.checkbox:checked + .check-icon {
          display: flex;
        }`}
      </style>
    </div>
  );
}

export default BreedFilter;
