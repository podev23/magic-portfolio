import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

export function CertificatesList() {
  let allCertificates = getPosts(["src", "app", "certificates", "certs"]);

  const sortedCertificates = allCertificates.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {sortedCertificates.map((cert, index) => (
        <ProjectCard
          priority={index < 2}
          key={cert.slug}
          href={`certificates/${cert.slug}`}
          images={cert.metadata.images}
          title={cert.metadata.title}
          description={cert.metadata.summary}
          content={cert.content}
          avatars={[]}
          link={cert.metadata.link || ""}
        />
      ))}
    </Column>
  );
}