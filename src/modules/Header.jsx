import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { ReactComponent as IconNotificaiton } from '../static/icons/ico-bell.svg';
import { ReactComponent as IconCross } from '../static/icons/ico-cross.svg';

export default function Header() {
  const iconClass = (isActive) =>
    classNames(
      'w-full',
      isActive ? 'fill-zinc-700' : 'fill-zinc-400',
      isActive ? 'stroke-zinc-700' : 'stroke-zinc-400'
    );

  const settingsIconClass = (isActive) =>
    classNames(
      iconClass(isActive),
      'inline-block',
      'align-top',
      isActive ? 'stroke-zinc-700' : 'stroke-zinc-400'
    );

  return (
    <header className="flex justify-between px-8 h-[70px] items-center">
      <NavLink to="/notifications">
        {({ isActive }) => (
          <IconNotificaiton className={`h-5 ${iconClass(isActive)}`} />
        )}
      </NavLink>
      <NavLink to="/profile">
        {({ isActive }) => (
          <IconCross className={`h-3 ${settingsIconClass(isActive)}`} />
        )}
      </NavLink>
    </header>
  );
}
