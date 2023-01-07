import { Outlet, Link } from "react-router-dom";

export default function Root() {

    return (
        <div>
            <nav id="AppNav">
                <ul>
                    <li><Link to={`vitedefault`}>Vite Default</Link></li>
                    <li><Link to={`cameraone`}>Camera 1</Link></li>
                    <li><Link to={`cameratwo`}>Camera 2</Link></li>
                </ul>
            </nav>
            <div id="AppBody">
                <Outlet />
            </div>
        </div>
    )

}
