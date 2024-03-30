import { PageProps } from "$fresh/server.ts";
import Menu from "../components/Menu.tsx";

export default function Layout({ Component, state }: PageProps) {
  return (
    <div class="layout">
      <div class="header">
        <Menu />
      </div>
      <Component />
    </div>
  );
}
