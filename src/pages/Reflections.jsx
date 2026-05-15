import { Section } from '../components/Section.jsx';

const mentors = [
  {
    name: 'Prof. Yue-Jiao Gong (龚月姣)',
    title: 'My Supervisor | Greatest Women Scientist',
    href: 'https://scholar.google.com/citations?user=Mi0Zu3IAAAAJ&hl=zh-CN',
  },
  {
    name: 'Richard S. Sutton',
    title: 'ACM Turing Award | Father of RL',
    href: 'http://www.incompleteideas.net/',
  },
  {
    name: 'Prof. Shaohua TANG (唐韶华)',
    title: 'Who taught me how to learn | 1970-2020, RIP',
    href: 'https://www2.scut.edu.cn/cs_en/_t239/2017/0621/c6854a169355/page.psp',
  },
];

export function Reflections() {
  return (
    <div className="page-shell">
      <Section eyebrow="Reflections" title="Reflections">
        <div className="text-card rich-text reflection-intro">
          <p>I will “irregularly” update here some brain-storm results of my own. This includes the comments on latest papers & techniques, the impressive memories & stories in my life so far, and more importantly, the INCOMPLETE IDEAs.</p>
          <p>Three scientists to whom I want to express the deepest gratitude for enlighting the path of my research career.</p>
        </div>
      </Section>

      <Section eyebrow="Gratitude" title="Three scientists">
        <div className="card-grid three-featured">
          {mentors.map((mentor) => (
            <a className="mentor-card" key={mentor.name} href={mentor.href} target="_blank" rel="noreferrer">
              <span>{mentor.name.slice(0, 1)}</span>
              <h3>{mentor.name}</h3>
              <p>{mentor.title}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section eyebrow="May 1st, 2026" title="Your Potential is Infinite">
        <div className="text-card rich-text reflection-essay">
          <p>To kick start this blog section, I will share an intersting stories from my teenage years.</p>
          <p>When I was about 13 years old, my parent, in particular, my father, often supervised me in doing some Olympic math competition questions, because winning a gold medal in the competition could directly qualify me for the most famous high school recommendation. However, at that time, although I did show some talent in mathematics, I was still just a mischievous little boy, thinking about playing with friends every day and obsessed with playing table tennis and basketball.</p>
          <p>At the beginning, things went relatively smoothly because the questions my father gave me were relatively simple. As the difficulties increased, it became much harder to solve those puzzles without certain preparation. One day, my father gave me a question about graph, which was indeed a challenge for me. I spent about half an hour for this question, however, leaving the answer blankly at last.</p>
          <p>As expected, my father scolded me, indicating that I should not play with friends all the time, but should calm down and study some useful knowledge. I was deeply depressed and cried a lot. Surprisingly, the miracle happened the moment I cried. Somehow, my mind suddenly began to self-organize the mathematical knowledge I had learned before, and the solution for that question came out naturally.</p>
          <p>I am now 31 years old, however, I still can not figure out what happend then. Nevertheless, this impressive memory may reveals a valuable insight of our human beings: In extreme conditions, our potential may be infinite and we should never let ourselves trapped in so called "comfortable zone".</p>
        </div>
      </Section>

      <Section eyebrow="Upcoming" title="Future Updates">
        <div className="list-card">
          <p><strong>May 15th, 2026</strong> TBD.</p>
          <p><strong>May 30th, 2026</strong> TBD.</p>
        </div>
      </Section>
    </div>
  );
}
