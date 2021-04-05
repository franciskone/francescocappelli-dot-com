import React from 'react';
import { ProjectItem, ProjectItemProps } from './ProjectItem';
import { Story } from '@storybook/react';

const Template: Story<ProjectItemProps> = (args) => <ProjectItem {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  name: 'Galline slot machine app',
  description: {
    html:
      '<p>Mobile App for a specific Slot machine game; the application is in charge of managing the user authentication, showing ‘support’, ‘game instructions’ pages and launching the HTML game in a webview using the session from the authenticated user.</p><p></p><p>1. Postmessage based communication between app and webview (HTML game)</p><p>2. Custom orientation management</p><p>3. Multilanguage</p><p>4. Geolocation usage to prevent user to play outside of Italy (required by Italian laws)</p><p>5. Worked together with native developers to build custom native modules (Orientation, Adobe target sdk)</p><p>6. Force / Suggest update in-app modal, based on app version vs app store version</p>',
  },
  startDate: '2017-02-01',
  endDate: '2017-08-31',
};

export default {
  title: 'ProjectItem',
  component: ProjectItem,
};
