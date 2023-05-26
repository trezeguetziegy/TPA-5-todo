import { useDispatch } from 'react-redux'
import { createTodoList } from '../redux/reducers/Todo'

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

const CreateTodo = () => {
    
    const dispatch = useDispatch()

    
    const CreateTodoBtn = (event) => {
        
        if ( event.type === 'click' || ( event.type === 'keydown' && event.key === 'Enter' ) ) {

            
            const InputTodo = document.querySelector("#input-create-todo").value

            let todoData = {
                id: makeid(25),
                value: InputTodo,
                checkStatus: false,
            }

            dispatch(createTodoList(todoData))
        }
    }

    return(
        <>
            <div className="d-flex justify-content-center btn-filter mt-2"></div>
            <div className="col-12 input-box d-flex">
                <input onKeyDown={ CreateTodoBtn } className="form-control me-2" id="input-create-todo"/>
                <button onClick={ CreateTodoBtn } className="btn btn-primary">Add</button>
            </div>
            
        </>
    )
}

export default CreateTodo