import { Text, LinkV } from '@/components/elements';
import { FaCircleArrowUp } from 'react-icons/fa6';

const Nav = ({ children }) => {
  return (
    <div className="nav cv gap-4">
      {children}
      <LinkV href="#" color="wh-hover" text="p" className="gap-2">Scroll to top <FaCircleArrowUp /></LinkV>
    </div>
  );
}

const Title = ({ children }) => {
  return (
    <Text text="h3" className="nav-title">{children}</Text>
  );
}

const List = ({ children }) => {
  return (
    <div className="nav-list cv gap-2">{children}</div>
  );
}

const Item = ({ children, href = '#' }) => {
  return (
    <LinkV 
      href={href} 
      color="wh-hover" 
      text="p"
    >
      {children}
    </LinkV>
  );
}

Nav.Title = Title;
Nav.List = List;
Nav.Item = Item;

export default Nav;