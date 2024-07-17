import { Button } from '@/components/button/button';
import { ButtonLink } from '@/components/link/button-link';
import { SitePage } from '@/components/site/site-page';
import { classnames } from '@/utils/classnames';

const page = classnames(['flex', 'gap-[20px]', 'items-center', 'justify-center']);

export default function Home() {
  return (
    <SitePage>
      <div className={page}>
        <ButtonLink href="/new-project" size="large">
          Post a New Project
        </ButtonLink>
        <Button clear size="large">
          Find a Project
        </Button>
      </div>
    </SitePage>
  );
}
