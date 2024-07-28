'use client';

import { Card } from '@/components/card/card';
import { SitePage } from '@/components/site/site-page';
import { classnames } from '@/utils/classnames';
import { useForm } from 'react-hook-form';
import { InputField } from '@/components/input/input-field';
import { TextAreaField } from '@/components/text-area/text-area-field';

const formStyles = classnames(['flex w-[100%] flex-col items-center justify-between gap-[40px]']);

const wrapper = classnames(['flex w-[50%] flex-col items-center justify-center gap-[40px]']);

const NewProject = () => {
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      projectDescription: ''
    }
  });

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
            <InputField
              id="email"
              label="מייל"
              form={form}
              rules={{ required: val => !!val || 'שדה חובה' }}
            />
            <InputField
              id="phone"
              label="טלפון"
              form={form}
              rules={{ required: val => !!val || 'שדה חובה' }}
            />
          </Card>
          <Card title="תיאור הפרויקט">
            <TextAreaField
              id="projectDescription"
              label="תספרו לנו על הפרויקט"
              form={form}
              rules={{ required: val => !!val || 'שדה חובה' }}
            />
          </Card>
        </form>
      </div>
    </SitePage>
  );
};

export default NewProject;
