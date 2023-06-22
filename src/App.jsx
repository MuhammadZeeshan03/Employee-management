
import { useState } from "react";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [employees, setEmployees] = useState([]);
  // Functoin to remove employee from list
  const handleRemoveEmployee = (index) => {
    const updatedEmployeeList = [...employees];
    updatedEmployeeList.splice(index, 1);

    setEmployees(updatedEmployeeList);
  };

  // Function to clear all fields
  const clearAll = async (e) => {

    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  }


  // Function to handle form submission
  const handleForm = async (e) => {
    e.preventDefault();

    const newEmployee = {
      firstName,
      lastName,
      email,
      phone,
    }
    setEmployees([...employees, newEmployee]);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");

  }




  return (
    <>

      {/* Navbar section */}
      <nav className="bg-blue-500 border-blue-500 dark:border-blue-g00">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center">
            <img src="/src/assets/Vector.svg" className="h-8 mr-3" alt="Sparklo logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sparkelo</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="">
              <li>
                <a href="#" className=" text-white" aria-current="page">Employee Management</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>


      {/* Form section */}
      <div className="border border-blue-500 rounded-lg px-16 py-8 m-4">
        <div className="flex flex-col items-center justify-center bg-blue-500 text-white py-2 mb-4 rounded-md">
          <h3 className="text-lg font-semibold">New Employee</h3>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="mb-2">First Name</label>
            <input type="text" id="firstName" className="px-4 py-2 border rounded-md"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="mb-2">Last Name</label>
            <input type="text" id="lastName" className="px-4 py-2 border rounded-md"
              value={
                lastName
              }
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2">Email</label>
            <input type="email" id="email" className="px-4 py-2 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2">Phone</label>
            <input type="text" id="phone" className="px-4 py-2 border rounded-md"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md"
              onClick={clearAll}
            >Clear All</button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md ml-2"
              onClick={handleForm}
            >Add</button>
          </div>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-500 text-white py-8 w-866">
        <h3 className="text-lg font-semibold text-center  text-white mb-4">Current Employees</h3>
        <div className="flex flex-col items-center">
          {employees.map((employee, index) => (
            <div key={index} className="max-w-xs bg-blue-900 rounded-lg shadow-md px-16 py-4 m-4 flex items-center mr-4">
              <div className="flex-grow mr-4 grid grid-cols-2">
                <div>
                  <h4 className="text-lg text-white font-semibold">{`${employee.firstName} ${employee.lastName}`}</h4>
                  <p className="text-white-600">{employee.email}</p>
                  <p className="text-white-600"> {employee.phone}</p>
                </div>
                <div className="flex items-center justify-end mt-auto">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-full w-full h-8 flex items-center justify-center"
                    onClick={() => handleRemoveEmployee(index)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x w-4 h-4">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </footer>








    </>

  )
}

export default App
