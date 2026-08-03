declare namespace React {
  type ReactNode = any;
  type ReactElement<P = any> = any;
  type CSSProperties = Record<string, string | number | undefined>;
  type ImgHTMLAttributes<T> = Record<string, any>;
  type FormEvent<T = any> = { preventDefault(): void; currentTarget: T; target: EventTarget | null };
  type MouseEvent<T = any> = any;
  type KeyboardEvent<T = any> = any;
  type TouchEvent<T = any> = any;
  interface RefObject<T> { current: T | null }
}

declare module "react" {
  export interface Context<T> { Provider: any; __value?: T }
  export type ReactNode = React.ReactNode;
  export type ReactElement<P = any> = React.ReactElement<P>;
  export type CSSProperties = React.CSSProperties;
  export type ImgHTMLAttributes<T> = React.ImgHTMLAttributes<T>;
  export type FormEvent<T = any> = React.FormEvent<T>;
  export type MouseEvent<T = any> = React.MouseEvent<T>;
  export type KeyboardEvent<T = any> = React.KeyboardEvent<T>;
  export type TouchEvent<T = any> = React.TouchEvent<T>;
  export type RefObject<T> = React.RefObject<T>;
  export function useState<T>(initial: T | (() => T)): [T, (value: T | ((prev: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: readonly unknown[]): void;
  export function useMemo<T>(factory: () => T, deps: readonly unknown[]): T;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: readonly unknown[]): T;
  export function useRef<T>(initial: T): { current: T };
  export function useRef<T>(initial: T | null): { current: T | null };
  export function createContext<T>(defaultValue: T): Context<T>;
  export function useContext<T>(context: Context<T>): T;
  export function cloneElement(element: any, props?: any): any;
  export const Fragment: any;
  const ReactDefault: any;
  export default ReactDefault;
}

declare module "react/jsx-runtime" {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module "next" {
  export type Metadata = Record<string, any>;
  export type Viewport = Record<string, any>;
}

declare module "next/link" {
  const Link: (props: any) => any;
  export default Link;
}

declare module "next/navigation" {
  export function usePathname(): string;
}

declare module "next/server" {
  export class NextRequest extends Request { nextUrl: URL }
  export class NextResponse extends Response {
    static json(body: any, init?: ResponseInit): NextResponse;
  }
}

declare module "@fontsource-variable/inter";
declare module "*.css";

declare namespace JSX {
  interface IntrinsicElements { [elementName: string]: any }
}


declare module "node:crypto" {
  const crypto: { randomUUID(): string };
  export default crypto;
}

declare module "node:fs" {
  export const promises: {
    mkdir(path: string, options?: any): Promise<void>;
    appendFile(path: string, data: string, options?: any): Promise<void>;
  };
}

declare module "node:path" {
  const path: { join(...parts: string[]): string };
  export default path;
}

declare const process: {
  cwd(): string;
  env: Record<string, string | undefined>;
};
