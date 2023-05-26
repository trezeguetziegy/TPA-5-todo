    import MainLayouts from "./layouts/MainLayouts"
    import ListComponent from "./components/ListComponent"
    import CreateTodo from "./components/CreateTodo"
    

    import { useSelector, useDispatch } from 'react-redux'
    import { useEffect } from "react"
    import { deleteTodoList, addCheckListTodoList, updateTodoList } from "./redux/reducers/Todo"

    const App = () => {
        const TodoListData = useSelector(state => state.Todo.TodoList)
        const dispatch = useDispatch()

        useEffect(() => {
            
        }, [])

        useEffect(() => {
            console.log(TodoListData)
        }, [TodoListData])

        const DeleteData = (id) => {
            let newDataTodo = [] 
            TodoListData.map(e => { if ( e.id !== id ) newDataTodo.push(e) }) 
            dispatch(deleteTodoList(newDataTodo)) 
        }

        const CheckListData = (id, statusChecked) => {
            let newDataTodo = [] 
            let getFilteredDataById = TodoListData.filter(e => { if ( e.id === id ) return e }) 
            TodoListData.map(e => { if ( e.id !== id ) newDataTodo.push(e) }) 

            let changeDataById = {
                id: id,
                value: getFilteredDataById[0].value,
                checkStatus: statusChecked,
            }

            newDataTodo.push(changeDataById) 
            dispatch(addCheckListTodoList(newDataTodo)) 
        }

        const EditListData = (id, fullData, editValueData) => {
            let newDataTodo = []
            TodoListData.map(e => { if ( e.id !== id ) newDataTodo.push(e) })

            let newDataPassing = {
                id: fullData.id,
                value: editValueData,
                checkStatus: fullData.checkStatus
            }

            newDataTodo.push(newDataPassing)
            dispatch(updateTodoList(newDataTodo))
        }

        return(
            <>
                <MainLayouts>
                    <section className="row input-todo">
                        <div className="col-12 title-box py-4 text-center">
                            <h1>What's plan for today?</h1>
                        </div>
                        <CreateTodo />
                    </section>

                    <section className="row list-todo py-4">
                        {
                            TodoListData.map((e, i) => {
                                return(
                                    <ListComponent
                                        key={ i }
                                        valueData={ e.value }
                                        idData={ e.id }
                                        deleteBtn={ DeleteData }
                                        checkedBtn={ CheckListData }
                                        fullData={ e }
                                        editBtn={ EditListData }
                                    />
                                )
                            })
                        }
                    </section>
                </MainLayouts>
            </>
        )
    }

    export default App