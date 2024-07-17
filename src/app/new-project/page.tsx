'use client';

import { Input } from '@/components/input/input';
import { SitePage } from '@/components/site/site-page';
import { classnames } from '@/utils/classnames';
import { useState } from 'react';

const form = classnames(['flex w-[50%] flex-col items-center justify-between gap-[40px]']);

const NewProject = () => {
  const [value, setValue] = useState('אהרון');
  const [value2, setValue2] = useState('וויינרוב');
  return (
    <SitePage>
      <form className={form}>
        <Input id="firstName" label="שם פרטי" value={value} onChange={setValue} error="שדה חובה" />
        <Input id="lastName" label="שם משפחה" value={value2} onChange={setValue2} />
      </form>
    </SitePage>
  );
};

export default NewProject;
