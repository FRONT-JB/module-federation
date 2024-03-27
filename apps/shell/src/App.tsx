import React from "react";
import ReactDOM from "react-dom/client";

import "@mf_genie/ui-kit/index.css";
import { Button, Icon } from "@mf_genie/ui-kit";
import { test } from "@mf_genie/shell-router";

test();

const App = () => (
  <div className="container">
    <div>Name: shell</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>

    <div>
      <Button>Button</Button>
    </div>

    <div>
      <Icon.Home />
    </div>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
