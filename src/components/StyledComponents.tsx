export function Header1({ children }: { children: React.ReactNode }) {
  return <h1 className=" text-3xl text-accent-700">{children}</h1>;
}

export function Header2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className=" text-2xl text-secondary-400 font-light ">{children}</h2>
  );
}

export function Header3({ children }: { children: React.ReactNode }) {
  return <h3 className=" text-xl text-primary font-light">{children}</h3>;
}

export function Header4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className=" text-lg text-secondary-400 font-light italic">
      {children}
    </h4>
  );
}

export function Header5({ children }: { children: React.ReactNode }) {
  return (
    <h5 className=" text-base text-secondary-400 font-light italic">
      {children}
    </h5>
  );
}
export function Header6({ children }: { children: React.ReactNode }) {
  return (
    <h6 className=" text-sm text-secondary-400 font-light italic">
      {children}
    </h6>
  );
}
