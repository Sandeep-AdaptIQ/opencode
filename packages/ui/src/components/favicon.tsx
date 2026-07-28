import { Link, Meta } from "@solidjs/meta"

export const Favicon = () => {
  return (
    <>
      <Link rel="icon" href="data:," />
      <Meta name="apple-mobile-web-app-title" content="App" />
    </>
  )
}
