import Roact from "@rbxts/roact";
import SharedComponentContext from "./SharedComponentContext";
import { SharedComponent } from "@rbxts/shared-components-flamework";

interface SharedComponentProviderProps<S extends object> extends Roact.PropsWithChildren {
	component: SharedComponent<S>;
}

function SharedComponentProvider<S extends object>({ component, children }: SharedComponentProviderProps<S>) {
	return <SharedComponentContext.Provider value={component}>{children}</SharedComponentContext.Provider>;
}

export default SharedComponentProvider;
