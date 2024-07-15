import { Button } from '@/components/button/button';
import { classnames } from '@/utils/classnames';

const main = classnames(['flex', 'gap-[20px]', 'items-center', 'justify-center', 'min-h-screen']);

export default function Home() {
  return (
    <main className={main}>
      <Button size="large">Post a New Project</Button>
      <Button clear size="large">
        Find a Project
      </Button>
    </main>
  );
}
