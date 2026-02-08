type HRProps = {
  className?: string;
};

const HR = ({ className = "" }: HRProps): React.ReactElement => {
  return <hr className={`nakas-hr ${className}`} />;
};

export default HR;
