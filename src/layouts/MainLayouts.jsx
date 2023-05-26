const MainLayouts = ({ children }) => {
    return(
        <>
            <section id="todo-list" className="container">
                <div className="row">
                    <div className="col-12">
                        { children }
                    </div>
                </div>
            </section>
            <div>
                <button type="button" className="btn btn-secondary mx-2 mr-2">
                All
                </button>
                <button type="button" className="btn btn-secondary mx-2 mr-2">
                Active
                </button>
                <button type="button" className="btn btn-secondary mx-2 mr-2">
                Complete
                </button>
            </div>
      </>
    )
}

export default MainLayouts