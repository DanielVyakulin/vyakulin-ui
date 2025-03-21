import { Text } from './elements';

const Feature = ({ title = "", children, icon = {}}) => {
  return (
    <div className="feature ch gap-4">
      <div className="feature-icon">
        {icon}
      </div>
      <div className="feature-text cv gap-1">
        <Text text="h3">{title}</Text>
        <Text text="p">{children}</Text>
      </div>
    </div>
  );
}

export default Feature;