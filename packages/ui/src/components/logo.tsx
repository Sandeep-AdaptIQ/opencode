import { type ComponentProps } from "solid-js"

/** Branding removed — mark/splash/logo render nothing. */
export const Mark = (_props: { class?: string }) => null

export const Splash = (_props: Pick<ComponentProps<"svg">, "ref" | "class">) => null

export const Logo = (_props: { class?: string }) => null
