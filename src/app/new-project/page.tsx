'use client';

import { Input } from '@/components/input/input';
import { SitePage } from '@/components/site/site-page';
import { classnames } from '@/utils/classnames';
import { useState } from 'react';

const form = classnames(['flex w-[50%] flex-col items-center justify-between gap-[40px]']);

const NewProject = () => {
  const [value, setValue] = useState('hey');
  return (
    <SitePage>
      <form className={form}>
        <Input id="firstName" label="First Name" value={value} onChange={setValue} />
        <Input id="middleName" label="Middle Name" value={value} onChange={setValue} />
        <Input id="lastName" label="Last Name" value={value} onChange={setValue} />
      </form>
    </SitePage>
  );
};

export default NewProject;
