import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
    <nav>
      <ul>
      <li>
        <Link to="/api">API</Link>
      </li>
      <li>
        <Link to="/storage">Storage</Link>
      </li>
      <li>
        <Link to="/data">Data</Link>
      </li>
      </ul>
    </nav>
    </>
  )
}