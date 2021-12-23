import React from "react";
import { Container } from "semantic-ui-react";
import classNames from "classnames";
import Header from "../../components/Header";

export default function BasicLayout(props) {
  const { children, className } = props;
  const test = false;
  return (
    <Container
      fluid
      className={classNames("basic-layout", {
        [className]: className
      })}
    >
      <Header />
      <Container className="content">{children}</Container>
    </Container>
  );
}
