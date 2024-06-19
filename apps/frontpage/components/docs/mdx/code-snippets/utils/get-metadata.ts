import fs from 'node:fs';
import type { CodeSnippetsProps, DocsVersion } from '@repo/utils';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
// eslint-disable-next-line import/no-named-as-default -- TODO: Check if this is a bug
import rehypePrettyCode from 'rehype-pretty-code';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { rehypePrettyCodeOptions } from '../../../../../lib/rehype-pretty-code-options';

interface MetadataProps {
  path: string | undefined;
  activeVersion: DocsVersion;
}

export const getMetadata = async ({ path, activeVersion }: MetadataProps) => {
  // Read the content of the MD file
  const source = await fs.promises.readFile(
    `${process.cwd()}/content/snippets/${activeVersion.id}/${path}`,
    'utf8',
  );

  // Parse the content into a syntax tree
  const tree = unified().use(remarkParse).parse(source);

  // Traverse the syntax tree and find the code blocks
  const codeBlocks = [];
  for (const node of tree.children) {
    if (node.type === 'code') {
      // For each code block, create an object with a `code` property
      codeBlocks.push(node);
    }
  }

  // Transform the code blocks using remarkRehype
  const content: CodeSnippetsProps[] = await Promise.all(
    codeBlocks.map(async (block) => {
      // We are bringing back the necessary values to render the code block
      const valueWithBackticks = `\`\`\`${block.lang}\n${block.value}\n\`\`\``;
      const result = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypePrettyCode, rehypePrettyCodeOptions as never)
        .use(rehypeStringify)
        .process(valueWithBackticks);

      const matches = block.meta?.match(/(?<temp2>\w+)="(?<temp1>[^"]*)"/g);

      // console.log(path, 'matches', matches);
      // -> init-command.md matches [ 'renderer="common"', 'language="js"', 'packageManager="npx"' ]

      const metadata: Record<string, string> = {};

      if (matches) {
        matches.forEach((match) => {
          // TODO: Based on the console.log above, the match is a string, not an array
          const [key, value] = match
            .split('=')
            .map((part) => part.replace(/"/g, ''));
          metadata[key] = value;
        });
      }

      console.log(metadata);

      return {
        language: block.lang || undefined,
        ...metadata,
        raw: block.value,
        content: result.value,
      };
    }),
  );

  return content;
};
