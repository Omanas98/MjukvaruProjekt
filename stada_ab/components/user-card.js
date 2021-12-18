function user() {
    return (
        <div className="row user-card">
            <div className="col-11">
                <div className="row">
                    <h6 className="col-2">Namn</h6>
                    <h6 className="col-2">Efternamn</h6>
                    <h6 className="col-2">Address</h6>
                    <h6 className="col-2">Personnummer</h6>
                    <h6 className="col-2">Lösenord</h6>
                    <h6 className="col-2">Role</h6>
                </div>
            </div>
            <div className="col-1">
                <div className="row">
                    <button type="button" className="col-12 btn-danger">Ta bort</button>
                </div>
            </div>
        </div >
    )
}

export default user;