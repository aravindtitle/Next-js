import { useRouter } from "next/router";

const details = [
  { id: "1", name: "Yash", role: "Senior Developer" },
  { id: "2", name: "Vaibhav", role: "Backend Developer" },
  { id: "3", name: "Suresh", role: "Frontend Developer" },
];

const AboutUs = () => {
  const router = useRouter();

  const handleDeveloperClick = (id) => {
    router.push(`/aboutus/${id}`);
  };

  return (
    <div>
      <h1>Developers</h1>
      <ul>
        {details.map((member) => (
          <li key={member.id}>
            <button onClick={() => handleDeveloperClick(member.id)}>
              {member.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutUs;
