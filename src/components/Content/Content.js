import React from 'react';
import { cn } from '@bem-react/classname';

import './Content.scss';

const cnContent = cn('Content');

const Content = () => (
  <div className={cnContent()}></div>
);

export default Content;
