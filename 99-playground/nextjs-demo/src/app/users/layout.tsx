export default async function UsersLayout({
                                            children,
                                          }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>Users Layout</div>
      {children}
    </div>
  );
}
