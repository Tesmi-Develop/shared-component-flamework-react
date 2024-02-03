import { createContext } from "@rbxts/roact";
import { SharedComponent } from "@rbxts/shared-components-flamework";

const SharedComponentContext = createContext<SharedComponent<object>>(undefined!);

export default SharedComponentContext;
