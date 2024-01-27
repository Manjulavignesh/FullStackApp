import Link from "next/link";
const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];
const AboutAs = () => {
  return (
    <>
      <ul>
        <h1>AboutAs Page</h1>
      </ul>
      {details.map((item) => (
        <li>
          <Link href={`http://localhost:3000/aboutas/${item.id}`}>
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );
};
export default AboutAs;
