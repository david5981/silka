import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <div id="sidebar">
        {/* other elements */}

        <nav>
          <ul>
            <li>
              <Link to={`users`}>users</Link>
            </li>
            <li>
              <Link to={`photos`}>Photos</Link>
            </li>
          </ul>
        </nav>

        {/* other elements */}
      </div>
    </>
  );
}