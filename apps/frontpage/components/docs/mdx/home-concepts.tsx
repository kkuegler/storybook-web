import Image from 'next/image';
import Link from 'next/link';

export function HomeConcepts() {
  return (
    <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2">
      <Card
        content="A story captures the rendered state of a UI component. Each component can have multiple stories, where each story describes a different component state."
        href="/docs/writing-stories"
        logo="icon-story.svg"
        title="Stories"
      />
      <Card
        content="Storybook can analyze your components to automatically create documentation alongside your stories. This automatic documentation makes it easier for you to create UI library usage guidelines, design system sites, and more."
        href="/docs/writing-docs"
        logo="icon-docs.svg"
        title="Docs"
      />
      <Card
        content="Stories are a pragmatic starting point for your UI testing strategy. You already write stories as a natural part of UI development, so testing those stories is a low-effort way to prevent UI bugs over time."
        href="/docs/writing-tests"
        logo="icon-testing.svg"
        title="Testing"
      />
      <Card
        content="Publishing your Storybook allows you to share your work with others. You can also embed your stories in places like Notion or Figma."
        href="/docs/sharing"
        logo="icon-sharing.svg"
        title="Sharing"
      />
    </div>
  );
}

function Card({
  href,
  logo,
  title,
  content,
}: {
  href: string;
  logo: string;
  title: string;
  content: string;
}) {
  return (
    <Link
      className="gap-3 p-6 transition-all border rounded-md border-slate-200 hover:border-slate-300 hover:-translate-y-px dark:border-slate-700 dark:hover:border-slate-600"
      href={href}
    >
      <div className="flex items-center gap-4 mb-4">
        <Image alt="" height="20" src={`/images/icons/${logo}`} width="20" />
        <h3 className="font-bold text-black dark:text-white text-md">
          {title}
        </h3>
      </div>
      <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
        {content}
      </p>
    </Link>
  );
}
