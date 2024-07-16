import { Button } from '@/components/button/button';
import { Link } from '@/components/link/link';
import { classnames } from '@/utils/classnames';

const page = classnames(['flex', 'gap-[20px]', 'items-center', 'justify-center']);

export default function Home() {
  return (
    <div className={page}>
      <Link href="/new-project" size="large">
        Post a New Project
      </Link>
      <Button clear size="large">
        Find a Project
      </Button>
    </div>
  );
}
