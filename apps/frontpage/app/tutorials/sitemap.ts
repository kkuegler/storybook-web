import { type MetadataRoute } from 'next';
import { fetchExternalSitemap } from '../../lib/fetch-external-sitemap';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { sites, error } = await fetchExternalSitemap(
    'https://storybook.js.org/tutorials/sitemap/sitemap-0.xml',
  );

  if (error) throw new Error(error);

  return sites;
}
