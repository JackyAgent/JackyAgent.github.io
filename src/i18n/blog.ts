import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './ui';

/** 从内容集合 id（形如 `zh/hello-world`）中解析出语言前缀。 */
export function getBlogLang(id: string): Lang {
  const prefix = id.split('/')[0];
  return prefix === 'en' ? 'en' : 'zh';
}

/** 去掉语言前缀，得到干净的文章 slug（形如 `hello-world`）。 */
export function getBlogSlug(id: string): string {
  return id.replace(/^(zh|en)\//, '');
}

/** 获取指定语言、非草稿、按发布时间倒序排列的文章列表。 */
export async function getPostsByLang(lang: Lang): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection(
    'blog',
    ({ id, data }) => getBlogLang(id) === lang && !data.draft
  );
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
