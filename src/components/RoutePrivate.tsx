import useAuth from "../Hooks/UseAuth";

interface Props {
  Component: any;
}
function RoutePrivate({ Component }: Props) {
  const { isAuthenticate, isLoading } = useAuth();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!isAuthenticate && !isLoading) {
    console.log(isAuthenticate);
    window.location.href = "/auth/login"
  }

  if (isAuthenticate && !isLoading) {
    return (
      <div>
        <Component />
      </div>
    );
  }
}

export default RoutePrivate;
