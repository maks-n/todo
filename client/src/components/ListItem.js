import { useState } from 'react'
import ArrowIcon from './ArrowIcon'
import Modal from './Modal'

const ListItem = ({ task, getData }) => {
  const [showModal, setShowModal] = useState(false);

  const deleteItem = async() => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${task.id}`, {
        method: 'DELETE'
      });
      if (response.status === 200) {
        getData();
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <li className="list-item">

      <div className="info-container">
        <ArrowIcon/>
        <p className="task-title">{task.title}</p>
      </div>

      <div className='button-container'>
        <button className="edit" onClick={() => setShowModal(true)}>edit</button>
        <button className="delete" onClick={deleteItem}>delete</button>
      </div>
      {showModal && <Modal mode={'edit'} setShowModal={setShowModal} getData={getData} task={task}/>}
    </li>
  );
}

export default ListItem;
