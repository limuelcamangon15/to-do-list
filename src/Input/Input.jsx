import React, {useState} from 'react'
import style from './Input.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarning, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Input({addTask, tasks}){
    const [text, setText] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);
    const [placeholder, setPlaceholder] = useState('Add your first task here...');

    const errorPopup = <div className={style.errorDiv}>
                            <FontAwesomeIcon icon={faWarning}/> 
                            
                            <strong>Empty Input: You cannot add an empty task.</strong>
                        </div>;

    const updatePlaceholder = () => {
        tasks.length < 3 ?
            setPlaceholder(`i love you so muchhh bebecakes ko! <3`) 
            :
            setPlaceholder(`Wow you're so productive, I'm so proud of you!`) 
    }
    
    function saveText(e){
        setText(e.target.value);
    }

    const handleSubmit = () => {
        if(text.trim() !== ''){
            updatePlaceholder();
            addTask(text);
            setText('');
            setErrorMessage(false);
        }
        else{
            setTimeout(() => {
                setErrorMessage(false);
            }, 3000);

            setErrorMessage(true);
        }
    }

    const handleKeyDown = (e) => {
        if(e.key == 'Enter'){
            handleSubmit();
        }
    }


    return(
        <div className={style.inputDiv}>
            {errorMessage ? errorPopup : null}

            <div className={style.fields}>
                <input className={style.inputField}
                type="text"
                placeholder={placeholder}
                value={text}
                onChange={saveText}
                onKeyDown={(e) => handleKeyDown(e)}
                />
                
                <button onClick={() => handleSubmit()}>Add Task</button>
            </div>
        </div>
    );
}