import type { Episode } from "../template";
import { causalArmor } from "./causal-armor";

// Register every episode here; each becomes a composition with its slug as ID.
export const episodes: Episode[] = [causalArmor];
