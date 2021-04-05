import React from 'react';
import { Badge, Card, CardBody } from '@windmill/react-ui';
import { Icons, Project } from '../types';
import { Icon } from './Icon';

export interface ProjectItemProps extends Project {
  isExpanded: boolean;
}

export const ProjectItem = ({
  name,
  description: { html },
  startDate,
  endDate,
}: ProjectItemProps) => (
  <Card className="border border-black shadow-md">
    <CardBody>
      <h2 className="text-xl font-semibold">{name}</h2>
      <div>
        <Badge type="neutral">{startDate}</Badge>
        <Icon iconName={Icons.chevronRight} />
        <Badge type="neutral">{endDate}</Badge>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </CardBody>
  </Card>
);
