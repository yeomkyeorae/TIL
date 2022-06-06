import NavBar from "./NavBar";

// Layout 패턴
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{ children }</div>
    </>
  )
}