import React from 'react';
import { Icons } from '../../types';
import { ChevronRight, ChevronLeft } from './svgs';

export interface IconProps {
  iconName: Icons;
}

const svgSelector = (name: Icons) => {
  const options = {
    [Icons.chevronRight]: ChevronRight,
    [Icons.chevronLeft]: ChevronLeft,
    default: () => (
      <div className="text-red-700">
        Icon <strong className="font-bold">{name}</strong> not found
      </div>
    ),
  };

  return options[name] || options.default;
};

export const Icon = ({ iconName }: IconProps) => {
  const CustomIcon = svgSelector(iconName);
  return <CustomIcon />;
};
