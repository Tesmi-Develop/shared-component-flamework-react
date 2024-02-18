import { createContext } from "@rbxts/react";
import type { SharedComponent } from "@rbxts/shared-components-flamework";

const SharedComponentContext = createContext<SharedComponent<object>>(undefined!);

export default SharedComponentContext;
