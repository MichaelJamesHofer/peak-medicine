import { SectionTitle } from "@/components/section-title";
import { MEDIA_FEATURES } from "@/data/media";
import { MediaBrowser } from "@/components/media-browser";

export default function MediaPage() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Media & features"
        title="Where to hear more from Dr. Musnick"
        description="Talks, interviews, and series that show the depth behind the Peak Functional & Sports Medicine podcast."
      />
      <MediaBrowser features={MEDIA_FEATURES} />
    </div>
  );
}
