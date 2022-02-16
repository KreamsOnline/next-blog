import { Fragment } from "react";
import Hero from "./hero";

export default function Layout(props) {
  return (
        <Fragment>
            <Hero />
            <main>{props.children}</main>
        </Fragment>
  );
}


