import "./layout.scss";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="auth_layout_container">{children}</div>;
}
