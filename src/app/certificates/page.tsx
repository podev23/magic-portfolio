import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, certificates } from "@/resources";
import { CertificatesList } from "@/components/certificates/CertificatesList";

export async function generateMetadata() {
  return Meta.generate({
    title: certificates.title,
    description: certificates.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(certificates.title)}`,
    path: certificates.path,
  });
}

export default function CertificatesPage() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={certificates.path}
        title={certificates.title}
        description={certificates.description}
        image={`/api/og/generate?title=${encodeURIComponent(certificates.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <CertificatesList />
    </Column>
  );
}