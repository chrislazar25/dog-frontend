
import '../index.css';
import Employee from '../components/Employee';
import { useState } from 'react';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';

function Employees() {
  console.log("This is how we implement logic");
  const showEmployee = true;
  const [role, setRole] = useState('CEO');

  function updateEmployee(id, newName, newRole){
      const newEmployees = employees.map((emp)=>{
            if(emp.id === id ){
              return {...emp, name:newName, role:newRole};
            }
            return emp;
      });

      setEmployees(newEmployees);
  }

  function addEmployee(newName, newRole, newUrl){
        const newId = employees.length+1;
        const newEmployee = {
          id: newId,
          name: newName,
          role: newRole,
          img: newUrl
        };

        setEmployees([...employees, newEmployee]);

  }

  var [employees, setEmployees] = useState([
    {id:1, name: "Zebra", role: "SDE1", img: "https://images.pexels.com/photos/750539/pexels-photo-750539.jpeg"},
    {id:2, name: "Hen", role: "SDE1", img: "https://images.pexels.com/photos/1405930/pexels-photo-1405930.jpeg"},
    {id:3, name: "Cat", role: "SDE2", img: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg"},
    {id:4, name: "Dog", role: "SDE3", img: "https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg"},
    {id:5, name: "Bat", role: role, img: "https://images.pexels.com/photos/3261020/pexels-photo-3261020.jpeg"},
    {id:6, name: "Rat", role: "Client", img: "https://images.pexels.com/photos/51340/rat-pets-eat-51340.jpeg"},
    {id:7, name: "Snake", role: "CEO", img: "https://images.pexels.com/photos/7382071/pexels-photo-7382071.jpeg"},
  ]);
  return (
    <div className="App" >
     
      {showEmployee ? (
        <>
          <input type='text' onChange={(e)=>{
            console.log(e.target.value);
            setRole(e.target.value);
          }} />
          <div className='flex flex-wrap justify-center'>
            {employees.map((e) => {
              const editEmployee = <EditEmployee 
                                      name={e.name} 
                                      id={e.id} 
                                      role={e.role} 
                                      updateEmployee={updateEmployee}
                                    />
              return(
                  <Employee
                    key = {e.id}
                    id = {e.id} 
                    name={e.name} 
                    role={e.role} 
                    img={e.img}
                    editEmployee={editEmployee}
                  />
              );
            })}
          </div>
          <AddEmployee addEmployee={addEmployee}/>
          
        </>
      ):(
        <p>
          You dont have authorization to see employees</p>
      )}
        
    </div>
  );
}

export default Employees;
