
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

type ProjectCardProps = Pick<
  Project,
  "title" | "slug" | "image" | "category"
>;

export default function ProjectCard({
  title,
  slug,
  image,
  category,
}: ProjectCardProps) {
  return (
    <article className="group">
      <Link href={`/work/${slug}`} className="block">
        {image && (
          <div className="relative aspect-[8/5] overflow-hidden rounded-xl bg-gray-100">
            <Image
              src={image}
              alt={`${title} website screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600">
              {title}
            </h3>

            {category && (
              <p className="mt-1 text-sm text-gray-500">
                {category}
              </p>
            )}
          </div>

          <span
            aria-hidden="true"
            className="text-xl text-gray-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          >
            ↗
          </span>
        </div>
      </Link>
    </article>
  );
}
