'use client';

import { Card } from '@/components/card/card';
import { SitePage } from '@/components/site/site-page';
import { classnames } from '@/utils/classnames';
import { useState } from 'react';
import RadioButton from '@/components/radioButton/radioButton';
import Checkbox from '@/components/checkBox/checkBox';
import { useForm } from 'react-hook-form';
import { InputField } from '@/components/input/input-field';
import { TextAreaField } from '@/components/text-area/text-area-field';

const formStyles = classnames(['flex w-[100%] flex-col items-center justify-between gap-[40px]']);
const wrapper = classnames(['flex w-[50%] flex-col items-center justify-center gap-[40px]']);

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectDescription: string;
};

const NewProject = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      projectDescription: ''
    }
  });

  const [checkboxValues, setCheckboxValues] = useState({
    example1: false,
    example2: false,
    example3: false
  });
  const [selectedRadio, setSelectedRadio] = useState('');

  const handleRadioChange = (value: string) => {
    setSelectedRadio(value);
  };

  const handleCheckboxChange = (name: string) => (checked: boolean) => {
    setCheckboxValues(prev => ({ ...prev, [name]: checked }));
  };

  return (
    <SitePage>
      <div className={wrapper}>
        <form
          className={formStyles}
          onSubmit={form.handleSubmit((vals: any) => {
            console.log(vals);
          })}
        >
          <Card title="פרטי קשר">
            <InputField
              id="firstName"
              label="שם פרטי"
              form={form}
              rules={{ required: val => !!val || 'שדה חובה' }}
            />
            <InputField
              id="lastName"
              label="שם משפחה"
              form={form}
              rules={{ required: val => !!val || 'שדה חובה' }}
            />

            <Checkbox
              label="example1"
              onChange={handleCheckboxChange('example1')}
              checked={checkboxValues.example1}
              size="medium"
            />
            <Checkbox
              label="example2"
              onChange={handleCheckboxChange('example2')}
              checked={checkboxValues.example2}
              size="medium"
            />
            <Checkbox
              label="example3"
              onChange={handleCheckboxChange('example3')}
              checked={checkboxValues.example3}
              size="medium"
            />

            <RadioButton
              label="example1"
              value="example1"
              checked={selectedRadio === 'example1'}
              onChange={() => handleRadioChange('example1')}
              name="radioGroup"
              size="medium"
            />
            <RadioButton
              label="example2"
              value="example2"
              checked={selectedRadio === 'example2'}
              onChange={() => handleRadioChange('example2')}
              name="radioGroup"
              size="medium"
            />
            <RadioButton
              label="example3"
              value="example3"
              checked={selectedRadio === 'example3'}
              onChange={() => handleRadioChange('example3')}
              name="radioGroup"
              size="medium"
            />
          </Card>
          <Card>
            <InputField id="email" label="מייל" form={form} />
            <InputField id="phone" label="טלפון" form={form} />
          </Card>
          <Card title="תיאור הפרויקט">
            <TextAreaField id="projectDescription" label="תספרו לנו על הפרויקט" form={form} />
          </Card>
        </form>
      </div>
    </SitePage>
  );
};

export default NewProject;
