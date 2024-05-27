'use client';

import type { FC } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { cn } from '@repo/utils';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { GithubIcon } from '@storybook/icons';
import type { DocsVersion } from '@repo/utils';
import { StorybookLogo } from '../logos/storybook';
import { Search } from './search';
import { MobileMenu } from './mobile-menu';
import { Submenu } from './submenu';
import { Button } from './button';

interface TreeMetaProps {
  title: string;
  sidebar?: {
    title?: string;
    order?: number;
  };
  tab?: {
    title?: string;
    order?: number;
  };
  isTab?: boolean;
}

interface TreeProps extends TreeMetaProps {
  name: string;
  slug: string;
  pathSegment: string;
  type: 'directory' | 'link' | 'tab';
  children?: TreeProps[];
}
export interface HeaderProps {
  variant?: 'home' | 'system';
  tree?: TreeProps[];
  activeVersion?: DocsVersion;
  githubCount?: number;
}

export const Header: FC<HeaderProps> = ({
  variant = 'home',
  tree,
  activeVersion,
  githubCount = 0,
}) => {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        'ui-w-full ui-relative ui-z-50',
        variant === 'home' && 'ui-border-b ui-border-white/20',
        variant === 'system' &&
          'ui-sticky ui-top-0 ui-z-40 ui-backdrop-blur ui-bg-white/60 dark:ui-bg-slate-950/80 lg:ui-border-b lg:ui-border-black/5 dark:ui-border-slate-800',
      )}
    >
      <div className="ui-mx-auto ui-max-w-8xl">
        <div
          className={cn(
            'ui-h-18 ui-py-4 ui-px-4 sm:ui-px-8 md:ui-px-8 lg:ui-border-0 ui-flex ui-items-center ui-justify-between',
            variant === 'system' &&
              'ui-border-b ui-border-zinc-200 dark:ui-border-zinc-700',
          )}
        >
          <div className="ui-flex ui-items-center ui-gap-6">
            <Link
              className="ui-pl-2 md:ui-px-3 ui-h-8 ui-flex ui-items-center"
              href="/"
            >
              <StorybookLogo color={variant === 'home' ? 'white' : 'system'} />
            </Link>
            <NavigationMenu.Root className="max-[920px]:ui-hidden">
              <NavigationMenu.List className="ui-flex ui-gap-2">
                <Button
                  active={pathname === '/docs'}
                  href="/docs"
                  variant={variant}
                >
                  Docs
                </Button>
                <Button external href="/integrations" variant={variant}>
                  Addons
                </Button>
                <Button external href="/showcase" variant={variant}>
                  Showcase
                </Button>
                <Button external href="/blog" variant={variant}>
                  Blog
                </Button>
                <Button
                  external
                  externalIcon
                  href="https://www.chromatic.com/storybook?utm_source=storybook_website&utm_medium=link&utm_campaign=storybook"
                  variant={variant}
                >
                  Visual Test
                </Button>
                <Button
                  external
                  externalIcon
                  href="https://www.chromatic.com/sales?utm_source=storybook_website&utm_medium=link&utm_campaign=storybook"
                  variant={variant}
                >
                  Enterprise
                </Button>
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </div>
          <div className="ui-flex ui-gap-4">
            <a
              aria-label="Star Storybook on GitHub"
              className={cn(
                'ui-h-8 ui-flex ui-items-center ui-justify-center ui-border ui-rounded-full ui-transition-colors max-[440px]:ui-hidden ui-px-3 ui-gap-2',
                githubCount === 0 && 'w-8 px-0',
                variant === 'home' &&
                  'ui-border-white/30 hover:ui-border-white ui-text-white',
                variant === 'system' &&
                  'ui-border ui-border-zinc-200 dark:ui-border-slate-700 ui-text-zinc-500 dark:ui-text-white',
              )}
              href="https://github.com/storybookjs/storybook"
              rel="noreferrer noopener"
              target="_blank"
            >
              <GithubIcon />
              {githubCount > 0 && (
                <span
                  className={cn(
                    'ui-text-xs ui-font-bold',
                    variant === 'home' && 'ui-text-white',
                    variant !== 'home' &&
                      'ui-text-slate-600 dark:ui-text-white',
                  )}
                >
                  {githubCount.toLocaleString('en-US')}
                </span>
              )}
            </a>
            <Search variant={variant} />
          </div>
          <MobileMenu variant={variant} />
        </div>
        {pathname.startsWith('/docs') && (
          <Submenu
            activeVersion={activeVersion}
            tree={tree}
            variant={variant}
          />
        )}
      </div>
    </header>
  );
};
