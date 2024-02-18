import React from "@rbxts/react";
import SharedComponentContext from "./SharedComponentContext";
import { SharedComponent } from "@rbxts/shared-components-flamework";

interface SharedComponentProviderProps<S extends object> extends React.PropsWithChildren {
	component: SharedComponent<S>;
}

export function SharedComponentProvider<S extends object>({ component, children }: SharedComponentProviderProps<S>) {
	return <SharedComponentContext.Provider value={component}>{children}</SharedComponentContext.Provider>;
}
