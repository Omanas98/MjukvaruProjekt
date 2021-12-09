export default function Home({ data }) {
  return (
    <h1 className="page-body text-center mt-5">
      {data.map((user) => {
        return <h1> {user.name}</h1>;
      })}
    </h1>
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
