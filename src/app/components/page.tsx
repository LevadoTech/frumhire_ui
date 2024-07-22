'use client';

import { Button } from '@/components/button/button';
import { Card } from '@/components/card/card';
import { InputField } from '@/components/input/input-field';
import { SitePage } from '@/components/site/site-page';
import { classnames } from '@/utils/classnames';
import { useForm } from 'react-hook-form';

const form = classnames(['flex w-[100%] flex-col items-center justify-between gap-[40px]']);

const forms = classnames(['flex w-[50%] flex-col items-center justify-between gap-[40px]']);

const Components = () => {
  const f = useForm({
    defaultValues: {
      age: '2'
    }
  });

  return (
    <SitePage>
      <div className={forms}>
        <Card>
          <form
            className={form}
            onSubmit={f.handleSubmit((vals: { age: string }) => {
              console.log(vals);
            })}
          >
            <InputField
              form={f}
              id="age"
              label="שם פרטי"
              rules={{
                required: val => !!val || 'required',
                greaterThan2: val => val > 2 || 'must be greater than 2'
              }}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Card>
      </div>
    </SitePage>
  );
};

export default Components;
