import { site } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-stroke bg-bg">
      <div className="container-x flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm font-light text-muted">
          © {year} {site.name}. All rights reserved.
        </p>

        <nav aria-label="Footer" className="flex items-center gap-5">
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-muted transition-colors duration-300 hover:text-text"
          >
            Email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors duration-300 hover:text-text"
          >
            LinkedIn
          </a>
          <a
            href={site.dribbble}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors duration-300 hover:text-text"
          >
            Dribbble
          </a>
        </nav>

        <p className="text-sm font-light text-muted">
          Designed &amp; built by {site.name}
        </p>
      </div>
    </footer>
  )
}
