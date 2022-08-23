import { Theme } from "@youngagency/young-ui";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    layout: "light" | "dark";
  }
}
