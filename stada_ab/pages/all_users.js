import UserCard from "../components/user_card";

export default function all_users({ data }) {
  return (
    <div className="page-body user-card mt-5 mb-5">
      <h1>Alla users</h1>
      <div>
        <h4 className="mb-5">Alla städarna</h4>
        <div>
          {data.map((user) => {
            return <UserCard user={user} />;
          })}
          <hr />
        </div>
      </div>
    </div>
  );

  return (
    <div className="page-body user-card mt-5 mb-5">
      <h1>Alla users</h1>
      <UserCard />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/users");

  const { data } = await res.json();

  return {
    props: {
      data,
    },
  };
}
