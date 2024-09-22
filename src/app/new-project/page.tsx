'use client';

import { Card } from '@/components/card/card';
import { Input } from '@/components/input/input';
import { SitePage } from '@/components/site/site-page';
import { classnames } from '@/utils/classnames';
import { useState } from 'react';
import Checkbox from '@/components/checkbox/checkbox';

const form = classnames(['flex w-[100%] flex-col items-center justify-between gap-[40px]']);

const forms = classnames(['flex w-[50%] flex-col items-center justify-between gap-[40px]']);

const NewProject = () => {
  const [value, setValue] = useState('אהרון');
  const [value2, setValue2] = useState('וויינרוב');
  const [value3, setValue3] = useState<boolean>(false);
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
            <Checkbox label="exmple1" onChange={setValue3} size="small"></Checkbox>
            <Checkbox label="exmple2" onChange={setValue3} size="small"></Checkbox>
            <Checkbox label="exmple3" onChange={setValue3} size="small"></Checkbox>
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
