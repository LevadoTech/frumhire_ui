import { Button } from '@/components/button/button';
import { Card } from '@/components/card/card';
import { ButtonLink } from '@/components/link/button-link';
import { SitePage } from '@/components/site/site-page';
import { classnames } from '@/utils/classnames';

const page = classnames([
  'flex h-[100vh] w-[calc(100vw_-_17px)] flex-col',
  'gap-[20px]',
  'items-center',
  'justify-center'
]);

const image = classnames(['block h-[100%] w-[100%]']);

const imageBlock = classnames([
  'after: relative block h-[calc(100vh_-_80px)] max-h-[750px] w-[100%] [clip-path:polygon(0%_0%,100%_0%,100%_100%,0_89%)]'
]);

const overlay = classnames([
  'absolute top-0 block flex h-[100%] w-[100%] items-center bg-[rgba(0,0,0,0.65)] text-[2rem] font-[700] text-white'
]);

const overlayText = classnames([
  'absolute right-[10%] top-[50%] flex w-[400px] translate-y-[-50%] transform flex-col gap-[20px] p-[40px]'
]);

const stats = classnames(['flex w-[100%] justify-center gap-[50px] p-[150px] align-middle']);

const card = classnames([
  'from-special-purple to-special-purple2 h-[160px] min-w-[350px] max-w-[400px] bg-gradient-to-tr text-[2.5rem] font-[700] text-white'
]);
const card2 = classnames(['from-special-orange to-special-orange2']);

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className={imageBlock}>
        <img
          className={image}
          src="https://super-monitoring.com/blog/wp-content/uploads/2019/07/freelancers.jpg"
          alt="freelancer"
        />
        <div className={overlay}>
          <div className={overlayText}>
            יחס אישי בלי הכאב ראש
            <ButtonLink clear href="/new-project" size="large">
              Find a Freelancer
            </ButtonLink>
          </div>
        </div>
      </div>
      <div className={stats}>
        <Card className={card}>1.2M פרויקטים</Card>
        <Card className={classnames([card, card2])}>12.5M ש"ח עברו לפרילנסרים</Card>
      </div>

      <div className="flex w-[100%] justify-center gap-[20px] p-[20px] align-middle">
        <ButtonLink href="/new-project" size="large">
          Post a New Project
        </ButtonLink>
        <Button clear size="large">
          Find a Project
        </Button>
      </div>
    </div>
  );
}
