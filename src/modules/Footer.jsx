import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { ReactComponent as IconDots } from '../static/icons/ico-dots.svg';
import { ReactComponent as IconMap } from '../static/icons/ico-map.svg';
import { ReactComponent as IconChat } from '../static/icons/ico-chat.svg';
import { ReactComponent as IconProfile } from '../static/icons/ico-profile.svg';

export default function Footer() {
  const navClass = classNames('w-1/4', 'text-center');
  const iconClass = (isActive) =>
    classNames(['w-full', 'h-5', isActive ? 'fill-zinc-700' : 'fill-zinc-400']);

  return (
    <nav className="flex flex-nowrap items-center fixed inset-x-0 bottom-0 h-[70px] bg-white border-t">
      <NavLink to="/screenings" className={navClass}>
        {({ isActive }) => <IconDots className={iconClass(isActive)} />}
      </NavLink>
      <NavLink to="/browse" className={navClass}>
        {({ isActive }) => <IconMap className={iconClass(isActive)} />}
      </NavLink>
      <NavLink to="/chat" className={navClass}>
        {({ isActive }) => <IconChat className={iconClass(isActive)} />}
      </NavLink>
      <NavLink to="/profile" className={navClass}>
        {({ isActive }) => <IconProfile className={iconClass(isActive)} />}
      </NavLink>
    </nav>
  );
}
