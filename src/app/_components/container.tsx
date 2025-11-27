type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div
      className="
        
        mx-auto 
        px-5 
        py-10
        bg-background 
        text-foreground
      "
    >
      {children}
    </div>
  );
};

export default Container;
