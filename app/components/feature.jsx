import { Text } from './elements';

const Feature = ({ children, icon }) => {
  return (
    <div className="feature ch gap-4">
      <div className="feature-icon">
        {icon}
      </div>
      <div className="feature-text cv gap-1">
        {children}
      </div>
    </div>
  );
}

const Title = ({ children }) => {
  return (
    <Text text="h3">{children}</Text>
  );
}

const Description = ({ children }) => {
  return (
    <Text text="p">{children}</Text>
  );
}

Feature.Title = Title;
Feature.Description = Description;

export default Feature;