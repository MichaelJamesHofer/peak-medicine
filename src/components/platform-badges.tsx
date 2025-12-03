'use client';

type Platform = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

const platforms: Platform[] = [
  {
    name: "YouTube",
    url: "https://youtube.com/@peakfunctionalmedicine", // Update with actual URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: "Spotify",
    url: "https://spotify.com", // Update with actual URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
  },
  {
    name: "Apple Podcasts",
    url: "https://podcasts.apple.com", // Update with actual URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M5.34 0A5.328 5.328 0 0 0 0 5.34v13.32A5.328 5.328 0 0 0 5.34 24h13.32A5.328 5.328 0 0 0 24 18.66V5.34A5.328 5.328 0 0 0 18.66 0H5.34zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.59.12 2.2.007 2.864a8.506 8.506 0 0 1-3.24 5.296c-.608.46-1.716 1.104-1.916 1.104-.096 0-.104-.2-.104-2.472v-2.472l.336-.224c1.568-1.04 2.36-3.016 1.96-4.904-.232-1.096-.824-2.016-1.744-2.72-.472-.36-1.312-.744-1.832-.832a4.792 4.792 0 0 0-3.136.448c-.8.432-1.64 1.272-2.056 2.056a4.63 4.63 0 0 0-.456 1.336c-.088.456-.104 1.4-.024 1.832.32 1.76 1.528 3.192 3.12 3.704l.336.104v2.48c0 2.464 0 2.472-.096 2.472-.056 0-.32-.104-.584-.224a9.206 9.206 0 0 1-3.672-3.264 8.698 8.698 0 0 1-1.368-3.736c-.104-.776-.072-2.272.064-3.024a8.494 8.494 0 0 1 2.8-4.904 8.456 8.456 0 0 1 3.072-1.768c.656-.224 1.616-.4 2.28-.432.2-.008.488-.016.64-.016zm.04 4.584c1.216.168 2.232.984 2.664 2.136.2.528.2 1.416.008 1.96a3.098 3.098 0 0 1-1.192 1.528l-.32.2-.024 2.792c-.024 3.04-.016 2.976-.312 3.6a2.513 2.513 0 0 1-1.16 1.152c-.344.168-.464.192-.992.192-.536 0-.64-.024-1-.2-.624-.296-1.08-.792-1.28-1.392-.088-.264-.096-.496-.12-3.32l-.024-3.04-.344-.216a3.044 3.044 0 0 1-1.16-1.504c-.168-.496-.192-1.264-.048-1.792.336-1.232 1.392-2.12 2.672-2.24.2-.016.528-.008.632.144z"/>
      </svg>
    ),
  },
];

type PlatformBadgesProps = {
  variant?: "default" | "compact" | "pill";
  className?: string;
};

export function PlatformBadges({ variant = "default", className = "" }: PlatformBadgesProps) {
  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-muted hover:text-primary transition-colors duration-200"
            aria-label={platform.name}
          >
            {platform.icon}
          </a>
        ))}
      </div>
    );
  }

  if (variant === "pill") {
    return (
      <div className={`flex flex-wrap items-center gap-2 ${className}`}>
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground-muted hover:border-primary hover:text-primary transition-all duration-200"
          >
            {platform.icon}
            <span>{platform.name}</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {platforms.map((platform) => (
        <a
          key={platform.name}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors duration-200"
        >
          <span className="group-hover:text-primary transition-colors duration-200">
            {platform.icon}
          </span>
          <span className="text-sm font-medium">{platform.name}</span>
        </a>
      ))}
    </div>
  );
}

