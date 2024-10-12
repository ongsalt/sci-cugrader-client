import type { Icon } from "lucide-svelte"
import type { ComponentType } from "svelte"

export type MenuAction = {
    name: string,
    icon: ComponentType<Icon>
    action: () => unknown,
    type?: "normal" | "destructive" 
}
