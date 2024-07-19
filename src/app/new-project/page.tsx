'use client';

import { Card } from '@/components/card/card';
import { Input } from '@/components/input/input';
import { SitePage } from '@/components/site/site-page';
import { classnames } from '@/utils/classnames';
import { useState } from 'react';

const form = classnames(['flex w-[100%] flex-col items-center justify-between gap-[40px]']);

const forms = classnames(['flex w-[50%] flex-col items-center justify-between gap-[40px]']);

const NewProject = () => {
  const [value, setValue] = useState('אהרון');
  const [value2, setValue2] = useState('וויינרוב');
  return (
    <SitePage>
      <div className={forms}>
        <Card title="פרטי קשר">
          <form className={form}>
            <Input
              id="firstName"
              label="שם פרטי"
              value={value}
              onChange={setValue}
              error="שדה חובה"
            />
            <Input id="lastName" label="שם משפחה" value={value2} onChange={setValue2} />
          </form>
        </Card>
        <Card>
          <form className={form}>
            <Input
              id="firstName"
              label="שם פרטי"
              value={value}
              onChange={setValue}
              error="שדה חובה"
            />
            <Input id="lastName" label="שם משפחה" value={value2} onChange={setValue2} />
          </form>
        </Card>
      </div>
    </SitePage>
  );
};

export default NewProject;
