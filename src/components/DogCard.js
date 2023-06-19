import '../index.css';
import Dog from './Dog';


function DogCard(props) {
  return (
    <div className="App" >
        <>
          <div className='flex flex-wrap justify-center'>
            {props.dogs.map((dog) => {
              return(
                  <Dog
                    key = {dog.id}
                    id = {dog.id} 
                    name = {dog.name}
                    breed={dog.breed}  
                    img={dog.img}
                    age={dog.age}
                    zip_code={dog.zip_code}
                    updateFav={props.updateFav}
                  />
              );
            })}
          </div>
        </>
    </div>
  );
}

export default DogCard;