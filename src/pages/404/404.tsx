import { Header } from "../../components/Header/Header"
import classes from "./NotFound.module.scss"

export const NotFound = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className={classes.container}>
          <div className={classes.background}>
            <h1 className={classes.title}>404</h1>
          </div>
          <div className={classes.inner}>
            <code><span>this_page</span>.<em>not_found</em> = true;</code>
            <code><span>if</span> (<b>you_spelt_it_wrong</b>) {'{'}<span>try_again()</span>{';}'}</code>
            <code><span>else if (<b>we_screwed_up</b>)</span> {'{'}<em>alert</em>{'('}<i>"We're really sorry about that."</i>{');'}</code>
          </div>
        </div>
      </div>
    </>
  )
}