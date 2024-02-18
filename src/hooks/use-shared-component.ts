import { useContext } from "@rbxts/react";
import SharedComponentContext from "../components/SharedComponentContext";

export default function UseSharedComponent() {
	const component = useContext(SharedComponentContext);
	assert(component, "A SharedComponent must be rendered above this component to use Shared Component Hooks.");
	return component;
}
