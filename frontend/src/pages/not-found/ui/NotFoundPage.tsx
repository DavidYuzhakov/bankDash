import { Link } from "react-router-dom"
import notFound from "../../../shared/assets/images/404.png"
import { Button } from "../../../shared/ui"

export function NotFoundPage () {
  return (
    <>
      <img className="mb-20 mx-auto" src={notFound} alt="not found" />
      <h2 className="font-semibold text-3xl text-center mb-7">Looks like you've got lost….</h2>
      <Link to="/">
        <Button text="Go back ->" />
      </Link>
    </>
  )
}