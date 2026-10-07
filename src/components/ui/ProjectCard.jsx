export default function ProjectCard({ project }) {
  return (
    <div className="rounded-xl border bg-white dark:bg-surface-800 p-5 hover:shadow-lg hover:border-accent-500/50 transition-all duration-200">
      <h3 className="font-semibold text-surface-900 dark:text-surface-100">{project?.title ?? 'Project Title'}</h3>
      <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">{project?.description ?? 'Project description coming soon.'}</p>
    </div>
  );
}
