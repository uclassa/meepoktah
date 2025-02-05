import { useConfig } from "vike-react/useConfig";

export default (pageContext) => {
  const config = useConfig();
  if (pageContext.config.styleSheet) {
    const { styleSheet } = pageContext.config;
    try {
      const styles = styleSheet.getStyleElement();
      config({
        Head: styles,
      });
    } catch (error) {
      console.log("error :", error);
    } finally {
      styleSheet.seal();
    }
  }
};
