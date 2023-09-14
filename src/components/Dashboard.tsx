import Header from "./Header";

interface Props {
  children: any;
}
function Dashboard({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Dashboard;
