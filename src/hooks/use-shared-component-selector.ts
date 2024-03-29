import { useState, useEffect } from "@rbxts/react";
import { SharedComponent } from "@rbxts/shared-components-flamework";
import { UseSharedComponent } from "./use-shared-component";

export function UseSharedComponentSelector<S extends object, R>(
	selector: (state: S) => R,
	predicate?: (a: R, b: R) => boolean,
) {
	const component = UseSharedComponent() as SharedComponent<S>;
	const [selection, setSelection] = useState(() => {
		return selector(component.GetState() as S);
	});

	useEffect(() => {
		setSelection(selector(component.GetState() as S));
	}, [selector]);

	useEffect(() => {
		return component.Subscribe(selector, (newState) => setSelection(newState), predicate).Disconnect;
	}, [component]);

	return selection;
}
