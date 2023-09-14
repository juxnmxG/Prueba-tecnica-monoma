import useAuth from "../Hooks/UseAuth";
import Loading from "./Loading";

interface Props {
  Component: any;
}
function RoutePrivate({ Component }: Props) {
  const { isAuthenticate, isLoading } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticate && !isLoading) {
    window.location.href = "/auth/login";
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
