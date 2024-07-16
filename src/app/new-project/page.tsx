'use client';

import { Input } from '@/components/input/input';
import { SitePage } from '@/components/site-page';
import { useState } from 'react';

const form = `
flex
flex-col
gap-[20px]
items-center justify-between
`;

const NewProject = () => {
  const [value, setValue] = useState('hey');
  return (
    <SitePage>
      <form className={form}>
        <Input value={value} onChange={setValue} />
        <Input value={value} onChange={setValue} />
        <Input value={value} onChange={setValue} />
        <Input value={value} onChange={setValue} />
      </form>
    </SitePage>
  );
};

export default NewProject;
