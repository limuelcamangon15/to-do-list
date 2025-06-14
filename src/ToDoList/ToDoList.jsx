import style from './ToDoList.module.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenClip, faCheck, faSquareCheck, faSquare } from '@fortawesome/free-solid-svg-icons'

export default function ToDoList(prop){
    let araw = prop.arr;
    
    const [editIndex, setEditIndex] = useState(null);

    const removeThisTask = (i) => {
        araw.splice(i,1);

        console.log(araw);
        prop.deleteTask(araw);
    }

    const showEditField = (i) => {
        i === editIndex ? setEditIndex(null) : setEditIndex(i);
    }

    const toggleTaskStatus = (i) => {
       const updatedStatus = {
            ...araw[i],
            status: !araw[i].status
       }
       
        prop.updateTask(i,updatedStatus);
    }

   //pareho gagana pero eto pang DSA halimaw hahahaha
    /*const removeThisTask = (i) => {
      for(let x = 0; x < araw.length; x++){
        if(x === i){
            for(let y = i; y < araw.length; y++){
                if(y !== araw.length-1){
                    araw[y] = araw[y+1];    
                }
                else{
                    araw.length = araw.length-1;
                }
            }
        }
    }
      console.log(araw);
      prop.deleteTask(araw);
    }*/
    
    const tasks = araw.map((task, index) => 
            <li className={style.items} key={index}>
                <div className={`${style.container}  ${task.status ? style.darken : ''}`}>

                    <div className={`${style.checkBox} ${task.status ? style.repaintIcon : ''}`}
                        onClick={() => toggleTaskStatus(index)}>
                        <FontAwesomeIcon icon={task.status ? faSquareCheck : faSquare}/>
                    </div>

                    <span className={style.task}> 
                        <pre className={`${style.taskValue} ${editIndex === index ? style.hideMe : ''}`}>
                            {task.taskName}
                        </pre>
                        
                        <input className={`${style.editField} ${editIndex === index ? style.showMe : '' }`}
                               type="text" 
                               value={task.taskName} 
                               onChange={(e) => prop.updateTask(index, {...task ,taskName: e.target.value})}
                        />
                    </span>
                            
                    <span className={style.actionButton}> 
                        <span className={style.editButton} onClick={() =>  showEditField(index)}>
                            <FontAwesomeIcon icon={editIndex === index ? faCheck : faPenClip}/>
                        </span>

                        <span className={style.deleteButton} onClick={() => removeThisTask(index)}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </span>
                    </span>

                </div> 
            </li>   
        );


    return(      
            <ul className={style.taskList} type="none">
                {tasks}
            </ul>    
    );
}