import UserCard from "../components/user-card";

function all_users() {
    return (
        <div className="page-body user-card mt-5 mb-5">
            {/*Iterera alla städare här*/}
            <div>
                <h4 className="mb-5">Alla städarna</h4>
                <div>
                    <UserCard />
                    <hr />
                </div>
            </div>

            {/*Iterera alla vanliga användare/kunder */}
            <div>
                <h4 className="mb-5">Alla kunder</h4>
                <div>
                    <UserCard />
                    <hr />
                </div>
            </div>
        </div >
    );
}

export default all_users;