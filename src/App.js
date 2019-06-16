import React from 'react';
import { useModal } from './hooks'
import CustomModal from './modal'
import UserInformation from './components/UserInformation'


const data = [
  {name:"Oyetoke Toby", age:20, job_title:"Software Engineer", country:"Nigeria", gender:"male"},
  {name:"Apata Dorcas", age:21, job_title:"Makeup Stylist", country:"Nigeria", gender:"female"},
  {name:"Jonh Doe", age:22, job_title:"Graphic Designer", country:"US", gender:"male"},
  {name:"Leke Oyetoke", age:30, job_title:"IT Manager", country:"Nigeria", gender:"male"},
]

function App() {
  const [itemModalOpen, setItemModalOpen, toggleModal] = useModal()
 
  return (
    <div className="App">
      <button onClick={toggleModal}>Show Modal</button>
      <CustomModal
          title="Item Modal"
          isActive={itemModalOpen}
          handleClose={() => setItemModalOpen(false)}
      >
        <h2>Hey Modal</h2>       
      </CustomModal>
      <UserInformation data={data} />
    </div>
  );
}

export default App;
