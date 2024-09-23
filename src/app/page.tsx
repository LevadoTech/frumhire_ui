import { Button } from '@/components/button/button';
import { Card } from '@/components/card/card';
import Icon from '@/components/icon/icon';
import { ButtonLink } from '@/components/link/button-link';
import { classnames } from '@/utils/classnames';

const image = classnames(['block h-[100%] w-[100%]']);

const imageBlock = classnames([
  'after: relative block h-[calc(100vh_-_80px)] w-[100%] [clip-path:polygon(0%_0%,100%_0%,100%_100%,0_89%)]'
]);

const overlay = classnames([
  'absolute top-0 block flex h-[100%] w-[100%] items-center bg-[rgba(0,0,0,0.65)] text-[6rem] font-[700] text-white'
]);

const overlayText = classnames([
  'absolute right-[10%] top-[50%] flex max-w-[600px] translate-y-[-50%] transform flex-col gap-[20px] p-[40px]'
]);

const stats = classnames(['flex w-[100%] justify-center gap-[50px] p-[150px] align-middle']);

const card = classnames([
  'flex h-[160px] min-w-[350px] max-w-[400px] flex-col bg-gradient-to-tr from-special-purple to-special-purple2 text-[2.5rem] font-[700] text-white'
]);
const card2 = classnames(['!from-special-orange !to-special-orange2']);
const card3 = classnames(['!from-special-pink2 !to-special-pink']);

const title = classnames(['text-[3rem] font-[700] text-white']);

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
            פרילנס לכתחילה
            <ButtonLink clear href="/new-project" size="large">
              Find a Freelancer
            </ButtonLink>
          </div>
        </div>
      </div>
      <div className={stats}>
        <Card className={card}>
          <div className={title}>13,000</div>
          <div className="flex items-center justify-between">
            פרויקטים
            <Icon size={50} color="rgba(255,255,255,.4)" name="inbox_customize" />
          </div>
        </Card>
        <Card className={classnames([card, card2])}>
          <div className={title}>8,000</div>
          <div className="flex items-center justify-between">
            פרילנסרים
            <Icon size={50} color="rgba(255,255,255,.4)" name="inbox_customize" />
          </div>
        </Card>
        <Card className={classnames([card, card3])}>
          <div className={title}>1.2מ</div>
          <div className="flex items-center justify-between">
            פרויקטים
            <Icon size={50} color="rgba(255,255,255,.4)" name="inbox_customize" />
          </div>
        </Card>
      </div>

      <div className="flex w-[100%] justify-center gap-[20px] p-[20px] align-middle">
        <ButtonLink href="/new-project" size="large">
          Post a New Project
        </ButtonLink>
          פרויקטים 
        <Button clear size="large">
          Find a Project
        </Button>
      </div>
    </div>
  );
}
