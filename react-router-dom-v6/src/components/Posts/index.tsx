import {
  Outlet,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

export const Posts = () => {
  const params = useParams();
  const { state } = useLocation();
  const [qs] = useSearchParams();
  ("");
  const decideUserPostMessage = (): string => {
    if (Object.keys(params).length == 0) {
      return ":::Posts::: Try to type a search param around the link, like: ?page=1000";
    } else if (Object.keys(params).length == 1 && params.id) {
      return `ID of the searched Post: ${params.id}`;
    }
    return "We only accept pure /posts or /posts/some-id where 'some-id' is a number";
  };
  const getQueryString = (): string => {
    const receivedQueryString: string = qs.toString();
    return receivedQueryString
      ? "Query string typed :: " + receivedQueryString
      : "";
  };
  const getQueryStringValues = (): string => {
    const params = Object.fromEntries(qs.entries());
    return Object.keys(params).length > 0
      ? "Values from your search string :: " + Object.values(params).join()
      : "";
  };
  return (
    <div
      style={{
        marginTop: "20%",
        fontSmooth: "4px",
        fontStyle: "oblique",
      }}
    >
      <h1>{decideUserPostMessage()}</h1>
      <br />
      <h2>{getQueryString()}</h2>
      <br />
      <h3>{getQueryStringValues()}</h3>
      <br />
      {state && <p>You came from pathname: {state}</p>}
      <Outlet />
    </div>
  );
};
