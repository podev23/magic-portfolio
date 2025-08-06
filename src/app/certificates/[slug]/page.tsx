import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import { Meta, Schema, Column, Heading, Media, Text, Button, Flex } from "@once-ui-system/core";
import { baseURL, about, person, certificates } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { CustomMDX } from "@/components/mdx";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "certificates", "certs"]);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';
  const posts = getPosts(["src", "app", "certificates", "certs"]);
  const post = posts.find((p) => p.slug === slugPath);
  if (!post) return {};
  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.images?.[0] || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`,
    path: `${certificates.path}/${post.slug}`,
  });
}

export default async function Certificate({
  params
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';
  const posts = getPosts(["src", "app", "certificates", "certs"]);
  const post = posts.find((p) => p.slug === slugPath);
  if (!post) notFound();
  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="article"
        baseURL={baseURL}
        path={`${certificates.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={post.metadata.images?.[0] || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="xs" gap="16">
        <Button data-border="rounded" href="/certificates" variant="tertiary" weight="default" size="s" prefixIcon="chevronLeft">
          Zertifikate
        </Button>
        <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      </Column>
      {post.metadata.images?.length > 0 && (
        <Media
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt="image"
          src={post.metadata.images[0]}
        />
      )}
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <Flex gap="12" marginBottom="24" vertical="center">
          <Text variant="body-default-s" onBackground="neutral-weak">
            {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
          </Text>
        </Flex>
        <CustomMDX source={post.content} />
      </Column>
    </Column>
  );
}