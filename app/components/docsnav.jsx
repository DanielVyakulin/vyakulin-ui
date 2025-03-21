import { Text, BreadCrumb, LinkV } from './elements';

const DocsNav = ({ children }) => {
	return (
		<div className="docs-nav cv gap-2">
			<BreadCrumb />
			<div className="docs-nav-items cv">
				{children}
			</div>
		</div>
	);
}

const Item = ({ children, href = '#' }) => {
	return (
		<LinkV href={href} color="bl" text="btn" background className="docs-nav-item ph-2 pv-2">
			{children}
		</LinkV>
	);
}

const List = ({ children }) => {
	return (
		<div className="docs-nav-item-list ph-2 pv-1 t-h3">
			{children}
		</div>
	);
}

DocsNav.Item = Item;
DocsNav.List = List;

export default DocsNav;