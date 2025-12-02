const UserAdd = ({setShowModal}) => {
    return (
        <div className="fixed inset-0 bg-black/150 flex justify-center items-center">
            <div className="bg-white p-4 rounded min-w-[500px]">
                <div className="modal-content">
                    <div className="flex justify-between items-center">
                        <h5 className="modal-title">ایجاد کاربر جدید</h5>
                        <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-lable">نام</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Name"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
};

// part 358 2:00
export default UserAdd;