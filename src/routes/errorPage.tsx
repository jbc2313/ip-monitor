import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div id="Error">
            <h1>Wrong Way!</h1>
            <p>Sorry, you went the wrong way, turn around while you still can!</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <button><Link to={`/`}>HOME</Link></button>
        </div>

    )

}
