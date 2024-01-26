import { useRouter } from "next/router";
const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];
const Developer = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  let developerName = details.filter((item) => {
    if (item.id == newsId) 
    return item;
  });
  if(developerName.length==0)
  developerName=[{name:"Developer doesn't exist"}];
  return <div>{developerName.map((item)=>(<h1>{item.name}{item.role}</h1>))}</div>;
};
export default Developer;
