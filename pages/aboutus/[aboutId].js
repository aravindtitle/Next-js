import { useRouter } from "next/router";

const details = [
  { id: "1", name: "Yash", role: "Senior Developer" },
  { id: "2", name: "Vaibhav", role: "Backend Developer" },
  { id: "3", name: "Suresh", role: "Frontend Developer" },
];

const AboutUs = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the details of the team member with the provided id
  const member = details.find((member) => member.id === id);

  return (
    <div>
      {member ? (
        <div>
          <h1>{member.name}</h1>
          <p>{member.role}</p>
        </div>
      ) : (
        <p>Developer doesn't exist</p>
      )}
    </div>
  );
};

export default AboutUs;
