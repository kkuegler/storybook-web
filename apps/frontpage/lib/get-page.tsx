import fs from 'node:fs';
import rehypePrettyCode from 'rehype-pretty-code';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import type { DocsVersion } from '@repo/utils';
import { extractHeadings } from 'extract-md-headings';
import {
  CodeSnippets,
  Callout,
  YouTubeCallout,
  FeatureSnippets,
  HomeConcepts,
  HomeResources,
  HomeRenderers,
  Video,
  Pre,
  List,
  Img,
  If,
  UnorderedList,
  Hr,
  P,
  A,
  H4,
  H3,
  H2,
  H1,
} from '../components/docs/mdx';
import { firefoxThemeLight } from '../components/docs/mdx/code-snippets/themes/firefox-theme-vscode';
import { generateDocsTree } from './get-tree';

const rehypePrettyCodeOptions = {
  theme: firefoxThemeLight,
};

export const getPageData = async (
  path: string[],
  activeVersion: DocsVersion,
) => {
  const rootPath = 'content/docs';
  const pathString = path.join('/');
  const indexPathMDX = `content/docs/${pathString}/index.mdx`;
  const indexPathMD = `content/docs/${pathString}/index.md`;

  const mdxPath = `${rootPath}/${pathString}.mdx`;
  const mdPath = `${rootPath}/${pathString}.md`;

  const isMdx = fs.existsSync(mdxPath);
  const isMd = fs.existsSync(mdPath);

  let linkPath = null;
  if (isMdx) linkPath = mdxPath;
  if (isMd) linkPath = mdPath;

  const isIndexMDX = fs.existsSync(indexPathMDX);
  const isIndexMD = fs.existsSync(indexPathMD);
  const isLink = linkPath ? fs.existsSync(linkPath) : false;

  let newPath = null;
  if (isIndexMDX) newPath = indexPathMDX;
  if (isIndexMD) newPath = indexPathMD;
  if (isLink) newPath = linkPath;

  if (!newPath) return undefined;

  const file = await fs.promises.readFile(
    `${process.cwd()}/${newPath}`,
    'utf8',
  );

  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: file,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [
          rehypeSlug,
          [rehypePrettyCode, rehypePrettyCodeOptions] as never,
        ],
        format: 'mdx',
      },
    },
    components: {
      h1: H1,
      h2: H2,
      h3: H3,
      h4: H4,
      a: A,
      p: P,
      hr: Hr,
      ul: UnorderedList,
      li: List,
      pre: Pre,
      details: () => <details>Hello world</details>,
      img: (props) => <Img activeVersion={activeVersion.id} {...props} />,
      Video: (props) => <Video activeVersion={activeVersion.id} {...props} />,
      CodeSnippets: (props) => (
        <CodeSnippets activeVersion={activeVersion} {...props} />
      ),
      Callout,
      If,
      IfRenderer: If,
      YouTubeCallout,
      FeatureSnippets,
      // TODO: These three should be imported in the necessary MDX file(s)
      HomeRenderers,
      HomeConcepts,
      HomeResources,
    },
  });

  const headings = extractHeadings(`${process.cwd()}/${newPath}`);

  // Get Tabs
  const pathToFiles = isLink
    ? `${rootPath}/${pathString}`.split('/').slice(0, -1).join('/')
    : `${rootPath}/${pathString}`;

  const parent = generateDocsTree(pathToFiles);

  const sorted = parent.sort((a, b) =>
    a.tab?.order && b.tab?.order ? a.tab.order - b.tab.order : 0,
  );

  const index = sorted.find((item) => item.name === 'index.mdx');

  return {
    ...frontmatter,
    tabs: index?.isTab ? parent : [],
    content,
    headings,
  };
};
