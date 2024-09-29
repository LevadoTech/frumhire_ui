'use client';

import { Card } from '@/components/card/card';
import { Input } from '@/components/input/input';
import { SitePage } from '@/components/site/site-page';
import { classnames } from '@/utils/classnames';
import { useState } from 'react';
import RadioButton from '@/components/radioButton/radioButton';
import Checkbox from '@/components/checkBox/checkBox';

const form = classnames(['flex w-[100%] flex-col items-center justify-between gap-[40px]']);

const forms = classnames(['flex w-[50%] flex-col items-center justify-between gap-[40px]']);

const NewProject = () => {
  const [value, setValue] = useState('אהרון');
  const [value2, setValue2] = useState('וויינרוב');
  const [value3, setValue3] = useState<boolean>(false);
  const [selectedRadio, setSelectedRadio] = useState('');

  const handleRadioChange = (value: string) => {
    setSelectedRadio(value);
  };
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
            <RadioButton
              label="example1"
              value="example1"
              checked={selectedRadio === 'example1'}
              onChange={handleRadioChange}
              name="radioGroup"
              size="small"
            />
            <RadioButton
              label="example2"
              value="example2"
              checked={selectedRadio === 'example2'}
              onChange={handleRadioChange}
              name="radioGroup"
              size="small"
            />
            <RadioButton
              label="example3"
              value="example3"
              checked={selectedRadio === 'example3'}
              onChange={handleRadioChange}
              name="radioGroup"
              size="small"
            />
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
