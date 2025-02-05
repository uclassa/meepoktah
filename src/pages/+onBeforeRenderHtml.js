import { ServerStyleSheet } from "styled-components";

export default (pageContext) => {
  pageContext.config.styleSheet = new ServerStyleSheet();
};
