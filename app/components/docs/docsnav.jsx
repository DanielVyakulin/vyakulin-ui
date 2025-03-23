'use client';

import { BreadCrumb, LinkV, Text } from '@/components/elements';
import { FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import clsx from 'clsx';

const DocsNav = ({ children }) => {
	return (
		<div className="docs-nav cv gap-6">
			<BreadCrumb />
			<div className="cv gap-4">
				{children}
			</div>
		</div>
	);
}

const Item = ({ children, href = '#' }) => {
	return (
		<LinkV href={href} color="wh-hover" text="btn" className="docs-nav-list-item ch">
			{children}
		</LinkV>
	);
}

const List = ({ children, title, opened = false }) => {
	const [open, setOpen] = useState(opened);

	return (
		<div className={clsx({
			[`docs-nav-list`]: true,
			[`docs-nav-list-open`]: open
		})}>
			<Text text="btn" className="docs-nav-list-title ch link-wh-hover" onClick={() => setOpen(!open)}>{title}<FaChevronRight /></Text>
			<div className="docs-nav-list-items"><div className="cv gap-2">{children}</div></div>
		</div>
	);
}

DocsNav.Item = Item;
DocsNav.List = List;

export default DocsNav;