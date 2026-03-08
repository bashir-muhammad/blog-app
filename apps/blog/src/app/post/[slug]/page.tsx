import { urlFor } from "@/sanity/image";
import { POST_BY_SLUG_QUERY } from "@/sanity/queries";
import { POST_SLUGS_QUERY } from "@/sanity/queries";
import { sanityFetch } from "@/sanity/live";
import { client } from "@/sanity/client"; // use raw client for build-time SSG
import Image from "next/image";
import Link from "next/link";
import { RichText } from "@/components/rich-text";
import { notFound } from "next/navigation";
import { Button } from "@repo/ui/button";
import { ArrowLeft, UserPen, Calendar, CalendarCheck } from "lucide-react";
import PageTitle from "@repo/modules/modules/page-title/page-title";
import { Section, SectionContent } from "@repo/ui/section";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  try {
    const slugs: { slug: string | null }[] =
      await client.fetch(POST_SLUGS_QUERY);

    return (slugs || []).map((s) => ({ slug: s.slug as string }));
  } catch (err) {
    console.warn(
      "generateStaticParams: failed to fetch slugs, falling back to empty list",
      err,
    );
    return [];
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: POST_BY_SLUG_QUERY,
    params: { slug },
  });

  if (!post) {
    notFound();
  }

  const postTitle = post.title ?? "Untitled post";

  const breadcrumItems = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blog-page" },
  ];

  return (
    <article>
      <header>
        <PageTitle
          className=""
          title={postTitle}
          breadcrumItems={breadcrumItems}
        />

        <SectionContent>
          <div className="flex gap-4 py-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <UserPen className="h-4 w-4" />
              {post?.author?.name}
            </span>
            {post?.publishedAt && (
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString()}
              </span>
            )}
            {post?._updatedAt && (
              <span className="flex items-center gap-2">
                <CalendarCheck className="h-4 w-4" />
                {new Date(post._updatedAt).toLocaleDateString()}
              </span>
            )}
          </div>

          {post?.mainImage && (
            <div className="rounded-xs relative my-6 aspect-[21/9] w-full overflow-hidden">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post?.title ?? ""}
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          )}
        </SectionContent>
      </header>
      <Section>
        <SectionContent variant="narrow">
          <RichText data={post} />
        </SectionContent>
      </Section>
    </article>
  );
}
